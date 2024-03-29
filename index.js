const averageA = document.getElementById("title-average-a");
const averageB = document.getElementById("title-average-b");
const averageC = document.getElementById("title-average-c");
const averageD = document.getElementById("title-average-d");
const averageE = document.getElementById("title-average-e");
const averageF = document.getElementById("title-average-f");
const averageG = document.getElementById("title-average-g");
const averageH = document.getElementById("title-average-h");
const averageTotal = document.getElementById("average-total");

const pdfaverageA = document.getElementById("pdf-summary-a");
const pdfaverageB = document.getElementById("pdf-summary-b");
const pdfaverageC = document.getElementById("pdf-summary-c");
const pdfaverageD = document.getElementById("pdf-summary-d");
const pdfaverageE = document.getElementById("pdf-summary-e");
const pdfaverageF = document.getElementById("pdf-summary-f");
const pdfaverageG = document.getElementById("pdf-summary-g");
const pdfaverageH = document.getElementById("pdf-summary-h");
const pdfaverageTotal = document.getElementById("pdf-summary-t");
const pdfquestionsContainer = document.getElementById(
  "pdf-questions-container"
);
const pdfaverageScoreA = document.getElementById("pdf-summary-score-a");
const pdfaverageScoreB = document.getElementById("pdf-summary-score-b");
const pdfaverageScoreC = document.getElementById("pdf-summary-score-c");
const pdfaverageScoreD = document.getElementById("pdf-summary-score-d");
const pdfaverageScoreE = document.getElementById("pdf-summary-score-e");
const pdfaverageScoreF = document.getElementById("pdf-summary-score-f");
const pdfaverageScoreG = document.getElementById("pdf-summary-score-g");
const pdfaverageScoreH = document.getElementById("pdf-summary-score-h");
const pdfaverageScoreT = document.getElementById("pdf-summary-score-t");

const questions = document.querySelectorAll(".question-text");

const clearA = document.getElementById("clearA");
const clearB = document.getElementById("clearB");
const clearC = document.getElementById("clearC");
const clearD = document.getElementById("clearD");
const clearE = document.getElementById("clearE");
const clearF = document.getElementById("clearF");
const clearG = document.getElementById("clearG");
const clearH = document.getElementById("clearH");
const clearAll = document.getElementById("clearAll");
const showKey = document.getElementById("showKey");

const saveA = document.getElementById("saveA");
const saveB = document.getElementById("saveB");
const saveC = document.getElementById("saveC");
const saveD = document.getElementById("saveD");
const saveE = document.getElementById("saveE");
const saveF = document.getElementById("saveF");
const saveG = document.getElementById("saveG");
const saveH = document.getElementById("saveH");
const saveAll = document.getElementById("saveAll");
const saveToPDF = document.getElementById("savetoPDF");
const element = document.getElementById("element");

const answers = document.getElementById("answers");
const answersPara = document.getElementById("para-answers");
const answersShow = document.getElementById("answers-show");
const answersHide = document.getElementById("answers-hide");
const summary = document.getElementById("summary");
const key = document.getElementById("key");

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

const scoreLineA = document.getElementById("score-line-a");
const scoreLineB = document.getElementById("score-line-b");
const scoreLineC = document.getElementById("score-line-c");
const scoreLineD = document.getElementById("score-line-d");
const scoreLineE = document.getElementById("score-line-e");
const scoreLineF = document.getElementById("score-line-f");
const scoreLineG = document.getElementById("score-line-g");
const scoreLineH = document.getElementById("score-line-h");

const pdfScoreLineA = document.getElementById("pdf-score-line-a");
const pdfScoreLineB = document.getElementById("pdf-score-line-b");
const pdfScoreLineC = document.getElementById("pdf-score-line-c");
const pdfScoreLineD = document.getElementById("pdf-score-line-d");
const pdfScoreLineE = document.getElementById("pdf-score-line-e");
const pdfScoreLineF = document.getElementById("pdf-score-line-f");
const pdfScoreLineG = document.getElementById("pdf-score-line-g");
const pdfScoreLineH = document.getElementById("pdf-score-line-h");

