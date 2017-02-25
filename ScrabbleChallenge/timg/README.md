# Scabble Challenge
[https://www.reddit.com/r/dailyprogrammer/comments/5go843/20161205_challenge_294_easy_rack_management_1/](https://www.reddit.com/r/dailyprogrammer/comments/5go843/20161205_challenge_294_easy_rack_management_1/)

// Launguage: C#

using System;

namespace Scrabble
{

	class MainClass
	{
		public static void Main(string[] args)
		{
			// search
			Console.WriteLine("Solve:");
			Console.WriteLine(Solve("ladilmy", "daily").ToString()); // true
			Console.WriteLine(Solve("eerriin", "eerie").ToString()); // false
			Console.WriteLine(Solve("orrpgma", "program").ToString()); // true
			Console.WriteLine(Solve("orppgma", "program").ToString()); // false

			// bonus 1
			Console.WriteLine("\nWildcard:");
			Console.WriteLine(Solve("pizza??", "pizzazz").ToString()); // true
			Console.WriteLine(Solve("piizza?", "ppizzazz").ToString()); // false
			Console.WriteLine(Solve("a??????", "program").ToString()); // true
			Console.WriteLine(Solve("b??????", "program").ToString()); // false

			// not enough letters
			Console.WriteLine("\nToo short:");
			Console.WriteLine(Solve("izzp", "pizza").ToString()); // false

			// equal
			Console.WriteLine("\nAre Equal:");
			Console.WriteLine(Solve("pizza", "pizza").ToString()); // true
		}

		private static bool Solve(string letters, string word)
		{
			// not enough letters
			if (letters.Length < word.Length)
				return false;

			// letters are in order and match word
			if (letters.Equals(word))
				return true;

			// search
			bool found = true;
			for (int i = 0; i < word.Length; i++)
			{
				string l = word[i].ToString();
				if (letters.Contains(l))
				{
					// found
					letters = letters.Remove(letters.IndexOf(l, StringComparison.CurrentCulture), 1);
				}
				else if (letters.Contains("?"))
				{
					// wildcard
					letters = letters.Remove(letters.IndexOf("?", StringComparison.CurrentCulture), 1);
				}
				else
				{
					found = false;
					break;
				}
			}

			return found;
		}
	}
}


