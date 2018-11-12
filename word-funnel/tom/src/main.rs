use std::io;
use std::str::FromStr;
use std::collections::HashMap;

fn funnel(first: String, second: String) -> bool {
    for i in 0..first.len() {
        let mut word = first.clone();
        word.replace_range(i..=i, "");

        if (word == second) {
            return true;
        }
    }
    return false;
}

fn bonus(word: String, dict: HashMap<&str, bool>) -> Vec<String> {
    let mut output: HashMap<&str, bool> = HashMap::new();
    for i in 0..word.len() {
        let mut _word = word.clone();
        _word.replace_range(i..=i, "");
        match dict.get(_word) {
            Some(_) => {output.insert(_word, true);},
            None()=>{}
        }
    }
    return output.keys().collect();
}

fn main() {
    let mut file = File::open("../../assets/enable1.txt").expect("file not found");
    let mut strings = String::new();
    file.read_to_string(&mut strings)
        .expect("something went wrong");
    let dict =
        strings
            .split_whitespace()
            .fold(HashMap::new(), |mut acc: HashMap<&str, bool>, c: &str| {
                acc.insert(c, true);
                acc
            });

    let mut input: String = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("failed to read line");
    let mut input = input.trim().split_whitespace();

    let first = String::from(input.next().unwrap_or_default());
    let second = String::from(input.next().unwrap_or_default());
    if funnel(first, second) {
        println!("yay it matched");
    } else {
        println!("heck, it didn't match")
    }
}
