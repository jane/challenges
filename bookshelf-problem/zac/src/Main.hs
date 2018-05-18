module Main where

import Data.BinPacking

-- i don't think this is idiomatic
main :: IO ()
main = do
  content <- readFile "test"
  let
    inp = lines content
    objs = mapTuple $ mapInt $ mapHead $ mapWords $ tail inp
    bins = mapInt $ words $ head inp
    in print $ solve bins objs

mapHead = map head
mapWords = map words
toTuple n = (n, 1)
mapTuple = map toTuple

-- explicit annotation needed
mapInt :: [String] -> [Int]
mapInt = map read

-- there's a library for this!
solve bins objs = length $ packLargeFirst bins objs
