#!/bin/sh

if hash xdg-open 2>/dev/null; then opener=xdg-open; else opener=open; fi
curl https://picsum.photos/800/500 > /tmp/tmp.jpg
text=`curl -g 'http://api.icndb.com/jokes/random?limitTo=[nerdy]' | jq .value.joke`
convert -pointsize 12 -fill white -draw "text 20,100 $text" /tmp/tmp.jpg output.jpg
rm /tmp/tmp.jpg
$opener output.jpg
