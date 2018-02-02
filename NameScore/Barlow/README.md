# Name Score Challenge
Using names.txt in this repo, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

Find the total of all the name scores in the file?


## Solution

```swift
class NameScore {
    /// grab the unicode position of a lowercased `a` to track letter values of lowercased letters
    static var aPosition = Int("a".unicodeScalars.first!.value)
    static var names:[String] = {
        let path = Bundle.main.path(forResource: "names", ofType: "txt")
        let content = try! String(contentsOfFile: path!).trimmingCharacters(in: CharacterSet(charactersIn: "\"")).lowercased()
        
        return content.components(separatedBy: "\",\"").sorted()
    }()
    
    class func scoreName(_ name:String) -> Int {
        return name.lowercased().unicodeScalars.reduce(0, { $0 + Int($1.value) - self.aPosition + 1 })
    }
    
    class func totalScore() -> Int {
        return self.names.enumerated().reduce(0, {$0 + self.scoreName($1.element) * ($1.offset + 1)})
    }
}
```