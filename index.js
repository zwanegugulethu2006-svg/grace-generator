const generateBtn = document.getElementById('generate-btn');
const clearBtn = document.getElementById('clear-btn');
const outputText = document.getElementById('output-text');
const userFeeling = document.getElementById('user-feeling');
const subtitle = document.querySelector('.subtitle');

function typeSubtitle(text, element, speed = 100) {
  element.textContent = '';
  let i = 0;
  const typing = () => {
    if(i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

typeSubtitle("A gentle space for your heart 💕", subtitle, 80);

const prayers = {
  stressed: {
    prayer: "Lord, calm my anxious heart and give me peace.",
    verse: "Matthew 11:28",
    encouragement: "Rest in God’s promises."
  },
  anxious: {
    prayer: "Lord, strengthen my mind and guide my steps.",
    verse: "Philippians 4:13",
    encouragement: "You are capable and loved."
  },
  grateful: {
    prayer: "Lord, thank you for your endless blessings.",
    verse: "1 Thessalonians 5:18",
    encouragement: "Keep your heart full of joy."
  }
};

function typeAnswer(text, element, speed = 30) {
  element.innerHTML = '';
  let i = 0;
  const typing = () => {
    if(i < text.length) {
      element.innerHTML += text[i];
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

generateBtn.addEventListener('click', () => {
  const feeling = userFeeling.value.toLowerCase().trim();
  if(prayers[feeling]){
    const p = prayers[feeling];
    const answer = `
      <strong>Prayer:</strong> ${p.prayer} <br>
      <strong>Verse:</strong> ${p.verse} <br>
      <strong>Encouragement:</strong> ${p.encouragement}
    `;
    typeAnswer(answer, outputText, 30);
  } else {
    typeAnswer("Sorry 💔, I don't have a prayer for that feeling yet. Try stressed, anxious, or grateful!", outputText, 30);
  }
});

clearBtn.addEventListener('click', () => {
  userFeeling.value = '';
  outputText.textContent = "Your prayer and verse will appear here...";
});

userFeeling.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') {
    generateBtn.click();
  }
});