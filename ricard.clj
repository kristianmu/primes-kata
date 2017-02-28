; Factorial
(defn factorial [of] (apply * (range 1 (inc of))))

(= (factorial 5) 120)
(= (map factorial (range 11)) '(1 1 2 6 24 120 720 5040 40320 362880 3628800))

; Fibonacci sequence
(defn fib-seq [size]
  (loop [n 1 acc [1 1]]
    (let [[last second-to-last] (reverse acc)]
      (if (= n (dec size))
        acc
        (recur (inc n) (conj acc (+ last second-to-last)))))))

(= (fib-seq 12) '(1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144))
