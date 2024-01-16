const averageA = document.getElementById("title-average-a");
const averageB = document.getElementById("title-average-b");
const averageC = document.getElementById("title-average-c");
const averageD = document.getElementById("title-average-d");
const averageE = document.getElementById("title-average-e");
const averageF = document.getElementById("title-average-f");
const averageG = document.getElementById("title-average-g");
const averageH = document.getElementById("title-average-h");
const averageTotal = document.getElementById("average-total");

const clearA = document.getElementById("clearA");
const clearB = document.getElementById("clearB");
const clearC = document.getElementById("clearC");
const clearD = document.getElementById("clearD");
const clearE = document.getElementById("clearE");
const clearF = document.getElementById("clearF");
const clearG = document.getElementById("clearG");
const clearH = document.getElementById("clearH");
const clearAll = document.getElementById("clearAll");

const saveA = document.getElementById("saveA");
const saveB = document.getElementById("saveB");
const saveC = document.getElementById("saveC");
const saveD = document.getElementById("saveD");
const saveE = document.getElementById("saveE");
const saveF = document.getElementById("saveF");
const saveG = document.getElementById("saveG");
const saveH = document.getElementById("saveH");
const saveAll = document.getElementById("saveAll");

const answers = document.getElementById("answers");
const summary = document.getElementById("summary");

const summaryScoreA = document.getElementById("summary-score-a");
const summaryScoreB = document.getElementById("summary-score-b");
const summaryScoreC = document.getElementById("summary-score-c");
const summaryScoreD = document.getElementById("summary-score-d");
const summaryScoreE = document.getElementById("summary-score-e");
const summaryScoreF = document.getElementById("summary-score-f");
const summaryScoreG = document.getElementById("summary-score-g");
const summaryScoreH = document.getElementById("summary-score-h");
const summaryScoreT = document.getElementById("summary-score-t");

const scoreCircleA = document.getElementById("score-circle-a");
const scoreCircleB = document.getElementById("score-circle-b");
const scoreCircleC = document.getElementById("score-circle-c");
const scoreCircleD = document.getElementById("score-circle-d");
const scoreCircleE = document.getElementById("score-circle-e");
const scoreCircleF = document.getElementById("score-circle-f");
const scoreCircleG = document.getElementById("score-circle-g");
const scoreCircleH = document.getElementById("score-circle-h");
const scoreCircleT = document.getElementById("score-circle-t");
const verticalLine = document.getElementById("vertical-line");

const segmentWidth = verticalLine.offsetWidth;

let totalAverageA = null;
let totalAverageB = null;
let totalAverageC = null;
let totalAverageD = null;
let totalAverageE = null;
let totalAverageF = null;
let totalAverageG = null;
let totalAverageH = null;

for (let i = 1; i <= 55; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);
}

for (let i = 1; i <= 7; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);

  currentQuestionElement.addEventListener("change", function () {
    if (
      q1.value != "" &&
      q2.value != "" &&
      q3.value != "" &&
      q4.value != "" &&
      q5.value != "" &&
      q6.value != "" &&
      q7.value != ""
    ) {
      const totalA =
        parseInt(q1.value, 0) +
        parseInt(q2.value, 0) +
        parseInt(q3.value, 0) +
        parseInt(q4.value, 0) +
        parseInt(q5.value, 0) +
        parseInt(q6.value, 0) +
        parseInt(q7.value, 0);
      averageA.innerHTML = (totalA / 7).toFixed(1);
      totalAverageA = (totalA / 7).toFixed(1);
    } else {
      averageA.innerHTML = "-";
      totalAverageA = null;
    }
    calculateScore();
  });
}

for (let i = 8; i <= 14; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);

  currentQuestionElement.addEventListener("change", function () {
    if (
      q8.value != "" &&
      q9.value != "" &&
      q10.value != "" &&
      q11.value != "" &&
      q12.value != "" &&
      q13.value != "" &&
      q14.value != ""
    ) {
      const totalB =
        parseInt(q8.value, 0) +
        parseInt(q9.value, 0) +
        parseInt(q10.value, 0) +
        parseInt(q11.value, 0) +
        parseInt(q12.value, 0) +
        parseInt(q13.value, 0) +
        parseInt(q14.value, 0);
      averageB.innerHTML = (totalB / 7).toFixed(1);
      totalAverageB = (totalB / 7).toFixed(1);
    } else {
      averageB.innerHTML = "-";
      totalAverageB = null;
    }
    calculateScore();
  });
}

