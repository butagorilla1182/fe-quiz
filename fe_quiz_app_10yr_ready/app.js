
const STORAGE_KEY = "fe_quiz_app_v2";
const IMPORT_KEY = "fe_quiz_imported_questions_v1";

const state = {
  mode: "random",
  queue: [],
  index: 0,
  answered: false,
  data: loadData(),
  allQuestions: loadQuestions()
};

function loadQuestions() {
  try {
    const imported = JSON.parse(localStorage.getItem(IMPORT_KEY));
    if (Array.isArray(imported) && imported.length > 0) return imported;
  } catch {}
  return QUESTIONS;
}

function activeQuestions() {
  const filter = document.getElementById("categoryFilter")?.value || "";
  return state.allQuestions.filter(q => !filter || q.category === filter);
}

function loadData() {
  const initial = { studied: 0, correct: 0, wrong: 0, wrongIds: [], savedIds: [], history: {} };
  try {
    return { ...initial, ...(JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}) };
  } catch {
    return initial;
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.data));
  updateStats();
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function updateStats() {
  const qs = activeQuestions();
  document.getElementById("totalCount").textContent = qs.length;
  document.getElementById("randomCount").textContent = qs.length;
  refreshCategoryFilter();
  document.getElementById("studied").textContent = state.data.studied;
  document.getElementById("correct").textContent = state.data.correct;
  document.getElementById("wrong").textContent = state.data.wrong;
  document.getElementById("saved").textContent = state.data.savedIds.length;
  document.getElementById("wrongCount").textContent = state.data.wrongIds.length;
  document.getElementById("savedCount").textContent = state.data.savedIds.length;
}

function startMode(mode) {
  state.mode = mode;
  state.index = 0;
  state.answered = false;

  const qs = activeQuestions();
  if (mode === "random") state.queue = shuffle(qs);
  if (mode === "order") state.queue = [...qs];
  if (mode === "wrong") state.queue = qs.filter(q => state.data.wrongIds.includes(q.id));
  if (mode === "saved") state.queue = qs.filter(q => state.data.savedIds.includes(q.id));

  if (state.queue.length === 0) {
    alert("まだ対象の問題がありません。まずはランダム出題で解いてみてください。");
    return;
  }

  document.getElementById("home").classList.add("hidden");
  document.getElementById("menu").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  state.answered = false;
  const q = state.queue[state.index];

  document.getElementById("progress").textContent = `${state.index + 1} / ${state.queue.length}`;
  document.getElementById("category").textContent = q.category;
  document.getElementById("source").textContent = q.source ? `出典：${q.source}` : "";
  document.getElementById("question").textContent = `Q${String(q.id).padStart(3, "0")}　${q.question}`;
  document.getElementById("result").className = "result hidden";
  document.getElementById("nextBtn").classList.add("hidden");

  const saveBtn = document.getElementById("saveBtn");
  const saved = state.data.savedIds.includes(q.id);
  saveBtn.textContent = saved ? "★ 保存中" : "☆ 保存";
  saveBtn.classList.toggle("saved", saved);

  const choices = document.getElementById("choices");
  choices.innerHTML = "";
  q.choices.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = `${String.fromCharCode(65 + i)}. ${text}`;
    btn.onclick = () => answer(i);
    choices.appendChild(btn);
  });
}

function answer(choiceIndex) {
  if (state.answered) return;
  state.answered = true;

  const q = state.queue[state.index];
  const isCorrect = choiceIndex === q.answer;

  state.data.studied += 1;
  if (isCorrect) {
    state.data.correct += 1;
    state.data.wrongIds = state.data.wrongIds.filter(id => id !== q.id);
  } else {
    state.data.wrong += 1;
    if (!state.data.wrongIds.includes(q.id)) state.data.wrongIds.push(q.id);
  }
  state.data.history[q.id] = { lastCorrect: isCorrect, at: new Date().toISOString() };

  const buttons = [...document.querySelectorAll(".choice")];
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.answer) btn.classList.add("correct");
    if (i === choiceIndex && !isCorrect) btn.classList.add("wrong");
  });

  const result = document.getElementById("result");
  result.className = `result ${isCorrect ? "ok" : "ng"}`;
  result.innerHTML = `<strong>${isCorrect ? "正解！" : "不正解"}</strong><br>${q.explanation}`;

  document.getElementById("nextBtn").classList.remove("hidden");
  saveData();
}

function nextQuestion() {
  state.index += 1;
  if (state.index >= state.queue.length) {
    alert("このモードの問題が終わりました。お疲れさま！");
    backHome();
    return;
  }
  showQuestion();
}

function toggleSave() {
  const q = state.queue[state.index];
  const ids = state.data.savedIds;
  if (ids.includes(q.id)) {
    state.data.savedIds = ids.filter(id => id !== q.id);
  } else {
    state.data.savedIds.push(q.id);
  }
  saveData();
  showQuestion();
}

function backHome() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("menu").classList.remove("hidden");
  updateStats();
}

function refreshCategoryFilter() {
  const select = document.getElementById("categoryFilter");
  if (!select) return;
  const current = select.value;
  const cats = [...new Set(state.allQuestions.map(q => q.category || "未分類"))].sort();
  const html = '<option value="">全カテゴリ</option>' + cats.map(c => `<option value="${c}">${c}</option>`).join("");
  if (select.dataset.html !== html) {
    select.innerHTML = html;
    select.dataset.html = html;
    select.value = cats.includes(current) ? current : "";
  }
}

function normalizeImportedQuestions(raw) {
  if (!Array.isArray(raw)) throw new Error("JSONの最上位は配列にしてください。");
  return raw.map((q, idx) => {
    if (!q.question || !Array.isArray(q.choices) || q.choices.length < 2 || q.answer === undefined) {
      throw new Error(`${idx + 1}問目の形式が違います。question, choices, answer が必要です。`);
    }
    return {
      id: q.id ?? idx + 1,
      category: q.category || "未分類",
      source: q.source || "",
      question: q.question,
      choices: q.choices,
      answer: Number(q.answer),
      explanation: q.explanation || ""
    };
  });
}

document.getElementById("importFile")?.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const imported = normalizeImportedQuestions(JSON.parse(text));
    localStorage.setItem(IMPORT_KEY, JSON.stringify(imported));
    state.allQuestions = imported;
    state.data.wrongIds = [];
    state.data.savedIds = [];
    saveData();
    alert(`${imported.length}問を読み込みました。`);
  } catch (e) {
    alert("読み込み失敗：" + e.message);
  } finally {
    event.target.value = "";
  }
});

document.getElementById("resetImport")?.addEventListener("click", () => {
  localStorage.removeItem(IMPORT_KEY);
  state.allQuestions = QUESTIONS;
  state.data.wrongIds = [];
  state.data.savedIds = [];
  saveData();
  alert("初期30問に戻しました。");
});

document.getElementById("categoryFilter")?.addEventListener("change", updateStats);

document.querySelectorAll(".mode").forEach(btn => {
  btn.addEventListener("click", () => startMode(btn.dataset.mode));
});
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("saveBtn").addEventListener("click", toggleSave);
document.getElementById("backBtn").addEventListener("click", backHome);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => document.getElementById("offline").textContent = "オフライン準備完了。ホーム画面に追加できます")
    .catch(() => document.getElementById("offline").textContent = "通常モードで利用中です");
}

updateStats();
