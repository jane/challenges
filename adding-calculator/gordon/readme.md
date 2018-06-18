```swift
public class AddingCalculator: NSObject {
    public static func abs(_ value: Int) -> Int {
        guard value < 0 else { return value}
        var abs = 0
        var value = value
        while value < 0 {
            value += 1
            abs += 1
        }
        return abs
    }
    
    public static func neg(_ value: Int) -> Int {
        guard value > 0 else { return value }
        var neg = 0
        var value = value
        while value > 0 {
            value += -1
            neg += -1
        }
        return neg
    }
    
    public static func multiply(_ a: Int, _ b: Int) -> Int {
        var flipNegative = false
        var a = a, b = b
        if a < 0 && b < 0 {
            a = abs(a)
            b = abs(b)
        } else if b < 0 {
            flipNegative = true
            b = abs(b)
        } else if a < 0 {
            flipNegative = true
            a = abs(a)
        }
        var multiplied = 0
        for _ in 0 ..< a {
            multiplied += b
        }
        if flipNegative {
            multiplied = neg(multiplied)
        }
        
        return multiplied
    }
    public static func divide(_ a: Int, _ b: Int) -> (result: Int, remainder: Int)? {
        guard b != 0 else { return nil }
        let flipNegative = (a < 0 && b >= 0) || (a >= 0 && b < 0)
        var a = abs(a), b = abs(b)
        
        var value: Int = 0
        while a >= b {
            value += 1
            a = subtract(a, b)
        }
        
        if flipNegative {
            value = neg(value)
        }
        return (result: value, remainder: a)
    }
    
    public static func powerOf(_ a: Int, _ b: Int) -> Int? {
        guard b >= 0 else { return nil }
        guard b > 0 else { return 1 }
        guard b > 1 else { return a }
        guard a != 0 else { return 0 }
        var power = a
        for _ in 1 ..< b {
            power = multiply(power, a)
        }
        return power
    }
    
    public static func subtract(_ a: Int, _ b: Int) -> Int {
        let b = b < 0 ? abs(b) : neg(b)
        return a + b
    }
}

extension AddingCalculator {
    public static func abs(_ value: Float) -> Float {
        return intToFloat(abs(floatToInt(value)))
    }
    
    public static func neg(_ value: Float) -> Float {
        return intToFloat(neg(floatToInt(value)))
    }
    
    public static func floatToInt(_ float: Float) -> Int {
        var convert: Float = 0
        for _ in 0 ..< 100 {
            convert += float
        }
        return Int(round(convert))
    }
    
    public static func intToFloat(_ int: Int) -> Float {
        var convert: Float = 0
        var int = int
        while int >= 100 {
            convert += 1
            int -= 100
        }
        while int >= 10 {
            convert += 0.1
            int -= 10
        }
        while int >= 1 {
            convert += 0.01
            int -= 1
        }
        return convert
    }
    
    public static func multiply(_ a: Float, _ b: Float) -> Float {
        var flipNegative = false
        var a = floatToInt(a)
        var b: Float = b
        if a < 0 && b < 0 {
            a = abs(a)
            b = abs(b)
        } else if b < 0 {
            flipNegative = true
            b = abs(b)
        } else if a < 0 {
            flipNegative = true
            a = abs(a)
        }
        var multiplied: Float = 0
        for _ in 0 ..< a {
            multiplied += b
        }
        if flipNegative {
            multiplied = neg(multiplied)
        }
        
        return intToFloat(Int(multiplied))
    }
}

```
