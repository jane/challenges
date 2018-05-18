module Lib where

import Prelude
import Data.List
-- import Data.Set (fromList, toList, empty, notMember, union)
import qualified Data.Array.Accelerate as A
import qualified Data.Array.Accelerate.Interpreter as I

type SwitchRange = (Int, Int)

type SwitchInput = (Int, [SwitchRange])

type SwitchBoard = [Int]

calculateSwitchBoard :: [String] -> Int
calculateSwitchBoard = length . filter (== 1) . runSwitches . parseSwitches

parseSwitches :: [String] -> SwitchInput
parseSwitches [] = (0, [])
parseSwitches (x:xs) = (read x, parseLines xs)
  where
    parseLines xs = parseLine <$> xs

    parseLine = parseSwitch . words

    parseSwitch [a, b] = let a' = read a
                             b' = read b
                         in if a' < b' then (a', b') else (b', a')

-- runSwitches :: SwitchInput -> SwitchBoard
-- runSwitches (total, switches) = foldl runBoard initialBoard switches
--   where
--     initialBoard :: SwitchBoard
--     initialBoard = replicate total False
--
--     runBoard :: SwitchBoard -> SwitchRange -> SwitchBoard
--     {-# INLINE runBoard #-}
--     runBoard board (a, b) = mapIdx flipSwitch board
--       where
--         flipSwitch :: Int -> Int -> Int
--         {-# INLINE flipSwitch #-}
--         flipSwitch x i | i < a || i > b = x
--         flipSwitch 0 _ = 1
--         flipSwitch 1 _ = 0

runSwitches :: SwitchInput -> SwitchBoard
runSwitches (total, switches) = A.toList $ I.run $ foldl step initialBoard switches
  where
    initialBoard :: A.Acc (A.Vector (Int, Int))
    initialBoard = A.fill (A.index1 (A.lift total)) 0

    initialSwitches :: A.Array A.DIM1 (Int, Int)
    initialSwitches = A.fromList (A.Z A.:. length switches) switches

    flipSwitch :: (A.Elt a, Ord a, Num a) => (a, a) -> a -> a -> a
    flipSwitch (a, b) x i | i < a || i > b = x
    flipSwitch _ 0 _ = 1
    flipSwitch _ 1 _ = 0

    step :: A.Acc (A.Vector Int) -> SwitchRange -> A.Acc (A.Vector Int)
    step board range = A.map (flipSwitch range) board

    -- mapIdx :: A.Elt a => (a -> a -> a) -> A.Acc (A.Vector a) -> A.Acc (A.Vector a)
    -- mapIdx f l = A.zipWith f l [0..]
