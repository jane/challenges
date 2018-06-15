use std::io::Read;
use std::fs::File;
use std::collections::HashMap;
use std::sync::Arc;


struct Trie {
  children: HashMap<char, Trie>,
  value: char,
}

impl Trie {
  pub fn insert(&mut self, new_val: &char) {
    match self.children.get(new_val) {
      Some(_) => {}
      None => {
        self.children.insert(new_val.clone(), Trie { children: HashMap::new(), value: new_val.clone() });
      }
    };
  }
}


fn main() {
  let mut file = File::open("../../assets/enable1.txt").expect("file not found");
  let mut strings = String::new();
  file.read_to_string(&mut strings)
      .expect("something went wrong");
  let start_node: Trie = Trie { children: HashMap::new(), value: ' ' };
  let dictionary = strings
    .split_whitespace()
    .fold(start_node, |mut acc: Trie, c: &str| {
      let mut word = c.chars();
      let first = word.next().unwrap();
      acc.insert(&first);
      let current_node = &acc.children.get(&first).unwrap();

      word.for_each(|letter: char| {
        current_node.insert(&letter);
       let current_node = &current_node.children.get(&letter).unwrap();
      });
      acc
    });

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
