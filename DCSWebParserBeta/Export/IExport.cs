using DCSWebParserBeta.Objects;

namespace DCSWebParserBeta.Export
{
	public interface IExport
	{
		public string BeginFile();
		public string ParseLine(Event dcsEvent);
		public string EndFile();
	}
}
