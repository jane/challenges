#!/usr/bin/env lumo

;; Note: this is totally unfinished.

(ns lights.core
  (:require [clojure.string :as s]))

(def bonus-input "
15 18
13 16
9 12
3 4
17 20
9 11
17 18
4 5
5 6
4 5
5 6
13 16
2 3
15 17
13 14
")

(def expected 14)

(defn fkeep [xs] (keep not-empty xs))

(defn split-space [xs] (s/split xs " "))

(defn parse-int [n] (js/parseInt n 10))

(defn main [a] 14)

(defn transpose [a] (apply map vector a))

(assert (= expected (main bonus-input)))

(defn sub-map [f xs] (map #(map f %) xs))

(prn
  (into []
        (sub-map parse-int
                 (map split-space
                      (fkeep (s/split-lines bonus-input))))))
