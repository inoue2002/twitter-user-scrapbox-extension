## 動作環境
```

    $ node -v

    v16.15.0

```


## how to use
- git clone https://github.com/inoue2002/twitter-user-scrapbox-extension.git
- cd twitter-user-scrapbox-extension
- npm install 
- npm run build
- distフォルダーが生成される
- chrome://extensions/ にてデベロッパーモードをオンにする
- 「パッケージ化されていない拡張機能を読み込む」から先ほど生成したdistフォルダーを選択してアップロード
- オプションから追加したいscrapboxのプロジェクト名をsave
- twitter-user-scrapbox-extensionをピン留めする📌
- https://twitter.com/username のようなページで拡張機能のボタンをクリック
- 自動でscrapboxのページへ遷移し、ユーザー情報を入力してくれる

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">Chrome拡張の開発の練習としてTwitterのユーザーページで拡張ボタンを押すと自動でScrapboxで新しいページを作ってくれる機能作ってみた✌️ <a href="https://t.co/3I7i87bJ4y">pic.twitter.com/3I7i87bJ4y</a></p>&mdash; ようかん / Yosuke Inoue (@inoue2002) <a href="https://twitter.com/inoue2002/status/1522860177845743618?ref_src=twsrc%5Etfw">May 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

# Chrome Extension TypeScript Starter

![build](https://github.com/chibat/chrome-extension-typescript-starter/workflows/build/badge.svg)

Chrome Extension, TypeScript and Visual Studio Code

## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Option

* [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

* TypeScript
* Webpack
* React
* Jest
* Example Code
    * Chrome Storage
    * Options Version 2
    * content script
    * count up badge number
    * background

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test
`npx jest` or `npm run test`
