
# 基本情報 一問一答 Webアプリ

ぶたごりら専用の基本情報技術者試験対策アプリ試作版です。

## 使い方

1. ZIPを解凍
2. `index.html` をブラウザで開く
3. スマホで使う場合は、GitHub Pagesなどにアップロード
4. Safari/Chromeで開いて「ホーム画面に追加」

## 機能

- ランダム出題
- 番号順に学習
- 間違えた問題だけ復習
- 保存した問題だけ復習
- 正解数、不正解数、学習済み数の保存
- オフライン対応の土台あり
- ダークモード対応

## 問題追加方法

`questions.js` の `QUESTIONS = [...]` に問題を追加します。

例：

```js
{
  id: 31,
  category: "ネットワーク",
  question: "問題文",
  choices: ["A", "B", "C", "D"],
  answer: 0,
  explanation: "解説文"
}
```

`answer` は 0=A, 1=B, 2=C, 3=D です。


## v2：過去問10年分対応

この版では、アプリ画面から `JSON` 問題データを読み込めます。

### 読み込み用JSON形式

```json
[
  {
    "id": 1,
    "category": "DB",
    "source": "出典：令和○年度 基本情報技術者試験 午前 問○",
    "question": "問題文",
    "choices": ["Aの選択肢", "Bの選択肢", "Cの選択肢", "Dの選択肢"],
    "answer": 0,
    "explanation": "解説"
  }
]
```

`answer` は 0=A, 1=B, 2=C, 3=D です。

### CSVで作りたい場合

`questions_template.csv` に入力して、次のコマンドでJSON化できます。

```bash
python csv_to_questions_json.py questions_template.csv questions.json
```

### 注意

IPA公式の公開過去問題を使う場合は、出典欄に年度・期・試験区分・時間区分・問番号を明記してください。
過去問道場など第三者サイト独自の解説・編集データは、そのサイトの利用規約を確認してください。
