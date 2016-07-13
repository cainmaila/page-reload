# web服務器+ 修改文件瀏覽器Livereload

這個服務包提供一個小型的web服務，預設為80 port,當服務啟動後，會監視www資料夾裡的檔案，檔案發生變動，瀏覽器也會自動更新。

> 須配合Chrome瀏覽器使用

## 安裝方式

1. 安裝nodejs
2. 安裝gulp-cli

cmd命令列輸入
```
npm i gulp-cli -g
```
3. 安裝套件

cmd命令列輸入
```
npm i
```
4. [安裝瀏覽器外掛](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

## 啟動服務

cmd命令列輸入
```
npm start
```

## 使用方式

1.要編輯的靜態頁面請放置在 www 資料夾

2.開啟 [瀏覽器](http://127.0.0.1/)

3.確認開啟瀏覽器的livereload外掛

修改文件即可livereload
