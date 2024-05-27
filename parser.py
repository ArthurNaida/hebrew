import requests
import json
from bs4 import BeautifulSoup

with open("values_storage.json", "r", encoding='utf-8') as f:
    url = json.loads(f.read())['url']
print(url)
# url = 'http://www.pealim.com/ru/dict/?pos=all&num-radicals=all&rf=%D7%A8&r2=%D7%91&r1=%D7%92'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'lxml')
hebrew_words = {}

# try:
hebrew_words_markup = soup.find_all('span', class_='menukad')
print(hebrew_words_markup)
print(len(hebrew_words_markup))
transcription_words_markup = soup.find_all('span', class_='dict-transcription')
parts_of_speech_markup = soup.find_all('tr')
meaning_words_markup = soup.find_all('td', class_ = 'dict-meaning')
print(meaning_words_markup)
print(parts_of_speech_markup)
try:
    parts_of_speech_markup.pop(0)
except Exception as err:
    print(err)
    hebrew_words[0] = 0
for i in range(len(hebrew_words_markup)-1):
    try:    
        word = hebrew_words_markup[i].get_text() + ' [' + transcription_words_markup[i].get_text() + '] - ' + meaning_words_markup[i].get_text()
        part_of_speech = str(parts_of_speech_markup[i].find_all('td')[2]).split(' ')[0][4:]
        print(part_of_speech)
        hebrew_words[word] = part_of_speech
    except: 
        continue
# def set_words_dict():
# try:
#     set_words_dict()
# except Exception as err:
#     print(err)
print(hebrew_words)

with open("words_data.json", "w") as write_file:
    json.dump(hebrew_words, write_file)