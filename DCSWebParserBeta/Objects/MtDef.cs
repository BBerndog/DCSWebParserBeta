using DCSWebParserBeta.Helper;
using System.Xml.Linq;

namespace DCSWebParserBeta.Objects
{
	public class MtDef
	{
		public static XDocument? MtDefXDocument = null;

		public static void LoadXDocument(XDocument xDocument)
		{
			MtDefXDocument = xDocument;
		}

		public static Event DecryptLine(string line, long lineNumber)
		{
			string returnData = String.Empty;
			string[] rawHexValues = line.Split(' ');
			List<string> hexValue = new List<string>();
			Event decryption = new Event() { LineNumber = lineNumber, IsDecrypted = true, TimeStamp = DateTime.MinValue };

			try
			{
				foreach (string value in rawHexValues)
				{
					if (value != String.Empty) hexValue.Add(value.Trim());
				}

				string tag = "0x" + hexValue[3] + hexValue[2];
				bool firstTime = true;

				if (MtDefXDocument != null)
				{
					XElement? resultElement = MtDefXDocument.Descendants("tag").FirstOrDefault(element => element.Attribute("id") != null && element.Attribute("id").Value == tag);

					returnData += "*** LTD MESSAGE: " + resultElement.Attribute("name").Value + "=(";

					RemoveHexElements(4, ref hexValue);

					while (hexValue.Count > 1)
					{
						int numItems = GetNumItems(ref hexValue);
						string value = String.Empty;

						if (!firstTime)
						{
							returnData += ",";
						}
						else
						{
							firstTime = false;
						}

						tag = "0x" + hexValue[1] + hexValue[0];
						resultElement = MtDefXDocument.Descendants("tag").FirstOrDefault(element => element.Attribute("id") != null && element.Attribute("id").Value == tag);

						if (numItems == 2)
						{
							returnData += resultElement.Attribute("name").Value + "=\"\"";
						}
						else if (numItems == 3)
						{
							int tagValue = Convert.ToInt32(hexValue[2], 16);
							string attributeValue = resultElement.Attribute("name").Value + "=";

							attributeValue += GetAttributeValue(ref resultElement, tagValue);

							returnData += attributeValue;
						}
						else if (numItems == 4)
						{
							int tagValue = Convert.ToInt32(hexValue[3] + hexValue[2], 16);
							string attributeValue = resultElement.Attribute("name").Value + "=";

							if (attributeValue == "TicketNumber=" || attributeValue == "TransactionNumber=")
							{
								attributeValue += tagValue.ToString();
							}
							else
							{
								attributeValue += GetAttributeValue(ref resultElement, tagValue);
							}

							returnData += attributeValue;
						}
						else if (numItems == 5)
						{
							int tagValue = Convert.ToInt32(hexValue[4] + hexValue[3] + hexValue[2], 16);
							string attributeValue = resultElement.Attribute("name").Value + "=";

							attributeValue += tagValue.ToString();
							returnData += attributeValue;
						}
						else if (numItems == 6)
						{
							int tagValue = Convert.ToInt32(hexValue[5] + hexValue[4] + hexValue[3] + hexValue[2], 16);
							string attributeValue = resultElement.Attribute("name").Value + "=";

							attributeValue += tagValue.ToString();
							returnData += attributeValue;
						}
						else if (numItems == 7)
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";

							for (int i = 2; i < 9; i++)
							{
								tagValue += GetCharacter(hexValue[i]);
							}

							attributeValue += "\"" + tagValue + "\"";
							returnData += attributeValue;
						}
						else if (numItems == 10)
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";

							tagValue = GetDateTime(ref hexValue).ToString("yyyy-M-dTH:mm:ss");
							attributeValue += tagValue;

							returnData += attributeValue;
						}
						else if (numItems == 11)
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";

							for (int i = 2; i < 13; i++)
							{
								tagValue += GetCharacter(hexValue[i]);
							}

							attributeValue += "\"" + tagValue + "\"";
							returnData += attributeValue;
						}
						else if (numItems == 12)
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";

							if (attributeValue == "CurrentTime=")
							{
								tagValue = GetDateTime(ref hexValue).ToString("yyyy-M-dTH:mm:ss");
								attributeValue += tagValue;
							}
							else
							{
								for (int i = 2; i < 14; i++)
								{
									tagValue += GetCharacter(hexValue[i]);
								}

								attributeValue += "\"" + tagValue + "\"";
							}

							returnData += attributeValue;
						}
						else if (numItems == 13)
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";

