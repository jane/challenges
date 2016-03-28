module Main where

import Lib

main :: IO ()
main = do
  input <- lines <$> readFile "input.txt"
  print $ calculateSwitchBoard input
