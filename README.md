# todo-app-with-react-native

このプロジェクトは React Native を使用して作成された ToDo アプリです。Expo を利用しており、iOS および Android で動作します。

## 機能

- タスクの追加
- タスクの編集
- タスクの削除

## セットアップ方法

このプロジェクトをローカルで実行するには、以下の手順に従ってください。

1. リポジトリをクローンします。
   ```
   git clone https://github.com/your-repository/todo-app-with-react-native.git
   ```
2. 依存関係をインストールします。
   ```
   npm install
   ```
3. アプリを起動します。
   ```
   expo start
   ```

## ビルド方法

### Android APK

APK ファイルを生成するには、以下のコマンドを実行してください。

```
eas build --platform android --profile development
```

### iOS IPA

IPA ファイルを生成するには、Apple Developer Program への登録が必要です。登録後、以下のコマンドを実行してください。

```
eas build --platform ios --profile production
```

### Xcode を使用したローカル環境でのビルド

Xcode を使用して iOS アプリをローカルでビルドするには、以下の手順を実行します。

1. Expo プロジェクトで `expo prebuild` コマンドを実行して、ネイティブコードプロジェクトを生成します。
   ```
   expo prebuild
   ```
2. Xcode を開き、生成された iOS プロジェクト（通常は `ios` ディレクトリ内）を開きます。
3. Xcode 内で、個人の Apple ID を使ってサインインし、開発用の証明書を設定します。
4. Xcode のビルド機能を使用して、接続されたデバイスにアプリを直接インストールするか、ipa ファイルを手動でエクスポートします。

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。
