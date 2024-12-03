using System.Text.RegularExpressions;

namespace DCSWebParserBeta.Objects
{
	public class Event
	{
		public static Dictionary<string, string> ControllerList = new Dictionary<string, string>();
		private static int _previousRawData = 0;
		public long LineNumber { get; set; } = -1;
		public DateTime TimeStamp { get; set; } = DateTime.MinValue;
		public string Controller { get; set; } = String.Empty;
		public string EventType { get; set; } = String.Empty;
		public bool IsEmptyBracket { get; set; } = false;
		public string Data { get; set; } = String.Empty;
		public bool IsEventExtension { get; set; } = false;
		public bool IsSystemMessage { get; set; } = false;
		public bool IsMagneticMessage { get; set; } = false;
		public bool IsHexData { get; set; } = false;
		public bool IsRawData { get; set; } = false;
		public bool IsEmbeddedLTDMessage { get; set; } = false;
		public bool IsDecrypted { get; set; } = false;
		public bool IsError { get; set; } = false;

		public Event() { }

		public Event(string line, long lineNumber)
		{
			LineNumber = lineNumber;
			Parse(line);
		}

		public void Parse(string line)
		{
			try
			{
				int openMarker = 25;
				int closeMarker = 25;
				int index = 0;

				if (line.Substring(0, 1) != "[")
				{
					Data = line;
					IsSystemMessage = true;
				}
				else
				{
					TimeStamp = GetDateTimeFromString(line.Substring(1, 23));
				}

				index = line.IndexOf('[', openMarker);

				while (closeMarker != -1)
				{
					closeMarker = line.IndexOf(']', openMarker);
					string value = line.Substring(openMarker + 1, closeMarker - openMarker - 1);

					if (value.IndexOf('-') != -1)
					{
						Controller = value;
					}
					else if (value.Length == 1)
					{
						EventType = value;
					}
					else if (value.Length == 0)
					{
						IsEmptyBracket = true;
					}

					openMarker = closeMarker + 1;

					if (openMarker >= line.Length || line.Substring(openMarker, 1) != "[")
					{
						break;
					}
				}

				if (Controller == String.Empty || IsEmptyBracket) IsSystemMessage = true;

				if (line.IndexOf("StationType=TICO") != -1)
				{
					AddStationType("TICO");
					IsEmbeddedLTDMessage = true;
				}
				else if (line.IndexOf("StationType=TIM") != -1)
				{
					AddStationType("TIM");
					IsEmbeddedLTDMessage = true;
				}
				else if (line.IndexOf("StationType=APS") != -1)
				{
					AddStationType("APS");
					IsEmbeddedLTDMessage = true;
				}
				else if (line.Contains("Magnetic Message"))
				{
					IsMagneticMessage = true;
				}
				else
				{
					Match match = Regex.Match(line, "[A-F0-9]{2}  [0-9]{2},*");

					if (match.Success) IsHexData = true;

					match = Regex.Match(line, @"000 001.*");

					if (match.Success)
					{
						IsRawData = true;
						_previousRawData = 1;
					}
					else if (_previousRawData > 0 && _previousRawData < 4)
					{
						IsRawData = true;
						_previousRawData++;
					}
					else
					{
						_previousRawData = 0;
					}
				}

				Data = line.Substring(openMarker);
			}
			catch (Exception ex)
			{
				string error = ex.Message;
				IsError = true;
			}
		}

		public string Render()
		{
			return String.Empty;
		}

		#region Private Methods
		private DateTime GetDateTimeFromString(string timeStamp)
		{
			int year = Convert.ToInt32(timeStamp.Substring(0, 4));
			int month = Convert.ToInt32(timeStamp.Substring(5, 2));
			int day = Convert.ToInt32(timeStamp.Substring(8, 2));
			int hour = Convert.ToInt32(timeStamp.Substring(11, 2));
			int minute = Convert.ToInt32(timeStamp.Substring(14, 2));
			int second = Convert.ToInt32(timeStamp.Substring(17, 2));
			int millisecond = Convert.ToInt32(timeStamp.Substring(20, 3));

			DateTime timestamp = new DateTime(year, month, day, hour, minute, second, millisecond);

			return timestamp;
		}

		private void AddStationType(string stationType)
		{
			if (Controller != String.Empty) ControllerList.TryAdd(Controller, stationType);
		}
		#endregion
	}
}
