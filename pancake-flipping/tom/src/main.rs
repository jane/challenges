use std::io;

fn main() {
  let mut pancakes: Vec<u32> = Vec::new();
  let mut buffer: String = String::new();

  io::stdin().read_line(&mut buffer)
             .expect("failed to read line");
  pancakes = buffer
    .trim()
    .split_whitespace()
    .map(|x: &str| x.parse::<u32>().unwrap())
    .collect();

  println!("{:?}", pancakes);
  for i in (pancakes.len()..0).rev() {
    let max_idx = pancakes[..i].iter().enumerate().max_by(|x,y| x.cmp(y));
    println!("{:?}", i);
    if pancakes[i] < pancakes[i - 1] {
      let mut slice: Vec<u32> = pancakes[..i + 1].to_vec();
      slice.reverse();
      pancakes[..i + 1].clone_from_slice(&slice);
      println!("{:?}", slice);
    }
  }
}
