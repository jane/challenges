```swift
let names = try! String(contentsOfFile: "/Users/gordon/Projects/Challenges/Fib/Fib/Fib/names.txt", encoding: .utf8).lowercased().trimmingCharacters(in: CharacterSet(charactersIn: "\"\r\n,")).components(separatedBy: "\",\"").sorted()

let score = names.enumerated().reduce(0, {
    let nameScore = $1.element.unicodeScalars.reduce(0, { $0 + Int($1.value) - 96 }) * ($1.offset + 1)
    return $0 + nameScore
})

print(score)
```
