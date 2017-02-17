# Longest Collatz Sequence - Barlow's Solution
[https://projecteuler.net/problem=14](https://projecteuler.net/problem=14)

**Instructions:** [https://projecteuler.net/problem=14](https://projecteuler.net/problem=14)  
**Author:** Barlow Tucker  
**Language:** Swift  
**Fastest Time:** 1.8 seconds  

```swift
class Euler14 {
    class func jumps(_ number:Int ) -> Int {
        var jumps:Int = 1
        var currentNumber: Int = number
        
        while currentNumber != 1 {
            jumps += 1
            
            if currentNumber % 2 == 0 {
                currentNumber = currentNumber / 2
            } else {
                currentNumber = ((3 * currentNumber) + 1) / 2
                jumps += 1
            }
        }
        
        return jumps
    }
    
    class func solve() -> String {
        var longestLength:Int = 0
        var number:Int = 999999
        
        for i in 0...number/2 {
            let currentNumber = 999999-i
            let length:Int = self.jumps(currentNumber)
            
            if length > longestLength {
                longestLength = length
                number = currentNumber
            }
        }
        
        return "\(number) creates the longest chain: \(longestLength)"

    }
}
```