for (let i = 15; i <= 19; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);

  currentQuestionElement.addEventListener("change", function () {
    if (
      q15.value != "" &&
      q16.value != "" &&
      q17.value != "" &&
      q18.value != "" &&
      q19.value != ""
    ) {
      const totalC =
        parseInt(q15.value, 0) +
        parseInt(q16.value, 0) +
        parseInt(q17.value, 0) +
        parseInt(q18.value, 0) +
        parseInt(q19.value, 0);
      averageC.innerHTML = (totalC / 5).toFixed(1);
      totalAverageC = (totalC / 5).toFixed(1);
    } else {
      averageC.innerHTML = "-";
      totalAverageC = null;
    }
    calculateScore();
  });
}

for (let i = 20; i <= 25; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);

  currentQuestionElement.addEventListener("change", function () {
    if (
      q20.value != "" &&
      q21.value != "" &&
      q22.value != "" &&
      q23.value != "" &&
      q24.value != "" &&
      q25.value != ""
    ) {
      const totalD =
        parseInt(q20.value, 0) +
        parseInt(q21.value, 0) +
        parseInt(q22.value, 0) +
        parseInt(q23.value, 0) +
        parseInt(q24.value, 0) +
        parseInt(q25.value, 0);
      averageD.innerHTML = (totalD / 6).toFixed(1);
      totalAverageD = (totalD / 6).toFixed(1);
    } else {
      averageD.innerHTML = "-";
      totalAverageD = null;
    }
    calculateScore();
  });
}

for (let i = 26; i <= 32; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);

  currentQuestionElement.addEventListener("change", function () {
    if (
      q26.value != "" &&
      q27.value != "" &&
      q28.value != "" &&
      q29.value != "" &&
      q30.value != "" &&
      q31.value != "" &&
      q32.value != ""
    ) {
      const totalE =
        parseInt(q26.value, 0) +
        parseInt(q27.value, 0) +
        parseInt(q28.value, 0) +
        parseInt(q29.value, 0) +
        parseInt(q30.value, 0) +
        parseInt(q31.value, 0) +
        parseInt(q32.value, 0);
      averageE.innerHTML = (totalE / 7).toFixed(1);
      totalAverageE = (totalE / 7).toFixed(1);
    } else {
      averageE.innerHTML = "-";
      totalAverageE = null;
    }
    calculateScore();
  });
}

for (let i = 33; i <= 39; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);

  currentQuestionElement.addEventListener("change", function () {
    if (
      q33.value != "" &&
      q34.value != "" &&
      q35.value != "" &&
      q36.value != "" &&
      q37.value != "" &&
      q38.value != "" &&
      q39.value != ""
    ) {
      const totalF =
        parseInt(q33.value, 0) +
        parseInt(q34.value, 0) +
        parseInt(q35.value, 0) +
        parseInt(q36.value, 0) +
        parseInt(q37.value, 0) +
        parseInt(q38.value, 0) +
        parseInt(q39.value, 0);
      averageF.innerHTML = (totalF / 7).toFixed(1);
      totalAverageF = (totalF / 7).toFixed(1);
    } else {
      averageF.innerHTML = "-";
      totalAverageF = null;
    }
    calculateScore();
  });
}

for (let i = 40; i <= 45; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);

  currentQuestionElement.addEventListener("change", function () {
    if (
      q40.value != "" &&
      q41.value != "" &&
      q42.value != "" &&
      q43.value != "" &&
      q44.value != "" &&
      q45.value != ""
    ) {
      const totalG =
        parseInt(q40.value, 0) +
        parseInt(q41.value, 0) +
        parseInt(q42.value, 0) +
        parseInt(q43.value, 0) +
        parseInt(q44.value, 0) +
        parseInt(q45.value, 0);
      averageG.innerHTML = (totalG / 6).toFixed(1);
      totalAverageG = (totalG / 6).toFixed(1);
    } else {
      averageG.innerHTML = "-";
      totalAverageG = null;
    }
    calculateScore();
  });
}

