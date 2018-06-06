## golfed

**246** characters
```swift
print("dbbaCEDbdAacCEAadcB".utf16.reduce([UInt16:Int](), {a,b in let l=b>96 ?b:b+32;var x=a;x[l]=(x[l] ?? 0)+(b > 96 ? 1 : -1);return x}).sorted(by: { $0.value > $1.value }).map({a in "\(UnicodeScalar(a.key)!):\(a.value)"}).joined(separator:" "))
```

**238** characters, as long as you don't care about trailing whitespace
```swift
print("dbbaCEDbdAacCEAadcB".utf16.reduce([UInt16:Int](), {a,b in let l=b>96 ?b:b+32;var x=a;x[l]=(x[l] ?? 0)+(b > 96 ? 1 : -1);return x}).sorted(by: { $0.value > $1.value }).reduce("", {a,b in a + "\(UnicodeScalar(b.key)!):\(b.value) "}))
```
