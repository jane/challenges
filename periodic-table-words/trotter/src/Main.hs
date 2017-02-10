{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE OverloadedStrings #-}
module Main where

import Control.Monad
import Data.Char hiding (toLower)
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
    decodeOptions = defaultDecodeOptions { decDelimiter = fromIntegral (ord '\t') } 
    Right elements = V.modify (VI.sortBy greaterElementWeight) . snd
      <$> decodeByNameWith decodeOptions csv :: Either String (V.Vector Element)
    -- challenges = [ "functions", "bacon", "poison", "sickness", "ticklish" ]
    results = filter (\(Result (result, _)) -> result /= "")
      $ buildWordFromElements elements <$> challenges
  void $ sequence $ print <$> results

data Element = Element
  { element :: !T.Text
  , symbol :: !T.Text
  , z :: !Int
  , atomicWeight :: !AtomicWeight
  , c :: !(Maybe Double)
  } deriving (Generic, Show)

instance FromNamedRecord Element
instance DefaultOrdered Element

newtype AtomicWeight = AtomicWeight Double
  deriving (Eq, Ord, Show)

instance FromField AtomicWeight where
  parseField s = case runParser (parseField (BSNL.filter (\c -> c /= BS.c2w '(' && c /= BS.c2w ')') s)) of
    Left err -> pure $ AtomicWeight 0
    Right n  -> pure $ AtomicWeight n

instance Eq Element where
  l == r = atomicWeight l == atomicWeight r

greaterElementWeight :: Element -> Element -> Ordering
greaterElementWeight l r =
  case atomicWeight l `compare` atomicWeight r of
    LT -> GT
    GT -> LT
    EQ -> EQ

newtype Result = Result (T.Text, [T.Text])
  deriving Eq

instance Show Result where
  show (Result (word, parts)) = T.unpack word ++ " (" ++ T.unpack (T.intercalate ", " parts) ++ ")"

buildWordFromElements :: V.Vector Element -> T.Text -> Result
buildWordFromElements elements word = Result (result, parts)
  where
    (result, parts) = findNextPart word "" []

    findNextPart "" resultSoFar partsSoFar = (resultSoFar, partsSoFar)
    findNextPart remainingChars resultSoFar partsSoFar =
      let matches = V.filter (flip T.isPrefixOf remainingChars . T.toLower . symbol) elements
      in if null matches
        then ("", [])
        else let match = V.head matches
             in findNextPart (T.drop (T.length (symbol match)) remainingChars)
                             (resultSoFar `T.append` symbol match)
                             (partsSoFar ++ [T.toLower (element match)])