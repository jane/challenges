//
//  Dice.swift
//  Challenge2
//
//  Created by Barlow Tucker on 4/1/16.
//  Copyright © 2016 Jane. All rights reserved.
//

import UIKit

class Dice {
    var value:Int
    var isLocked:Bool = false
    var image:UIImage {
        guard self.value <= 6 && self.value >= 1 else { return UIImage(named: "1")! }
        return UIImage(named: "\(self.value)")!
    }
    
    init() {
        self.value = 1
    }
    
    init(value:Int) {
        self.value = value
    }
    
    func roll() {
        self.value = Int(arc4random_uniform(6) + 1)
    }
    
    func reset() {
        self.value = 1
        self.isLocked = false
    }
}