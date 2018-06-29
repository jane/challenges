use std::io::Read;
use std::fs::File;
use std::collections::HashMap;

struct Trie {
  children: HashMap<char, Trie>,
  value: char,
}

impl Trie {
  pub fn insert(&mut self, new_val: &char) -> &Trie {
    let p = match self.children.get(new_val) {
      Some(child) => child,
      None => {
        self.children.insert(new_val.clone(), Trie { children: HashMap::new(), value: new_val.clone() });
        self.children.get(new_val).unwrap()
      }
    };
    p
  }

  pub fn insert_word(&mut self, new_word: &str) {
    let mut chars = new_word.chars();
    self.insert(&chars.next().unwrap());
    self.insert_word(&chars.collect::<String>())
  }
}


fn main() {
  let mut file = File::open("../../assets/enable1.txt").expect("file not found");
  let mut strings = String::new();
  file.read_to_string(&mut strings)
      .expect("something went wrong");
  let mut dictionary = Trie { children: HashMap::new(), value: ' ' };
  strings
    .split_whitespace()
    .for_each(|word: &str| {
      dictionary.insert_word(word)
    })


//  let mut input: String = String::new();
//  io::stdin().read_line(&mut input)
//             .expect("failed to read line");
//  let input = input.trim();
//
//  let mut output: String = String::new();
//
//  for word in input.split_whitespace() {
//    let _word = word.to_lowercase();
//    let _word = _word.trim_right_matches(".");
//    match dict.get(_word) {
//      Some(_) => { output.push_str(word) }
//      None => {
//        let possible_words: Vec<String> = check_word(&_word)
//          .into_iter()
//          .filter(
//            |ref possible_word: &String| dict.get(possible_word.as_str())
//                                             .is_some()
//          )
//          .collect();
//        let possible_words = possible_words
//          .into_iter()
//          .fold(String::new(), |mut acc, word| {
//            acc.push_str(&word);
//            acc.push_str(", ");
//            acc
//          });
//        output.push('{');
//        output.push_str(&possible_words);
//        output.pop();
//        output.pop();
//        output.push('}')
//      }
//    }
//    output.push(' ')
//  }
//  output.pop();
//
//  println!("{:?}", output);
}
