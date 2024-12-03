using DCSWebParserBeta.Objects;

namespace DCSWebParserBeta.Pages
{
	public partial class DCSReport
	{
		public static List<ReportCard> ReportCards = new List<ReportCard>();

		public DCSReport()
		{
			CreateCards();
		}

		public static void CreateCards()
		{
			ReportCard IllegalPassForward = new ReportCard("Illegal Pass Forward", ReportOutput.IllegalPassForward);
			ReportCard InvalidTicket = new ReportCard("Invalid Ticket", ReportOutput.InvalidTicket);
			ReportCard BackoutsDetected = new ReportCard("Backouts Detected", ReportOutput.BackoutDetected);

			ReportCards.Add(IllegalPassForward);
			ReportCards.Add(InvalidTicket);
			ReportCards.Add(BackoutsDetected);
		}
	}
}