const pdfScoreCircleA = document.getElementById("pdf-score-circle-a");
const pdfScoreCircleB = document.getElementById("pdf-score-circle-b");
const pdfScoreCircleC = document.getElementById("pdf-score-circle-c");
const pdfScoreCircleD = document.getElementById("pdf-score-circle-d");
const pdfScoreCircleE = document.getElementById("pdf-score-circle-e");
const pdfScoreCircleF = document.getElementById("pdf-score-circle-f");
const pdfScoreCircleG = document.getElementById("pdf-score-circle-g");
const pdfScoreCircleH = document.getElementById("pdf-score-circle-h");
const pdfScoreCircleT = document.getElementById("pdf-score-circle-t");

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
    pdfScoreCircleT.style.display = "none";
  } else {
    summaryScoreT.innerHTML = averageTotal.innerHTML;
    scoreCircleT.style.display = "block";
    scoreCircleT.style.left =
      (parseFloat(summaryScoreT.innerHTML) / 8) * 100 + `%`;
    scoreCircleT.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleT.style.display = "block";
    pdfScoreCircleT.style.left =
      (parseFloat(summaryScoreT.innerHTML) / 8) * 100 + `%`;
    pdfScoreCircleT.style.transform = `translateX(${segmentWidth - 10}px)`;
  }

  if (totalAverageA === null) {
    scoreCircleA.style.display = "none";
    summaryScoreA.innerHTML = "-";

    pdfScoreCircleA.style.display = "none";

    scoreLineA.style.display = "none";
    pdfScoreLineA.style.display = "none";
  } else {
    summaryScoreA.innerHTML = totalAverageA;
    scoreCircleA.style.display = "block";
    scoreCircleA.style.left = (totalAverageA / 8) * 100 + `%`;
    scoreCircleA.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleA.style.display = "block";
    pdfScoreCircleA.style.left = (totalAverageA / 8) * 100 + `%`;
    pdfScoreCircleA.style.transform = `translateX(${segmentWidth - 10}px)`;

    scoreLineA.style.display = "block";
    scoreLineA.style.left = (totalAverageA / 8) * 100 + `%`;
    scoreLineA.style.transform = `translateX(${segmentWidth - 2}px)`;

    pdfScoreLineA.style.display = "block";
    pdfScoreLineA.style.left = totalAverageA * 54.5 + 54.5 + "px";
  }

  if (totalAverageB === null) {
    scoreCircleB.style.display = "none";
    summaryScoreB.innerHTML = "-";

    pdfScoreCircleB.style.display = "none";

    scoreLineB.style.display = "none";

    pdfScoreLineB.style.display = "none";
  } else {
    summaryScoreB.innerHTML = totalAverageB;
    scoreCircleB.style.display = "block";
    scoreCircleB.style.left = (totalAverageB / 8) * 100 + `%`;
    scoreCircleB.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleB.style.display = "block";
    pdfScoreCircleB.style.left = (totalAverageB / 8) * 100 + `%`;
    pdfScoreCircleB.style.transform = `translateX(${segmentWidth - 10}px)`;

    scoreLineB.style.display = "block";
    scoreLineB.style.left = (totalAverageB / 8) * 100 + `%`;
    scoreLineB.style.transform = `translateX(${segmentWidth - 2}px)`;

    pdfScoreLineB.style.display = "block";
    pdfScoreLineB.style.left = totalAverageB * 54.5 + 54.5 + "px";
  }

  if (totalAverageC === null) {
    scoreCircleC.style.display = "none";
    summaryScoreC.innerHTML = "-";

    pdfScoreCircleC.style.display = "none";

    scoreLineC.style.display = "none";

    pdfScoreLineC.style.display = "none";
  } else {
    summaryScoreC.innerHTML = totalAverageC;
    scoreCircleC.style.display = "block";
    scoreCircleC.style.left = (totalAverageC / 8) * 100 + `%`;
    scoreCircleC.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleC.style.display = "block";
    pdfScoreCircleC.style.left = (totalAverageC / 8) * 100 + `%`;
    pdfScoreCircleC.style.transform = `translateX(${segmentWidth - 10}px)`;

    scoreLineC.style.display = "block";
    scoreLineC.style.left = (totalAverageC / 8) * 100 + `%`;
    scoreLineC.style.transform = `translateX(${segmentWidth - 2}px)`;

    pdfScoreLineC.style.display = "block";
    pdfScoreLineC.style.left = totalAverageC * 54.5 + 54.5 + "px";
  }

  if (totalAverageD === null) {
    scoreCircleD.style.display = "none";
    summaryScoreD.innerHTML = "-";

    pdfScoreCircleD.style.display = "none";

    scoreLineD.style.display = "none";

    pdfScoreLineD.style.display = "none";
  } else {
    summaryScoreD.innerHTML = totalAverageD;
    scoreCircleD.style.display = "block";
    scoreCircleD.style.left = (totalAverageD / 8) * 100 + `%`;
    scoreCircleD.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleD.style.display = "block";
    pdfScoreCircleD.style.left = (totalAverageD / 8) * 100 + `%`;
    pdfScoreCircleD.style.transform = `translateX(${segmentWidth - 10}px)`;

    scoreLineD.style.display = "block";
    scoreLineD.style.left = (totalAverageD / 8) * 100 + `%`;
    scoreLineD.style.transform = `translateX(${segmentWidth - 2}px)`;

    pdfScoreLineD.style.display = "block";
    pdfScoreLineD.style.left = totalAverageD * 54.5 + 54.5 + "px";
  }

  if (totalAverageE === null) {
    scoreCircleE.style.display = "none";
    summaryScoreE.innerHTML = "-";

    pdfScoreCircleE.style.display = "none";

    scoreLineE.style.display = "none";

    pdfScoreLineE.style.display = "none";
  } else {
    summaryScoreE.innerHTML = totalAverageE;
    scoreCircleE.style.display = "block";
    scoreCircleE.style.left = (totalAverageE / 8) * 100 + `%`;
    scoreCircleE.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleE.style.display = "block";
    pdfScoreCircleE.style.left = (totalAverageE / 8) * 100 + `%`;
    pdfScoreCircleE.style.transform = `translateX(${segmentWidth - 10}px)`;

    scoreLineE.style.display = "block";
    scoreLineE.style.left = (totalAverageE / 8) * 100 + `%`;
    scoreLineE.style.transform = `translateX(${segmentWidth - 2}px)`;

    pdfScoreLineE.style.display = "block";
    pdfScoreLineE.style.left = totalAverageE * 54.5 + 54.5 + "px";
  }

  if (totalAverageF === null) {
    scoreCircleF.style.display = "none";
    summaryScoreF.innerHTML = "-";

    pdfScoreCircleF.style.display = "none";

    scoreLineF.style.display = "none";

    pdfScoreLineF.style.display = "none";
  } else {
    summaryScoreF.innerHTML = totalAverageF;
    scoreCircleF.style.display = "block";
    scoreCircleF.style.left = (totalAverageF / 8) * 100 + `%`;
    scoreCircleF.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleF.style.display = "block";
    pdfScoreCircleF.style.left = (totalAverageF / 8) * 100 + `%`;
    pdfScoreCircleF.style.transform = `translateX(${segmentWidth - 10}px)`;

    scoreLineF.style.display = "block";
    scoreLineF.style.left = (totalAverageF / 8) * 100 + `%`;
    scoreLineF.style.transform = `translateX(${segmentWidth - 2}px)`;

    pdfScoreLineF.style.display = "block";
    pdfScoreLineF.style.left = totalAverageF * 54.5 + 54.5 + "px";
  }

  if (totalAverageG === null) {
    scoreCircleG.style.display = "none";
    summaryScoreG.innerHTML = "-";

    pdfScoreCircleG.style.display = "none";

    scoreLineG.style.display = "none";

    pdfScoreLineG.style.display = "none";
  } else {
    summaryScoreG.innerHTML = totalAverageG;
    scoreCircleG.style.display = "block";
    scoreCircleG.style.left = (totalAverageG / 8) * 100 + `%`;
    scoreCircleG.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleG.style.display = "block";
    pdfScoreCircleG.style.left = (totalAverageG / 8) * 100 + `%`;
    pdfScoreCircleG.style.transform = `translateX(${segmentWidth - 10}px)`;

    scoreLineG.style.display = "block";
    scoreLineG.style.left = (totalAverageG / 8) * 100 + `%`;
    scoreLineG.style.transform = `translateX(${segmentWidth - 2}px)`;

    pdfScoreLineG.style.display = "block";
    pdfScoreLineG.style.left = totalAverageG * 54.5 + 54.5 + "px";
  }

  if (totalAverageH === null) {
    scoreCircleH.style.display = "none";
    summaryScoreH.innerHTML = "-";

    pdfScoreCircleH.style.display = "none";

    scoreLineH.style.display = "none";

    pdfScoreLineH.style.display = "none";
  } else {
    summaryScoreH.innerHTML = totalAverageH;
    scoreCircleH.style.display = "block";
    scoreCircleH.style.left = (totalAverageH / 8) * 100 + `%`;
    scoreCircleH.style.transform = `translateX(${segmentWidth - 10}px)`;

    pdfScoreCircleH.style.display = "block";
    pdfScoreCircleH.style.left = (totalAverageH / 8) * 100 + `%`;
    pdfScoreCircleH.style.transform = `translateX(${segmentWidth - 10}px)`;

    scoreLineH.style.display = "block";
    scoreLineH.style.left = (totalAverageH / 8) * 100 + `%`;
    scoreLineH.style.transform = `translateX(${segmentWidth - 2}px)`;

    pdfScoreLineH.style.display = "block";
    pdfScoreLineH.style.left = totalAverageH * 54.5 + 54.5 + "px";
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

answersHide.addEventListener("click", function () {
  answersPara.classList.add("hidden");
  answersHide.classList.add("hidden");
  answersShow.classList.remove("hidden");
});

answersShow.addEventListener("click", function () {
  answersPara.classList.remove("hidden");
  answersHide.classList.remove("hidden");
  answersShow.classList.add("hidden");
});

saveToPDF.addEventListener("click", function () {
  pdfaverageScoreA.innerHTML = pdfaverageA.innerHTML = averageA.innerHTML;
  pdfaverageScoreB.innerHTML = pdfaverageB.innerHTML = averageB.innerHTML;
  pdfaverageScoreC.innerHTML = pdfaverageC.innerHTML = averageC.innerHTML;
  pdfaverageScoreD.innerHTML = pdfaverageD.innerHTML = averageD.innerHTML;
  pdfaverageScoreE.innerHTML = pdfaverageE.innerHTML = averageE.innerHTML;
  pdfaverageScoreF.innerHTML = pdfaverageF.innerHTML = averageF.innerHTML;
  pdfaverageScoreG.innerHTML = pdfaverageG.innerHTML = averageG.innerHTML;
  pdfaverageScoreH.innerHTML = pdfaverageH.innerHTML = averageH.innerHTML;
  pdfaverageScoreT.innerHTML = pdfaverageTotal.innerHTML =
    averageTotal.innerHTML;

  let questionsHTML = ``;

  questions.forEach(function (question, index) {
    const currentQuestionId = "q" + (index + 1);
    const currentQuestionElement = document.getElementById(currentQuestionId);

    questionsHTML += `
    <div class="pdf-questions">
    <div class="pdf-questions-text">${question.innerHTML}</div>
    <div class="pdf-questions-score">${currentQuestionElement.value}</div>
  </div>`;
  });

  pdfquestionsContainer.innerHTML = questionsHTML;

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = dd + mm + yyyy;

  let opt = {
    margin: 1,
    filename: "funcap[" + today + "].pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };

  element.classList.toggle("hidden");
  html2pdf(element, opt);
  element.classList.toggle("hidden");
});

if (showKey) {
  showKey.addEventListener("click", function () {
    key.classList.toggle("hidden");
  });
}

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
  threshold: 0.1,
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
