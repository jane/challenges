extern crate num;

use std::io;
use std::str::FromStr;
use num::{PrimInt, NumCast};

fn add<T: PrimInt>(first: T, second: T) -> Result<T, &'static str>
{
  Ok(first + second)
}

fn multiply<T: PrimInt>(first: T, second: T) -> Result<T, &'static str>
{
  let mut ret = first.to_owned();
  for _ in 1..NumCast::from(second).unwrap() {
    ret = ret + first;
  }
  Ok(ret)
}


fn main() {
  let mut input: String = String::new();
  io::stdin().read_line(&mut input)
             .expect("failed to read line");
  let mut input = input.trim().split_whitespace();

  let first = input.next().unwrap().parse::<i64>().unwrap();
  let operator = char::from_str(input.next().unwrap()).unwrap();
  let second = input.next().unwrap().parse::<i64>().unwrap();

  let answer = match operator {
    '+' => add(first, second),
    '-' => add(first, -second),
    '/' => {
      if second == 0 {
        Err("Can't divide by 0")
      } else {
        let mut div = 0;
        let mut ret = first.to_owned();
        while ret > 0 {
          ret = add(ret, -second).map(|x| x).unwrap();
          div += 1;
        }
        Ok(div)
      }
    }
    '*' => multiply(first, second),
    '^' => {
      let mut ret = first.to_owned();
      for _ in 1..second {
        ret = multiply(ret, first).map(|x| x).unwrap();
      }

      Ok(ret)
    }
    _ => Ok(0)
  };

  println!("{:?}", answer);
}
