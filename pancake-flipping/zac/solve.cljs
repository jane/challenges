#!/usr/bin/env lumo

(def pancakes
  [3 12 8 12 4 7 10 3 8 10])

(def counter
  (atom 0))

(def init
  "Clojure's names for things...."
  butlast)

(defn ind-max [xs]
  "This is like indmax in julia -
  find the index of the largest number
  in a collection"
  (.indexOf xs (apply max xs)))

(defn rev [xs]
  "Increment the counter and reverse the collection.
  This doesn't feel idiomatic, but it works."
  (do
    (swap! counter inc)
    (reverse xs)))

(defn solve [xs]
  "The actual pancake sort solution."
  (if (> 2 (count xs))
    xs
    (let
      ; where we're inserting the spatula
      [spat (inc (ind-max xs))
       ; top section
       head (take spat xs)
       ; lower section
       tail (drop spat xs)
       ; largest pancake in the bottom part
       tail-max (rev (concat (rev head) tail))]

      (conj
        (into [] (solve (init tail-max)))
        (last tail-max)))))

(defn main [xs]
  "Flip some pancakes."
  (do
    (solve xs)
    (println (deref counter))))

(main pancakes)
