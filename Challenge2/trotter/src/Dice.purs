module App.Dice where

import Prelude ((++), ($), (<$>), show, const, class Show)
import Control.Monad.Eff (Eff)
import Control.Monad.Eff.Random (randomInt, RANDOM)
import Data.String (joinWith)
import Pux.Html
import Pux.Html.Events (onClick)

rollDice :: forall e. Eff (random :: RANDOM | e) Int
rollDice = randomInt 1 6

mkDie :: Int -> Die
mkDie val = Die { locked: false, value: val }

data Action = RollDice | LockDie Int

newtype Die = Die { locked :: Boolean, value :: Int }

instance showDie :: Show Die where
  show (Die die) = if die.locked then "[" ++ show die.value ++ "]"
                                 else show die.value

newtype State = State { dice :: Array Die }

instance showState :: Show State where
  show (State state) = joinWith ", " (show <$> state.dice)

initialState :: State
initialState = State { dice: [ mkDie 1, mkDie 1, mkDie 1 ] }

update :: Action -> State -> State
update _ state = state

view :: State -> Html Action
view state =
  div # do
    h2 # text ("Dice: " ++ show state)
    p # text "(values in brackets are locked)"
    div # do
      button ! onClick (const RollDice) # text "Roll!"
      -- button ! onClick (const Decrement) # text "Decrement"
