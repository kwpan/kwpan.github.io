# Properties ToolBox

## 簡介

在物理計算上，時常需要查表取得各種物質的物理、機械性質，在實務使用上，通常因為對應的數值並非整數，因此需要由內插法搭配表格數據來計算所需數值。
Properties ToolBox 整理了幾種常用的性質資料表，並提供使用者自行輸入其中一性質，自動求得其他對應性質的功能。

## 使用方法

從網站首頁選單列中可以選擇需要查詢的資料表，進入對應頁面後，頁面下方會列出網站的資料表數據，並於上方的輸入格內，可以自行輸入數字或科學符號，網頁會自動計算出相對應的其他性質，並顯示於各自文字框內。

## 技術內容

- BootStrap
  1. 標題列透過BootStrap提供的`dropdown`模板，實現可展開的標籤選項，可供整理同領域的不同資料表。
  2. 內容部分使用`container`使網頁可以正常顯示於不同大小的頁面，並搭配`grid system`作為內容排版對齊的主要方式(在資料表格上尤為重要)。
- JavaScript
  1. 性質資料表的數據皆由JavaScript以`Array`的方式儲存，方便將數據一一對應，並用於後續內插法的查找與計算。
  2. 自行設計之內插法函式，分別是`trend()`與`trendIndex()`。前者用來做內插法，後者則用來查找使用者輸入的數值對應在資料表內的位置。經過`trendIndex()`找到使用者輸入數值介於某兩行後，即可由`trend()`將該兩行數值對輸入值做內插法，求得其他對應的性質。
- jQuery
  1. 自動生成資料表格，透過`$("#class").html()`的功能，可以搭配迴圈，自動將資料表的數據生成表格。
  2. 輸入數據的偵測與更新，透過`.keyup()`功能，可以偵測使用者輸入的動作，並於使用者輸入任何值後，都偵測輸入的數值，並同步更新內插法的數值到其他性質的文字格。