namespace DCSWebParserBeta.Objects
{
	public class Settings
	{
		public bool ShowLineNumbers = true;
		public bool ShowTimeStampAs24Hours = true;
		public bool ShowRawData = false;
		public bool ShowSystemMessages = true;
		public bool ShowTIM = true;
		public bool ShowTICO = true;
		public bool ShowAPS = true;

		public int StartHour = 0;
		public int StartMinute = 0;
		public int EndHour = 23;
		public int EndMinute = 59;

		public int FontSize = 12;

		// Colors
		public bool IsDarkMode = false;

		public string LineNumberLightColor = "lightgray";
		public string TimeStampLightColor = "darkgray";
		public string ControllerLightColor = "lightblue";
		public string EventTypeLightColor = "lightgray";
		public string SystemMessageLightColor = "orange";
		public string MagneticMessageLightColor = "black";
		public string DecryptedLightColor = "blue";

		public string LineNumberDarkColor = "white";
		public string TimeStampDarkColor = "darkgray";
		public string ControllerDarkColor = "lightblue";
		public string EventTypeDarkColor = "lightgray";
		public string SystemMessageDarkColor = "yellow";
		public string MagneticMessageDarkColor = "white";
		public string DecryptedDarkColor = "blue";
	}
}
