# Longest Collatz Sequence - Sacks's Solution
[https://projecteuler.net/problem=14](https://projecteuler.net/problem=14)

**Instructions:** [https://projecteuler.net/problem=14](https://projecteuler.net/problem=14)  

```swift
func eulerStep(_ n: Int) -> Int {
    if n % 2 == 0 {
        return n/2
    } else {
        return (n * 3) + 1
    }
}


func solve() -> String {
    var longestChain = 0
    var longestChainStart = -1
    
    for i in 1...1000 {
        var val = i
        var chain = 0
        var skip = false
        repeat {
            chain += 1
            val = eulerStep(val)
            print(val)
            if val == longestChainStart {
                longestChain = chain + longestChain
                longestChainStart = i
                skip = true
                break
            }
        } while val != 1
        
        if chain >= longestChain && !skip {
            longestChain = chain
            longestChainStart = i
        }
    }
    return "Longest Chain: \(longestChain). Starting Value: \(longestChainStart)"
}
```
