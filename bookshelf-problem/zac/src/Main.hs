module Main where

import Data.BinPacking

-- this isn't clean, but i also don't know haskell, so it's fine
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

-- getting this far was hard enough... let someone else figure out bin packing
solve bins objs = length $ packLargeFirst bins objs
