#!/usr/bin/env sh

# остановить публикацию при ошибках
set -e
echo "---no errors---"
cd ~/Documents/Projects/hebrew/dist
# сборка
npm run build
echo "--project builded successfully--"

# переход в каталог сборки
cd ~/Documents/Projects/hebrew/dist

# если вы публикуете на пользовательский домен
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'
echo "--changes committed--"
# если вы публикуете по адресу https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# если вы публикуете по адресу https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ArthurNaida/hebrew.git master:gh-pages
echo "--pushed successfully!!!--"

cd -