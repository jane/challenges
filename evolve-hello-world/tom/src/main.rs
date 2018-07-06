extern crate rand;

use std::io;
use rand::prelude::*;

fn check_fitness(input: String, evolved: String) -> u32 {
  let chars = input.chars().zip(evolved.chars());

  chars.fold(0, |acc: u32, char_pair: (char, char)| {
    if char_pair.0 == char_pair.1 {
      acc + 1
    } else {
      acc
    }
  })
}

fn genetic_algo(best: String, fitness: u32) -> String {
  let mut rng = thread_rng();
  let mut child = best.to_owned();
  let possible_chars = vec!['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                            's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '\'', '!', '?', '.', ',', 'A', 'B', 'C', 'D', 'E',
                            'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V','W', 'X',
                            'Y', 'Z'];

  for _ in fitness as usize..best.len() {
    let pos = rng.gen_range(0, best.len());
    let char = possible_chars[rng.gen_range(0, possible_chars.len())];
    child.replace_range(pos..pos + 1, &char.to_string());
  }
  child
}

fn main() {
  let mut input: String = String::new();
  io::stdin().read_line(&mut input)
             .expect("failed to read line");
  let input = input.trim().to_string();
  let mut evolved = genetic_algo(input.clone(), 0);
  let mut num_guesses = 0;
  while check_fitness(input.clone(), evolved.clone()) < input.len() as u32 {
    let fitness = check_fitness(input.clone(), evolved.clone());
    let mut guesses = Vec::new();
    for _ in 0..input.len() {
      let guess = genetic_algo(evolved.clone(), fitness);
      guesses.push(guess)
    }

    evolved = guesses.iter().fold(evolved.clone(), |evo, guess| {
      if check_fitness(input.clone(), evolved.clone()) < check_fitness(input.clone(), guess.to_string()) {
        guess.to_string().clone()
      } else {
        evo
      }
    });
    num_guesses = num_guesses + 1;
    println!("{}, {}", num_guesses, evolved);
  };
}
