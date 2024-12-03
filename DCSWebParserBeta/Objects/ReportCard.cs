namespace DCSWebParserBeta.Objects
{
	public class ReportCard
	{
		public string Title { get; set; } = String.Empty;
		public List<long> LineNumbers { get; set; } = new List<long>();

		public ReportCard(string title, List<long> occurences)
		{
			Title = title;
			LineNumbers = occurences;
		}
	}
}
