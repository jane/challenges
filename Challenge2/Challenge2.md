#Coding Challenge 2
##Objective
Make a dice rolling game.  The screen should display:

* 3 dice
* A button that says "Roll!"
* A button that says "End Round"
* A label with the user's score
* **Optional** A label for High Score (see Bonus)

###Rules:

1. Tapping (or clicking) the Roll button should randomly change the Dice that are not locked down. *(yeah, I said Dice and not Die for a single Dice...)*
1. After the first roll a user can tap a dice to lock the face value.
2. After the first round, the **End Round** button will be displayed by the Roll button
3. Tapping the **End Round** button will add the face value of all dice matching the locked dice.
4. If the user rolls a 3 then their score for that round will be 0.  Their total score will start over at 0 as well.  A new round will start.

##Example
User opens the app.  All the dice start at 1. The user can not lock down any dice until they tap **Roll!**.  They Tap Roll! and the dice are randomly changed to the values 2, 5, 6.  The user locks down the 6 dice and rolls again.  The dice that were 2, and 5 are randomly changed to 1 and 6.  The user locks down the 6 dice and taps **End Round**.  

Because there were two matching dice locked down, their total value (6+6) are added to the user's score of 0.  The dice all start back at 1 and the **End Round** button is hidden.  The user taps **Roll!** and the dice randomly change to 5, 6, and 6.  The user locks down the two 6 dice and taps **Roll!** again.  The dice with the value of 5 is randomly changed to 3.  Rolling a 3 ends the game, resetting the user's score back to 0.  The dice are set back to 1 and the **End Round** button is hidden.

##Bonus
###Bonus 1
Keep track of the user's high score and display it on the screen as well

###Bonus 2
Add the ability to share the high score on social media