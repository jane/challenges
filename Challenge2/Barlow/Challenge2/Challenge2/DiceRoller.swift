//
//  DiceRoller.swift
//  Challenge2
//
//  Created by Barlow Tucker on 4/1/16.
//  Copyright © 2016 Jane. All rights reserved.
//

import Foundation

class DiceRoller {
    private let gameOverValue:Int = 3
    private var lockedValue:Int = 0
    
    let dice:[Dice]
    
    private(set) var isGameOver:Bool = false
    private(set) var currentScore:Int = 0
    private(set) var isGameStarted:Bool = false
    
    init(numberOfDice:Int) {
        var newDice:[Dice] = []
        
        for _ in 1...numberOfDice {
            let die:Dice = Dice()
            newDice.append(die)
        }
        
        self.dice = newDice
    }
    
    func rollDice() {
        self.isGameStarted = true
        for die in self.dice where !die.isLocked {
            die.roll()
            if die.value == self.gameOverValue {
                self.isGameOver = true
                self.isGameStarted = false
            }
        }
    }
    
    func lockDie(atIndex index:Int) {
        let die:Dice = self.dice[index]
        die.isLocked = !die.isLocked
        self.lockedValue = die.value
    }
    
    func reset() {
        self.isGameStarted = false
        self.isGameOver = false
        for die in self.dice {
            die.reset()
        }
    }
    
    func endRound() {
        let roundScore:Int = self.dice.filter {$0.isLocked && $0.value == self.lockedValue}.reduce(0, combine: {$0 + $1.value})
        if !self.isGameOver {
            self.currentScore += roundScore
        }
        
        self.reset()
    }
}