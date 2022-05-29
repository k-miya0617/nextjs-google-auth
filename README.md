# Google Auth プロジェクト

## 概要

NextJS, next-auth を用いて、Google のアカウントでログインする方法を実装した。

## 設定方法

### Google Cloud Platform の設定

1. Google Cloud Platform へアクセスする  
   https://console.cloud.google.com/home/dashboard
2. 新規プロジェクトを作成する  
   今回は、  
   ・プロジェクト名: nextjs-google-auth  
   ・場所: 組織なし  
   を指定した。
3. OAuth 同意画面にアクセスする
4. User Type で 外部 を設定し、作成を押下する。
5. 各種アプリ情報を入力する
   今回は、

   - アプリ名: nextjs-google-auth
   - ユーザーサポートメール: [HIDDEN]
   - アプリのロゴ: 未指定
   - アプリケーションのホームページ: http://localhost:3000
   - アプリケーション プライバシー ポリシー リンク: http://localhost:3000
   - アプリケーション利用規約: http://localhost:3000
   - 承認済みドメイン: (そのまま)
   - デベロッパーの連絡先情報: [HIDDEN]

   をそれぞれ指定し、次へを押下した。

6. スコープは特に指定せず、次へを押下した。
7. 省略可能な情報は特に指定せず、次へを押下した。
8. 概要では特に指定せず、ダッシュボードに戻るを押下した。
9. ダッシュボードに戻るので、認証情報を押下する。
10. OAuth 2.0 クライアント ID の中に、もし「Web Client (auto created by Google Service) があれば、それを削除する。
11. 画面上部にある 認証情報を作成 を押下し、 OAuth クライアント ID の作成 を押下する。
12. 各種設定を行う。  
    今回は、

    - アプリケーションの種類: ウェブ アプリケーション
    - 名前: nextjs-google-auth
    - 承認済みの JavaScript 生成元: http://localhost:3000
    - 承認済みのリダイレクト URI:
      - http://localhost:3000
      - http://localhost:3000/api/auth/callback/google

    をそれぞれ指定し、作成ボタンを押下した。

13. 「OAuth クライアントを作成しました」という画面が出現するので、その画面に記載されている クライアント ID と クライアント シークレットを控える。

### next-project の設定

1. /env.ts.sample をコピーし、/env.ts を作成する。
2. GOOGLE_ID, GOOGLE_SECRET に、先程控えたクライアント ID とクライアントシークレットをそれぞれ指定する。
3. Linux or Mac:  
   ターミナル上で `$ openssl rand -hex 32` を実行し、出力された暗号を SECRET に指定する。  
   Windows:  
   https://generate-secret.now.sh/32 にアクセスし、画面の指示に従ってシークレットを作成した後、それを SECRET に指定する。

## 開発者用メモ: task

・NextJS プロジェクトの初期化
・各種デモページ作成
・GCP 設定
・NextProject 設定
・動作確認
・main ブランチへの push
