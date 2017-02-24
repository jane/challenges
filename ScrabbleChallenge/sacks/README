# Scrabble Challenge - Sacks
**Instructions:** [https://www.reddit.com/r/dailyprogrammer/comments/5go843/20161205_challenge_294_easy_rack_management_1/](https://www.reddit.com/r/dailyprogrammer/comments/5go843/20161205_challenge_294_easy_rack_management_1/)  
**Author:** Michael Sacks  
**Language:** Swift  

## Code
```swift

import Foundation

func testWord(availableChars: String, word: String) -> Bool {
    
    var availableCharsMutable = Array(availableChars.characters.reversed())
    var wordMutable = Array(word.characters.reversed())
    while let lastLetter = wordMutable.last, !availableCharsMutable.isEmpty {
        var found = false
        for (aIndex, availableChar) in availableCharsMutable.enumerated() {
            if lastLetter == availableChar {
                wordMutable.removeLast()
                availableCharsMutable.remove(at: aIndex)
                found = true
                break
            }
        }
        if !found { return false }
    }

    return wordMutable.isEmpty
}


func solve() -> String {
    
    
    return testWord(availableChars: "ladilmy", word: "daily") ? "Scrabble!" : "Nope"
//    return testWord(availableChars: "eerriin", word: "eerie") ? "Scrabble!" : "Nope"
//    return testWord(availableChars: "orrpgma", word: "program") ? "Scrabble!" : "Nope"
//    return testWord(availableChars: "orppgma", word: "program") ? "Scrabble!" : "Nope"

}

```
