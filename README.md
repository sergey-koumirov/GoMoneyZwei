# Simple Money Tracking App


## pre-dev

npm install --save react

npm install --save react-dom

npm install --save parcel-bundler


## dev

go run server/main.go

parcel ./ui/src/index.js --public-url /s/

go build -o gmz server/main.go



## build for win on osx

brew install mingw-w64

CGO_ENABLED=1 CC="i686-w64-mingw32-gcc" GOOS=windows GOARCH=386 go build -o gmz.exe server/main.go

zip -r v001.zip ./gmz.exe ./gmz-dev.sqlite ./dist ./server/templates

## run 

./gmz

## todo

account info by month

predefined comment text