for (let i = 46; i <= 55; i++) {
  const currentQuestionId = "q" + i;
  const currentQuestionElement = document.getElementById(currentQuestionId);

  currentQuestionElement.addEventListener("change", function () {
    if (
      q46.value != "" &&
      q47.value != "" &&
      q48.value != "" &&
      q49.value != "" &&
      q50.value != "" &&
      q51.value != "" &&
      q52.value != "" &&
      q53.value != "" &&
      q54.value != "" &&
      q55.value != ""
    ) {
      const totalH =
        parseInt(q46.value, 0) +
        parseInt(q47.value, 0) +
        parseInt(q48.value, 0) +
        parseInt(q49.value, 0) +
        parseInt(q50.value, 0) +
        parseInt(q51.value, 0) +
        parseInt(q52.value, 0) +
        parseInt(q53.value, 0) +
        parseInt(q54.value, 0) +
        parseInt(q55.value, 0);
      averageH.innerHTML = (totalH / 10).toFixed(1);
      totalAverageH = (totalH / 10).toFixed(1);
    } else {
      averageH.innerHTML = "-";
      totalAverageH = null;
    }
    calculateScore();
  });
}

function calculateScore() {
  if (
    totalAverageA &&
    totalAverageB &&
    totalAverageC &&
    totalAverageD &&
    totalAverageE &&
    totalAverageF &&
    totalAverageG &&
    totalAverageH
  ) {
    const totalAnswers =
      parseFloat(totalAverageA) +
      parseFloat(totalAverageB) +
      parseFloat(totalAverageC) +
      parseFloat(totalAverageD) +
      parseFloat(totalAverageE) +
      parseFloat(totalAverageF) +
      parseFloat(totalAverageG) +
      parseFloat(totalAverageH);
    averageTotal.innerHTML = (totalAnswers / 8).toFixed(2);
  } else {
    averageTotal.innerHTML = "-";
  }

  if (averageTotal.innerHTML === "-") {
    summaryScoreT.innerHTML = "";
    scoreCircleT.style.display = "none";
  } else {
    summaryScoreT.innerHTML = averageTotal.innerHTML;
    scoreCircleT.style.display = "block";
    scoreCircleT.style.left =
      (parseFloat(summaryScoreT.innerHTML) / 8) * 100 + `%`;
    scoreCircleT.style.transform = `translateX(${segmentWidth - 10}px)`;
  }

  if (totalAverageA === null) {
    scoreCircleA.style.display = "none";
    summaryScoreA.innerHTML = "-";
  } else {
    summaryScoreA.innerHTML = totalAverageA;
    scoreCircleA.style.display = "block";
    scoreCircleA.style.left = (totalAverageA / 8) * 100 + `%`;
    scoreCircleA.style.transform = `translateX(${segmentWidth - 10}px)`;
  }

  if (totalAverageB === null) {
    scoreCircleB.style.display = "none";
    summaryScoreB.innerHTML = "-";
  } else {
    summaryScoreB.innerHTML = totalAverageB;
    scoreCircleB.style.display = "block";
    scoreCircleB.style.left = (totalAverageB / 8) * 100 + `%`;
    scoreCircleB.style.transform = `translateX(${segmentWidth - 10}px)`;
  }

  if (totalAverageC === null) {
    scoreCircleC.style.display = "none";
    summaryScoreC.innerHTML = "-";
  } else {
    summaryScoreC.innerHTML = totalAverageC;
    scoreCircleC.style.display = "block";
    scoreCircleC.style.left = (totalAverageC / 8) * 100 + `%`;
    scoreCircleC.style.transform = `translateX(${segmentWidth - 10}px)`;
  }

  if (totalAverageD === null) {
    scoreCircleD.style.display = "none";
    summaryScoreD.innerHTML = "-";
  } else {
    summaryScoreD.innerHTML = totalAverageD;
    scoreCircleD.style.display = "block";
    scoreCircleD.style.left = (totalAverageD / 8) * 100 + `%`;
    scoreCircleD.style.transform = `translateX(${segmentWidth - 10}px)`;
  }

  if (totalAverageE === null) {
    scoreCircleE.style.display = "none";
    summaryScoreE.innerHTML = "-";
  } else {
    summaryScoreE.innerHTML = totalAverageE;
    scoreCircleE.style.display = "block";
    scoreCircleE.style.left = (totalAverageE / 8) * 100 + `%`;
    scoreCircleE.style.transform = `translateX(${segmentWidth - 10}px)`;
  }
  if (totalAverageF === null) {
    scoreCircleF.style.display = "none";
    summaryScoreF.innerHTML = "-";
  } else {
    summaryScoreF.innerHTML = totalAverageF;
    scoreCircleF.style.display = "block";
    scoreCircleF.style.left = (totalAverageF / 8) * 100 + `%`;
    scoreCircleF.style.transform = `translateX(${segmentWidth - 10}px)`;
  }

  if (totalAverageG === null) {
    scoreCircleG.style.display = "none";
    summaryScoreG.innerHTML = "-";
  } else {
    summaryScoreG.innerHTML = totalAverageG;
    scoreCircleG.style.display = "block";
    scoreCircleG.style.left = (totalAverageG / 8) * 100 + `%`;
    scoreCircleG.style.transform = `translateX(${segmentWidth - 10}px)`;
  }

  if (totalAverageH === null) {
    scoreCircleH.style.display = "none";
    summaryScoreH.innerHTML = "-";
  } else {
    summaryScoreH.innerHTML = totalAverageH;
    scoreCircleH.style.display = "block";
    scoreCircleH.style.left = (totalAverageH / 8) * 100 + `%`;
    scoreCircleH.style.transform = `translateX(${segmentWidth - 10}px)`;
  }
}

