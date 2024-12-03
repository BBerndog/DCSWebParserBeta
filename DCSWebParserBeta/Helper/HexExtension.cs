namespace DCSWebParserBeta.Helper
{
	public static class HexExtension
	{
		public static int GetValue(this string str)
		{
			if (str.Contains("0x"))
			{
				return Convert.ToInt32(str, 16);
			}
			else
			{
				return Convert.ToInt32(str);
			}
		}
	}
}
