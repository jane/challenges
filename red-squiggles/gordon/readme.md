## Solution with bonus

I went the route of trying to optimize the search speed instead of the initialization speed. This runs in near constant time since it uses sets (a.k.a hashset/bag) for the lookup map.

```swift
public class CharacterMap: Hashable {
    public var hashValue: Int {
        return rawValue.hashValue
    }
    
    public static func == (lhs: CharacterMap, rhs: CharacterMap) -> Bool {
        return lhs.rawValue == rhs.rawValue
    }
    
    var rawValue: Character
    var nextValues: Set<CharacterMap> = []
    
    init(_ character: Character) {
        self.rawValue = character
    }
    
    func addWord(_ characters: String.SubSequence) {
        let map = self.nextValues.insert(CharacterMap(characters.first!)).memberAfterInsert
        if characters.count > 1 {
            map.addWord(characters.suffix(characters.count - 1))
        }
    }
    
    func findMissingIndex(_ characters: String.SubSequence, index: Int = 0) -> (Int, Set<CharacterMap>)? {
        let characterMap = CharacterMap(characters.first!)
        guard self.nextValues.contains(characterMap) else { return (index, self.nextValues) }
        guard characters.count > 1 else { return nil }
        let map = self.nextValues.insert(characterMap)
        return map.memberAfterInsert.findMissingIndex(characters.suffix(characters.count - 1), index: index + 1)
    }
}

public class RedSquiggly: NSObject {
    public static var map: CharacterMap = {
        let map = CharacterMap(" ")
        Dictionary.load().forEach({ map.addWord($0.prefix($0.count)) })
        return map
    }()
    
    public static func spellCheck(_ word: String) -> String {
        guard let missingIndex = map.findMissingIndex(word.prefix(word.count)) else { return word }
        
        // Build the corrected word
        var word = word
        word.insert("<", at: word.index(word.startIndex, offsetBy: missingIndex.0 + 1))
        
        // Find and print the suggested words
        let wordStart = String(word.prefix(missingIndex.0))
        var suggestedWords: [String] = []
        var findWords: ((_ part: String, _ map: CharacterMap) -> Void)!
        findWords = { (part, map) in
            guard suggestedWords.count < 10 else { return }
            let part = part + String(map.rawValue)
            if map.nextValues.count > 0 {
                for nextMap in map.nextValues {
                    findWords(part, nextMap)
                }
            } else {
                suggestedWords.append(part)
            }
        }
        for nextMap in missingIndex.1 {
            findWords(wordStart, nextMap)
        }
        print("Suggested words for \(word):")
        for suggested in suggestedWords {
            print("  =>\(suggested)")
        }
        
        // Return the word with the < inserted
        return word
    }
}

```

## Tests

```swift
class RedSquigglyTest: XCTestCase {
    
    func testExample() {
        XCTAssertEqual("hello", RedSquiggly.spellCheck("hello"))
        XCTAssertEqual("hi", RedSquiggly.spellCheck("hi"))
        XCTAssertEqual("accomo<date", RedSquiggly.spellCheck("accomodate"))
        XCTAssertEqual("acknowleg<ement", RedSquiggly.spellCheck("acknowlegement"))
        XCTAssertEqual("arguem<int", RedSquiggly.spellCheck("arguemint"))
        XCTAssertEqual("comitm<ment", RedSquiggly.spellCheck("comitmment"))
        XCTAssertEqual("deducta<bel", RedSquiggly.spellCheck("deductabel"))
        XCTAssertEqual("depin<dant", RedSquiggly.spellCheck("depindant"))
        XCTAssertEqual("exista<nse", RedSquiggly.spellCheck("existanse"))
        XCTAssertEqual("forword<e", RedSquiggly.spellCheck("forworde"))
        XCTAssertEqual("herra<ss", RedSquiggly.spellCheck("herrass"))
        XCTAssertEqual("inadva<rtent", RedSquiggly.spellCheck("inadvartent"))
        XCTAssertEqual("judgema<nt", RedSquiggly.spellCheck("judgemant"))
        XCTAssertEqual("ocur<rance", RedSquiggly.spellCheck("ocurrance"))
        XCTAssertEqual("parog<ative", RedSquiggly.spellCheck("parogative"))
        XCTAssertEqual("supa<rseed", RedSquiggly.spellCheck("suparseed"))
    }
}
```
