using System;
using System.Linq;

namespace TallyProgram
{
	class Program
	{
		static void Main()
		{
			var i = "EbAAdbBEaBaaBBdAccbeebaec";
			var f = i.ToLower().ToCharArray().Distinct().ToDictionary(x => x.ToString(), x => 0);
			foreach (var c in i)
			{
				var x = c.ToString();
				var u = x.ToUpper();
				if (u != x)
					f[x]++;
				else
					f[x.ToLower()]--;
			}

			Console.WriteLine(string.Join(", ", f.OrderBy(d => d.Value).Select(s => $"{s.Key}:{s.Value}")));
			var z = Console.ReadLine();
		}
	}
}
