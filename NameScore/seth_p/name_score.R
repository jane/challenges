library(readr)
library(tidytext)
names <- read_csv('~/Downloads/names.txt')
names <- names %>% colnames()
names_df <- data_frame(name=names)
names_df2 <- names_df %>% 
  mutate(position =row_number())

letters_df  <- data_frame(LETTERS)
letters_df <- letters_df %>% 
  mutate(position =row_number(),
         LETTERS= tolower(LETTERS))

names_df2 %>%
  unnest_tokens(token = 'characters', letter, name) %>%
  left_join(letters_df, by = c('letter'='LETTERS')) %>% 
  group_by(position.x) %>%
  summarise(score=sum(position.y)) %>%
  mutate(name_score=score*position.x) %>%
  group_by() %>%
  summarise(final_score= sum(name_score, na.rm = T))
