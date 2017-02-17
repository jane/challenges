
// [https://projecteuler.net/problem=14](https://projecteuler.net/problem=14)

// Non optimized version written in C#


using System;

namespace LongestSequence
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			RunNotOptimized(1000000);
		}

		/// <summary>
		/// Runs the non-optimized solution.
		/// </summary>
		/// <param name="number">Number.</param>
		private static void RunNotOptimized(int number)
		{
			long longestSequence = 0;
			long startNumber = 0;
			long val = 0;
			DateTime start = DateTime.Now;

			for (int i = 2; i < number; i++)
			{
				val = i;
				int length = 1;
				while (val != 1)
				{
					length++;
					if ((val % 2) == 0)
					{
						val = val / 2;
					}
					else
					{
						val = 3 * val + 1;
					}
				}
				if (length > longestSequence)
				{
					longestSequence = length;
					startNumber = i;
				}
			}

			TimeSpan timeElapsed = DateTime.Now - start;
			PrintResults(longestSequence, startNumber, timeElapsed.TotalMilliseconds);
		}

		private static void PrintResults(long longestSequence, long startNumber, double ellapsed)
		{
			Console.WriteLine("longest sequence count: " + longestSequence);
			Console.WriteLine("starting number: " + startNumber);
			Console.WriteLine("time: " + ellapsed);
		}
	}
}