							for (int i = 2; i < 15; i++)
							{
								tagValue += GetCharacter(hexValue[i]);
							}

							attributeValue += "\"" + tagValue + "\"";
							returnData += attributeValue;
						}
						else if (numItems == 14)
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";

							for (int i = 2; i < 16; i++)
							{
								tagValue += GetCharacter(hexValue[i]);
							}

							attributeValue += "\"" + tagValue + "\"";
							returnData += attributeValue;
						}
						else if (numItems == 15)
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";

							for (int i = 2; i < 17; i++)
							{
								tagValue += GetCharacter(hexValue[i]);
							}

							attributeValue += "\"" + tagValue + "\"";
							returnData += attributeValue;
						}
						else if (numItems == 19)
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";

							for (int i = 2; i < 21; i++)
							{
								tagValue += GetCharacter(hexValue[i]);
							}

							attributeValue += "\"" + tagValue + "\"";
							returnData += attributeValue;
						}
						else
						{
							string tagValue = String.Empty;
							string attributeValue = resultElement.Attribute("name").Value + "=";
							//throw new Exception();
						}

						RemoveHexElements(numItems, ref hexValue);
					}

					returnData += ") ***";

					if (returnData.Contains("StatusCode=InvalidTicket")) ReportOutput.InvalidTicket.Add(Convert.ToInt32(lineNumber));
					if (returnData.Contains("EventCode=PassIllegalForward")) ReportOutput.IllegalPassForward.Add(Convert.ToInt32(lineNumber));
					if (returnData.Contains("Backout Detected")) ReportOutput.BackoutDetected.Add(Convert.ToInt32(lineNumber));

					decryption.Data = returnData;
				}
				else
				{
					throw new Exception("MtDef Document is null");
				}

				return decryption;
			}
			catch (Exception ex)
			{
				return new Event()
				{
					Data = "Parser Error - Attribute not yet implemented: " + ex.Message,
					IsError = true
				};
			}
		}

		#region private methods
		private static string GetAttributeValue(ref XElement resultElement, int tagValue)
		{
			if (!resultElement.HasElements) return tagValue.ToString();

			string attribute = resultElement.Descendants().First().Name.ToString().Trim('s');
			string returnValue = String.Empty;

			if (attribute == "enum")
			{
				returnValue = (resultElement.Descendants(attribute).Where(element => element.Attribute("id").Value.GetValue() == tagValue)).First().Attribute("name").Value;

				return returnValue;
			}
			else if (attribute == "bit")
			{
				bool firstAttribute = true;

				for (int i = 0; i < 16; i++)
				{
					if ((tagValue & (1 << i)) != 0)
					{
						if (firstAttribute)
						{
							firstAttribute = false;
						}
						else
						{
							returnValue += "|";
						}

						returnValue += (resultElement.Descendants(attribute).Where(element => element.Attribute("id").Value.GetValue() == i)).First().Attribute("name").Value;
					}
				}

				if (returnValue == String.Empty) return "0";

				return returnValue;
			}
			else
			{
				return tagValue.ToString();
			}
		}

		private static void RemoveHexElements(int number, ref List<string> hexValue)
		{
			for (int i = number - 1; i >= 0; i--)
			{
				hexValue.RemoveAt(i);
			}
		}

		private static int GetNumItems(ref List<string> hexValue)
		{
			string tag = "0x" + hexValue[1] + hexValue[0];

			RemoveHexElements(2, ref hexValue);

			return Convert.ToInt32(tag, 16);
		}

		private static string GetCharacter(string hexValue)
		{
			int asciiCode = Convert.ToInt32(hexValue, 16);
			char character = Convert.ToChar(asciiCode);

			return character.ToString().Trim();
		}

		private static DateTime GetDateTime(ref List<string> hexValue)
		{
			DateTime dateTime = new DateTime(1990, 1, 1, 0, 0, 0, 0);

			int seconds = Convert.ToInt32(hexValue[9] + hexValue[8] + hexValue[7] + hexValue[6], 16);
			int days = Convert.ToInt32(hexValue[5] + hexValue[4] + hexValue[3] + hexValue[2], 16);

			dateTime = dateTime.AddDays(days);
			dateTime = dateTime.AddSeconds(seconds);

			return dateTime;
		}
		#endregion
	}
}
