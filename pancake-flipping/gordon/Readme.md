
Seems like a normal sort works here...

```swift
    static func pancakeSort(values: [Int]) -> (steps: Int, sorted: [Int]) {
        var sorted = values
        var flips: Int = 0
        
        print("\(flips): \(sorted)")
        for left in 0 ..< sorted.count {
            for rightOffset in 0 ..< sorted.count - left - 1 {
                let right = sorted.count - rightOffset - 1
                if sorted[left] > sorted[right] {
                    var originalValue = sorted[left]
                    sorted[left] = sorted[right]
                    sorted[right] = originalValue
                    flips += 1
                    print("\(flips): \(sorted)")
                }
            }
        }
        
        return (steps: flips, sorted: sorted)
    }
```
