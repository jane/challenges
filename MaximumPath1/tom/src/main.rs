use std::io;

fn main() {
  let mut accept_input: bool = true;
  let mut numbers: Vec<Vec<u32>> = Vec::new();

  while accept_input {
    let mut input: String = String::new();
    io::stdin().read_line(&mut input)
               .expect("failed to read line");
    let input: Vec<&str> = input.split_whitespace().collect();

    if input.len() > 0 {
      let converted_input: Vec<u32> = input.into_iter()
                                           .map(|num: &str| num.parse().unwrap())
                                           .collect();

      numbers.push(converted_input.clone())
    } else {
      accept_input = false;
      continue;
    }
  };

  let acc = numbers.remove(0);

  let whatever: Vec<u32> = numbers.iter().fold(acc, |acc: Vec<u32>, row: &Vec<u32>| {
    let mut thing: Vec<u32> = Vec::new();

    for (i, num) in row.iter().enumerate() {
      let mut left: u32 = 0;
      let mut right: u32 = 0;

      if i as i32 - 1 >= 0 {
        left = num + acc[i - 1];
      }
      if i < acc.len() {
        right = num + acc[i];
      }

      if left > right {
        thing.push(left)
      } else {
        thing.push(right)
      }
    }

    return thing;
  });

  match whatever.iter().max() {
    Some(max) =>   println!("the max path is {}", max),
    None => println!("there wasn't a max!")
  };
}


//
