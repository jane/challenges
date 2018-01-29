module Lights where

import Data.Set (Set, empty, fromList, union)
import qualified Data.Set as Set

type Interval = (Int, Int)

parseLightSensorLog :: String -> [Interval]
parseLightSensorLog = map parseInterval . lines where
  parseInterval str =
    let [ int1, int2 ] = words str
    in  ( read int1, read int2 )

getLightsOnSet :: [Interval] -> Set Int
getLightsOnSet = foldr union empty . map toSet where
  toSet (a1, a2) = fromList [ a1 .. (a2 - 1) ]