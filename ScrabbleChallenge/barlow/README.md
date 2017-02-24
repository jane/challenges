# Scrabble Challenge - Barlow
**Instructions:** [https://www.reddit.com/r/dailyprogrammer/comments/5go843/20161205_challenge_294_easy_rack_management_1/](https://www.reddit.com/r/dailyprogrammer/comments/5go843/20161205_challenge_294_easy_rack_management_1/)  
**Author:** Barlow Tucker  
**Language:** Swift  
**Fastest Time:** 8.3 seconds for challenge, bonus 1 and bonus 2


## Code
```swift
//
//  ScrabbleChallenge.swift
//  Challenges
//
//  Created by Barlow Tucker on 2/24/17.
//  Copyright © 2017 Barlow Tucker. All rights reserved.
//

import Cocoa

class ScrabbleChallenge: NSObject {
    static let dictionary:[String] = WordDictionary.words()
    
    class func canMakeWord(_ word: String, withTiles tiles:[String]) -> Bool {
        var tiles = tiles
        guard word.characters.count <= tiles.count else { return false }
        
        for letter in word.characters.map({String($0)}) {
            if let index = tiles.index(of: letter) {
                tiles.remove(at: index)
            } else if let index = tiles.index(of: "?")  {
                tiles.remove(at: index)
            } else {
                return false
            }
        }
        
        return true
    }
    
    class func longestWord(tiles:[String]) -> String {
        var longest:String = ""
        
        for word in self.dictionary {
            guard longest.characters.count < word.characters.count, self.canMakeWord(word, withTiles: tiles) else { continue }
            longest = word
        }
        
        return longest.isEmpty ? "No Matches Found" : longest
    }
    
    class func check(word:String, tiles:[String]) -> String {
        return "\(word) \(self.canMakeWord(word, withTiles: tiles) ? "can" : "can NOT") be made with the tiles \(tiles)";
    }
    
    class func solve() -> String {
        let one:String = self.check(word: "daily", tiles: ["l", "a", "d", "i", "l", "m", "y"])
        let two:String = self.check(word: "eerie", tiles: ["e", "e", "r", "r", "i", "i", "n"])
        let three:String = self.check(word: "program", tiles: ["o", "r", "r", "p", "g", "m", "a"])
        let four:String = self.check(word: "program", tiles: ["o", "r", "p", "p", "g", "m", "a"])
        
        let challenge:String = "\nChallenge:\n-----------\n\(one)\n\(two)\n\(three)\n\(four)"
        
        // Bonus 1
        let bonusOneOne:String = self.check(word: "pizzazz", tiles: ["p", "i", "z", "z", "a", "?", "?"])
        let bonusOneTwo:String = self.check(word: "pizzazz", tiles: ["p", "i", "i", "z", "z", "a", "?"])
        let bonusOneThree:String = self.check(word: "program", tiles: ["a", "?", "?", "?", "?", "?", "?"])
        let bonusOneFour:String = self.check(word: "program", tiles: ["b", "?", "?", "?", "?", "?", "?"])
        
        let bonusOne:String = "\n\nBonus 1:\n-----------\n\(bonusOneOne)\n\(bonusOneTwo)\n\(bonusOneThree)\n\(bonusOneFour)"
        
        
        // Bonus 2
        let tiles1:[String] = ["d", "c", "t", "h", "o", "y", "u", "e", "o", "r", "z", "a"]
        let tiles2:[String] = ["u", "r", "u", "q", "r", "n", "y", "t", "r", "o", "i", "s"]
        let tiles3:[String] = ["r", "r", "y", "q", "e", "i", "a", "e", "g", "i", "c", "g", "e", "o", "?", "?"]
        let tiles4:[String] = ["u", "d", "o", "s", "j", "a", "n", "y", "u", "i", "u", "e", "b", "r", "?", "?"]
        let tiles5:[String] = ["v", "a", "a", "k", "o", "j", "e", "a", "i", "e", "t", "g", "?", "?", "?", "?", "?", "?", "?", "?"]
        
        let bonusTwoOne:String = "The longest word from the following tiles is \(self.longestWord(tiles: tiles1)): \(tiles1)"
        let bonusTwoTwo:String = "The longest word from the following tiles is \(self.longestWord(tiles: tiles2)): \(tiles2)"
        let bonusTwoThree:String = "The longest word from the following tiles is \(self.longestWord(tiles: tiles3)): \(tiles3)"
        let bonusTwoFour:String = "The longest word from the following tiles is \(self.longestWord(tiles: tiles4)): \(tiles4)"
        let bonusTwoFive:String = "The longest word from the following tiles is \(self.longestWord(tiles: tiles5)): \(tiles5)"
        
        let bonusTwo:String = "\n\nBonus 2:\n-----------\n\(bonusTwoOne)\n\(bonusTwoTwo)\n\(bonusTwoThree)\n\(bonusTwoFour)\n\(bonusTwoFive)"
        
        
        // Bonus 3
        let bonusThree:String = "\n\nBonus 3:\n-----------\n"
        
        
        return challenge + bonusOne + bonusTwo + bonusThree
    }
}

```

## Output

```
Answer: 
Challenge:
-----------
daily can be made with the tiles ["l", "a", "d", "i", "l", "m", "y"]
eerie can NOT be made with the tiles ["e", "e", "r", "r", "i", "i", "n"]
program can be made with the tiles ["o", "r", "r", "p", "g", "m", "a"]
program can NOT be made with the tiles ["o", "r", "p", "p", "g", "m", "a"]

Bonus 1:
-----------
pizzazz can be made with the tiles ["p", "i", "z", "z", "a", "?", "?"]
pizzazz can NOT be made with the tiles ["p", "i", "i", "z", "z", "a", "?"]
program can be made with the tiles ["a", "?", "?", "?", "?", "?", "?"]
program can NOT be made with the tiles ["b", "?", "?", "?", "?", "?", "?"]

Bonus 2:
-----------
The longest word from the following tiles is coauthored: ["d", "c", "t", "h", "o", "y", "u", "e", "o", "r", "z", "a"]
The longest word from the following tiles is turquois: ["u", "r", "u", "q", "r", "n", "y", "t", "r", "o", "i", "s"]
The longest word from the following tiles is greengrocery: ["r", "r", "y", "q", "e", "i", "a", "e", "g", "i", "c", "g", "e", "o", "?", "?"]
The longest word from the following tiles is subordinately: ["u", "d", "o", "s", "j", "a", "n", "y", "u", "i", "u", "e", "b", "r", "?", "?"]
The longest word from the following tiles is ovolactovegetarian: ["v", "a", "a", "k", "o", "j", "e", "a", "i", "e", "t", "g", "?", "?", "?", "?", "?", "?", "?", "?"]

Bonus 3:
-----------

Found in 8306.97399377823 milliseconds
```