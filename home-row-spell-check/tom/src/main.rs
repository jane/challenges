use std::io;
use std::io::Read;
use std::fs::File;
use std::collections::HashMap;

// The quick ntpem fox jumped over rgw lazy dog.

fn thinger(ref row: &Vec<char>, char: char, i: isize, ref mut new_word: &mut String) {
  match row.iter().position(|&x| x == char) {
    Some(idx) => {
      if idx as isize + i < 0 {
        new_word.push(*row.get((row.len() as isize + i) as usize).unwrap())
      } else if idx as isize + i >= row.len() as isize {
        new_word.push(*row.get(i as usize).unwrap())
      } else {
        new_word.push(*row.get((idx as isize + i) as usize).unwrap())
      }
    }
    None => {},
  }
}

fn check_word(word: &str) -> Vec<String> {
  let top = vec!['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
  let middle = vec!['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  let bottom = vec!['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  let mut new_words: Vec<String> = Vec::new();
  let start: isize = -2;
  let end: isize = 2;

  for i in start..=end {
    if i == 0 { continue; }
    let mut new_word = String::new();
    for char in word.chars() {
      thinger(&top, char, i, &mut new_word);
      thinger(&middle, char, i, &mut new_word);
      thinger(&bottom, char, i, &mut new_word);
    }
    new_words.push(new_word);
  }
  new_words
}


fn main() {
  let mut file = File::open("../../assets/enable1.txt").expect("file not found");
  let mut strings = String::new();
  file.read_to_string(&mut strings)
      .expect("something went wrong");
  let dict = strings
    .split_whitespace()
    .fold(HashMap::new(), |mut acc: HashMap<&str, bool>, c: &str| {
      acc.insert(c, true);
      acc
    });

  let mut input: String = String::new();
  io::stdin().read_line(&mut input)
             .expect("failed to read line");
  let input = input.trim();

  let mut output: String = String::new();

  for word in input.split_whitespace() {
    let _word = word.to_lowercase();
    let _word = _word.trim_right_matches(".");
    match dict.get(_word) {
      Some(_) => { output.push_str(word) }
      None => {
        let possible_words: Vec<String> = check_word(&_word)
          .into_iter()
          .filter(
            |ref possible_word: &String| dict.get(possible_word.as_str())
                                             .is_some()
          )
          .collect();
        let possible_words = possible_words
          .into_iter()
          .fold(String::new(), |mut acc, word| {
            acc.push_str(&word);
            acc.push_str(", ");
            acc
          });
        output.push('{');
        output.push_str(&possible_words);
        output.pop();
        output.pop();
        output.push('}')
      }
    }
    output.push(' ')
  }
  output.pop();

  println!("{:?}", output);
}
