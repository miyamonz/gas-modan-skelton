# gas でモダンにやっていくskelton

google apps script でローカルでコード書いてpushというのがnode-google-apps-scriptでできるので、

- フロントエンド
  - webpack
  - babel
  - react
  - redux
  - test
    - mocha

- バックエンド(gasで定義する関数 のIDE上で実行できたり、フロントから呼び出せる、いつものあれ)
  - browserify gasify babelify
  - babel

などのスケルトンを用意した

## 説明
フロント側はwebpackでhtml,js,cssをbundle/ に出力
そのあとhtmlのタグにjsとcssをcheerioでぶち込んでdst/index.htmlにする
gasのwebappは基本的にはhtml css js のファイル分割ができないのでこういうことをした

バックエンドは、gasが関数実行するためにはglobalに関数が無いといけないのだけど、webpackはglobal汚染しないようになってるので、色々試してみたが難しかった。
既存の方法としてborwserifyとgasifyを使って解決するという方法があったのでとりあえずコレを採用
もしかしたらwebpackでなんとかなるかもしれないけど、どうせgasだし、まあいいやという感じ
