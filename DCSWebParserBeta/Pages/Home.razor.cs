using DCSWebParserBeta.Export;
using DCSWebParserBeta.Objects;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Forms;
using Microsoft.JSInterop;
using System.Text;
using System.Xml.Linq;

namespace DCSWebParserBeta.Pages
{
	public partial class Home
	{
		[Inject]
		public required NavigationManager NavigationManager { get; set; }
		private IBrowserFile? _dcsFile = null;
		private Settings _settings = new Settings();
		private readonly string _filePath = "resources";
		private readonly string _mtdefFileName = "T2unicMTD.mtdef";
		private string _statusMessage = String.Empty;
		private int _maxLines = 400000;
		private string _errorMessage = String.Empty;
		private double _percentageUploaded = 0;

		// Control variables
		bool chkLineNumbers = true;
		bool chk24Hours = true;
		bool chkShowRawData = false;
		bool chkShowSystemMessages = true;
		bool chkTIM = true;
		bool chkTICO = true;
		bool chkAPS = true;
		bool chkDarkMode = false;
		private TimeOnly _beginTime = new TimeOnly(0, 0, 0, 0, 0);
		private TimeOnly _endTime = new TimeOnly(23, 59, 59, 999);
		string txtFilename = "test";
		string cboOutputFile = "HTML";
		string txtStartHour = "00";
		string txtStartMinute = "00";
		string txtEndHour = "23";
		string txtEndMinute = "59";

		private async Task OnParseClick()
		{
			if (_dcsFile == null) return;

			try
			{
				UpdateSettings();

				// Load mtdef file
				HttpClient client = new HttpClient();
				Stream stream = await client.GetStreamAsync(_filePath + "/" + _mtdefFileName);
				MtDef.LoadXDocument(XDocument.Load(stream));

				ReportOutput.ParseBeginTime = DateTime.Now;
				MemoryStream outputStream = await ParseDCSFile();
				ReportOutput.ParseEndTime = DateTime.Now;

				// Save file
				ReportOutput.ExportBeginTime = DateTime.Now;
				using DotNetStreamReference streamRef = new DotNetStreamReference(stream: outputStream);
				await JS.InvokeVoidAsync("downloadFileFromStream", GetOutputFileName(), streamRef);
				ReportOutput.ExportEndTime = DateTime.Now;

				// Redirect to report page
				NavigationManager.NavigateTo("report");
			}
			catch (Exception ex)
			{
				ReportOutput.ErrorMessage = ex.Message;
				_errorMessage = "Error: " + ex.Message;
			}
		}

		private string GetOutputFileName()
		{
			switch (cboOutputFile.ToString())
			{
				case "HTML":
					return txtFilename + ".html";
				case "Text":
				default:
					return txtFilename + ".txt";
			}
		}

		private void OnFileSelectionChange(InputFileChangeEventArgs e)
		{
			_dcsFile = e.File;

			/*string fileName = Path.GetFileNameWithoutExtension(e.File.Name);

			switch (cboOutputFile.ToString())
			{
				case "HTML":
					txtFilename = fileName + ".html";
					break;
				case "Text":
				default:
					txtFilename = fileName + ".txt";
					break;
			}*/
		}

		private async Task LoadFile(InputFileChangeEventArgs e)
		{
			IBrowserFile file = e.File;

			using var readStream = file.OpenReadStream(file.Size);

			var bytesRead = 0;
			var totalRead = 0;
			byte[] buffer = new byte[file.Size];

			MemoryStream dcsStream = new MemoryStream(buffer);

			while ((bytesRead = await readStream.ReadAsync(buffer)) != 0)
			{
				totalRead += bytesRead;

				await dcsStream.WriteAsync(buffer, 0, bytesRead);
				//progressPercent = Decimal.Divide(totalRead, file.Size);
				StateHasChanged();
			}
		}

