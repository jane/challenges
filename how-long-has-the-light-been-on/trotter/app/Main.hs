module Main where

import Lights (parseLightSensorLog, getLightsOnSet)

main :: IO ()
main = do
  logs <- parseLightSensorLog <$> getContents
  print (length $ getLightsOnSet logs)