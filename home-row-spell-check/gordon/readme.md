```swift
public class HomeRowSpellCheck: NSObject {
    static var dictionary: Set<String> = Dictionary.load()
    
    static var rows: [[Character]] = [
        ["q".first!, "w".first!, "e".first!, "r".first!, "t".first!, "y".first!, "u".first!, "i".first!, "o".first!, "p".first!],
        ["a".first!, "s".first!, "d".first!, "f".first!, "g".first!, "h".first!, "j".first!, "k".first!, "l".first!],
        ["z".first!, "x".first!, "c".first!, "v".first!, "b".first!, "n".first!, "m".first!],
        ["Q".first!, "W".first!, "E".first!, "R".first!, "T".first!, "Y".first!, "U".first!, "I".first!, "O".first!, "P".first!],
        ["A".first!, "S".first!, "D".first!, "F".first!, "G".first!, "H".first!, "J".first!, "K".first!, "L".first!],
        ["Z".first!, "X".first!, "C".first!, "V".first!, "B".first!, "N".first!, "M".first!]
    ]
    
    static func correct(word: String) -> String {
        for i in [0,1,-1,2,-2] {
            var offsetWord = word
            if i != 0 {
                var offsetCharacters: [Character] = []
                for character in word {
                    var offsetCharacter: Character?
                    for row in rows {
                        if let index = row.index(of: character) {
                            offsetCharacter = row[(index + row.count + i) % row.count]
                        }
                    }
                    offsetCharacters.append(offsetCharacter ?? character)
                }
                
                offsetWord = String(offsetCharacters)
            }
            if dictionary.contains(offsetWord.lowercased().trimmingCharacters(in: CharacterSet.lowercaseLetters.inverted)) {
                return offsetWord
            }
        }
        return word
    }
    
    public static func spellCheck(input: String) -> String {
        let split = input.components(separatedBy: .whitespaces)
        let corrected: [String] = split.map(HomeRowSpellCheck.correct)
        return corrected.joined(separator: " ")
    }
}
```
