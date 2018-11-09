use std::io;
use std::str::FromStr;

fn main() {
  let mut input: String = String::new();
  io::stdin().read_line(&mut input)
             .expect("failed to read line");
  let mut input = input.trim().split_whitespace();

  let first = String::from(input.next().unwrap_or_default());
  let second = String::from(input.next().unwrap_or_default());

  for i in 0..first.len() {
    let mut word = first.clone();
    word.replace_range(i..=i, "");

    if(word == second){
        println!("yay it matched");
        return
    }
  }  

  println!("heck, it didn't match")
}
