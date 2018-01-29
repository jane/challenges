use std::io;

fn main() {
  let mut accept_input: bool = true;
  let mut times: Vec<(u32, u32)> = Vec::new();
  println!("Please input your times");
  while accept_input {
    let mut input: String = String::new();
    io::stdin().read_line(&mut input)
               .expect("failed to read line");
    let input: Vec<&str> = input.split_whitespace().collect();

    if input.len() > 1 {
      times.push((input[0].parse().unwrap(), input[1].parse().unwrap()))
    } else {
      accept_input = false;
      continue;
    }
  };

  let mut times: Vec<u32> = times.iter().fold(Vec::new(), |mut acc, &time: &(u32, u32)| {
    let thing: Vec<u32> = (time.0..time.1).collect();
    acc.extend(thing);
    return acc;
  });

  times.sort();
  times.dedup();

  println!("{:?}", times);
  println!("{}", times.len())

}
