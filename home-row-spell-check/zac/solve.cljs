#!/usr/bin/env lumo

(require '[clojure.string :as cs])

;; data
(def input ; test cases
  ["Gwkki we are hyptzgsi martians rt zubq in qrsvr."
   "A oweaib who fprd not zfqzh challenges should mt ewlst to kze"])
(def words ; read in the file and get it into a vector
  (into [] (remove cs/blank?  (cs/split-lines (js/fs.readFileSync "../enable1.txt" "utf8")))))
(def rows ; keyboard
  ["qwertyuiop" "asdfghjkl" "zxcvbnm"])

;; helpers
(defn includes? [el coll] (and (some #(= el %) coll) true)) ; contains? doesn't work so well
(defn wrap-corrected [s] (str "{" s "}")) ; output formatter
; (defn upper? [s] (= s (cs/upper-case s)))
(defn remove-punc [s] (cs/replace s "." ""))
(defn same-len? [a b] (= (count a) (count b)))
(defn find-index [el xs] (.indexOf (to-array xs) el))
(defn valid? [s] (includes? s words))

;; solution
#_(defn check-sentence [s]
    (reduce
      (fn [p c]
        (into p
              {(keyword c) (valid? c)}))
      {}
      (cs/split s #" ")))

(defn solve [s]
  (for [w (cs/split s #" ")]
    (if (not (valid? (remove-punc w)))
      (for [r (range -2 3)]
        (for [c (cs/split w #"")]
          ; i don't really know how `for` works in clojure, so this whole function is off
          ; also this reduce is really ugly and probably wrong
          (reduce
            (fn [acc curr]
              (let [m (nth curr (- (find-index c curr) r))]
                (if (and
                      (valid? m)
                      (same-len? m w))
                  (wrap-corrected m))))
            rows))))))

(prn (str (map solve input)))
