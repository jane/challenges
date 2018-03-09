```swift
static func pancakeSort(values: [Int]) -> (steps: Int, sorted: [Int]) {
        var sorted: [Int] = values.reversed()
        var flips: Int = 0
        
        print("flips: \(flips), sorted: \(sorted)")
        
        var currentIndex = 0
        while currentIndex < sorted.count - 1 {
            var largestIndex = currentIndex
            // Find the largest to swap with
            for compareIndex in currentIndex + 1 ..< sorted.count {
                if sorted[largestIndex] < sorted[compareIndex] {
                    // We need to flip the pancakes at this point, we found a bigger one
                    largestIndex = compareIndex
                }
            }
            
            guard largestIndex != currentIndex else {
                currentIndex += 1
                continue
            }
            
            if largestIndex != sorted.count - 1 {
                // Flip the larger pancake to the top
                let a = Array(sorted[0..<largestIndex])
                let b = Array(sorted[largestIndex...])
                sorted = a + b.reversed()
                flips += 1
                print("flips: \(flips), sorted: \(sorted)")
            }
            
            // Flip stack down to current index
            let a = Array(sorted[0..<currentIndex])
            let b = Array(sorted[currentIndex...])
            sorted = a + b.reversed()
            flips += 1
            print("flips: \(flips), sorted: \(sorted)")
            currentIndex += 1
        }
        
        return (steps: flips, sorted: sorted.reversed())
    }
```
