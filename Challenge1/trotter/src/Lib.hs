module Lib where

import Prelude
import Data.List
-- import Data.Set (fromList, toList, empty, notMember, union)
import qualified Data.Set as S

type SwitchRange = (Int, Int)

type SwitchInput = (Int, [SwitchRange])

type SwitchBoard = String

calculateSwitchBoard :: [String] -> Int
calculateSwitchBoard = length . filter (== 'X') . runSwitches . parseSwitches

parseSwitches :: [String] -> SwitchInput
parseSwitches [] = (0, [])
parseSwitches (x:xs) = (read x, parseLines xs)
  where
    parseLines xs = parseLine <$> xs

    parseLine = parseSwitch . words

    parseSwitch [a, b] = let a' = read a
                             b' = read b
                         in if a' < b' then (a', b') else (b', a')

runSwitches :: SwitchInput -> SwitchBoard
runSwitches (total, switches) = foldl runBoard initialBoard switches
  where
    initialBoard :: SwitchBoard
    initialBoard = replicate total '.'

    runBoard :: SwitchBoard -> SwitchRange -> SwitchBoard
    runBoard board (a, b) = mapIdx flipSwitch board
      where
        flipSwitch :: Char -> Int -> Char
        flipSwitch x i | i < a || i > b = x
        flipSwitch '.' _ = 'X'
        flipSwitch 'X' _ = '.'

mapIdx :: (a -> Int -> b) -> [a] -> [b]
mapIdx f l = zipWith f l [0..]
