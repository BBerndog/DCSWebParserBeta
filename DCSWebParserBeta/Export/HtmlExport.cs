using DCSWebParserBeta.Objects;

namespace DCSWebParserBeta.Export
{
	public class HtmlExport : IExport
	{
		private Settings _settings;

		public HtmlExport(Settings settings)
		{
			_settings = settings;
		}

		public string BeginFile()
		{
			string html = "<html>";
			html += "<head><title>DCS Web Parser v1.0</title></head>" + Environment.NewLine;
			html += "<style>" + Environment.NewLine;
			html += " div { white-space: nowrap; }" + Environment.NewLine;
			html += " .container { display: flex; }" + Environment.NewLine;
			html += " .tooltip { position: relative; display: inline-block; border-bottom: 1px dotted green; }" + Environment.NewLine;
			html += " .tooltip .tooltiptext { visibility: hidden; width: 200px; background-color: gray; color: #fff; text-align: center; border-radius: 5px; padding: 5px 0; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -60px; opacity: 0; transition: opacity 0.3s; }" + Environment.NewLine;
			html += " .tooltip:hover .tooltiptext { visibility: visible; opacity: 1; }" + Environment.NewLine;

			if (_settings.IsDarkMode)
			{
				html += " html {background-color: black }" + Environment.NewLine;
				html += " .lineNumber { color: " + _settings.LineNumberDarkColor + "; }" + Environment.NewLine;
				html += " .timestamp { color: " + _settings.TimeStampDarkColor + "; }" + Environment.NewLine;
				html += " .system { color: " + _settings.SystemMessageDarkColor + "; }" + Environment.NewLine;
				html += " .magnetic { font-weight: bold; color: " + _settings.MagneticMessageDarkColor + "; }" + Environment.NewLine;
				html += " .decrypted { font-weight: bold; color: " + _settings.DecryptedDarkColor + "; }" + Environment.NewLine;
				html += " .eventType { color: " + _settings.EventTypeDarkColor + "; }" + Environment.NewLine;
				html += " .data { color: white; }";
			}
			else
			{
				html += " .lineNumber { color: " + _settings.LineNumberLightColor + "; }" + Environment.NewLine;
				html += " .timestamp { color: " + _settings.TimeStampLightColor + "; }" + Environment.NewLine;
				html += " .system { color: " + _settings.SystemMessageLightColor + "; }" + Environment.NewLine;
				html += " .magnetic { font-weight: bold; color: " + _settings.MagneticMessageLightColor + "; }" + Environment.NewLine;
				html += " .decrypted { font-weight: bold; color: " + _settings.DecryptedLightColor + "; }" + Environment.NewLine;
				html += " .eventType { color: " + _settings.EventTypeLightColor + "; }";
			}

			html += "</style>" + Environment.NewLine;
			html += "<body style=\"font-family: courier new;font-size: " + _settings.FontSize.ToString() + "\">";

			return html;
		}

		public string ParseLine(Event dcsEvent)
		{
			string html = "<div class=\"container\">";

			if (dcsEvent.LineNumber != -1 && _settings.ShowLineNumbers)
			{
				html += "<div class=\"lineNumber\">" + string.Format("{0, 7}", dcsEvent.LineNumber).Replace(" ", "\u00A0") + "&nbsp;</div>";
			}

			if (dcsEvent.TimeStamp != DateTime.MinValue)
			{
				html += "<div class=\"timestamp\">[";

				if (_settings.ShowTimeStampAs24Hours)
				{
					html += dcsEvent.TimeStamp.ToString("yyyy-MM-dd HH:mm:ss.fff");
				}
				else if (dcsEvent.TimeStamp != DateTime.MinValue)
				{
					html += dcsEvent.TimeStamp.ToString("yyyy-MM-dd hh:mm:ss.fff tt");
				}

				html += "]</div>";
			}

			if (dcsEvent.IsDecrypted)
			{
				html += "<div class=\"decrypted\">" + dcsEvent.Data + "</div></div>";

				return html;
			}

			if (dcsEvent.Controller != string.Empty) html += "<div class=\"" + dcsEvent.Controller + "\">[" + dcsEvent.Controller + "]</div>";
			if (dcsEvent.EventType != string.Empty) html += "<div class=\"eventType\">[" + dcsEvent.EventType + "]</div>";

			if (dcsEvent.IsSystemMessage)
			{
				html += "<div class=\"system\">" + dcsEvent.Data + "</div>";
			}
			else if (dcsEvent.IsMagneticMessage)
			{
				html += "<div class=\"magnetic\">" + dcsEvent.Data + "</div>";
			}
			else
			{
				html += "<div class=\"data\">" + dcsEvent.Data + "</div>";
			}

			html += "</div>";

			return html;
		}

		public string EndFile()
		{
			string html = "<style>" + Environment.NewLine;

			foreach (KeyValuePair<string, string> item in Event.ControllerList)
			{
				switch (item.Value)
				{
					case "TIM":
						html += " ." + item.Key + " { color: green }";
						break;
					case "TICO":
						html += " ." + item.Key + " { color: red }";
						break;
					case "APS":
						html += " ." + item.Key + " { color: gold }";
						break;
					default:
						break;
				}
			}

			html += Environment.NewLine + "</style>" + Environment.NewLine;
			html += "</body>" + Environment.NewLine;
			html += "</html>";

			return html;
		}
	}
}
