# How long has the light been on?

https://www.reddit.com/r/dailyprogrammer/comments/7qn07r/20180115_challenge_347_easy_how_long_has_the/


## Code
```swift
struct TimeRange {
    let start: Int
    let end: Int
    var time: Int {
        return end - start
    }
}

func parseInput(_ input: String) -> [TimeRange] {
    return input.components(separatedBy: .newlines).flatMap({
        let parts = $0.components(separatedBy: .whitespaces)
        guard parts.count == 2, let start = Int(parts[0]), let end = Int(parts[1]) else { return nil }
        return TimeRange(start: start, end: end)
    })
}

func calculateTimeInRoom(timeRanges: [TimeRange]) -> Int {
    
    // Sort the time ranges so we can iterate easier
    let timeRanges = timeRanges.sorted(by: { $0.start < $1.start })
    
    // If we don't have even one to work with, just return 0 here
    guard var current = timeRanges.first else { return 0 }
    
    // Loop over results, combining until we find a gap in time someone was in the room
    var mergedTimeRanges: [TimeRange] = []
    for range in timeRanges {
        if range.start <= current.end {
            // Join the ranges since they overlap
            current = TimeRange(start: current.start, end: max(range.end, current.end))
        } else {
            // Found a gap
            mergedTimeRanges.append(current)
            current = range
        }
    }
    // Add the trailing range
    mergedTimeRanges.append(current)
    
    // Add all the merged times together
    return mergedTimeRanges.reduce(0, { $0 + $1.time })
}

print(calculateTimeInRoom(timeRanges: parseInput("1 3\n2 3\n4 5")))
```

```swift
func run(_ input: String) -> Int {
    var flags: [Int] = []
    let rows: [[String]] = input.components(separatedBy: .newlines).map({ $0.components(separatedBy: .whitespaces) })
    let ranges = rows.flatMap({ $0.count == 2 ? (start: Int($0[0])!, end: Int($0[1])!) : nil })
    while flags.count < ranges.max(by: { $0.end < $1.end })!.end { flags.append(0) }
    ranges.forEach({ for i in $0.start ..< $0.end { flags[i] = 1 } })
    return flags.reduce(0, { $0 + $1 })
}
```
