library(readr)
library(tidytext)
names <- (read_lines('~/Downloads/names.txt') %>% strsplit(split = ','))[[1]]
names_df <- data_frame(name=names)
names_df2 <- names_df %>% 
  arrange(name) %>%
  mutate(position = row_number())

letters_df  <- data_frame(LETTERS) 
letters_df <- letters_df %>% 
  mutate(letter_position =row_number(),
         LETTERS= tolower(LETTERS))

int_names <- names_df2 %>%
  mutate(name2=name) %>%
  unnest_tokens(token = 'characters', letter, name) %>%
  left_join(letters_df, by = c('letter'='LETTERS')) %>%
  group_by(name2, position) %>%
  summarise(score=sum(letter_position)) %>%
  mutate(name_score=score*position) 


int_names %>%
  group_by() %>%
  summarise(final_score= sum(name_score, na.rm = T))