		private async Task<MemoryStream> ParseDCSFile()
		{
			//FileUploadProgress fileProgress;
			Encoding encoding = Encoding.UTF8;
			long maxSize = _dcsFile.Size;
			byte[] buffer = new byte[maxSize];
			string file = string.Empty;
			IExport fileExport;

			await _dcsFile.OpenReadStream(maxSize).ReadAsync(buffer);

			MemoryStream dcsStream = new MemoryStream(buffer);

			using (StreamReader streamReader = new StreamReader(dcsStream, Encoding.UTF8, true, (int)maxSize))
			{
				string? line;
				int currentLine = 0;
				int lineNumber = 1;
				int startHour = Convert.ToInt32(txtStartHour);
				int startMinute = Convert.ToInt32(txtStartMinute);
				int endHour = Convert.ToInt32(txtEndHour);
				int endMinute = Convert.ToInt32(txtEndMinute);

				switch (cboOutputFile.ToString())
				{
					case "Text":
						fileExport = new TextExport(_settings);
						break;
					case "HTML":
					default:
						fileExport = new HtmlExport(_settings);
						break;
				};

				file = fileExport.BeginFile();

				try
				{
					while ((line = await streamReader.ReadLineAsync()) != null)
					{
						Event dcsEvent = new Event(line, lineNumber);
						DateTime startTime = new DateTime(dcsEvent.TimeStamp.Year, dcsEvent.TimeStamp.Month, dcsEvent.TimeStamp.Day, startHour, startMinute, 00, 000);
						DateTime endTime = new DateTime(dcsEvent.TimeStamp.Year, dcsEvent.TimeStamp.Month, dcsEvent.TimeStamp.Day, endHour, endMinute, 59, 999);

						if (dcsEvent.TimeStamp > endTime) break;

						if (dcsEvent.TimeStamp >= startTime && dcsEvent.TimeStamp <= endTime)
						{
							if (dcsEvent.IsHexData)
							{
								Event decryptedEvent = MtDef.DecryptLine(dcsEvent.Data, lineNumber++);

								if (decryptedEvent.IsError) ReportOutput.TotalNumberOfParsingErrors++;

								file += fileExport.ParseLine(decryptedEvent) + Environment.NewLine;

								continue;
							}

							if (dcsEvent.IsRawData && !_settings.ShowRawData) continue;
							if (dcsEvent.IsSystemMessage && !_settings.ShowSystemMessages) continue;

							file += fileExport.ParseLine(dcsEvent) + Environment.NewLine;
							lineNumber++;
						}

						ReportOutput.TotalNumberOfLines++;
						if (currentLine++ > _maxLines && _maxLines > 0) break;
					}
				}
				catch (IOException ex)
				{
					ReportOutput.ErrorMessage = ex.Message;
					_statusMessage = ex.Message;
				}
			}

			file += fileExport.EndFile();

			MemoryStream fileMemoryStream = new MemoryStream(encoding.GetByteCount(file));

			using StreamWriter htmlStreamWriter = new StreamWriter(fileMemoryStream, encoding, -1, true);

			htmlStreamWriter.Write(file);
			htmlStreamWriter.Flush();

			fileMemoryStream.Position = 0;

			return fileMemoryStream;
		}

		private void UpdateSettings()
		{
			_settings.ShowLineNumbers = chkLineNumbers;
			_settings.ShowTimeStampAs24Hours = chk24Hours;
			_settings.ShowRawData = chkShowRawData;
			_settings.ShowSystemMessages = chkShowSystemMessages;
			_settings.ShowTIM = chkTIM;
			_settings.ShowTICO = chkTICO;
			_settings.ShowAPS = chkAPS;
			_settings.IsDarkMode = chkDarkMode;
			_settings.StartHour = _beginTime.Hour;
			_settings.StartMinute = _beginTime.Minute;
			_settings.EndHour = _endTime.Hour;
			_settings.EndMinute = _endTime.Minute;
		}
	}
}
