use std::io;
use std::collections::HashMap;

struct Point {
  x: usize,
  y: usize,
}

fn check_neighbors(point: Point, mut visited: &mut Vec<Point>, colors: &Vec<Vec<char>>, mut adjacent_colors: &mut HashMap<char, i8>) {
  let x = point.x;
  let y = point.y;
  let x_dim = colors[y].len();
  let y_dim = colors[x].len();
  let color_char: char = colors[y][x];

  if point.y + 1 < y_dim {
    let top = colors[y + 1][x];

    if top == color_char {
      match visited.into_iter().find(|c| c.x == x && c.y == y + 1) {
        Some(_) => {}
        None => {
          visited.push(Point { x, y: y + 1 });
          check_neighbors(Point { x, y: y + 1 }, &mut visited, &colors, &mut adjacent_colors);
        }
      }
    } else {
      let neighbor = adjacent_colors.entry(top).or_insert(0);
      *neighbor += 1;
    }
  }
  if point.x + 1 < x_dim {
    let right = colors[y][x + 1];

    if right == color_char {
      match visited.into_iter().find(|c| c.x == x + 1 && c.y == y) {
        Some(_) => {}
        None => {
          visited.push(Point { x: x + 1, y });
          check_neighbors(Point { y, x: x + 1 }, &mut visited, &colors, &mut adjacent_colors);
        }
      }
    } else {
      let neighbor = adjacent_colors.entry(right).or_insert(0);
      *neighbor += 1;
    }
  }
  if point.y as i64 - 1 >= 0 {
    let bottom = colors[y - 1][x];

    if bottom == color_char {
      match visited.into_iter().find(|c| c.x == x && c.y == y - 1) {
        Some(_) => {}
        None => {
          visited.push(Point { x, y: y - 1 });
          check_neighbors(Point { y: y - 1, x }, &mut visited, &colors, &mut adjacent_colors);
        }
      }
    } else {
      let neighbor = adjacent_colors.entry(bottom).or_insert(0);
      *neighbor += 1;
    }
  }
  if point.x as i8 - 1 >= 0 {
    let left = colors[y][x - 1];

    if left == color_char {
      match visited.into_iter().find(|c| c.x == x - 1 && c.y == y) {
        Some(_) => {}
        None => {
          visited.push(Point { x: x - 1, y });
          check_neighbors(Point { y, x: x - 1 }, &mut visited, &colors, &mut adjacent_colors);
        }
      }
    } else {
      let neighbor = adjacent_colors.entry(left).or_insert(0);
      *neighbor += 1;
    }
  }
}

fn main() {
  let mut accept_input: bool = true;
  let mut colors: Vec<Vec<char>> = Vec::new();
  let mut desired_color: char = 'W';

  while accept_input {
    let mut input: String = String::new();
    io::stdin().read_line(&mut input)
               .expect("failed to read line");
    let input = input.trim();


    if input.len() > 1 {
      colors.push(input.chars().filter_map(|c: char| {
        if c.is_whitespace() {
          return None;
        } else {
          return Some(c);
        }
      }).collect());
    } else if input.len() > 0 {
      desired_color = input.chars().next().unwrap();
    } else {
      accept_input = false;
    }
  };

  let mut color_sequence = String::new();
  let mut adjacent_colors = HashMap::new();
  let mut visited: Vec<Point> = vec![Point { x: 0, y: 0 }];

  loop {
    adjacent_colors.clear();
    check_neighbors(Point { x: 0, y: 0 }, &mut visited, &colors, &mut adjacent_colors);
    let max: (&char, &i8) = match adjacent_colors.iter().max_by(|a: &(&char, &i8), b: &(&char, &i8)| a.1.cmp(b.1)) {
      Some(x) => x,
      None => {
        color_sequence.push(desired_color);
        break;
      }
    };
    color_sequence.push(*max.0);
    visited.iter().for_each(|point: &Point| {
      colors[point.y][point.x] = *max.0
    });
    visited.clear();
  }


  if color_sequence.len() > 0 {
    println!("the color sequence is {}", color_sequence);
  } else {
    println!("bruh, idk")
  }
}
