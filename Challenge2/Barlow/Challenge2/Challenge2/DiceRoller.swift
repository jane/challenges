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
    private(set) var highScore:Int = 0
    
    private func setHighScore() {
        self.highScore = max(self.currentScore, self.highScore)
        NSUserDefaults.standardUserDefaults().setValue(self.highScore, forKey: "HighScore")
        NSUserDefaults.standardUserDefaults().synchronize()
    }
    
    init(numberOfDice:Int) {
        var newDice:[Dice] = []
        
        for _ in 1...numberOfDice {
            let die:Dice = Dice()
            newDice.append(die)
        }
        
        self.dice = newDice
        
        self.highScore = NSUserDefaults.standardUserDefaults().valueForKey("HighScore") as? Int ?? 0
    }
    
    func rollDice() {
        if self.isGameOver {
            self.reset()
        }
        self.isGameStarted = true
        self.isGameOver = false
        
        for die in self.dice where !die.isLocked {
            die.roll()
            if die.value == self.gameOverValue {
                self.isGameOver = true
                self.isGameStarted = false
                self.setHighScore()
                self.currentScore = 0
            }
        }
    }
    
    func lockDie(atIndex index:Int) {
        guard self.isGameStarted else { return }
        
        let die:Dice = self.dice[index]
        die.isLocked = !die.isLocked
        if die.isLocked {
            self.lockedValue = die.value
            
            for die in self.dice {
                if die.value != self.lockedValue && die.isLocked {
                    die.isLocked = false
                }
            }
            
        } else {
            self.lockedValue = 0
        }
        
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
            self.setHighScore()
        }
        
        self.reset()
    }
}