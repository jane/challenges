use std::io;
use std::collections::HashMap;


fn main() {
  let mut strings = Vec::new();

  loop {
    let mut input: String = String::new();
    io::stdin().read_line(&mut input)
               .expect("failed to read line");
    let input = input.trim();


    if input.len() > 1 {
      strings.push(input.to_owned());
    } else {
      break;
    }
  };

  let mut output: Vec<HashMap<char, i8>> = Vec::new();
  for string in strings {
    let mut holder = HashMap::new();
    for letter in string.chars() {
      if letter.is_lowercase() {
        let val = match holder.get(&letter) {
          Some(x) => x + 1,
          None => 1
        };
        holder.insert(letter, val);
      } else {
        let val = match holder.get(&letter.to_ascii_lowercase()) {
          Some(x) => x - 1,
          None => -1
        };
        holder.insert(letter.to_ascii_lowercase(), val);
      }
    }
    output.push(holder)
  }
  println!("{:?}", output);
}
