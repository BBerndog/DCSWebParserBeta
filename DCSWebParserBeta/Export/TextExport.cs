using DCSWebParserBeta.Objects;

namespace DCSWebParserBeta.Export
{
	public class TextExport : IExport
	{
		private Settings _settings;

		public TextExport(Settings settings)
		{
			_settings = settings;
		}

		public string BeginFile()
		{
			return string.Empty;
		}

		public string ParseLine(Event dcsEvent)
		{
			string text = string.Empty;

			if (dcsEvent.LineNumber != -1 && _settings.ShowLineNumbers)
			{
				text += string.Format("{0, 7}", dcsEvent.LineNumber) + " ";
			}

			if (dcsEvent.IsDecrypted)
			{
				text += dcsEvent.Data;

				return text;
			}

			if (dcsEvent.TimeStamp != DateTime.MinValue)
			{
				if (_settings.ShowTimeStampAs24Hours)
				{
					text += "[" + dcsEvent.TimeStamp.ToString("yyyy-MM-dd HH:mm:ss.fff") + "] ";
				}
				else if (dcsEvent.TimeStamp != DateTime.MinValue)
				{
					text += "[" + dcsEvent.TimeStamp.ToString("yyyy-MM-dd hh:mm:ss.fff tt") + "] ";
				}
			}
			else
			{
				text += "   ";
			}

			if (dcsEvent.Controller != string.Empty) text += dcsEvent.Controller;
			if (dcsEvent.EventType != string.Empty) text += dcsEvent.EventType;

			if (dcsEvent.IsSystemMessage)
			{
				text += dcsEvent.Data;
			}
			else
			{
				text += " " + dcsEvent.Data;
			}

			return text;
		}

		public string EndFile()
		{
			return string.Empty;
		}
	}
}
