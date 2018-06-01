library(dplyr)

challenge_input <- "accomodate
acknowlegement
arguemint
comitmment
deductabel
depindant
existanse
forworde
herrass
inadvartent
judgemant
ocurrance
parogative
suparseed"

challenge_output <- "
accomo<date
acknowleg<ement
arguem<int
comitm<ment
deducta<bel
depin<dant
exista<nse
forword<e
herra<ss
inadva<rtent
judgema<nt
ocur<rance
parog<ative
supa<rseed
"
dictionary  <- readr::read_csv('./assets/enable1.txt', col_names = F)


preset<- (challenge_input %>% 
  stringr::str_split(pattern = '\n'))[[1]] 

set1 <- data_frame(input= (challenge_input %>% stringr::str_split(pattern = '\n'))[[1]]) %>%
 mutate(input= stringr::str_replace_all(input, pattern = '([A-z])', '\\1-')) %>%
  tidyr::separate(sep='-', input, c(letters[1:(max(preset %>% nchar()))]))

set2 <- dictionary %>% transmute(input= stringr::str_replace_all(X1, pattern = '([A-z])', '\\1-')) %>%
  tidyr::separate(sep='-', input, c(letters[1:(max(preset %>% nchar()))]))

positions <-rep(0,nrow(set1))
for (column_index in ncol(set1):1) {
  partial <- set1 %>% tidyr::unite_(col = 'new', from = letters[1:column_index], sep='')
  partial_dict <- set2 %>% tidyr::unite_(col = 'new', from = letters[1:column_index], sep='')
  positions[!partial$new %in% partial_dict$new]=column_index
}

output_df <- data_frame(words=preset, position=as.integer(positions)) %>% 
  mutate(words=paste0(stringr::str_sub(words, 1,position), '<',stringr::str_sub(words, position+1, nchar(words)))) 

cat(paste(output_df$words, collapse = '\n'))
      