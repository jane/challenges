use std::io;

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

  let string_length = strings[0].len();
  let mut scores: Vec<u32> = Vec::new();

  for i in 0..strings.len() {
    scores.push(0);
    for j in 0..strings.len() {
      let mut score: u32 = 0;

      let mut one = strings[i].chars();
      let mut two = strings[j].chars();

      for k in 0..string_length {
        if one.next() == two.next() {
          score = score + 1;
        }
      }
      scores[i] = scores[i] + score;
    }
  }

  let closest_string: u32 = match scores.iter().max() {
    Some(x) => x.to_owned(),
    None => 0
  };
  let index = match scores.iter().position(|&s| s == closest_string){
    Some(x)=> x.to_owned(),
    None => 0
  };
  let res = &strings[index];
  println!("{:?}", res);
}
