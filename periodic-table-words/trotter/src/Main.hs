{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE OverloadedStrings #-}
module Main where

import Control.Monad
import Data.Char
import Data.Csv
import Data.Either
import Generics.Deriving

import qualified Data.ByteString as BSNL
import qualified Data.ByteString.Lazy as BS
import qualified Data.ByteString.Internal as BS (c2w)
import qualified Data.Text.Lazy.Encoding as BS
import qualified Data.Text as T
import qualified Data.Text.IO as T
import qualified Data.Vector as V
import qualified Data.Vector.Algorithms.Intro as VI

main :: IO ()
main = do
  csv <- BS.readFile "data/periodic-table.csv"
  challenges <- T.lines <$> T.readFile "data/dictionary.txt"
  let
    -- challenges = [ "functions", "bacon", "poison", "sickness", "ticklish" ]

    decodeOptions = defaultDecodeOptions { decDelimiter = fromIntegral (ord '\t') }
    Right unSortedElements = snd <$> decodeByNameWith decodeOptions csv

    elements = V.toList $ V.modify (VI.sortBy greaterElementWeight) unSortedElements
    results = filter nonEmptyResult $ buildWordFromElements elements <$> challenges

  void $ sequence $ print <$> results

data Element = Element
  { element      :: !T.Text
  , symbol       :: !T.Text
  , z            :: !Int
  , atomicWeight :: !AtomicWeight
  , c            :: !(Maybe Double)
  } deriving (Generic)

instance FromNamedRecord Element
instance DefaultOrdered Element

newtype AtomicWeight = AtomicWeight Double
  deriving (Eq, Ord)

instance FromField AtomicWeight where
  parseField s =
    let cleanedS = BSNL.filter (\c -> c /= BS.c2w '(' && c /= BS.c2w ')') s
    in case runParser (parseField cleanedS) of
      Left err -> pure $ AtomicWeight 0
      Right n  -> pure $ AtomicWeight n

greaterElementWeight :: Element -> Element -> Ordering
greaterElementWeight l r =
  case atomicWeight l `compare` atomicWeight r of
    LT -> GT
    GT -> LT
    EQ -> EQ

newtype Result = Result (T.Text, [T.Text])

instance Show Result where
  show (Result (word, parts)) = T.unpack word ++ " (" ++ T.unpack (T.intercalate ", " parts) ++ ")"

nonEmptyResult :: Result -> Bool
nonEmptyResult (Result result) =
  case result of
    ("", _) -> False
    _       -> True

buildWordFromElements :: [Element] -> T.Text -> Result
buildWordFromElements elements word = Result (result, parts)
  where
    (result, parts) = findNextPart word "" []

    findNextPart "" resultSoFar partsSoFar = (resultSoFar, partsSoFar)
    findNextPart remainingChars resultSoFar partsSoFar =
      let matches = filter (flip T.isPrefixOf remainingChars . T.toLower . symbol) elements
      in if null matches
        then ("", [])
        else let match = head matches
             in findNextPart (T.drop (T.length (symbol match)) remainingChars)
                             (resultSoFar `T.append` symbol match)
                             (partsSoFar ++ [T.toLower (element match)])