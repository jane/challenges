using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MaxPath
{
	public class BinaryNode<T>
	{
		public BinaryNode() { }
		public BinaryNode(T value, BinaryNode<T> first, BinaryNode<T> second, BinaryNode<T> parent = null)
		{
			Value = value;
			First = first;
			Second = second;
		}

		public T Value {get; set;}
		public BinaryNode<T> First { get; set; }
		public BinaryNode<T> Second { get; set; }
		
		/// <summary>
		/// Expensive as shit.  Careful.
		/// </summary>
		/// <returns></returns>
		public List<List<BinaryNode<T>>> GetRows()
		{
			List<List<BinaryNode<T>>> rows = new List<List<BinaryNode<T>>>();
			rows.Add(new List<BinaryNode<T>>() { this });
			for (int i = 0; i < rows.Count; i++)
			{
				var row = rows[i];
				List<BinaryNode<T>> temp = new List<BinaryNode<T>>();
				foreach(var node in row)
				{
					//this will break with sample sets that have asymmetrical nodes
					if (node.First != null && node.Second != null)
					{
						if(!temp.Contains(node.First))
							temp.Add(node.First);
						if(!temp.Contains(node.Second))
							temp.Add(node.Second);
					}
				}
				if(temp.Any())
					rows.Add(temp);
			}

			return rows;
		}

		private static List<BinaryNode<int>> GetRowCrawlLeft(BinaryNode<T> node)
		{
			throw new NotImplementedException();
		}

		private static (BinaryNode<T> first, BinaryNode<T> second) GetChildren(BinaryNode<T> node)
		{
			return (node.First, node.Second);
		}

		public override string ToString()
		{
			return Value.ToString();
		}
    }
}
