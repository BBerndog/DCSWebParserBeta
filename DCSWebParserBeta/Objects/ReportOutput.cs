namespace DCSWebParserBeta.Objects
{
	public class ReportOutput
	{
		public static string FirmwareVersion { get; set; } = String.Empty;
		public static List<ReportCard> ReportCards { get; set; } = new List<ReportCard>();
		public static List<long> InvalidTicket { get; set; } = new List<long>();
		public static List<long> IllegalPassForward { get; set; } = new List<long>();
		public static List<long> BackoutDetected { get; set; } = new List<long>();
		public static int DcsRestartCount { get; set; } = 0;
		public static int TotalNumberOfLines { get; set; } = 0;
		public static int TotalNumberOfParsingErrors { get; set; } = 0;
		public static DateTime ParseBeginTime { get; set; } = DateTime.MinValue;
		public static DateTime ParseEndTime { get; set; } = DateTime.MinValue;
		public static DateTime ExportBeginTime { get; set; } = DateTime.MinValue;
		public static DateTime ExportEndTime { get; set; } = DateTime.MinValue;
		public static string ErrorMessage { get; set; } = String.Empty;
	}
}
