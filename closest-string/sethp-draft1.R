library(dplyr)
library(tidytext)
library(stringr)
example_seqs <- c("CTCCATCACAC
AATATCTACAT
ACATTCTCCAT
CCTCCCCACTC")

challenge_sequence1 <- c("AACACCCTATA
CTTCATCCACA
TTTCAATTTTC
ACAATCAAACC
ATTCTACAACT
ATTCCTTATTC
ACTTCTCTATT
TAAAACTCACC
CTTTTCCCACC
ACCTTTTCTCA
TACCACTACTT")

challenge_sequence2<-c("ACAAAATCCTATCAAAAACTACCATACCAAT
ACTATACTTCTAATATCATTCATTACACTTT
TTAACTCCCATTATATATTATTAATTTACCC
CCAACATACTAAACTTATTTTTTAACTACCA
TTCTAAACATTACTCCTACACCTACATACCT
ATCATCAATTACCTAATAATTCCCAATTTAT
TCCCTAATCATACCATTTTACACTCAAAAAC
AATTCAAACTTTACACACCCCTCTCATCATC
CTCCATCTTATCATATAATAAACCAAATTTA
AAAAATCCATCATTTTTTAATTCCATTCCTT
CCACTCCAAACACAAAATTATTACAATAACA
ATATTTACTCACACAAACAATTACCATCACA
TTCAAATACAAATCTCAAAATCACCTTATTT
TCCTTTAACAACTTCCCTTATCTATCTATTC
CATCCATCCCAAAACTCTCACACATAACAAC
ATTACTTATACAAAATAACTACTCCCCAATA
TATATTTTAACCACTTACCAAAATCTCTACT
TCTTTTATATCCATAAATCCAACAACTCCTA
CTCTCAAACATATATTTCTATAACTCTTATC
ACAAATAATAAAACATCCATTTCATTCATAA
CACCACCAAACCTTATAATCCCCAACCACAC
")



center_hamming <- function(input_sequences){
sequences <- data_frame(sequences = strsplit(input_sequences, split='\n')[[1]] %>% str_trim(side = 'both')) 

exploded <- sequences %>%
  mutate(sequence_index = row_number()) %>% 
  unnest_tokens(token='characters', this, input = sequences) %>%
  group_by(sequence_index) %>%
  mutate(letter_index=row_number())
exploded_plus <- exploded  %>%
    left_join(exploded, by = c('letter_index'='letter_index'))

index <- exploded_plus %>% 
  mutate(different=this.x!=this.y) %>%
  reshape2::dcast(sequence_index.x~sequence_index.y, fun.aggregate = sum, value.var = 'different') %>%
  select(-sequence_index.x) %>%
  summarise_all(sum) %>%
  which.min() %>%
  unname()
return(sequences[index,] %>% .[['sequences']])

}

example_result <- center_hamming(example_seqs)
assertthat::are_equal(example_result, 'AATATCTACAT')
challenge1_result <- center_hamming(challenge_sequence1)
assertthat::are_equal(challenge1_result, 'ATTCTACAACT')
challenge2_result <-center_hamming(challenge_sequence2)
assertthat::are_equal(challenge2_result, 'TTAACTCCCATTATATATTATTAATTTACCC')


user_input_sequences <- function(){
n_lines <- readline(prompt="Enter number of entries: ")
for (row_index in 1:n_lines){
  if (row_index==1){
    lines<-readline(prompt="")
  } else {
  line <- readline(prompt="")
  lines<- paste(lines,line, sep = '\n')
  }
}
example_result <- center_hamming(lines)
print(example_result)
}
user_input_sequences()
