import csv, json, sys
from pathlib import Path

if len(sys.argv) < 3:
    print("使い方: python csv_to_questions_json.py questions.csv questions.json")
    raise SystemExit(1)

src = Path(sys.argv[1])
dst = Path(sys.argv[2])
rows = []

with src.open("r", encoding="utf-8-sig", newline="") as f:
    reader = csv.DictReader(f)
    for i, r in enumerate(reader, start=1):
        answer_raw = (r.get("answer") or "").strip().upper()
        if answer_raw in ["A", "B", "C", "D"]:
            answer = "ABCD".index(answer_raw)
        else:
            answer = int(answer_raw)
        rows.append({
            "id": int(r.get("id") or i),
            "category": r.get("category") or "未分類",
            "source": r.get("source") or "",
            "question": r.get("question") or "",
            "choices": [r.get("choiceA") or "", r.get("choiceB") or "", r.get("choiceC") or "", r.get("choiceD") or ""],
            "answer": answer,
            "explanation": r.get("explanation") or ""
        })

dst.write_text(json.dumps(rows, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"{len(rows)}問を書き出しました: {dst}")
