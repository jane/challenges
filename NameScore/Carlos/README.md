# Name Score Challenge
Using names.txt in this repo, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would obtain a score of 938 × 53 = 49714.

Find the total of all the name scores in the file?


## Solution

```Python
letters = "abcdefghijklmnopqrstuvwxyz"

name_file = open("names.txt", "r")
name_file_text = name_file.read()
list_of_names = name_file_text.replace('"', '').lower().split(',')
name_file.close()

list_of_names.sort()
total_score = 0

for name in list_of_names:
    name_score = 0
    for c in name:
        name_score += (letters.index(c) + 1)

    name_score = name_score * (list_of_names.index(name) + 1)
    total_score += name_score

print(total_score)
```