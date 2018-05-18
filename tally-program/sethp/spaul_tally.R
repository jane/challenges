library(stringr)
library(dplyr)

tally<- function(tallyString){
split_letters <- (str_split(pattern = '', string = tallyString))[[1]]
split_letters %>% 
  as.data.frame() %>%
  mutate(lower_letter = tolower(`.`),
         is_lower=lower_letter==`.`) %>%
  group_by(lower_letter) %>%
  summarise(score = sum(as.numeric(is_lower))-sum(as.numeric(!is_lower))) %>%
  arrange(desc(score), lower_letter)
}

tally_beautify<- function(tally_df){
  tally_df %>%
    group_by() %>%
    summarise(paste(paste0(lower_letter, ':', score), collapse = ', ')) %>% 
    as.character()
}

example1 <- "abcde"
solution1 <- data_frame(lower_letter=c("a", "b","c","d","e"),
                        score=c(1,1,1,1,1))
example2 <- "dbbaCEDbdAacCEAadcB"

solution2 <- data_frame(lower_letter=c("b", "d","a","c","e"),
                        score=c(2,2,1,0,-2))

result1 <- tally(example1)
assertthat::are_equal(result1, solution1)
tally_beautify(result1)


result2 <- tally(example2)
assertthat::are_equal(result2, solution2)
tally_beautify(result2)


result3 <- tally("EbAAdbBEaBaaBBdAccbeebaec")
tally_beautify(result3)

