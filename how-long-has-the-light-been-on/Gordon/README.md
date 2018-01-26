# How long has the light been on?

https://www.reddit.com/r/dailyprogrammer/comments/7qn07r/20180115_challenge_347_easy_how_long_has_the/


## Code
```swift
let input = "1 3\n2 3\n4 5"

let parsedInput: [[Int]] = input.components(separatedBy: .newlines).flatMap({
    let parts = $0.components(separatedBy: .whitespaces)
    guard parts.count == 2, let start = Int(parts[0]), let end = Int(parts[1]) else { return nil }
    return [start, end]
}).sorted(by: { $0[0] < $1[0] })

var merged: [[Int]] = []
var currentStart = parsedInput[0][0]
var currentEnd = parsedInput[0][1]
for entry in parsedInput {
    if entry[0] <= currentEnd {
        currentEnd = max(currentEnd, entry[1])
    } else {
        merged.append([currentStart, currentEnd])
        currentStart = entry[0]
        currentEnd = entry[1]
    }
}
merged.append([currentStart, currentEnd])

let result = merged.reduce(0, { $0 + $1[1] - $1[0] })

print(result)
```