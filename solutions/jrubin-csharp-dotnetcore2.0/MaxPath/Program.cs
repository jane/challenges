using System;
using System.Collections.Generic;

namespace MaxPath
{
    class Program
    {
        static void Main(string[] args)
        {
			System.Diagnostics.Stopwatch st = new System.Diagnostics.Stopwatch();
			st.Start();
			BinaryNode<int> root = SeedData.GetSeedRoot();
			float finalValue = GetMaxTreePathValueFromParent(root);
			st.Stop();
			Console.WriteLine($"Result:{root.Value}\nTime to run: {st.ElapsedMilliseconds}");
			Console.ReadLine();
        }

		private static float GetMaxTreePathValueFromParent(BinaryNode<int> parent, bool destroyTree = true)
		{
			var rows = parent.GetRows();
			rows.Reverse();
			//start from the second to last row from the floor
			int startIndex = 1;
			for(int i = startIndex; i < rows.Count; i++)
			{
				var row = rows[i];
				for(int z = 0; z < row.Count; z++)
				{
					var node = row[z];
					node.Value =
						node.Value + node.First.Value > 
						node.Value + node.Second.Value
								? node.Value + node.First.Value
								: node.Value + node.Second.Value;

					if(destroyTree)
					{
						node.First = null;
						node.Second = null;
					}
				}
			}

			return parent.Value;
		}
    }
}