clearA.addEventListener("click", function () {
  for (let i = 1; i <= 7; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

clearB.addEventListener("click", function () {
  for (let i = 8; i <= 14; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

clearC.addEventListener("click", function () {
  for (let i = 15; i <= 19; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

clearD.addEventListener("click", function () {
  for (let i = 20; i <= 25; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

clearE.addEventListener("click", function () {
  for (let i = 26; i <= 32; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

clearF.addEventListener("click", function () {
  for (let i = 33; i <= 39; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

clearG.addEventListener("click", function () {
  for (let i = 40; i <= 45; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

clearH.addEventListener("click", function () {
  for (let i = 46; i <= 55; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

clearAll.addEventListener("click", function () {
  for (let i = 1; i <= 55; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    currentQuestionElement.value = "";
    const event = new Event("change", { bubbles: true });
    currentQuestionElement.dispatchEvent(event);
  }
});

saveA.addEventListener("click", function () {
  saveFormData();
});

saveB.addEventListener("click", function () {
  saveFormData();
});

saveC.addEventListener("click", function () {
  saveFormData();
});

saveD.addEventListener("click", function () {
  saveFormData();
});

saveE.addEventListener("click", function () {
  saveFormData();
});

saveF.addEventListener("click", function () {
  saveFormData();
});

saveG.addEventListener("click", function () {
  saveFormData();
});

saveH.addEventListener("click", function () {
  saveFormData();
});

saveAll.addEventListener("click", function () {
  saveFormData();
});

function saveFormData() {
  const formData = {};

  for (let i = 1; i <= 55; i++) {
    const currentQuestionId = "q" + i;
    const currentQuestionElement = document.getElementById(currentQuestionId);

    if (currentQuestionElement) {
      formData[currentQuestionId] = currentQuestionElement.value;
    }
  }

  localStorage.setItem("formData", JSON.stringify(formData));
}

function loadFormDataOnLoad() {
  loadFormData();
}

function loadFormData() {
  const savedData = localStorage.getItem("formData");

  if (savedData) {
    const formData = JSON.parse(savedData);

    for (let i = 1; i <= 55; i++) {
      const currentQuestionId = "q" + i;
      const currentQuestionElement = document.getElementById(currentQuestionId);

      currentQuestionElement.value = formData[currentQuestionId];

      const event = new Event("change", { bubbles: true });
      currentQuestionElement.dispatchEvent(event);
    }
  }
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

function handleIntersection(entries) {
  const summaryEntry = entries[0];
  if (summaryEntry.isIntersecting) {
    // "summary" is in view, hide "answers"
    answers.style.display = "none";
  } else {
    // "summary" is out of view, show "answers"
    answers.style.display = "block";
  }
}

const observer = new IntersectionObserver(handleIntersection, options);
observer.observe(summary);
