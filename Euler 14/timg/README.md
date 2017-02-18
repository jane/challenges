
// [https://projecteuler.net/problem=14](https://projecteuler.net/problem=14)
// Written in C#

using System;

namespace LongestSequence
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			RunNoNOptimized(1000000);

			Console.WriteLine("\n");

			RunOptimized(1000000);
		}

		/// <summary>
		/// Runs the non-optimized process.
		/// </summary>
		/// <param name="number">Number.</param>
		private static void RunNoNOptimized(int number)
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
			PrintResults("not optimized-", longestSequence, startNumber, timeElapsed.TotalMilliseconds);
		}

		/// <summary>
		/// Runs a more optimized process.
		/// </summary>
		/// <param name="number">Number.</param>
		private static void RunOptimized(int number)
		{
			long longestSequence = 0;
			long startNumber = 0;
			long val = 0;
			DateTime start = DateTime.Now;

			int[] store = new int[number +1];
			store[0] = 0;
			store[1] = 1;

			for (int i = 2; i < number; i++)
			{
				val = i;
				int length = 0;
				while (val != 1 && val >= i)
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

				// store the sequence length to array
				store[i] = length + store[val];
				if (store[i] > longestSequence)
				{
					// update longest
					longestSequence = store[i];
					startNumber = i;
				}
			}

			TimeSpan timeElapsed = DateTime.Now - start;
			PrintResults("optimized-", longestSequence, startNumber, timeElapsed.TotalMilliseconds);
		}

		private static void PrintResults(string title, long longestSequence, long startNumber, double ellapsed)
		{
			Console.WriteLine(title);
			Console.WriteLine(string.Format("longest sequence count: {0}", longestSequence));
			Console.WriteLine(string.Format("starting number: {0}", startNumber));
			Console.WriteLine(string.Format("time: {0} milliseconds", ellapsed));
		}
	}
}

