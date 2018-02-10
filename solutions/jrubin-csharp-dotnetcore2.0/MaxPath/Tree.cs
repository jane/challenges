﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MaxPath
{
	public static class SeedData
	{
		public static string seedString =
			@"75
			95 64
			17 47 82
			18 35 87 10
			20 04 82 47 65
			19 01 23 75 03 34
			88 02 77 73 07 63 67
			99 65 04 28 06 16 70 92
			41 41 26 56 83 40 80 70 33
			41 48 72 33 47 32 37 16 94 29
			53 71 44 65 25 43 91 52 97 51 14
			70 11 33 28 77 73 17 78 39 68 17 57
			91 71 52 38 17 14 91 43 58 50 27 29 48
			63 66 04 68 89 53 67 30 73 16 69 87 40 31
			04 62 98 27 23 09 70 98 73 93 38 53 60 04 23";

		public static BinaryNode<int> GetSeedRoot()
		{
			//break seedString up into an array of Lists of numbers
			List<List<int>> seedList =
				seedString
					.Split('\n')
					.Select(s =>
						s.Trim().Split(' ')
							.Select(sv => Int32.Parse(sv)).ToList())
					.ToList();

			List<List<BinaryNode<int>>> binaryNodeList =
				seedList.Select(s =>
					s.Select(sp => new BinaryNode<int>() { Value = sp })
						.ToList())
					.ToList();

			BinaryNode<int> root = binaryNodeList[0][0];
			for(int i=0; i < binaryNodeList.Count; i++)
			{
				if (i + 1 >= binaryNodeList.Count)
					break;

				List<BinaryNode<int>> row = binaryNodeList[i];
				int childIndex = 0;
				for (int r = 0; r < row.Count; r++)
				{
					BinaryNode<int> parent = i == 0 ? root : row[r];
					List<BinaryNode<int>> childRow = binaryNodeList[i + 1];
					for (int z = childIndex; z < childIndex + 1; z++)
					{
						if (z + 1 >= childRow.Count)
							break;

						var first = childRow[z];
						var second = childRow[z + 1];

						//if the first child has already been assigned a parent, create a new one instead
						parent.First = first;
						parent.Second = second;
					}
					childIndex++;
				}
			}

			return root;
		}
	}


}
