# Euler 14
**Instructions:** [Euler 14 Instructions](https://projecteuler.net/problem=14)  
**Author:** Gordon Tucker  
**Language:** Swift  
**Fastest Time:** 245 milliseconds

_The faster results are from run(), not run2()

## Code
```swift
class Euler14 {
    class func run(_ max: Int = 1000000) -> Int {
        // Maps known numbers and the resulting chain count
        var knownChains: [Int: Int] = [:]
        var maxChainCount: Int = 1
        var maxChainCountValue: Int = 1
        
        var currentValue: Int = 1
        var chainCount: Int = 1
        
        for i in 1 ... max {
            currentValue = i
            while currentValue > 1 {
                if let remainingChainCount = knownChains[currentValue] {
                    chainCount += remainingChainCount
                    break
                } else if currentValue & 1 == 0 {
                    currentValue = currentValue / 2
                } else {
                    currentValue = currentValue * 3 + 1
                }
                chainCount += 1
            }
            knownChains[i] = chainCount
            if chainCount > maxChainCount {
                maxChainCountValue = i
                maxChainCount = chainCount
            }
            
            chainCount = 1
        }
        
        return maxChainCountValue
    }
}
```

## Secondary Solution
_this is solution only runs in about 450 milliseconds, so is slower than the initial solution_

```swift
class Euler14 {
    var mappedChains: [Int: Int] = [1:1]
    
    func run2(_ max: Int = 1000000) -> Int {
        var maxNumber: Int = 1
        var maxChains: Int = 1
        for i in 1 ... max {
            let chains: Int = mappedChains[i] ?? recurse(i)
            if chains > maxChains {
                maxChains = chains
                maxNumber = i
            }
        }
        return maxNumber
    }
    
    func recurse(_ currentNumber: Int) -> Int {
        let nextNumber: Int
        if currentNumber % 2 == 0 {
            nextNumber = currentNumber / 2
        } else {
            nextNumber = currentNumber * 3 + 1
        }
        
        let chainCount: Int = (mappedChains[currentNumber] ?? recurse(nextNumber)) + 1
        mappedChains[currentNumber] = chainCount
        return chainCount
    }
}
```