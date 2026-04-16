import { sets } from './exercises/index.js';

const nav = document.getElementById('set-nav');
const container = document.getElementById('exercises');

let activeSetId = sets[0].id;

function renderNav() {
  nav.innerHTML = '';
  sets.forEach(set => {
    const btn = document.createElement('button');
    btn.className = 'set-btn' + (set.id === activeSetId ? ' active' : '');
    btn.textContent = set.title;
    btn.addEventListener('click', () => {
      activeSetId = set.id;
      render();
    });
    nav.appendChild(btn);
  });
}

function renderExercises() {
  const activeSet = sets.find(s => s.id === activeSetId);
  container.innerHTML = '';

  activeSet.exercises.forEach((ex, i) => {
    const card = document.createElement('section');
    card.className = 'exercise';

    const header = document.createElement('div');
    header.className = 'exercise-header';
    header.innerHTML = `
      <span class="exercise-number">Problem ${i + 1}</span>
      <span class="exercise-topic">${ex.topic}</span>
    `;
    card.appendChild(header);

    if (ex.prompt) {
      const p = document.createElement('div');
      p.className = 'exercise-prompt';
      p.innerHTML = ex.prompt;
      card.appendChild(p);
    }

    if (ex.code) {
      const pre = document.createElement('pre');
      pre.className = 'code';
      const c = document.createElement('code');
      c.textContent = ex.code;
      pre.appendChild(c);
      card.appendChild(pre);
    }

    if (ex.question) {
      const q = document.createElement('p');
      q.className = 'exercise-question';
      q.innerHTML = ex.question;
      card.appendChild(q);
    }

    const btn = document.createElement('button');
    btn.className = 'show-answer-btn';
    btn.textContent = 'Show Answer';
    btn.addEventListener('click', () => toggleAnswer(card, btn, ex));
    card.appendChild(btn);

    container.appendChild(card);
  });
}

function toggleAnswer(card, btn, ex) {
  const existing = card.querySelector('.answer');
  if (existing) {
    existing.remove();
    btn.textContent = 'Show Answer';
    return;
  }

  const ans = document.createElement('div');
  ans.className = 'answer';

  const label = document.createElement('div');
  label.className = 'answer-label';
  label.textContent = 'ANSWER';
  ans.appendChild(label);

  if (ex.answer) {
    const text = document.createElement('div');
    text.innerHTML = ex.answer;
    ans.appendChild(text);
  }

  if (ex.answerCode) {
    const pre = document.createElement('pre');
    pre.className = 'code';
    const c = document.createElement('code');
    c.textContent = ex.answerCode;
    pre.appendChild(c);
    ans.appendChild(pre);
  }

  if (ex.explanation) {
    const exp = document.createElement('div');
    exp.className = 'answer-explanation';
    exp.innerHTML = ex.explanation;
    ans.appendChild(exp);
  }

  card.appendChild(ans);
  btn.textContent = 'Hide Answer';
}

function render() {
  renderNav();
  renderExercises();
}

render();
