const generateBtn = document.getElementById("generateBtn");
const clearBtn = document.getElementById("clearBtn");
const outputText = document.getElementById("output-text");
const userFeeling = document.getElementById("feelingInput");
const subtitle = document.querySelector(".subtitle");

function typeSubtitle(text, element, speed = 80) {
  element.textContent = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

typeSubtitle("A gentle space for your heart 💕", subtitle);

function typeAnswer(text, element, speed = 25) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text[i];
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

function showGrace(response) {
  let aiText = response.data.answer;
  typeAnswer(aiText, outputText);
}

function generateGrace() {
  let feeling = userFeeling.value.trim();

  if (feeling === "") {
    typeAnswer("Please enter how you feel first 💕", outputText);
    return;
  }

  outputText.innerHTML = "🌸 Grace is on the way...";

  let apiKey = "49cf0a69t34a20oddf219c8dbeb93ab8";

  let context =
    "You are a comforting Christian assistant. Give a short prayer, one Bible verse, and one encouraging sentence.";

  let prompt = `The user feels ${feeling}. Give a prayer, Bible verse, and encouragement.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  axios.get(apiUrl).then(showGrace).catch(() => {
    typeAnswer("Sorry 💔 something went wrong with the AI.", outputText);
  });
}

generateBtn.addEventListener("click", generateGrace);

clearBtn.addEventListener("click", function () {
  userFeeling.value = "";
  outputText.innerHTML = "Your prayer and verse will appear here...";
});

userFeeling.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateGrace();
  }
});