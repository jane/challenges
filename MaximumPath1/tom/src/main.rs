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
      numbers.push(input.into_iter()
                        .map(|num: &str| num.parse().unwrap())
                        .collect()
      )
    } else {
      accept_input = false;
    }
  };

  let acc = numbers.remove(0);

  let summed_paths: Vec<u32> = numbers.iter().fold(acc, |acc: Vec<u32>, row: &Vec<u32>| {
    let mut current_paths: Vec<u32> = Vec::new();

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
        current_paths.push(left)
      } else {
        current_paths.push(right)
      }
    }

    return current_paths;
  });

  match summed_paths.iter().max() {
    Some(max) => println!("the max path is {}", max),
    None => println!("there wasn't a max!")
  };
}


//
