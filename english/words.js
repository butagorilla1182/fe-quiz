const WORDS = [
  {
    "id": 1,
    "word": "report",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "報告書",
    "example": "The report is important for daily work.",
    "example_ja": "報告書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 2,
    "word": "invoice",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "請求書",
    "example": "The invoice is important for daily work.",
    "example_ja": "請求書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 3,
    "word": "contract",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "契約書",
    "example": "The contract is important for daily work.",
    "example_ja": "契約書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 4,
    "word": "proposal",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "提案書",
    "example": "The proposal is important for daily work.",
    "example_ja": "提案書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 5,
    "word": "resume",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "履歴書",
    "example": "The resume is important for daily work.",
    "example_ja": "履歴書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 6,
    "word": "application",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "申込書",
    "example": "The application is important for daily work.",
    "example_ja": "申込書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 7,
    "word": "form",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "用紙",
    "example": "The form is important for daily work.",
    "example_ja": "用紙は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 8,
    "word": "manual",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "説明書",
    "example": "The manual is important for daily work.",
    "example_ja": "説明書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 9,
    "word": "brochure",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "パンフレット",
    "example": "The brochure is important for daily work.",
    "example_ja": "パンフレットは日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 10,
    "word": "file",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "ファイル",
    "example": "The file is important for daily work.",
    "example_ja": "ファイルは日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 11,
    "word": "record",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "記録",
    "example": "The record is important for daily work.",
    "example_ja": "記録は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 12,
    "word": "document",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "文書",
    "example": "The document is important for daily work.",
    "example_ja": "文書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 13,
    "word": "spreadsheet",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "表計算ファイル",
    "example": "The spreadsheet is important for daily work.",
    "example_ja": "表計算ファイルは日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 14,
    "word": "presentation",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "プレゼン資料",
    "example": "The presentation is important for daily work.",
    "example_ja": "プレゼン資料は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 15,
    "word": "agenda",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "議題",
    "example": "The agenda is important for daily work.",
    "example_ja": "議題は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 16,
    "word": "minutes",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "議事録",
    "example": "The minutes is important for daily work.",
    "example_ja": "議事録は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 17,
    "word": "memo",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "メモ",
    "example": "The memo is important for daily work.",
    "example_ja": "メモは日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 18,
    "word": "notice",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "通知",
    "example": "The notice is important for daily work.",
    "example_ja": "通知は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 19,
    "word": "policy",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "方針",
    "example": "The policy is important for daily work.",
    "example_ja": "方針は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 20,
    "word": "guideline",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "指針",
    "example": "The guideline is important for daily work.",
    "example_ja": "指針は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 21,
    "word": "request",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "依頼",
    "example": "The request is important for daily work.",
    "example_ja": "依頼は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 22,
    "word": "survey",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "調査票",
    "example": "The survey is important for daily work.",
    "example_ja": "調査票は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 23,
    "word": "certificate",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "証明書",
    "example": "The certificate is important for daily work.",
    "example_ja": "証明書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 24,
    "word": "receipt",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "領収書",
    "example": "The receipt is important for daily work.",
    "example_ja": "領収書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 25,
    "word": "statement",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "明細書",
    "example": "The statement is important for daily work.",
    "example_ja": "明細書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 26,
    "word": "estimate",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "見積書",
    "example": "The estimate is important for daily work.",
    "example_ja": "見積書は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 27,
    "word": "quotation",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "見積り",
    "example": "The quotation is important for daily work.",
    "example_ja": "見積りは日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 28,
    "word": "schedule",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "予定表",
    "example": "The schedule is important for daily work.",
    "example_ja": "予定表は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 29,
    "word": "plan",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "計画",
    "example": "The plan is important for daily work.",
    "example_ja": "計画は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 30,
    "word": "checklist",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "確認表",
    "example": "The checklist is important for daily work.",
    "example_ja": "確認表は日常業務で重要だ。",
    "source": "文書：名詞"
  },
  {
    "id": 31,
    "word": "annual",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "年次の",
    "example": "This is a annual item for the project.",
    "example_ja": "これはプロジェクトにとって年次の項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 32,
    "word": "monthly",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "月次の",
    "example": "This is a monthly item for the project.",
    "example_ja": "これはプロジェクトにとって月次の項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 33,
    "word": "detailed",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "詳細な",
    "example": "This is a detailed item for the project.",
    "example_ja": "これはプロジェクトにとって詳細な項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 34,
    "word": "final",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "最終の",
    "example": "This is a final item for the project.",
    "example_ja": "これはプロジェクトにとって最終の項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 35,
    "word": "official",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "公式の",
    "example": "This is a official item for the project.",
    "example_ja": "これはプロジェクトにとって公式の項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 36,
    "word": "updated",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "更新された",
    "example": "This is a updated item for the project.",
    "example_ja": "これはプロジェクトにとって更新された項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 37,
    "word": "revised",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "改訂された",
    "example": "This is a revised item for the project.",
    "example_ja": "これはプロジェクトにとって改訂された項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 38,
    "word": "confidential",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "機密の",
    "example": "This is a confidential item for the project.",
    "example_ja": "これはプロジェクトにとって機密の項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 39,
    "word": "attached",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "添付された",
    "example": "This is a attached item for the project.",
    "example_ja": "これはプロジェクトにとって添付された項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 40,
    "word": "printed",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "印刷された",
    "example": "This is a printed item for the project.",
    "example_ja": "これはプロジェクトにとって印刷された項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 41,
    "word": "digital",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "デジタルの",
    "example": "This is a digital item for the project.",
    "example_ja": "これはプロジェクトにとってデジタルの項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 42,
    "word": "current",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "現在の",
    "example": "This is a current item for the project.",
    "example_ja": "これはプロジェクトにとって現在の項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 43,
    "word": "previous",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "前回の",
    "example": "This is a previous item for the project.",
    "example_ja": "これはプロジェクトにとって前回の項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 44,
    "word": "completed",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "記入済みの",
    "example": "This is a completed item for the project.",
    "example_ja": "これはプロジェクトにとって記入済みの項目だ。",
    "source": "文書：形容詞"
  },
  {
    "id": 45,
    "word": "review",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "確認する",
    "example": "We need to review the details by Friday.",
    "example_ja": "金曜日までに詳細を確認する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 46,
    "word": "submit",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "提出する",
    "example": "We need to submit the details by Friday.",
    "example_ja": "金曜日までに詳細を提出する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 47,
    "word": "attach",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "添付する",
    "example": "We need to attach the details by Friday.",
    "example_ja": "金曜日までに詳細を添付する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 48,
    "word": "update",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "更新する",
    "example": "We need to update the details by Friday.",
    "example_ja": "金曜日までに詳細を更新する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 49,
    "word": "print",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "印刷する",
    "example": "We need to print the details by Friday.",
    "example_ja": "金曜日までに詳細を印刷する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 50,
    "word": "sign",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "署名する",
    "example": "We need to sign the details by Friday.",
    "example_ja": "金曜日までに詳細を署名する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 51,
    "word": "approve",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "承認する",
    "example": "We need to approve the details by Friday.",
    "example_ja": "金曜日までに詳細を承認する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 52,
    "word": "prepare",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "準備する",
    "example": "We need to prepare the details by Friday.",
    "example_ja": "金曜日までに詳細を準備する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 53,
    "word": "complete",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "記入する",
    "example": "We need to complete the details by Friday.",
    "example_ja": "金曜日までに詳細を記入する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 54,
    "word": "revise",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "修正する",
    "example": "We need to revise the details by Friday.",
    "example_ja": "金曜日までに詳細を修正する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 55,
    "word": "distribute",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "配布する",
    "example": "We need to distribute the details by Friday.",
    "example_ja": "金曜日までに詳細を配布する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 56,
    "word": "issue",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "発行する",
    "example": "We need to issue the details by Friday.",
    "example_ja": "金曜日までに詳細を発行する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 57,
    "word": "check",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "確認する",
    "example": "We need to check the details by Friday.",
    "example_ja": "金曜日までに詳細を確認する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 58,
    "word": "confirm",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "確認する",
    "example": "We need to confirm the details by Friday.",
    "example_ja": "金曜日までに詳細を確認する必要がある。",
    "source": "文書：動詞"
  },
  {
    "id": 59,
    "word": "meeting",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "会議",
    "example": "The meeting is important for daily work.",
    "example_ja": "会議は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 60,
    "word": "appointment",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "予約・約束",
    "example": "The appointment is important for daily work.",
    "example_ja": "予約・約束は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 61,
    "word": "conference",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "会議",
    "example": "The conference is important for daily work.",
    "example_ja": "会議は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 62,
    "word": "seminar",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "セミナー",
    "example": "The seminar is important for daily work.",
    "example_ja": "セミナーは日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 63,
    "word": "workshop",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "研修会",
    "example": "The workshop is important for daily work.",
    "example_ja": "研修会は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 64,
    "word": "interview",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "面接",
    "example": "The interview is important for daily work.",
    "example_ja": "面接は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 65,
    "word": "training session",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "研修",
    "example": "The training session is important for daily work.",
    "example_ja": "研修は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 66,
    "word": "briefing",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "説明会",
    "example": "The briefing is important for daily work.",
    "example_ja": "説明会は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 67,
    "word": "discussion",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "話し合い",
    "example": "The discussion is important for daily work.",
    "example_ja": "話し合いは日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 68,
    "word": "negotiation",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "交渉",
    "example": "The negotiation is important for daily work.",
    "example_ja": "交渉は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 69,
    "word": "consultation",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "相談",
    "example": "The consultation is important for daily work.",
    "example_ja": "相談は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 70,
    "word": "event",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "イベント",
    "example": "The event is important for daily work.",
    "example_ja": "イベントは日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 71,
    "word": "webinar",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "オンラインセミナー",
    "example": "The webinar is important for daily work.",
    "example_ja": "オンラインセミナーは日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 72,
    "word": "orientation",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "説明会",
    "example": "The orientation is important for daily work.",
    "example_ja": "説明会は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 73,
    "word": "gathering",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "集まり",
    "example": "The gathering is important for daily work.",
    "example_ja": "集まりは日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 74,
    "word": "session",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "会合",
    "example": "The session is important for daily work.",
    "example_ja": "会合は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 75,
    "word": "visit",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "訪問",
    "example": "The visit is important for daily work.",
    "example_ja": "訪問は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 76,
    "word": "call",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "電話",
    "example": "The call is important for daily work.",
    "example_ja": "電話は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 77,
    "word": "tour",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "見学",
    "example": "The tour is important for daily work.",
    "example_ja": "見学は日常業務で重要だ。",
    "source": "会議：名詞"
  },
  {
    "id": 78,
    "word": "scheduled",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "予定された",
    "example": "This is a scheduled item for the project.",
    "example_ja": "これはプロジェクトにとって予定された項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 79,
    "word": "upcoming",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "今後の",
    "example": "This is a upcoming item for the project.",
    "example_ja": "これはプロジェクトにとって今後の項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 80,
    "word": "weekly",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "毎週の",
    "example": "This is a weekly item for the project.",
    "example_ja": "これはプロジェクトにとって毎週の項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 81,
    "word": "important",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "重要な",
    "example": "This is a important item for the project.",
    "example_ja": "これはプロジェクトにとって重要な項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 82,
    "word": "internal",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "社内の",
    "example": "This is a internal item for the project.",
    "example_ja": "これはプロジェクトにとって社内の項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 83,
    "word": "external",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "外部の",
    "example": "This is a external item for the project.",
    "example_ja": "これはプロジェクトにとって外部の項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 84,
    "word": "online",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "オンラインの",
    "example": "This is a online item for the project.",
    "example_ja": "これはプロジェクトにとってオンラインの項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 85,
    "word": "in-person",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "対面の",
    "example": "This is a in-person item for the project.",
    "example_ja": "これはプロジェクトにとって対面の項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 86,
    "word": "urgent",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "緊急の",
    "example": "This is a urgent item for the project.",
    "example_ja": "これはプロジェクトにとって緊急の項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 87,
    "word": "formal",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "正式な",
    "example": "This is a formal item for the project.",
    "example_ja": "これはプロジェクトにとって正式な項目だ。",
    "source": "会議：形容詞"
  },
  {
    "id": 88,
    "word": "attend",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "出席する",
    "example": "We need to attend the details by Friday.",
    "example_ja": "金曜日までに詳細を出席する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 89,
    "word": "arrange",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "手配する",
    "example": "We need to arrange the details by Friday.",
    "example_ja": "金曜日までに詳細を手配する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 90,
    "word": "postpone",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "延期する",
    "example": "We need to postpone the details by Friday.",
    "example_ja": "金曜日までに詳細を延期する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 91,
    "word": "cancel",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "中止する",
    "example": "We need to cancel the details by Friday.",
    "example_ja": "金曜日までに詳細を中止する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 92,
    "word": "join",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "参加する",
    "example": "We need to join the details by Friday.",
    "example_ja": "金曜日までに詳細を参加する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 93,
    "word": "lead",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "主導する",
    "example": "We need to lead the details by Friday.",
    "example_ja": "金曜日までに詳細を主導する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 94,
    "word": "host",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "主催する",
    "example": "We need to host the details by Friday.",
    "example_ja": "金曜日までに詳細を主催する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 95,
    "word": "organize",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "企画する",
    "example": "We need to organize the details by Friday.",
    "example_ja": "金曜日までに詳細を企画する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 96,
    "word": "reschedule",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "再調整する",
    "example": "We need to reschedule the details by Friday.",
    "example_ja": "金曜日までに詳細を再調整する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 97,
    "word": "prepare for",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "準備する",
    "example": "We need to prepare for the details by Friday.",
    "example_ja": "金曜日までに詳細を準備する必要がある。",
    "source": "会議：動詞"
  },
  {
    "id": 98,
    "word": "manager",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "管理者",
    "example": "The manager is important for daily work.",
    "example_ja": "管理者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 99,
    "word": "supervisor",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "監督者",
    "example": "The supervisor is important for daily work.",
    "example_ja": "監督者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 100,
    "word": "employee",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "従業員",
    "example": "The employee is important for daily work.",
    "example_ja": "従業員は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 101,
    "word": "applicant",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "応募者",
    "example": "The applicant is important for daily work.",
    "example_ja": "応募者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 102,
    "word": "candidate",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "候補者",
    "example": "The candidate is important for daily work.",
    "example_ja": "候補者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 103,
    "word": "customer",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "顧客",
    "example": "The customer is important for daily work.",
    "example_ja": "顧客は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 104,
    "word": "client",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "顧客",
    "example": "The client is important for daily work.",
    "example_ja": "顧客は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 105,
    "word": "visitor",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "訪問者",
    "example": "The visitor is important for daily work.",
    "example_ja": "訪問者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 106,
    "word": "technician",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "技術者",
    "example": "The technician is important for daily work.",
    "example_ja": "技術者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 107,
    "word": "engineer",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "技術者",
    "example": "The engineer is important for daily work.",
    "example_ja": "技術者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 108,
    "word": "representative",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "担当者",
    "example": "The representative is important for daily work.",
    "example_ja": "担当者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 109,
    "word": "assistant",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "助手",
    "example": "The assistant is important for daily work.",
    "example_ja": "助手は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 110,
    "word": "director",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "部長",
    "example": "The director is important for daily work.",
    "example_ja": "部長は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 111,
    "word": "staff member",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "職員",
    "example": "The staff member is important for daily work.",
    "example_ja": "職員は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 112,
    "word": "colleague",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "同僚",
    "example": "The colleague is important for daily work.",
    "example_ja": "同僚は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 113,
    "word": "specialist",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "専門家",
    "example": "The specialist is important for daily work.",
    "example_ja": "専門家は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 114,
    "word": "consultant",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "コンサルタント",
    "example": "The consultant is important for daily work.",
    "example_ja": "コンサルタントは日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 115,
    "word": "contractor",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "請負業者",
    "example": "The contractor is important for daily work.",
    "example_ja": "請負業者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 116,
    "word": "supplier",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "供給業者",
    "example": "The supplier is important for daily work.",
    "example_ja": "供給業者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 117,
    "word": "vendor",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "販売業者",
    "example": "The vendor is important for daily work.",
    "example_ja": "販売業者は日常業務で重要だ。",
    "source": "人物・役職：名詞"
  },
  {
    "id": 118,
    "word": "experienced",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "経験豊富な",
    "example": "This is a experienced item for the project.",
    "example_ja": "これはプロジェクトにとって経験豊富な項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 119,
    "word": "qualified",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "資格のある",
    "example": "This is a qualified item for the project.",
    "example_ja": "これはプロジェクトにとって資格のある項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 120,
    "word": "new",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "新しい",
    "example": "This is a new item for the project.",
    "example_ja": "これはプロジェクトにとって新しい項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 121,
    "word": "potential",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "見込みのある",
    "example": "This is a potential item for the project.",
    "example_ja": "これはプロジェクトにとって見込みのある項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 122,
    "word": "regular",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "常連の",
    "example": "This is a regular item for the project.",
    "example_ja": "これはプロジェクトにとって常連の項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 123,
    "word": "satisfied",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "満足した",
    "example": "This is a satisfied item for the project.",
    "example_ja": "これはプロジェクトにとって満足した項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 124,
    "word": "loyal",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "忠実な",
    "example": "This is a loyal item for the project.",
    "example_ja": "これはプロジェクトにとって忠実な項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 125,
    "word": "temporary",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "一時的な",
    "example": "This is a temporary item for the project.",
    "example_ja": "これはプロジェクトにとって一時的な項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 126,
    "word": "full-time",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "常勤の",
    "example": "This is a full-time item for the project.",
    "example_ja": "これはプロジェクトにとって常勤の項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 127,
    "word": "part-time",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "非常勤の",
    "example": "This is a part-time item for the project.",
    "example_ja": "これはプロジェクトにとって非常勤の項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 128,
    "word": "professional",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "専門的な",
    "example": "This is a professional item for the project.",
    "example_ja": "これはプロジェクトにとって専門的な項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 129,
    "word": "responsible",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "責任ある",
    "example": "This is a responsible item for the project.",
    "example_ja": "これはプロジェクトにとって責任ある項目だ。",
    "source": "人物・役職：形容詞"
  },
  {
    "id": 130,
    "word": "hire",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "雇う",
    "example": "We need to hire the details by Friday.",
    "example_ja": "金曜日までに詳細を雇う必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 131,
    "word": "train",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "訓練する",
    "example": "We need to train the details by Friday.",
    "example_ja": "金曜日までに詳細を訓練する必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 132,
    "word": "contact",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "連絡する",
    "example": "We need to contact the details by Friday.",
    "example_ja": "金曜日までに詳細を連絡する必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 133,
    "word": "assist",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "支援する",
    "example": "We need to assist the details by Friday.",
    "example_ja": "金曜日までに詳細を支援する必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 134,
    "word": "notify",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "通知する",
    "example": "We need to notify the details by Friday.",
    "example_ja": "金曜日までに詳細を通知する必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 135,
    "word": "recommend",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "推薦する",
    "example": "We need to recommend the details by Friday.",
    "example_ja": "金曜日までに詳細を推薦する必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 136,
    "word": "evaluate",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "評価する",
    "example": "We need to evaluate the details by Friday.",
    "example_ja": "金曜日までに詳細を評価する必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 137,
    "word": "supervise",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "監督する",
    "example": "We need to supervise the details by Friday.",
    "example_ja": "金曜日までに詳細を監督する必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 138,
    "word": "support",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "支援する",
    "example": "We need to support the details by Friday.",
    "example_ja": "金曜日までに詳細を支援する必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 139,
    "word": "welcome",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "迎える",
    "example": "We need to welcome the details by Friday.",
    "example_ja": "金曜日までに詳細を迎える必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 140,
    "word": "replace",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "交代させる",
    "example": "We need to replace the details by Friday.",
    "example_ja": "金曜日までに詳細を交代させる必要がある。",
    "source": "人物・役職：動詞"
  },
  {
    "id": 141,
    "word": "budget",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "予算",
    "example": "The budget is important for daily work.",
    "example_ja": "予算は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 142,
    "word": "expense",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "費用",
    "example": "The expense is important for daily work.",
    "example_ja": "費用は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 143,
    "word": "revenue",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "収益",
    "example": "The revenue is important for daily work.",
    "example_ja": "収益は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 144,
    "word": "profit",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "利益",
    "example": "The profit is important for daily work.",
    "example_ja": "利益は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 145,
    "word": "sales",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "売上",
    "example": "The sales is important for daily work.",
    "example_ja": "売上は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 146,
    "word": "cost",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "費用",
    "example": "The cost is important for daily work.",
    "example_ja": "費用は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 147,
    "word": "price",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "価格",
    "example": "The price is important for daily work.",
    "example_ja": "価格は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 148,
    "word": "fee",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "料金",
    "example": "The fee is important for daily work.",
    "example_ja": "料金は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 149,
    "word": "discount",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "割引",
    "example": "The discount is important for daily work.",
    "example_ja": "割引は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 150,
    "word": "refund",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "返金",
    "example": "The refund is important for daily work.",
    "example_ja": "返金は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 151,
    "word": "payment",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "支払い",
    "example": "The payment is important for daily work.",
    "example_ja": "支払いは日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 152,
    "word": "deposit",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "預金・前金",
    "example": "The deposit is important for daily work.",
    "example_ja": "預金・前金は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 153,
    "word": "balance",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "残高",
    "example": "The balance is important for daily work.",
    "example_ja": "残高は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 154,
    "word": "account",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "口座",
    "example": "The account is important for daily work.",
    "example_ja": "口座は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 155,
    "word": "transaction",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "取引",
    "example": "The transaction is important for daily work.",
    "example_ja": "取引は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 156,
    "word": "investment",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "投資",
    "example": "The investment is important for daily work.",
    "example_ja": "投資は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 157,
    "word": "tax",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "税金",
    "example": "The tax is important for daily work.",
    "example_ja": "税金は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 158,
    "word": "payroll",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "給与支払い",
    "example": "The payroll is important for daily work.",
    "example_ja": "給与支払いは日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 159,
    "word": "bill",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "請求書",
    "example": "The bill is important for daily work.",
    "example_ja": "請求書は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 160,
    "word": "charge",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "料金",
    "example": "The charge is important for daily work.",
    "example_ja": "料金は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 161,
    "word": "rate",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "料金・率",
    "example": "The rate is important for daily work.",
    "example_ja": "料金・率は日常業務で重要だ。",
    "source": "会計・販売：名詞"
  },
  {
    "id": 162,
    "word": "total",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "合計の",
    "example": "This is a total item for the project.",
    "example_ja": "これはプロジェクトにとって合計の項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 163,
    "word": "additional",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "追加の",
    "example": "This is a additional item for the project.",
    "example_ja": "これはプロジェクトにとって追加の項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 164,
    "word": "reasonable",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "妥当な",
    "example": "This is a reasonable item for the project.",
    "example_ja": "これはプロジェクトにとって妥当な項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 165,
    "word": "high",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "高い",
    "example": "This is a high item for the project.",
    "example_ja": "これはプロジェクトにとって高い項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 166,
    "word": "low",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "低い",
    "example": "This is a low item for the project.",
    "example_ja": "これはプロジェクトにとって低い項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 167,
    "word": "fixed",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "固定の",
    "example": "This is a fixed item for the project.",
    "example_ja": "これはプロジェクトにとって固定の項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 168,
    "word": "variable",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "変動する",
    "example": "This is a variable item for the project.",
    "example_ja": "これはプロジェクトにとって変動する項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 169,
    "word": "overdue",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "期限を過ぎた",
    "example": "This is a overdue item for the project.",
    "example_ja": "これはプロジェクトにとって期限を過ぎた項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 170,
    "word": "outstanding",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "未払いの",
    "example": "This is a outstanding item for the project.",
    "example_ja": "これはプロジェクトにとって未払いの項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 171,
    "word": "estimated",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "見積りの",
    "example": "This is a estimated item for the project.",
    "example_ja": "これはプロジェクトにとって見積りの項目だ。",
    "source": "会計・販売：形容詞"
  },
  {
    "id": 172,
    "word": "calculate",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "計算する",
    "example": "We need to calculate the details by Friday.",
    "example_ja": "金曜日までに詳細を計算する必要がある。",
    "source": "会計・販売：動詞"
  },
  {
    "id": 173,
    "word": "reduce",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "減らす",
    "example": "We need to reduce the details by Friday.",
    "example_ja": "金曜日までに詳細を減らす必要がある。",
    "source": "会計・販売：動詞"
  },
  {
    "id": 174,
    "word": "increase",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "増やす",
    "example": "We need to increase the details by Friday.",
    "example_ja": "金曜日までに詳細を増やす必要がある。",
    "source": "会計・販売：動詞"
  },
  {
    "id": 175,
    "word": "pay",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "支払う",
    "example": "We need to pay the details by Friday.",
    "example_ja": "金曜日までに詳細を支払う必要がある。",
    "source": "会計・販売：動詞"
  },
  {
    "id": 176,
    "word": "invest",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "投資する",
    "example": "We need to invest the details by Friday.",
    "example_ja": "金曜日までに詳細を投資する必要がある。",
    "source": "会計・販売：動詞"
  },
  {
    "id": 177,
    "word": "compare",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "比較する",
    "example": "We need to compare the details by Friday.",
    "example_ja": "金曜日までに詳細を比較する必要がある。",
    "source": "会計・販売：動詞"
  },
  {
    "id": 178,
    "word": "reimburse",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "払い戻す",
    "example": "We need to reimburse the details by Friday.",
    "example_ja": "金曜日までに詳細を払い戻す必要がある。",
    "source": "会計・販売：動詞"
  },
  {
    "id": 179,
    "word": "office",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "事務所",
    "example": "The office is important for daily work.",
    "example_ja": "事務所は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 180,
    "word": "branch",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "支店",
    "example": "The branch is important for daily work.",
    "example_ja": "支店は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 181,
    "word": "facility",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "施設",
    "example": "The facility is important for daily work.",
    "example_ja": "施設は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 182,
    "word": "equipment",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "設備",
    "example": "The equipment is important for daily work.",
    "example_ja": "設備は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 183,
    "word": "device",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "装置",
    "example": "The device is important for daily work.",
    "example_ja": "装置は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 184,
    "word": "machine",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "機械",
    "example": "The machine is important for daily work.",
    "example_ja": "機械は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 185,
    "word": "printer",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "プリンタ",
    "example": "The printer is important for daily work.",
    "example_ja": "プリンタは日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 186,
    "word": "computer",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "コンピュータ",
    "example": "The computer is important for daily work.",
    "example_ja": "コンピュータは日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 187,
    "word": "laptop",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "ノートパソコン",
    "example": "The laptop is important for daily work.",
    "example_ja": "ノートパソコンは日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 188,
    "word": "monitor",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "モニター",
    "example": "The monitor is important for daily work.",
    "example_ja": "モニターは日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 189,
    "word": "phone",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "電話",
    "example": "The phone is important for daily work.",
    "example_ja": "電話は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 190,
    "word": "desk",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "机",
    "example": "The desk is important for daily work.",
    "example_ja": "机は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 191,
    "word": "chair",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "椅子",
    "example": "The chair is important for daily work.",
    "example_ja": "椅子は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 192,
    "word": "warehouse",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "倉庫",
    "example": "The warehouse is important for daily work.",
    "example_ja": "倉庫は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 193,
    "word": "factory",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "工場",
    "example": "The factory is important for daily work.",
    "example_ja": "工場は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 194,
    "word": "laboratory",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "研究室",
    "example": "The laboratory is important for daily work.",
    "example_ja": "研究室は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 195,
    "word": "entrance",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "入口",
    "example": "The entrance is important for daily work.",
    "example_ja": "入口は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 196,
    "word": "elevator",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "エレベーター",
    "example": "The elevator is important for daily work.",
    "example_ja": "エレベーターは日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 197,
    "word": "lobby",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "ロビー",
    "example": "The lobby is important for daily work.",
    "example_ja": "ロビーは日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 198,
    "word": "parking lot",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "駐車場",
    "example": "The parking lot is important for daily work.",
    "example_ja": "駐車場は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 199,
    "word": "conference room",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "会議室",
    "example": "The conference room is important for daily work.",
    "example_ja": "会議室は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 200,
    "word": "storage room",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "保管室",
    "example": "The storage room is important for daily work.",
    "example_ja": "保管室は日常業務で重要だ。",
    "source": "職場・設備：名詞"
  },
  {
    "id": 201,
    "word": "main",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "主要な",
    "example": "This is a main item for the project.",
    "example_ja": "これはプロジェクトにとって主要な項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 202,
    "word": "local",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "地元の",
    "example": "This is a local item for the project.",
    "example_ja": "これはプロジェクトにとって地元の項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 203,
    "word": "modern",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "現代的な",
    "example": "This is a modern item for the project.",
    "example_ja": "これはプロジェクトにとって現代的な項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 204,
    "word": "shared",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "共有の",
    "example": "This is a shared item for the project.",
    "example_ja": "これはプロジェクトにとって共有の項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 205,
    "word": "available",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "利用可能な",
    "example": "This is a available item for the project.",
    "example_ja": "これはプロジェクトにとって利用可能な項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 206,
    "word": "broken",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "壊れた",
    "example": "This is a broken item for the project.",
    "example_ja": "これはプロジェクトにとって壊れた項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 207,
    "word": "damaged",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "損傷した",
    "example": "This is a damaged item for the project.",
    "example_ja": "これはプロジェクトにとって損傷した項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 208,
    "word": "old",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "古い",
    "example": "This is a old item for the project.",
    "example_ja": "これはプロジェクトにとって古い項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 209,
    "word": "secure",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "安全な",
    "example": "This is a secure item for the project.",
    "example_ja": "これはプロジェクトにとって安全な項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 210,
    "word": "clean",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "清潔な",
    "example": "This is a clean item for the project.",
    "example_ja": "これはプロジェクトにとって清潔な項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 211,
    "word": "spacious",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "広い",
    "example": "This is a spacious item for the project.",
    "example_ja": "これはプロジェクトにとって広い項目だ。",
    "source": "職場・設備：形容詞"
  },
  {
    "id": 212,
    "word": "repair",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "修理する",
    "example": "We need to repair the details by Friday.",
    "example_ja": "金曜日までに詳細を修理する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 213,
    "word": "install",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "設置する",
    "example": "We need to install the details by Friday.",
    "example_ja": "金曜日までに詳細を設置する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 214,
    "word": "inspect",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "点検する",
    "example": "We need to inspect the details by Friday.",
    "example_ja": "金曜日までに詳細を点検する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 215,
    "word": "maintain",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "保守する",
    "example": "We need to maintain the details by Friday.",
    "example_ja": "金曜日までに詳細を保守する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 216,
    "word": "upgrade",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "アップグレードする",
    "example": "We need to upgrade the details by Friday.",
    "example_ja": "金曜日までに詳細をアップグレードする必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 217,
    "word": "reserve",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "予約する",
    "example": "We need to reserve the details by Friday.",
    "example_ja": "金曜日までに詳細を予約する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 218,
    "word": "move",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "移動する",
    "example": "We need to move the details by Friday.",
    "example_ja": "金曜日までに詳細を移動する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 219,
    "word": "deliver",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "配送する",
    "example": "We need to deliver the details by Friday.",
    "example_ja": "金曜日までに詳細を配送する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 220,
    "word": "store",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "保管する",
    "example": "We need to store the details by Friday.",
    "example_ja": "金曜日までに詳細を保管する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 221,
    "word": "operate",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "操作する",
    "example": "We need to operate the details by Friday.",
    "example_ja": "金曜日までに詳細を操作する必要がある。",
    "source": "職場・設備：動詞"
  },
  {
    "id": 222,
    "word": "shipment",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "出荷",
    "example": "The shipment is important for daily work.",
    "example_ja": "出荷は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 223,
    "word": "delivery",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "配送",
    "example": "The delivery is important for daily work.",
    "example_ja": "配送は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 224,
    "word": "package",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "荷物",
    "example": "The package is important for daily work.",
    "example_ja": "荷物は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 225,
    "word": "order",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "注文",
    "example": "The order is important for daily work.",
    "example_ja": "注文は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 226,
    "word": "inventory",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "在庫",
    "example": "The inventory is important for daily work.",
    "example_ja": "在庫は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 227,
    "word": "product",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "製品",
    "example": "The product is important for daily work.",
    "example_ja": "製品は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 228,
    "word": "item",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "品目",
    "example": "The item is important for daily work.",
    "example_ja": "品目は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 229,
    "word": "cargo",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "貨物",
    "example": "The cargo is important for daily work.",
    "example_ja": "貨物は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 230,
    "word": "flight",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "便",
    "example": "The flight is important for daily work.",
    "example_ja": "便は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 231,
    "word": "reservation",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "予約",
    "example": "The reservation is important for daily work.",
    "example_ja": "予約は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 232,
    "word": "itinerary",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "旅程",
    "example": "The itinerary is important for daily work.",
    "example_ja": "旅程は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 233,
    "word": "ticket",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "チケット",
    "example": "The ticket is important for daily work.",
    "example_ja": "チケットは日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 234,
    "word": "hotel",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "ホテル",
    "example": "The hotel is important for daily work.",
    "example_ja": "ホテルは日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 235,
    "word": "vehicle",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "車両",
    "example": "The vehicle is important for daily work.",
    "example_ja": "車両は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 236,
    "word": "route",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "経路",
    "example": "The route is important for daily work.",
    "example_ja": "経路は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 237,
    "word": "destination",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "目的地",
    "example": "The destination is important for daily work.",
    "example_ja": "目的地は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 238,
    "word": "delay",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "遅延",
    "example": "The delay is important for daily work.",
    "example_ja": "遅延は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 239,
    "word": "departure",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "出発",
    "example": "The departure is important for daily work.",
    "example_ja": "出発は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 240,
    "word": "arrival",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "到着",
    "example": "The arrival is important for daily work.",
    "example_ja": "到着は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 241,
    "word": "luggage",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "手荷物",
    "example": "The luggage is important for daily work.",
    "example_ja": "手荷物は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 242,
    "word": "passenger",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "乗客",
    "example": "The passenger is important for daily work.",
    "example_ja": "乗客は日常業務で重要だ。",
    "source": "物流・旅行：名詞"
  },
  {
    "id": 243,
    "word": "international",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "国際の",
    "example": "This is a international item for the project.",
    "example_ja": "これはプロジェクトにとって国際の項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 244,
    "word": "domestic",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "国内の",
    "example": "This is a domestic item for the project.",
    "example_ja": "これはプロジェクトにとって国内の項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 245,
    "word": "express",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "速達の",
    "example": "This is a express item for the project.",
    "example_ja": "これはプロジェクトにとって速達の項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 246,
    "word": "delayed",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "遅れた",
    "example": "This is a delayed item for the project.",
    "example_ja": "これはプロジェクトにとって遅れた項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 247,
    "word": "confirmed",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "確認済みの",
    "example": "This is a confirmed item for the project.",
    "example_ja": "これはプロジェクトにとって確認済みの項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 248,
    "word": "direct",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "直行の",
    "example": "This is a direct item for the project.",
    "example_ja": "これはプロジェクトにとって直行の項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 249,
    "word": "round-trip",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "往復の",
    "example": "This is a round-trip item for the project.",
    "example_ja": "これはプロジェクトにとって往復の項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 250,
    "word": "one-way",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "片道の",
    "example": "This is a one-way item for the project.",
    "example_ja": "これはプロジェクトにとって片道の項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 251,
    "word": "overseas",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "海外の",
    "example": "This is a overseas item for the project.",
    "example_ja": "これはプロジェクトにとって海外の項目だ。",
    "source": "物流・旅行：形容詞"
  },
  {
    "id": 252,
    "word": "ship",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "発送する",
    "example": "We need to ship the details by Friday.",
    "example_ja": "金曜日までに詳細を発送する必要がある。",
    "source": "物流・旅行：動詞"
  },
  {
    "id": 253,
    "word": "track",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "追跡する",
    "example": "We need to track the details by Friday.",
    "example_ja": "金曜日までに詳細を追跡する必要がある。",
    "source": "物流・旅行：動詞"
  },
  {
    "id": 254,
    "word": "receive",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "受け取る",
    "example": "We need to receive the details by Friday.",
    "example_ja": "金曜日までに詳細を受け取る必要がある。",
    "source": "物流・旅行：動詞"
  },
  {
    "id": 255,
    "word": "book",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "予約する",
    "example": "We need to book the details by Friday.",
    "example_ja": "金曜日までに詳細を予約する必要がある。",
    "source": "物流・旅行：動詞"
  },
  {
    "id": 256,
    "word": "transport",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "輸送する",
    "example": "We need to transport the details by Friday.",
    "example_ja": "金曜日までに詳細を輸送する必要がある。",
    "source": "物流・旅行：動詞"
  },
  {
    "id": 257,
    "word": "return",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "返品する",
    "example": "We need to return the details by Friday.",
    "example_ja": "金曜日までに詳細を返品する必要がある。",
    "source": "物流・旅行：動詞"
  },
  {
    "id": 258,
    "word": "database",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "データベース",
    "example": "The database is important for daily work.",
    "example_ja": "データベースは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 259,
    "word": "system",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "システム",
    "example": "The system is important for daily work.",
    "example_ja": "システムは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 260,
    "word": "software",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "ソフトウェア",
    "example": "The software is important for daily work.",
    "example_ja": "ソフトウェアは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 261,
    "word": "network",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "ネットワーク",
    "example": "The network is important for daily work.",
    "example_ja": "ネットワークは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 262,
    "word": "server",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "サーバ",
    "example": "The server is important for daily work.",
    "example_ja": "サーバは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 263,
    "word": "password",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "パスワード",
    "example": "The password is important for daily work.",
    "example_ja": "パスワードは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 264,
    "word": "backup",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "バックアップ",
    "example": "The backup is important for daily work.",
    "example_ja": "バックアップは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 265,
    "word": "website",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "ウェブサイト",
    "example": "The website is important for daily work.",
    "example_ja": "ウェブサイトは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 266,
    "word": "interface",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "インターフェース",
    "example": "The interface is important for daily work.",
    "example_ja": "インターフェースは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 267,
    "word": "function",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "機能",
    "example": "The function is important for daily work.",
    "example_ja": "機能は日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 268,
    "word": "error",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "エラー",
    "example": "The error is important for daily work.",
    "example_ja": "エラーは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 269,
    "word": "bug",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "不具合",
    "example": "The bug is important for daily work.",
    "example_ja": "不具合は日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 270,
    "word": "access",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "アクセス",
    "example": "The access is important for daily work.",
    "example_ja": "アクセスは日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 271,
    "word": "permission",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "許可",
    "example": "The permission is important for daily work.",
    "example_ja": "許可は日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 272,
    "word": "security policy",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "セキュリティ方針",
    "example": "The security policy is important for daily work.",
    "example_ja": "セキュリティ方針は日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 273,
    "word": "authentication",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "認証",
    "example": "The authentication is important for daily work.",
    "example_ja": "認証は日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 274,
    "word": "vulnerability",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "脆弱性",
    "example": "The vulnerability is important for daily work.",
    "example_ja": "脆弱性は日常業務で重要だ。",
    "source": "IT・セキュリティ：名詞"
  },
  {
    "id": 275,
    "word": "reliable",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "信頼できる",
    "example": "This is a reliable item for the project.",
    "example_ja": "これはプロジェクトにとって信頼できる項目だ。",
    "source": "IT・セキュリティ：形容詞"
  },
  {
    "id": 276,
    "word": "automatic",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "自動の",
    "example": "This is a automatic item for the project.",
    "example_ja": "これはプロジェクトにとって自動の項目だ。",
    "source": "IT・セキュリティ：形容詞"
  },
  {
    "id": 277,
    "word": "remote",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "遠隔の",
    "example": "This is a remote item for the project.",
    "example_ja": "これはプロジェクトにとって遠隔の項目だ。",
    "source": "IT・セキュリティ：形容詞"
  },
  {
    "id": 278,
    "word": "unauthorized",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "無許可の",
    "example": "This is a unauthorized item for the project.",
    "example_ja": "これはプロジェクトにとって無許可の項目だ。",
    "source": "IT・セキュリティ：形容詞"
  },
  {
    "id": 279,
    "word": "encrypted",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "暗号化された",
    "example": "This is a encrypted item for the project.",
    "example_ja": "これはプロジェクトにとって暗号化された項目だ。",
    "source": "IT・セキュリティ：形容詞"
  },
  {
    "id": 280,
    "word": "configure",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "設定する",
    "example": "We need to configure the details by Friday.",
    "example_ja": "金曜日までに詳細を設定する必要がある。",
    "source": "IT・セキュリティ：動詞"
  },
  {
    "id": 281,
    "word": "detect",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "検出する",
    "example": "We need to detect the details by Friday.",
    "example_ja": "金曜日までに詳細を検出する必要がある。",
    "source": "IT・セキュリティ：動詞"
  },
  {
    "id": 282,
    "word": "encrypt",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "暗号化する",
    "example": "We need to encrypt the details by Friday.",
    "example_ja": "金曜日までに詳細を暗号化する必要がある。",
    "source": "IT・セキュリティ：動詞"
  },
  {
    "id": 283,
    "word": "restore",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "復元する",
    "example": "We need to restore the details by Friday.",
    "example_ja": "金曜日までに詳細を復元する必要がある。",
    "source": "IT・セキュリティ：動詞"
  },
  {
    "id": 284,
    "word": "back up",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "バックアップする",
    "example": "We need to back up the details by Friday.",
    "example_ja": "金曜日までに詳細をバックアップする必要がある。",
    "source": "IT・セキュリティ：動詞"
  },
  {
    "id": 285,
    "word": "verify",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "検証する",
    "example": "We need to verify the details by Friday.",
    "example_ja": "金曜日までに詳細を検証する必要がある。",
    "source": "IT・セキュリティ：動詞"
  },
  {
    "id": 286,
    "word": "execute",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "実行する",
    "example": "We need to execute the details by Friday.",
    "example_ja": "金曜日までに詳細を実行する必要がある。",
    "source": "IT・セキュリティ：動詞"
  },
  {
    "id": 287,
    "word": "process",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "処理する",
    "example": "We need to process the details by Friday.",
    "example_ja": "金曜日までに詳細を処理する必要がある。",
    "source": "IT・セキュリティ：動詞"
  },
  {
    "id": 288,
    "word": "inquiry",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "問い合わせ",
    "example": "The inquiry is important for daily work.",
    "example_ja": "問い合わせは日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 289,
    "word": "complaint",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "苦情",
    "example": "The complaint is important for daily work.",
    "example_ja": "苦情は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 290,
    "word": "feedback",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "意見",
    "example": "The feedback is important for daily work.",
    "example_ja": "意見は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 291,
    "word": "service",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "サービス",
    "example": "The service is important for daily work.",
    "example_ja": "サービスは日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 292,
    "word": "warranty",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "保証",
    "example": "The warranty is important for daily work.",
    "example_ja": "保証は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 293,
    "word": "exchange",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "交換",
    "example": "The exchange is important for daily work.",
    "example_ja": "交換は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 294,
    "word": "problem",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "問題",
    "example": "The problem is important for daily work.",
    "example_ja": "問題は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 295,
    "word": "solution",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "解決策",
    "example": "The solution is important for daily work.",
    "example_ja": "解決策は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 296,
    "word": "response",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "返答",
    "example": "The response is important for daily work.",
    "example_ja": "返答は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 297,
    "word": "satisfaction",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "満足",
    "example": "The satisfaction is important for daily work.",
    "example_ja": "満足は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 298,
    "word": "membership",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "会員資格",
    "example": "The membership is important for daily work.",
    "example_ja": "会員資格は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 299,
    "word": "subscription",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "定期購読",
    "example": "The subscription is important for daily work.",
    "example_ja": "定期購読は日常業務で重要だ。",
    "source": "顧客対応：名詞"
  },
  {
    "id": 300,
    "word": "polite",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "丁寧な",
    "example": "This is a polite item for the project.",
    "example_ja": "これはプロジェクトにとって丁寧な項目だ。",
    "source": "顧客対応：形容詞"
  },
  {
    "id": 301,
    "word": "prompt",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "迅速な",
    "example": "This is a prompt item for the project.",
    "example_ja": "これはプロジェクトにとって迅速な項目だ。",
    "source": "顧客対応：形容詞"
  },
  {
    "id": 302,
    "word": "helpful",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "役立つ",
    "example": "This is a helpful item for the project.",
    "example_ja": "これはプロジェクトにとって役立つ項目だ。",
    "source": "顧客対応：形容詞"
  },
  {
    "id": 303,
    "word": "clear",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "明確な",
    "example": "This is a clear item for the project.",
    "example_ja": "これはプロジェクトにとって明確な項目だ。",
    "source": "顧客対応：形容詞"
  },
  {
    "id": 304,
    "word": "respond to",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "返答する",
    "example": "We need to respond to the details by Friday.",
    "example_ja": "金曜日までに詳細を返答する必要がある。",
    "source": "顧客対応：動詞"
  },
  {
    "id": 305,
    "word": "resolve",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "解決する",
    "example": "We need to resolve the details by Friday.",
    "example_ja": "金曜日までに詳細を解決する必要がある。",
    "source": "顧客対応：動詞"
  },
  {
    "id": 306,
    "word": "handle",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "対応する",
    "example": "We need to handle the details by Friday.",
    "example_ja": "金曜日までに詳細を対応する必要がある。",
    "source": "顧客対応：動詞"
  },
  {
    "id": 307,
    "word": "answer",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "回答する",
    "example": "We need to answer the details by Friday.",
    "example_ja": "金曜日までに詳細を回答する必要がある。",
    "source": "顧客対応：動詞"
  },
  {
    "id": 308,
    "word": "provide",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "提供する",
    "example": "We need to provide the details by Friday.",
    "example_ja": "金曜日までに詳細を提供する必要がある。",
    "source": "顧客対応：動詞"
  },
  {
    "id": 309,
    "word": "improve",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "改善する",
    "example": "We need to improve the details by Friday.",
    "example_ja": "金曜日までに詳細を改善する必要がある。",
    "source": "顧客対応：動詞"
  },
  {
    "id": 310,
    "word": "position",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "職位",
    "example": "The position is important for daily work.",
    "example_ja": "職位は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 311,
    "word": "qualification",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "資格",
    "example": "The qualification is important for daily work.",
    "example_ja": "資格は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 312,
    "word": "skill",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "技能",
    "example": "The skill is important for daily work.",
    "example_ja": "技能は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 313,
    "word": "experience",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "経験",
    "example": "The experience is important for daily work.",
    "example_ja": "経験は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 314,
    "word": "training",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "研修",
    "example": "The training is important for daily work.",
    "example_ja": "研修は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 315,
    "word": "course",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "講座",
    "example": "The course is important for daily work.",
    "example_ja": "講座は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 316,
    "word": "evaluation",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "評価",
    "example": "The evaluation is important for daily work.",
    "example_ja": "評価は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 317,
    "word": "performance",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "業績",
    "example": "The performance is important for daily work.",
    "example_ja": "業績は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 318,
    "word": "promotion",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "昇進",
    "example": "The promotion is important for daily work.",
    "example_ja": "昇進は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 319,
    "word": "transfer",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "異動",
    "example": "The transfer is important for daily work.",
    "example_ja": "異動は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 320,
    "word": "salary",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "給与",
    "example": "The salary is important for daily work.",
    "example_ja": "給与は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 321,
    "word": "benefit",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "福利厚生",
    "example": "The benefit is important for daily work.",
    "example_ja": "福利厚生は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 322,
    "word": "leave",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "休暇",
    "example": "The leave is important for daily work.",
    "example_ja": "休暇は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 323,
    "word": "attendance",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "出勤",
    "example": "The attendance is important for daily work.",
    "example_ja": "出勤は日常業務で重要だ。",
    "source": "人事・研修：名詞"
  },
  {
    "id": 324,
    "word": "suitable",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "適した",
    "example": "This is a suitable item for the project.",
    "example_ja": "これはプロジェクトにとって適した項目だ。",
    "source": "人事・研修：形容詞"
  },
  {
    "id": 325,
    "word": "open",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "空いている",
    "example": "This is a open item for the project.",
    "example_ja": "これはプロジェクトにとって空いている項目だ。",
    "source": "人事・研修：形容詞"
  },
  {
    "id": 326,
    "word": "vacant",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "空席の",
    "example": "This is a vacant item for the project.",
    "example_ja": "これはプロジェクトにとって空席の項目だ。",
    "source": "人事・研修：形容詞"
  },
  {
    "id": 327,
    "word": "required",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "必要な",
    "example": "This is a required item for the project.",
    "example_ja": "これはプロジェクトにとって必要な項目だ。",
    "source": "人事・研修：形容詞"
  },
  {
    "id": 328,
    "word": "practical",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "実践的な",
    "example": "This is a practical item for the project.",
    "example_ja": "これはプロジェクトにとって実践的な項目だ。",
    "source": "人事・研修：形容詞"
  },
  {
    "id": 329,
    "word": "apply for",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "応募する",
    "example": "We need to apply for the details by Friday.",
    "example_ja": "金曜日までに詳細を応募する必要がある。",
    "source": "人事・研修：動詞"
  },
  {
    "id": 330,
    "word": "promote",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "昇進させる",
    "example": "We need to promote the details by Friday.",
    "example_ja": "金曜日までに詳細を昇進させる必要がある。",
    "source": "人事・研修：動詞"
  },
  {
    "id": 331,
    "word": "develop",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "伸ばす",
    "example": "We need to develop the details by Friday.",
    "example_ja": "金曜日までに詳細を伸ばす必要がある。",
    "source": "人事・研修：動詞"
  },
  {
    "id": 332,
    "word": "data",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "データ",
    "example": "The data is important for daily work.",
    "example_ja": "データは日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 333,
    "word": "information",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "情報",
    "example": "The information is important for daily work.",
    "example_ja": "情報は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 334,
    "word": "evidence",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "根拠",
    "example": "The evidence is important for daily work.",
    "example_ja": "根拠は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 335,
    "word": "result",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "結果",
    "example": "The result is important for daily work.",
    "example_ja": "結果は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 336,
    "word": "trend",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "傾向",
    "example": "The trend is important for daily work.",
    "example_ja": "傾向は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 337,
    "word": "risk",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "リスク",
    "example": "The risk is important for daily work.",
    "example_ja": "リスクは日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 338,
    "word": "option",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "選択肢",
    "example": "The option is important for daily work.",
    "example_ja": "選択肢は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 339,
    "word": "strategy",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "戦略",
    "example": "The strategy is important for daily work.",
    "example_ja": "戦略は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 340,
    "word": "objective",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "目的",
    "example": "The objective is important for daily work.",
    "example_ja": "目的は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 341,
    "word": "goal",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "目標",
    "example": "The goal is important for daily work.",
    "example_ja": "目標は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 342,
    "word": "priority",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "優先事項",
    "example": "The priority is important for daily work.",
    "example_ja": "優先事項は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 343,
    "word": "progress",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "進捗",
    "example": "The progress is important for daily work.",
    "example_ja": "進捗は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 344,
    "word": "project",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "プロジェクト",
    "example": "The project is important for daily work.",
    "example_ja": "プロジェクトは日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 345,
    "word": "timeline",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "工程表",
    "example": "The timeline is important for daily work.",
    "example_ja": "工程表は日常業務で重要だ。",
    "source": "分析・計画：名詞"
  },
  {
    "id": 346,
    "word": "accurate",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "正確な",
    "example": "This is a accurate item for the project.",
    "example_ja": "これはプロジェクトにとって正確な項目だ。",
    "source": "分析・計画：形容詞"
  },
  {
    "id": 347,
    "word": "significant",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "重要な",
    "example": "This is a significant item for the project.",
    "example_ja": "これはプロジェクトにとって重要な項目だ。",
    "source": "分析・計画：形容詞"
  },
  {
    "id": 348,
    "word": "serious",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "深刻な",
    "example": "This is a serious item for the project.",
    "example_ja": "これはプロジェクトにとって深刻な項目だ。",
    "source": "分析・計画：形容詞"
  },
  {
    "id": 349,
    "word": "effective",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "効果的な",
    "example": "This is a effective item for the project.",
    "example_ja": "これはプロジェクトにとって効果的な項目だ。",
    "source": "分析・計画：形容詞"
  },
  {
    "id": 350,
    "word": "efficient",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "効率的な",
    "example": "This is a efficient item for the project.",
    "example_ja": "これはプロジェクトにとって効率的な項目だ。",
    "source": "分析・計画：形容詞"
  },
  {
    "id": 351,
    "word": "analyze",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "分析する",
    "example": "We need to analyze the details by Friday.",
    "example_ja": "金曜日までに詳細を分析する必要がある。",
    "source": "分析・計画：動詞"
  },
  {
    "id": 352,
    "word": "assess",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "評価する",
    "example": "We need to assess the details by Friday.",
    "example_ja": "金曜日までに詳細を評価する必要がある。",
    "source": "分析・計画：動詞"
  },
  {
    "id": 353,
    "word": "identify",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "特定する",
    "example": "We need to identify the details by Friday.",
    "example_ja": "金曜日までに詳細を特定する必要がある。",
    "source": "分析・計画：動詞"
  },
  {
    "id": 354,
    "word": "consider",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "検討する",
    "example": "We need to consider the details by Friday.",
    "example_ja": "金曜日までに詳細を検討する必要がある。",
    "source": "分析・計画：動詞"
  },
  {
    "id": 355,
    "word": "measure",
    "pron": "",
    "level": "TOEIC600",
    "meaning": "測定する",
    "example": "We need to measure the details by Friday.",
    "example_ja": "金曜日までに詳細を測定する必要がある。",
    "source": "分析・計画：動詞"
  },
  {
    "id": 356,
    "word": "annual report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の報告書",
    "example": "Please check the annual report before the meeting.",
    "example_ja": "会議の前に年次の報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 357,
    "word": "annual invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の請求書",
    "example": "Please check the annual invoice before the meeting.",
    "example_ja": "会議の前に年次の請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 358,
    "word": "annual contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の契約書",
    "example": "Please check the annual contract before the meeting.",
    "example_ja": "会議の前に年次の契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 359,
    "word": "annual proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の提案書",
    "example": "Please check the annual proposal before the meeting.",
    "example_ja": "会議の前に年次の提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 360,
    "word": "annual resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の履歴書",
    "example": "Please check the annual resume before the meeting.",
    "example_ja": "会議の前に年次の履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 361,
    "word": "annual application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の申込書",
    "example": "Please check the annual application before the meeting.",
    "example_ja": "会議の前に年次の申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 362,
    "word": "annual form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の用紙",
    "example": "Please check the annual form before the meeting.",
    "example_ja": "会議の前に年次の用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 363,
    "word": "annual manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の説明書",
    "example": "Please check the annual manual before the meeting.",
    "example_ja": "会議の前に年次の説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 364,
    "word": "annual brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次のパンフレット",
    "example": "Please check the annual brochure before the meeting.",
    "example_ja": "会議の前に年次のパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 365,
    "word": "annual file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次のファイル",
    "example": "Please check the annual file before the meeting.",
    "example_ja": "会議の前に年次のファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 366,
    "word": "annual record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の記録",
    "example": "Please check the annual record before the meeting.",
    "example_ja": "会議の前に年次の記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 367,
    "word": "annual document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の文書",
    "example": "Please check the annual document before the meeting.",
    "example_ja": "会議の前に年次の文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 368,
    "word": "annual spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の表計算ファイル",
    "example": "Please check the annual spreadsheet before the meeting.",
    "example_ja": "会議の前に年次の表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 369,
    "word": "annual presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次のプレゼン資料",
    "example": "Please check the annual presentation before the meeting.",
    "example_ja": "会議の前に年次のプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 370,
    "word": "annual agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の議題",
    "example": "Please check the annual agenda before the meeting.",
    "example_ja": "会議の前に年次の議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 371,
    "word": "annual minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の議事録",
    "example": "Please check the annual minutes before the meeting.",
    "example_ja": "会議の前に年次の議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 372,
    "word": "annual memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次のメモ",
    "example": "Please check the annual memo before the meeting.",
    "example_ja": "会議の前に年次のメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 373,
    "word": "annual notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の通知",
    "example": "Please check the annual notice before the meeting.",
    "example_ja": "会議の前に年次の通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 374,
    "word": "annual policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の方針",
    "example": "Please check the annual policy before the meeting.",
    "example_ja": "会議の前に年次の方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 375,
    "word": "annual guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の指針",
    "example": "Please check the annual guideline before the meeting.",
    "example_ja": "会議の前に年次の指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 376,
    "word": "annual request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の依頼",
    "example": "Please check the annual request before the meeting.",
    "example_ja": "会議の前に年次の依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 377,
    "word": "annual survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の調査票",
    "example": "Please check the annual survey before the meeting.",
    "example_ja": "会議の前に年次の調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 378,
    "word": "annual certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の証明書",
    "example": "Please check the annual certificate before the meeting.",
    "example_ja": "会議の前に年次の証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 379,
    "word": "annual receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の領収書",
    "example": "Please check the annual receipt before the meeting.",
    "example_ja": "会議の前に年次の領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 380,
    "word": "annual statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の明細書",
    "example": "Please check the annual statement before the meeting.",
    "example_ja": "会議の前に年次の明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 381,
    "word": "annual estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の見積書",
    "example": "Please check the annual estimate before the meeting.",
    "example_ja": "会議の前に年次の見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 382,
    "word": "annual quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の見積り",
    "example": "Please check the annual quotation before the meeting.",
    "example_ja": "会議の前に年次の見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 383,
    "word": "annual schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の予定表",
    "example": "Please check the annual schedule before the meeting.",
    "example_ja": "会議の前に年次の予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 384,
    "word": "annual plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の計画",
    "example": "Please check the annual plan before the meeting.",
    "example_ja": "会議の前に年次の計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 385,
    "word": "annual checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の確認表",
    "example": "Please check the annual checklist before the meeting.",
    "example_ja": "会議の前に年次の確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 386,
    "word": "monthly report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の報告書",
    "example": "Please check the monthly report before the meeting.",
    "example_ja": "会議の前に月次の報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 387,
    "word": "monthly invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の請求書",
    "example": "Please check the monthly invoice before the meeting.",
    "example_ja": "会議の前に月次の請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 388,
    "word": "monthly contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の契約書",
    "example": "Please check the monthly contract before the meeting.",
    "example_ja": "会議の前に月次の契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 389,
    "word": "monthly proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の提案書",
    "example": "Please check the monthly proposal before the meeting.",
    "example_ja": "会議の前に月次の提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 390,
    "word": "monthly resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の履歴書",
    "example": "Please check the monthly resume before the meeting.",
    "example_ja": "会議の前に月次の履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 391,
    "word": "monthly application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の申込書",
    "example": "Please check the monthly application before the meeting.",
    "example_ja": "会議の前に月次の申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 392,
    "word": "monthly form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の用紙",
    "example": "Please check the monthly form before the meeting.",
    "example_ja": "会議の前に月次の用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 393,
    "word": "monthly manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の説明書",
    "example": "Please check the monthly manual before the meeting.",
    "example_ja": "会議の前に月次の説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 394,
    "word": "monthly brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次のパンフレット",
    "example": "Please check the monthly brochure before the meeting.",
    "example_ja": "会議の前に月次のパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 395,
    "word": "monthly file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次のファイル",
    "example": "Please check the monthly file before the meeting.",
    "example_ja": "会議の前に月次のファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 396,
    "word": "monthly record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の記録",
    "example": "Please check the monthly record before the meeting.",
    "example_ja": "会議の前に月次の記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 397,
    "word": "monthly document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の文書",
    "example": "Please check the monthly document before the meeting.",
    "example_ja": "会議の前に月次の文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 398,
    "word": "monthly spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の表計算ファイル",
    "example": "Please check the monthly spreadsheet before the meeting.",
    "example_ja": "会議の前に月次の表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 399,
    "word": "monthly presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次のプレゼン資料",
    "example": "Please check the monthly presentation before the meeting.",
    "example_ja": "会議の前に月次のプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 400,
    "word": "monthly agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の議題",
    "example": "Please check the monthly agenda before the meeting.",
    "example_ja": "会議の前に月次の議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 401,
    "word": "monthly minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の議事録",
    "example": "Please check the monthly minutes before the meeting.",
    "example_ja": "会議の前に月次の議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 402,
    "word": "monthly memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次のメモ",
    "example": "Please check the monthly memo before the meeting.",
    "example_ja": "会議の前に月次のメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 403,
    "word": "monthly notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の通知",
    "example": "Please check the monthly notice before the meeting.",
    "example_ja": "会議の前に月次の通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 404,
    "word": "monthly policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の方針",
    "example": "Please check the monthly policy before the meeting.",
    "example_ja": "会議の前に月次の方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 405,
    "word": "monthly guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の指針",
    "example": "Please check the monthly guideline before the meeting.",
    "example_ja": "会議の前に月次の指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 406,
    "word": "monthly request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の依頼",
    "example": "Please check the monthly request before the meeting.",
    "example_ja": "会議の前に月次の依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 407,
    "word": "monthly survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の調査票",
    "example": "Please check the monthly survey before the meeting.",
    "example_ja": "会議の前に月次の調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 408,
    "word": "monthly certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の証明書",
    "example": "Please check the monthly certificate before the meeting.",
    "example_ja": "会議の前に月次の証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 409,
    "word": "monthly receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の領収書",
    "example": "Please check the monthly receipt before the meeting.",
    "example_ja": "会議の前に月次の領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 410,
    "word": "monthly statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の明細書",
    "example": "Please check the monthly statement before the meeting.",
    "example_ja": "会議の前に月次の明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 411,
    "word": "monthly estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の見積書",
    "example": "Please check the monthly estimate before the meeting.",
    "example_ja": "会議の前に月次の見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 412,
    "word": "monthly quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の見積り",
    "example": "Please check the monthly quotation before the meeting.",
    "example_ja": "会議の前に月次の見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 413,
    "word": "monthly schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の予定表",
    "example": "Please check the monthly schedule before the meeting.",
    "example_ja": "会議の前に月次の予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 414,
    "word": "monthly plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の計画",
    "example": "Please check the monthly plan before the meeting.",
    "example_ja": "会議の前に月次の計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 415,
    "word": "monthly checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "月次の確認表",
    "example": "Please check the monthly checklist before the meeting.",
    "example_ja": "会議の前に月次の確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 416,
    "word": "detailed report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な報告書",
    "example": "Please check the detailed report before the meeting.",
    "example_ja": "会議の前に詳細な報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 417,
    "word": "detailed invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な請求書",
    "example": "Please check the detailed invoice before the meeting.",
    "example_ja": "会議の前に詳細な請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 418,
    "word": "detailed contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な契約書",
    "example": "Please check the detailed contract before the meeting.",
    "example_ja": "会議の前に詳細な契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 419,
    "word": "detailed proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な提案書",
    "example": "Please check the detailed proposal before the meeting.",
    "example_ja": "会議の前に詳細な提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 420,
    "word": "detailed resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な履歴書",
    "example": "Please check the detailed resume before the meeting.",
    "example_ja": "会議の前に詳細な履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 421,
    "word": "detailed application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な申込書",
    "example": "Please check the detailed application before the meeting.",
    "example_ja": "会議の前に詳細な申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 422,
    "word": "detailed form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な用紙",
    "example": "Please check the detailed form before the meeting.",
    "example_ja": "会議の前に詳細な用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 423,
    "word": "detailed manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な説明書",
    "example": "Please check the detailed manual before the meeting.",
    "example_ja": "会議の前に詳細な説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 424,
    "word": "detailed brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細なパンフレット",
    "example": "Please check the detailed brochure before the meeting.",
    "example_ja": "会議の前に詳細なパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 425,
    "word": "detailed file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細なファイル",
    "example": "Please check the detailed file before the meeting.",
    "example_ja": "会議の前に詳細なファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 426,
    "word": "detailed record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な記録",
    "example": "Please check the detailed record before the meeting.",
    "example_ja": "会議の前に詳細な記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 427,
    "word": "detailed document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な文書",
    "example": "Please check the detailed document before the meeting.",
    "example_ja": "会議の前に詳細な文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 428,
    "word": "detailed spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な表計算ファイル",
    "example": "Please check the detailed spreadsheet before the meeting.",
    "example_ja": "会議の前に詳細な表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 429,
    "word": "detailed presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細なプレゼン資料",
    "example": "Please check the detailed presentation before the meeting.",
    "example_ja": "会議の前に詳細なプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 430,
    "word": "detailed agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な議題",
    "example": "Please check the detailed agenda before the meeting.",
    "example_ja": "会議の前に詳細な議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 431,
    "word": "detailed minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な議事録",
    "example": "Please check the detailed minutes before the meeting.",
    "example_ja": "会議の前に詳細な議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 432,
    "word": "detailed memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細なメモ",
    "example": "Please check the detailed memo before the meeting.",
    "example_ja": "会議の前に詳細なメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 433,
    "word": "detailed notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な通知",
    "example": "Please check the detailed notice before the meeting.",
    "example_ja": "会議の前に詳細な通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 434,
    "word": "detailed policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な方針",
    "example": "Please check the detailed policy before the meeting.",
    "example_ja": "会議の前に詳細な方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 435,
    "word": "detailed guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な指針",
    "example": "Please check the detailed guideline before the meeting.",
    "example_ja": "会議の前に詳細な指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 436,
    "word": "detailed request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な依頼",
    "example": "Please check the detailed request before the meeting.",
    "example_ja": "会議の前に詳細な依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 437,
    "word": "detailed survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な調査票",
    "example": "Please check the detailed survey before the meeting.",
    "example_ja": "会議の前に詳細な調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 438,
    "word": "detailed certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な証明書",
    "example": "Please check the detailed certificate before the meeting.",
    "example_ja": "会議の前に詳細な証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 439,
    "word": "detailed receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な領収書",
    "example": "Please check the detailed receipt before the meeting.",
    "example_ja": "会議の前に詳細な領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 440,
    "word": "detailed statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な明細書",
    "example": "Please check the detailed statement before the meeting.",
    "example_ja": "会議の前に詳細な明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 441,
    "word": "detailed estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な見積書",
    "example": "Please check the detailed estimate before the meeting.",
    "example_ja": "会議の前に詳細な見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 442,
    "word": "detailed quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な見積り",
    "example": "Please check the detailed quotation before the meeting.",
    "example_ja": "会議の前に詳細な見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 443,
    "word": "detailed schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な予定表",
    "example": "Please check the detailed schedule before the meeting.",
    "example_ja": "会議の前に詳細な予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 444,
    "word": "detailed plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な計画",
    "example": "Please check the detailed plan before the meeting.",
    "example_ja": "会議の前に詳細な計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 445,
    "word": "detailed checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "詳細な確認表",
    "example": "Please check the detailed checklist before the meeting.",
    "example_ja": "会議の前に詳細な確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 446,
    "word": "final report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の報告書",
    "example": "Please check the final report before the meeting.",
    "example_ja": "会議の前に最終の報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 447,
    "word": "final invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の請求書",
    "example": "Please check the final invoice before the meeting.",
    "example_ja": "会議の前に最終の請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 448,
    "word": "final contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の契約書",
    "example": "Please check the final contract before the meeting.",
    "example_ja": "会議の前に最終の契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 449,
    "word": "final proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の提案書",
    "example": "Please check the final proposal before the meeting.",
    "example_ja": "会議の前に最終の提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 450,
    "word": "final resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の履歴書",
    "example": "Please check the final resume before the meeting.",
    "example_ja": "会議の前に最終の履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 451,
    "word": "final application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の申込書",
    "example": "Please check the final application before the meeting.",
    "example_ja": "会議の前に最終の申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 452,
    "word": "final form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の用紙",
    "example": "Please check the final form before the meeting.",
    "example_ja": "会議の前に最終の用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 453,
    "word": "final manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の説明書",
    "example": "Please check the final manual before the meeting.",
    "example_ja": "会議の前に最終の説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 454,
    "word": "final brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終のパンフレット",
    "example": "Please check the final brochure before the meeting.",
    "example_ja": "会議の前に最終のパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 455,
    "word": "final file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終のファイル",
    "example": "Please check the final file before the meeting.",
    "example_ja": "会議の前に最終のファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 456,
    "word": "final record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の記録",
    "example": "Please check the final record before the meeting.",
    "example_ja": "会議の前に最終の記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 457,
    "word": "final document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の文書",
    "example": "Please check the final document before the meeting.",
    "example_ja": "会議の前に最終の文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 458,
    "word": "final spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の表計算ファイル",
    "example": "Please check the final spreadsheet before the meeting.",
    "example_ja": "会議の前に最終の表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 459,
    "word": "final presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終のプレゼン資料",
    "example": "Please check the final presentation before the meeting.",
    "example_ja": "会議の前に最終のプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 460,
    "word": "final agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の議題",
    "example": "Please check the final agenda before the meeting.",
    "example_ja": "会議の前に最終の議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 461,
    "word": "final minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の議事録",
    "example": "Please check the final minutes before the meeting.",
    "example_ja": "会議の前に最終の議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 462,
    "word": "final memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終のメモ",
    "example": "Please check the final memo before the meeting.",
    "example_ja": "会議の前に最終のメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 463,
    "word": "final notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の通知",
    "example": "Please check the final notice before the meeting.",
    "example_ja": "会議の前に最終の通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 464,
    "word": "final policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の方針",
    "example": "Please check the final policy before the meeting.",
    "example_ja": "会議の前に最終の方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 465,
    "word": "final guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の指針",
    "example": "Please check the final guideline before the meeting.",
    "example_ja": "会議の前に最終の指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 466,
    "word": "final request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の依頼",
    "example": "Please check the final request before the meeting.",
    "example_ja": "会議の前に最終の依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 467,
    "word": "final survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の調査票",
    "example": "Please check the final survey before the meeting.",
    "example_ja": "会議の前に最終の調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 468,
    "word": "final certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の証明書",
    "example": "Please check the final certificate before the meeting.",
    "example_ja": "会議の前に最終の証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 469,
    "word": "final receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の領収書",
    "example": "Please check the final receipt before the meeting.",
    "example_ja": "会議の前に最終の領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 470,
    "word": "final statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の明細書",
    "example": "Please check the final statement before the meeting.",
    "example_ja": "会議の前に最終の明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 471,
    "word": "final estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の見積書",
    "example": "Please check the final estimate before the meeting.",
    "example_ja": "会議の前に最終の見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 472,
    "word": "final quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の見積り",
    "example": "Please check the final quotation before the meeting.",
    "example_ja": "会議の前に最終の見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 473,
    "word": "final schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の予定表",
    "example": "Please check the final schedule before the meeting.",
    "example_ja": "会議の前に最終の予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 474,
    "word": "final plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の計画",
    "example": "Please check the final plan before the meeting.",
    "example_ja": "会議の前に最終の計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 475,
    "word": "final checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の確認表",
    "example": "Please check the final checklist before the meeting.",
    "example_ja": "会議の前に最終の確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 476,
    "word": "official report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の報告書",
    "example": "Please check the official report before the meeting.",
    "example_ja": "会議の前に公式の報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 477,
    "word": "official invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の請求書",
    "example": "Please check the official invoice before the meeting.",
    "example_ja": "会議の前に公式の請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 478,
    "word": "official contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の契約書",
    "example": "Please check the official contract before the meeting.",
    "example_ja": "会議の前に公式の契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 479,
    "word": "official proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の提案書",
    "example": "Please check the official proposal before the meeting.",
    "example_ja": "会議の前に公式の提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 480,
    "word": "official resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の履歴書",
    "example": "Please check the official resume before the meeting.",
    "example_ja": "会議の前に公式の履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 481,
    "word": "official application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の申込書",
    "example": "Please check the official application before the meeting.",
    "example_ja": "会議の前に公式の申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 482,
    "word": "official form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の用紙",
    "example": "Please check the official form before the meeting.",
    "example_ja": "会議の前に公式の用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 483,
    "word": "official manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の説明書",
    "example": "Please check the official manual before the meeting.",
    "example_ja": "会議の前に公式の説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 484,
    "word": "official brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式のパンフレット",
    "example": "Please check the official brochure before the meeting.",
    "example_ja": "会議の前に公式のパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 485,
    "word": "official file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式のファイル",
    "example": "Please check the official file before the meeting.",
    "example_ja": "会議の前に公式のファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 486,
    "word": "official record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の記録",
    "example": "Please check the official record before the meeting.",
    "example_ja": "会議の前に公式の記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 487,
    "word": "official document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の文書",
    "example": "Please check the official document before the meeting.",
    "example_ja": "会議の前に公式の文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 488,
    "word": "official spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の表計算ファイル",
    "example": "Please check the official spreadsheet before the meeting.",
    "example_ja": "会議の前に公式の表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 489,
    "word": "official presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式のプレゼン資料",
    "example": "Please check the official presentation before the meeting.",
    "example_ja": "会議の前に公式のプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 490,
    "word": "official agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の議題",
    "example": "Please check the official agenda before the meeting.",
    "example_ja": "会議の前に公式の議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 491,
    "word": "official minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の議事録",
    "example": "Please check the official minutes before the meeting.",
    "example_ja": "会議の前に公式の議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 492,
    "word": "official memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式のメモ",
    "example": "Please check the official memo before the meeting.",
    "example_ja": "会議の前に公式のメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 493,
    "word": "official notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の通知",
    "example": "Please check the official notice before the meeting.",
    "example_ja": "会議の前に公式の通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 494,
    "word": "official policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の方針",
    "example": "Please check the official policy before the meeting.",
    "example_ja": "会議の前に公式の方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 495,
    "word": "official guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の指針",
    "example": "Please check the official guideline before the meeting.",
    "example_ja": "会議の前に公式の指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 496,
    "word": "official request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の依頼",
    "example": "Please check the official request before the meeting.",
    "example_ja": "会議の前に公式の依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 497,
    "word": "official survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の調査票",
    "example": "Please check the official survey before the meeting.",
    "example_ja": "会議の前に公式の調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 498,
    "word": "official certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の証明書",
    "example": "Please check the official certificate before the meeting.",
    "example_ja": "会議の前に公式の証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 499,
    "word": "official receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の領収書",
    "example": "Please check the official receipt before the meeting.",
    "example_ja": "会議の前に公式の領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 500,
    "word": "official statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の明細書",
    "example": "Please check the official statement before the meeting.",
    "example_ja": "会議の前に公式の明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 501,
    "word": "official estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の見積書",
    "example": "Please check the official estimate before the meeting.",
    "example_ja": "会議の前に公式の見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 502,
    "word": "official quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の見積り",
    "example": "Please check the official quotation before the meeting.",
    "example_ja": "会議の前に公式の見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 503,
    "word": "official schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の予定表",
    "example": "Please check the official schedule before the meeting.",
    "example_ja": "会議の前に公式の予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 504,
    "word": "official plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の計画",
    "example": "Please check the official plan before the meeting.",
    "example_ja": "会議の前に公式の計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 505,
    "word": "official checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "公式の確認表",
    "example": "Please check the official checklist before the meeting.",
    "example_ja": "会議の前に公式の確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 506,
    "word": "updated report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された報告書",
    "example": "Please check the updated report before the meeting.",
    "example_ja": "会議の前に更新された報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 507,
    "word": "updated invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された請求書",
    "example": "Please check the updated invoice before the meeting.",
    "example_ja": "会議の前に更新された請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 508,
    "word": "updated contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された契約書",
    "example": "Please check the updated contract before the meeting.",
    "example_ja": "会議の前に更新された契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 509,
    "word": "updated proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された提案書",
    "example": "Please check the updated proposal before the meeting.",
    "example_ja": "会議の前に更新された提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 510,
    "word": "updated resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された履歴書",
    "example": "Please check the updated resume before the meeting.",
    "example_ja": "会議の前に更新された履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 511,
    "word": "updated application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された申込書",
    "example": "Please check the updated application before the meeting.",
    "example_ja": "会議の前に更新された申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 512,
    "word": "updated form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された用紙",
    "example": "Please check the updated form before the meeting.",
    "example_ja": "会議の前に更新された用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 513,
    "word": "updated manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された説明書",
    "example": "Please check the updated manual before the meeting.",
    "example_ja": "会議の前に更新された説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 514,
    "word": "updated brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新されたパンフレット",
    "example": "Please check the updated brochure before the meeting.",
    "example_ja": "会議の前に更新されたパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 515,
    "word": "updated file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新されたファイル",
    "example": "Please check the updated file before the meeting.",
    "example_ja": "会議の前に更新されたファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 516,
    "word": "updated record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された記録",
    "example": "Please check the updated record before the meeting.",
    "example_ja": "会議の前に更新された記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 517,
    "word": "updated document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された文書",
    "example": "Please check the updated document before the meeting.",
    "example_ja": "会議の前に更新された文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 518,
    "word": "updated spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された表計算ファイル",
    "example": "Please check the updated spreadsheet before the meeting.",
    "example_ja": "会議の前に更新された表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 519,
    "word": "updated presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新されたプレゼン資料",
    "example": "Please check the updated presentation before the meeting.",
    "example_ja": "会議の前に更新されたプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 520,
    "word": "updated agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された議題",
    "example": "Please check the updated agenda before the meeting.",
    "example_ja": "会議の前に更新された議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 521,
    "word": "updated minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された議事録",
    "example": "Please check the updated minutes before the meeting.",
    "example_ja": "会議の前に更新された議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 522,
    "word": "updated memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新されたメモ",
    "example": "Please check the updated memo before the meeting.",
    "example_ja": "会議の前に更新されたメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 523,
    "word": "updated notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された通知",
    "example": "Please check the updated notice before the meeting.",
    "example_ja": "会議の前に更新された通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 524,
    "word": "updated policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された方針",
    "example": "Please check the updated policy before the meeting.",
    "example_ja": "会議の前に更新された方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 525,
    "word": "updated guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された指針",
    "example": "Please check the updated guideline before the meeting.",
    "example_ja": "会議の前に更新された指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 526,
    "word": "updated request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された依頼",
    "example": "Please check the updated request before the meeting.",
    "example_ja": "会議の前に更新された依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 527,
    "word": "updated survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された調査票",
    "example": "Please check the updated survey before the meeting.",
    "example_ja": "会議の前に更新された調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 528,
    "word": "updated certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された証明書",
    "example": "Please check the updated certificate before the meeting.",
    "example_ja": "会議の前に更新された証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 529,
    "word": "updated receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された領収書",
    "example": "Please check the updated receipt before the meeting.",
    "example_ja": "会議の前に更新された領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 530,
    "word": "updated statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された明細書",
    "example": "Please check the updated statement before the meeting.",
    "example_ja": "会議の前に更新された明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 531,
    "word": "updated estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された見積書",
    "example": "Please check the updated estimate before the meeting.",
    "example_ja": "会議の前に更新された見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 532,
    "word": "updated quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された見積り",
    "example": "Please check the updated quotation before the meeting.",
    "example_ja": "会議の前に更新された見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 533,
    "word": "updated schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された予定表",
    "example": "Please check the updated schedule before the meeting.",
    "example_ja": "会議の前に更新された予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 534,
    "word": "updated plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された計画",
    "example": "Please check the updated plan before the meeting.",
    "example_ja": "会議の前に更新された計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 535,
    "word": "updated checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "更新された確認表",
    "example": "Please check the updated checklist before the meeting.",
    "example_ja": "会議の前に更新された確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 536,
    "word": "revised report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された報告書",
    "example": "Please check the revised report before the meeting.",
    "example_ja": "会議の前に改訂された報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 537,
    "word": "revised invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された請求書",
    "example": "Please check the revised invoice before the meeting.",
    "example_ja": "会議の前に改訂された請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 538,
    "word": "revised contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された契約書",
    "example": "Please check the revised contract before the meeting.",
    "example_ja": "会議の前に改訂された契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 539,
    "word": "revised proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された提案書",
    "example": "Please check the revised proposal before the meeting.",
    "example_ja": "会議の前に改訂された提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 540,
    "word": "revised resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された履歴書",
    "example": "Please check the revised resume before the meeting.",
    "example_ja": "会議の前に改訂された履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 541,
    "word": "revised application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された申込書",
    "example": "Please check the revised application before the meeting.",
    "example_ja": "会議の前に改訂された申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 542,
    "word": "revised form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された用紙",
    "example": "Please check the revised form before the meeting.",
    "example_ja": "会議の前に改訂された用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 543,
    "word": "revised manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された説明書",
    "example": "Please check the revised manual before the meeting.",
    "example_ja": "会議の前に改訂された説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 544,
    "word": "revised brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂されたパンフレット",
    "example": "Please check the revised brochure before the meeting.",
    "example_ja": "会議の前に改訂されたパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 545,
    "word": "revised file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂されたファイル",
    "example": "Please check the revised file before the meeting.",
    "example_ja": "会議の前に改訂されたファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 546,
    "word": "revised record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された記録",
    "example": "Please check the revised record before the meeting.",
    "example_ja": "会議の前に改訂された記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 547,
    "word": "revised document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された文書",
    "example": "Please check the revised document before the meeting.",
    "example_ja": "会議の前に改訂された文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 548,
    "word": "revised spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された表計算ファイル",
    "example": "Please check the revised spreadsheet before the meeting.",
    "example_ja": "会議の前に改訂された表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 549,
    "word": "revised presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂されたプレゼン資料",
    "example": "Please check the revised presentation before the meeting.",
    "example_ja": "会議の前に改訂されたプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 550,
    "word": "revised agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された議題",
    "example": "Please check the revised agenda before the meeting.",
    "example_ja": "会議の前に改訂された議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 551,
    "word": "revised minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された議事録",
    "example": "Please check the revised minutes before the meeting.",
    "example_ja": "会議の前に改訂された議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 552,
    "word": "revised memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂されたメモ",
    "example": "Please check the revised memo before the meeting.",
    "example_ja": "会議の前に改訂されたメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 553,
    "word": "revised notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された通知",
    "example": "Please check the revised notice before the meeting.",
    "example_ja": "会議の前に改訂された通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 554,
    "word": "revised policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された方針",
    "example": "Please check the revised policy before the meeting.",
    "example_ja": "会議の前に改訂された方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 555,
    "word": "revised guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された指針",
    "example": "Please check the revised guideline before the meeting.",
    "example_ja": "会議の前に改訂された指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 556,
    "word": "revised request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された依頼",
    "example": "Please check the revised request before the meeting.",
    "example_ja": "会議の前に改訂された依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 557,
    "word": "revised survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された調査票",
    "example": "Please check the revised survey before the meeting.",
    "example_ja": "会議の前に改訂された調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 558,
    "word": "revised certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された証明書",
    "example": "Please check the revised certificate before the meeting.",
    "example_ja": "会議の前に改訂された証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 559,
    "word": "revised receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された領収書",
    "example": "Please check the revised receipt before the meeting.",
    "example_ja": "会議の前に改訂された領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 560,
    "word": "revised statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された明細書",
    "example": "Please check the revised statement before the meeting.",
    "example_ja": "会議の前に改訂された明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 561,
    "word": "revised estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された見積書",
    "example": "Please check the revised estimate before the meeting.",
    "example_ja": "会議の前に改訂された見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 562,
    "word": "revised quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された見積り",
    "example": "Please check the revised quotation before the meeting.",
    "example_ja": "会議の前に改訂された見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 563,
    "word": "revised schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された予定表",
    "example": "Please check the revised schedule before the meeting.",
    "example_ja": "会議の前に改訂された予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 564,
    "word": "revised plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された計画",
    "example": "Please check the revised plan before the meeting.",
    "example_ja": "会議の前に改訂された計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 565,
    "word": "revised checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "改訂された確認表",
    "example": "Please check the revised checklist before the meeting.",
    "example_ja": "会議の前に改訂された確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 566,
    "word": "confidential report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の報告書",
    "example": "Please check the confidential report before the meeting.",
    "example_ja": "会議の前に機密の報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 567,
    "word": "confidential invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の請求書",
    "example": "Please check the confidential invoice before the meeting.",
    "example_ja": "会議の前に機密の請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 568,
    "word": "confidential contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の契約書",
    "example": "Please check the confidential contract before the meeting.",
    "example_ja": "会議の前に機密の契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 569,
    "word": "confidential proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の提案書",
    "example": "Please check the confidential proposal before the meeting.",
    "example_ja": "会議の前に機密の提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 570,
    "word": "confidential resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の履歴書",
    "example": "Please check the confidential resume before the meeting.",
    "example_ja": "会議の前に機密の履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 571,
    "word": "confidential application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の申込書",
    "example": "Please check the confidential application before the meeting.",
    "example_ja": "会議の前に機密の申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 572,
    "word": "confidential form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の用紙",
    "example": "Please check the confidential form before the meeting.",
    "example_ja": "会議の前に機密の用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 573,
    "word": "confidential manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の説明書",
    "example": "Please check the confidential manual before the meeting.",
    "example_ja": "会議の前に機密の説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 574,
    "word": "confidential brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密のパンフレット",
    "example": "Please check the confidential brochure before the meeting.",
    "example_ja": "会議の前に機密のパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 575,
    "word": "confidential file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密のファイル",
    "example": "Please check the confidential file before the meeting.",
    "example_ja": "会議の前に機密のファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 576,
    "word": "confidential record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の記録",
    "example": "Please check the confidential record before the meeting.",
    "example_ja": "会議の前に機密の記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 577,
    "word": "confidential document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の文書",
    "example": "Please check the confidential document before the meeting.",
    "example_ja": "会議の前に機密の文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 578,
    "word": "confidential spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の表計算ファイル",
    "example": "Please check the confidential spreadsheet before the meeting.",
    "example_ja": "会議の前に機密の表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 579,
    "word": "confidential presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密のプレゼン資料",
    "example": "Please check the confidential presentation before the meeting.",
    "example_ja": "会議の前に機密のプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 580,
    "word": "confidential agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の議題",
    "example": "Please check the confidential agenda before the meeting.",
    "example_ja": "会議の前に機密の議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 581,
    "word": "confidential minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の議事録",
    "example": "Please check the confidential minutes before the meeting.",
    "example_ja": "会議の前に機密の議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 582,
    "word": "confidential memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密のメモ",
    "example": "Please check the confidential memo before the meeting.",
    "example_ja": "会議の前に機密のメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 583,
    "word": "confidential notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の通知",
    "example": "Please check the confidential notice before the meeting.",
    "example_ja": "会議の前に機密の通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 584,
    "word": "confidential policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の方針",
    "example": "Please check the confidential policy before the meeting.",
    "example_ja": "会議の前に機密の方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 585,
    "word": "confidential guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の指針",
    "example": "Please check the confidential guideline before the meeting.",
    "example_ja": "会議の前に機密の指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 586,
    "word": "confidential request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の依頼",
    "example": "Please check the confidential request before the meeting.",
    "example_ja": "会議の前に機密の依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 587,
    "word": "confidential survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の調査票",
    "example": "Please check the confidential survey before the meeting.",
    "example_ja": "会議の前に機密の調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 588,
    "word": "confidential certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の証明書",
    "example": "Please check the confidential certificate before the meeting.",
    "example_ja": "会議の前に機密の証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 589,
    "word": "confidential receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の領収書",
    "example": "Please check the confidential receipt before the meeting.",
    "example_ja": "会議の前に機密の領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 590,
    "word": "confidential statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の明細書",
    "example": "Please check the confidential statement before the meeting.",
    "example_ja": "会議の前に機密の明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 591,
    "word": "confidential estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の見積書",
    "example": "Please check the confidential estimate before the meeting.",
    "example_ja": "会議の前に機密の見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 592,
    "word": "confidential quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の見積り",
    "example": "Please check the confidential quotation before the meeting.",
    "example_ja": "会議の前に機密の見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 593,
    "word": "confidential schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の予定表",
    "example": "Please check the confidential schedule before the meeting.",
    "example_ja": "会議の前に機密の予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 594,
    "word": "confidential plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の計画",
    "example": "Please check the confidential plan before the meeting.",
    "example_ja": "会議の前に機密の計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 595,
    "word": "confidential checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機密の確認表",
    "example": "Please check the confidential checklist before the meeting.",
    "example_ja": "会議の前に機密の確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 596,
    "word": "attached report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された報告書",
    "example": "Please check the attached report before the meeting.",
    "example_ja": "会議の前に添付された報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 597,
    "word": "attached invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された請求書",
    "example": "Please check the attached invoice before the meeting.",
    "example_ja": "会議の前に添付された請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 598,
    "word": "attached contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された契約書",
    "example": "Please check the attached contract before the meeting.",
    "example_ja": "会議の前に添付された契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 599,
    "word": "attached proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された提案書",
    "example": "Please check the attached proposal before the meeting.",
    "example_ja": "会議の前に添付された提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 600,
    "word": "attached resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された履歴書",
    "example": "Please check the attached resume before the meeting.",
    "example_ja": "会議の前に添付された履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 601,
    "word": "attached application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された申込書",
    "example": "Please check the attached application before the meeting.",
    "example_ja": "会議の前に添付された申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 602,
    "word": "attached form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された用紙",
    "example": "Please check the attached form before the meeting.",
    "example_ja": "会議の前に添付された用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 603,
    "word": "attached manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された説明書",
    "example": "Please check the attached manual before the meeting.",
    "example_ja": "会議の前に添付された説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 604,
    "word": "attached brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付されたパンフレット",
    "example": "Please check the attached brochure before the meeting.",
    "example_ja": "会議の前に添付されたパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 605,
    "word": "attached file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付されたファイル",
    "example": "Please check the attached file before the meeting.",
    "example_ja": "会議の前に添付されたファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 606,
    "word": "attached record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された記録",
    "example": "Please check the attached record before the meeting.",
    "example_ja": "会議の前に添付された記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 607,
    "word": "attached document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された文書",
    "example": "Please check the attached document before the meeting.",
    "example_ja": "会議の前に添付された文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 608,
    "word": "attached spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された表計算ファイル",
    "example": "Please check the attached spreadsheet before the meeting.",
    "example_ja": "会議の前に添付された表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 609,
    "word": "attached presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付されたプレゼン資料",
    "example": "Please check the attached presentation before the meeting.",
    "example_ja": "会議の前に添付されたプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 610,
    "word": "attached agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された議題",
    "example": "Please check the attached agenda before the meeting.",
    "example_ja": "会議の前に添付された議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 611,
    "word": "attached minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された議事録",
    "example": "Please check the attached minutes before the meeting.",
    "example_ja": "会議の前に添付された議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 612,
    "word": "attached memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付されたメモ",
    "example": "Please check the attached memo before the meeting.",
    "example_ja": "会議の前に添付されたメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 613,
    "word": "attached notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された通知",
    "example": "Please check the attached notice before the meeting.",
    "example_ja": "会議の前に添付された通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 614,
    "word": "attached policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された方針",
    "example": "Please check the attached policy before the meeting.",
    "example_ja": "会議の前に添付された方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 615,
    "word": "attached guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された指針",
    "example": "Please check the attached guideline before the meeting.",
    "example_ja": "会議の前に添付された指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 616,
    "word": "attached request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された依頼",
    "example": "Please check the attached request before the meeting.",
    "example_ja": "会議の前に添付された依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 617,
    "word": "attached survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された調査票",
    "example": "Please check the attached survey before the meeting.",
    "example_ja": "会議の前に添付された調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 618,
    "word": "attached certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された証明書",
    "example": "Please check the attached certificate before the meeting.",
    "example_ja": "会議の前に添付された証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 619,
    "word": "attached receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された領収書",
    "example": "Please check the attached receipt before the meeting.",
    "example_ja": "会議の前に添付された領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 620,
    "word": "attached statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された明細書",
    "example": "Please check the attached statement before the meeting.",
    "example_ja": "会議の前に添付された明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 621,
    "word": "attached estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された見積書",
    "example": "Please check the attached estimate before the meeting.",
    "example_ja": "会議の前に添付された見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 622,
    "word": "attached quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された見積り",
    "example": "Please check the attached quotation before the meeting.",
    "example_ja": "会議の前に添付された見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 623,
    "word": "attached schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された予定表",
    "example": "Please check the attached schedule before the meeting.",
    "example_ja": "会議の前に添付された予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 624,
    "word": "attached plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された計画",
    "example": "Please check the attached plan before the meeting.",
    "example_ja": "会議の前に添付された計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 625,
    "word": "attached checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "添付された確認表",
    "example": "Please check the attached checklist before the meeting.",
    "example_ja": "会議の前に添付された確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 626,
    "word": "printed report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された報告書",
    "example": "Please check the printed report before the meeting.",
    "example_ja": "会議の前に印刷された報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 627,
    "word": "printed invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された請求書",
    "example": "Please check the printed invoice before the meeting.",
    "example_ja": "会議の前に印刷された請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 628,
    "word": "printed contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された契約書",
    "example": "Please check the printed contract before the meeting.",
    "example_ja": "会議の前に印刷された契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 629,
    "word": "printed proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された提案書",
    "example": "Please check the printed proposal before the meeting.",
    "example_ja": "会議の前に印刷された提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 630,
    "word": "printed resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された履歴書",
    "example": "Please check the printed resume before the meeting.",
    "example_ja": "会議の前に印刷された履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 631,
    "word": "printed application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された申込書",
    "example": "Please check the printed application before the meeting.",
    "example_ja": "会議の前に印刷された申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 632,
    "word": "printed form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された用紙",
    "example": "Please check the printed form before the meeting.",
    "example_ja": "会議の前に印刷された用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 633,
    "word": "printed manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された説明書",
    "example": "Please check the printed manual before the meeting.",
    "example_ja": "会議の前に印刷された説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 634,
    "word": "printed brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷されたパンフレット",
    "example": "Please check the printed brochure before the meeting.",
    "example_ja": "会議の前に印刷されたパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 635,
    "word": "printed file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷されたファイル",
    "example": "Please check the printed file before the meeting.",
    "example_ja": "会議の前に印刷されたファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 636,
    "word": "printed record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された記録",
    "example": "Please check the printed record before the meeting.",
    "example_ja": "会議の前に印刷された記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 637,
    "word": "printed document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された文書",
    "example": "Please check the printed document before the meeting.",
    "example_ja": "会議の前に印刷された文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 638,
    "word": "printed spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された表計算ファイル",
    "example": "Please check the printed spreadsheet before the meeting.",
    "example_ja": "会議の前に印刷された表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 639,
    "word": "printed presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷されたプレゼン資料",
    "example": "Please check the printed presentation before the meeting.",
    "example_ja": "会議の前に印刷されたプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 640,
    "word": "printed agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された議題",
    "example": "Please check the printed agenda before the meeting.",
    "example_ja": "会議の前に印刷された議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 641,
    "word": "printed minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された議事録",
    "example": "Please check the printed minutes before the meeting.",
    "example_ja": "会議の前に印刷された議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 642,
    "word": "printed memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷されたメモ",
    "example": "Please check the printed memo before the meeting.",
    "example_ja": "会議の前に印刷されたメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 643,
    "word": "printed notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された通知",
    "example": "Please check the printed notice before the meeting.",
    "example_ja": "会議の前に印刷された通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 644,
    "word": "printed policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された方針",
    "example": "Please check the printed policy before the meeting.",
    "example_ja": "会議の前に印刷された方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 645,
    "word": "printed guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された指針",
    "example": "Please check the printed guideline before the meeting.",
    "example_ja": "会議の前に印刷された指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 646,
    "word": "printed request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された依頼",
    "example": "Please check the printed request before the meeting.",
    "example_ja": "会議の前に印刷された依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 647,
    "word": "printed survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された調査票",
    "example": "Please check the printed survey before the meeting.",
    "example_ja": "会議の前に印刷された調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 648,
    "word": "printed certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された証明書",
    "example": "Please check the printed certificate before the meeting.",
    "example_ja": "会議の前に印刷された証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 649,
    "word": "printed receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された領収書",
    "example": "Please check the printed receipt before the meeting.",
    "example_ja": "会議の前に印刷された領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 650,
    "word": "printed statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された明細書",
    "example": "Please check the printed statement before the meeting.",
    "example_ja": "会議の前に印刷された明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 651,
    "word": "printed estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された見積書",
    "example": "Please check the printed estimate before the meeting.",
    "example_ja": "会議の前に印刷された見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 652,
    "word": "printed quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された見積り",
    "example": "Please check the printed quotation before the meeting.",
    "example_ja": "会議の前に印刷された見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 653,
    "word": "printed schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された予定表",
    "example": "Please check the printed schedule before the meeting.",
    "example_ja": "会議の前に印刷された予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 654,
    "word": "printed plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された計画",
    "example": "Please check the printed plan before the meeting.",
    "example_ja": "会議の前に印刷された計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 655,
    "word": "printed checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "印刷された確認表",
    "example": "Please check the printed checklist before the meeting.",
    "example_ja": "会議の前に印刷された確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 656,
    "word": "digital report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの報告書",
    "example": "Please check the digital report before the meeting.",
    "example_ja": "会議の前にデジタルの報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 657,
    "word": "digital invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの請求書",
    "example": "Please check the digital invoice before the meeting.",
    "example_ja": "会議の前にデジタルの請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 658,
    "word": "digital contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの契約書",
    "example": "Please check the digital contract before the meeting.",
    "example_ja": "会議の前にデジタルの契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 659,
    "word": "digital proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの提案書",
    "example": "Please check the digital proposal before the meeting.",
    "example_ja": "会議の前にデジタルの提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 660,
    "word": "digital resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの履歴書",
    "example": "Please check the digital resume before the meeting.",
    "example_ja": "会議の前にデジタルの履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 661,
    "word": "digital application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの申込書",
    "example": "Please check the digital application before the meeting.",
    "example_ja": "会議の前にデジタルの申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 662,
    "word": "digital form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの用紙",
    "example": "Please check the digital form before the meeting.",
    "example_ja": "会議の前にデジタルの用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 663,
    "word": "digital manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの説明書",
    "example": "Please check the digital manual before the meeting.",
    "example_ja": "会議の前にデジタルの説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 664,
    "word": "digital brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルのパンフレット",
    "example": "Please check the digital brochure before the meeting.",
    "example_ja": "会議の前にデジタルのパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 665,
    "word": "digital file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルのファイル",
    "example": "Please check the digital file before the meeting.",
    "example_ja": "会議の前にデジタルのファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 666,
    "word": "digital record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの記録",
    "example": "Please check the digital record before the meeting.",
    "example_ja": "会議の前にデジタルの記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 667,
    "word": "digital document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの文書",
    "example": "Please check the digital document before the meeting.",
    "example_ja": "会議の前にデジタルの文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 668,
    "word": "digital spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの表計算ファイル",
    "example": "Please check the digital spreadsheet before the meeting.",
    "example_ja": "会議の前にデジタルの表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 669,
    "word": "digital presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルのプレゼン資料",
    "example": "Please check the digital presentation before the meeting.",
    "example_ja": "会議の前にデジタルのプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 670,
    "word": "digital agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの議題",
    "example": "Please check the digital agenda before the meeting.",
    "example_ja": "会議の前にデジタルの議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 671,
    "word": "digital minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの議事録",
    "example": "Please check the digital minutes before the meeting.",
    "example_ja": "会議の前にデジタルの議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 672,
    "word": "digital memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルのメモ",
    "example": "Please check the digital memo before the meeting.",
    "example_ja": "会議の前にデジタルのメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 673,
    "word": "digital notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの通知",
    "example": "Please check the digital notice before the meeting.",
    "example_ja": "会議の前にデジタルの通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 674,
    "word": "digital policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの方針",
    "example": "Please check the digital policy before the meeting.",
    "example_ja": "会議の前にデジタルの方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 675,
    "word": "digital guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの指針",
    "example": "Please check the digital guideline before the meeting.",
    "example_ja": "会議の前にデジタルの指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 676,
    "word": "digital request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの依頼",
    "example": "Please check the digital request before the meeting.",
    "example_ja": "会議の前にデジタルの依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 677,
    "word": "digital survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの調査票",
    "example": "Please check the digital survey before the meeting.",
    "example_ja": "会議の前にデジタルの調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 678,
    "word": "digital certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの証明書",
    "example": "Please check the digital certificate before the meeting.",
    "example_ja": "会議の前にデジタルの証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 679,
    "word": "digital receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの領収書",
    "example": "Please check the digital receipt before the meeting.",
    "example_ja": "会議の前にデジタルの領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 680,
    "word": "digital statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの明細書",
    "example": "Please check the digital statement before the meeting.",
    "example_ja": "会議の前にデジタルの明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 681,
    "word": "digital estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの見積書",
    "example": "Please check the digital estimate before the meeting.",
    "example_ja": "会議の前にデジタルの見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 682,
    "word": "digital quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの見積り",
    "example": "Please check the digital quotation before the meeting.",
    "example_ja": "会議の前にデジタルの見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 683,
    "word": "digital schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの予定表",
    "example": "Please check the digital schedule before the meeting.",
    "example_ja": "会議の前にデジタルの予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 684,
    "word": "digital plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの計画",
    "example": "Please check the digital plan before the meeting.",
    "example_ja": "会議の前にデジタルの計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 685,
    "word": "digital checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "デジタルの確認表",
    "example": "Please check the digital checklist before the meeting.",
    "example_ja": "会議の前にデジタルの確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 686,
    "word": "current report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の報告書",
    "example": "Please check the current report before the meeting.",
    "example_ja": "会議の前に現在の報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 687,
    "word": "current invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の請求書",
    "example": "Please check the current invoice before the meeting.",
    "example_ja": "会議の前に現在の請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 688,
    "word": "current contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の契約書",
    "example": "Please check the current contract before the meeting.",
    "example_ja": "会議の前に現在の契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 689,
    "word": "current proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の提案書",
    "example": "Please check the current proposal before the meeting.",
    "example_ja": "会議の前に現在の提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 690,
    "word": "current resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の履歴書",
    "example": "Please check the current resume before the meeting.",
    "example_ja": "会議の前に現在の履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 691,
    "word": "current application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の申込書",
    "example": "Please check the current application before the meeting.",
    "example_ja": "会議の前に現在の申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 692,
    "word": "current form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の用紙",
    "example": "Please check the current form before the meeting.",
    "example_ja": "会議の前に現在の用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 693,
    "word": "current manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の説明書",
    "example": "Please check the current manual before the meeting.",
    "example_ja": "会議の前に現在の説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 694,
    "word": "current brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在のパンフレット",
    "example": "Please check the current brochure before the meeting.",
    "example_ja": "会議の前に現在のパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 695,
    "word": "current file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在のファイル",
    "example": "Please check the current file before the meeting.",
    "example_ja": "会議の前に現在のファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 696,
    "word": "current record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の記録",
    "example": "Please check the current record before the meeting.",
    "example_ja": "会議の前に現在の記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 697,
    "word": "current document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の文書",
    "example": "Please check the current document before the meeting.",
    "example_ja": "会議の前に現在の文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 698,
    "word": "current spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の表計算ファイル",
    "example": "Please check the current spreadsheet before the meeting.",
    "example_ja": "会議の前に現在の表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 699,
    "word": "current presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在のプレゼン資料",
    "example": "Please check the current presentation before the meeting.",
    "example_ja": "会議の前に現在のプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 700,
    "word": "current agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の議題",
    "example": "Please check the current agenda before the meeting.",
    "example_ja": "会議の前に現在の議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 701,
    "word": "current minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の議事録",
    "example": "Please check the current minutes before the meeting.",
    "example_ja": "会議の前に現在の議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 702,
    "word": "current memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在のメモ",
    "example": "Please check the current memo before the meeting.",
    "example_ja": "会議の前に現在のメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 703,
    "word": "current notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の通知",
    "example": "Please check the current notice before the meeting.",
    "example_ja": "会議の前に現在の通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 704,
    "word": "current policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の方針",
    "example": "Please check the current policy before the meeting.",
    "example_ja": "会議の前に現在の方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 705,
    "word": "current guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の指針",
    "example": "Please check the current guideline before the meeting.",
    "example_ja": "会議の前に現在の指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 706,
    "word": "current request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の依頼",
    "example": "Please check the current request before the meeting.",
    "example_ja": "会議の前に現在の依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 707,
    "word": "current survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の調査票",
    "example": "Please check the current survey before the meeting.",
    "example_ja": "会議の前に現在の調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 708,
    "word": "current certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の証明書",
    "example": "Please check the current certificate before the meeting.",
    "example_ja": "会議の前に現在の証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 709,
    "word": "current receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の領収書",
    "example": "Please check the current receipt before the meeting.",
    "example_ja": "会議の前に現在の領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 710,
    "word": "current statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の明細書",
    "example": "Please check the current statement before the meeting.",
    "example_ja": "会議の前に現在の明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 711,
    "word": "current estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の見積書",
    "example": "Please check the current estimate before the meeting.",
    "example_ja": "会議の前に現在の見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 712,
    "word": "current quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の見積り",
    "example": "Please check the current quotation before the meeting.",
    "example_ja": "会議の前に現在の見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 713,
    "word": "current schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の予定表",
    "example": "Please check the current schedule before the meeting.",
    "example_ja": "会議の前に現在の予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 714,
    "word": "current plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の計画",
    "example": "Please check the current plan before the meeting.",
    "example_ja": "会議の前に現在の計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 715,
    "word": "current checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現在の確認表",
    "example": "Please check the current checklist before the meeting.",
    "example_ja": "会議の前に現在の確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 716,
    "word": "previous report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の報告書",
    "example": "Please check the previous report before the meeting.",
    "example_ja": "会議の前に前回の報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 717,
    "word": "previous invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の請求書",
    "example": "Please check the previous invoice before the meeting.",
    "example_ja": "会議の前に前回の請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 718,
    "word": "previous contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の契約書",
    "example": "Please check the previous contract before the meeting.",
    "example_ja": "会議の前に前回の契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 719,
    "word": "previous proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の提案書",
    "example": "Please check the previous proposal before the meeting.",
    "example_ja": "会議の前に前回の提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 720,
    "word": "previous resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の履歴書",
    "example": "Please check the previous resume before the meeting.",
    "example_ja": "会議の前に前回の履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 721,
    "word": "previous application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の申込書",
    "example": "Please check the previous application before the meeting.",
    "example_ja": "会議の前に前回の申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 722,
    "word": "previous form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の用紙",
    "example": "Please check the previous form before the meeting.",
    "example_ja": "会議の前に前回の用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 723,
    "word": "previous manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の説明書",
    "example": "Please check the previous manual before the meeting.",
    "example_ja": "会議の前に前回の説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 724,
    "word": "previous brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回のパンフレット",
    "example": "Please check the previous brochure before the meeting.",
    "example_ja": "会議の前に前回のパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 725,
    "word": "previous file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回のファイル",
    "example": "Please check the previous file before the meeting.",
    "example_ja": "会議の前に前回のファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 726,
    "word": "previous record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の記録",
    "example": "Please check the previous record before the meeting.",
    "example_ja": "会議の前に前回の記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 727,
    "word": "previous document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の文書",
    "example": "Please check the previous document before the meeting.",
    "example_ja": "会議の前に前回の文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 728,
    "word": "previous spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の表計算ファイル",
    "example": "Please check the previous spreadsheet before the meeting.",
    "example_ja": "会議の前に前回の表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 729,
    "word": "previous presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回のプレゼン資料",
    "example": "Please check the previous presentation before the meeting.",
    "example_ja": "会議の前に前回のプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 730,
    "word": "previous agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の議題",
    "example": "Please check the previous agenda before the meeting.",
    "example_ja": "会議の前に前回の議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 731,
    "word": "previous minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の議事録",
    "example": "Please check the previous minutes before the meeting.",
    "example_ja": "会議の前に前回の議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 732,
    "word": "previous memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回のメモ",
    "example": "Please check the previous memo before the meeting.",
    "example_ja": "会議の前に前回のメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 733,
    "word": "previous notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の通知",
    "example": "Please check the previous notice before the meeting.",
    "example_ja": "会議の前に前回の通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 734,
    "word": "previous policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の方針",
    "example": "Please check the previous policy before the meeting.",
    "example_ja": "会議の前に前回の方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 735,
    "word": "previous guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の指針",
    "example": "Please check the previous guideline before the meeting.",
    "example_ja": "会議の前に前回の指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 736,
    "word": "previous request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の依頼",
    "example": "Please check the previous request before the meeting.",
    "example_ja": "会議の前に前回の依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 737,
    "word": "previous survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の調査票",
    "example": "Please check the previous survey before the meeting.",
    "example_ja": "会議の前に前回の調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 738,
    "word": "previous certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の証明書",
    "example": "Please check the previous certificate before the meeting.",
    "example_ja": "会議の前に前回の証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 739,
    "word": "previous receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の領収書",
    "example": "Please check the previous receipt before the meeting.",
    "example_ja": "会議の前に前回の領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 740,
    "word": "previous statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の明細書",
    "example": "Please check the previous statement before the meeting.",
    "example_ja": "会議の前に前回の明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 741,
    "word": "previous estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の見積書",
    "example": "Please check the previous estimate before the meeting.",
    "example_ja": "会議の前に前回の見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 742,
    "word": "previous quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の見積り",
    "example": "Please check the previous quotation before the meeting.",
    "example_ja": "会議の前に前回の見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 743,
    "word": "previous schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の予定表",
    "example": "Please check the previous schedule before the meeting.",
    "example_ja": "会議の前に前回の予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 744,
    "word": "previous plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の計画",
    "example": "Please check the previous plan before the meeting.",
    "example_ja": "会議の前に前回の計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 745,
    "word": "previous checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "前回の確認表",
    "example": "Please check the previous checklist before the meeting.",
    "example_ja": "会議の前に前回の確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 746,
    "word": "completed report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの報告書",
    "example": "Please check the completed report before the meeting.",
    "example_ja": "会議の前に記入済みの報告書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 747,
    "word": "completed invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの請求書",
    "example": "Please check the completed invoice before the meeting.",
    "example_ja": "会議の前に記入済みの請求書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 748,
    "word": "completed contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの契約書",
    "example": "Please check the completed contract before the meeting.",
    "example_ja": "会議の前に記入済みの契約書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 749,
    "word": "completed proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの提案書",
    "example": "Please check the completed proposal before the meeting.",
    "example_ja": "会議の前に記入済みの提案書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 750,
    "word": "completed resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの履歴書",
    "example": "Please check the completed resume before the meeting.",
    "example_ja": "会議の前に記入済みの履歴書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 751,
    "word": "completed application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの申込書",
    "example": "Please check the completed application before the meeting.",
    "example_ja": "会議の前に記入済みの申込書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 752,
    "word": "completed form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの用紙",
    "example": "Please check the completed form before the meeting.",
    "example_ja": "会議の前に記入済みの用紙を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 753,
    "word": "completed manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの説明書",
    "example": "Please check the completed manual before the meeting.",
    "example_ja": "会議の前に記入済みの説明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 754,
    "word": "completed brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みのパンフレット",
    "example": "Please check the completed brochure before the meeting.",
    "example_ja": "会議の前に記入済みのパンフレットを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 755,
    "word": "completed file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みのファイル",
    "example": "Please check the completed file before the meeting.",
    "example_ja": "会議の前に記入済みのファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 756,
    "word": "completed record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの記録",
    "example": "Please check the completed record before the meeting.",
    "example_ja": "会議の前に記入済みの記録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 757,
    "word": "completed document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの文書",
    "example": "Please check the completed document before the meeting.",
    "example_ja": "会議の前に記入済みの文書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 758,
    "word": "completed spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの表計算ファイル",
    "example": "Please check the completed spreadsheet before the meeting.",
    "example_ja": "会議の前に記入済みの表計算ファイルを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 759,
    "word": "completed presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みのプレゼン資料",
    "example": "Please check the completed presentation before the meeting.",
    "example_ja": "会議の前に記入済みのプレゼン資料を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 760,
    "word": "completed agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの議題",
    "example": "Please check the completed agenda before the meeting.",
    "example_ja": "会議の前に記入済みの議題を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 761,
    "word": "completed minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの議事録",
    "example": "Please check the completed minutes before the meeting.",
    "example_ja": "会議の前に記入済みの議事録を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 762,
    "word": "completed memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みのメモ",
    "example": "Please check the completed memo before the meeting.",
    "example_ja": "会議の前に記入済みのメモを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 763,
    "word": "completed notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの通知",
    "example": "Please check the completed notice before the meeting.",
    "example_ja": "会議の前に記入済みの通知を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 764,
    "word": "completed policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの方針",
    "example": "Please check the completed policy before the meeting.",
    "example_ja": "会議の前に記入済みの方針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 765,
    "word": "completed guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの指針",
    "example": "Please check the completed guideline before the meeting.",
    "example_ja": "会議の前に記入済みの指針を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 766,
    "word": "completed request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの依頼",
    "example": "Please check the completed request before the meeting.",
    "example_ja": "会議の前に記入済みの依頼を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 767,
    "word": "completed survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの調査票",
    "example": "Please check the completed survey before the meeting.",
    "example_ja": "会議の前に記入済みの調査票を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 768,
    "word": "completed certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの証明書",
    "example": "Please check the completed certificate before the meeting.",
    "example_ja": "会議の前に記入済みの証明書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 769,
    "word": "completed receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの領収書",
    "example": "Please check the completed receipt before the meeting.",
    "example_ja": "会議の前に記入済みの領収書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 770,
    "word": "completed statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの明細書",
    "example": "Please check the completed statement before the meeting.",
    "example_ja": "会議の前に記入済みの明細書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 771,
    "word": "completed estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの見積書",
    "example": "Please check the completed estimate before the meeting.",
    "example_ja": "会議の前に記入済みの見積書を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 772,
    "word": "completed quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの見積り",
    "example": "Please check the completed quotation before the meeting.",
    "example_ja": "会議の前に記入済みの見積りを確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 773,
    "word": "completed schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの予定表",
    "example": "Please check the completed schedule before the meeting.",
    "example_ja": "会議の前に記入済みの予定表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 774,
    "word": "completed plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの計画",
    "example": "Please check the completed plan before the meeting.",
    "example_ja": "会議の前に記入済みの計画を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 775,
    "word": "completed checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記入済みの確認表",
    "example": "Please check the completed checklist before the meeting.",
    "example_ja": "会議の前に記入済みの確認表を確認してください。",
    "source": "文書：形容詞＋名詞"
  },
  {
    "id": 776,
    "word": "scheduled meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された会議",
    "example": "Please check the scheduled meeting before the meeting.",
    "example_ja": "会議の前に予定された会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 777,
    "word": "scheduled appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された予約・約束",
    "example": "Please check the scheduled appointment before the meeting.",
    "example_ja": "会議の前に予定された予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 778,
    "word": "scheduled conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された会議",
    "example": "Please check the scheduled conference before the meeting.",
    "example_ja": "会議の前に予定された会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 779,
    "word": "scheduled seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定されたセミナー",
    "example": "Please check the scheduled seminar before the meeting.",
    "example_ja": "会議の前に予定されたセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 780,
    "word": "scheduled workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された研修会",
    "example": "Please check the scheduled workshop before the meeting.",
    "example_ja": "会議の前に予定された研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 781,
    "word": "scheduled interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された面接",
    "example": "Please check the scheduled interview before the meeting.",
    "example_ja": "会議の前に予定された面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 782,
    "word": "scheduled training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された研修",
    "example": "Please check the scheduled training session before the meeting.",
    "example_ja": "会議の前に予定された研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 783,
    "word": "scheduled briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された説明会",
    "example": "Please check the scheduled briefing before the meeting.",
    "example_ja": "会議の前に予定された説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 784,
    "word": "scheduled presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された発表",
    "example": "Please check the scheduled presentation before the meeting.",
    "example_ja": "会議の前に予定された発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 785,
    "word": "scheduled discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された話し合い",
    "example": "Please check the scheduled discussion before the meeting.",
    "example_ja": "会議の前に予定された話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 786,
    "word": "scheduled negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された交渉",
    "example": "Please check the scheduled negotiation before the meeting.",
    "example_ja": "会議の前に予定された交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 787,
    "word": "scheduled consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された相談",
    "example": "Please check the scheduled consultation before the meeting.",
    "example_ja": "会議の前に予定された相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 788,
    "word": "scheduled event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定されたイベント",
    "example": "Please check the scheduled event before the meeting.",
    "example_ja": "会議の前に予定されたイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 789,
    "word": "scheduled webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定されたオンラインセミナー",
    "example": "Please check the scheduled webinar before the meeting.",
    "example_ja": "会議の前に予定されたオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 790,
    "word": "scheduled orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された説明会",
    "example": "Please check the scheduled orientation before the meeting.",
    "example_ja": "会議の前に予定された説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 791,
    "word": "scheduled gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された集まり",
    "example": "Please check the scheduled gathering before the meeting.",
    "example_ja": "会議の前に予定された集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 792,
    "word": "scheduled session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された会合",
    "example": "Please check the scheduled session before the meeting.",
    "example_ja": "会議の前に予定された会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 793,
    "word": "scheduled visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された訪問",
    "example": "Please check the scheduled visit before the meeting.",
    "example_ja": "会議の前に予定された訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 794,
    "word": "scheduled call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された電話",
    "example": "Please check the scheduled call before the meeting.",
    "example_ja": "会議の前に予定された電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 795,
    "word": "scheduled tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定された見学",
    "example": "Please check the scheduled tour before the meeting.",
    "example_ja": "会議の前に予定された見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 796,
    "word": "upcoming meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の会議",
    "example": "Please check the upcoming meeting before the meeting.",
    "example_ja": "会議の前に今後の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 797,
    "word": "upcoming appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の予約・約束",
    "example": "Please check the upcoming appointment before the meeting.",
    "example_ja": "会議の前に今後の予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 798,
    "word": "upcoming conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の会議",
    "example": "Please check the upcoming conference before the meeting.",
    "example_ja": "会議の前に今後の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 799,
    "word": "upcoming seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後のセミナー",
    "example": "Please check the upcoming seminar before the meeting.",
    "example_ja": "会議の前に今後のセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 800,
    "word": "upcoming workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の研修会",
    "example": "Please check the upcoming workshop before the meeting.",
    "example_ja": "会議の前に今後の研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 801,
    "word": "upcoming interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の面接",
    "example": "Please check the upcoming interview before the meeting.",
    "example_ja": "会議の前に今後の面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 802,
    "word": "upcoming training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の研修",
    "example": "Please check the upcoming training session before the meeting.",
    "example_ja": "会議の前に今後の研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 803,
    "word": "upcoming briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の説明会",
    "example": "Please check the upcoming briefing before the meeting.",
    "example_ja": "会議の前に今後の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 804,
    "word": "upcoming presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の発表",
    "example": "Please check the upcoming presentation before the meeting.",
    "example_ja": "会議の前に今後の発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 805,
    "word": "upcoming discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の話し合い",
    "example": "Please check the upcoming discussion before the meeting.",
    "example_ja": "会議の前に今後の話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 806,
    "word": "upcoming negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の交渉",
    "example": "Please check the upcoming negotiation before the meeting.",
    "example_ja": "会議の前に今後の交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 807,
    "word": "upcoming consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の相談",
    "example": "Please check the upcoming consultation before the meeting.",
    "example_ja": "会議の前に今後の相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 808,
    "word": "upcoming event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後のイベント",
    "example": "Please check the upcoming event before the meeting.",
    "example_ja": "会議の前に今後のイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 809,
    "word": "upcoming webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後のオンラインセミナー",
    "example": "Please check the upcoming webinar before the meeting.",
    "example_ja": "会議の前に今後のオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 810,
    "word": "upcoming orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の説明会",
    "example": "Please check the upcoming orientation before the meeting.",
    "example_ja": "会議の前に今後の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 811,
    "word": "upcoming gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の集まり",
    "example": "Please check the upcoming gathering before the meeting.",
    "example_ja": "会議の前に今後の集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 812,
    "word": "upcoming session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の会合",
    "example": "Please check the upcoming session before the meeting.",
    "example_ja": "会議の前に今後の会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 813,
    "word": "upcoming visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の訪問",
    "example": "Please check the upcoming visit before the meeting.",
    "example_ja": "会議の前に今後の訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 814,
    "word": "upcoming call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の電話",
    "example": "Please check the upcoming call before the meeting.",
    "example_ja": "会議の前に今後の電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 815,
    "word": "upcoming tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "今後の見学",
    "example": "Please check the upcoming tour before the meeting.",
    "example_ja": "会議の前に今後の見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 816,
    "word": "annual meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の会議",
    "example": "Please check the annual meeting before the meeting.",
    "example_ja": "会議の前に年次の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 817,
    "word": "annual appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の予約・約束",
    "example": "Please check the annual appointment before the meeting.",
    "example_ja": "会議の前に年次の予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 818,
    "word": "annual conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の会議",
    "example": "Please check the annual conference before the meeting.",
    "example_ja": "会議の前に年次の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 819,
    "word": "annual seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次のセミナー",
    "example": "Please check the annual seminar before the meeting.",
    "example_ja": "会議の前に年次のセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 820,
    "word": "annual workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の研修会",
    "example": "Please check the annual workshop before the meeting.",
    "example_ja": "会議の前に年次の研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 821,
    "word": "annual interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の面接",
    "example": "Please check the annual interview before the meeting.",
    "example_ja": "会議の前に年次の面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 822,
    "word": "annual training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の研修",
    "example": "Please check the annual training session before the meeting.",
    "example_ja": "会議の前に年次の研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 823,
    "word": "annual briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の説明会",
    "example": "Please check the annual briefing before the meeting.",
    "example_ja": "会議の前に年次の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 824,
    "word": "annual discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の話し合い",
    "example": "Please check the annual discussion before the meeting.",
    "example_ja": "会議の前に年次の話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 825,
    "word": "annual negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の交渉",
    "example": "Please check the annual negotiation before the meeting.",
    "example_ja": "会議の前に年次の交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 826,
    "word": "annual consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の相談",
    "example": "Please check the annual consultation before the meeting.",
    "example_ja": "会議の前に年次の相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 827,
    "word": "annual event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次のイベント",
    "example": "Please check the annual event before the meeting.",
    "example_ja": "会議の前に年次のイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 828,
    "word": "annual webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次のオンラインセミナー",
    "example": "Please check the annual webinar before the meeting.",
    "example_ja": "会議の前に年次のオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 829,
    "word": "annual orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の説明会",
    "example": "Please check the annual orientation before the meeting.",
    "example_ja": "会議の前に年次の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 830,
    "word": "annual gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の集まり",
    "example": "Please check the annual gathering before the meeting.",
    "example_ja": "会議の前に年次の集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 831,
    "word": "annual session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の会合",
    "example": "Please check the annual session before the meeting.",
    "example_ja": "会議の前に年次の会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 832,
    "word": "annual visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の訪問",
    "example": "Please check the annual visit before the meeting.",
    "example_ja": "会議の前に年次の訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 833,
    "word": "annual call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の電話",
    "example": "Please check the annual call before the meeting.",
    "example_ja": "会議の前に年次の電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 834,
    "word": "annual tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年次の見学",
    "example": "Please check the annual tour before the meeting.",
    "example_ja": "会議の前に年次の見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 835,
    "word": "weekly meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の会議",
    "example": "Please check the weekly meeting before the meeting.",
    "example_ja": "会議の前に毎週の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 836,
    "word": "weekly appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の予約・約束",
    "example": "Please check the weekly appointment before the meeting.",
    "example_ja": "会議の前に毎週の予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 837,
    "word": "weekly conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の会議",
    "example": "Please check the weekly conference before the meeting.",
    "example_ja": "会議の前に毎週の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 838,
    "word": "weekly seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週のセミナー",
    "example": "Please check the weekly seminar before the meeting.",
    "example_ja": "会議の前に毎週のセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 839,
    "word": "weekly workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の研修会",
    "example": "Please check the weekly workshop before the meeting.",
    "example_ja": "会議の前に毎週の研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 840,
    "word": "weekly interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の面接",
    "example": "Please check the weekly interview before the meeting.",
    "example_ja": "会議の前に毎週の面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 841,
    "word": "weekly training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の研修",
    "example": "Please check the weekly training session before the meeting.",
    "example_ja": "会議の前に毎週の研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 842,
    "word": "weekly briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の説明会",
    "example": "Please check the weekly briefing before the meeting.",
    "example_ja": "会議の前に毎週の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 843,
    "word": "weekly presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の発表",
    "example": "Please check the weekly presentation before the meeting.",
    "example_ja": "会議の前に毎週の発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 844,
    "word": "weekly discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の話し合い",
    "example": "Please check the weekly discussion before the meeting.",
    "example_ja": "会議の前に毎週の話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 845,
    "word": "weekly negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の交渉",
    "example": "Please check the weekly negotiation before the meeting.",
    "example_ja": "会議の前に毎週の交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 846,
    "word": "weekly consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の相談",
    "example": "Please check the weekly consultation before the meeting.",
    "example_ja": "会議の前に毎週の相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 847,
    "word": "weekly event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週のイベント",
    "example": "Please check the weekly event before the meeting.",
    "example_ja": "会議の前に毎週のイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 848,
    "word": "weekly webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週のオンラインセミナー",
    "example": "Please check the weekly webinar before the meeting.",
    "example_ja": "会議の前に毎週のオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 849,
    "word": "weekly orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の説明会",
    "example": "Please check the weekly orientation before the meeting.",
    "example_ja": "会議の前に毎週の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 850,
    "word": "weekly gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の集まり",
    "example": "Please check the weekly gathering before the meeting.",
    "example_ja": "会議の前に毎週の集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 851,
    "word": "weekly session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の会合",
    "example": "Please check the weekly session before the meeting.",
    "example_ja": "会議の前に毎週の会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 852,
    "word": "weekly visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の訪問",
    "example": "Please check the weekly visit before the meeting.",
    "example_ja": "会議の前に毎週の訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 853,
    "word": "weekly call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の電話",
    "example": "Please check the weekly call before the meeting.",
    "example_ja": "会議の前に毎週の電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 854,
    "word": "weekly tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎週の見学",
    "example": "Please check the weekly tour before the meeting.",
    "example_ja": "会議の前に毎週の見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 855,
    "word": "monthly meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の会議",
    "example": "Please check the monthly meeting before the meeting.",
    "example_ja": "会議の前に毎月の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 856,
    "word": "monthly appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の予約・約束",
    "example": "Please check the monthly appointment before the meeting.",
    "example_ja": "会議の前に毎月の予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 857,
    "word": "monthly conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の会議",
    "example": "Please check the monthly conference before the meeting.",
    "example_ja": "会議の前に毎月の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 858,
    "word": "monthly seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月のセミナー",
    "example": "Please check the monthly seminar before the meeting.",
    "example_ja": "会議の前に毎月のセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 859,
    "word": "monthly workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の研修会",
    "example": "Please check the monthly workshop before the meeting.",
    "example_ja": "会議の前に毎月の研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 860,
    "word": "monthly interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の面接",
    "example": "Please check the monthly interview before the meeting.",
    "example_ja": "会議の前に毎月の面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 861,
    "word": "monthly training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の研修",
    "example": "Please check the monthly training session before the meeting.",
    "example_ja": "会議の前に毎月の研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 862,
    "word": "monthly briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の説明会",
    "example": "Please check the monthly briefing before the meeting.",
    "example_ja": "会議の前に毎月の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 863,
    "word": "monthly discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の話し合い",
    "example": "Please check the monthly discussion before the meeting.",
    "example_ja": "会議の前に毎月の話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 864,
    "word": "monthly negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の交渉",
    "example": "Please check the monthly negotiation before the meeting.",
    "example_ja": "会議の前に毎月の交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 865,
    "word": "monthly consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の相談",
    "example": "Please check the monthly consultation before the meeting.",
    "example_ja": "会議の前に毎月の相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 866,
    "word": "monthly event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月のイベント",
    "example": "Please check the monthly event before the meeting.",
    "example_ja": "会議の前に毎月のイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 867,
    "word": "monthly webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月のオンラインセミナー",
    "example": "Please check the monthly webinar before the meeting.",
    "example_ja": "会議の前に毎月のオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 868,
    "word": "monthly orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の説明会",
    "example": "Please check the monthly orientation before the meeting.",
    "example_ja": "会議の前に毎月の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 869,
    "word": "monthly gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の集まり",
    "example": "Please check the monthly gathering before the meeting.",
    "example_ja": "会議の前に毎月の集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 870,
    "word": "monthly session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の会合",
    "example": "Please check the monthly session before the meeting.",
    "example_ja": "会議の前に毎月の会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 871,
    "word": "monthly visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の訪問",
    "example": "Please check the monthly visit before the meeting.",
    "example_ja": "会議の前に毎月の訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 872,
    "word": "monthly call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の電話",
    "example": "Please check the monthly call before the meeting.",
    "example_ja": "会議の前に毎月の電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 873,
    "word": "monthly tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の見学",
    "example": "Please check the monthly tour before the meeting.",
    "example_ja": "会議の前に毎月の見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 874,
    "word": "important meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な会議",
    "example": "Please check the important meeting before the meeting.",
    "example_ja": "会議の前に重要な会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 875,
    "word": "important appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な予約・約束",
    "example": "Please check the important appointment before the meeting.",
    "example_ja": "会議の前に重要な予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 876,
    "word": "important conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な会議",
    "example": "Please check the important conference before the meeting.",
    "example_ja": "会議の前に重要な会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 877,
    "word": "important seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要なセミナー",
    "example": "Please check the important seminar before the meeting.",
    "example_ja": "会議の前に重要なセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 878,
    "word": "important workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な研修会",
    "example": "Please check the important workshop before the meeting.",
    "example_ja": "会議の前に重要な研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 879,
    "word": "important interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な面接",
    "example": "Please check the important interview before the meeting.",
    "example_ja": "会議の前に重要な面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 880,
    "word": "important training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な研修",
    "example": "Please check the important training session before the meeting.",
    "example_ja": "会議の前に重要な研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 881,
    "word": "important briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な説明会",
    "example": "Please check the important briefing before the meeting.",
    "example_ja": "会議の前に重要な説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 882,
    "word": "important presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な発表",
    "example": "Please check the important presentation before the meeting.",
    "example_ja": "会議の前に重要な発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 883,
    "word": "important discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な話し合い",
    "example": "Please check the important discussion before the meeting.",
    "example_ja": "会議の前に重要な話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 884,
    "word": "important negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な交渉",
    "example": "Please check the important negotiation before the meeting.",
    "example_ja": "会議の前に重要な交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 885,
    "word": "important consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な相談",
    "example": "Please check the important consultation before the meeting.",
    "example_ja": "会議の前に重要な相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 886,
    "word": "important event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要なイベント",
    "example": "Please check the important event before the meeting.",
    "example_ja": "会議の前に重要なイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 887,
    "word": "important webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要なオンラインセミナー",
    "example": "Please check the important webinar before the meeting.",
    "example_ja": "会議の前に重要なオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 888,
    "word": "important orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な説明会",
    "example": "Please check the important orientation before the meeting.",
    "example_ja": "会議の前に重要な説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 889,
    "word": "important gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な集まり",
    "example": "Please check the important gathering before the meeting.",
    "example_ja": "会議の前に重要な集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 890,
    "word": "important session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な会合",
    "example": "Please check the important session before the meeting.",
    "example_ja": "会議の前に重要な会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 891,
    "word": "important visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な訪問",
    "example": "Please check the important visit before the meeting.",
    "example_ja": "会議の前に重要な訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 892,
    "word": "important call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な電話",
    "example": "Please check the important call before the meeting.",
    "example_ja": "会議の前に重要な電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 893,
    "word": "important tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "重要な見学",
    "example": "Please check the important tour before the meeting.",
    "example_ja": "会議の前に重要な見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 894,
    "word": "internal meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の会議",
    "example": "Please check the internal meeting before the meeting.",
    "example_ja": "会議の前に社内の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 895,
    "word": "internal appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の予約・約束",
    "example": "Please check the internal appointment before the meeting.",
    "example_ja": "会議の前に社内の予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 896,
    "word": "internal conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の会議",
    "example": "Please check the internal conference before the meeting.",
    "example_ja": "会議の前に社内の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 897,
    "word": "internal seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内のセミナー",
    "example": "Please check the internal seminar before the meeting.",
    "example_ja": "会議の前に社内のセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 898,
    "word": "internal workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の研修会",
    "example": "Please check the internal workshop before the meeting.",
    "example_ja": "会議の前に社内の研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 899,
    "word": "internal interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の面接",
    "example": "Please check the internal interview before the meeting.",
    "example_ja": "会議の前に社内の面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 900,
    "word": "internal training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の研修",
    "example": "Please check the internal training session before the meeting.",
    "example_ja": "会議の前に社内の研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 901,
    "word": "internal briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の説明会",
    "example": "Please check the internal briefing before the meeting.",
    "example_ja": "会議の前に社内の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 902,
    "word": "internal presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の発表",
    "example": "Please check the internal presentation before the meeting.",
    "example_ja": "会議の前に社内の発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 903,
    "word": "internal discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の話し合い",
    "example": "Please check the internal discussion before the meeting.",
    "example_ja": "会議の前に社内の話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 904,
    "word": "internal negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の交渉",
    "example": "Please check the internal negotiation before the meeting.",
    "example_ja": "会議の前に社内の交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 905,
    "word": "internal consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の相談",
    "example": "Please check the internal consultation before the meeting.",
    "example_ja": "会議の前に社内の相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 906,
    "word": "internal event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内のイベント",
    "example": "Please check the internal event before the meeting.",
    "example_ja": "会議の前に社内のイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 907,
    "word": "internal webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内のオンラインセミナー",
    "example": "Please check the internal webinar before the meeting.",
    "example_ja": "会議の前に社内のオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 908,
    "word": "internal orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の説明会",
    "example": "Please check the internal orientation before the meeting.",
    "example_ja": "会議の前に社内の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 909,
    "word": "internal gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の集まり",
    "example": "Please check the internal gathering before the meeting.",
    "example_ja": "会議の前に社内の集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 910,
    "word": "internal session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の会合",
    "example": "Please check the internal session before the meeting.",
    "example_ja": "会議の前に社内の会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 911,
    "word": "internal visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の訪問",
    "example": "Please check the internal visit before the meeting.",
    "example_ja": "会議の前に社内の訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 912,
    "word": "internal call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の電話",
    "example": "Please check the internal call before the meeting.",
    "example_ja": "会議の前に社内の電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 913,
    "word": "internal tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "社内の見学",
    "example": "Please check the internal tour before the meeting.",
    "example_ja": "会議の前に社内の見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 914,
    "word": "external meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の会議",
    "example": "Please check the external meeting before the meeting.",
    "example_ja": "会議の前に外部の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 915,
    "word": "external appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の予約・約束",
    "example": "Please check the external appointment before the meeting.",
    "example_ja": "会議の前に外部の予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 916,
    "word": "external conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の会議",
    "example": "Please check the external conference before the meeting.",
    "example_ja": "会議の前に外部の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 917,
    "word": "external seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部のセミナー",
    "example": "Please check the external seminar before the meeting.",
    "example_ja": "会議の前に外部のセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 918,
    "word": "external workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の研修会",
    "example": "Please check the external workshop before the meeting.",
    "example_ja": "会議の前に外部の研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 919,
    "word": "external interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の面接",
    "example": "Please check the external interview before the meeting.",
    "example_ja": "会議の前に外部の面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 920,
    "word": "external training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の研修",
    "example": "Please check the external training session before the meeting.",
    "example_ja": "会議の前に外部の研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 921,
    "word": "external briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の説明会",
    "example": "Please check the external briefing before the meeting.",
    "example_ja": "会議の前に外部の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 922,
    "word": "external presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の発表",
    "example": "Please check the external presentation before the meeting.",
    "example_ja": "会議の前に外部の発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 923,
    "word": "external discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の話し合い",
    "example": "Please check the external discussion before the meeting.",
    "example_ja": "会議の前に外部の話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 924,
    "word": "external negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の交渉",
    "example": "Please check the external negotiation before the meeting.",
    "example_ja": "会議の前に外部の交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 925,
    "word": "external consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の相談",
    "example": "Please check the external consultation before the meeting.",
    "example_ja": "会議の前に外部の相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 926,
    "word": "external event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部のイベント",
    "example": "Please check the external event before the meeting.",
    "example_ja": "会議の前に外部のイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 927,
    "word": "external webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部のオンラインセミナー",
    "example": "Please check the external webinar before the meeting.",
    "example_ja": "会議の前に外部のオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 928,
    "word": "external orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の説明会",
    "example": "Please check the external orientation before the meeting.",
    "example_ja": "会議の前に外部の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 929,
    "word": "external gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の集まり",
    "example": "Please check the external gathering before the meeting.",
    "example_ja": "会議の前に外部の集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 930,
    "word": "external session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の会合",
    "example": "Please check the external session before the meeting.",
    "example_ja": "会議の前に外部の会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 931,
    "word": "external visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の訪問",
    "example": "Please check the external visit before the meeting.",
    "example_ja": "会議の前に外部の訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 932,
    "word": "external call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の電話",
    "example": "Please check the external call before the meeting.",
    "example_ja": "会議の前に外部の電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 933,
    "word": "external tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "外部の見学",
    "example": "Please check the external tour before the meeting.",
    "example_ja": "会議の前に外部の見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 934,
    "word": "online meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの会議",
    "example": "Please check the online meeting before the meeting.",
    "example_ja": "会議の前にオンラインの会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 935,
    "word": "online appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの予約・約束",
    "example": "Please check the online appointment before the meeting.",
    "example_ja": "会議の前にオンラインの予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 936,
    "word": "online conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの会議",
    "example": "Please check the online conference before the meeting.",
    "example_ja": "会議の前にオンラインの会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 937,
    "word": "online seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインのセミナー",
    "example": "Please check the online seminar before the meeting.",
    "example_ja": "会議の前にオンラインのセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 938,
    "word": "online workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの研修会",
    "example": "Please check the online workshop before the meeting.",
    "example_ja": "会議の前にオンラインの研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 939,
    "word": "online interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの面接",
    "example": "Please check the online interview before the meeting.",
    "example_ja": "会議の前にオンラインの面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 940,
    "word": "online training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの研修",
    "example": "Please check the online training session before the meeting.",
    "example_ja": "会議の前にオンラインの研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 941,
    "word": "online briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの説明会",
    "example": "Please check the online briefing before the meeting.",
    "example_ja": "会議の前にオンラインの説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 942,
    "word": "online presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの発表",
    "example": "Please check the online presentation before the meeting.",
    "example_ja": "会議の前にオンラインの発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 943,
    "word": "online discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの話し合い",
    "example": "Please check the online discussion before the meeting.",
    "example_ja": "会議の前にオンラインの話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 944,
    "word": "online negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの交渉",
    "example": "Please check the online negotiation before the meeting.",
    "example_ja": "会議の前にオンラインの交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 945,
    "word": "online consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの相談",
    "example": "Please check the online consultation before the meeting.",
    "example_ja": "会議の前にオンラインの相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 946,
    "word": "online event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインのイベント",
    "example": "Please check the online event before the meeting.",
    "example_ja": "会議の前にオンラインのイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 947,
    "word": "online webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインのオンラインセミナー",
    "example": "Please check the online webinar before the meeting.",
    "example_ja": "会議の前にオンラインのオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 948,
    "word": "online orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの説明会",
    "example": "Please check the online orientation before the meeting.",
    "example_ja": "会議の前にオンラインの説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 949,
    "word": "online gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの集まり",
    "example": "Please check the online gathering before the meeting.",
    "example_ja": "会議の前にオンラインの集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 950,
    "word": "online session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの会合",
    "example": "Please check the online session before the meeting.",
    "example_ja": "会議の前にオンラインの会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 951,
    "word": "online visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの訪問",
    "example": "Please check the online visit before the meeting.",
    "example_ja": "会議の前にオンラインの訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 952,
    "word": "online call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの電話",
    "example": "Please check the online call before the meeting.",
    "example_ja": "会議の前にオンラインの電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 953,
    "word": "online tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインの見学",
    "example": "Please check the online tour before the meeting.",
    "example_ja": "会議の前にオンラインの見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 954,
    "word": "in-person meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の会議",
    "example": "Please check the in-person meeting before the meeting.",
    "example_ja": "会議の前に対面の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 955,
    "word": "in-person appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の予約・約束",
    "example": "Please check the in-person appointment before the meeting.",
    "example_ja": "会議の前に対面の予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 956,
    "word": "in-person conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の会議",
    "example": "Please check the in-person conference before the meeting.",
    "example_ja": "会議の前に対面の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 957,
    "word": "in-person seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面のセミナー",
    "example": "Please check the in-person seminar before the meeting.",
    "example_ja": "会議の前に対面のセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 958,
    "word": "in-person workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の研修会",
    "example": "Please check the in-person workshop before the meeting.",
    "example_ja": "会議の前に対面の研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 959,
    "word": "in-person interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の面接",
    "example": "Please check the in-person interview before the meeting.",
    "example_ja": "会議の前に対面の面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 960,
    "word": "in-person training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の研修",
    "example": "Please check the in-person training session before the meeting.",
    "example_ja": "会議の前に対面の研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 961,
    "word": "in-person briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の説明会",
    "example": "Please check the in-person briefing before the meeting.",
    "example_ja": "会議の前に対面の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 962,
    "word": "in-person presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の発表",
    "example": "Please check the in-person presentation before the meeting.",
    "example_ja": "会議の前に対面の発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 963,
    "word": "in-person discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の話し合い",
    "example": "Please check the in-person discussion before the meeting.",
    "example_ja": "会議の前に対面の話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 964,
    "word": "in-person negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の交渉",
    "example": "Please check the in-person negotiation before the meeting.",
    "example_ja": "会議の前に対面の交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 965,
    "word": "in-person consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の相談",
    "example": "Please check the in-person consultation before the meeting.",
    "example_ja": "会議の前に対面の相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 966,
    "word": "in-person event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面のイベント",
    "example": "Please check the in-person event before the meeting.",
    "example_ja": "会議の前に対面のイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 967,
    "word": "in-person webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面のオンラインセミナー",
    "example": "Please check the in-person webinar before the meeting.",
    "example_ja": "会議の前に対面のオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 968,
    "word": "in-person orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の説明会",
    "example": "Please check the in-person orientation before the meeting.",
    "example_ja": "会議の前に対面の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 969,
    "word": "in-person gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の集まり",
    "example": "Please check the in-person gathering before the meeting.",
    "example_ja": "会議の前に対面の集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 970,
    "word": "in-person session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の会合",
    "example": "Please check the in-person session before the meeting.",
    "example_ja": "会議の前に対面の会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 971,
    "word": "in-person visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の訪問",
    "example": "Please check the in-person visit before the meeting.",
    "example_ja": "会議の前に対面の訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 972,
    "word": "in-person call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の電話",
    "example": "Please check the in-person call before the meeting.",
    "example_ja": "会議の前に対面の電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 973,
    "word": "in-person tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "対面の見学",
    "example": "Please check the in-person tour before the meeting.",
    "example_ja": "会議の前に対面の見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 974,
    "word": "urgent meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の会議",
    "example": "Please check the urgent meeting before the meeting.",
    "example_ja": "会議の前に緊急の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 975,
    "word": "urgent appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の予約・約束",
    "example": "Please check the urgent appointment before the meeting.",
    "example_ja": "会議の前に緊急の予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 976,
    "word": "urgent conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の会議",
    "example": "Please check the urgent conference before the meeting.",
    "example_ja": "会議の前に緊急の会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 977,
    "word": "urgent seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急のセミナー",
    "example": "Please check the urgent seminar before the meeting.",
    "example_ja": "会議の前に緊急のセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 978,
    "word": "urgent workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の研修会",
    "example": "Please check the urgent workshop before the meeting.",
    "example_ja": "会議の前に緊急の研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 979,
    "word": "urgent interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の面接",
    "example": "Please check the urgent interview before the meeting.",
    "example_ja": "会議の前に緊急の面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 980,
    "word": "urgent training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の研修",
    "example": "Please check the urgent training session before the meeting.",
    "example_ja": "会議の前に緊急の研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 981,
    "word": "urgent briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の説明会",
    "example": "Please check the urgent briefing before the meeting.",
    "example_ja": "会議の前に緊急の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 982,
    "word": "urgent presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の発表",
    "example": "Please check the urgent presentation before the meeting.",
    "example_ja": "会議の前に緊急の発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 983,
    "word": "urgent discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の話し合い",
    "example": "Please check the urgent discussion before the meeting.",
    "example_ja": "会議の前に緊急の話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 984,
    "word": "urgent negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の交渉",
    "example": "Please check the urgent negotiation before the meeting.",
    "example_ja": "会議の前に緊急の交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 985,
    "word": "urgent consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の相談",
    "example": "Please check the urgent consultation before the meeting.",
    "example_ja": "会議の前に緊急の相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 986,
    "word": "urgent event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急のイベント",
    "example": "Please check the urgent event before the meeting.",
    "example_ja": "会議の前に緊急のイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 987,
    "word": "urgent webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急のオンラインセミナー",
    "example": "Please check the urgent webinar before the meeting.",
    "example_ja": "会議の前に緊急のオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 988,
    "word": "urgent orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の説明会",
    "example": "Please check the urgent orientation before the meeting.",
    "example_ja": "会議の前に緊急の説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 989,
    "word": "urgent gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の集まり",
    "example": "Please check the urgent gathering before the meeting.",
    "example_ja": "会議の前に緊急の集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 990,
    "word": "urgent session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の会合",
    "example": "Please check the urgent session before the meeting.",
    "example_ja": "会議の前に緊急の会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 991,
    "word": "urgent visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の訪問",
    "example": "Please check the urgent visit before the meeting.",
    "example_ja": "会議の前に緊急の訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 992,
    "word": "urgent call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の電話",
    "example": "Please check the urgent call before the meeting.",
    "example_ja": "会議の前に緊急の電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 993,
    "word": "urgent tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "緊急の見学",
    "example": "Please check the urgent tour before the meeting.",
    "example_ja": "会議の前に緊急の見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 994,
    "word": "formal meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な会議",
    "example": "Please check the formal meeting before the meeting.",
    "example_ja": "会議の前に正式な会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 995,
    "word": "formal appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な予約・約束",
    "example": "Please check the formal appointment before the meeting.",
    "example_ja": "会議の前に正式な予約・約束を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 996,
    "word": "formal conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な会議",
    "example": "Please check the formal conference before the meeting.",
    "example_ja": "会議の前に正式な会議を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 997,
    "word": "formal seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式なセミナー",
    "example": "Please check the formal seminar before the meeting.",
    "example_ja": "会議の前に正式なセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 998,
    "word": "formal workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な研修会",
    "example": "Please check the formal workshop before the meeting.",
    "example_ja": "会議の前に正式な研修会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 999,
    "word": "formal interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な面接",
    "example": "Please check the formal interview before the meeting.",
    "example_ja": "会議の前に正式な面接を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1000,
    "word": "formal training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な研修",
    "example": "Please check the formal training session before the meeting.",
    "example_ja": "会議の前に正式な研修を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1001,
    "word": "formal briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な説明会",
    "example": "Please check the formal briefing before the meeting.",
    "example_ja": "会議の前に正式な説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1002,
    "word": "formal presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な発表",
    "example": "Please check the formal presentation before the meeting.",
    "example_ja": "会議の前に正式な発表を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1003,
    "word": "formal discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な話し合い",
    "example": "Please check the formal discussion before the meeting.",
    "example_ja": "会議の前に正式な話し合いを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1004,
    "word": "formal negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な交渉",
    "example": "Please check the formal negotiation before the meeting.",
    "example_ja": "会議の前に正式な交渉を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1005,
    "word": "formal consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な相談",
    "example": "Please check the formal consultation before the meeting.",
    "example_ja": "会議の前に正式な相談を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1006,
    "word": "formal event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式なイベント",
    "example": "Please check the formal event before the meeting.",
    "example_ja": "会議の前に正式なイベントを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1007,
    "word": "formal webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式なオンラインセミナー",
    "example": "Please check the formal webinar before the meeting.",
    "example_ja": "会議の前に正式なオンラインセミナーを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1008,
    "word": "formal orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な説明会",
    "example": "Please check the formal orientation before the meeting.",
    "example_ja": "会議の前に正式な説明会を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1009,
    "word": "formal gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な集まり",
    "example": "Please check the formal gathering before the meeting.",
    "example_ja": "会議の前に正式な集まりを確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1010,
    "word": "formal session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な会合",
    "example": "Please check the formal session before the meeting.",
    "example_ja": "会議の前に正式な会合を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1011,
    "word": "formal visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な訪問",
    "example": "Please check the formal visit before the meeting.",
    "example_ja": "会議の前に正式な訪問を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1012,
    "word": "formal call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な電話",
    "example": "Please check the formal call before the meeting.",
    "example_ja": "会議の前に正式な電話を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1013,
    "word": "formal tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "正式な見学",
    "example": "Please check the formal tour before the meeting.",
    "example_ja": "会議の前に正式な見学を確認してください。",
    "source": "会議：形容詞＋名詞"
  },
  {
    "id": 1014,
    "word": "experienced manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な管理者",
    "example": "Please check the experienced manager before the meeting.",
    "example_ja": "会議の前に経験豊富な管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1015,
    "word": "experienced supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な監督者",
    "example": "Please check the experienced supervisor before the meeting.",
    "example_ja": "会議の前に経験豊富な監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1016,
    "word": "experienced employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な従業員",
    "example": "Please check the experienced employee before the meeting.",
    "example_ja": "会議の前に経験豊富な従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1017,
    "word": "experienced applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な応募者",
    "example": "Please check the experienced applicant before the meeting.",
    "example_ja": "会議の前に経験豊富な応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1018,
    "word": "experienced candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な候補者",
    "example": "Please check the experienced candidate before the meeting.",
    "example_ja": "会議の前に経験豊富な候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1019,
    "word": "experienced customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な顧客",
    "example": "Please check the experienced customer before the meeting.",
    "example_ja": "会議の前に経験豊富な顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1020,
    "word": "experienced client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な顧客",
    "example": "Please check the experienced client before the meeting.",
    "example_ja": "会議の前に経験豊富な顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1021,
    "word": "experienced visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な訪問者",
    "example": "Please check the experienced visitor before the meeting.",
    "example_ja": "会議の前に経験豊富な訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1022,
    "word": "experienced technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な技術者",
    "example": "Please check the experienced technician before the meeting.",
    "example_ja": "会議の前に経験豊富な技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1023,
    "word": "experienced engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な技術者",
    "example": "Please check the experienced engineer before the meeting.",
    "example_ja": "会議の前に経験豊富な技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1024,
    "word": "experienced representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な担当者",
    "example": "Please check the experienced representative before the meeting.",
    "example_ja": "会議の前に経験豊富な担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1025,
    "word": "experienced assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な助手",
    "example": "Please check the experienced assistant before the meeting.",
    "example_ja": "会議の前に経験豊富な助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1026,
    "word": "experienced director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な部長",
    "example": "Please check the experienced director before the meeting.",
    "example_ja": "会議の前に経験豊富な部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1027,
    "word": "experienced staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な職員",
    "example": "Please check the experienced staff member before the meeting.",
    "example_ja": "会議の前に経験豊富な職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1028,
    "word": "experienced colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な同僚",
    "example": "Please check the experienced colleague before the meeting.",
    "example_ja": "会議の前に経験豊富な同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1029,
    "word": "experienced specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な専門家",
    "example": "Please check the experienced specialist before the meeting.",
    "example_ja": "会議の前に経験豊富な専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1030,
    "word": "experienced consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富なコンサルタント",
    "example": "Please check the experienced consultant before the meeting.",
    "example_ja": "会議の前に経験豊富なコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1031,
    "word": "experienced contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な請負業者",
    "example": "Please check the experienced contractor before the meeting.",
    "example_ja": "会議の前に経験豊富な請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1032,
    "word": "experienced supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な供給業者",
    "example": "Please check the experienced supplier before the meeting.",
    "example_ja": "会議の前に経験豊富な供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1033,
    "word": "experienced vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "経験豊富な販売業者",
    "example": "Please check the experienced vendor before the meeting.",
    "example_ja": "会議の前に経験豊富な販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1034,
    "word": "qualified manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある管理者",
    "example": "Please check the qualified manager before the meeting.",
    "example_ja": "会議の前に資格のある管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1035,
    "word": "qualified supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある監督者",
    "example": "Please check the qualified supervisor before the meeting.",
    "example_ja": "会議の前に資格のある監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1036,
    "word": "qualified employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある従業員",
    "example": "Please check the qualified employee before the meeting.",
    "example_ja": "会議の前に資格のある従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1037,
    "word": "qualified applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある応募者",
    "example": "Please check the qualified applicant before the meeting.",
    "example_ja": "会議の前に資格のある応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1038,
    "word": "qualified candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある候補者",
    "example": "Please check the qualified candidate before the meeting.",
    "example_ja": "会議の前に資格のある候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1039,
    "word": "qualified customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある顧客",
    "example": "Please check the qualified customer before the meeting.",
    "example_ja": "会議の前に資格のある顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1040,
    "word": "qualified client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある顧客",
    "example": "Please check the qualified client before the meeting.",
    "example_ja": "会議の前に資格のある顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1041,
    "word": "qualified visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある訪問者",
    "example": "Please check the qualified visitor before the meeting.",
    "example_ja": "会議の前に資格のある訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1042,
    "word": "qualified technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある技術者",
    "example": "Please check the qualified technician before the meeting.",
    "example_ja": "会議の前に資格のある技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1043,
    "word": "qualified engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある技術者",
    "example": "Please check the qualified engineer before the meeting.",
    "example_ja": "会議の前に資格のある技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1044,
    "word": "qualified representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある担当者",
    "example": "Please check the qualified representative before the meeting.",
    "example_ja": "会議の前に資格のある担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1045,
    "word": "qualified assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある助手",
    "example": "Please check the qualified assistant before the meeting.",
    "example_ja": "会議の前に資格のある助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1046,
    "word": "qualified director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある部長",
    "example": "Please check the qualified director before the meeting.",
    "example_ja": "会議の前に資格のある部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1047,
    "word": "qualified staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある職員",
    "example": "Please check the qualified staff member before the meeting.",
    "example_ja": "会議の前に資格のある職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1048,
    "word": "qualified colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある同僚",
    "example": "Please check the qualified colleague before the meeting.",
    "example_ja": "会議の前に資格のある同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1049,
    "word": "qualified specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある専門家",
    "example": "Please check the qualified specialist before the meeting.",
    "example_ja": "会議の前に資格のある専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1050,
    "word": "qualified consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のあるコンサルタント",
    "example": "Please check the qualified consultant before the meeting.",
    "example_ja": "会議の前に資格のあるコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1051,
    "word": "qualified contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある請負業者",
    "example": "Please check the qualified contractor before the meeting.",
    "example_ja": "会議の前に資格のある請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1052,
    "word": "qualified supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある供給業者",
    "example": "Please check the qualified supplier before the meeting.",
    "example_ja": "会議の前に資格のある供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1053,
    "word": "qualified vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "資格のある販売業者",
    "example": "Please check the qualified vendor before the meeting.",
    "example_ja": "会議の前に資格のある販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1054,
    "word": "new manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい管理者",
    "example": "Please check the new manager before the meeting.",
    "example_ja": "会議の前に新しい管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1055,
    "word": "new supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい監督者",
    "example": "Please check the new supervisor before the meeting.",
    "example_ja": "会議の前に新しい監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1056,
    "word": "new employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい従業員",
    "example": "Please check the new employee before the meeting.",
    "example_ja": "会議の前に新しい従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1057,
    "word": "new applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい応募者",
    "example": "Please check the new applicant before the meeting.",
    "example_ja": "会議の前に新しい応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1058,
    "word": "new candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい候補者",
    "example": "Please check the new candidate before the meeting.",
    "example_ja": "会議の前に新しい候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1059,
    "word": "new customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい顧客",
    "example": "Please check the new customer before the meeting.",
    "example_ja": "会議の前に新しい顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1060,
    "word": "new client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい顧客",
    "example": "Please check the new client before the meeting.",
    "example_ja": "会議の前に新しい顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1061,
    "word": "new visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい訪問者",
    "example": "Please check the new visitor before the meeting.",
    "example_ja": "会議の前に新しい訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1062,
    "word": "new technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい技術者",
    "example": "Please check the new technician before the meeting.",
    "example_ja": "会議の前に新しい技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1063,
    "word": "new engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい技術者",
    "example": "Please check the new engineer before the meeting.",
    "example_ja": "会議の前に新しい技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1064,
    "word": "new representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい担当者",
    "example": "Please check the new representative before the meeting.",
    "example_ja": "会議の前に新しい担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1065,
    "word": "new assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい助手",
    "example": "Please check the new assistant before the meeting.",
    "example_ja": "会議の前に新しい助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1066,
    "word": "new director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい部長",
    "example": "Please check the new director before the meeting.",
    "example_ja": "会議の前に新しい部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1067,
    "word": "new staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい職員",
    "example": "Please check the new staff member before the meeting.",
    "example_ja": "会議の前に新しい職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1068,
    "word": "new colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい同僚",
    "example": "Please check the new colleague before the meeting.",
    "example_ja": "会議の前に新しい同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1069,
    "word": "new specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい専門家",
    "example": "Please check the new specialist before the meeting.",
    "example_ja": "会議の前に新しい専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1070,
    "word": "new consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しいコンサルタント",
    "example": "Please check the new consultant before the meeting.",
    "example_ja": "会議の前に新しいコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1071,
    "word": "new contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい請負業者",
    "example": "Please check the new contractor before the meeting.",
    "example_ja": "会議の前に新しい請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1072,
    "word": "new supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい供給業者",
    "example": "Please check the new supplier before the meeting.",
    "example_ja": "会議の前に新しい供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1073,
    "word": "new vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい販売業者",
    "example": "Please check the new vendor before the meeting.",
    "example_ja": "会議の前に新しい販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1074,
    "word": "potential manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある管理者",
    "example": "Please check the potential manager before the meeting.",
    "example_ja": "会議の前に見込みのある管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1075,
    "word": "potential supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある監督者",
    "example": "Please check the potential supervisor before the meeting.",
    "example_ja": "会議の前に見込みのある監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1076,
    "word": "potential employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある従業員",
    "example": "Please check the potential employee before the meeting.",
    "example_ja": "会議の前に見込みのある従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1077,
    "word": "potential applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある応募者",
    "example": "Please check the potential applicant before the meeting.",
    "example_ja": "会議の前に見込みのある応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1078,
    "word": "potential candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある候補者",
    "example": "Please check the potential candidate before the meeting.",
    "example_ja": "会議の前に見込みのある候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1079,
    "word": "potential customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある顧客",
    "example": "Please check the potential customer before the meeting.",
    "example_ja": "会議の前に見込みのある顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1080,
    "word": "potential client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある顧客",
    "example": "Please check the potential client before the meeting.",
    "example_ja": "会議の前に見込みのある顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1081,
    "word": "potential visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある訪問者",
    "example": "Please check the potential visitor before the meeting.",
    "example_ja": "会議の前に見込みのある訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1082,
    "word": "potential technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある技術者",
    "example": "Please check the potential technician before the meeting.",
    "example_ja": "会議の前に見込みのある技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1083,
    "word": "potential engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある技術者",
    "example": "Please check the potential engineer before the meeting.",
    "example_ja": "会議の前に見込みのある技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1084,
    "word": "potential representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある担当者",
    "example": "Please check the potential representative before the meeting.",
    "example_ja": "会議の前に見込みのある担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1085,
    "word": "potential assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある助手",
    "example": "Please check the potential assistant before the meeting.",
    "example_ja": "会議の前に見込みのある助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1086,
    "word": "potential director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある部長",
    "example": "Please check the potential director before the meeting.",
    "example_ja": "会議の前に見込みのある部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1087,
    "word": "potential staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある職員",
    "example": "Please check the potential staff member before the meeting.",
    "example_ja": "会議の前に見込みのある職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1088,
    "word": "potential colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある同僚",
    "example": "Please check the potential colleague before the meeting.",
    "example_ja": "会議の前に見込みのある同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1089,
    "word": "potential specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある専門家",
    "example": "Please check the potential specialist before the meeting.",
    "example_ja": "会議の前に見込みのある専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1090,
    "word": "potential consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのあるコンサルタント",
    "example": "Please check the potential consultant before the meeting.",
    "example_ja": "会議の前に見込みのあるコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1091,
    "word": "potential contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある請負業者",
    "example": "Please check the potential contractor before the meeting.",
    "example_ja": "会議の前に見込みのある請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1092,
    "word": "potential supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある供給業者",
    "example": "Please check the potential supplier before the meeting.",
    "example_ja": "会議の前に見込みのある供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1093,
    "word": "potential vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見込みのある販売業者",
    "example": "Please check the potential vendor before the meeting.",
    "example_ja": "会議の前に見込みのある販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1094,
    "word": "regular manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の管理者",
    "example": "Please check the regular manager before the meeting.",
    "example_ja": "会議の前に常連の管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1095,
    "word": "regular supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の監督者",
    "example": "Please check the regular supervisor before the meeting.",
    "example_ja": "会議の前に常連の監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1096,
    "word": "regular employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の従業員",
    "example": "Please check the regular employee before the meeting.",
    "example_ja": "会議の前に常連の従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1097,
    "word": "regular applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の応募者",
    "example": "Please check the regular applicant before the meeting.",
    "example_ja": "会議の前に常連の応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1098,
    "word": "regular candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の候補者",
    "example": "Please check the regular candidate before the meeting.",
    "example_ja": "会議の前に常連の候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1099,
    "word": "regular customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の顧客",
    "example": "Please check the regular customer before the meeting.",
    "example_ja": "会議の前に常連の顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1100,
    "word": "regular client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の顧客",
    "example": "Please check the regular client before the meeting.",
    "example_ja": "会議の前に常連の顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1101,
    "word": "regular visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の訪問者",
    "example": "Please check the regular visitor before the meeting.",
    "example_ja": "会議の前に常連の訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1102,
    "word": "regular technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の技術者",
    "example": "Please check the regular technician before the meeting.",
    "example_ja": "会議の前に常連の技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1103,
    "word": "regular engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の技術者",
    "example": "Please check the regular engineer before the meeting.",
    "example_ja": "会議の前に常連の技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1104,
    "word": "regular representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の担当者",
    "example": "Please check the regular representative before the meeting.",
    "example_ja": "会議の前に常連の担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1105,
    "word": "regular assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の助手",
    "example": "Please check the regular assistant before the meeting.",
    "example_ja": "会議の前に常連の助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1106,
    "word": "regular director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の部長",
    "example": "Please check the regular director before the meeting.",
    "example_ja": "会議の前に常連の部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1107,
    "word": "regular staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の職員",
    "example": "Please check the regular staff member before the meeting.",
    "example_ja": "会議の前に常連の職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1108,
    "word": "regular colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の同僚",
    "example": "Please check the regular colleague before the meeting.",
    "example_ja": "会議の前に常連の同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1109,
    "word": "regular specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の専門家",
    "example": "Please check the regular specialist before the meeting.",
    "example_ja": "会議の前に常連の専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1110,
    "word": "regular consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連のコンサルタント",
    "example": "Please check the regular consultant before the meeting.",
    "example_ja": "会議の前に常連のコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1111,
    "word": "regular contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の請負業者",
    "example": "Please check the regular contractor before the meeting.",
    "example_ja": "会議の前に常連の請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1112,
    "word": "regular supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の供給業者",
    "example": "Please check the regular supplier before the meeting.",
    "example_ja": "会議の前に常連の供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1113,
    "word": "regular vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常連の販売業者",
    "example": "Please check the regular vendor before the meeting.",
    "example_ja": "会議の前に常連の販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1114,
    "word": "satisfied manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した管理者",
    "example": "Please check the satisfied manager before the meeting.",
    "example_ja": "会議の前に満足した管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1115,
    "word": "satisfied supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した監督者",
    "example": "Please check the satisfied supervisor before the meeting.",
    "example_ja": "会議の前に満足した監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1116,
    "word": "satisfied employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した従業員",
    "example": "Please check the satisfied employee before the meeting.",
    "example_ja": "会議の前に満足した従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1117,
    "word": "satisfied applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した応募者",
    "example": "Please check the satisfied applicant before the meeting.",
    "example_ja": "会議の前に満足した応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1118,
    "word": "satisfied candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した候補者",
    "example": "Please check the satisfied candidate before the meeting.",
    "example_ja": "会議の前に満足した候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1119,
    "word": "satisfied customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した顧客",
    "example": "Please check the satisfied customer before the meeting.",
    "example_ja": "会議の前に満足した顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1120,
    "word": "satisfied client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した顧客",
    "example": "Please check the satisfied client before the meeting.",
    "example_ja": "会議の前に満足した顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1121,
    "word": "satisfied visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した訪問者",
    "example": "Please check the satisfied visitor before the meeting.",
    "example_ja": "会議の前に満足した訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1122,
    "word": "satisfied technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した技術者",
    "example": "Please check the satisfied technician before the meeting.",
    "example_ja": "会議の前に満足した技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1123,
    "word": "satisfied engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した技術者",
    "example": "Please check the satisfied engineer before the meeting.",
    "example_ja": "会議の前に満足した技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1124,
    "word": "satisfied representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した担当者",
    "example": "Please check the satisfied representative before the meeting.",
    "example_ja": "会議の前に満足した担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1125,
    "word": "satisfied assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した助手",
    "example": "Please check the satisfied assistant before the meeting.",
    "example_ja": "会議の前に満足した助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1126,
    "word": "satisfied director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した部長",
    "example": "Please check the satisfied director before the meeting.",
    "example_ja": "会議の前に満足した部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1127,
    "word": "satisfied staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した職員",
    "example": "Please check the satisfied staff member before the meeting.",
    "example_ja": "会議の前に満足した職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1128,
    "word": "satisfied colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した同僚",
    "example": "Please check the satisfied colleague before the meeting.",
    "example_ja": "会議の前に満足した同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1129,
    "word": "satisfied specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した専門家",
    "example": "Please check the satisfied specialist before the meeting.",
    "example_ja": "会議の前に満足した専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1130,
    "word": "satisfied consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足したコンサルタント",
    "example": "Please check the satisfied consultant before the meeting.",
    "example_ja": "会議の前に満足したコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1131,
    "word": "satisfied contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した請負業者",
    "example": "Please check the satisfied contractor before the meeting.",
    "example_ja": "会議の前に満足した請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1132,
    "word": "satisfied supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した供給業者",
    "example": "Please check the satisfied supplier before the meeting.",
    "example_ja": "会議の前に満足した供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1133,
    "word": "satisfied vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "満足した販売業者",
    "example": "Please check the satisfied vendor before the meeting.",
    "example_ja": "会議の前に満足した販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1134,
    "word": "loyal manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な管理者",
    "example": "Please check the loyal manager before the meeting.",
    "example_ja": "会議の前に忠実な管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1135,
    "word": "loyal supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な監督者",
    "example": "Please check the loyal supervisor before the meeting.",
    "example_ja": "会議の前に忠実な監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1136,
    "word": "loyal employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な従業員",
    "example": "Please check the loyal employee before the meeting.",
    "example_ja": "会議の前に忠実な従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1137,
    "word": "loyal applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な応募者",
    "example": "Please check the loyal applicant before the meeting.",
    "example_ja": "会議の前に忠実な応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1138,
    "word": "loyal candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な候補者",
    "example": "Please check the loyal candidate before the meeting.",
    "example_ja": "会議の前に忠実な候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1139,
    "word": "loyal customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な顧客",
    "example": "Please check the loyal customer before the meeting.",
    "example_ja": "会議の前に忠実な顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1140,
    "word": "loyal client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な顧客",
    "example": "Please check the loyal client before the meeting.",
    "example_ja": "会議の前に忠実な顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1141,
    "word": "loyal visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な訪問者",
    "example": "Please check the loyal visitor before the meeting.",
    "example_ja": "会議の前に忠実な訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1142,
    "word": "loyal technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な技術者",
    "example": "Please check the loyal technician before the meeting.",
    "example_ja": "会議の前に忠実な技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1143,
    "word": "loyal engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な技術者",
    "example": "Please check the loyal engineer before the meeting.",
    "example_ja": "会議の前に忠実な技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1144,
    "word": "loyal representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な担当者",
    "example": "Please check the loyal representative before the meeting.",
    "example_ja": "会議の前に忠実な担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1145,
    "word": "loyal assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な助手",
    "example": "Please check the loyal assistant before the meeting.",
    "example_ja": "会議の前に忠実な助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1146,
    "word": "loyal director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な部長",
    "example": "Please check the loyal director before the meeting.",
    "example_ja": "会議の前に忠実な部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1147,
    "word": "loyal staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な職員",
    "example": "Please check the loyal staff member before the meeting.",
    "example_ja": "会議の前に忠実な職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1148,
    "word": "loyal colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な同僚",
    "example": "Please check the loyal colleague before the meeting.",
    "example_ja": "会議の前に忠実な同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1149,
    "word": "loyal specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な専門家",
    "example": "Please check the loyal specialist before the meeting.",
    "example_ja": "会議の前に忠実な専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1150,
    "word": "loyal consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実なコンサルタント",
    "example": "Please check the loyal consultant before the meeting.",
    "example_ja": "会議の前に忠実なコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1151,
    "word": "loyal contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な請負業者",
    "example": "Please check the loyal contractor before the meeting.",
    "example_ja": "会議の前に忠実な請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1152,
    "word": "loyal supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な供給業者",
    "example": "Please check the loyal supplier before the meeting.",
    "example_ja": "会議の前に忠実な供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1153,
    "word": "loyal vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "忠実な販売業者",
    "example": "Please check the loyal vendor before the meeting.",
    "example_ja": "会議の前に忠実な販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1154,
    "word": "temporary manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な管理者",
    "example": "Please check the temporary manager before the meeting.",
    "example_ja": "会議の前に一時的な管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1155,
    "word": "temporary supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な監督者",
    "example": "Please check the temporary supervisor before the meeting.",
    "example_ja": "会議の前に一時的な監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1156,
    "word": "temporary employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な従業員",
    "example": "Please check the temporary employee before the meeting.",
    "example_ja": "会議の前に一時的な従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1157,
    "word": "temporary applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な応募者",
    "example": "Please check the temporary applicant before the meeting.",
    "example_ja": "会議の前に一時的な応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1158,
    "word": "temporary candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な候補者",
    "example": "Please check the temporary candidate before the meeting.",
    "example_ja": "会議の前に一時的な候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1159,
    "word": "temporary customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な顧客",
    "example": "Please check the temporary customer before the meeting.",
    "example_ja": "会議の前に一時的な顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1160,
    "word": "temporary client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な顧客",
    "example": "Please check the temporary client before the meeting.",
    "example_ja": "会議の前に一時的な顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1161,
    "word": "temporary visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な訪問者",
    "example": "Please check the temporary visitor before the meeting.",
    "example_ja": "会議の前に一時的な訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1162,
    "word": "temporary technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な技術者",
    "example": "Please check the temporary technician before the meeting.",
    "example_ja": "会議の前に一時的な技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1163,
    "word": "temporary engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な技術者",
    "example": "Please check the temporary engineer before the meeting.",
    "example_ja": "会議の前に一時的な技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1164,
    "word": "temporary representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な担当者",
    "example": "Please check the temporary representative before the meeting.",
    "example_ja": "会議の前に一時的な担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1165,
    "word": "temporary assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な助手",
    "example": "Please check the temporary assistant before the meeting.",
    "example_ja": "会議の前に一時的な助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1166,
    "word": "temporary director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な部長",
    "example": "Please check the temporary director before the meeting.",
    "example_ja": "会議の前に一時的な部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1167,
    "word": "temporary staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な職員",
    "example": "Please check the temporary staff member before the meeting.",
    "example_ja": "会議の前に一時的な職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1168,
    "word": "temporary colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な同僚",
    "example": "Please check the temporary colleague before the meeting.",
    "example_ja": "会議の前に一時的な同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1169,
    "word": "temporary specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な専門家",
    "example": "Please check the temporary specialist before the meeting.",
    "example_ja": "会議の前に一時的な専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1170,
    "word": "temporary consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的なコンサルタント",
    "example": "Please check the temporary consultant before the meeting.",
    "example_ja": "会議の前に一時的なコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1171,
    "word": "temporary contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な請負業者",
    "example": "Please check the temporary contractor before the meeting.",
    "example_ja": "会議の前に一時的な請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1172,
    "word": "temporary supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な供給業者",
    "example": "Please check the temporary supplier before the meeting.",
    "example_ja": "会議の前に一時的な供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1173,
    "word": "temporary vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "一時的な販売業者",
    "example": "Please check the temporary vendor before the meeting.",
    "example_ja": "会議の前に一時的な販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1174,
    "word": "full-time manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の管理者",
    "example": "Please check the full-time manager before the meeting.",
    "example_ja": "会議の前に常勤の管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1175,
    "word": "full-time supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の監督者",
    "example": "Please check the full-time supervisor before the meeting.",
    "example_ja": "会議の前に常勤の監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1176,
    "word": "full-time employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の従業員",
    "example": "Please check the full-time employee before the meeting.",
    "example_ja": "会議の前に常勤の従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1177,
    "word": "full-time applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の応募者",
    "example": "Please check the full-time applicant before the meeting.",
    "example_ja": "会議の前に常勤の応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1178,
    "word": "full-time candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の候補者",
    "example": "Please check the full-time candidate before the meeting.",
    "example_ja": "会議の前に常勤の候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1179,
    "word": "full-time customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の顧客",
    "example": "Please check the full-time customer before the meeting.",
    "example_ja": "会議の前に常勤の顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1180,
    "word": "full-time client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の顧客",
    "example": "Please check the full-time client before the meeting.",
    "example_ja": "会議の前に常勤の顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1181,
    "word": "full-time visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の訪問者",
    "example": "Please check the full-time visitor before the meeting.",
    "example_ja": "会議の前に常勤の訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1182,
    "word": "full-time technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の技術者",
    "example": "Please check the full-time technician before the meeting.",
    "example_ja": "会議の前に常勤の技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1183,
    "word": "full-time engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の技術者",
    "example": "Please check the full-time engineer before the meeting.",
    "example_ja": "会議の前に常勤の技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1184,
    "word": "full-time representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の担当者",
    "example": "Please check the full-time representative before the meeting.",
    "example_ja": "会議の前に常勤の担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1185,
    "word": "full-time assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の助手",
    "example": "Please check the full-time assistant before the meeting.",
    "example_ja": "会議の前に常勤の助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1186,
    "word": "full-time director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の部長",
    "example": "Please check the full-time director before the meeting.",
    "example_ja": "会議の前に常勤の部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1187,
    "word": "full-time staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の職員",
    "example": "Please check the full-time staff member before the meeting.",
    "example_ja": "会議の前に常勤の職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1188,
    "word": "full-time colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の同僚",
    "example": "Please check the full-time colleague before the meeting.",
    "example_ja": "会議の前に常勤の同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1189,
    "word": "full-time specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の専門家",
    "example": "Please check the full-time specialist before the meeting.",
    "example_ja": "会議の前に常勤の専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1190,
    "word": "full-time consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤のコンサルタント",
    "example": "Please check the full-time consultant before the meeting.",
    "example_ja": "会議の前に常勤のコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1191,
    "word": "full-time contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の請負業者",
    "example": "Please check the full-time contractor before the meeting.",
    "example_ja": "会議の前に常勤の請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1192,
    "word": "full-time supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の供給業者",
    "example": "Please check the full-time supplier before the meeting.",
    "example_ja": "会議の前に常勤の供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1193,
    "word": "full-time vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "常勤の販売業者",
    "example": "Please check the full-time vendor before the meeting.",
    "example_ja": "会議の前に常勤の販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1194,
    "word": "part-time manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の管理者",
    "example": "Please check the part-time manager before the meeting.",
    "example_ja": "会議の前に非常勤の管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1195,
    "word": "part-time supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の監督者",
    "example": "Please check the part-time supervisor before the meeting.",
    "example_ja": "会議の前に非常勤の監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1196,
    "word": "part-time employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の従業員",
    "example": "Please check the part-time employee before the meeting.",
    "example_ja": "会議の前に非常勤の従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1197,
    "word": "part-time applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の応募者",
    "example": "Please check the part-time applicant before the meeting.",
    "example_ja": "会議の前に非常勤の応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1198,
    "word": "part-time candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の候補者",
    "example": "Please check the part-time candidate before the meeting.",
    "example_ja": "会議の前に非常勤の候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1199,
    "word": "part-time customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の顧客",
    "example": "Please check the part-time customer before the meeting.",
    "example_ja": "会議の前に非常勤の顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1200,
    "word": "part-time client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の顧客",
    "example": "Please check the part-time client before the meeting.",
    "example_ja": "会議の前に非常勤の顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1201,
    "word": "part-time visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の訪問者",
    "example": "Please check the part-time visitor before the meeting.",
    "example_ja": "会議の前に非常勤の訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1202,
    "word": "part-time technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の技術者",
    "example": "Please check the part-time technician before the meeting.",
    "example_ja": "会議の前に非常勤の技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1203,
    "word": "part-time engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の技術者",
    "example": "Please check the part-time engineer before the meeting.",
    "example_ja": "会議の前に非常勤の技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1204,
    "word": "part-time representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の担当者",
    "example": "Please check the part-time representative before the meeting.",
    "example_ja": "会議の前に非常勤の担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1205,
    "word": "part-time assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の助手",
    "example": "Please check the part-time assistant before the meeting.",
    "example_ja": "会議の前に非常勤の助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1206,
    "word": "part-time director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の部長",
    "example": "Please check the part-time director before the meeting.",
    "example_ja": "会議の前に非常勤の部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1207,
    "word": "part-time staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の職員",
    "example": "Please check the part-time staff member before the meeting.",
    "example_ja": "会議の前に非常勤の職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1208,
    "word": "part-time colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の同僚",
    "example": "Please check the part-time colleague before the meeting.",
    "example_ja": "会議の前に非常勤の同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1209,
    "word": "part-time specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の専門家",
    "example": "Please check the part-time specialist before the meeting.",
    "example_ja": "会議の前に非常勤の専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1210,
    "word": "part-time consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤のコンサルタント",
    "example": "Please check the part-time consultant before the meeting.",
    "example_ja": "会議の前に非常勤のコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1211,
    "word": "part-time contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の請負業者",
    "example": "Please check the part-time contractor before the meeting.",
    "example_ja": "会議の前に非常勤の請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1212,
    "word": "part-time supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の供給業者",
    "example": "Please check the part-time supplier before the meeting.",
    "example_ja": "会議の前に非常勤の供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1213,
    "word": "part-time vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "非常勤の販売業者",
    "example": "Please check the part-time vendor before the meeting.",
    "example_ja": "会議の前に非常勤の販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1214,
    "word": "professional manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な管理者",
    "example": "Please check the professional manager before the meeting.",
    "example_ja": "会議の前に専門的な管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1215,
    "word": "professional supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な監督者",
    "example": "Please check the professional supervisor before the meeting.",
    "example_ja": "会議の前に専門的な監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1216,
    "word": "professional employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な従業員",
    "example": "Please check the professional employee before the meeting.",
    "example_ja": "会議の前に専門的な従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1217,
    "word": "professional applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な応募者",
    "example": "Please check the professional applicant before the meeting.",
    "example_ja": "会議の前に専門的な応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1218,
    "word": "professional candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な候補者",
    "example": "Please check the professional candidate before the meeting.",
    "example_ja": "会議の前に専門的な候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1219,
    "word": "professional customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な顧客",
    "example": "Please check the professional customer before the meeting.",
    "example_ja": "会議の前に専門的な顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1220,
    "word": "professional client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な顧客",
    "example": "Please check the professional client before the meeting.",
    "example_ja": "会議の前に専門的な顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1221,
    "word": "professional visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な訪問者",
    "example": "Please check the professional visitor before the meeting.",
    "example_ja": "会議の前に専門的な訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1222,
    "word": "professional technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な技術者",
    "example": "Please check the professional technician before the meeting.",
    "example_ja": "会議の前に専門的な技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1223,
    "word": "professional engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な技術者",
    "example": "Please check the professional engineer before the meeting.",
    "example_ja": "会議の前に専門的な技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1224,
    "word": "professional representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な担当者",
    "example": "Please check the professional representative before the meeting.",
    "example_ja": "会議の前に専門的な担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1225,
    "word": "professional assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な助手",
    "example": "Please check the professional assistant before the meeting.",
    "example_ja": "会議の前に専門的な助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1226,
    "word": "professional director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な部長",
    "example": "Please check the professional director before the meeting.",
    "example_ja": "会議の前に専門的な部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1227,
    "word": "professional staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な職員",
    "example": "Please check the professional staff member before the meeting.",
    "example_ja": "会議の前に専門的な職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1228,
    "word": "professional colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な同僚",
    "example": "Please check the professional colleague before the meeting.",
    "example_ja": "会議の前に専門的な同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1229,
    "word": "professional specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な専門家",
    "example": "Please check the professional specialist before the meeting.",
    "example_ja": "会議の前に専門的な専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1230,
    "word": "professional consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的なコンサルタント",
    "example": "Please check the professional consultant before the meeting.",
    "example_ja": "会議の前に専門的なコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1231,
    "word": "professional contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な請負業者",
    "example": "Please check the professional contractor before the meeting.",
    "example_ja": "会議の前に専門的な請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1232,
    "word": "professional supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な供給業者",
    "example": "Please check the professional supplier before the meeting.",
    "example_ja": "会議の前に専門的な供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1233,
    "word": "professional vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門的な販売業者",
    "example": "Please check the professional vendor before the meeting.",
    "example_ja": "会議の前に専門的な販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1234,
    "word": "responsible manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある管理者",
    "example": "Please check the responsible manager before the meeting.",
    "example_ja": "会議の前に責任ある管理者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1235,
    "word": "responsible supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある監督者",
    "example": "Please check the responsible supervisor before the meeting.",
    "example_ja": "会議の前に責任ある監督者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1236,
    "word": "responsible employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある従業員",
    "example": "Please check the responsible employee before the meeting.",
    "example_ja": "会議の前に責任ある従業員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1237,
    "word": "responsible applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある応募者",
    "example": "Please check the responsible applicant before the meeting.",
    "example_ja": "会議の前に責任ある応募者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1238,
    "word": "responsible candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある候補者",
    "example": "Please check the responsible candidate before the meeting.",
    "example_ja": "会議の前に責任ある候補者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1239,
    "word": "responsible customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある顧客",
    "example": "Please check the responsible customer before the meeting.",
    "example_ja": "会議の前に責任ある顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1240,
    "word": "responsible client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある顧客",
    "example": "Please check the responsible client before the meeting.",
    "example_ja": "会議の前に責任ある顧客を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1241,
    "word": "responsible visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある訪問者",
    "example": "Please check the responsible visitor before the meeting.",
    "example_ja": "会議の前に責任ある訪問者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1242,
    "word": "responsible technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある技術者",
    "example": "Please check the responsible technician before the meeting.",
    "example_ja": "会議の前に責任ある技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1243,
    "word": "responsible engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある技術者",
    "example": "Please check the responsible engineer before the meeting.",
    "example_ja": "会議の前に責任ある技術者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1244,
    "word": "responsible representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある担当者",
    "example": "Please check the responsible representative before the meeting.",
    "example_ja": "会議の前に責任ある担当者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1245,
    "word": "responsible assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある助手",
    "example": "Please check the responsible assistant before the meeting.",
    "example_ja": "会議の前に責任ある助手を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1246,
    "word": "responsible director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある部長",
    "example": "Please check the responsible director before the meeting.",
    "example_ja": "会議の前に責任ある部長を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1247,
    "word": "responsible staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある職員",
    "example": "Please check the responsible staff member before the meeting.",
    "example_ja": "会議の前に責任ある職員を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1248,
    "word": "responsible colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある同僚",
    "example": "Please check the responsible colleague before the meeting.",
    "example_ja": "会議の前に責任ある同僚を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1249,
    "word": "responsible specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある専門家",
    "example": "Please check the responsible specialist before the meeting.",
    "example_ja": "会議の前に責任ある専門家を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1250,
    "word": "responsible consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任あるコンサルタント",
    "example": "Please check the responsible consultant before the meeting.",
    "example_ja": "会議の前に責任あるコンサルタントを確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1251,
    "word": "responsible contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある請負業者",
    "example": "Please check the responsible contractor before the meeting.",
    "example_ja": "会議の前に責任ある請負業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1252,
    "word": "responsible supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある供給業者",
    "example": "Please check the responsible supplier before the meeting.",
    "example_ja": "会議の前に責任ある供給業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1253,
    "word": "responsible vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "責任ある販売業者",
    "example": "Please check the responsible vendor before the meeting.",
    "example_ja": "会議の前に責任ある販売業者を確認してください。",
    "source": "人物・役職：形容詞＋名詞"
  },
  {
    "id": 1254,
    "word": "annual budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の予算",
    "example": "Please check the annual budget before the meeting.",
    "example_ja": "会議の前に年間の予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1255,
    "word": "annual expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の費用",
    "example": "Please check the annual expense before the meeting.",
    "example_ja": "会議の前に年間の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1256,
    "word": "annual revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の収益",
    "example": "Please check the annual revenue before the meeting.",
    "example_ja": "会議の前に年間の収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1257,
    "word": "annual profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の利益",
    "example": "Please check the annual profit before the meeting.",
    "example_ja": "会議の前に年間の利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1258,
    "word": "annual sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の売上",
    "example": "Please check the annual sales before the meeting.",
    "example_ja": "会議の前に年間の売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1259,
    "word": "annual cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の費用",
    "example": "Please check the annual cost before the meeting.",
    "example_ja": "会議の前に年間の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1260,
    "word": "annual price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の価格",
    "example": "Please check the annual price before the meeting.",
    "example_ja": "会議の前に年間の価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1261,
    "word": "annual fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の料金",
    "example": "Please check the annual fee before the meeting.",
    "example_ja": "会議の前に年間の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1262,
    "word": "annual discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の割引",
    "example": "Please check the annual discount before the meeting.",
    "example_ja": "会議の前に年間の割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1263,
    "word": "annual refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の返金",
    "example": "Please check the annual refund before the meeting.",
    "example_ja": "会議の前に年間の返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1264,
    "word": "annual payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の支払い",
    "example": "Please check the annual payment before the meeting.",
    "example_ja": "会議の前に年間の支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1265,
    "word": "annual deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の預金・前金",
    "example": "Please check the annual deposit before the meeting.",
    "example_ja": "会議の前に年間の預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1266,
    "word": "annual balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の残高",
    "example": "Please check the annual balance before the meeting.",
    "example_ja": "会議の前に年間の残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1267,
    "word": "annual account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の口座",
    "example": "Please check the annual account before the meeting.",
    "example_ja": "会議の前に年間の口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1268,
    "word": "annual transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の取引",
    "example": "Please check the annual transaction before the meeting.",
    "example_ja": "会議の前に年間の取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1269,
    "word": "annual investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の投資",
    "example": "Please check the annual investment before the meeting.",
    "example_ja": "会議の前に年間の投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1270,
    "word": "annual tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の税金",
    "example": "Please check the annual tax before the meeting.",
    "example_ja": "会議の前に年間の税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1271,
    "word": "annual payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の給与支払い",
    "example": "Please check the annual payroll before the meeting.",
    "example_ja": "会議の前に年間の給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1272,
    "word": "annual bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の請求書",
    "example": "Please check the annual bill before the meeting.",
    "example_ja": "会議の前に年間の請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1273,
    "word": "annual charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の料金",
    "example": "Please check the annual charge before the meeting.",
    "example_ja": "会議の前に年間の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1274,
    "word": "annual rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "年間の料金・率",
    "example": "Please check the annual rate before the meeting.",
    "example_ja": "会議の前に年間の料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1275,
    "word": "monthly budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の予算",
    "example": "Please check the monthly budget before the meeting.",
    "example_ja": "会議の前に毎月の予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1276,
    "word": "monthly expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の費用",
    "example": "Please check the monthly expense before the meeting.",
    "example_ja": "会議の前に毎月の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1277,
    "word": "monthly revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の収益",
    "example": "Please check the monthly revenue before the meeting.",
    "example_ja": "会議の前に毎月の収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1278,
    "word": "monthly profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の利益",
    "example": "Please check the monthly profit before the meeting.",
    "example_ja": "会議の前に毎月の利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1279,
    "word": "monthly sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の売上",
    "example": "Please check the monthly sales before the meeting.",
    "example_ja": "会議の前に毎月の売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1280,
    "word": "monthly cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の費用",
    "example": "Please check the monthly cost before the meeting.",
    "example_ja": "会議の前に毎月の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1281,
    "word": "monthly price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の価格",
    "example": "Please check the monthly price before the meeting.",
    "example_ja": "会議の前に毎月の価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1282,
    "word": "monthly fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の料金",
    "example": "Please check the monthly fee before the meeting.",
    "example_ja": "会議の前に毎月の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1283,
    "word": "monthly discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の割引",
    "example": "Please check the monthly discount before the meeting.",
    "example_ja": "会議の前に毎月の割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1284,
    "word": "monthly refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の返金",
    "example": "Please check the monthly refund before the meeting.",
    "example_ja": "会議の前に毎月の返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1285,
    "word": "monthly payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の支払い",
    "example": "Please check the monthly payment before the meeting.",
    "example_ja": "会議の前に毎月の支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1286,
    "word": "monthly deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の預金・前金",
    "example": "Please check the monthly deposit before the meeting.",
    "example_ja": "会議の前に毎月の預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1287,
    "word": "monthly balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の残高",
    "example": "Please check the monthly balance before the meeting.",
    "example_ja": "会議の前に毎月の残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1288,
    "word": "monthly account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の口座",
    "example": "Please check the monthly account before the meeting.",
    "example_ja": "会議の前に毎月の口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1289,
    "word": "monthly transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の取引",
    "example": "Please check the monthly transaction before the meeting.",
    "example_ja": "会議の前に毎月の取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1290,
    "word": "monthly investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の投資",
    "example": "Please check the monthly investment before the meeting.",
    "example_ja": "会議の前に毎月の投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1291,
    "word": "monthly tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の税金",
    "example": "Please check the monthly tax before the meeting.",
    "example_ja": "会議の前に毎月の税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1292,
    "word": "monthly payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の給与支払い",
    "example": "Please check the monthly payroll before the meeting.",
    "example_ja": "会議の前に毎月の給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1293,
    "word": "monthly bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の請求書",
    "example": "Please check the monthly bill before the meeting.",
    "example_ja": "会議の前に毎月の請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1294,
    "word": "monthly charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の料金",
    "example": "Please check the monthly charge before the meeting.",
    "example_ja": "会議の前に毎月の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1295,
    "word": "monthly rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "毎月の料金・率",
    "example": "Please check the monthly rate before the meeting.",
    "example_ja": "会議の前に毎月の料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1296,
    "word": "total budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の予算",
    "example": "Please check the total budget before the meeting.",
    "example_ja": "会議の前に合計の予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1297,
    "word": "total expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の費用",
    "example": "Please check the total expense before the meeting.",
    "example_ja": "会議の前に合計の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1298,
    "word": "total revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の収益",
    "example": "Please check the total revenue before the meeting.",
    "example_ja": "会議の前に合計の収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1299,
    "word": "total profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の利益",
    "example": "Please check the total profit before the meeting.",
    "example_ja": "会議の前に合計の利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1300,
    "word": "total sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の売上",
    "example": "Please check the total sales before the meeting.",
    "example_ja": "会議の前に合計の売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1301,
    "word": "total cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の費用",
    "example": "Please check the total cost before the meeting.",
    "example_ja": "会議の前に合計の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1302,
    "word": "total price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の価格",
    "example": "Please check the total price before the meeting.",
    "example_ja": "会議の前に合計の価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1303,
    "word": "total fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の料金",
    "example": "Please check the total fee before the meeting.",
    "example_ja": "会議の前に合計の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1304,
    "word": "total discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の割引",
    "example": "Please check the total discount before the meeting.",
    "example_ja": "会議の前に合計の割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1305,
    "word": "total refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の返金",
    "example": "Please check the total refund before the meeting.",
    "example_ja": "会議の前に合計の返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1306,
    "word": "total payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の支払い",
    "example": "Please check the total payment before the meeting.",
    "example_ja": "会議の前に合計の支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1307,
    "word": "total deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の預金・前金",
    "example": "Please check the total deposit before the meeting.",
    "example_ja": "会議の前に合計の預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1308,
    "word": "total balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の残高",
    "example": "Please check the total balance before the meeting.",
    "example_ja": "会議の前に合計の残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1309,
    "word": "total account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の口座",
    "example": "Please check the total account before the meeting.",
    "example_ja": "会議の前に合計の口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1310,
    "word": "total transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の取引",
    "example": "Please check the total transaction before the meeting.",
    "example_ja": "会議の前に合計の取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1311,
    "word": "total investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の投資",
    "example": "Please check the total investment before the meeting.",
    "example_ja": "会議の前に合計の投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1312,
    "word": "total tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の税金",
    "example": "Please check the total tax before the meeting.",
    "example_ja": "会議の前に合計の税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1313,
    "word": "total payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の給与支払い",
    "example": "Please check the total payroll before the meeting.",
    "example_ja": "会議の前に合計の給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1314,
    "word": "total bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の請求書",
    "example": "Please check the total bill before the meeting.",
    "example_ja": "会議の前に合計の請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1315,
    "word": "total charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の料金",
    "example": "Please check the total charge before the meeting.",
    "example_ja": "会議の前に合計の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1316,
    "word": "total rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の料金・率",
    "example": "Please check the total rate before the meeting.",
    "example_ja": "会議の前に合計の料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1317,
    "word": "total estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "合計の見積り",
    "example": "Please check the total estimate before the meeting.",
    "example_ja": "会議の前に合計の見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1318,
    "word": "additional budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の予算",
    "example": "Please check the additional budget before the meeting.",
    "example_ja": "会議の前に追加の予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1319,
    "word": "additional expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の費用",
    "example": "Please check the additional expense before the meeting.",
    "example_ja": "会議の前に追加の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1320,
    "word": "additional revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の収益",
    "example": "Please check the additional revenue before the meeting.",
    "example_ja": "会議の前に追加の収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1321,
    "word": "additional profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の利益",
    "example": "Please check the additional profit before the meeting.",
    "example_ja": "会議の前に追加の利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1322,
    "word": "additional sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の売上",
    "example": "Please check the additional sales before the meeting.",
    "example_ja": "会議の前に追加の売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1323,
    "word": "additional cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の費用",
    "example": "Please check the additional cost before the meeting.",
    "example_ja": "会議の前に追加の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1324,
    "word": "additional price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の価格",
    "example": "Please check the additional price before the meeting.",
    "example_ja": "会議の前に追加の価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1325,
    "word": "additional fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の料金",
    "example": "Please check the additional fee before the meeting.",
    "example_ja": "会議の前に追加の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1326,
    "word": "additional discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の割引",
    "example": "Please check the additional discount before the meeting.",
    "example_ja": "会議の前に追加の割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1327,
    "word": "additional refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の返金",
    "example": "Please check the additional refund before the meeting.",
    "example_ja": "会議の前に追加の返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1328,
    "word": "additional payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の支払い",
    "example": "Please check the additional payment before the meeting.",
    "example_ja": "会議の前に追加の支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1329,
    "word": "additional deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の預金・前金",
    "example": "Please check the additional deposit before the meeting.",
    "example_ja": "会議の前に追加の預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1330,
    "word": "additional balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の残高",
    "example": "Please check the additional balance before the meeting.",
    "example_ja": "会議の前に追加の残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1331,
    "word": "additional account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の口座",
    "example": "Please check the additional account before the meeting.",
    "example_ja": "会議の前に追加の口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1332,
    "word": "additional transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の取引",
    "example": "Please check the additional transaction before the meeting.",
    "example_ja": "会議の前に追加の取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1333,
    "word": "additional investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の投資",
    "example": "Please check the additional investment before the meeting.",
    "example_ja": "会議の前に追加の投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1334,
    "word": "additional tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の税金",
    "example": "Please check the additional tax before the meeting.",
    "example_ja": "会議の前に追加の税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1335,
    "word": "additional payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の給与支払い",
    "example": "Please check the additional payroll before the meeting.",
    "example_ja": "会議の前に追加の給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1336,
    "word": "additional bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の請求書",
    "example": "Please check the additional bill before the meeting.",
    "example_ja": "会議の前に追加の請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1337,
    "word": "additional charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の料金",
    "example": "Please check the additional charge before the meeting.",
    "example_ja": "会議の前に追加の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1338,
    "word": "additional rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の料金・率",
    "example": "Please check the additional rate before the meeting.",
    "example_ja": "会議の前に追加の料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1339,
    "word": "additional estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "追加の見積り",
    "example": "Please check the additional estimate before the meeting.",
    "example_ja": "会議の前に追加の見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1340,
    "word": "reasonable budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な予算",
    "example": "Please check the reasonable budget before the meeting.",
    "example_ja": "会議の前に妥当な予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1341,
    "word": "reasonable expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な費用",
    "example": "Please check the reasonable expense before the meeting.",
    "example_ja": "会議の前に妥当な費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1342,
    "word": "reasonable revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な収益",
    "example": "Please check the reasonable revenue before the meeting.",
    "example_ja": "会議の前に妥当な収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1343,
    "word": "reasonable profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な利益",
    "example": "Please check the reasonable profit before the meeting.",
    "example_ja": "会議の前に妥当な利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1344,
    "word": "reasonable sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な売上",
    "example": "Please check the reasonable sales before the meeting.",
    "example_ja": "会議の前に妥当な売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1345,
    "word": "reasonable cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な費用",
    "example": "Please check the reasonable cost before the meeting.",
    "example_ja": "会議の前に妥当な費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1346,
    "word": "reasonable price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な価格",
    "example": "Please check the reasonable price before the meeting.",
    "example_ja": "会議の前に妥当な価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1347,
    "word": "reasonable fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な料金",
    "example": "Please check the reasonable fee before the meeting.",
    "example_ja": "会議の前に妥当な料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1348,
    "word": "reasonable discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な割引",
    "example": "Please check the reasonable discount before the meeting.",
    "example_ja": "会議の前に妥当な割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1349,
    "word": "reasonable refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な返金",
    "example": "Please check the reasonable refund before the meeting.",
    "example_ja": "会議の前に妥当な返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1350,
    "word": "reasonable payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な支払い",
    "example": "Please check the reasonable payment before the meeting.",
    "example_ja": "会議の前に妥当な支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1351,
    "word": "reasonable deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な預金・前金",
    "example": "Please check the reasonable deposit before the meeting.",
    "example_ja": "会議の前に妥当な預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1352,
    "word": "reasonable balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な残高",
    "example": "Please check the reasonable balance before the meeting.",
    "example_ja": "会議の前に妥当な残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1353,
    "word": "reasonable account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な口座",
    "example": "Please check the reasonable account before the meeting.",
    "example_ja": "会議の前に妥当な口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1354,
    "word": "reasonable transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な取引",
    "example": "Please check the reasonable transaction before the meeting.",
    "example_ja": "会議の前に妥当な取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1355,
    "word": "reasonable investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な投資",
    "example": "Please check the reasonable investment before the meeting.",
    "example_ja": "会議の前に妥当な投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1356,
    "word": "reasonable tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な税金",
    "example": "Please check the reasonable tax before the meeting.",
    "example_ja": "会議の前に妥当な税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1357,
    "word": "reasonable payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な給与支払い",
    "example": "Please check the reasonable payroll before the meeting.",
    "example_ja": "会議の前に妥当な給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1358,
    "word": "reasonable bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な請求書",
    "example": "Please check the reasonable bill before the meeting.",
    "example_ja": "会議の前に妥当な請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1359,
    "word": "reasonable charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な料金",
    "example": "Please check the reasonable charge before the meeting.",
    "example_ja": "会議の前に妥当な料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1360,
    "word": "reasonable rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な料金・率",
    "example": "Please check the reasonable rate before the meeting.",
    "example_ja": "会議の前に妥当な料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1361,
    "word": "reasonable estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "妥当な見積り",
    "example": "Please check the reasonable estimate before the meeting.",
    "example_ja": "会議の前に妥当な見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1362,
    "word": "high budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い予算",
    "example": "Please check the high budget before the meeting.",
    "example_ja": "会議の前に高い予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1363,
    "word": "high expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い費用",
    "example": "Please check the high expense before the meeting.",
    "example_ja": "会議の前に高い費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1364,
    "word": "high revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い収益",
    "example": "Please check the high revenue before the meeting.",
    "example_ja": "会議の前に高い収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1365,
    "word": "high profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い利益",
    "example": "Please check the high profit before the meeting.",
    "example_ja": "会議の前に高い利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1366,
    "word": "high sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い売上",
    "example": "Please check the high sales before the meeting.",
    "example_ja": "会議の前に高い売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1367,
    "word": "high cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い費用",
    "example": "Please check the high cost before the meeting.",
    "example_ja": "会議の前に高い費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1368,
    "word": "high price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い価格",
    "example": "Please check the high price before the meeting.",
    "example_ja": "会議の前に高い価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1369,
    "word": "high fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い料金",
    "example": "Please check the high fee before the meeting.",
    "example_ja": "会議の前に高い料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1370,
    "word": "high discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い割引",
    "example": "Please check the high discount before the meeting.",
    "example_ja": "会議の前に高い割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1371,
    "word": "high refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い返金",
    "example": "Please check the high refund before the meeting.",
    "example_ja": "会議の前に高い返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1372,
    "word": "high payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い支払い",
    "example": "Please check the high payment before the meeting.",
    "example_ja": "会議の前に高い支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1373,
    "word": "high deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い預金・前金",
    "example": "Please check the high deposit before the meeting.",
    "example_ja": "会議の前に高い預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1374,
    "word": "high balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い残高",
    "example": "Please check the high balance before the meeting.",
    "example_ja": "会議の前に高い残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1375,
    "word": "high account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い口座",
    "example": "Please check the high account before the meeting.",
    "example_ja": "会議の前に高い口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1376,
    "word": "high transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い取引",
    "example": "Please check the high transaction before the meeting.",
    "example_ja": "会議の前に高い取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1377,
    "word": "high investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い投資",
    "example": "Please check the high investment before the meeting.",
    "example_ja": "会議の前に高い投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1378,
    "word": "high tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い税金",
    "example": "Please check the high tax before the meeting.",
    "example_ja": "会議の前に高い税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1379,
    "word": "high payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い給与支払い",
    "example": "Please check the high payroll before the meeting.",
    "example_ja": "会議の前に高い給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1380,
    "word": "high bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い請求書",
    "example": "Please check the high bill before the meeting.",
    "example_ja": "会議の前に高い請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1381,
    "word": "high charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い料金",
    "example": "Please check the high charge before the meeting.",
    "example_ja": "会議の前に高い料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1382,
    "word": "high rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い料金・率",
    "example": "Please check the high rate before the meeting.",
    "example_ja": "会議の前に高い料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1383,
    "word": "high estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "高い見積り",
    "example": "Please check the high estimate before the meeting.",
    "example_ja": "会議の前に高い見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1384,
    "word": "low budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い予算",
    "example": "Please check the low budget before the meeting.",
    "example_ja": "会議の前に低い予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1385,
    "word": "low expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い費用",
    "example": "Please check the low expense before the meeting.",
    "example_ja": "会議の前に低い費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1386,
    "word": "low revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い収益",
    "example": "Please check the low revenue before the meeting.",
    "example_ja": "会議の前に低い収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1387,
    "word": "low profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い利益",
    "example": "Please check the low profit before the meeting.",
    "example_ja": "会議の前に低い利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1388,
    "word": "low sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い売上",
    "example": "Please check the low sales before the meeting.",
    "example_ja": "会議の前に低い売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1389,
    "word": "low cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い費用",
    "example": "Please check the low cost before the meeting.",
    "example_ja": "会議の前に低い費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1390,
    "word": "low price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い価格",
    "example": "Please check the low price before the meeting.",
    "example_ja": "会議の前に低い価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1391,
    "word": "low fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い料金",
    "example": "Please check the low fee before the meeting.",
    "example_ja": "会議の前に低い料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1392,
    "word": "low discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い割引",
    "example": "Please check the low discount before the meeting.",
    "example_ja": "会議の前に低い割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1393,
    "word": "low refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い返金",
    "example": "Please check the low refund before the meeting.",
    "example_ja": "会議の前に低い返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1394,
    "word": "low payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い支払い",
    "example": "Please check the low payment before the meeting.",
    "example_ja": "会議の前に低い支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1395,
    "word": "low deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い預金・前金",
    "example": "Please check the low deposit before the meeting.",
    "example_ja": "会議の前に低い預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1396,
    "word": "low balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い残高",
    "example": "Please check the low balance before the meeting.",
    "example_ja": "会議の前に低い残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1397,
    "word": "low account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い口座",
    "example": "Please check the low account before the meeting.",
    "example_ja": "会議の前に低い口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1398,
    "word": "low transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い取引",
    "example": "Please check the low transaction before the meeting.",
    "example_ja": "会議の前に低い取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1399,
    "word": "low investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い投資",
    "example": "Please check the low investment before the meeting.",
    "example_ja": "会議の前に低い投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1400,
    "word": "low tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い税金",
    "example": "Please check the low tax before the meeting.",
    "example_ja": "会議の前に低い税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1401,
    "word": "low payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い給与支払い",
    "example": "Please check the low payroll before the meeting.",
    "example_ja": "会議の前に低い給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1402,
    "word": "low bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い請求書",
    "example": "Please check the low bill before the meeting.",
    "example_ja": "会議の前に低い請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1403,
    "word": "low charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い料金",
    "example": "Please check the low charge before the meeting.",
    "example_ja": "会議の前に低い料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1404,
    "word": "low rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い料金・率",
    "example": "Please check the low rate before the meeting.",
    "example_ja": "会議の前に低い料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1405,
    "word": "low estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "低い見積り",
    "example": "Please check the low estimate before the meeting.",
    "example_ja": "会議の前に低い見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1406,
    "word": "fixed budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の予算",
    "example": "Please check the fixed budget before the meeting.",
    "example_ja": "会議の前に固定の予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1407,
    "word": "fixed expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の費用",
    "example": "Please check the fixed expense before the meeting.",
    "example_ja": "会議の前に固定の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1408,
    "word": "fixed revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の収益",
    "example": "Please check the fixed revenue before the meeting.",
    "example_ja": "会議の前に固定の収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1409,
    "word": "fixed profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の利益",
    "example": "Please check the fixed profit before the meeting.",
    "example_ja": "会議の前に固定の利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1410,
    "word": "fixed sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の売上",
    "example": "Please check the fixed sales before the meeting.",
    "example_ja": "会議の前に固定の売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1411,
    "word": "fixed cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の費用",
    "example": "Please check the fixed cost before the meeting.",
    "example_ja": "会議の前に固定の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1412,
    "word": "fixed price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の価格",
    "example": "Please check the fixed price before the meeting.",
    "example_ja": "会議の前に固定の価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1413,
    "word": "fixed fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の料金",
    "example": "Please check the fixed fee before the meeting.",
    "example_ja": "会議の前に固定の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1414,
    "word": "fixed discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の割引",
    "example": "Please check the fixed discount before the meeting.",
    "example_ja": "会議の前に固定の割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1415,
    "word": "fixed refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の返金",
    "example": "Please check the fixed refund before the meeting.",
    "example_ja": "会議の前に固定の返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1416,
    "word": "fixed payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の支払い",
    "example": "Please check the fixed payment before the meeting.",
    "example_ja": "会議の前に固定の支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1417,
    "word": "fixed deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の預金・前金",
    "example": "Please check the fixed deposit before the meeting.",
    "example_ja": "会議の前に固定の預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1418,
    "word": "fixed balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の残高",
    "example": "Please check the fixed balance before the meeting.",
    "example_ja": "会議の前に固定の残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1419,
    "word": "fixed account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の口座",
    "example": "Please check the fixed account before the meeting.",
    "example_ja": "会議の前に固定の口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1420,
    "word": "fixed transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の取引",
    "example": "Please check the fixed transaction before the meeting.",
    "example_ja": "会議の前に固定の取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1421,
    "word": "fixed investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の投資",
    "example": "Please check the fixed investment before the meeting.",
    "example_ja": "会議の前に固定の投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1422,
    "word": "fixed tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の税金",
    "example": "Please check the fixed tax before the meeting.",
    "example_ja": "会議の前に固定の税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1423,
    "word": "fixed payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の給与支払い",
    "example": "Please check the fixed payroll before the meeting.",
    "example_ja": "会議の前に固定の給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1424,
    "word": "fixed bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の請求書",
    "example": "Please check the fixed bill before the meeting.",
    "example_ja": "会議の前に固定の請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1425,
    "word": "fixed charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の料金",
    "example": "Please check the fixed charge before the meeting.",
    "example_ja": "会議の前に固定の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1426,
    "word": "fixed rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の料金・率",
    "example": "Please check the fixed rate before the meeting.",
    "example_ja": "会議の前に固定の料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1427,
    "word": "fixed estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "固定の見積り",
    "example": "Please check the fixed estimate before the meeting.",
    "example_ja": "会議の前に固定の見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1428,
    "word": "variable budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する予算",
    "example": "Please check the variable budget before the meeting.",
    "example_ja": "会議の前に変動する予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1429,
    "word": "variable expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する費用",
    "example": "Please check the variable expense before the meeting.",
    "example_ja": "会議の前に変動する費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1430,
    "word": "variable revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する収益",
    "example": "Please check the variable revenue before the meeting.",
    "example_ja": "会議の前に変動する収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1431,
    "word": "variable profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する利益",
    "example": "Please check the variable profit before the meeting.",
    "example_ja": "会議の前に変動する利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1432,
    "word": "variable sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する売上",
    "example": "Please check the variable sales before the meeting.",
    "example_ja": "会議の前に変動する売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1433,
    "word": "variable cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する費用",
    "example": "Please check the variable cost before the meeting.",
    "example_ja": "会議の前に変動する費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1434,
    "word": "variable price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する価格",
    "example": "Please check the variable price before the meeting.",
    "example_ja": "会議の前に変動する価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1435,
    "word": "variable fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する料金",
    "example": "Please check the variable fee before the meeting.",
    "example_ja": "会議の前に変動する料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1436,
    "word": "variable discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する割引",
    "example": "Please check the variable discount before the meeting.",
    "example_ja": "会議の前に変動する割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1437,
    "word": "variable refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する返金",
    "example": "Please check the variable refund before the meeting.",
    "example_ja": "会議の前に変動する返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1438,
    "word": "variable payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する支払い",
    "example": "Please check the variable payment before the meeting.",
    "example_ja": "会議の前に変動する支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1439,
    "word": "variable deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する預金・前金",
    "example": "Please check the variable deposit before the meeting.",
    "example_ja": "会議の前に変動する預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1440,
    "word": "variable balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する残高",
    "example": "Please check the variable balance before the meeting.",
    "example_ja": "会議の前に変動する残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1441,
    "word": "variable account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する口座",
    "example": "Please check the variable account before the meeting.",
    "example_ja": "会議の前に変動する口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1442,
    "word": "variable transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する取引",
    "example": "Please check the variable transaction before the meeting.",
    "example_ja": "会議の前に変動する取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1443,
    "word": "variable investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する投資",
    "example": "Please check the variable investment before the meeting.",
    "example_ja": "会議の前に変動する投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1444,
    "word": "variable tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する税金",
    "example": "Please check the variable tax before the meeting.",
    "example_ja": "会議の前に変動する税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1445,
    "word": "variable payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する給与支払い",
    "example": "Please check the variable payroll before the meeting.",
    "example_ja": "会議の前に変動する給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1446,
    "word": "variable bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する請求書",
    "example": "Please check the variable bill before the meeting.",
    "example_ja": "会議の前に変動する請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1447,
    "word": "variable charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する料金",
    "example": "Please check the variable charge before the meeting.",
    "example_ja": "会議の前に変動する料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1448,
    "word": "variable rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する料金・率",
    "example": "Please check the variable rate before the meeting.",
    "example_ja": "会議の前に変動する料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1449,
    "word": "variable estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "変動する見積り",
    "example": "Please check the variable estimate before the meeting.",
    "example_ja": "会議の前に変動する見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1450,
    "word": "overdue budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた予算",
    "example": "Please check the overdue budget before the meeting.",
    "example_ja": "会議の前に期限を過ぎた予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1451,
    "word": "overdue expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた費用",
    "example": "Please check the overdue expense before the meeting.",
    "example_ja": "会議の前に期限を過ぎた費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1452,
    "word": "overdue revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた収益",
    "example": "Please check the overdue revenue before the meeting.",
    "example_ja": "会議の前に期限を過ぎた収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1453,
    "word": "overdue profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた利益",
    "example": "Please check the overdue profit before the meeting.",
    "example_ja": "会議の前に期限を過ぎた利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1454,
    "word": "overdue sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた売上",
    "example": "Please check the overdue sales before the meeting.",
    "example_ja": "会議の前に期限を過ぎた売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1455,
    "word": "overdue cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた費用",
    "example": "Please check the overdue cost before the meeting.",
    "example_ja": "会議の前に期限を過ぎた費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1456,
    "word": "overdue price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた価格",
    "example": "Please check the overdue price before the meeting.",
    "example_ja": "会議の前に期限を過ぎた価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1457,
    "word": "overdue fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた料金",
    "example": "Please check the overdue fee before the meeting.",
    "example_ja": "会議の前に期限を過ぎた料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1458,
    "word": "overdue discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた割引",
    "example": "Please check the overdue discount before the meeting.",
    "example_ja": "会議の前に期限を過ぎた割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1459,
    "word": "overdue refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた返金",
    "example": "Please check the overdue refund before the meeting.",
    "example_ja": "会議の前に期限を過ぎた返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1460,
    "word": "overdue payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた支払い",
    "example": "Please check the overdue payment before the meeting.",
    "example_ja": "会議の前に期限を過ぎた支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1461,
    "word": "overdue deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた預金・前金",
    "example": "Please check the overdue deposit before the meeting.",
    "example_ja": "会議の前に期限を過ぎた預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1462,
    "word": "overdue balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた残高",
    "example": "Please check the overdue balance before the meeting.",
    "example_ja": "会議の前に期限を過ぎた残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1463,
    "word": "overdue account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた口座",
    "example": "Please check the overdue account before the meeting.",
    "example_ja": "会議の前に期限を過ぎた口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1464,
    "word": "overdue transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた取引",
    "example": "Please check the overdue transaction before the meeting.",
    "example_ja": "会議の前に期限を過ぎた取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1465,
    "word": "overdue investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた投資",
    "example": "Please check the overdue investment before the meeting.",
    "example_ja": "会議の前に期限を過ぎた投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1466,
    "word": "overdue tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた税金",
    "example": "Please check the overdue tax before the meeting.",
    "example_ja": "会議の前に期限を過ぎた税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1467,
    "word": "overdue payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた給与支払い",
    "example": "Please check the overdue payroll before the meeting.",
    "example_ja": "会議の前に期限を過ぎた給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1468,
    "word": "overdue bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた請求書",
    "example": "Please check the overdue bill before the meeting.",
    "example_ja": "会議の前に期限を過ぎた請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1469,
    "word": "overdue charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた料金",
    "example": "Please check the overdue charge before the meeting.",
    "example_ja": "会議の前に期限を過ぎた料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1470,
    "word": "overdue rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた料金・率",
    "example": "Please check the overdue rate before the meeting.",
    "example_ja": "会議の前に期限を過ぎた料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1471,
    "word": "overdue estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "期限を過ぎた見積り",
    "example": "Please check the overdue estimate before the meeting.",
    "example_ja": "会議の前に期限を過ぎた見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1472,
    "word": "outstanding budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの予算",
    "example": "Please check the outstanding budget before the meeting.",
    "example_ja": "会議の前に未払いの予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1473,
    "word": "outstanding expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの費用",
    "example": "Please check the outstanding expense before the meeting.",
    "example_ja": "会議の前に未払いの費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1474,
    "word": "outstanding revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの収益",
    "example": "Please check the outstanding revenue before the meeting.",
    "example_ja": "会議の前に未払いの収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1475,
    "word": "outstanding profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの利益",
    "example": "Please check the outstanding profit before the meeting.",
    "example_ja": "会議の前に未払いの利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1476,
    "word": "outstanding sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの売上",
    "example": "Please check the outstanding sales before the meeting.",
    "example_ja": "会議の前に未払いの売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1477,
    "word": "outstanding cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの費用",
    "example": "Please check the outstanding cost before the meeting.",
    "example_ja": "会議の前に未払いの費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1478,
    "word": "outstanding price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの価格",
    "example": "Please check the outstanding price before the meeting.",
    "example_ja": "会議の前に未払いの価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1479,
    "word": "outstanding fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの料金",
    "example": "Please check the outstanding fee before the meeting.",
    "example_ja": "会議の前に未払いの料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1480,
    "word": "outstanding discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの割引",
    "example": "Please check the outstanding discount before the meeting.",
    "example_ja": "会議の前に未払いの割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1481,
    "word": "outstanding refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの返金",
    "example": "Please check the outstanding refund before the meeting.",
    "example_ja": "会議の前に未払いの返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1482,
    "word": "outstanding payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの支払い",
    "example": "Please check the outstanding payment before the meeting.",
    "example_ja": "会議の前に未払いの支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1483,
    "word": "outstanding deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの預金・前金",
    "example": "Please check the outstanding deposit before the meeting.",
    "example_ja": "会議の前に未払いの預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1484,
    "word": "outstanding balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの残高",
    "example": "Please check the outstanding balance before the meeting.",
    "example_ja": "会議の前に未払いの残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1485,
    "word": "outstanding account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの口座",
    "example": "Please check the outstanding account before the meeting.",
    "example_ja": "会議の前に未払いの口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1486,
    "word": "outstanding transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの取引",
    "example": "Please check the outstanding transaction before the meeting.",
    "example_ja": "会議の前に未払いの取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1487,
    "word": "outstanding investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの投資",
    "example": "Please check the outstanding investment before the meeting.",
    "example_ja": "会議の前に未払いの投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1488,
    "word": "outstanding tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの税金",
    "example": "Please check the outstanding tax before the meeting.",
    "example_ja": "会議の前に未払いの税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1489,
    "word": "outstanding payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの給与支払い",
    "example": "Please check the outstanding payroll before the meeting.",
    "example_ja": "会議の前に未払いの給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1490,
    "word": "outstanding bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの請求書",
    "example": "Please check the outstanding bill before the meeting.",
    "example_ja": "会議の前に未払いの請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1491,
    "word": "outstanding charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの料金",
    "example": "Please check the outstanding charge before the meeting.",
    "example_ja": "会議の前に未払いの料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1492,
    "word": "outstanding rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの料金・率",
    "example": "Please check the outstanding rate before the meeting.",
    "example_ja": "会議の前に未払いの料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1493,
    "word": "outstanding estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "未払いの見積り",
    "example": "Please check the outstanding estimate before the meeting.",
    "example_ja": "会議の前に未払いの見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1494,
    "word": "final budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の予算",
    "example": "Please check the final budget before the meeting.",
    "example_ja": "会議の前に最終の予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1495,
    "word": "final expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の費用",
    "example": "Please check the final expense before the meeting.",
    "example_ja": "会議の前に最終の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1496,
    "word": "final revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の収益",
    "example": "Please check the final revenue before the meeting.",
    "example_ja": "会議の前に最終の収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1497,
    "word": "final profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の利益",
    "example": "Please check the final profit before the meeting.",
    "example_ja": "会議の前に最終の利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1498,
    "word": "final sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の売上",
    "example": "Please check the final sales before the meeting.",
    "example_ja": "会議の前に最終の売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1499,
    "word": "final cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の費用",
    "example": "Please check the final cost before the meeting.",
    "example_ja": "会議の前に最終の費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1500,
    "word": "final price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の価格",
    "example": "Please check the final price before the meeting.",
    "example_ja": "会議の前に最終の価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1501,
    "word": "final fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の料金",
    "example": "Please check the final fee before the meeting.",
    "example_ja": "会議の前に最終の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1502,
    "word": "final discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の割引",
    "example": "Please check the final discount before the meeting.",
    "example_ja": "会議の前に最終の割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1503,
    "word": "final refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の返金",
    "example": "Please check the final refund before the meeting.",
    "example_ja": "会議の前に最終の返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1504,
    "word": "final payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の支払い",
    "example": "Please check the final payment before the meeting.",
    "example_ja": "会議の前に最終の支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1505,
    "word": "final deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の預金・前金",
    "example": "Please check the final deposit before the meeting.",
    "example_ja": "会議の前に最終の預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1506,
    "word": "final balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の残高",
    "example": "Please check the final balance before the meeting.",
    "example_ja": "会議の前に最終の残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1507,
    "word": "final account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の口座",
    "example": "Please check the final account before the meeting.",
    "example_ja": "会議の前に最終の口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1508,
    "word": "final transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の取引",
    "example": "Please check the final transaction before the meeting.",
    "example_ja": "会議の前に最終の取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1509,
    "word": "final investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の投資",
    "example": "Please check the final investment before the meeting.",
    "example_ja": "会議の前に最終の投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1510,
    "word": "final tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の税金",
    "example": "Please check the final tax before the meeting.",
    "example_ja": "会議の前に最終の税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1511,
    "word": "final payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の給与支払い",
    "example": "Please check the final payroll before the meeting.",
    "example_ja": "会議の前に最終の給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1512,
    "word": "final bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の請求書",
    "example": "Please check the final bill before the meeting.",
    "example_ja": "会議の前に最終の請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1513,
    "word": "final charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の料金",
    "example": "Please check the final charge before the meeting.",
    "example_ja": "会議の前に最終の料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1514,
    "word": "final rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "最終の料金・率",
    "example": "Please check the final rate before the meeting.",
    "example_ja": "会議の前に最終の料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1515,
    "word": "estimated budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの予算",
    "example": "Please check the estimated budget before the meeting.",
    "example_ja": "会議の前に見積りの予算を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1516,
    "word": "estimated expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの費用",
    "example": "Please check the estimated expense before the meeting.",
    "example_ja": "会議の前に見積りの費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1517,
    "word": "estimated revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの収益",
    "example": "Please check the estimated revenue before the meeting.",
    "example_ja": "会議の前に見積りの収益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1518,
    "word": "estimated profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの利益",
    "example": "Please check the estimated profit before the meeting.",
    "example_ja": "会議の前に見積りの利益を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1519,
    "word": "estimated sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの売上",
    "example": "Please check the estimated sales before the meeting.",
    "example_ja": "会議の前に見積りの売上を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1520,
    "word": "estimated cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの費用",
    "example": "Please check the estimated cost before the meeting.",
    "example_ja": "会議の前に見積りの費用を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1521,
    "word": "estimated price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの価格",
    "example": "Please check the estimated price before the meeting.",
    "example_ja": "会議の前に見積りの価格を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1522,
    "word": "estimated fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの料金",
    "example": "Please check the estimated fee before the meeting.",
    "example_ja": "会議の前に見積りの料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1523,
    "word": "estimated discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの割引",
    "example": "Please check the estimated discount before the meeting.",
    "example_ja": "会議の前に見積りの割引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1524,
    "word": "estimated refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの返金",
    "example": "Please check the estimated refund before the meeting.",
    "example_ja": "会議の前に見積りの返金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1525,
    "word": "estimated payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの支払い",
    "example": "Please check the estimated payment before the meeting.",
    "example_ja": "会議の前に見積りの支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1526,
    "word": "estimated deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの預金・前金",
    "example": "Please check the estimated deposit before the meeting.",
    "example_ja": "会議の前に見積りの預金・前金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1527,
    "word": "estimated balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの残高",
    "example": "Please check the estimated balance before the meeting.",
    "example_ja": "会議の前に見積りの残高を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1528,
    "word": "estimated account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの口座",
    "example": "Please check the estimated account before the meeting.",
    "example_ja": "会議の前に見積りの口座を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1529,
    "word": "estimated transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの取引",
    "example": "Please check the estimated transaction before the meeting.",
    "example_ja": "会議の前に見積りの取引を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1530,
    "word": "estimated investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの投資",
    "example": "Please check the estimated investment before the meeting.",
    "example_ja": "会議の前に見積りの投資を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1531,
    "word": "estimated tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの税金",
    "example": "Please check the estimated tax before the meeting.",
    "example_ja": "会議の前に見積りの税金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1532,
    "word": "estimated payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの給与支払い",
    "example": "Please check the estimated payroll before the meeting.",
    "example_ja": "会議の前に見積りの給与支払いを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1533,
    "word": "estimated bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの請求書",
    "example": "Please check the estimated bill before the meeting.",
    "example_ja": "会議の前に見積りの請求書を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1534,
    "word": "estimated charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの料金",
    "example": "Please check the estimated charge before the meeting.",
    "example_ja": "会議の前に見積りの料金を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1535,
    "word": "estimated rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの料金・率",
    "example": "Please check the estimated rate before the meeting.",
    "example_ja": "会議の前に見積りの料金・率を確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1536,
    "word": "estimated estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りの見積り",
    "example": "Please check the estimated estimate before the meeting.",
    "example_ja": "会議の前に見積りの見積りを確認してください。",
    "source": "会計・販売：形容詞＋名詞"
  },
  {
    "id": 1537,
    "word": "main office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な事務所",
    "example": "Please check the main office before the meeting.",
    "example_ja": "会議の前に主要な事務所を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1538,
    "word": "main branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な支店",
    "example": "Please check the main branch before the meeting.",
    "example_ja": "会議の前に主要な支店を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1539,
    "word": "main facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な施設",
    "example": "Please check the main facility before the meeting.",
    "example_ja": "会議の前に主要な施設を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1540,
    "word": "main equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な設備",
    "example": "Please check the main equipment before the meeting.",
    "example_ja": "会議の前に主要な設備を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1541,
    "word": "main device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な装置",
    "example": "Please check the main device before the meeting.",
    "example_ja": "会議の前に主要な装置を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1542,
    "word": "main machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な機械",
    "example": "Please check the main machine before the meeting.",
    "example_ja": "会議の前に主要な機械を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1543,
    "word": "main printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要なプリンタ",
    "example": "Please check the main printer before the meeting.",
    "example_ja": "会議の前に主要なプリンタを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1544,
    "word": "main computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要なコンピュータ",
    "example": "Please check the main computer before the meeting.",
    "example_ja": "会議の前に主要なコンピュータを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1545,
    "word": "main laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要なノートパソコン",
    "example": "Please check the main laptop before the meeting.",
    "example_ja": "会議の前に主要なノートパソコンを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1546,
    "word": "main monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要なモニター",
    "example": "Please check the main monitor before the meeting.",
    "example_ja": "会議の前に主要なモニターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1547,
    "word": "main phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な電話",
    "example": "Please check the main phone before the meeting.",
    "example_ja": "会議の前に主要な電話を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1548,
    "word": "main desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な机",
    "example": "Please check the main desk before the meeting.",
    "example_ja": "会議の前に主要な机を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1549,
    "word": "main chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な椅子",
    "example": "Please check the main chair before the meeting.",
    "example_ja": "会議の前に主要な椅子を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1550,
    "word": "main warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な倉庫",
    "example": "Please check the main warehouse before the meeting.",
    "example_ja": "会議の前に主要な倉庫を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1551,
    "word": "main factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な工場",
    "example": "Please check the main factory before the meeting.",
    "example_ja": "会議の前に主要な工場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1552,
    "word": "main laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な研究室",
    "example": "Please check the main laboratory before the meeting.",
    "example_ja": "会議の前に主要な研究室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1553,
    "word": "main entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な入口",
    "example": "Please check the main entrance before the meeting.",
    "example_ja": "会議の前に主要な入口を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1554,
    "word": "main elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要なエレベーター",
    "example": "Please check the main elevator before the meeting.",
    "example_ja": "会議の前に主要なエレベーターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1555,
    "word": "main lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要なロビー",
    "example": "Please check the main lobby before the meeting.",
    "example_ja": "会議の前に主要なロビーを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1556,
    "word": "main parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な駐車場",
    "example": "Please check the main parking lot before the meeting.",
    "example_ja": "会議の前に主要な駐車場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1557,
    "word": "main conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な会議室",
    "example": "Please check the main conference room before the meeting.",
    "example_ja": "会議の前に主要な会議室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1558,
    "word": "main storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "主要な保管室",
    "example": "Please check the main storage room before the meeting.",
    "example_ja": "会議の前に主要な保管室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1559,
    "word": "local office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の事務所",
    "example": "Please check the local office before the meeting.",
    "example_ja": "会議の前に地元の事務所を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1560,
    "word": "local branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の支店",
    "example": "Please check the local branch before the meeting.",
    "example_ja": "会議の前に地元の支店を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1561,
    "word": "local facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の施設",
    "example": "Please check the local facility before the meeting.",
    "example_ja": "会議の前に地元の施設を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1562,
    "word": "local equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の設備",
    "example": "Please check the local equipment before the meeting.",
    "example_ja": "会議の前に地元の設備を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1563,
    "word": "local device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の装置",
    "example": "Please check the local device before the meeting.",
    "example_ja": "会議の前に地元の装置を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1564,
    "word": "local machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の機械",
    "example": "Please check the local machine before the meeting.",
    "example_ja": "会議の前に地元の機械を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1565,
    "word": "local printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元のプリンタ",
    "example": "Please check the local printer before the meeting.",
    "example_ja": "会議の前に地元のプリンタを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1566,
    "word": "local computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元のコンピュータ",
    "example": "Please check the local computer before the meeting.",
    "example_ja": "会議の前に地元のコンピュータを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1567,
    "word": "local laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元のノートパソコン",
    "example": "Please check the local laptop before the meeting.",
    "example_ja": "会議の前に地元のノートパソコンを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1568,
    "word": "local monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元のモニター",
    "example": "Please check the local monitor before the meeting.",
    "example_ja": "会議の前に地元のモニターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1569,
    "word": "local phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の電話",
    "example": "Please check the local phone before the meeting.",
    "example_ja": "会議の前に地元の電話を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1570,
    "word": "local desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の机",
    "example": "Please check the local desk before the meeting.",
    "example_ja": "会議の前に地元の机を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1571,
    "word": "local chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の椅子",
    "example": "Please check the local chair before the meeting.",
    "example_ja": "会議の前に地元の椅子を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1572,
    "word": "local warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の倉庫",
    "example": "Please check the local warehouse before the meeting.",
    "example_ja": "会議の前に地元の倉庫を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1573,
    "word": "local factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の工場",
    "example": "Please check the local factory before the meeting.",
    "example_ja": "会議の前に地元の工場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1574,
    "word": "local laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の研究室",
    "example": "Please check the local laboratory before the meeting.",
    "example_ja": "会議の前に地元の研究室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1575,
    "word": "local entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の入口",
    "example": "Please check the local entrance before the meeting.",
    "example_ja": "会議の前に地元の入口を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1576,
    "word": "local elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元のエレベーター",
    "example": "Please check the local elevator before the meeting.",
    "example_ja": "会議の前に地元のエレベーターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1577,
    "word": "local lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元のロビー",
    "example": "Please check the local lobby before the meeting.",
    "example_ja": "会議の前に地元のロビーを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1578,
    "word": "local parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の駐車場",
    "example": "Please check the local parking lot before the meeting.",
    "example_ja": "会議の前に地元の駐車場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1579,
    "word": "local conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の会議室",
    "example": "Please check the local conference room before the meeting.",
    "example_ja": "会議の前に地元の会議室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1580,
    "word": "local storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "地元の保管室",
    "example": "Please check the local storage room before the meeting.",
    "example_ja": "会議の前に地元の保管室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1581,
    "word": "modern office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な事務所",
    "example": "Please check the modern office before the meeting.",
    "example_ja": "会議の前に現代的な事務所を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1582,
    "word": "modern branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な支店",
    "example": "Please check the modern branch before the meeting.",
    "example_ja": "会議の前に現代的な支店を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1583,
    "word": "modern facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な施設",
    "example": "Please check the modern facility before the meeting.",
    "example_ja": "会議の前に現代的な施設を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1584,
    "word": "modern equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な設備",
    "example": "Please check the modern equipment before the meeting.",
    "example_ja": "会議の前に現代的な設備を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1585,
    "word": "modern device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な装置",
    "example": "Please check the modern device before the meeting.",
    "example_ja": "会議の前に現代的な装置を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1586,
    "word": "modern machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な機械",
    "example": "Please check the modern machine before the meeting.",
    "example_ja": "会議の前に現代的な機械を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1587,
    "word": "modern printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的なプリンタ",
    "example": "Please check the modern printer before the meeting.",
    "example_ja": "会議の前に現代的なプリンタを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1588,
    "word": "modern computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的なコンピュータ",
    "example": "Please check the modern computer before the meeting.",
    "example_ja": "会議の前に現代的なコンピュータを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1589,
    "word": "modern laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的なノートパソコン",
    "example": "Please check the modern laptop before the meeting.",
    "example_ja": "会議の前に現代的なノートパソコンを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1590,
    "word": "modern monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的なモニター",
    "example": "Please check the modern monitor before the meeting.",
    "example_ja": "会議の前に現代的なモニターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1591,
    "word": "modern phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な電話",
    "example": "Please check the modern phone before the meeting.",
    "example_ja": "会議の前に現代的な電話を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1592,
    "word": "modern desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な机",
    "example": "Please check the modern desk before the meeting.",
    "example_ja": "会議の前に現代的な机を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1593,
    "word": "modern chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な椅子",
    "example": "Please check the modern chair before the meeting.",
    "example_ja": "会議の前に現代的な椅子を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1594,
    "word": "modern warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な倉庫",
    "example": "Please check the modern warehouse before the meeting.",
    "example_ja": "会議の前に現代的な倉庫を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1595,
    "word": "modern factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な工場",
    "example": "Please check the modern factory before the meeting.",
    "example_ja": "会議の前に現代的な工場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1596,
    "word": "modern laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な研究室",
    "example": "Please check the modern laboratory before the meeting.",
    "example_ja": "会議の前に現代的な研究室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1597,
    "word": "modern entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な入口",
    "example": "Please check the modern entrance before the meeting.",
    "example_ja": "会議の前に現代的な入口を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1598,
    "word": "modern elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的なエレベーター",
    "example": "Please check the modern elevator before the meeting.",
    "example_ja": "会議の前に現代的なエレベーターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1599,
    "word": "modern lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的なロビー",
    "example": "Please check the modern lobby before the meeting.",
    "example_ja": "会議の前に現代的なロビーを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1600,
    "word": "modern parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な駐車場",
    "example": "Please check the modern parking lot before the meeting.",
    "example_ja": "会議の前に現代的な駐車場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1601,
    "word": "modern conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な会議室",
    "example": "Please check the modern conference room before the meeting.",
    "example_ja": "会議の前に現代的な会議室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1602,
    "word": "modern storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "現代的な保管室",
    "example": "Please check the modern storage room before the meeting.",
    "example_ja": "会議の前に現代的な保管室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1603,
    "word": "shared office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の事務所",
    "example": "Please check the shared office before the meeting.",
    "example_ja": "会議の前に共有の事務所を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1604,
    "word": "shared branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の支店",
    "example": "Please check the shared branch before the meeting.",
    "example_ja": "会議の前に共有の支店を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1605,
    "word": "shared facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の施設",
    "example": "Please check the shared facility before the meeting.",
    "example_ja": "会議の前に共有の施設を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1606,
    "word": "shared equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の設備",
    "example": "Please check the shared equipment before the meeting.",
    "example_ja": "会議の前に共有の設備を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1607,
    "word": "shared device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の装置",
    "example": "Please check the shared device before the meeting.",
    "example_ja": "会議の前に共有の装置を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1608,
    "word": "shared machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の機械",
    "example": "Please check the shared machine before the meeting.",
    "example_ja": "会議の前に共有の機械を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1609,
    "word": "shared printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有のプリンタ",
    "example": "Please check the shared printer before the meeting.",
    "example_ja": "会議の前に共有のプリンタを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1610,
    "word": "shared computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有のコンピュータ",
    "example": "Please check the shared computer before the meeting.",
    "example_ja": "会議の前に共有のコンピュータを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1611,
    "word": "shared laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有のノートパソコン",
    "example": "Please check the shared laptop before the meeting.",
    "example_ja": "会議の前に共有のノートパソコンを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1612,
    "word": "shared monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有のモニター",
    "example": "Please check the shared monitor before the meeting.",
    "example_ja": "会議の前に共有のモニターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1613,
    "word": "shared phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の電話",
    "example": "Please check the shared phone before the meeting.",
    "example_ja": "会議の前に共有の電話を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1614,
    "word": "shared desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の机",
    "example": "Please check the shared desk before the meeting.",
    "example_ja": "会議の前に共有の机を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1615,
    "word": "shared chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の椅子",
    "example": "Please check the shared chair before the meeting.",
    "example_ja": "会議の前に共有の椅子を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1616,
    "word": "shared warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の倉庫",
    "example": "Please check the shared warehouse before the meeting.",
    "example_ja": "会議の前に共有の倉庫を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1617,
    "word": "shared factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の工場",
    "example": "Please check the shared factory before the meeting.",
    "example_ja": "会議の前に共有の工場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1618,
    "word": "shared laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の研究室",
    "example": "Please check the shared laboratory before the meeting.",
    "example_ja": "会議の前に共有の研究室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1619,
    "word": "shared entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の入口",
    "example": "Please check the shared entrance before the meeting.",
    "example_ja": "会議の前に共有の入口を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1620,
    "word": "shared elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有のエレベーター",
    "example": "Please check the shared elevator before the meeting.",
    "example_ja": "会議の前に共有のエレベーターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1621,
    "word": "shared lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有のロビー",
    "example": "Please check the shared lobby before the meeting.",
    "example_ja": "会議の前に共有のロビーを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1622,
    "word": "shared parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の駐車場",
    "example": "Please check the shared parking lot before the meeting.",
    "example_ja": "会議の前に共有の駐車場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1623,
    "word": "shared conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の会議室",
    "example": "Please check the shared conference room before the meeting.",
    "example_ja": "会議の前に共有の会議室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1624,
    "word": "shared storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "共有の保管室",
    "example": "Please check the shared storage room before the meeting.",
    "example_ja": "会議の前に共有の保管室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1625,
    "word": "available office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な事務所",
    "example": "Please check the available office before the meeting.",
    "example_ja": "会議の前に利用可能な事務所を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1626,
    "word": "available branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な支店",
    "example": "Please check the available branch before the meeting.",
    "example_ja": "会議の前に利用可能な支店を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1627,
    "word": "available facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な施設",
    "example": "Please check the available facility before the meeting.",
    "example_ja": "会議の前に利用可能な施設を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1628,
    "word": "available equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な設備",
    "example": "Please check the available equipment before the meeting.",
    "example_ja": "会議の前に利用可能な設備を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1629,
    "word": "available device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な装置",
    "example": "Please check the available device before the meeting.",
    "example_ja": "会議の前に利用可能な装置を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1630,
    "word": "available machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な機械",
    "example": "Please check the available machine before the meeting.",
    "example_ja": "会議の前に利用可能な機械を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1631,
    "word": "available printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能なプリンタ",
    "example": "Please check the available printer before the meeting.",
    "example_ja": "会議の前に利用可能なプリンタを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1632,
    "word": "available computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能なコンピュータ",
    "example": "Please check the available computer before the meeting.",
    "example_ja": "会議の前に利用可能なコンピュータを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1633,
    "word": "available laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能なノートパソコン",
    "example": "Please check the available laptop before the meeting.",
    "example_ja": "会議の前に利用可能なノートパソコンを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1634,
    "word": "available monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能なモニター",
    "example": "Please check the available monitor before the meeting.",
    "example_ja": "会議の前に利用可能なモニターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1635,
    "word": "available phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な電話",
    "example": "Please check the available phone before the meeting.",
    "example_ja": "会議の前に利用可能な電話を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1636,
    "word": "available desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な机",
    "example": "Please check the available desk before the meeting.",
    "example_ja": "会議の前に利用可能な机を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1637,
    "word": "available chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な椅子",
    "example": "Please check the available chair before the meeting.",
    "example_ja": "会議の前に利用可能な椅子を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1638,
    "word": "available warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な倉庫",
    "example": "Please check the available warehouse before the meeting.",
    "example_ja": "会議の前に利用可能な倉庫を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1639,
    "word": "available factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な工場",
    "example": "Please check the available factory before the meeting.",
    "example_ja": "会議の前に利用可能な工場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1640,
    "word": "available laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な研究室",
    "example": "Please check the available laboratory before the meeting.",
    "example_ja": "会議の前に利用可能な研究室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1641,
    "word": "available entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な入口",
    "example": "Please check the available entrance before the meeting.",
    "example_ja": "会議の前に利用可能な入口を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1642,
    "word": "available elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能なエレベーター",
    "example": "Please check the available elevator before the meeting.",
    "example_ja": "会議の前に利用可能なエレベーターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1643,
    "word": "available lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能なロビー",
    "example": "Please check the available lobby before the meeting.",
    "example_ja": "会議の前に利用可能なロビーを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1644,
    "word": "available parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な駐車場",
    "example": "Please check the available parking lot before the meeting.",
    "example_ja": "会議の前に利用可能な駐車場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1645,
    "word": "available conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な会議室",
    "example": "Please check the available conference room before the meeting.",
    "example_ja": "会議の前に利用可能な会議室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1646,
    "word": "available storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利用可能な保管室",
    "example": "Please check the available storage room before the meeting.",
    "example_ja": "会議の前に利用可能な保管室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1647,
    "word": "broken office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた事務所",
    "example": "Please check the broken office before the meeting.",
    "example_ja": "会議の前に壊れた事務所を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1648,
    "word": "broken branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた支店",
    "example": "Please check the broken branch before the meeting.",
    "example_ja": "会議の前に壊れた支店を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1649,
    "word": "broken facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた施設",
    "example": "Please check the broken facility before the meeting.",
    "example_ja": "会議の前に壊れた施設を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1650,
    "word": "broken equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた設備",
    "example": "Please check the broken equipment before the meeting.",
    "example_ja": "会議の前に壊れた設備を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1651,
    "word": "broken device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた装置",
    "example": "Please check the broken device before the meeting.",
    "example_ja": "会議の前に壊れた装置を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1652,
    "word": "broken machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた機械",
    "example": "Please check the broken machine before the meeting.",
    "example_ja": "会議の前に壊れた機械を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1653,
    "word": "broken printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れたプリンタ",
    "example": "Please check the broken printer before the meeting.",
    "example_ja": "会議の前に壊れたプリンタを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1654,
    "word": "broken computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れたコンピュータ",
    "example": "Please check the broken computer before the meeting.",
    "example_ja": "会議の前に壊れたコンピュータを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1655,
    "word": "broken laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れたノートパソコン",
    "example": "Please check the broken laptop before the meeting.",
    "example_ja": "会議の前に壊れたノートパソコンを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1656,
    "word": "broken monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れたモニター",
    "example": "Please check the broken monitor before the meeting.",
    "example_ja": "会議の前に壊れたモニターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1657,
    "word": "broken phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた電話",
    "example": "Please check the broken phone before the meeting.",
    "example_ja": "会議の前に壊れた電話を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1658,
    "word": "broken desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた机",
    "example": "Please check the broken desk before the meeting.",
    "example_ja": "会議の前に壊れた机を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1659,
    "word": "broken chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた椅子",
    "example": "Please check the broken chair before the meeting.",
    "example_ja": "会議の前に壊れた椅子を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1660,
    "word": "broken warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた倉庫",
    "example": "Please check the broken warehouse before the meeting.",
    "example_ja": "会議の前に壊れた倉庫を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1661,
    "word": "broken factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた工場",
    "example": "Please check the broken factory before the meeting.",
    "example_ja": "会議の前に壊れた工場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1662,
    "word": "broken laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた研究室",
    "example": "Please check the broken laboratory before the meeting.",
    "example_ja": "会議の前に壊れた研究室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1663,
    "word": "broken entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた入口",
    "example": "Please check the broken entrance before the meeting.",
    "example_ja": "会議の前に壊れた入口を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1664,
    "word": "broken elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れたエレベーター",
    "example": "Please check the broken elevator before the meeting.",
    "example_ja": "会議の前に壊れたエレベーターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1665,
    "word": "broken lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れたロビー",
    "example": "Please check the broken lobby before the meeting.",
    "example_ja": "会議の前に壊れたロビーを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1666,
    "word": "broken parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた駐車場",
    "example": "Please check the broken parking lot before the meeting.",
    "example_ja": "会議の前に壊れた駐車場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1667,
    "word": "broken conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた会議室",
    "example": "Please check the broken conference room before the meeting.",
    "example_ja": "会議の前に壊れた会議室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1668,
    "word": "broken storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "壊れた保管室",
    "example": "Please check the broken storage room before the meeting.",
    "example_ja": "会議の前に壊れた保管室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1669,
    "word": "damaged office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した事務所",
    "example": "Please check the damaged office before the meeting.",
    "example_ja": "会議の前に損傷した事務所を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1670,
    "word": "damaged branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した支店",
    "example": "Please check the damaged branch before the meeting.",
    "example_ja": "会議の前に損傷した支店を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1671,
    "word": "damaged facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した施設",
    "example": "Please check the damaged facility before the meeting.",
    "example_ja": "会議の前に損傷した施設を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1672,
    "word": "damaged equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した設備",
    "example": "Please check the damaged equipment before the meeting.",
    "example_ja": "会議の前に損傷した設備を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1673,
    "word": "damaged device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した装置",
    "example": "Please check the damaged device before the meeting.",
    "example_ja": "会議の前に損傷した装置を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1674,
    "word": "damaged machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した機械",
    "example": "Please check the damaged machine before the meeting.",
    "example_ja": "会議の前に損傷した機械を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1675,
    "word": "damaged printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷したプリンタ",
    "example": "Please check the damaged printer before the meeting.",
    "example_ja": "会議の前に損傷したプリンタを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1676,
    "word": "damaged computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷したコンピュータ",
    "example": "Please check the damaged computer before the meeting.",
    "example_ja": "会議の前に損傷したコンピュータを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1677,
    "word": "damaged laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷したノートパソコン",
    "example": "Please check the damaged laptop before the meeting.",
    "example_ja": "会議の前に損傷したノートパソコンを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1678,
    "word": "damaged monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷したモニター",
    "example": "Please check the damaged monitor before the meeting.",
    "example_ja": "会議の前に損傷したモニターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1679,
    "word": "damaged phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した電話",
    "example": "Please check the damaged phone before the meeting.",
    "example_ja": "会議の前に損傷した電話を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1680,
    "word": "damaged desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した机",
    "example": "Please check the damaged desk before the meeting.",
    "example_ja": "会議の前に損傷した机を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1681,
    "word": "damaged chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した椅子",
    "example": "Please check the damaged chair before the meeting.",
    "example_ja": "会議の前に損傷した椅子を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1682,
    "word": "damaged warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した倉庫",
    "example": "Please check the damaged warehouse before the meeting.",
    "example_ja": "会議の前に損傷した倉庫を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1683,
    "word": "damaged factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した工場",
    "example": "Please check the damaged factory before the meeting.",
    "example_ja": "会議の前に損傷した工場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1684,
    "word": "damaged laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した研究室",
    "example": "Please check the damaged laboratory before the meeting.",
    "example_ja": "会議の前に損傷した研究室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1685,
    "word": "damaged entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した入口",
    "example": "Please check the damaged entrance before the meeting.",
    "example_ja": "会議の前に損傷した入口を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1686,
    "word": "damaged elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷したエレベーター",
    "example": "Please check the damaged elevator before the meeting.",
    "example_ja": "会議の前に損傷したエレベーターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1687,
    "word": "damaged lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷したロビー",
    "example": "Please check the damaged lobby before the meeting.",
    "example_ja": "会議の前に損傷したロビーを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1688,
    "word": "damaged parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した駐車場",
    "example": "Please check the damaged parking lot before the meeting.",
    "example_ja": "会議の前に損傷した駐車場を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1689,
    "word": "damaged conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した会議室",
    "example": "Please check the damaged conference room before the meeting.",
    "example_ja": "会議の前に損傷した会議室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1690,
    "word": "damaged storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "損傷した保管室",
    "example": "Please check the damaged storage room before the meeting.",
    "example_ja": "会議の前に損傷した保管室を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1691,
    "word": "new office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい事務所",
    "example": "Please check the new office before the meeting.",
    "example_ja": "会議の前に新しい事務所を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1692,
    "word": "new branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい支店",
    "example": "Please check the new branch before the meeting.",
    "example_ja": "会議の前に新しい支店を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1693,
    "word": "new facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい施設",
    "example": "Please check the new facility before the meeting.",
    "example_ja": "会議の前に新しい施設を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1694,
    "word": "new equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい設備",
    "example": "Please check the new equipment before the meeting.",
    "example_ja": "会議の前に新しい設備を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1695,
    "word": "new device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい装置",
    "example": "Please check the new device before the meeting.",
    "example_ja": "会議の前に新しい装置を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1696,
    "word": "new machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しい機械",
    "example": "Please check the new machine before the meeting.",
    "example_ja": "会議の前に新しい機械を確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1697,
    "word": "new printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しいプリンタ",
    "example": "Please check the new printer before the meeting.",
    "example_ja": "会議の前に新しいプリンタを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1698,
    "word": "new computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しいコンピュータ",
    "example": "Please check the new computer before the meeting.",
    "example_ja": "会議の前に新しいコンピュータを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1699,
    "word": "new laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しいノートパソコン",
    "example": "Please check the new laptop before the meeting.",
    "example_ja": "会議の前に新しいノートパソコンを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1700,
    "word": "new monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "新しいモニター",
    "example": "Please check the new monitor before the meeting.",
    "example_ja": "会議の前に新しいモニターを確認してください。",
    "source": "職場・設備：形容詞＋名詞"
  },
  {
    "id": 1701,
    "word": "review report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を確認する",
    "example": "We need to review report by the end of the day.",
    "example_ja": "今日中に報告書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1702,
    "word": "review invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を確認する",
    "example": "We need to review invoice by the end of the day.",
    "example_ja": "今日中に請求書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1703,
    "word": "review contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を確認する",
    "example": "We need to review contract by the end of the day.",
    "example_ja": "今日中に契約書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1704,
    "word": "review proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を確認する",
    "example": "We need to review proposal by the end of the day.",
    "example_ja": "今日中に提案書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1705,
    "word": "review resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を確認する",
    "example": "We need to review resume by the end of the day.",
    "example_ja": "今日中に履歴書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1706,
    "word": "review application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を確認する",
    "example": "We need to review application by the end of the day.",
    "example_ja": "今日中に申込書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1707,
    "word": "review form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を確認する",
    "example": "We need to review form by the end of the day.",
    "example_ja": "今日中に用紙を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1708,
    "word": "review manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を確認する",
    "example": "We need to review manual by the end of the day.",
    "example_ja": "今日中に説明書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1709,
    "word": "review brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを確認する",
    "example": "We need to review brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1710,
    "word": "review file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを確認する",
    "example": "We need to review file by the end of the day.",
    "example_ja": "今日中にファイルを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1711,
    "word": "review record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を確認する",
    "example": "We need to review record by the end of the day.",
    "example_ja": "今日中に記録を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1712,
    "word": "review document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を確認する",
    "example": "We need to review document by the end of the day.",
    "example_ja": "今日中に文書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1713,
    "word": "review spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを確認する",
    "example": "We need to review spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1714,
    "word": "review presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を確認する",
    "example": "We need to review presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1715,
    "word": "review agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を確認する",
    "example": "We need to review agenda by the end of the day.",
    "example_ja": "今日中に議題を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1716,
    "word": "review minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を確認する",
    "example": "We need to review minutes by the end of the day.",
    "example_ja": "今日中に議事録を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1717,
    "word": "review memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを確認する",
    "example": "We need to review memo by the end of the day.",
    "example_ja": "今日中にメモを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1718,
    "word": "review notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を確認する",
    "example": "We need to review notice by the end of the day.",
    "example_ja": "今日中に通知を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1719,
    "word": "review policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を確認する",
    "example": "We need to review policy by the end of the day.",
    "example_ja": "今日中に方針を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1720,
    "word": "review guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を確認する",
    "example": "We need to review guideline by the end of the day.",
    "example_ja": "今日中に指針を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1721,
    "word": "review request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を確認する",
    "example": "We need to review request by the end of the day.",
    "example_ja": "今日中に依頼を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1722,
    "word": "review survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を確認する",
    "example": "We need to review survey by the end of the day.",
    "example_ja": "今日中に調査票を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1723,
    "word": "review certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を確認する",
    "example": "We need to review certificate by the end of the day.",
    "example_ja": "今日中に証明書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1724,
    "word": "review receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を確認する",
    "example": "We need to review receipt by the end of the day.",
    "example_ja": "今日中に領収書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1725,
    "word": "review statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を確認する",
    "example": "We need to review statement by the end of the day.",
    "example_ja": "今日中に明細書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1726,
    "word": "review estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を確認する",
    "example": "We need to review estimate by the end of the day.",
    "example_ja": "今日中に見積書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1727,
    "word": "review quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを確認する",
    "example": "We need to review quotation by the end of the day.",
    "example_ja": "今日中に見積りを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1728,
    "word": "review schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を確認する",
    "example": "We need to review schedule by the end of the day.",
    "example_ja": "今日中に予定表を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1729,
    "word": "review plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を確認する",
    "example": "We need to review plan by the end of the day.",
    "example_ja": "今日中に計画を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1730,
    "word": "review checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を確認する",
    "example": "We need to review checklist by the end of the day.",
    "example_ja": "今日中に確認表を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1731,
    "word": "submit report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を提出する",
    "example": "We need to submit report by the end of the day.",
    "example_ja": "今日中に報告書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1732,
    "word": "submit invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を提出する",
    "example": "We need to submit invoice by the end of the day.",
    "example_ja": "今日中に請求書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1733,
    "word": "submit contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を提出する",
    "example": "We need to submit contract by the end of the day.",
    "example_ja": "今日中に契約書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1734,
    "word": "submit proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を提出する",
    "example": "We need to submit proposal by the end of the day.",
    "example_ja": "今日中に提案書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1735,
    "word": "submit resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を提出する",
    "example": "We need to submit resume by the end of the day.",
    "example_ja": "今日中に履歴書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1736,
    "word": "submit application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を提出する",
    "example": "We need to submit application by the end of the day.",
    "example_ja": "今日中に申込書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1737,
    "word": "submit form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を提出する",
    "example": "We need to submit form by the end of the day.",
    "example_ja": "今日中に用紙を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1738,
    "word": "submit manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を提出する",
    "example": "We need to submit manual by the end of the day.",
    "example_ja": "今日中に説明書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1739,
    "word": "submit brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを提出する",
    "example": "We need to submit brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1740,
    "word": "submit file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを提出する",
    "example": "We need to submit file by the end of the day.",
    "example_ja": "今日中にファイルを提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1741,
    "word": "submit record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を提出する",
    "example": "We need to submit record by the end of the day.",
    "example_ja": "今日中に記録を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1742,
    "word": "submit document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を提出する",
    "example": "We need to submit document by the end of the day.",
    "example_ja": "今日中に文書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1743,
    "word": "submit spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを提出する",
    "example": "We need to submit spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1744,
    "word": "submit presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を提出する",
    "example": "We need to submit presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1745,
    "word": "submit agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を提出する",
    "example": "We need to submit agenda by the end of the day.",
    "example_ja": "今日中に議題を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1746,
    "word": "submit minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を提出する",
    "example": "We need to submit minutes by the end of the day.",
    "example_ja": "今日中に議事録を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1747,
    "word": "submit memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを提出する",
    "example": "We need to submit memo by the end of the day.",
    "example_ja": "今日中にメモを提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1748,
    "word": "submit notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を提出する",
    "example": "We need to submit notice by the end of the day.",
    "example_ja": "今日中に通知を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1749,
    "word": "submit policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を提出する",
    "example": "We need to submit policy by the end of the day.",
    "example_ja": "今日中に方針を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1750,
    "word": "submit guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を提出する",
    "example": "We need to submit guideline by the end of the day.",
    "example_ja": "今日中に指針を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1751,
    "word": "submit request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を提出する",
    "example": "We need to submit request by the end of the day.",
    "example_ja": "今日中に依頼を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1752,
    "word": "submit survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を提出する",
    "example": "We need to submit survey by the end of the day.",
    "example_ja": "今日中に調査票を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1753,
    "word": "submit certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を提出する",
    "example": "We need to submit certificate by the end of the day.",
    "example_ja": "今日中に証明書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1754,
    "word": "submit receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を提出する",
    "example": "We need to submit receipt by the end of the day.",
    "example_ja": "今日中に領収書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1755,
    "word": "submit statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を提出する",
    "example": "We need to submit statement by the end of the day.",
    "example_ja": "今日中に明細書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1756,
    "word": "submit estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を提出する",
    "example": "We need to submit estimate by the end of the day.",
    "example_ja": "今日中に見積書を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1757,
    "word": "submit quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを提出する",
    "example": "We need to submit quotation by the end of the day.",
    "example_ja": "今日中に見積りを提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1758,
    "word": "submit schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を提出する",
    "example": "We need to submit schedule by the end of the day.",
    "example_ja": "今日中に予定表を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1759,
    "word": "submit plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を提出する",
    "example": "We need to submit plan by the end of the day.",
    "example_ja": "今日中に計画を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1760,
    "word": "submit checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を提出する",
    "example": "We need to submit checklist by the end of the day.",
    "example_ja": "今日中に確認表を提出する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1761,
    "word": "attach report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を添付する",
    "example": "We need to attach report by the end of the day.",
    "example_ja": "今日中に報告書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1762,
    "word": "attach invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を添付する",
    "example": "We need to attach invoice by the end of the day.",
    "example_ja": "今日中に請求書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1763,
    "word": "attach contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を添付する",
    "example": "We need to attach contract by the end of the day.",
    "example_ja": "今日中に契約書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1764,
    "word": "attach proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を添付する",
    "example": "We need to attach proposal by the end of the day.",
    "example_ja": "今日中に提案書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1765,
    "word": "attach resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を添付する",
    "example": "We need to attach resume by the end of the day.",
    "example_ja": "今日中に履歴書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1766,
    "word": "attach application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を添付する",
    "example": "We need to attach application by the end of the day.",
    "example_ja": "今日中に申込書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1767,
    "word": "attach form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を添付する",
    "example": "We need to attach form by the end of the day.",
    "example_ja": "今日中に用紙を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1768,
    "word": "attach manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を添付する",
    "example": "We need to attach manual by the end of the day.",
    "example_ja": "今日中に説明書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1769,
    "word": "attach brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを添付する",
    "example": "We need to attach brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1770,
    "word": "attach file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを添付する",
    "example": "We need to attach file by the end of the day.",
    "example_ja": "今日中にファイルを添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1771,
    "word": "attach record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を添付する",
    "example": "We need to attach record by the end of the day.",
    "example_ja": "今日中に記録を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1772,
    "word": "attach document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を添付する",
    "example": "We need to attach document by the end of the day.",
    "example_ja": "今日中に文書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1773,
    "word": "attach spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを添付する",
    "example": "We need to attach spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1774,
    "word": "attach presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を添付する",
    "example": "We need to attach presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1775,
    "word": "attach agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を添付する",
    "example": "We need to attach agenda by the end of the day.",
    "example_ja": "今日中に議題を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1776,
    "word": "attach minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を添付する",
    "example": "We need to attach minutes by the end of the day.",
    "example_ja": "今日中に議事録を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1777,
    "word": "attach memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを添付する",
    "example": "We need to attach memo by the end of the day.",
    "example_ja": "今日中にメモを添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1778,
    "word": "attach notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を添付する",
    "example": "We need to attach notice by the end of the day.",
    "example_ja": "今日中に通知を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1779,
    "word": "attach policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を添付する",
    "example": "We need to attach policy by the end of the day.",
    "example_ja": "今日中に方針を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1780,
    "word": "attach guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を添付する",
    "example": "We need to attach guideline by the end of the day.",
    "example_ja": "今日中に指針を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1781,
    "word": "attach request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を添付する",
    "example": "We need to attach request by the end of the day.",
    "example_ja": "今日中に依頼を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1782,
    "word": "attach survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を添付する",
    "example": "We need to attach survey by the end of the day.",
    "example_ja": "今日中に調査票を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1783,
    "word": "attach certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を添付する",
    "example": "We need to attach certificate by the end of the day.",
    "example_ja": "今日中に証明書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1784,
    "word": "attach receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を添付する",
    "example": "We need to attach receipt by the end of the day.",
    "example_ja": "今日中に領収書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1785,
    "word": "attach statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を添付する",
    "example": "We need to attach statement by the end of the day.",
    "example_ja": "今日中に明細書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1786,
    "word": "attach estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を添付する",
    "example": "We need to attach estimate by the end of the day.",
    "example_ja": "今日中に見積書を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1787,
    "word": "attach quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを添付する",
    "example": "We need to attach quotation by the end of the day.",
    "example_ja": "今日中に見積りを添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1788,
    "word": "attach schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を添付する",
    "example": "We need to attach schedule by the end of the day.",
    "example_ja": "今日中に予定表を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1789,
    "word": "attach plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を添付する",
    "example": "We need to attach plan by the end of the day.",
    "example_ja": "今日中に計画を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1790,
    "word": "attach checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を添付する",
    "example": "We need to attach checklist by the end of the day.",
    "example_ja": "今日中に確認表を添付する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1791,
    "word": "update report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を更新する",
    "example": "We need to update report by the end of the day.",
    "example_ja": "今日中に報告書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1792,
    "word": "update invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を更新する",
    "example": "We need to update invoice by the end of the day.",
    "example_ja": "今日中に請求書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1793,
    "word": "update contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を更新する",
    "example": "We need to update contract by the end of the day.",
    "example_ja": "今日中に契約書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1794,
    "word": "update proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を更新する",
    "example": "We need to update proposal by the end of the day.",
    "example_ja": "今日中に提案書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1795,
    "word": "update resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を更新する",
    "example": "We need to update resume by the end of the day.",
    "example_ja": "今日中に履歴書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1796,
    "word": "update application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を更新する",
    "example": "We need to update application by the end of the day.",
    "example_ja": "今日中に申込書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1797,
    "word": "update form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を更新する",
    "example": "We need to update form by the end of the day.",
    "example_ja": "今日中に用紙を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1798,
    "word": "update manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を更新する",
    "example": "We need to update manual by the end of the day.",
    "example_ja": "今日中に説明書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1799,
    "word": "update brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを更新する",
    "example": "We need to update brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1800,
    "word": "update file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを更新する",
    "example": "We need to update file by the end of the day.",
    "example_ja": "今日中にファイルを更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1801,
    "word": "update record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を更新する",
    "example": "We need to update record by the end of the day.",
    "example_ja": "今日中に記録を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1802,
    "word": "update document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を更新する",
    "example": "We need to update document by the end of the day.",
    "example_ja": "今日中に文書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1803,
    "word": "update spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを更新する",
    "example": "We need to update spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1804,
    "word": "update presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を更新する",
    "example": "We need to update presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1805,
    "word": "update agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を更新する",
    "example": "We need to update agenda by the end of the day.",
    "example_ja": "今日中に議題を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1806,
    "word": "update minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を更新する",
    "example": "We need to update minutes by the end of the day.",
    "example_ja": "今日中に議事録を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1807,
    "word": "update memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを更新する",
    "example": "We need to update memo by the end of the day.",
    "example_ja": "今日中にメモを更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1808,
    "word": "update notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を更新する",
    "example": "We need to update notice by the end of the day.",
    "example_ja": "今日中に通知を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1809,
    "word": "update policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を更新する",
    "example": "We need to update policy by the end of the day.",
    "example_ja": "今日中に方針を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1810,
    "word": "update guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を更新する",
    "example": "We need to update guideline by the end of the day.",
    "example_ja": "今日中に指針を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1811,
    "word": "update request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を更新する",
    "example": "We need to update request by the end of the day.",
    "example_ja": "今日中に依頼を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1812,
    "word": "update survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を更新する",
    "example": "We need to update survey by the end of the day.",
    "example_ja": "今日中に調査票を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1813,
    "word": "update certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を更新する",
    "example": "We need to update certificate by the end of the day.",
    "example_ja": "今日中に証明書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1814,
    "word": "update receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を更新する",
    "example": "We need to update receipt by the end of the day.",
    "example_ja": "今日中に領収書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1815,
    "word": "update statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を更新する",
    "example": "We need to update statement by the end of the day.",
    "example_ja": "今日中に明細書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1816,
    "word": "update estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を更新する",
    "example": "We need to update estimate by the end of the day.",
    "example_ja": "今日中に見積書を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1817,
    "word": "update quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを更新する",
    "example": "We need to update quotation by the end of the day.",
    "example_ja": "今日中に見積りを更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1818,
    "word": "update schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を更新する",
    "example": "We need to update schedule by the end of the day.",
    "example_ja": "今日中に予定表を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1819,
    "word": "update plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を更新する",
    "example": "We need to update plan by the end of the day.",
    "example_ja": "今日中に計画を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1820,
    "word": "update checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を更新する",
    "example": "We need to update checklist by the end of the day.",
    "example_ja": "今日中に確認表を更新する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1821,
    "word": "print report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を印刷する",
    "example": "We need to print report by the end of the day.",
    "example_ja": "今日中に報告書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1822,
    "word": "print invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を印刷する",
    "example": "We need to print invoice by the end of the day.",
    "example_ja": "今日中に請求書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1823,
    "word": "print contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を印刷する",
    "example": "We need to print contract by the end of the day.",
    "example_ja": "今日中に契約書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1824,
    "word": "print proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を印刷する",
    "example": "We need to print proposal by the end of the day.",
    "example_ja": "今日中に提案書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1825,
    "word": "print resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を印刷する",
    "example": "We need to print resume by the end of the day.",
    "example_ja": "今日中に履歴書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1826,
    "word": "print application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を印刷する",
    "example": "We need to print application by the end of the day.",
    "example_ja": "今日中に申込書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1827,
    "word": "print form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を印刷する",
    "example": "We need to print form by the end of the day.",
    "example_ja": "今日中に用紙を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1828,
    "word": "print manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を印刷する",
    "example": "We need to print manual by the end of the day.",
    "example_ja": "今日中に説明書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1829,
    "word": "print brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを印刷する",
    "example": "We need to print brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1830,
    "word": "print file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを印刷する",
    "example": "We need to print file by the end of the day.",
    "example_ja": "今日中にファイルを印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1831,
    "word": "print record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を印刷する",
    "example": "We need to print record by the end of the day.",
    "example_ja": "今日中に記録を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1832,
    "word": "print document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を印刷する",
    "example": "We need to print document by the end of the day.",
    "example_ja": "今日中に文書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1833,
    "word": "print spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを印刷する",
    "example": "We need to print spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1834,
    "word": "print presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を印刷する",
    "example": "We need to print presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1835,
    "word": "print agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を印刷する",
    "example": "We need to print agenda by the end of the day.",
    "example_ja": "今日中に議題を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1836,
    "word": "print minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を印刷する",
    "example": "We need to print minutes by the end of the day.",
    "example_ja": "今日中に議事録を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1837,
    "word": "print memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを印刷する",
    "example": "We need to print memo by the end of the day.",
    "example_ja": "今日中にメモを印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1838,
    "word": "print notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を印刷する",
    "example": "We need to print notice by the end of the day.",
    "example_ja": "今日中に通知を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1839,
    "word": "print policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を印刷する",
    "example": "We need to print policy by the end of the day.",
    "example_ja": "今日中に方針を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1840,
    "word": "print guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を印刷する",
    "example": "We need to print guideline by the end of the day.",
    "example_ja": "今日中に指針を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1841,
    "word": "print request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を印刷する",
    "example": "We need to print request by the end of the day.",
    "example_ja": "今日中に依頼を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1842,
    "word": "print survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を印刷する",
    "example": "We need to print survey by the end of the day.",
    "example_ja": "今日中に調査票を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1843,
    "word": "print certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を印刷する",
    "example": "We need to print certificate by the end of the day.",
    "example_ja": "今日中に証明書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1844,
    "word": "print receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を印刷する",
    "example": "We need to print receipt by the end of the day.",
    "example_ja": "今日中に領収書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1845,
    "word": "print statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を印刷する",
    "example": "We need to print statement by the end of the day.",
    "example_ja": "今日中に明細書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1846,
    "word": "print estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を印刷する",
    "example": "We need to print estimate by the end of the day.",
    "example_ja": "今日中に見積書を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1847,
    "word": "print quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを印刷する",
    "example": "We need to print quotation by the end of the day.",
    "example_ja": "今日中に見積りを印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1848,
    "word": "print schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を印刷する",
    "example": "We need to print schedule by the end of the day.",
    "example_ja": "今日中に予定表を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1849,
    "word": "print plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を印刷する",
    "example": "We need to print plan by the end of the day.",
    "example_ja": "今日中に計画を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1850,
    "word": "print checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を印刷する",
    "example": "We need to print checklist by the end of the day.",
    "example_ja": "今日中に確認表を印刷する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1851,
    "word": "sign report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を署名する",
    "example": "We need to sign report by the end of the day.",
    "example_ja": "今日中に報告書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1852,
    "word": "sign invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を署名する",
    "example": "We need to sign invoice by the end of the day.",
    "example_ja": "今日中に請求書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1853,
    "word": "sign contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を署名する",
    "example": "We need to sign contract by the end of the day.",
    "example_ja": "今日中に契約書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1854,
    "word": "sign proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を署名する",
    "example": "We need to sign proposal by the end of the day.",
    "example_ja": "今日中に提案書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1855,
    "word": "sign resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を署名する",
    "example": "We need to sign resume by the end of the day.",
    "example_ja": "今日中に履歴書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1856,
    "word": "sign application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を署名する",
    "example": "We need to sign application by the end of the day.",
    "example_ja": "今日中に申込書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1857,
    "word": "sign form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を署名する",
    "example": "We need to sign form by the end of the day.",
    "example_ja": "今日中に用紙を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1858,
    "word": "sign manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を署名する",
    "example": "We need to sign manual by the end of the day.",
    "example_ja": "今日中に説明書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1859,
    "word": "sign brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを署名する",
    "example": "We need to sign brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1860,
    "word": "sign file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを署名する",
    "example": "We need to sign file by the end of the day.",
    "example_ja": "今日中にファイルを署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1861,
    "word": "sign record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を署名する",
    "example": "We need to sign record by the end of the day.",
    "example_ja": "今日中に記録を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1862,
    "word": "sign document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を署名する",
    "example": "We need to sign document by the end of the day.",
    "example_ja": "今日中に文書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1863,
    "word": "sign spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを署名する",
    "example": "We need to sign spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1864,
    "word": "sign presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を署名する",
    "example": "We need to sign presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1865,
    "word": "sign agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を署名する",
    "example": "We need to sign agenda by the end of the day.",
    "example_ja": "今日中に議題を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1866,
    "word": "sign minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を署名する",
    "example": "We need to sign minutes by the end of the day.",
    "example_ja": "今日中に議事録を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1867,
    "word": "sign memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを署名する",
    "example": "We need to sign memo by the end of the day.",
    "example_ja": "今日中にメモを署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1868,
    "word": "sign notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を署名する",
    "example": "We need to sign notice by the end of the day.",
    "example_ja": "今日中に通知を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1869,
    "word": "sign policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を署名する",
    "example": "We need to sign policy by the end of the day.",
    "example_ja": "今日中に方針を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1870,
    "word": "sign guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を署名する",
    "example": "We need to sign guideline by the end of the day.",
    "example_ja": "今日中に指針を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1871,
    "word": "sign request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を署名する",
    "example": "We need to sign request by the end of the day.",
    "example_ja": "今日中に依頼を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1872,
    "word": "sign survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を署名する",
    "example": "We need to sign survey by the end of the day.",
    "example_ja": "今日中に調査票を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1873,
    "word": "sign certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を署名する",
    "example": "We need to sign certificate by the end of the day.",
    "example_ja": "今日中に証明書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1874,
    "word": "sign receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を署名する",
    "example": "We need to sign receipt by the end of the day.",
    "example_ja": "今日中に領収書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1875,
    "word": "sign statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を署名する",
    "example": "We need to sign statement by the end of the day.",
    "example_ja": "今日中に明細書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1876,
    "word": "sign estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を署名する",
    "example": "We need to sign estimate by the end of the day.",
    "example_ja": "今日中に見積書を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1877,
    "word": "sign quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを署名する",
    "example": "We need to sign quotation by the end of the day.",
    "example_ja": "今日中に見積りを署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1878,
    "word": "sign schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を署名する",
    "example": "We need to sign schedule by the end of the day.",
    "example_ja": "今日中に予定表を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1879,
    "word": "sign plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を署名する",
    "example": "We need to sign plan by the end of the day.",
    "example_ja": "今日中に計画を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1880,
    "word": "sign checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を署名する",
    "example": "We need to sign checklist by the end of the day.",
    "example_ja": "今日中に確認表を署名する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1881,
    "word": "approve report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を承認する",
    "example": "We need to approve report by the end of the day.",
    "example_ja": "今日中に報告書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1882,
    "word": "approve invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を承認する",
    "example": "We need to approve invoice by the end of the day.",
    "example_ja": "今日中に請求書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1883,
    "word": "approve contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を承認する",
    "example": "We need to approve contract by the end of the day.",
    "example_ja": "今日中に契約書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1884,
    "word": "approve proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を承認する",
    "example": "We need to approve proposal by the end of the day.",
    "example_ja": "今日中に提案書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1885,
    "word": "approve resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を承認する",
    "example": "We need to approve resume by the end of the day.",
    "example_ja": "今日中に履歴書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1886,
    "word": "approve application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を承認する",
    "example": "We need to approve application by the end of the day.",
    "example_ja": "今日中に申込書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1887,
    "word": "approve form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を承認する",
    "example": "We need to approve form by the end of the day.",
    "example_ja": "今日中に用紙を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1888,
    "word": "approve manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を承認する",
    "example": "We need to approve manual by the end of the day.",
    "example_ja": "今日中に説明書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1889,
    "word": "approve brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを承認する",
    "example": "We need to approve brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1890,
    "word": "approve file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを承認する",
    "example": "We need to approve file by the end of the day.",
    "example_ja": "今日中にファイルを承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1891,
    "word": "approve record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を承認する",
    "example": "We need to approve record by the end of the day.",
    "example_ja": "今日中に記録を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1892,
    "word": "approve document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を承認する",
    "example": "We need to approve document by the end of the day.",
    "example_ja": "今日中に文書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1893,
    "word": "approve spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを承認する",
    "example": "We need to approve spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1894,
    "word": "approve presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を承認する",
    "example": "We need to approve presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1895,
    "word": "approve agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を承認する",
    "example": "We need to approve agenda by the end of the day.",
    "example_ja": "今日中に議題を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1896,
    "word": "approve minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を承認する",
    "example": "We need to approve minutes by the end of the day.",
    "example_ja": "今日中に議事録を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1897,
    "word": "approve memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを承認する",
    "example": "We need to approve memo by the end of the day.",
    "example_ja": "今日中にメモを承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1898,
    "word": "approve notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を承認する",
    "example": "We need to approve notice by the end of the day.",
    "example_ja": "今日中に通知を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1899,
    "word": "approve policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を承認する",
    "example": "We need to approve policy by the end of the day.",
    "example_ja": "今日中に方針を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1900,
    "word": "approve guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を承認する",
    "example": "We need to approve guideline by the end of the day.",
    "example_ja": "今日中に指針を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1901,
    "word": "approve request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を承認する",
    "example": "We need to approve request by the end of the day.",
    "example_ja": "今日中に依頼を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1902,
    "word": "approve survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を承認する",
    "example": "We need to approve survey by the end of the day.",
    "example_ja": "今日中に調査票を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1903,
    "word": "approve certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を承認する",
    "example": "We need to approve certificate by the end of the day.",
    "example_ja": "今日中に証明書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1904,
    "word": "approve receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を承認する",
    "example": "We need to approve receipt by the end of the day.",
    "example_ja": "今日中に領収書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1905,
    "word": "approve statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を承認する",
    "example": "We need to approve statement by the end of the day.",
    "example_ja": "今日中に明細書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1906,
    "word": "approve estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を承認する",
    "example": "We need to approve estimate by the end of the day.",
    "example_ja": "今日中に見積書を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1907,
    "word": "approve quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを承認する",
    "example": "We need to approve quotation by the end of the day.",
    "example_ja": "今日中に見積りを承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1908,
    "word": "approve schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を承認する",
    "example": "We need to approve schedule by the end of the day.",
    "example_ja": "今日中に予定表を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1909,
    "word": "approve plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を承認する",
    "example": "We need to approve plan by the end of the day.",
    "example_ja": "今日中に計画を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1910,
    "word": "approve checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を承認する",
    "example": "We need to approve checklist by the end of the day.",
    "example_ja": "今日中に確認表を承認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1911,
    "word": "prepare report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を準備する",
    "example": "We need to prepare report by the end of the day.",
    "example_ja": "今日中に報告書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1912,
    "word": "prepare invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を準備する",
    "example": "We need to prepare invoice by the end of the day.",
    "example_ja": "今日中に請求書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1913,
    "word": "prepare contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を準備する",
    "example": "We need to prepare contract by the end of the day.",
    "example_ja": "今日中に契約書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1914,
    "word": "prepare proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を準備する",
    "example": "We need to prepare proposal by the end of the day.",
    "example_ja": "今日中に提案書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1915,
    "word": "prepare resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を準備する",
    "example": "We need to prepare resume by the end of the day.",
    "example_ja": "今日中に履歴書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1916,
    "word": "prepare application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を準備する",
    "example": "We need to prepare application by the end of the day.",
    "example_ja": "今日中に申込書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1917,
    "word": "prepare form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を準備する",
    "example": "We need to prepare form by the end of the day.",
    "example_ja": "今日中に用紙を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1918,
    "word": "prepare manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を準備する",
    "example": "We need to prepare manual by the end of the day.",
    "example_ja": "今日中に説明書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1919,
    "word": "prepare brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを準備する",
    "example": "We need to prepare brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1920,
    "word": "prepare file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを準備する",
    "example": "We need to prepare file by the end of the day.",
    "example_ja": "今日中にファイルを準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1921,
    "word": "prepare record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を準備する",
    "example": "We need to prepare record by the end of the day.",
    "example_ja": "今日中に記録を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1922,
    "word": "prepare document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を準備する",
    "example": "We need to prepare document by the end of the day.",
    "example_ja": "今日中に文書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1923,
    "word": "prepare spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを準備する",
    "example": "We need to prepare spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1924,
    "word": "prepare presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を準備する",
    "example": "We need to prepare presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1925,
    "word": "prepare agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を準備する",
    "example": "We need to prepare agenda by the end of the day.",
    "example_ja": "今日中に議題を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1926,
    "word": "prepare minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を準備する",
    "example": "We need to prepare minutes by the end of the day.",
    "example_ja": "今日中に議事録を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1927,
    "word": "prepare memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを準備する",
    "example": "We need to prepare memo by the end of the day.",
    "example_ja": "今日中にメモを準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1928,
    "word": "prepare notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を準備する",
    "example": "We need to prepare notice by the end of the day.",
    "example_ja": "今日中に通知を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1929,
    "word": "prepare policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を準備する",
    "example": "We need to prepare policy by the end of the day.",
    "example_ja": "今日中に方針を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1930,
    "word": "prepare guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を準備する",
    "example": "We need to prepare guideline by the end of the day.",
    "example_ja": "今日中に指針を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1931,
    "word": "prepare request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を準備する",
    "example": "We need to prepare request by the end of the day.",
    "example_ja": "今日中に依頼を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1932,
    "word": "prepare survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を準備する",
    "example": "We need to prepare survey by the end of the day.",
    "example_ja": "今日中に調査票を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1933,
    "word": "prepare certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を準備する",
    "example": "We need to prepare certificate by the end of the day.",
    "example_ja": "今日中に証明書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1934,
    "word": "prepare receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を準備する",
    "example": "We need to prepare receipt by the end of the day.",
    "example_ja": "今日中に領収書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1935,
    "word": "prepare statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を準備する",
    "example": "We need to prepare statement by the end of the day.",
    "example_ja": "今日中に明細書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1936,
    "word": "prepare estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を準備する",
    "example": "We need to prepare estimate by the end of the day.",
    "example_ja": "今日中に見積書を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1937,
    "word": "prepare quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを準備する",
    "example": "We need to prepare quotation by the end of the day.",
    "example_ja": "今日中に見積りを準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1938,
    "word": "prepare schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を準備する",
    "example": "We need to prepare schedule by the end of the day.",
    "example_ja": "今日中に予定表を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1939,
    "word": "prepare plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を準備する",
    "example": "We need to prepare plan by the end of the day.",
    "example_ja": "今日中に計画を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1940,
    "word": "prepare checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を準備する",
    "example": "We need to prepare checklist by the end of the day.",
    "example_ja": "今日中に確認表を準備する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1941,
    "word": "complete report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を記入する",
    "example": "We need to complete report by the end of the day.",
    "example_ja": "今日中に報告書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1942,
    "word": "complete invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を記入する",
    "example": "We need to complete invoice by the end of the day.",
    "example_ja": "今日中に請求書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1943,
    "word": "complete contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を記入する",
    "example": "We need to complete contract by the end of the day.",
    "example_ja": "今日中に契約書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1944,
    "word": "complete proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を記入する",
    "example": "We need to complete proposal by the end of the day.",
    "example_ja": "今日中に提案書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1945,
    "word": "complete resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を記入する",
    "example": "We need to complete resume by the end of the day.",
    "example_ja": "今日中に履歴書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1946,
    "word": "complete application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を記入する",
    "example": "We need to complete application by the end of the day.",
    "example_ja": "今日中に申込書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1947,
    "word": "complete form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を記入する",
    "example": "We need to complete form by the end of the day.",
    "example_ja": "今日中に用紙を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1948,
    "word": "complete manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を記入する",
    "example": "We need to complete manual by the end of the day.",
    "example_ja": "今日中に説明書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1949,
    "word": "complete brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを記入する",
    "example": "We need to complete brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1950,
    "word": "complete file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを記入する",
    "example": "We need to complete file by the end of the day.",
    "example_ja": "今日中にファイルを記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1951,
    "word": "complete record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を記入する",
    "example": "We need to complete record by the end of the day.",
    "example_ja": "今日中に記録を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1952,
    "word": "complete document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を記入する",
    "example": "We need to complete document by the end of the day.",
    "example_ja": "今日中に文書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1953,
    "word": "complete spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを記入する",
    "example": "We need to complete spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1954,
    "word": "complete presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を記入する",
    "example": "We need to complete presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1955,
    "word": "complete agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を記入する",
    "example": "We need to complete agenda by the end of the day.",
    "example_ja": "今日中に議題を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1956,
    "word": "complete minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を記入する",
    "example": "We need to complete minutes by the end of the day.",
    "example_ja": "今日中に議事録を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1957,
    "word": "complete memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを記入する",
    "example": "We need to complete memo by the end of the day.",
    "example_ja": "今日中にメモを記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1958,
    "word": "complete notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を記入する",
    "example": "We need to complete notice by the end of the day.",
    "example_ja": "今日中に通知を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1959,
    "word": "complete policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を記入する",
    "example": "We need to complete policy by the end of the day.",
    "example_ja": "今日中に方針を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1960,
    "word": "complete guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を記入する",
    "example": "We need to complete guideline by the end of the day.",
    "example_ja": "今日中に指針を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1961,
    "word": "complete request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を記入する",
    "example": "We need to complete request by the end of the day.",
    "example_ja": "今日中に依頼を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1962,
    "word": "complete survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を記入する",
    "example": "We need to complete survey by the end of the day.",
    "example_ja": "今日中に調査票を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1963,
    "word": "complete certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を記入する",
    "example": "We need to complete certificate by the end of the day.",
    "example_ja": "今日中に証明書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1964,
    "word": "complete receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を記入する",
    "example": "We need to complete receipt by the end of the day.",
    "example_ja": "今日中に領収書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1965,
    "word": "complete statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を記入する",
    "example": "We need to complete statement by the end of the day.",
    "example_ja": "今日中に明細書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1966,
    "word": "complete estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を記入する",
    "example": "We need to complete estimate by the end of the day.",
    "example_ja": "今日中に見積書を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1967,
    "word": "complete quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを記入する",
    "example": "We need to complete quotation by the end of the day.",
    "example_ja": "今日中に見積りを記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1968,
    "word": "complete schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を記入する",
    "example": "We need to complete schedule by the end of the day.",
    "example_ja": "今日中に予定表を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1969,
    "word": "complete plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を記入する",
    "example": "We need to complete plan by the end of the day.",
    "example_ja": "今日中に計画を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1970,
    "word": "complete checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を記入する",
    "example": "We need to complete checklist by the end of the day.",
    "example_ja": "今日中に確認表を記入する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1971,
    "word": "revise report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を修正する",
    "example": "We need to revise report by the end of the day.",
    "example_ja": "今日中に報告書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1972,
    "word": "revise invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を修正する",
    "example": "We need to revise invoice by the end of the day.",
    "example_ja": "今日中に請求書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1973,
    "word": "revise contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を修正する",
    "example": "We need to revise contract by the end of the day.",
    "example_ja": "今日中に契約書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1974,
    "word": "revise proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を修正する",
    "example": "We need to revise proposal by the end of the day.",
    "example_ja": "今日中に提案書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1975,
    "word": "revise resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を修正する",
    "example": "We need to revise resume by the end of the day.",
    "example_ja": "今日中に履歴書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1976,
    "word": "revise application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を修正する",
    "example": "We need to revise application by the end of the day.",
    "example_ja": "今日中に申込書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1977,
    "word": "revise form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を修正する",
    "example": "We need to revise form by the end of the day.",
    "example_ja": "今日中に用紙を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1978,
    "word": "revise manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を修正する",
    "example": "We need to revise manual by the end of the day.",
    "example_ja": "今日中に説明書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1979,
    "word": "revise brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを修正する",
    "example": "We need to revise brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1980,
    "word": "revise file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを修正する",
    "example": "We need to revise file by the end of the day.",
    "example_ja": "今日中にファイルを修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1981,
    "word": "revise record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を修正する",
    "example": "We need to revise record by the end of the day.",
    "example_ja": "今日中に記録を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1982,
    "word": "revise document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を修正する",
    "example": "We need to revise document by the end of the day.",
    "example_ja": "今日中に文書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1983,
    "word": "revise spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを修正する",
    "example": "We need to revise spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1984,
    "word": "revise presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を修正する",
    "example": "We need to revise presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1985,
    "word": "revise agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を修正する",
    "example": "We need to revise agenda by the end of the day.",
    "example_ja": "今日中に議題を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1986,
    "word": "revise minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を修正する",
    "example": "We need to revise minutes by the end of the day.",
    "example_ja": "今日中に議事録を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1987,
    "word": "revise memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを修正する",
    "example": "We need to revise memo by the end of the day.",
    "example_ja": "今日中にメモを修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1988,
    "word": "revise notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を修正する",
    "example": "We need to revise notice by the end of the day.",
    "example_ja": "今日中に通知を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1989,
    "word": "revise policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を修正する",
    "example": "We need to revise policy by the end of the day.",
    "example_ja": "今日中に方針を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1990,
    "word": "revise guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を修正する",
    "example": "We need to revise guideline by the end of the day.",
    "example_ja": "今日中に指針を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1991,
    "word": "revise request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を修正する",
    "example": "We need to revise request by the end of the day.",
    "example_ja": "今日中に依頼を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1992,
    "word": "revise survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を修正する",
    "example": "We need to revise survey by the end of the day.",
    "example_ja": "今日中に調査票を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1993,
    "word": "revise certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を修正する",
    "example": "We need to revise certificate by the end of the day.",
    "example_ja": "今日中に証明書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1994,
    "word": "revise receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を修正する",
    "example": "We need to revise receipt by the end of the day.",
    "example_ja": "今日中に領収書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1995,
    "word": "revise statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を修正する",
    "example": "We need to revise statement by the end of the day.",
    "example_ja": "今日中に明細書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1996,
    "word": "revise estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を修正する",
    "example": "We need to revise estimate by the end of the day.",
    "example_ja": "今日中に見積書を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1997,
    "word": "revise quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを修正する",
    "example": "We need to revise quotation by the end of the day.",
    "example_ja": "今日中に見積りを修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1998,
    "word": "revise schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を修正する",
    "example": "We need to revise schedule by the end of the day.",
    "example_ja": "今日中に予定表を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 1999,
    "word": "revise plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を修正する",
    "example": "We need to revise plan by the end of the day.",
    "example_ja": "今日中に計画を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2000,
    "word": "revise checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を修正する",
    "example": "We need to revise checklist by the end of the day.",
    "example_ja": "今日中に確認表を修正する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2001,
    "word": "file report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を保管する",
    "example": "We need to file report by the end of the day.",
    "example_ja": "今日中に報告書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2002,
    "word": "file invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を保管する",
    "example": "We need to file invoice by the end of the day.",
    "example_ja": "今日中に請求書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2003,
    "word": "file contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を保管する",
    "example": "We need to file contract by the end of the day.",
    "example_ja": "今日中に契約書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2004,
    "word": "file proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を保管する",
    "example": "We need to file proposal by the end of the day.",
    "example_ja": "今日中に提案書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2005,
    "word": "file resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を保管する",
    "example": "We need to file resume by the end of the day.",
    "example_ja": "今日中に履歴書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2006,
    "word": "file application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を保管する",
    "example": "We need to file application by the end of the day.",
    "example_ja": "今日中に申込書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2007,
    "word": "file form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を保管する",
    "example": "We need to file form by the end of the day.",
    "example_ja": "今日中に用紙を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2008,
    "word": "file manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を保管する",
    "example": "We need to file manual by the end of the day.",
    "example_ja": "今日中に説明書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2009,
    "word": "file brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを保管する",
    "example": "We need to file brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2010,
    "word": "file file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを保管する",
    "example": "We need to file file by the end of the day.",
    "example_ja": "今日中にファイルを保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2011,
    "word": "file record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を保管する",
    "example": "We need to file record by the end of the day.",
    "example_ja": "今日中に記録を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2012,
    "word": "file document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を保管する",
    "example": "We need to file document by the end of the day.",
    "example_ja": "今日中に文書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2013,
    "word": "file spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを保管する",
    "example": "We need to file spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2014,
    "word": "file presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を保管する",
    "example": "We need to file presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2015,
    "word": "file agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を保管する",
    "example": "We need to file agenda by the end of the day.",
    "example_ja": "今日中に議題を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2016,
    "word": "file minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を保管する",
    "example": "We need to file minutes by the end of the day.",
    "example_ja": "今日中に議事録を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2017,
    "word": "file memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを保管する",
    "example": "We need to file memo by the end of the day.",
    "example_ja": "今日中にメモを保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2018,
    "word": "file notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を保管する",
    "example": "We need to file notice by the end of the day.",
    "example_ja": "今日中に通知を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2019,
    "word": "file policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を保管する",
    "example": "We need to file policy by the end of the day.",
    "example_ja": "今日中に方針を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2020,
    "word": "file guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を保管する",
    "example": "We need to file guideline by the end of the day.",
    "example_ja": "今日中に指針を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2021,
    "word": "file request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を保管する",
    "example": "We need to file request by the end of the day.",
    "example_ja": "今日中に依頼を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2022,
    "word": "file survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を保管する",
    "example": "We need to file survey by the end of the day.",
    "example_ja": "今日中に調査票を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2023,
    "word": "file certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を保管する",
    "example": "We need to file certificate by the end of the day.",
    "example_ja": "今日中に証明書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2024,
    "word": "file receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を保管する",
    "example": "We need to file receipt by the end of the day.",
    "example_ja": "今日中に領収書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2025,
    "word": "file statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を保管する",
    "example": "We need to file statement by the end of the day.",
    "example_ja": "今日中に明細書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2026,
    "word": "file estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を保管する",
    "example": "We need to file estimate by the end of the day.",
    "example_ja": "今日中に見積書を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2027,
    "word": "file quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを保管する",
    "example": "We need to file quotation by the end of the day.",
    "example_ja": "今日中に見積りを保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2028,
    "word": "file schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を保管する",
    "example": "We need to file schedule by the end of the day.",
    "example_ja": "今日中に予定表を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2029,
    "word": "file plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を保管する",
    "example": "We need to file plan by the end of the day.",
    "example_ja": "今日中に計画を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2030,
    "word": "file checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を保管する",
    "example": "We need to file checklist by the end of the day.",
    "example_ja": "今日中に確認表を保管する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2031,
    "word": "distribute report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を配布する",
    "example": "We need to distribute report by the end of the day.",
    "example_ja": "今日中に報告書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2032,
    "word": "distribute invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を配布する",
    "example": "We need to distribute invoice by the end of the day.",
    "example_ja": "今日中に請求書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2033,
    "word": "distribute contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を配布する",
    "example": "We need to distribute contract by the end of the day.",
    "example_ja": "今日中に契約書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2034,
    "word": "distribute proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を配布する",
    "example": "We need to distribute proposal by the end of the day.",
    "example_ja": "今日中に提案書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2035,
    "word": "distribute resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を配布する",
    "example": "We need to distribute resume by the end of the day.",
    "example_ja": "今日中に履歴書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2036,
    "word": "distribute application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を配布する",
    "example": "We need to distribute application by the end of the day.",
    "example_ja": "今日中に申込書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2037,
    "word": "distribute form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を配布する",
    "example": "We need to distribute form by the end of the day.",
    "example_ja": "今日中に用紙を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2038,
    "word": "distribute manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を配布する",
    "example": "We need to distribute manual by the end of the day.",
    "example_ja": "今日中に説明書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2039,
    "word": "distribute brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを配布する",
    "example": "We need to distribute brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2040,
    "word": "distribute file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを配布する",
    "example": "We need to distribute file by the end of the day.",
    "example_ja": "今日中にファイルを配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2041,
    "word": "distribute record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を配布する",
    "example": "We need to distribute record by the end of the day.",
    "example_ja": "今日中に記録を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2042,
    "word": "distribute document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を配布する",
    "example": "We need to distribute document by the end of the day.",
    "example_ja": "今日中に文書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2043,
    "word": "distribute spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを配布する",
    "example": "We need to distribute spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2044,
    "word": "distribute presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を配布する",
    "example": "We need to distribute presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2045,
    "word": "distribute agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を配布する",
    "example": "We need to distribute agenda by the end of the day.",
    "example_ja": "今日中に議題を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2046,
    "word": "distribute minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を配布する",
    "example": "We need to distribute minutes by the end of the day.",
    "example_ja": "今日中に議事録を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2047,
    "word": "distribute memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを配布する",
    "example": "We need to distribute memo by the end of the day.",
    "example_ja": "今日中にメモを配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2048,
    "word": "distribute notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を配布する",
    "example": "We need to distribute notice by the end of the day.",
    "example_ja": "今日中に通知を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2049,
    "word": "distribute policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を配布する",
    "example": "We need to distribute policy by the end of the day.",
    "example_ja": "今日中に方針を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2050,
    "word": "distribute guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を配布する",
    "example": "We need to distribute guideline by the end of the day.",
    "example_ja": "今日中に指針を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2051,
    "word": "distribute request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を配布する",
    "example": "We need to distribute request by the end of the day.",
    "example_ja": "今日中に依頼を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2052,
    "word": "distribute survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を配布する",
    "example": "We need to distribute survey by the end of the day.",
    "example_ja": "今日中に調査票を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2053,
    "word": "distribute certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を配布する",
    "example": "We need to distribute certificate by the end of the day.",
    "example_ja": "今日中に証明書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2054,
    "word": "distribute receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を配布する",
    "example": "We need to distribute receipt by the end of the day.",
    "example_ja": "今日中に領収書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2055,
    "word": "distribute statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を配布する",
    "example": "We need to distribute statement by the end of the day.",
    "example_ja": "今日中に明細書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2056,
    "word": "distribute estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を配布する",
    "example": "We need to distribute estimate by the end of the day.",
    "example_ja": "今日中に見積書を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2057,
    "word": "distribute quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを配布する",
    "example": "We need to distribute quotation by the end of the day.",
    "example_ja": "今日中に見積りを配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2058,
    "word": "distribute schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を配布する",
    "example": "We need to distribute schedule by the end of the day.",
    "example_ja": "今日中に予定表を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2059,
    "word": "distribute plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を配布する",
    "example": "We need to distribute plan by the end of the day.",
    "example_ja": "今日中に計画を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2060,
    "word": "distribute checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を配布する",
    "example": "We need to distribute checklist by the end of the day.",
    "example_ja": "今日中に確認表を配布する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2061,
    "word": "issue report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を発行する",
    "example": "We need to issue report by the end of the day.",
    "example_ja": "今日中に報告書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2062,
    "word": "issue invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を発行する",
    "example": "We need to issue invoice by the end of the day.",
    "example_ja": "今日中に請求書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2063,
    "word": "issue contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を発行する",
    "example": "We need to issue contract by the end of the day.",
    "example_ja": "今日中に契約書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2064,
    "word": "issue proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を発行する",
    "example": "We need to issue proposal by the end of the day.",
    "example_ja": "今日中に提案書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2065,
    "word": "issue resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を発行する",
    "example": "We need to issue resume by the end of the day.",
    "example_ja": "今日中に履歴書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2066,
    "word": "issue application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を発行する",
    "example": "We need to issue application by the end of the day.",
    "example_ja": "今日中に申込書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2067,
    "word": "issue form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を発行する",
    "example": "We need to issue form by the end of the day.",
    "example_ja": "今日中に用紙を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2068,
    "word": "issue manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を発行する",
    "example": "We need to issue manual by the end of the day.",
    "example_ja": "今日中に説明書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2069,
    "word": "issue brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを発行する",
    "example": "We need to issue brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2070,
    "word": "issue file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを発行する",
    "example": "We need to issue file by the end of the day.",
    "example_ja": "今日中にファイルを発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2071,
    "word": "issue record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を発行する",
    "example": "We need to issue record by the end of the day.",
    "example_ja": "今日中に記録を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2072,
    "word": "issue document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を発行する",
    "example": "We need to issue document by the end of the day.",
    "example_ja": "今日中に文書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2073,
    "word": "issue spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを発行する",
    "example": "We need to issue spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2074,
    "word": "issue presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を発行する",
    "example": "We need to issue presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2075,
    "word": "issue agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を発行する",
    "example": "We need to issue agenda by the end of the day.",
    "example_ja": "今日中に議題を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2076,
    "word": "issue minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を発行する",
    "example": "We need to issue minutes by the end of the day.",
    "example_ja": "今日中に議事録を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2077,
    "word": "issue memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを発行する",
    "example": "We need to issue memo by the end of the day.",
    "example_ja": "今日中にメモを発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2078,
    "word": "issue notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を発行する",
    "example": "We need to issue notice by the end of the day.",
    "example_ja": "今日中に通知を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2079,
    "word": "issue policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を発行する",
    "example": "We need to issue policy by the end of the day.",
    "example_ja": "今日中に方針を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2080,
    "word": "issue guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を発行する",
    "example": "We need to issue guideline by the end of the day.",
    "example_ja": "今日中に指針を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2081,
    "word": "issue request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を発行する",
    "example": "We need to issue request by the end of the day.",
    "example_ja": "今日中に依頼を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2082,
    "word": "issue survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を発行する",
    "example": "We need to issue survey by the end of the day.",
    "example_ja": "今日中に調査票を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2083,
    "word": "issue certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を発行する",
    "example": "We need to issue certificate by the end of the day.",
    "example_ja": "今日中に証明書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2084,
    "word": "issue receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を発行する",
    "example": "We need to issue receipt by the end of the day.",
    "example_ja": "今日中に領収書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2085,
    "word": "issue statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を発行する",
    "example": "We need to issue statement by the end of the day.",
    "example_ja": "今日中に明細書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2086,
    "word": "issue estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を発行する",
    "example": "We need to issue estimate by the end of the day.",
    "example_ja": "今日中に見積書を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2087,
    "word": "issue quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを発行する",
    "example": "We need to issue quotation by the end of the day.",
    "example_ja": "今日中に見積りを発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2088,
    "word": "issue schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を発行する",
    "example": "We need to issue schedule by the end of the day.",
    "example_ja": "今日中に予定表を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2089,
    "word": "issue plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を発行する",
    "example": "We need to issue plan by the end of the day.",
    "example_ja": "今日中に計画を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2090,
    "word": "issue checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を発行する",
    "example": "We need to issue checklist by the end of the day.",
    "example_ja": "今日中に確認表を発行する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2091,
    "word": "check report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を確認する",
    "example": "We need to check report by the end of the day.",
    "example_ja": "今日中に報告書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2092,
    "word": "check invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を確認する",
    "example": "We need to check invoice by the end of the day.",
    "example_ja": "今日中に請求書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2093,
    "word": "check contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を確認する",
    "example": "We need to check contract by the end of the day.",
    "example_ja": "今日中に契約書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2094,
    "word": "check proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を確認する",
    "example": "We need to check proposal by the end of the day.",
    "example_ja": "今日中に提案書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2095,
    "word": "check resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を確認する",
    "example": "We need to check resume by the end of the day.",
    "example_ja": "今日中に履歴書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2096,
    "word": "check application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を確認する",
    "example": "We need to check application by the end of the day.",
    "example_ja": "今日中に申込書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2097,
    "word": "check form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を確認する",
    "example": "We need to check form by the end of the day.",
    "example_ja": "今日中に用紙を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2098,
    "word": "check manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を確認する",
    "example": "We need to check manual by the end of the day.",
    "example_ja": "今日中に説明書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2099,
    "word": "check brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを確認する",
    "example": "We need to check brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2100,
    "word": "check file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを確認する",
    "example": "We need to check file by the end of the day.",
    "example_ja": "今日中にファイルを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2101,
    "word": "check record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を確認する",
    "example": "We need to check record by the end of the day.",
    "example_ja": "今日中に記録を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2102,
    "word": "check document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を確認する",
    "example": "We need to check document by the end of the day.",
    "example_ja": "今日中に文書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2103,
    "word": "check spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを確認する",
    "example": "We need to check spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2104,
    "word": "check presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を確認する",
    "example": "We need to check presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2105,
    "word": "check agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を確認する",
    "example": "We need to check agenda by the end of the day.",
    "example_ja": "今日中に議題を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2106,
    "word": "check minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を確認する",
    "example": "We need to check minutes by the end of the day.",
    "example_ja": "今日中に議事録を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2107,
    "word": "check memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを確認する",
    "example": "We need to check memo by the end of the day.",
    "example_ja": "今日中にメモを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2108,
    "word": "check notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を確認する",
    "example": "We need to check notice by the end of the day.",
    "example_ja": "今日中に通知を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2109,
    "word": "check policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を確認する",
    "example": "We need to check policy by the end of the day.",
    "example_ja": "今日中に方針を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2110,
    "word": "check guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を確認する",
    "example": "We need to check guideline by the end of the day.",
    "example_ja": "今日中に指針を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2111,
    "word": "check request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を確認する",
    "example": "We need to check request by the end of the day.",
    "example_ja": "今日中に依頼を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2112,
    "word": "check survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を確認する",
    "example": "We need to check survey by the end of the day.",
    "example_ja": "今日中に調査票を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2113,
    "word": "check certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を確認する",
    "example": "We need to check certificate by the end of the day.",
    "example_ja": "今日中に証明書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2114,
    "word": "check receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を確認する",
    "example": "We need to check receipt by the end of the day.",
    "example_ja": "今日中に領収書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2115,
    "word": "check statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を確認する",
    "example": "We need to check statement by the end of the day.",
    "example_ja": "今日中に明細書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2116,
    "word": "check estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を確認する",
    "example": "We need to check estimate by the end of the day.",
    "example_ja": "今日中に見積書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2117,
    "word": "check quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを確認する",
    "example": "We need to check quotation by the end of the day.",
    "example_ja": "今日中に見積りを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2118,
    "word": "check schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を確認する",
    "example": "We need to check schedule by the end of the day.",
    "example_ja": "今日中に予定表を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2119,
    "word": "check plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を確認する",
    "example": "We need to check plan by the end of the day.",
    "example_ja": "今日中に計画を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2120,
    "word": "check checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を確認する",
    "example": "We need to check checklist by the end of the day.",
    "example_ja": "今日中に確認表を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2121,
    "word": "confirm report",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "報告書を確認する",
    "example": "We need to confirm report by the end of the day.",
    "example_ja": "今日中に報告書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2122,
    "word": "confirm invoice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を確認する",
    "example": "We need to confirm invoice by the end of the day.",
    "example_ja": "今日中に請求書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2123,
    "word": "confirm contract",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "契約書を確認する",
    "example": "We need to confirm contract by the end of the day.",
    "example_ja": "今日中に契約書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2124,
    "word": "confirm proposal",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "提案書を確認する",
    "example": "We need to confirm proposal by the end of the day.",
    "example_ja": "今日中に提案書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2125,
    "word": "confirm resume",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "履歴書を確認する",
    "example": "We need to confirm resume by the end of the day.",
    "example_ja": "今日中に履歴書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2126,
    "word": "confirm application",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "申込書を確認する",
    "example": "We need to confirm application by the end of the day.",
    "example_ja": "今日中に申込書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2127,
    "word": "confirm form",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "用紙を確認する",
    "example": "We need to confirm form by the end of the day.",
    "example_ja": "今日中に用紙を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2128,
    "word": "confirm manual",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明書を確認する",
    "example": "We need to confirm manual by the end of the day.",
    "example_ja": "今日中に説明書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2129,
    "word": "confirm brochure",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "パンフレットを確認する",
    "example": "We need to confirm brochure by the end of the day.",
    "example_ja": "今日中にパンフレットを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2130,
    "word": "confirm file",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ファイルを確認する",
    "example": "We need to confirm file by the end of the day.",
    "example_ja": "今日中にファイルを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2131,
    "word": "confirm record",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "記録を確認する",
    "example": "We need to confirm record by the end of the day.",
    "example_ja": "今日中に記録を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2132,
    "word": "confirm document",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "文書を確認する",
    "example": "We need to confirm document by the end of the day.",
    "example_ja": "今日中に文書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2133,
    "word": "confirm spreadsheet",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "表計算ファイルを確認する",
    "example": "We need to confirm spreadsheet by the end of the day.",
    "example_ja": "今日中に表計算ファイルを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2134,
    "word": "confirm presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プレゼン資料を確認する",
    "example": "We need to confirm presentation by the end of the day.",
    "example_ja": "今日中にプレゼン資料を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2135,
    "word": "confirm agenda",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議題を確認する",
    "example": "We need to confirm agenda by the end of the day.",
    "example_ja": "今日中に議題を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2136,
    "word": "confirm minutes",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "議事録を確認する",
    "example": "We need to confirm minutes by the end of the day.",
    "example_ja": "今日中に議事録を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2137,
    "word": "confirm memo",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "メモを確認する",
    "example": "We need to confirm memo by the end of the day.",
    "example_ja": "今日中にメモを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2138,
    "word": "confirm notice",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "通知を確認する",
    "example": "We need to confirm notice by the end of the day.",
    "example_ja": "今日中に通知を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2139,
    "word": "confirm policy",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "方針を確認する",
    "example": "We need to confirm policy by the end of the day.",
    "example_ja": "今日中に方針を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2140,
    "word": "confirm guideline",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "指針を確認する",
    "example": "We need to confirm guideline by the end of the day.",
    "example_ja": "今日中に指針を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2141,
    "word": "confirm request",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "依頼を確認する",
    "example": "We need to confirm request by the end of the day.",
    "example_ja": "今日中に依頼を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2142,
    "word": "confirm survey",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "調査票を確認する",
    "example": "We need to confirm survey by the end of the day.",
    "example_ja": "今日中に調査票を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2143,
    "word": "confirm certificate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "証明書を確認する",
    "example": "We need to confirm certificate by the end of the day.",
    "example_ja": "今日中に証明書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2144,
    "word": "confirm receipt",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "領収書を確認する",
    "example": "We need to confirm receipt by the end of the day.",
    "example_ja": "今日中に領収書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2145,
    "word": "confirm statement",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "明細書を確認する",
    "example": "We need to confirm statement by the end of the day.",
    "example_ja": "今日中に明細書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2146,
    "word": "confirm estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積書を確認する",
    "example": "We need to confirm estimate by the end of the day.",
    "example_ja": "今日中に見積書を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2147,
    "word": "confirm quotation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを確認する",
    "example": "We need to confirm quotation by the end of the day.",
    "example_ja": "今日中に見積りを確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2148,
    "word": "confirm schedule",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予定表を確認する",
    "example": "We need to confirm schedule by the end of the day.",
    "example_ja": "今日中に予定表を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2149,
    "word": "confirm plan",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "計画を確認する",
    "example": "We need to confirm plan by the end of the day.",
    "example_ja": "今日中に計画を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2150,
    "word": "confirm checklist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "確認表を確認する",
    "example": "We need to confirm checklist by the end of the day.",
    "example_ja": "今日中に確認表を確認する必要がある。",
    "source": "文書：動詞＋名詞"
  },
  {
    "id": 2151,
    "word": "attend meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を出席する",
    "example": "We need to attend meeting by the end of the day.",
    "example_ja": "今日中に会議を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2152,
    "word": "attend appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を出席する",
    "example": "We need to attend appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2153,
    "word": "attend conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を出席する",
    "example": "We need to attend conference by the end of the day.",
    "example_ja": "今日中に会議を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2154,
    "word": "attend seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを出席する",
    "example": "We need to attend seminar by the end of the day.",
    "example_ja": "今日中にセミナーを出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2155,
    "word": "attend workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を出席する",
    "example": "We need to attend workshop by the end of the day.",
    "example_ja": "今日中に研修会を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2156,
    "word": "attend interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を出席する",
    "example": "We need to attend interview by the end of the day.",
    "example_ja": "今日中に面接を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2157,
    "word": "attend training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を出席する",
    "example": "We need to attend training session by the end of the day.",
    "example_ja": "今日中に研修を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2158,
    "word": "attend briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を出席する",
    "example": "We need to attend briefing by the end of the day.",
    "example_ja": "今日中に説明会を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2159,
    "word": "attend presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を出席する",
    "example": "We need to attend presentation by the end of the day.",
    "example_ja": "今日中に発表を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2160,
    "word": "attend discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを出席する",
    "example": "We need to attend discussion by the end of the day.",
    "example_ja": "今日中に話し合いを出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2161,
    "word": "attend negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を出席する",
    "example": "We need to attend negotiation by the end of the day.",
    "example_ja": "今日中に交渉を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2162,
    "word": "attend consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を出席する",
    "example": "We need to attend consultation by the end of the day.",
    "example_ja": "今日中に相談を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2163,
    "word": "attend event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを出席する",
    "example": "We need to attend event by the end of the day.",
    "example_ja": "今日中にイベントを出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2164,
    "word": "attend webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを出席する",
    "example": "We need to attend webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2165,
    "word": "attend orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を出席する",
    "example": "We need to attend orientation by the end of the day.",
    "example_ja": "今日中に説明会を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2166,
    "word": "attend gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを出席する",
    "example": "We need to attend gathering by the end of the day.",
    "example_ja": "今日中に集まりを出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2167,
    "word": "attend session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を出席する",
    "example": "We need to attend session by the end of the day.",
    "example_ja": "今日中に会合を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2168,
    "word": "attend visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を出席する",
    "example": "We need to attend visit by the end of the day.",
    "example_ja": "今日中に訪問を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2169,
    "word": "attend call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を出席する",
    "example": "We need to attend call by the end of the day.",
    "example_ja": "今日中に電話を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2170,
    "word": "attend tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を出席する",
    "example": "We need to attend tour by the end of the day.",
    "example_ja": "今日中に見学を出席する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2171,
    "word": "schedule meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を予定を組む",
    "example": "We need to schedule meeting by the end of the day.",
    "example_ja": "今日中に会議を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2172,
    "word": "schedule appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を予定を組む",
    "example": "We need to schedule appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2173,
    "word": "schedule conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を予定を組む",
    "example": "We need to schedule conference by the end of the day.",
    "example_ja": "今日中に会議を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2174,
    "word": "schedule seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを予定を組む",
    "example": "We need to schedule seminar by the end of the day.",
    "example_ja": "今日中にセミナーを予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2175,
    "word": "schedule workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を予定を組む",
    "example": "We need to schedule workshop by the end of the day.",
    "example_ja": "今日中に研修会を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2176,
    "word": "schedule interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を予定を組む",
    "example": "We need to schedule interview by the end of the day.",
    "example_ja": "今日中に面接を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2177,
    "word": "schedule training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を予定を組む",
    "example": "We need to schedule training session by the end of the day.",
    "example_ja": "今日中に研修を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2178,
    "word": "schedule briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を予定を組む",
    "example": "We need to schedule briefing by the end of the day.",
    "example_ja": "今日中に説明会を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2179,
    "word": "schedule presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を予定を組む",
    "example": "We need to schedule presentation by the end of the day.",
    "example_ja": "今日中に発表を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2180,
    "word": "schedule discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを予定を組む",
    "example": "We need to schedule discussion by the end of the day.",
    "example_ja": "今日中に話し合いを予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2181,
    "word": "schedule negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を予定を組む",
    "example": "We need to schedule negotiation by the end of the day.",
    "example_ja": "今日中に交渉を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2182,
    "word": "schedule consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を予定を組む",
    "example": "We need to schedule consultation by the end of the day.",
    "example_ja": "今日中に相談を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2183,
    "word": "schedule event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを予定を組む",
    "example": "We need to schedule event by the end of the day.",
    "example_ja": "今日中にイベントを予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2184,
    "word": "schedule webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを予定を組む",
    "example": "We need to schedule webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2185,
    "word": "schedule orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を予定を組む",
    "example": "We need to schedule orientation by the end of the day.",
    "example_ja": "今日中に説明会を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2186,
    "word": "schedule gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを予定を組む",
    "example": "We need to schedule gathering by the end of the day.",
    "example_ja": "今日中に集まりを予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2187,
    "word": "schedule session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を予定を組む",
    "example": "We need to schedule session by the end of the day.",
    "example_ja": "今日中に会合を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2188,
    "word": "schedule visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を予定を組む",
    "example": "We need to schedule visit by the end of the day.",
    "example_ja": "今日中に訪問を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2189,
    "word": "schedule call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を予定を組む",
    "example": "We need to schedule call by the end of the day.",
    "example_ja": "今日中に電話を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2190,
    "word": "schedule tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を予定を組む",
    "example": "We need to schedule tour by the end of the day.",
    "example_ja": "今日中に見学を予定を組む必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2191,
    "word": "arrange meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を手配する",
    "example": "We need to arrange meeting by the end of the day.",
    "example_ja": "今日中に会議を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2192,
    "word": "arrange appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を手配する",
    "example": "We need to arrange appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2193,
    "word": "arrange conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を手配する",
    "example": "We need to arrange conference by the end of the day.",
    "example_ja": "今日中に会議を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2194,
    "word": "arrange seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを手配する",
    "example": "We need to arrange seminar by the end of the day.",
    "example_ja": "今日中にセミナーを手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2195,
    "word": "arrange workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を手配する",
    "example": "We need to arrange workshop by the end of the day.",
    "example_ja": "今日中に研修会を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2196,
    "word": "arrange interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を手配する",
    "example": "We need to arrange interview by the end of the day.",
    "example_ja": "今日中に面接を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2197,
    "word": "arrange training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を手配する",
    "example": "We need to arrange training session by the end of the day.",
    "example_ja": "今日中に研修を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2198,
    "word": "arrange briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を手配する",
    "example": "We need to arrange briefing by the end of the day.",
    "example_ja": "今日中に説明会を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2199,
    "word": "arrange presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を手配する",
    "example": "We need to arrange presentation by the end of the day.",
    "example_ja": "今日中に発表を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2200,
    "word": "arrange discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを手配する",
    "example": "We need to arrange discussion by the end of the day.",
    "example_ja": "今日中に話し合いを手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2201,
    "word": "arrange negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を手配する",
    "example": "We need to arrange negotiation by the end of the day.",
    "example_ja": "今日中に交渉を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2202,
    "word": "arrange consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を手配する",
    "example": "We need to arrange consultation by the end of the day.",
    "example_ja": "今日中に相談を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2203,
    "word": "arrange event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを手配する",
    "example": "We need to arrange event by the end of the day.",
    "example_ja": "今日中にイベントを手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2204,
    "word": "arrange webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを手配する",
    "example": "We need to arrange webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2205,
    "word": "arrange orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を手配する",
    "example": "We need to arrange orientation by the end of the day.",
    "example_ja": "今日中に説明会を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2206,
    "word": "arrange gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを手配する",
    "example": "We need to arrange gathering by the end of the day.",
    "example_ja": "今日中に集まりを手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2207,
    "word": "arrange session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を手配する",
    "example": "We need to arrange session by the end of the day.",
    "example_ja": "今日中に会合を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2208,
    "word": "arrange visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を手配する",
    "example": "We need to arrange visit by the end of the day.",
    "example_ja": "今日中に訪問を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2209,
    "word": "arrange call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を手配する",
    "example": "We need to arrange call by the end of the day.",
    "example_ja": "今日中に電話を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2210,
    "word": "arrange tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を手配する",
    "example": "We need to arrange tour by the end of the day.",
    "example_ja": "今日中に見学を手配する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2211,
    "word": "postpone meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を延期する",
    "example": "We need to postpone meeting by the end of the day.",
    "example_ja": "今日中に会議を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2212,
    "word": "postpone appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を延期する",
    "example": "We need to postpone appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2213,
    "word": "postpone conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を延期する",
    "example": "We need to postpone conference by the end of the day.",
    "example_ja": "今日中に会議を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2214,
    "word": "postpone seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを延期する",
    "example": "We need to postpone seminar by the end of the day.",
    "example_ja": "今日中にセミナーを延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2215,
    "word": "postpone workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を延期する",
    "example": "We need to postpone workshop by the end of the day.",
    "example_ja": "今日中に研修会を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2216,
    "word": "postpone interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を延期する",
    "example": "We need to postpone interview by the end of the day.",
    "example_ja": "今日中に面接を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2217,
    "word": "postpone training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を延期する",
    "example": "We need to postpone training session by the end of the day.",
    "example_ja": "今日中に研修を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2218,
    "word": "postpone briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を延期する",
    "example": "We need to postpone briefing by the end of the day.",
    "example_ja": "今日中に説明会を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2219,
    "word": "postpone presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を延期する",
    "example": "We need to postpone presentation by the end of the day.",
    "example_ja": "今日中に発表を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2220,
    "word": "postpone discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを延期する",
    "example": "We need to postpone discussion by the end of the day.",
    "example_ja": "今日中に話し合いを延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2221,
    "word": "postpone negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を延期する",
    "example": "We need to postpone negotiation by the end of the day.",
    "example_ja": "今日中に交渉を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2222,
    "word": "postpone consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を延期する",
    "example": "We need to postpone consultation by the end of the day.",
    "example_ja": "今日中に相談を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2223,
    "word": "postpone event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを延期する",
    "example": "We need to postpone event by the end of the day.",
    "example_ja": "今日中にイベントを延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2224,
    "word": "postpone webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを延期する",
    "example": "We need to postpone webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2225,
    "word": "postpone orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を延期する",
    "example": "We need to postpone orientation by the end of the day.",
    "example_ja": "今日中に説明会を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2226,
    "word": "postpone gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを延期する",
    "example": "We need to postpone gathering by the end of the day.",
    "example_ja": "今日中に集まりを延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2227,
    "word": "postpone session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を延期する",
    "example": "We need to postpone session by the end of the day.",
    "example_ja": "今日中に会合を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2228,
    "word": "postpone visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を延期する",
    "example": "We need to postpone visit by the end of the day.",
    "example_ja": "今日中に訪問を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2229,
    "word": "postpone call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を延期する",
    "example": "We need to postpone call by the end of the day.",
    "example_ja": "今日中に電話を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2230,
    "word": "postpone tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を延期する",
    "example": "We need to postpone tour by the end of the day.",
    "example_ja": "今日中に見学を延期する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2231,
    "word": "cancel meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を中止する",
    "example": "We need to cancel meeting by the end of the day.",
    "example_ja": "今日中に会議を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2232,
    "word": "cancel appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を中止する",
    "example": "We need to cancel appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2233,
    "word": "cancel conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を中止する",
    "example": "We need to cancel conference by the end of the day.",
    "example_ja": "今日中に会議を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2234,
    "word": "cancel seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを中止する",
    "example": "We need to cancel seminar by the end of the day.",
    "example_ja": "今日中にセミナーを中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2235,
    "word": "cancel workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を中止する",
    "example": "We need to cancel workshop by the end of the day.",
    "example_ja": "今日中に研修会を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2236,
    "word": "cancel interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を中止する",
    "example": "We need to cancel interview by the end of the day.",
    "example_ja": "今日中に面接を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2237,
    "word": "cancel training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を中止する",
    "example": "We need to cancel training session by the end of the day.",
    "example_ja": "今日中に研修を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2238,
    "word": "cancel briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を中止する",
    "example": "We need to cancel briefing by the end of the day.",
    "example_ja": "今日中に説明会を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2239,
    "word": "cancel presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を中止する",
    "example": "We need to cancel presentation by the end of the day.",
    "example_ja": "今日中に発表を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2240,
    "word": "cancel discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを中止する",
    "example": "We need to cancel discussion by the end of the day.",
    "example_ja": "今日中に話し合いを中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2241,
    "word": "cancel negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を中止する",
    "example": "We need to cancel negotiation by the end of the day.",
    "example_ja": "今日中に交渉を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2242,
    "word": "cancel consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を中止する",
    "example": "We need to cancel consultation by the end of the day.",
    "example_ja": "今日中に相談を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2243,
    "word": "cancel event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを中止する",
    "example": "We need to cancel event by the end of the day.",
    "example_ja": "今日中にイベントを中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2244,
    "word": "cancel webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを中止する",
    "example": "We need to cancel webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2245,
    "word": "cancel orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を中止する",
    "example": "We need to cancel orientation by the end of the day.",
    "example_ja": "今日中に説明会を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2246,
    "word": "cancel gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを中止する",
    "example": "We need to cancel gathering by the end of the day.",
    "example_ja": "今日中に集まりを中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2247,
    "word": "cancel session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を中止する",
    "example": "We need to cancel session by the end of the day.",
    "example_ja": "今日中に会合を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2248,
    "word": "cancel visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を中止する",
    "example": "We need to cancel visit by the end of the day.",
    "example_ja": "今日中に訪問を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2249,
    "word": "cancel call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を中止する",
    "example": "We need to cancel call by the end of the day.",
    "example_ja": "今日中に電話を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2250,
    "word": "cancel tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を中止する",
    "example": "We need to cancel tour by the end of the day.",
    "example_ja": "今日中に見学を中止する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2251,
    "word": "confirm meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を確認する",
    "example": "We need to confirm meeting by the end of the day.",
    "example_ja": "今日中に会議を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2252,
    "word": "confirm appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を確認する",
    "example": "We need to confirm appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2253,
    "word": "confirm conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を確認する",
    "example": "We need to confirm conference by the end of the day.",
    "example_ja": "今日中に会議を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2254,
    "word": "confirm seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを確認する",
    "example": "We need to confirm seminar by the end of the day.",
    "example_ja": "今日中にセミナーを確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2255,
    "word": "confirm workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を確認する",
    "example": "We need to confirm workshop by the end of the day.",
    "example_ja": "今日中に研修会を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2256,
    "word": "confirm interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を確認する",
    "example": "We need to confirm interview by the end of the day.",
    "example_ja": "今日中に面接を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2257,
    "word": "confirm training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を確認する",
    "example": "We need to confirm training session by the end of the day.",
    "example_ja": "今日中に研修を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2258,
    "word": "confirm briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を確認する",
    "example": "We need to confirm briefing by the end of the day.",
    "example_ja": "今日中に説明会を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2259,
    "word": "confirm discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを確認する",
    "example": "We need to confirm discussion by the end of the day.",
    "example_ja": "今日中に話し合いを確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2260,
    "word": "confirm negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を確認する",
    "example": "We need to confirm negotiation by the end of the day.",
    "example_ja": "今日中に交渉を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2261,
    "word": "confirm consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を確認する",
    "example": "We need to confirm consultation by the end of the day.",
    "example_ja": "今日中に相談を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2262,
    "word": "confirm event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを確認する",
    "example": "We need to confirm event by the end of the day.",
    "example_ja": "今日中にイベントを確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2263,
    "word": "confirm webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを確認する",
    "example": "We need to confirm webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2264,
    "word": "confirm orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を確認する",
    "example": "We need to confirm orientation by the end of the day.",
    "example_ja": "今日中に説明会を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2265,
    "word": "confirm gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを確認する",
    "example": "We need to confirm gathering by the end of the day.",
    "example_ja": "今日中に集まりを確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2266,
    "word": "confirm session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を確認する",
    "example": "We need to confirm session by the end of the day.",
    "example_ja": "今日中に会合を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2267,
    "word": "confirm visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を確認する",
    "example": "We need to confirm visit by the end of the day.",
    "example_ja": "今日中に訪問を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2268,
    "word": "confirm call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を確認する",
    "example": "We need to confirm call by the end of the day.",
    "example_ja": "今日中に電話を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2269,
    "word": "confirm tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を確認する",
    "example": "We need to confirm tour by the end of the day.",
    "example_ja": "今日中に見学を確認する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2270,
    "word": "join meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を参加する",
    "example": "We need to join meeting by the end of the day.",
    "example_ja": "今日中に会議を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2271,
    "word": "join appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を参加する",
    "example": "We need to join appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2272,
    "word": "join conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を参加する",
    "example": "We need to join conference by the end of the day.",
    "example_ja": "今日中に会議を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2273,
    "word": "join seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを参加する",
    "example": "We need to join seminar by the end of the day.",
    "example_ja": "今日中にセミナーを参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2274,
    "word": "join workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を参加する",
    "example": "We need to join workshop by the end of the day.",
    "example_ja": "今日中に研修会を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2275,
    "word": "join interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を参加する",
    "example": "We need to join interview by the end of the day.",
    "example_ja": "今日中に面接を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2276,
    "word": "join training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を参加する",
    "example": "We need to join training session by the end of the day.",
    "example_ja": "今日中に研修を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2277,
    "word": "join briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を参加する",
    "example": "We need to join briefing by the end of the day.",
    "example_ja": "今日中に説明会を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2278,
    "word": "join presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を参加する",
    "example": "We need to join presentation by the end of the day.",
    "example_ja": "今日中に発表を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2279,
    "word": "join discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを参加する",
    "example": "We need to join discussion by the end of the day.",
    "example_ja": "今日中に話し合いを参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2280,
    "word": "join negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を参加する",
    "example": "We need to join negotiation by the end of the day.",
    "example_ja": "今日中に交渉を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2281,
    "word": "join consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を参加する",
    "example": "We need to join consultation by the end of the day.",
    "example_ja": "今日中に相談を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2282,
    "word": "join event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを参加する",
    "example": "We need to join event by the end of the day.",
    "example_ja": "今日中にイベントを参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2283,
    "word": "join webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを参加する",
    "example": "We need to join webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2284,
    "word": "join orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を参加する",
    "example": "We need to join orientation by the end of the day.",
    "example_ja": "今日中に説明会を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2285,
    "word": "join gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを参加する",
    "example": "We need to join gathering by the end of the day.",
    "example_ja": "今日中に集まりを参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2286,
    "word": "join session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を参加する",
    "example": "We need to join session by the end of the day.",
    "example_ja": "今日中に会合を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2287,
    "word": "join visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を参加する",
    "example": "We need to join visit by the end of the day.",
    "example_ja": "今日中に訪問を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2288,
    "word": "join call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を参加する",
    "example": "We need to join call by the end of the day.",
    "example_ja": "今日中に電話を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2289,
    "word": "join tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を参加する",
    "example": "We need to join tour by the end of the day.",
    "example_ja": "今日中に見学を参加する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2290,
    "word": "lead meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を主導する",
    "example": "We need to lead meeting by the end of the day.",
    "example_ja": "今日中に会議を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2291,
    "word": "lead appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を主導する",
    "example": "We need to lead appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2292,
    "word": "lead conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を主導する",
    "example": "We need to lead conference by the end of the day.",
    "example_ja": "今日中に会議を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2293,
    "word": "lead seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを主導する",
    "example": "We need to lead seminar by the end of the day.",
    "example_ja": "今日中にセミナーを主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2294,
    "word": "lead workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を主導する",
    "example": "We need to lead workshop by the end of the day.",
    "example_ja": "今日中に研修会を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2295,
    "word": "lead interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を主導する",
    "example": "We need to lead interview by the end of the day.",
    "example_ja": "今日中に面接を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2296,
    "word": "lead training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を主導する",
    "example": "We need to lead training session by the end of the day.",
    "example_ja": "今日中に研修を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2297,
    "word": "lead briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を主導する",
    "example": "We need to lead briefing by the end of the day.",
    "example_ja": "今日中に説明会を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2298,
    "word": "lead presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を主導する",
    "example": "We need to lead presentation by the end of the day.",
    "example_ja": "今日中に発表を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2299,
    "word": "lead discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを主導する",
    "example": "We need to lead discussion by the end of the day.",
    "example_ja": "今日中に話し合いを主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2300,
    "word": "lead negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を主導する",
    "example": "We need to lead negotiation by the end of the day.",
    "example_ja": "今日中に交渉を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2301,
    "word": "lead consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を主導する",
    "example": "We need to lead consultation by the end of the day.",
    "example_ja": "今日中に相談を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2302,
    "word": "lead event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを主導する",
    "example": "We need to lead event by the end of the day.",
    "example_ja": "今日中にイベントを主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2303,
    "word": "lead webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを主導する",
    "example": "We need to lead webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2304,
    "word": "lead orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を主導する",
    "example": "We need to lead orientation by the end of the day.",
    "example_ja": "今日中に説明会を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2305,
    "word": "lead gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを主導する",
    "example": "We need to lead gathering by the end of the day.",
    "example_ja": "今日中に集まりを主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2306,
    "word": "lead session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を主導する",
    "example": "We need to lead session by the end of the day.",
    "example_ja": "今日中に会合を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2307,
    "word": "lead visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を主導する",
    "example": "We need to lead visit by the end of the day.",
    "example_ja": "今日中に訪問を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2308,
    "word": "lead call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を主導する",
    "example": "We need to lead call by the end of the day.",
    "example_ja": "今日中に電話を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2309,
    "word": "lead tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を主導する",
    "example": "We need to lead tour by the end of the day.",
    "example_ja": "今日中に見学を主導する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2310,
    "word": "host meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を主催する",
    "example": "We need to host meeting by the end of the day.",
    "example_ja": "今日中に会議を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2311,
    "word": "host appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を主催する",
    "example": "We need to host appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2312,
    "word": "host conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を主催する",
    "example": "We need to host conference by the end of the day.",
    "example_ja": "今日中に会議を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2313,
    "word": "host seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを主催する",
    "example": "We need to host seminar by the end of the day.",
    "example_ja": "今日中にセミナーを主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2314,
    "word": "host workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を主催する",
    "example": "We need to host workshop by the end of the day.",
    "example_ja": "今日中に研修会を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2315,
    "word": "host interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を主催する",
    "example": "We need to host interview by the end of the day.",
    "example_ja": "今日中に面接を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2316,
    "word": "host training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を主催する",
    "example": "We need to host training session by the end of the day.",
    "example_ja": "今日中に研修を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2317,
    "word": "host briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を主催する",
    "example": "We need to host briefing by the end of the day.",
    "example_ja": "今日中に説明会を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2318,
    "word": "host presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を主催する",
    "example": "We need to host presentation by the end of the day.",
    "example_ja": "今日中に発表を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2319,
    "word": "host discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを主催する",
    "example": "We need to host discussion by the end of the day.",
    "example_ja": "今日中に話し合いを主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2320,
    "word": "host negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を主催する",
    "example": "We need to host negotiation by the end of the day.",
    "example_ja": "今日中に交渉を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2321,
    "word": "host consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を主催する",
    "example": "We need to host consultation by the end of the day.",
    "example_ja": "今日中に相談を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2322,
    "word": "host event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを主催する",
    "example": "We need to host event by the end of the day.",
    "example_ja": "今日中にイベントを主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2323,
    "word": "host webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを主催する",
    "example": "We need to host webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2324,
    "word": "host orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を主催する",
    "example": "We need to host orientation by the end of the day.",
    "example_ja": "今日中に説明会を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2325,
    "word": "host gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを主催する",
    "example": "We need to host gathering by the end of the day.",
    "example_ja": "今日中に集まりを主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2326,
    "word": "host session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を主催する",
    "example": "We need to host session by the end of the day.",
    "example_ja": "今日中に会合を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2327,
    "word": "host visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を主催する",
    "example": "We need to host visit by the end of the day.",
    "example_ja": "今日中に訪問を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2328,
    "word": "host call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を主催する",
    "example": "We need to host call by the end of the day.",
    "example_ja": "今日中に電話を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2329,
    "word": "host tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を主催する",
    "example": "We need to host tour by the end of the day.",
    "example_ja": "今日中に見学を主催する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2330,
    "word": "organize meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を企画する",
    "example": "We need to organize meeting by the end of the day.",
    "example_ja": "今日中に会議を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2331,
    "word": "organize appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を企画する",
    "example": "We need to organize appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2332,
    "word": "organize conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を企画する",
    "example": "We need to organize conference by the end of the day.",
    "example_ja": "今日中に会議を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2333,
    "word": "organize seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを企画する",
    "example": "We need to organize seminar by the end of the day.",
    "example_ja": "今日中にセミナーを企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2334,
    "word": "organize workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を企画する",
    "example": "We need to organize workshop by the end of the day.",
    "example_ja": "今日中に研修会を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2335,
    "word": "organize interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を企画する",
    "example": "We need to organize interview by the end of the day.",
    "example_ja": "今日中に面接を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2336,
    "word": "organize training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を企画する",
    "example": "We need to organize training session by the end of the day.",
    "example_ja": "今日中に研修を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2337,
    "word": "organize briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を企画する",
    "example": "We need to organize briefing by the end of the day.",
    "example_ja": "今日中に説明会を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2338,
    "word": "organize presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を企画する",
    "example": "We need to organize presentation by the end of the day.",
    "example_ja": "今日中に発表を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2339,
    "word": "organize discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを企画する",
    "example": "We need to organize discussion by the end of the day.",
    "example_ja": "今日中に話し合いを企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2340,
    "word": "organize negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を企画する",
    "example": "We need to organize negotiation by the end of the day.",
    "example_ja": "今日中に交渉を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2341,
    "word": "organize consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を企画する",
    "example": "We need to organize consultation by the end of the day.",
    "example_ja": "今日中に相談を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2342,
    "word": "organize event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを企画する",
    "example": "We need to organize event by the end of the day.",
    "example_ja": "今日中にイベントを企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2343,
    "word": "organize webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを企画する",
    "example": "We need to organize webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2344,
    "word": "organize orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を企画する",
    "example": "We need to organize orientation by the end of the day.",
    "example_ja": "今日中に説明会を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2345,
    "word": "organize gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを企画する",
    "example": "We need to organize gathering by the end of the day.",
    "example_ja": "今日中に集まりを企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2346,
    "word": "organize session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を企画する",
    "example": "We need to organize session by the end of the day.",
    "example_ja": "今日中に会合を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2347,
    "word": "organize visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を企画する",
    "example": "We need to organize visit by the end of the day.",
    "example_ja": "今日中に訪問を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2348,
    "word": "organize call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を企画する",
    "example": "We need to organize call by the end of the day.",
    "example_ja": "今日中に電話を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2349,
    "word": "organize tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を企画する",
    "example": "We need to organize tour by the end of the day.",
    "example_ja": "今日中に見学を企画する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2350,
    "word": "reschedule meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を再調整する",
    "example": "We need to reschedule meeting by the end of the day.",
    "example_ja": "今日中に会議を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2351,
    "word": "reschedule appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を再調整する",
    "example": "We need to reschedule appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2352,
    "word": "reschedule conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を再調整する",
    "example": "We need to reschedule conference by the end of the day.",
    "example_ja": "今日中に会議を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2353,
    "word": "reschedule seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを再調整する",
    "example": "We need to reschedule seminar by the end of the day.",
    "example_ja": "今日中にセミナーを再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2354,
    "word": "reschedule workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を再調整する",
    "example": "We need to reschedule workshop by the end of the day.",
    "example_ja": "今日中に研修会を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2355,
    "word": "reschedule interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を再調整する",
    "example": "We need to reschedule interview by the end of the day.",
    "example_ja": "今日中に面接を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2356,
    "word": "reschedule training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を再調整する",
    "example": "We need to reschedule training session by the end of the day.",
    "example_ja": "今日中に研修を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2357,
    "word": "reschedule briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を再調整する",
    "example": "We need to reschedule briefing by the end of the day.",
    "example_ja": "今日中に説明会を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2358,
    "word": "reschedule presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を再調整する",
    "example": "We need to reschedule presentation by the end of the day.",
    "example_ja": "今日中に発表を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2359,
    "word": "reschedule discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを再調整する",
    "example": "We need to reschedule discussion by the end of the day.",
    "example_ja": "今日中に話し合いを再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2360,
    "word": "reschedule negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を再調整する",
    "example": "We need to reschedule negotiation by the end of the day.",
    "example_ja": "今日中に交渉を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2361,
    "word": "reschedule consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を再調整する",
    "example": "We need to reschedule consultation by the end of the day.",
    "example_ja": "今日中に相談を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2362,
    "word": "reschedule event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを再調整する",
    "example": "We need to reschedule event by the end of the day.",
    "example_ja": "今日中にイベントを再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2363,
    "word": "reschedule webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを再調整する",
    "example": "We need to reschedule webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2364,
    "word": "reschedule orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を再調整する",
    "example": "We need to reschedule orientation by the end of the day.",
    "example_ja": "今日中に説明会を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2365,
    "word": "reschedule gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを再調整する",
    "example": "We need to reschedule gathering by the end of the day.",
    "example_ja": "今日中に集まりを再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2366,
    "word": "reschedule session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を再調整する",
    "example": "We need to reschedule session by the end of the day.",
    "example_ja": "今日中に会合を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2367,
    "word": "reschedule visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を再調整する",
    "example": "We need to reschedule visit by the end of the day.",
    "example_ja": "今日中に訪問を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2368,
    "word": "reschedule call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を再調整する",
    "example": "We need to reschedule call by the end of the day.",
    "example_ja": "今日中に電話を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2369,
    "word": "reschedule tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を再調整する",
    "example": "We need to reschedule tour by the end of the day.",
    "example_ja": "今日中に見学を再調整する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2370,
    "word": "prepare for meeting",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を準備する",
    "example": "We need to prepare for meeting by the end of the day.",
    "example_ja": "今日中に会議を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2371,
    "word": "prepare for appointment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予約・約束を準備する",
    "example": "We need to prepare for appointment by the end of the day.",
    "example_ja": "今日中に予約・約束を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2372,
    "word": "prepare for conference",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議を準備する",
    "example": "We need to prepare for conference by the end of the day.",
    "example_ja": "今日中に会議を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2373,
    "word": "prepare for seminar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "セミナーを準備する",
    "example": "We need to prepare for seminar by the end of the day.",
    "example_ja": "今日中にセミナーを準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2374,
    "word": "prepare for workshop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修会を準備する",
    "example": "We need to prepare for workshop by the end of the day.",
    "example_ja": "今日中に研修会を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2375,
    "word": "prepare for interview",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "面接を準備する",
    "example": "We need to prepare for interview by the end of the day.",
    "example_ja": "今日中に面接を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2376,
    "word": "prepare for training session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研修を準備する",
    "example": "We need to prepare for training session by the end of the day.",
    "example_ja": "今日中に研修を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2377,
    "word": "prepare for briefing",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を準備する",
    "example": "We need to prepare for briefing by the end of the day.",
    "example_ja": "今日中に説明会を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2378,
    "word": "prepare for presentation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "発表を準備する",
    "example": "We need to prepare for presentation by the end of the day.",
    "example_ja": "今日中に発表を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2379,
    "word": "prepare for discussion",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "話し合いを準備する",
    "example": "We need to prepare for discussion by the end of the day.",
    "example_ja": "今日中に話し合いを準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2380,
    "word": "prepare for negotiation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "交渉を準備する",
    "example": "We need to prepare for negotiation by the end of the day.",
    "example_ja": "今日中に交渉を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2381,
    "word": "prepare for consultation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "相談を準備する",
    "example": "We need to prepare for consultation by the end of the day.",
    "example_ja": "今日中に相談を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2382,
    "word": "prepare for event",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "イベントを準備する",
    "example": "We need to prepare for event by the end of the day.",
    "example_ja": "今日中にイベントを準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2383,
    "word": "prepare for webinar",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "オンラインセミナーを準備する",
    "example": "We need to prepare for webinar by the end of the day.",
    "example_ja": "今日中にオンラインセミナーを準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2384,
    "word": "prepare for orientation",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "説明会を準備する",
    "example": "We need to prepare for orientation by the end of the day.",
    "example_ja": "今日中に説明会を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2385,
    "word": "prepare for gathering",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "集まりを準備する",
    "example": "We need to prepare for gathering by the end of the day.",
    "example_ja": "今日中に集まりを準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2386,
    "word": "prepare for session",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会合を準備する",
    "example": "We need to prepare for session by the end of the day.",
    "example_ja": "今日中に会合を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2387,
    "word": "prepare for visit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問を準備する",
    "example": "We need to prepare for visit by the end of the day.",
    "example_ja": "今日中に訪問を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2388,
    "word": "prepare for call",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を準備する",
    "example": "We need to prepare for call by the end of the day.",
    "example_ja": "今日中に電話を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2389,
    "word": "prepare for tour",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見学を準備する",
    "example": "We need to prepare for tour by the end of the day.",
    "example_ja": "今日中に見学を準備する必要がある。",
    "source": "会議：動詞＋名詞"
  },
  {
    "id": 2390,
    "word": "hire manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を雇う",
    "example": "We need to hire manager by the end of the day.",
    "example_ja": "今日中に管理者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2391,
    "word": "hire supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を雇う",
    "example": "We need to hire supervisor by the end of the day.",
    "example_ja": "今日中に監督者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2392,
    "word": "hire employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を雇う",
    "example": "We need to hire employee by the end of the day.",
    "example_ja": "今日中に従業員を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2393,
    "word": "hire applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を雇う",
    "example": "We need to hire applicant by the end of the day.",
    "example_ja": "今日中に応募者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2394,
    "word": "hire candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を雇う",
    "example": "We need to hire candidate by the end of the day.",
    "example_ja": "今日中に候補者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2395,
    "word": "hire customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を雇う",
    "example": "We need to hire customer by the end of the day.",
    "example_ja": "今日中に顧客を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2396,
    "word": "hire client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を雇う",
    "example": "We need to hire client by the end of the day.",
    "example_ja": "今日中に顧客を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2397,
    "word": "hire visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を雇う",
    "example": "We need to hire visitor by the end of the day.",
    "example_ja": "今日中に訪問者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2398,
    "word": "hire technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を雇う",
    "example": "We need to hire technician by the end of the day.",
    "example_ja": "今日中に技術者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2399,
    "word": "hire engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を雇う",
    "example": "We need to hire engineer by the end of the day.",
    "example_ja": "今日中に技術者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2400,
    "word": "hire representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を雇う",
    "example": "We need to hire representative by the end of the day.",
    "example_ja": "今日中に担当者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2401,
    "word": "hire assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を雇う",
    "example": "We need to hire assistant by the end of the day.",
    "example_ja": "今日中に助手を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2402,
    "word": "hire director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を雇う",
    "example": "We need to hire director by the end of the day.",
    "example_ja": "今日中に部長を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2403,
    "word": "hire staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を雇う",
    "example": "We need to hire staff member by the end of the day.",
    "example_ja": "今日中に職員を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2404,
    "word": "hire colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を雇う",
    "example": "We need to hire colleague by the end of the day.",
    "example_ja": "今日中に同僚を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2405,
    "word": "hire specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を雇う",
    "example": "We need to hire specialist by the end of the day.",
    "example_ja": "今日中に専門家を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2406,
    "word": "hire consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを雇う",
    "example": "We need to hire consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2407,
    "word": "hire contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を雇う",
    "example": "We need to hire contractor by the end of the day.",
    "example_ja": "今日中に請負業者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2408,
    "word": "hire supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を雇う",
    "example": "We need to hire supplier by the end of the day.",
    "example_ja": "今日中に供給業者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2409,
    "word": "hire vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を雇う",
    "example": "We need to hire vendor by the end of the day.",
    "example_ja": "今日中に販売業者を雇う必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2410,
    "word": "train manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を訓練する",
    "example": "We need to train manager by the end of the day.",
    "example_ja": "今日中に管理者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2411,
    "word": "train supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を訓練する",
    "example": "We need to train supervisor by the end of the day.",
    "example_ja": "今日中に監督者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2412,
    "word": "train employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を訓練する",
    "example": "We need to train employee by the end of the day.",
    "example_ja": "今日中に従業員を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2413,
    "word": "train applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を訓練する",
    "example": "We need to train applicant by the end of the day.",
    "example_ja": "今日中に応募者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2414,
    "word": "train candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を訓練する",
    "example": "We need to train candidate by the end of the day.",
    "example_ja": "今日中に候補者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2415,
    "word": "train customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を訓練する",
    "example": "We need to train customer by the end of the day.",
    "example_ja": "今日中に顧客を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2416,
    "word": "train client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を訓練する",
    "example": "We need to train client by the end of the day.",
    "example_ja": "今日中に顧客を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2417,
    "word": "train visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を訓練する",
    "example": "We need to train visitor by the end of the day.",
    "example_ja": "今日中に訪問者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2418,
    "word": "train technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を訓練する",
    "example": "We need to train technician by the end of the day.",
    "example_ja": "今日中に技術者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2419,
    "word": "train engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を訓練する",
    "example": "We need to train engineer by the end of the day.",
    "example_ja": "今日中に技術者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2420,
    "word": "train representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を訓練する",
    "example": "We need to train representative by the end of the day.",
    "example_ja": "今日中に担当者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2421,
    "word": "train assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を訓練する",
    "example": "We need to train assistant by the end of the day.",
    "example_ja": "今日中に助手を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2422,
    "word": "train director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を訓練する",
    "example": "We need to train director by the end of the day.",
    "example_ja": "今日中に部長を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2423,
    "word": "train staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を訓練する",
    "example": "We need to train staff member by the end of the day.",
    "example_ja": "今日中に職員を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2424,
    "word": "train colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を訓練する",
    "example": "We need to train colleague by the end of the day.",
    "example_ja": "今日中に同僚を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2425,
    "word": "train specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を訓練する",
    "example": "We need to train specialist by the end of the day.",
    "example_ja": "今日中に専門家を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2426,
    "word": "train consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを訓練する",
    "example": "We need to train consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2427,
    "word": "train contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を訓練する",
    "example": "We need to train contractor by the end of the day.",
    "example_ja": "今日中に請負業者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2428,
    "word": "train supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を訓練する",
    "example": "We need to train supplier by the end of the day.",
    "example_ja": "今日中に供給業者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2429,
    "word": "train vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を訓練する",
    "example": "We need to train vendor by the end of the day.",
    "example_ja": "今日中に販売業者を訓練する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2430,
    "word": "contact manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を連絡する",
    "example": "We need to contact manager by the end of the day.",
    "example_ja": "今日中に管理者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2431,
    "word": "contact supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を連絡する",
    "example": "We need to contact supervisor by the end of the day.",
    "example_ja": "今日中に監督者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2432,
    "word": "contact employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を連絡する",
    "example": "We need to contact employee by the end of the day.",
    "example_ja": "今日中に従業員を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2433,
    "word": "contact applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を連絡する",
    "example": "We need to contact applicant by the end of the day.",
    "example_ja": "今日中に応募者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2434,
    "word": "contact candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を連絡する",
    "example": "We need to contact candidate by the end of the day.",
    "example_ja": "今日中に候補者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2435,
    "word": "contact customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を連絡する",
    "example": "We need to contact customer by the end of the day.",
    "example_ja": "今日中に顧客を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2436,
    "word": "contact client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を連絡する",
    "example": "We need to contact client by the end of the day.",
    "example_ja": "今日中に顧客を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2437,
    "word": "contact visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を連絡する",
    "example": "We need to contact visitor by the end of the day.",
    "example_ja": "今日中に訪問者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2438,
    "word": "contact technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を連絡する",
    "example": "We need to contact technician by the end of the day.",
    "example_ja": "今日中に技術者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2439,
    "word": "contact engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を連絡する",
    "example": "We need to contact engineer by the end of the day.",
    "example_ja": "今日中に技術者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2440,
    "word": "contact representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を連絡する",
    "example": "We need to contact representative by the end of the day.",
    "example_ja": "今日中に担当者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2441,
    "word": "contact assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を連絡する",
    "example": "We need to contact assistant by the end of the day.",
    "example_ja": "今日中に助手を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2442,
    "word": "contact director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を連絡する",
    "example": "We need to contact director by the end of the day.",
    "example_ja": "今日中に部長を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2443,
    "word": "contact staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を連絡する",
    "example": "We need to contact staff member by the end of the day.",
    "example_ja": "今日中に職員を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2444,
    "word": "contact colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を連絡する",
    "example": "We need to contact colleague by the end of the day.",
    "example_ja": "今日中に同僚を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2445,
    "word": "contact specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を連絡する",
    "example": "We need to contact specialist by the end of the day.",
    "example_ja": "今日中に専門家を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2446,
    "word": "contact consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを連絡する",
    "example": "We need to contact consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2447,
    "word": "contact contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を連絡する",
    "example": "We need to contact contractor by the end of the day.",
    "example_ja": "今日中に請負業者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2448,
    "word": "contact supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を連絡する",
    "example": "We need to contact supplier by the end of the day.",
    "example_ja": "今日中に供給業者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2449,
    "word": "contact vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を連絡する",
    "example": "We need to contact vendor by the end of the day.",
    "example_ja": "今日中に販売業者を連絡する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2450,
    "word": "assist manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を支援する",
    "example": "We need to assist manager by the end of the day.",
    "example_ja": "今日中に管理者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2451,
    "word": "assist supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を支援する",
    "example": "We need to assist supervisor by the end of the day.",
    "example_ja": "今日中に監督者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2452,
    "word": "assist employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を支援する",
    "example": "We need to assist employee by the end of the day.",
    "example_ja": "今日中に従業員を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2453,
    "word": "assist applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を支援する",
    "example": "We need to assist applicant by the end of the day.",
    "example_ja": "今日中に応募者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2454,
    "word": "assist candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を支援する",
    "example": "We need to assist candidate by the end of the day.",
    "example_ja": "今日中に候補者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2455,
    "word": "assist customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を支援する",
    "example": "We need to assist customer by the end of the day.",
    "example_ja": "今日中に顧客を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2456,
    "word": "assist client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を支援する",
    "example": "We need to assist client by the end of the day.",
    "example_ja": "今日中に顧客を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2457,
    "word": "assist visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を支援する",
    "example": "We need to assist visitor by the end of the day.",
    "example_ja": "今日中に訪問者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2458,
    "word": "assist technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を支援する",
    "example": "We need to assist technician by the end of the day.",
    "example_ja": "今日中に技術者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2459,
    "word": "assist engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を支援する",
    "example": "We need to assist engineer by the end of the day.",
    "example_ja": "今日中に技術者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2460,
    "word": "assist representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を支援する",
    "example": "We need to assist representative by the end of the day.",
    "example_ja": "今日中に担当者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2461,
    "word": "assist assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を支援する",
    "example": "We need to assist assistant by the end of the day.",
    "example_ja": "今日中に助手を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2462,
    "word": "assist director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を支援する",
    "example": "We need to assist director by the end of the day.",
    "example_ja": "今日中に部長を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2463,
    "word": "assist staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を支援する",
    "example": "We need to assist staff member by the end of the day.",
    "example_ja": "今日中に職員を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2464,
    "word": "assist colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を支援する",
    "example": "We need to assist colleague by the end of the day.",
    "example_ja": "今日中に同僚を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2465,
    "word": "assist specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を支援する",
    "example": "We need to assist specialist by the end of the day.",
    "example_ja": "今日中に専門家を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2466,
    "word": "assist consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを支援する",
    "example": "We need to assist consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2467,
    "word": "assist contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を支援する",
    "example": "We need to assist contractor by the end of the day.",
    "example_ja": "今日中に請負業者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2468,
    "word": "assist supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を支援する",
    "example": "We need to assist supplier by the end of the day.",
    "example_ja": "今日中に供給業者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2469,
    "word": "assist vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を支援する",
    "example": "We need to assist vendor by the end of the day.",
    "example_ja": "今日中に販売業者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2470,
    "word": "notify manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を通知する",
    "example": "We need to notify manager by the end of the day.",
    "example_ja": "今日中に管理者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2471,
    "word": "notify supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を通知する",
    "example": "We need to notify supervisor by the end of the day.",
    "example_ja": "今日中に監督者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2472,
    "word": "notify employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を通知する",
    "example": "We need to notify employee by the end of the day.",
    "example_ja": "今日中に従業員を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2473,
    "word": "notify applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を通知する",
    "example": "We need to notify applicant by the end of the day.",
    "example_ja": "今日中に応募者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2474,
    "word": "notify candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を通知する",
    "example": "We need to notify candidate by the end of the day.",
    "example_ja": "今日中に候補者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2475,
    "word": "notify customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を通知する",
    "example": "We need to notify customer by the end of the day.",
    "example_ja": "今日中に顧客を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2476,
    "word": "notify client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を通知する",
    "example": "We need to notify client by the end of the day.",
    "example_ja": "今日中に顧客を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2477,
    "word": "notify visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を通知する",
    "example": "We need to notify visitor by the end of the day.",
    "example_ja": "今日中に訪問者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2478,
    "word": "notify technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を通知する",
    "example": "We need to notify technician by the end of the day.",
    "example_ja": "今日中に技術者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2479,
    "word": "notify engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を通知する",
    "example": "We need to notify engineer by the end of the day.",
    "example_ja": "今日中に技術者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2480,
    "word": "notify representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を通知する",
    "example": "We need to notify representative by the end of the day.",
    "example_ja": "今日中に担当者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2481,
    "word": "notify assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を通知する",
    "example": "We need to notify assistant by the end of the day.",
    "example_ja": "今日中に助手を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2482,
    "word": "notify director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を通知する",
    "example": "We need to notify director by the end of the day.",
    "example_ja": "今日中に部長を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2483,
    "word": "notify staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を通知する",
    "example": "We need to notify staff member by the end of the day.",
    "example_ja": "今日中に職員を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2484,
    "word": "notify colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を通知する",
    "example": "We need to notify colleague by the end of the day.",
    "example_ja": "今日中に同僚を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2485,
    "word": "notify specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を通知する",
    "example": "We need to notify specialist by the end of the day.",
    "example_ja": "今日中に専門家を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2486,
    "word": "notify consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを通知する",
    "example": "We need to notify consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2487,
    "word": "notify contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を通知する",
    "example": "We need to notify contractor by the end of the day.",
    "example_ja": "今日中に請負業者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2488,
    "word": "notify supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を通知する",
    "example": "We need to notify supplier by the end of the day.",
    "example_ja": "今日中に供給業者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2489,
    "word": "notify vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を通知する",
    "example": "We need to notify vendor by the end of the day.",
    "example_ja": "今日中に販売業者を通知する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2490,
    "word": "recommend manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を推薦する",
    "example": "We need to recommend manager by the end of the day.",
    "example_ja": "今日中に管理者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2491,
    "word": "recommend supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を推薦する",
    "example": "We need to recommend supervisor by the end of the day.",
    "example_ja": "今日中に監督者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2492,
    "word": "recommend employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を推薦する",
    "example": "We need to recommend employee by the end of the day.",
    "example_ja": "今日中に従業員を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2493,
    "word": "recommend applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を推薦する",
    "example": "We need to recommend applicant by the end of the day.",
    "example_ja": "今日中に応募者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2494,
    "word": "recommend candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を推薦する",
    "example": "We need to recommend candidate by the end of the day.",
    "example_ja": "今日中に候補者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2495,
    "word": "recommend customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を推薦する",
    "example": "We need to recommend customer by the end of the day.",
    "example_ja": "今日中に顧客を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2496,
    "word": "recommend client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を推薦する",
    "example": "We need to recommend client by the end of the day.",
    "example_ja": "今日中に顧客を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2497,
    "word": "recommend visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を推薦する",
    "example": "We need to recommend visitor by the end of the day.",
    "example_ja": "今日中に訪問者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2498,
    "word": "recommend technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を推薦する",
    "example": "We need to recommend technician by the end of the day.",
    "example_ja": "今日中に技術者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2499,
    "word": "recommend engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を推薦する",
    "example": "We need to recommend engineer by the end of the day.",
    "example_ja": "今日中に技術者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2500,
    "word": "recommend representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を推薦する",
    "example": "We need to recommend representative by the end of the day.",
    "example_ja": "今日中に担当者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2501,
    "word": "recommend assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を推薦する",
    "example": "We need to recommend assistant by the end of the day.",
    "example_ja": "今日中に助手を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2502,
    "word": "recommend director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を推薦する",
    "example": "We need to recommend director by the end of the day.",
    "example_ja": "今日中に部長を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2503,
    "word": "recommend staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を推薦する",
    "example": "We need to recommend staff member by the end of the day.",
    "example_ja": "今日中に職員を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2504,
    "word": "recommend colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を推薦する",
    "example": "We need to recommend colleague by the end of the day.",
    "example_ja": "今日中に同僚を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2505,
    "word": "recommend specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を推薦する",
    "example": "We need to recommend specialist by the end of the day.",
    "example_ja": "今日中に専門家を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2506,
    "word": "recommend consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを推薦する",
    "example": "We need to recommend consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2507,
    "word": "recommend contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を推薦する",
    "example": "We need to recommend contractor by the end of the day.",
    "example_ja": "今日中に請負業者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2508,
    "word": "recommend supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を推薦する",
    "example": "We need to recommend supplier by the end of the day.",
    "example_ja": "今日中に供給業者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2509,
    "word": "recommend vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を推薦する",
    "example": "We need to recommend vendor by the end of the day.",
    "example_ja": "今日中に販売業者を推薦する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2510,
    "word": "interview manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を面接する",
    "example": "We need to interview manager by the end of the day.",
    "example_ja": "今日中に管理者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2511,
    "word": "interview supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を面接する",
    "example": "We need to interview supervisor by the end of the day.",
    "example_ja": "今日中に監督者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2512,
    "word": "interview employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を面接する",
    "example": "We need to interview employee by the end of the day.",
    "example_ja": "今日中に従業員を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2513,
    "word": "interview applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を面接する",
    "example": "We need to interview applicant by the end of the day.",
    "example_ja": "今日中に応募者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2514,
    "word": "interview candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を面接する",
    "example": "We need to interview candidate by the end of the day.",
    "example_ja": "今日中に候補者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2515,
    "word": "interview customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を面接する",
    "example": "We need to interview customer by the end of the day.",
    "example_ja": "今日中に顧客を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2516,
    "word": "interview client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を面接する",
    "example": "We need to interview client by the end of the day.",
    "example_ja": "今日中に顧客を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2517,
    "word": "interview visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を面接する",
    "example": "We need to interview visitor by the end of the day.",
    "example_ja": "今日中に訪問者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2518,
    "word": "interview technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を面接する",
    "example": "We need to interview technician by the end of the day.",
    "example_ja": "今日中に技術者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2519,
    "word": "interview engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を面接する",
    "example": "We need to interview engineer by the end of the day.",
    "example_ja": "今日中に技術者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2520,
    "word": "interview representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を面接する",
    "example": "We need to interview representative by the end of the day.",
    "example_ja": "今日中に担当者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2521,
    "word": "interview assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を面接する",
    "example": "We need to interview assistant by the end of the day.",
    "example_ja": "今日中に助手を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2522,
    "word": "interview director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を面接する",
    "example": "We need to interview director by the end of the day.",
    "example_ja": "今日中に部長を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2523,
    "word": "interview staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を面接する",
    "example": "We need to interview staff member by the end of the day.",
    "example_ja": "今日中に職員を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2524,
    "word": "interview colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を面接する",
    "example": "We need to interview colleague by the end of the day.",
    "example_ja": "今日中に同僚を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2525,
    "word": "interview specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を面接する",
    "example": "We need to interview specialist by the end of the day.",
    "example_ja": "今日中に専門家を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2526,
    "word": "interview consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを面接する",
    "example": "We need to interview consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2527,
    "word": "interview contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を面接する",
    "example": "We need to interview contractor by the end of the day.",
    "example_ja": "今日中に請負業者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2528,
    "word": "interview supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を面接する",
    "example": "We need to interview supplier by the end of the day.",
    "example_ja": "今日中に供給業者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2529,
    "word": "interview vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を面接する",
    "example": "We need to interview vendor by the end of the day.",
    "example_ja": "今日中に販売業者を面接する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2530,
    "word": "evaluate manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を評価する",
    "example": "We need to evaluate manager by the end of the day.",
    "example_ja": "今日中に管理者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2531,
    "word": "evaluate supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を評価する",
    "example": "We need to evaluate supervisor by the end of the day.",
    "example_ja": "今日中に監督者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2532,
    "word": "evaluate employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を評価する",
    "example": "We need to evaluate employee by the end of the day.",
    "example_ja": "今日中に従業員を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2533,
    "word": "evaluate applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を評価する",
    "example": "We need to evaluate applicant by the end of the day.",
    "example_ja": "今日中に応募者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2534,
    "word": "evaluate candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を評価する",
    "example": "We need to evaluate candidate by the end of the day.",
    "example_ja": "今日中に候補者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2535,
    "word": "evaluate customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を評価する",
    "example": "We need to evaluate customer by the end of the day.",
    "example_ja": "今日中に顧客を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2536,
    "word": "evaluate client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を評価する",
    "example": "We need to evaluate client by the end of the day.",
    "example_ja": "今日中に顧客を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2537,
    "word": "evaluate visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を評価する",
    "example": "We need to evaluate visitor by the end of the day.",
    "example_ja": "今日中に訪問者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2538,
    "word": "evaluate technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を評価する",
    "example": "We need to evaluate technician by the end of the day.",
    "example_ja": "今日中に技術者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2539,
    "word": "evaluate engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を評価する",
    "example": "We need to evaluate engineer by the end of the day.",
    "example_ja": "今日中に技術者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2540,
    "word": "evaluate representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を評価する",
    "example": "We need to evaluate representative by the end of the day.",
    "example_ja": "今日中に担当者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2541,
    "word": "evaluate assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を評価する",
    "example": "We need to evaluate assistant by the end of the day.",
    "example_ja": "今日中に助手を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2542,
    "word": "evaluate director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を評価する",
    "example": "We need to evaluate director by the end of the day.",
    "example_ja": "今日中に部長を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2543,
    "word": "evaluate staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を評価する",
    "example": "We need to evaluate staff member by the end of the day.",
    "example_ja": "今日中に職員を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2544,
    "word": "evaluate colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を評価する",
    "example": "We need to evaluate colleague by the end of the day.",
    "example_ja": "今日中に同僚を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2545,
    "word": "evaluate specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を評価する",
    "example": "We need to evaluate specialist by the end of the day.",
    "example_ja": "今日中に専門家を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2546,
    "word": "evaluate consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを評価する",
    "example": "We need to evaluate consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2547,
    "word": "evaluate contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を評価する",
    "example": "We need to evaluate contractor by the end of the day.",
    "example_ja": "今日中に請負業者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2548,
    "word": "evaluate supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を評価する",
    "example": "We need to evaluate supplier by the end of the day.",
    "example_ja": "今日中に供給業者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2549,
    "word": "evaluate vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を評価する",
    "example": "We need to evaluate vendor by the end of the day.",
    "example_ja": "今日中に販売業者を評価する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2550,
    "word": "supervise manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を監督する",
    "example": "We need to supervise manager by the end of the day.",
    "example_ja": "今日中に管理者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2551,
    "word": "supervise supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を監督する",
    "example": "We need to supervise supervisor by the end of the day.",
    "example_ja": "今日中に監督者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2552,
    "word": "supervise employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を監督する",
    "example": "We need to supervise employee by the end of the day.",
    "example_ja": "今日中に従業員を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2553,
    "word": "supervise applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を監督する",
    "example": "We need to supervise applicant by the end of the day.",
    "example_ja": "今日中に応募者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2554,
    "word": "supervise candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を監督する",
    "example": "We need to supervise candidate by the end of the day.",
    "example_ja": "今日中に候補者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2555,
    "word": "supervise customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を監督する",
    "example": "We need to supervise customer by the end of the day.",
    "example_ja": "今日中に顧客を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2556,
    "word": "supervise client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を監督する",
    "example": "We need to supervise client by the end of the day.",
    "example_ja": "今日中に顧客を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2557,
    "word": "supervise visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を監督する",
    "example": "We need to supervise visitor by the end of the day.",
    "example_ja": "今日中に訪問者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2558,
    "word": "supervise technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を監督する",
    "example": "We need to supervise technician by the end of the day.",
    "example_ja": "今日中に技術者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2559,
    "word": "supervise engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を監督する",
    "example": "We need to supervise engineer by the end of the day.",
    "example_ja": "今日中に技術者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2560,
    "word": "supervise representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を監督する",
    "example": "We need to supervise representative by the end of the day.",
    "example_ja": "今日中に担当者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2561,
    "word": "supervise assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を監督する",
    "example": "We need to supervise assistant by the end of the day.",
    "example_ja": "今日中に助手を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2562,
    "word": "supervise director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を監督する",
    "example": "We need to supervise director by the end of the day.",
    "example_ja": "今日中に部長を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2563,
    "word": "supervise staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を監督する",
    "example": "We need to supervise staff member by the end of the day.",
    "example_ja": "今日中に職員を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2564,
    "word": "supervise colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を監督する",
    "example": "We need to supervise colleague by the end of the day.",
    "example_ja": "今日中に同僚を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2565,
    "word": "supervise specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を監督する",
    "example": "We need to supervise specialist by the end of the day.",
    "example_ja": "今日中に専門家を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2566,
    "word": "supervise consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを監督する",
    "example": "We need to supervise consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2567,
    "word": "supervise contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を監督する",
    "example": "We need to supervise contractor by the end of the day.",
    "example_ja": "今日中に請負業者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2568,
    "word": "supervise supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を監督する",
    "example": "We need to supervise supplier by the end of the day.",
    "example_ja": "今日中に供給業者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2569,
    "word": "supervise vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を監督する",
    "example": "We need to supervise vendor by the end of the day.",
    "example_ja": "今日中に販売業者を監督する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2570,
    "word": "support manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を支援する",
    "example": "We need to support manager by the end of the day.",
    "example_ja": "今日中に管理者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2571,
    "word": "support supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を支援する",
    "example": "We need to support supervisor by the end of the day.",
    "example_ja": "今日中に監督者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2572,
    "word": "support employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を支援する",
    "example": "We need to support employee by the end of the day.",
    "example_ja": "今日中に従業員を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2573,
    "word": "support applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を支援する",
    "example": "We need to support applicant by the end of the day.",
    "example_ja": "今日中に応募者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2574,
    "word": "support candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を支援する",
    "example": "We need to support candidate by the end of the day.",
    "example_ja": "今日中に候補者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2575,
    "word": "support customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を支援する",
    "example": "We need to support customer by the end of the day.",
    "example_ja": "今日中に顧客を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2576,
    "word": "support client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を支援する",
    "example": "We need to support client by the end of the day.",
    "example_ja": "今日中に顧客を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2577,
    "word": "support visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を支援する",
    "example": "We need to support visitor by the end of the day.",
    "example_ja": "今日中に訪問者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2578,
    "word": "support technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を支援する",
    "example": "We need to support technician by the end of the day.",
    "example_ja": "今日中に技術者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2579,
    "word": "support engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を支援する",
    "example": "We need to support engineer by the end of the day.",
    "example_ja": "今日中に技術者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2580,
    "word": "support representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を支援する",
    "example": "We need to support representative by the end of the day.",
    "example_ja": "今日中に担当者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2581,
    "word": "support assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を支援する",
    "example": "We need to support assistant by the end of the day.",
    "example_ja": "今日中に助手を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2582,
    "word": "support director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を支援する",
    "example": "We need to support director by the end of the day.",
    "example_ja": "今日中に部長を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2583,
    "word": "support staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を支援する",
    "example": "We need to support staff member by the end of the day.",
    "example_ja": "今日中に職員を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2584,
    "word": "support colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を支援する",
    "example": "We need to support colleague by the end of the day.",
    "example_ja": "今日中に同僚を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2585,
    "word": "support specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を支援する",
    "example": "We need to support specialist by the end of the day.",
    "example_ja": "今日中に専門家を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2586,
    "word": "support consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを支援する",
    "example": "We need to support consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2587,
    "word": "support contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を支援する",
    "example": "We need to support contractor by the end of the day.",
    "example_ja": "今日中に請負業者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2588,
    "word": "support supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を支援する",
    "example": "We need to support supplier by the end of the day.",
    "example_ja": "今日中に供給業者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2589,
    "word": "support vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を支援する",
    "example": "We need to support vendor by the end of the day.",
    "example_ja": "今日中に販売業者を支援する必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2590,
    "word": "welcome manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を迎える",
    "example": "We need to welcome manager by the end of the day.",
    "example_ja": "今日中に管理者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2591,
    "word": "welcome supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を迎える",
    "example": "We need to welcome supervisor by the end of the day.",
    "example_ja": "今日中に監督者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2592,
    "word": "welcome employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を迎える",
    "example": "We need to welcome employee by the end of the day.",
    "example_ja": "今日中に従業員を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2593,
    "word": "welcome applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を迎える",
    "example": "We need to welcome applicant by the end of the day.",
    "example_ja": "今日中に応募者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2594,
    "word": "welcome candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を迎える",
    "example": "We need to welcome candidate by the end of the day.",
    "example_ja": "今日中に候補者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2595,
    "word": "welcome customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を迎える",
    "example": "We need to welcome customer by the end of the day.",
    "example_ja": "今日中に顧客を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2596,
    "word": "welcome client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を迎える",
    "example": "We need to welcome client by the end of the day.",
    "example_ja": "今日中に顧客を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2597,
    "word": "welcome visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を迎える",
    "example": "We need to welcome visitor by the end of the day.",
    "example_ja": "今日中に訪問者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2598,
    "word": "welcome technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を迎える",
    "example": "We need to welcome technician by the end of the day.",
    "example_ja": "今日中に技術者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2599,
    "word": "welcome engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を迎える",
    "example": "We need to welcome engineer by the end of the day.",
    "example_ja": "今日中に技術者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2600,
    "word": "welcome representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を迎える",
    "example": "We need to welcome representative by the end of the day.",
    "example_ja": "今日中に担当者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2601,
    "word": "welcome assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を迎える",
    "example": "We need to welcome assistant by the end of the day.",
    "example_ja": "今日中に助手を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2602,
    "word": "welcome director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を迎える",
    "example": "We need to welcome director by the end of the day.",
    "example_ja": "今日中に部長を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2603,
    "word": "welcome staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を迎える",
    "example": "We need to welcome staff member by the end of the day.",
    "example_ja": "今日中に職員を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2604,
    "word": "welcome colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を迎える",
    "example": "We need to welcome colleague by the end of the day.",
    "example_ja": "今日中に同僚を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2605,
    "word": "welcome specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を迎える",
    "example": "We need to welcome specialist by the end of the day.",
    "example_ja": "今日中に専門家を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2606,
    "word": "welcome consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを迎える",
    "example": "We need to welcome consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2607,
    "word": "welcome contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を迎える",
    "example": "We need to welcome contractor by the end of the day.",
    "example_ja": "今日中に請負業者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2608,
    "word": "welcome supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を迎える",
    "example": "We need to welcome supplier by the end of the day.",
    "example_ja": "今日中に供給業者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2609,
    "word": "welcome vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を迎える",
    "example": "We need to welcome vendor by the end of the day.",
    "example_ja": "今日中に販売業者を迎える必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2610,
    "word": "replace manager",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "管理者を交代させる",
    "example": "We need to replace manager by the end of the day.",
    "example_ja": "今日中に管理者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2611,
    "word": "replace supervisor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "監督者を交代させる",
    "example": "We need to replace supervisor by the end of the day.",
    "example_ja": "今日中に監督者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2612,
    "word": "replace employee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "従業員を交代させる",
    "example": "We need to replace employee by the end of the day.",
    "example_ja": "今日中に従業員を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2613,
    "word": "replace applicant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "応募者を交代させる",
    "example": "We need to replace applicant by the end of the day.",
    "example_ja": "今日中に応募者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2614,
    "word": "replace candidate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "候補者を交代させる",
    "example": "We need to replace candidate by the end of the day.",
    "example_ja": "今日中に候補者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2615,
    "word": "replace customer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を交代させる",
    "example": "We need to replace customer by the end of the day.",
    "example_ja": "今日中に顧客を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2616,
    "word": "replace client",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "顧客を交代させる",
    "example": "We need to replace client by the end of the day.",
    "example_ja": "今日中に顧客を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2617,
    "word": "replace visitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "訪問者を交代させる",
    "example": "We need to replace visitor by the end of the day.",
    "example_ja": "今日中に訪問者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2618,
    "word": "replace technician",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を交代させる",
    "example": "We need to replace technician by the end of the day.",
    "example_ja": "今日中に技術者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2619,
    "word": "replace engineer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "技術者を交代させる",
    "example": "We need to replace engineer by the end of the day.",
    "example_ja": "今日中に技術者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2620,
    "word": "replace representative",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "担当者を交代させる",
    "example": "We need to replace representative by the end of the day.",
    "example_ja": "今日中に担当者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2621,
    "word": "replace assistant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "助手を交代させる",
    "example": "We need to replace assistant by the end of the day.",
    "example_ja": "今日中に助手を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2622,
    "word": "replace director",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "部長を交代させる",
    "example": "We need to replace director by the end of the day.",
    "example_ja": "今日中に部長を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2623,
    "word": "replace staff member",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "職員を交代させる",
    "example": "We need to replace staff member by the end of the day.",
    "example_ja": "今日中に職員を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2624,
    "word": "replace colleague",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "同僚を交代させる",
    "example": "We need to replace colleague by the end of the day.",
    "example_ja": "今日中に同僚を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2625,
    "word": "replace specialist",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "専門家を交代させる",
    "example": "We need to replace specialist by the end of the day.",
    "example_ja": "今日中に専門家を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2626,
    "word": "replace consultant",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンサルタントを交代させる",
    "example": "We need to replace consultant by the end of the day.",
    "example_ja": "今日中にコンサルタントを交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2627,
    "word": "replace contractor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請負業者を交代させる",
    "example": "We need to replace contractor by the end of the day.",
    "example_ja": "今日中に請負業者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2628,
    "word": "replace supplier",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "供給業者を交代させる",
    "example": "We need to replace supplier by the end of the day.",
    "example_ja": "今日中に供給業者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2629,
    "word": "replace vendor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "販売業者を交代させる",
    "example": "We need to replace vendor by the end of the day.",
    "example_ja": "今日中に販売業者を交代させる必要がある。",
    "source": "人物・役職：動詞＋名詞"
  },
  {
    "id": 2630,
    "word": "calculate budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を計算する",
    "example": "We need to calculate budget by the end of the day.",
    "example_ja": "今日中に予算を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2631,
    "word": "calculate expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を計算する",
    "example": "We need to calculate expense by the end of the day.",
    "example_ja": "今日中に費用を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2632,
    "word": "calculate revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を計算する",
    "example": "We need to calculate revenue by the end of the day.",
    "example_ja": "今日中に収益を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2633,
    "word": "calculate profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を計算する",
    "example": "We need to calculate profit by the end of the day.",
    "example_ja": "今日中に利益を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2634,
    "word": "calculate sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を計算する",
    "example": "We need to calculate sales by the end of the day.",
    "example_ja": "今日中に売上を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2635,
    "word": "calculate cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を計算する",
    "example": "We need to calculate cost by the end of the day.",
    "example_ja": "今日中に費用を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2636,
    "word": "calculate price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を計算する",
    "example": "We need to calculate price by the end of the day.",
    "example_ja": "今日中に価格を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2637,
    "word": "calculate fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を計算する",
    "example": "We need to calculate fee by the end of the day.",
    "example_ja": "今日中に料金を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2638,
    "word": "calculate discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を計算する",
    "example": "We need to calculate discount by the end of the day.",
    "example_ja": "今日中に割引を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2639,
    "word": "calculate refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を計算する",
    "example": "We need to calculate refund by the end of the day.",
    "example_ja": "今日中に返金を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2640,
    "word": "calculate payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを計算する",
    "example": "We need to calculate payment by the end of the day.",
    "example_ja": "今日中に支払いを計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2641,
    "word": "calculate deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を計算する",
    "example": "We need to calculate deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2642,
    "word": "calculate balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を計算する",
    "example": "We need to calculate balance by the end of the day.",
    "example_ja": "今日中に残高を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2643,
    "word": "calculate account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を計算する",
    "example": "We need to calculate account by the end of the day.",
    "example_ja": "今日中に口座を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2644,
    "word": "calculate transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を計算する",
    "example": "We need to calculate transaction by the end of the day.",
    "example_ja": "今日中に取引を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2645,
    "word": "calculate investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を計算する",
    "example": "We need to calculate investment by the end of the day.",
    "example_ja": "今日中に投資を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2646,
    "word": "calculate tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を計算する",
    "example": "We need to calculate tax by the end of the day.",
    "example_ja": "今日中に税金を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2647,
    "word": "calculate payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを計算する",
    "example": "We need to calculate payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2648,
    "word": "calculate bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を計算する",
    "example": "We need to calculate bill by the end of the day.",
    "example_ja": "今日中に請求書を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2649,
    "word": "calculate charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を計算する",
    "example": "We need to calculate charge by the end of the day.",
    "example_ja": "今日中に料金を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2650,
    "word": "calculate rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を計算する",
    "example": "We need to calculate rate by the end of the day.",
    "example_ja": "今日中に料金・率を計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2651,
    "word": "calculate estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを計算する",
    "example": "We need to calculate estimate by the end of the day.",
    "example_ja": "今日中に見積りを計算する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2652,
    "word": "reduce budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を減らす",
    "example": "We need to reduce budget by the end of the day.",
    "example_ja": "今日中に予算を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2653,
    "word": "reduce expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を減らす",
    "example": "We need to reduce expense by the end of the day.",
    "example_ja": "今日中に費用を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2654,
    "word": "reduce revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を減らす",
    "example": "We need to reduce revenue by the end of the day.",
    "example_ja": "今日中に収益を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2655,
    "word": "reduce profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を減らす",
    "example": "We need to reduce profit by the end of the day.",
    "example_ja": "今日中に利益を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2656,
    "word": "reduce sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を減らす",
    "example": "We need to reduce sales by the end of the day.",
    "example_ja": "今日中に売上を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2657,
    "word": "reduce cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を減らす",
    "example": "We need to reduce cost by the end of the day.",
    "example_ja": "今日中に費用を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2658,
    "word": "reduce price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を減らす",
    "example": "We need to reduce price by the end of the day.",
    "example_ja": "今日中に価格を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2659,
    "word": "reduce fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を減らす",
    "example": "We need to reduce fee by the end of the day.",
    "example_ja": "今日中に料金を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2660,
    "word": "reduce discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を減らす",
    "example": "We need to reduce discount by the end of the day.",
    "example_ja": "今日中に割引を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2661,
    "word": "reduce refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を減らす",
    "example": "We need to reduce refund by the end of the day.",
    "example_ja": "今日中に返金を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2662,
    "word": "reduce payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを減らす",
    "example": "We need to reduce payment by the end of the day.",
    "example_ja": "今日中に支払いを減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2663,
    "word": "reduce deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を減らす",
    "example": "We need to reduce deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2664,
    "word": "reduce balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を減らす",
    "example": "We need to reduce balance by the end of the day.",
    "example_ja": "今日中に残高を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2665,
    "word": "reduce account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を減らす",
    "example": "We need to reduce account by the end of the day.",
    "example_ja": "今日中に口座を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2666,
    "word": "reduce transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を減らす",
    "example": "We need to reduce transaction by the end of the day.",
    "example_ja": "今日中に取引を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2667,
    "word": "reduce investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を減らす",
    "example": "We need to reduce investment by the end of the day.",
    "example_ja": "今日中に投資を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2668,
    "word": "reduce tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を減らす",
    "example": "We need to reduce tax by the end of the day.",
    "example_ja": "今日中に税金を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2669,
    "word": "reduce payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを減らす",
    "example": "We need to reduce payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2670,
    "word": "reduce bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を減らす",
    "example": "We need to reduce bill by the end of the day.",
    "example_ja": "今日中に請求書を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2671,
    "word": "reduce charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を減らす",
    "example": "We need to reduce charge by the end of the day.",
    "example_ja": "今日中に料金を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2672,
    "word": "reduce rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を減らす",
    "example": "We need to reduce rate by the end of the day.",
    "example_ja": "今日中に料金・率を減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2673,
    "word": "reduce estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを減らす",
    "example": "We need to reduce estimate by the end of the day.",
    "example_ja": "今日中に見積りを減らす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2674,
    "word": "increase budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を増やす",
    "example": "We need to increase budget by the end of the day.",
    "example_ja": "今日中に予算を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2675,
    "word": "increase expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を増やす",
    "example": "We need to increase expense by the end of the day.",
    "example_ja": "今日中に費用を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2676,
    "word": "increase revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を増やす",
    "example": "We need to increase revenue by the end of the day.",
    "example_ja": "今日中に収益を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2677,
    "word": "increase profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を増やす",
    "example": "We need to increase profit by the end of the day.",
    "example_ja": "今日中に利益を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2678,
    "word": "increase sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を増やす",
    "example": "We need to increase sales by the end of the day.",
    "example_ja": "今日中に売上を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2679,
    "word": "increase cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を増やす",
    "example": "We need to increase cost by the end of the day.",
    "example_ja": "今日中に費用を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2680,
    "word": "increase price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を増やす",
    "example": "We need to increase price by the end of the day.",
    "example_ja": "今日中に価格を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2681,
    "word": "increase fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を増やす",
    "example": "We need to increase fee by the end of the day.",
    "example_ja": "今日中に料金を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2682,
    "word": "increase discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を増やす",
    "example": "We need to increase discount by the end of the day.",
    "example_ja": "今日中に割引を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2683,
    "word": "increase refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を増やす",
    "example": "We need to increase refund by the end of the day.",
    "example_ja": "今日中に返金を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2684,
    "word": "increase payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを増やす",
    "example": "We need to increase payment by the end of the day.",
    "example_ja": "今日中に支払いを増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2685,
    "word": "increase deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を増やす",
    "example": "We need to increase deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2686,
    "word": "increase balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を増やす",
    "example": "We need to increase balance by the end of the day.",
    "example_ja": "今日中に残高を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2687,
    "word": "increase account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を増やす",
    "example": "We need to increase account by the end of the day.",
    "example_ja": "今日中に口座を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2688,
    "word": "increase transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を増やす",
    "example": "We need to increase transaction by the end of the day.",
    "example_ja": "今日中に取引を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2689,
    "word": "increase investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を増やす",
    "example": "We need to increase investment by the end of the day.",
    "example_ja": "今日中に投資を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2690,
    "word": "increase tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を増やす",
    "example": "We need to increase tax by the end of the day.",
    "example_ja": "今日中に税金を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2691,
    "word": "increase payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを増やす",
    "example": "We need to increase payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2692,
    "word": "increase bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を増やす",
    "example": "We need to increase bill by the end of the day.",
    "example_ja": "今日中に請求書を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2693,
    "word": "increase charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を増やす",
    "example": "We need to increase charge by the end of the day.",
    "example_ja": "今日中に料金を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2694,
    "word": "increase rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を増やす",
    "example": "We need to increase rate by the end of the day.",
    "example_ja": "今日中に料金・率を増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2695,
    "word": "increase estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを増やす",
    "example": "We need to increase estimate by the end of the day.",
    "example_ja": "今日中に見積りを増やす必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2696,
    "word": "pay budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を支払う",
    "example": "We need to pay budget by the end of the day.",
    "example_ja": "今日中に予算を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2697,
    "word": "pay expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を支払う",
    "example": "We need to pay expense by the end of the day.",
    "example_ja": "今日中に費用を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2698,
    "word": "pay revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を支払う",
    "example": "We need to pay revenue by the end of the day.",
    "example_ja": "今日中に収益を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2699,
    "word": "pay profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を支払う",
    "example": "We need to pay profit by the end of the day.",
    "example_ja": "今日中に利益を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2700,
    "word": "pay sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を支払う",
    "example": "We need to pay sales by the end of the day.",
    "example_ja": "今日中に売上を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2701,
    "word": "pay cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を支払う",
    "example": "We need to pay cost by the end of the day.",
    "example_ja": "今日中に費用を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2702,
    "word": "pay price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を支払う",
    "example": "We need to pay price by the end of the day.",
    "example_ja": "今日中に価格を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2703,
    "word": "pay fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を支払う",
    "example": "We need to pay fee by the end of the day.",
    "example_ja": "今日中に料金を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2704,
    "word": "pay discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を支払う",
    "example": "We need to pay discount by the end of the day.",
    "example_ja": "今日中に割引を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2705,
    "word": "pay refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を支払う",
    "example": "We need to pay refund by the end of the day.",
    "example_ja": "今日中に返金を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2706,
    "word": "pay payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを支払う",
    "example": "We need to pay payment by the end of the day.",
    "example_ja": "今日中に支払いを支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2707,
    "word": "pay deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を支払う",
    "example": "We need to pay deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2708,
    "word": "pay balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を支払う",
    "example": "We need to pay balance by the end of the day.",
    "example_ja": "今日中に残高を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2709,
    "word": "pay account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を支払う",
    "example": "We need to pay account by the end of the day.",
    "example_ja": "今日中に口座を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2710,
    "word": "pay transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を支払う",
    "example": "We need to pay transaction by the end of the day.",
    "example_ja": "今日中に取引を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2711,
    "word": "pay investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を支払う",
    "example": "We need to pay investment by the end of the day.",
    "example_ja": "今日中に投資を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2712,
    "word": "pay tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を支払う",
    "example": "We need to pay tax by the end of the day.",
    "example_ja": "今日中に税金を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2713,
    "word": "pay payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを支払う",
    "example": "We need to pay payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2714,
    "word": "pay bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を支払う",
    "example": "We need to pay bill by the end of the day.",
    "example_ja": "今日中に請求書を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2715,
    "word": "pay charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を支払う",
    "example": "We need to pay charge by the end of the day.",
    "example_ja": "今日中に料金を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2716,
    "word": "pay rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を支払う",
    "example": "We need to pay rate by the end of the day.",
    "example_ja": "今日中に料金・率を支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2717,
    "word": "pay estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを支払う",
    "example": "We need to pay estimate by the end of the day.",
    "example_ja": "今日中に見積りを支払う必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2718,
    "word": "charge budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を請求する",
    "example": "We need to charge budget by the end of the day.",
    "example_ja": "今日中に予算を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2719,
    "word": "charge expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を請求する",
    "example": "We need to charge expense by the end of the day.",
    "example_ja": "今日中に費用を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2720,
    "word": "charge revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を請求する",
    "example": "We need to charge revenue by the end of the day.",
    "example_ja": "今日中に収益を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2721,
    "word": "charge profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を請求する",
    "example": "We need to charge profit by the end of the day.",
    "example_ja": "今日中に利益を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2722,
    "word": "charge sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を請求する",
    "example": "We need to charge sales by the end of the day.",
    "example_ja": "今日中に売上を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2723,
    "word": "charge cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を請求する",
    "example": "We need to charge cost by the end of the day.",
    "example_ja": "今日中に費用を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2724,
    "word": "charge price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を請求する",
    "example": "We need to charge price by the end of the day.",
    "example_ja": "今日中に価格を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2725,
    "word": "charge fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を請求する",
    "example": "We need to charge fee by the end of the day.",
    "example_ja": "今日中に料金を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2726,
    "word": "charge discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を請求する",
    "example": "We need to charge discount by the end of the day.",
    "example_ja": "今日中に割引を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2727,
    "word": "charge refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を請求する",
    "example": "We need to charge refund by the end of the day.",
    "example_ja": "今日中に返金を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2728,
    "word": "charge payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを請求する",
    "example": "We need to charge payment by the end of the day.",
    "example_ja": "今日中に支払いを請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2729,
    "word": "charge deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を請求する",
    "example": "We need to charge deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2730,
    "word": "charge balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を請求する",
    "example": "We need to charge balance by the end of the day.",
    "example_ja": "今日中に残高を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2731,
    "word": "charge account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を請求する",
    "example": "We need to charge account by the end of the day.",
    "example_ja": "今日中に口座を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2732,
    "word": "charge transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を請求する",
    "example": "We need to charge transaction by the end of the day.",
    "example_ja": "今日中に取引を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2733,
    "word": "charge investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を請求する",
    "example": "We need to charge investment by the end of the day.",
    "example_ja": "今日中に投資を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2734,
    "word": "charge tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を請求する",
    "example": "We need to charge tax by the end of the day.",
    "example_ja": "今日中に税金を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2735,
    "word": "charge payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを請求する",
    "example": "We need to charge payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2736,
    "word": "charge bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を請求する",
    "example": "We need to charge bill by the end of the day.",
    "example_ja": "今日中に請求書を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2737,
    "word": "charge charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を請求する",
    "example": "We need to charge charge by the end of the day.",
    "example_ja": "今日中に料金を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2738,
    "word": "charge rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を請求する",
    "example": "We need to charge rate by the end of the day.",
    "example_ja": "今日中に料金・率を請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2739,
    "word": "charge estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを請求する",
    "example": "We need to charge estimate by the end of the day.",
    "example_ja": "今日中に見積りを請求する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2740,
    "word": "refund budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を返金する",
    "example": "We need to refund budget by the end of the day.",
    "example_ja": "今日中に予算を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2741,
    "word": "refund expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を返金する",
    "example": "We need to refund expense by the end of the day.",
    "example_ja": "今日中に費用を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2742,
    "word": "refund revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を返金する",
    "example": "We need to refund revenue by the end of the day.",
    "example_ja": "今日中に収益を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2743,
    "word": "refund profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を返金する",
    "example": "We need to refund profit by the end of the day.",
    "example_ja": "今日中に利益を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2744,
    "word": "refund sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を返金する",
    "example": "We need to refund sales by the end of the day.",
    "example_ja": "今日中に売上を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2745,
    "word": "refund cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を返金する",
    "example": "We need to refund cost by the end of the day.",
    "example_ja": "今日中に費用を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2746,
    "word": "refund price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を返金する",
    "example": "We need to refund price by the end of the day.",
    "example_ja": "今日中に価格を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2747,
    "word": "refund fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を返金する",
    "example": "We need to refund fee by the end of the day.",
    "example_ja": "今日中に料金を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2748,
    "word": "refund discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を返金する",
    "example": "We need to refund discount by the end of the day.",
    "example_ja": "今日中に割引を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2749,
    "word": "refund refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を返金する",
    "example": "We need to refund refund by the end of the day.",
    "example_ja": "今日中に返金を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2750,
    "word": "refund payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを返金する",
    "example": "We need to refund payment by the end of the day.",
    "example_ja": "今日中に支払いを返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2751,
    "word": "refund deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を返金する",
    "example": "We need to refund deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2752,
    "word": "refund balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を返金する",
    "example": "We need to refund balance by the end of the day.",
    "example_ja": "今日中に残高を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2753,
    "word": "refund account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を返金する",
    "example": "We need to refund account by the end of the day.",
    "example_ja": "今日中に口座を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2754,
    "word": "refund transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を返金する",
    "example": "We need to refund transaction by the end of the day.",
    "example_ja": "今日中に取引を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2755,
    "word": "refund investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を返金する",
    "example": "We need to refund investment by the end of the day.",
    "example_ja": "今日中に投資を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2756,
    "word": "refund tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を返金する",
    "example": "We need to refund tax by the end of the day.",
    "example_ja": "今日中に税金を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2757,
    "word": "refund payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを返金する",
    "example": "We need to refund payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2758,
    "word": "refund bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を返金する",
    "example": "We need to refund bill by the end of the day.",
    "example_ja": "今日中に請求書を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2759,
    "word": "refund charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を返金する",
    "example": "We need to refund charge by the end of the day.",
    "example_ja": "今日中に料金を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2760,
    "word": "refund rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を返金する",
    "example": "We need to refund rate by the end of the day.",
    "example_ja": "今日中に料金・率を返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2761,
    "word": "refund estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを返金する",
    "example": "We need to refund estimate by the end of the day.",
    "example_ja": "今日中に見積りを返金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2762,
    "word": "deposit budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を入金する",
    "example": "We need to deposit budget by the end of the day.",
    "example_ja": "今日中に予算を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2763,
    "word": "deposit expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を入金する",
    "example": "We need to deposit expense by the end of the day.",
    "example_ja": "今日中に費用を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2764,
    "word": "deposit revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を入金する",
    "example": "We need to deposit revenue by the end of the day.",
    "example_ja": "今日中に収益を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2765,
    "word": "deposit profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を入金する",
    "example": "We need to deposit profit by the end of the day.",
    "example_ja": "今日中に利益を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2766,
    "word": "deposit sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を入金する",
    "example": "We need to deposit sales by the end of the day.",
    "example_ja": "今日中に売上を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2767,
    "word": "deposit cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を入金する",
    "example": "We need to deposit cost by the end of the day.",
    "example_ja": "今日中に費用を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2768,
    "word": "deposit price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を入金する",
    "example": "We need to deposit price by the end of the day.",
    "example_ja": "今日中に価格を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2769,
    "word": "deposit fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を入金する",
    "example": "We need to deposit fee by the end of the day.",
    "example_ja": "今日中に料金を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2770,
    "word": "deposit discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を入金する",
    "example": "We need to deposit discount by the end of the day.",
    "example_ja": "今日中に割引を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2771,
    "word": "deposit refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を入金する",
    "example": "We need to deposit refund by the end of the day.",
    "example_ja": "今日中に返金を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2772,
    "word": "deposit payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを入金する",
    "example": "We need to deposit payment by the end of the day.",
    "example_ja": "今日中に支払いを入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2773,
    "word": "deposit deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を入金する",
    "example": "We need to deposit deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2774,
    "word": "deposit balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を入金する",
    "example": "We need to deposit balance by the end of the day.",
    "example_ja": "今日中に残高を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2775,
    "word": "deposit account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を入金する",
    "example": "We need to deposit account by the end of the day.",
    "example_ja": "今日中に口座を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2776,
    "word": "deposit transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を入金する",
    "example": "We need to deposit transaction by the end of the day.",
    "example_ja": "今日中に取引を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2777,
    "word": "deposit investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を入金する",
    "example": "We need to deposit investment by the end of the day.",
    "example_ja": "今日中に投資を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2778,
    "word": "deposit tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を入金する",
    "example": "We need to deposit tax by the end of the day.",
    "example_ja": "今日中に税金を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2779,
    "word": "deposit payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを入金する",
    "example": "We need to deposit payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2780,
    "word": "deposit bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を入金する",
    "example": "We need to deposit bill by the end of the day.",
    "example_ja": "今日中に請求書を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2781,
    "word": "deposit charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を入金する",
    "example": "We need to deposit charge by the end of the day.",
    "example_ja": "今日中に料金を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2782,
    "word": "deposit rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を入金する",
    "example": "We need to deposit rate by the end of the day.",
    "example_ja": "今日中に料金・率を入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2783,
    "word": "deposit estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを入金する",
    "example": "We need to deposit estimate by the end of the day.",
    "example_ja": "今日中に見積りを入金する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2784,
    "word": "invest budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を投資する",
    "example": "We need to invest budget by the end of the day.",
    "example_ja": "今日中に予算を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2785,
    "word": "invest expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を投資する",
    "example": "We need to invest expense by the end of the day.",
    "example_ja": "今日中に費用を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2786,
    "word": "invest revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を投資する",
    "example": "We need to invest revenue by the end of the day.",
    "example_ja": "今日中に収益を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2787,
    "word": "invest profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を投資する",
    "example": "We need to invest profit by the end of the day.",
    "example_ja": "今日中に利益を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2788,
    "word": "invest sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を投資する",
    "example": "We need to invest sales by the end of the day.",
    "example_ja": "今日中に売上を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2789,
    "word": "invest cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を投資する",
    "example": "We need to invest cost by the end of the day.",
    "example_ja": "今日中に費用を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2790,
    "word": "invest price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を投資する",
    "example": "We need to invest price by the end of the day.",
    "example_ja": "今日中に価格を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2791,
    "word": "invest fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を投資する",
    "example": "We need to invest fee by the end of the day.",
    "example_ja": "今日中に料金を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2792,
    "word": "invest discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を投資する",
    "example": "We need to invest discount by the end of the day.",
    "example_ja": "今日中に割引を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2793,
    "word": "invest refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を投資する",
    "example": "We need to invest refund by the end of the day.",
    "example_ja": "今日中に返金を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2794,
    "word": "invest payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを投資する",
    "example": "We need to invest payment by the end of the day.",
    "example_ja": "今日中に支払いを投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2795,
    "word": "invest deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を投資する",
    "example": "We need to invest deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2796,
    "word": "invest balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を投資する",
    "example": "We need to invest balance by the end of the day.",
    "example_ja": "今日中に残高を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2797,
    "word": "invest account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を投資する",
    "example": "We need to invest account by the end of the day.",
    "example_ja": "今日中に口座を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2798,
    "word": "invest transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を投資する",
    "example": "We need to invest transaction by the end of the day.",
    "example_ja": "今日中に取引を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2799,
    "word": "invest investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を投資する",
    "example": "We need to invest investment by the end of the day.",
    "example_ja": "今日中に投資を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2800,
    "word": "invest tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を投資する",
    "example": "We need to invest tax by the end of the day.",
    "example_ja": "今日中に税金を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2801,
    "word": "invest payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを投資する",
    "example": "We need to invest payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2802,
    "word": "invest bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を投資する",
    "example": "We need to invest bill by the end of the day.",
    "example_ja": "今日中に請求書を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2803,
    "word": "invest charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を投資する",
    "example": "We need to invest charge by the end of the day.",
    "example_ja": "今日中に料金を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2804,
    "word": "invest rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を投資する",
    "example": "We need to invest rate by the end of the day.",
    "example_ja": "今日中に料金・率を投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2805,
    "word": "invest estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを投資する",
    "example": "We need to invest estimate by the end of the day.",
    "example_ja": "今日中に見積りを投資する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2806,
    "word": "estimate budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を見積もる",
    "example": "We need to estimate budget by the end of the day.",
    "example_ja": "今日中に予算を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2807,
    "word": "estimate expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を見積もる",
    "example": "We need to estimate expense by the end of the day.",
    "example_ja": "今日中に費用を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2808,
    "word": "estimate revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を見積もる",
    "example": "We need to estimate revenue by the end of the day.",
    "example_ja": "今日中に収益を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2809,
    "word": "estimate profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を見積もる",
    "example": "We need to estimate profit by the end of the day.",
    "example_ja": "今日中に利益を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2810,
    "word": "estimate sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を見積もる",
    "example": "We need to estimate sales by the end of the day.",
    "example_ja": "今日中に売上を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2811,
    "word": "estimate cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を見積もる",
    "example": "We need to estimate cost by the end of the day.",
    "example_ja": "今日中に費用を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2812,
    "word": "estimate price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を見積もる",
    "example": "We need to estimate price by the end of the day.",
    "example_ja": "今日中に価格を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2813,
    "word": "estimate fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を見積もる",
    "example": "We need to estimate fee by the end of the day.",
    "example_ja": "今日中に料金を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2814,
    "word": "estimate discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を見積もる",
    "example": "We need to estimate discount by the end of the day.",
    "example_ja": "今日中に割引を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2815,
    "word": "estimate refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を見積もる",
    "example": "We need to estimate refund by the end of the day.",
    "example_ja": "今日中に返金を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2816,
    "word": "estimate payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを見積もる",
    "example": "We need to estimate payment by the end of the day.",
    "example_ja": "今日中に支払いを見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2817,
    "word": "estimate deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を見積もる",
    "example": "We need to estimate deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2818,
    "word": "estimate balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を見積もる",
    "example": "We need to estimate balance by the end of the day.",
    "example_ja": "今日中に残高を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2819,
    "word": "estimate account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を見積もる",
    "example": "We need to estimate account by the end of the day.",
    "example_ja": "今日中に口座を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2820,
    "word": "estimate transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を見積もる",
    "example": "We need to estimate transaction by the end of the day.",
    "example_ja": "今日中に取引を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2821,
    "word": "estimate investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を見積もる",
    "example": "We need to estimate investment by the end of the day.",
    "example_ja": "今日中に投資を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2822,
    "word": "estimate tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を見積もる",
    "example": "We need to estimate tax by the end of the day.",
    "example_ja": "今日中に税金を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2823,
    "word": "estimate payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを見積もる",
    "example": "We need to estimate payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2824,
    "word": "estimate bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を見積もる",
    "example": "We need to estimate bill by the end of the day.",
    "example_ja": "今日中に請求書を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2825,
    "word": "estimate charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を見積もる",
    "example": "We need to estimate charge by the end of the day.",
    "example_ja": "今日中に料金を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2826,
    "word": "estimate rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を見積もる",
    "example": "We need to estimate rate by the end of the day.",
    "example_ja": "今日中に料金・率を見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2827,
    "word": "estimate estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを見積もる",
    "example": "We need to estimate estimate by the end of the day.",
    "example_ja": "今日中に見積りを見積もる必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2828,
    "word": "compare budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を比較する",
    "example": "We need to compare budget by the end of the day.",
    "example_ja": "今日中に予算を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2829,
    "word": "compare expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を比較する",
    "example": "We need to compare expense by the end of the day.",
    "example_ja": "今日中に費用を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2830,
    "word": "compare revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を比較する",
    "example": "We need to compare revenue by the end of the day.",
    "example_ja": "今日中に収益を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2831,
    "word": "compare profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を比較する",
    "example": "We need to compare profit by the end of the day.",
    "example_ja": "今日中に利益を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2832,
    "word": "compare sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を比較する",
    "example": "We need to compare sales by the end of the day.",
    "example_ja": "今日中に売上を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2833,
    "word": "compare cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を比較する",
    "example": "We need to compare cost by the end of the day.",
    "example_ja": "今日中に費用を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2834,
    "word": "compare price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を比較する",
    "example": "We need to compare price by the end of the day.",
    "example_ja": "今日中に価格を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2835,
    "word": "compare fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を比較する",
    "example": "We need to compare fee by the end of the day.",
    "example_ja": "今日中に料金を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2836,
    "word": "compare discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を比較する",
    "example": "We need to compare discount by the end of the day.",
    "example_ja": "今日中に割引を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2837,
    "word": "compare refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を比較する",
    "example": "We need to compare refund by the end of the day.",
    "example_ja": "今日中に返金を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2838,
    "word": "compare payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを比較する",
    "example": "We need to compare payment by the end of the day.",
    "example_ja": "今日中に支払いを比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2839,
    "word": "compare deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を比較する",
    "example": "We need to compare deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2840,
    "word": "compare balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を比較する",
    "example": "We need to compare balance by the end of the day.",
    "example_ja": "今日中に残高を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2841,
    "word": "compare account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を比較する",
    "example": "We need to compare account by the end of the day.",
    "example_ja": "今日中に口座を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2842,
    "word": "compare transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を比較する",
    "example": "We need to compare transaction by the end of the day.",
    "example_ja": "今日中に取引を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2843,
    "word": "compare investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を比較する",
    "example": "We need to compare investment by the end of the day.",
    "example_ja": "今日中に投資を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2844,
    "word": "compare tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を比較する",
    "example": "We need to compare tax by the end of the day.",
    "example_ja": "今日中に税金を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2845,
    "word": "compare payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを比較する",
    "example": "We need to compare payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2846,
    "word": "compare bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を比較する",
    "example": "We need to compare bill by the end of the day.",
    "example_ja": "今日中に請求書を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2847,
    "word": "compare charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を比較する",
    "example": "We need to compare charge by the end of the day.",
    "example_ja": "今日中に料金を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2848,
    "word": "compare rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を比較する",
    "example": "We need to compare rate by the end of the day.",
    "example_ja": "今日中に料金・率を比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2849,
    "word": "compare estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを比較する",
    "example": "We need to compare estimate by the end of the day.",
    "example_ja": "今日中に見積りを比較する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2850,
    "word": "approve budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を承認する",
    "example": "We need to approve budget by the end of the day.",
    "example_ja": "今日中に予算を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2851,
    "word": "approve expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を承認する",
    "example": "We need to approve expense by the end of the day.",
    "example_ja": "今日中に費用を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2852,
    "word": "approve revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を承認する",
    "example": "We need to approve revenue by the end of the day.",
    "example_ja": "今日中に収益を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2853,
    "word": "approve profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を承認する",
    "example": "We need to approve profit by the end of the day.",
    "example_ja": "今日中に利益を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2854,
    "word": "approve sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を承認する",
    "example": "We need to approve sales by the end of the day.",
    "example_ja": "今日中に売上を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2855,
    "word": "approve cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を承認する",
    "example": "We need to approve cost by the end of the day.",
    "example_ja": "今日中に費用を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2856,
    "word": "approve price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を承認する",
    "example": "We need to approve price by the end of the day.",
    "example_ja": "今日中に価格を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2857,
    "word": "approve fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を承認する",
    "example": "We need to approve fee by the end of the day.",
    "example_ja": "今日中に料金を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2858,
    "word": "approve discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を承認する",
    "example": "We need to approve discount by the end of the day.",
    "example_ja": "今日中に割引を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2859,
    "word": "approve refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を承認する",
    "example": "We need to approve refund by the end of the day.",
    "example_ja": "今日中に返金を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2860,
    "word": "approve payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを承認する",
    "example": "We need to approve payment by the end of the day.",
    "example_ja": "今日中に支払いを承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2861,
    "word": "approve deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を承認する",
    "example": "We need to approve deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2862,
    "word": "approve balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を承認する",
    "example": "We need to approve balance by the end of the day.",
    "example_ja": "今日中に残高を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2863,
    "word": "approve account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を承認する",
    "example": "We need to approve account by the end of the day.",
    "example_ja": "今日中に口座を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2864,
    "word": "approve transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を承認する",
    "example": "We need to approve transaction by the end of the day.",
    "example_ja": "今日中に取引を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2865,
    "word": "approve investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を承認する",
    "example": "We need to approve investment by the end of the day.",
    "example_ja": "今日中に投資を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2866,
    "word": "approve tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を承認する",
    "example": "We need to approve tax by the end of the day.",
    "example_ja": "今日中に税金を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2867,
    "word": "approve payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを承認する",
    "example": "We need to approve payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2868,
    "word": "approve bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を承認する",
    "example": "We need to approve bill by the end of the day.",
    "example_ja": "今日中に請求書を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2869,
    "word": "approve charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を承認する",
    "example": "We need to approve charge by the end of the day.",
    "example_ja": "今日中に料金を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2870,
    "word": "approve rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を承認する",
    "example": "We need to approve rate by the end of the day.",
    "example_ja": "今日中に料金・率を承認する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2871,
    "word": "record budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を記録する",
    "example": "We need to record budget by the end of the day.",
    "example_ja": "今日中に予算を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2872,
    "word": "record expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を記録する",
    "example": "We need to record expense by the end of the day.",
    "example_ja": "今日中に費用を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2873,
    "word": "record revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を記録する",
    "example": "We need to record revenue by the end of the day.",
    "example_ja": "今日中に収益を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2874,
    "word": "record profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を記録する",
    "example": "We need to record profit by the end of the day.",
    "example_ja": "今日中に利益を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2875,
    "word": "record sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を記録する",
    "example": "We need to record sales by the end of the day.",
    "example_ja": "今日中に売上を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2876,
    "word": "record cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を記録する",
    "example": "We need to record cost by the end of the day.",
    "example_ja": "今日中に費用を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2877,
    "word": "record price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を記録する",
    "example": "We need to record price by the end of the day.",
    "example_ja": "今日中に価格を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2878,
    "word": "record fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を記録する",
    "example": "We need to record fee by the end of the day.",
    "example_ja": "今日中に料金を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2879,
    "word": "record discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を記録する",
    "example": "We need to record discount by the end of the day.",
    "example_ja": "今日中に割引を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2880,
    "word": "record refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を記録する",
    "example": "We need to record refund by the end of the day.",
    "example_ja": "今日中に返金を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2881,
    "word": "record payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを記録する",
    "example": "We need to record payment by the end of the day.",
    "example_ja": "今日中に支払いを記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2882,
    "word": "record deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を記録する",
    "example": "We need to record deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2883,
    "word": "record balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を記録する",
    "example": "We need to record balance by the end of the day.",
    "example_ja": "今日中に残高を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2884,
    "word": "record account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を記録する",
    "example": "We need to record account by the end of the day.",
    "example_ja": "今日中に口座を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2885,
    "word": "record transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を記録する",
    "example": "We need to record transaction by the end of the day.",
    "example_ja": "今日中に取引を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2886,
    "word": "record investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を記録する",
    "example": "We need to record investment by the end of the day.",
    "example_ja": "今日中に投資を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2887,
    "word": "record tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を記録する",
    "example": "We need to record tax by the end of the day.",
    "example_ja": "今日中に税金を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2888,
    "word": "record payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを記録する",
    "example": "We need to record payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2889,
    "word": "record bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を記録する",
    "example": "We need to record bill by the end of the day.",
    "example_ja": "今日中に請求書を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2890,
    "word": "record charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を記録する",
    "example": "We need to record charge by the end of the day.",
    "example_ja": "今日中に料金を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2891,
    "word": "record rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を記録する",
    "example": "We need to record rate by the end of the day.",
    "example_ja": "今日中に料金・率を記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2892,
    "word": "record estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを記録する",
    "example": "We need to record estimate by the end of the day.",
    "example_ja": "今日中に見積りを記録する必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2893,
    "word": "reimburse budget",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "予算を払い戻す",
    "example": "We need to reimburse budget by the end of the day.",
    "example_ja": "今日中に予算を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2894,
    "word": "reimburse expense",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を払い戻す",
    "example": "We need to reimburse expense by the end of the day.",
    "example_ja": "今日中に費用を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2895,
    "word": "reimburse revenue",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "収益を払い戻す",
    "example": "We need to reimburse revenue by the end of the day.",
    "example_ja": "今日中に収益を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2896,
    "word": "reimburse profit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "利益を払い戻す",
    "example": "We need to reimburse profit by the end of the day.",
    "example_ja": "今日中に利益を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2897,
    "word": "reimburse sales",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "売上を払い戻す",
    "example": "We need to reimburse sales by the end of the day.",
    "example_ja": "今日中に売上を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2898,
    "word": "reimburse cost",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "費用を払い戻す",
    "example": "We need to reimburse cost by the end of the day.",
    "example_ja": "今日中に費用を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2899,
    "word": "reimburse price",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "価格を払い戻す",
    "example": "We need to reimburse price by the end of the day.",
    "example_ja": "今日中に価格を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2900,
    "word": "reimburse fee",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を払い戻す",
    "example": "We need to reimburse fee by the end of the day.",
    "example_ja": "今日中に料金を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2901,
    "word": "reimburse discount",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "割引を払い戻す",
    "example": "We need to reimburse discount by the end of the day.",
    "example_ja": "今日中に割引を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2902,
    "word": "reimburse refund",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "返金を払い戻す",
    "example": "We need to reimburse refund by the end of the day.",
    "example_ja": "今日中に返金を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2903,
    "word": "reimburse payment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支払いを払い戻す",
    "example": "We need to reimburse payment by the end of the day.",
    "example_ja": "今日中に支払いを払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2904,
    "word": "reimburse deposit",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "預金・前金を払い戻す",
    "example": "We need to reimburse deposit by the end of the day.",
    "example_ja": "今日中に預金・前金を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2905,
    "word": "reimburse balance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "残高を払い戻す",
    "example": "We need to reimburse balance by the end of the day.",
    "example_ja": "今日中に残高を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2906,
    "word": "reimburse account",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "口座を払い戻す",
    "example": "We need to reimburse account by the end of the day.",
    "example_ja": "今日中に口座を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2907,
    "word": "reimburse transaction",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "取引を払い戻す",
    "example": "We need to reimburse transaction by the end of the day.",
    "example_ja": "今日中に取引を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2908,
    "word": "reimburse investment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "投資を払い戻す",
    "example": "We need to reimburse investment by the end of the day.",
    "example_ja": "今日中に投資を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2909,
    "word": "reimburse tax",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "税金を払い戻す",
    "example": "We need to reimburse tax by the end of the day.",
    "example_ja": "今日中に税金を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2910,
    "word": "reimburse payroll",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "給与支払いを払い戻す",
    "example": "We need to reimburse payroll by the end of the day.",
    "example_ja": "今日中に給与支払いを払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2911,
    "word": "reimburse bill",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "請求書を払い戻す",
    "example": "We need to reimburse bill by the end of the day.",
    "example_ja": "今日中に請求書を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2912,
    "word": "reimburse charge",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金を払い戻す",
    "example": "We need to reimburse charge by the end of the day.",
    "example_ja": "今日中に料金を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2913,
    "word": "reimburse rate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "料金・率を払い戻す",
    "example": "We need to reimburse rate by the end of the day.",
    "example_ja": "今日中に料金・率を払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2914,
    "word": "reimburse estimate",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "見積りを払い戻す",
    "example": "We need to reimburse estimate by the end of the day.",
    "example_ja": "今日中に見積りを払い戻す必要がある。",
    "source": "会計・販売：動詞＋名詞"
  },
  {
    "id": 2915,
    "word": "repair office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "事務所を修理する",
    "example": "We need to repair office by the end of the day.",
    "example_ja": "今日中に事務所を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2916,
    "word": "repair branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支店を修理する",
    "example": "We need to repair branch by the end of the day.",
    "example_ja": "今日中に支店を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2917,
    "word": "repair facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "施設を修理する",
    "example": "We need to repair facility by the end of the day.",
    "example_ja": "今日中に施設を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2918,
    "word": "repair equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "設備を修理する",
    "example": "We need to repair equipment by the end of the day.",
    "example_ja": "今日中に設備を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2919,
    "word": "repair device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "装置を修理する",
    "example": "We need to repair device by the end of the day.",
    "example_ja": "今日中に装置を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2920,
    "word": "repair machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機械を修理する",
    "example": "We need to repair machine by the end of the day.",
    "example_ja": "今日中に機械を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2921,
    "word": "repair printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プリンタを修理する",
    "example": "We need to repair printer by the end of the day.",
    "example_ja": "今日中にプリンタを修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2922,
    "word": "repair computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンピュータを修理する",
    "example": "We need to repair computer by the end of the day.",
    "example_ja": "今日中にコンピュータを修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2923,
    "word": "repair laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ノートパソコンを修理する",
    "example": "We need to repair laptop by the end of the day.",
    "example_ja": "今日中にノートパソコンを修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2924,
    "word": "repair monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "モニターを修理する",
    "example": "We need to repair monitor by the end of the day.",
    "example_ja": "今日中にモニターを修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2925,
    "word": "repair phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を修理する",
    "example": "We need to repair phone by the end of the day.",
    "example_ja": "今日中に電話を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2926,
    "word": "repair desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "机を修理する",
    "example": "We need to repair desk by the end of the day.",
    "example_ja": "今日中に机を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2927,
    "word": "repair chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "椅子を修理する",
    "example": "We need to repair chair by the end of the day.",
    "example_ja": "今日中に椅子を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2928,
    "word": "repair warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "倉庫を修理する",
    "example": "We need to repair warehouse by the end of the day.",
    "example_ja": "今日中に倉庫を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2929,
    "word": "repair factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "工場を修理する",
    "example": "We need to repair factory by the end of the day.",
    "example_ja": "今日中に工場を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2930,
    "word": "repair laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研究室を修理する",
    "example": "We need to repair laboratory by the end of the day.",
    "example_ja": "今日中に研究室を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2931,
    "word": "repair entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "入口を修理する",
    "example": "We need to repair entrance by the end of the day.",
    "example_ja": "今日中に入口を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2932,
    "word": "repair elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "エレベーターを修理する",
    "example": "We need to repair elevator by the end of the day.",
    "example_ja": "今日中にエレベーターを修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2933,
    "word": "repair lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ロビーを修理する",
    "example": "We need to repair lobby by the end of the day.",
    "example_ja": "今日中にロビーを修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2934,
    "word": "repair parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "駐車場を修理する",
    "example": "We need to repair parking lot by the end of the day.",
    "example_ja": "今日中に駐車場を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2935,
    "word": "repair conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議室を修理する",
    "example": "We need to repair conference room by the end of the day.",
    "example_ja": "今日中に会議室を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2936,
    "word": "repair storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "保管室を修理する",
    "example": "We need to repair storage room by the end of the day.",
    "example_ja": "今日中に保管室を修理する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2937,
    "word": "install office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "事務所を設置する",
    "example": "We need to install office by the end of the day.",
    "example_ja": "今日中に事務所を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2938,
    "word": "install branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支店を設置する",
    "example": "We need to install branch by the end of the day.",
    "example_ja": "今日中に支店を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2939,
    "word": "install facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "施設を設置する",
    "example": "We need to install facility by the end of the day.",
    "example_ja": "今日中に施設を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2940,
    "word": "install equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "設備を設置する",
    "example": "We need to install equipment by the end of the day.",
    "example_ja": "今日中に設備を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2941,
    "word": "install device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "装置を設置する",
    "example": "We need to install device by the end of the day.",
    "example_ja": "今日中に装置を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2942,
    "word": "install machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機械を設置する",
    "example": "We need to install machine by the end of the day.",
    "example_ja": "今日中に機械を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2943,
    "word": "install printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プリンタを設置する",
    "example": "We need to install printer by the end of the day.",
    "example_ja": "今日中にプリンタを設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2944,
    "word": "install computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンピュータを設置する",
    "example": "We need to install computer by the end of the day.",
    "example_ja": "今日中にコンピュータを設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2945,
    "word": "install laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ノートパソコンを設置する",
    "example": "We need to install laptop by the end of the day.",
    "example_ja": "今日中にノートパソコンを設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2946,
    "word": "install monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "モニターを設置する",
    "example": "We need to install monitor by the end of the day.",
    "example_ja": "今日中にモニターを設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2947,
    "word": "install phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を設置する",
    "example": "We need to install phone by the end of the day.",
    "example_ja": "今日中に電話を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2948,
    "word": "install desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "机を設置する",
    "example": "We need to install desk by the end of the day.",
    "example_ja": "今日中に机を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2949,
    "word": "install chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "椅子を設置する",
    "example": "We need to install chair by the end of the day.",
    "example_ja": "今日中に椅子を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2950,
    "word": "install warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "倉庫を設置する",
    "example": "We need to install warehouse by the end of the day.",
    "example_ja": "今日中に倉庫を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2951,
    "word": "install factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "工場を設置する",
    "example": "We need to install factory by the end of the day.",
    "example_ja": "今日中に工場を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2952,
    "word": "install laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研究室を設置する",
    "example": "We need to install laboratory by the end of the day.",
    "example_ja": "今日中に研究室を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2953,
    "word": "install entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "入口を設置する",
    "example": "We need to install entrance by the end of the day.",
    "example_ja": "今日中に入口を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2954,
    "word": "install elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "エレベーターを設置する",
    "example": "We need to install elevator by the end of the day.",
    "example_ja": "今日中にエレベーターを設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2955,
    "word": "install lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ロビーを設置する",
    "example": "We need to install lobby by the end of the day.",
    "example_ja": "今日中にロビーを設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2956,
    "word": "install parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "駐車場を設置する",
    "example": "We need to install parking lot by the end of the day.",
    "example_ja": "今日中に駐車場を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2957,
    "word": "install conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議室を設置する",
    "example": "We need to install conference room by the end of the day.",
    "example_ja": "今日中に会議室を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2958,
    "word": "install storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "保管室を設置する",
    "example": "We need to install storage room by the end of the day.",
    "example_ja": "今日中に保管室を設置する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2959,
    "word": "replace office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "事務所を交換する",
    "example": "We need to replace office by the end of the day.",
    "example_ja": "今日中に事務所を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2960,
    "word": "replace branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支店を交換する",
    "example": "We need to replace branch by the end of the day.",
    "example_ja": "今日中に支店を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2961,
    "word": "replace facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "施設を交換する",
    "example": "We need to replace facility by the end of the day.",
    "example_ja": "今日中に施設を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2962,
    "word": "replace equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "設備を交換する",
    "example": "We need to replace equipment by the end of the day.",
    "example_ja": "今日中に設備を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2963,
    "word": "replace device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "装置を交換する",
    "example": "We need to replace device by the end of the day.",
    "example_ja": "今日中に装置を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2964,
    "word": "replace machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機械を交換する",
    "example": "We need to replace machine by the end of the day.",
    "example_ja": "今日中に機械を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2965,
    "word": "replace printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プリンタを交換する",
    "example": "We need to replace printer by the end of the day.",
    "example_ja": "今日中にプリンタを交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2966,
    "word": "replace computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンピュータを交換する",
    "example": "We need to replace computer by the end of the day.",
    "example_ja": "今日中にコンピュータを交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2967,
    "word": "replace laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ノートパソコンを交換する",
    "example": "We need to replace laptop by the end of the day.",
    "example_ja": "今日中にノートパソコンを交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2968,
    "word": "replace monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "モニターを交換する",
    "example": "We need to replace monitor by the end of the day.",
    "example_ja": "今日中にモニターを交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2969,
    "word": "replace phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を交換する",
    "example": "We need to replace phone by the end of the day.",
    "example_ja": "今日中に電話を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2970,
    "word": "replace desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "机を交換する",
    "example": "We need to replace desk by the end of the day.",
    "example_ja": "今日中に机を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2971,
    "word": "replace chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "椅子を交換する",
    "example": "We need to replace chair by the end of the day.",
    "example_ja": "今日中に椅子を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2972,
    "word": "replace warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "倉庫を交換する",
    "example": "We need to replace warehouse by the end of the day.",
    "example_ja": "今日中に倉庫を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2973,
    "word": "replace factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "工場を交換する",
    "example": "We need to replace factory by the end of the day.",
    "example_ja": "今日中に工場を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2974,
    "word": "replace laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研究室を交換する",
    "example": "We need to replace laboratory by the end of the day.",
    "example_ja": "今日中に研究室を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2975,
    "word": "replace entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "入口を交換する",
    "example": "We need to replace entrance by the end of the day.",
    "example_ja": "今日中に入口を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2976,
    "word": "replace elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "エレベーターを交換する",
    "example": "We need to replace elevator by the end of the day.",
    "example_ja": "今日中にエレベーターを交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2977,
    "word": "replace lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ロビーを交換する",
    "example": "We need to replace lobby by the end of the day.",
    "example_ja": "今日中にロビーを交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2978,
    "word": "replace parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "駐車場を交換する",
    "example": "We need to replace parking lot by the end of the day.",
    "example_ja": "今日中に駐車場を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2979,
    "word": "replace conference room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "会議室を交換する",
    "example": "We need to replace conference room by the end of the day.",
    "example_ja": "今日中に会議室を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2980,
    "word": "replace storage room",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "保管室を交換する",
    "example": "We need to replace storage room by the end of the day.",
    "example_ja": "今日中に保管室を交換する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2981,
    "word": "inspect office",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "事務所を点検する",
    "example": "We need to inspect office by the end of the day.",
    "example_ja": "今日中に事務所を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2982,
    "word": "inspect branch",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "支店を点検する",
    "example": "We need to inspect branch by the end of the day.",
    "example_ja": "今日中に支店を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2983,
    "word": "inspect facility",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "施設を点検する",
    "example": "We need to inspect facility by the end of the day.",
    "example_ja": "今日中に施設を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2984,
    "word": "inspect equipment",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "設備を点検する",
    "example": "We need to inspect equipment by the end of the day.",
    "example_ja": "今日中に設備を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2985,
    "word": "inspect device",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "装置を点検する",
    "example": "We need to inspect device by the end of the day.",
    "example_ja": "今日中に装置を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2986,
    "word": "inspect machine",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "機械を点検する",
    "example": "We need to inspect machine by the end of the day.",
    "example_ja": "今日中に機械を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2987,
    "word": "inspect printer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "プリンタを点検する",
    "example": "We need to inspect printer by the end of the day.",
    "example_ja": "今日中にプリンタを点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2988,
    "word": "inspect computer",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "コンピュータを点検する",
    "example": "We need to inspect computer by the end of the day.",
    "example_ja": "今日中にコンピュータを点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2989,
    "word": "inspect laptop",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ノートパソコンを点検する",
    "example": "We need to inspect laptop by the end of the day.",
    "example_ja": "今日中にノートパソコンを点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2990,
    "word": "inspect monitor",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "モニターを点検する",
    "example": "We need to inspect monitor by the end of the day.",
    "example_ja": "今日中にモニターを点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2991,
    "word": "inspect phone",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "電話を点検する",
    "example": "We need to inspect phone by the end of the day.",
    "example_ja": "今日中に電話を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2992,
    "word": "inspect desk",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "机を点検する",
    "example": "We need to inspect desk by the end of the day.",
    "example_ja": "今日中に机を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2993,
    "word": "inspect chair",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "椅子を点検する",
    "example": "We need to inspect chair by the end of the day.",
    "example_ja": "今日中に椅子を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2994,
    "word": "inspect warehouse",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "倉庫を点検する",
    "example": "We need to inspect warehouse by the end of the day.",
    "example_ja": "今日中に倉庫を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2995,
    "word": "inspect factory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "工場を点検する",
    "example": "We need to inspect factory by the end of the day.",
    "example_ja": "今日中に工場を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2996,
    "word": "inspect laboratory",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "研究室を点検する",
    "example": "We need to inspect laboratory by the end of the day.",
    "example_ja": "今日中に研究室を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2997,
    "word": "inspect entrance",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "入口を点検する",
    "example": "We need to inspect entrance by the end of the day.",
    "example_ja": "今日中に入口を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2998,
    "word": "inspect elevator",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "エレベーターを点検する",
    "example": "We need to inspect elevator by the end of the day.",
    "example_ja": "今日中にエレベーターを点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 2999,
    "word": "inspect lobby",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "ロビーを点検する",
    "example": "We need to inspect lobby by the end of the day.",
    "example_ja": "今日中にロビーを点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  },
  {
    "id": 3000,
    "word": "inspect parking lot",
    "pron": "",
    "level": "TOEIC600 phrase",
    "meaning": "駐車場を点検する",
    "example": "We need to inspect parking lot by the end of the day.",
    "example_ja": "今日中に駐車場を点検する必要がある。",
    "source": "職場・設備：動詞＋名詞"
  }
];
