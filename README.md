# Record
映画感想日記です

## Recrod作成でこだわっている点

### 1.ディレクトリ構成
「単一責任の原則」を意識しました

```
src
├── api
│   ├── controllers (処理を記述、コンポーネントで呼び出される)
│   └── repositories (データベースへの問い合わせ)
├── components (汎用UIコンポーネント)
│    ├── Button.tsx
│    └── Title.tsx ...
├── features (ページ・機能独自コンポーネント)
├── libs (ライブラリ独自の記述)
├── pages (ページトップUIコンポーネント)
├── test (テスト)
├── utils (汎用的な関数)
└── App.tsx(ルーター、コンテキスト管理)
```

### 2.モジュールimportの順番

```
１. 外部(node_modules)パッケージ
2. 自作処理系（repository→controller→util）
3. 自作UIコンポーネント
```

### 3.型注釈の厳格さ

```any,as```を利用しないように意識しました。  
開発当初はfetchメソッドを利用しデータ取得していましたが、返却値に型注釈ができなかったためaxiosに乗り換えました。また拡張性からinterfaceをよく利用していましたが、typeに変更し上書きを許さないようにしています

### 4.データ取得の状態管理とUI/UX

repository層でのエラーハンドリング、react queryによるデータ取得状態管理、それらを反映したUIコンポーネントを作成することでよりユーザー体験が「正確」なものになるように意識しています。
特に本アプリではmicrocmsのapiとtmdbのapiを順番にコールするため呼び出し順が正確か、途中でエラーが起きてもページが機能するか、を意識しています

### 5.testケースの作成

あらゆる状況でUI/UXのレベルが落ちていないか、を意識しtestケース・コードを作成しています

### 6.無限スクロール

個人的に難易度が高そう、、と敬遠していた機能なのですが本アプリで形にしたいと考えています


## 技術スタック

・　React　　

・　Tailwindcss　　

・　ReactRouter

・　TanstackQuery　　　

・　TMDB　　

・　Microcms　　

## 課題






