## golfed

**234** characters
```swift
print("dbbaCEDbdAacCEAadcB".utf16.reduce([UInt16:Int](), {let l=$0>96 ?$0:$0+32;var x=$1;x[l]=(x[l] ?? 0)+($0 > 96 ? 1:-1);return x}).sorted(by:{$0.value>$1.value}).map({"\(UnicodeScalar($0.key)!):\($0.value)"}).joined(separator:" "))
```
