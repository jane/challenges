# Periodic Table Words
**Instructions:** [https://www.reddit.com/r/dailyprogrammer/comments/5seexn/20170206_challenge_302_easy_spelling_with/](https://www.reddit.com/r/dailyprogrammer/comments/5seexn/20170206_challenge_302_easy_spelling_with/)  
**Author:** Barlow Tucker  
**Language:** Swift  
**Fastest Time:** 4.5 seconds

> Note that this was the fastest time to run through the whole dictionary

## Code
```swift
import Cocoa

struct Element {
    let name:String
    let symbol:String
    let Z:Int
    let weight: Double
    let c: Double
    
    static func elements() -> [String:Element] {
        let strings:[String] = try! String(contentsOfFile: "/Users/barlow/Documents/Development/Challenges/Challenges/Challenges/Challenges/elements.txt", encoding: .utf8).components(separatedBy: .newlines)
        var dictionary:[String:Element] = [:]

        
        for string in strings {
            let parts = string.components(separatedBy: .whitespaces)
            let symbol:String = parts[1]
            let z:Int = Int(parts[2]) ?? 0
            let w:Double = Double(parts[3]) ?? 0
            let c:Double = Double(parts[4]) ?? 0
            
            let element = Element(name: parts[0], symbol: symbol, Z: z, weight: w, c: c)
            dictionary[symbol.lowercased()] = element
        }
        
        return dictionary
    }
}

class ChemistrySpeller {
    static let shared = ChemistrySpeller()
    let elements:[String:Element] = Element.elements()
    
    class func spell(_ word:String) -> String {
        var previous: String = ""
        var previousMatched:Bool = true
        var newWord:String = ""
        
        for current in word.characters.map({String($0)}) {
            let singleLetterElement = self.shared.elements[current]
            let doubleLetterElement = self.shared.elements[previous + current]
            var currentMatches: Bool = false
            var newLetter:String = current
            
            if let letter = singleLetterElement {
                currentMatches = true
                newLetter = letter.symbol
            }
            
            guard !previousMatched else {
                newWord += newLetter
                previous = current
                previousMatched = currentMatches
                
                continue
            }
            
            if let letter = doubleLetterElement {
                newLetter = letter.symbol
                
//                if currentMatches &&  {
//                    
//                } else {
                    newWord = newWord.substring(to: newWord.index(before: newWord.endIndex))
//                }
                
                currentMatches = true
            }
            
            newWord += newLetter
            previous = current
            previousMatched = currentMatches
        }
        
        return newWord
    }
    
    class func spellDictionary() -> [String] {
        let words = WordDictionary.words()
        var newWords:[String] = []
        
        for word in words {
            newWords.append(self.spell(word))
        }
        
        return newWords
    }
}
```