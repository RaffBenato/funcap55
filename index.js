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
const showGraph = document.getElementById("showGraph");
const hideGraph = document.getElementById("hideGraph");
const graph = document.getElementById("graph");

let totalAverageA;
let totalAverageB;
let totalAverageC;
let totalAverageD;
let totalAverageE;
let totalAverageF;
let totalAverageG;
let totalAverageH;

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

showGraph.addEventListener("click", function () {
  graph.classList.remove(`hidden`);
  hideGraph.classList.remove(`hidden`);
  showGraph.classList.add(`hidden`);
});

hideGraph.addEventListener("click", function () {
  graph.classList.add(`hidden`);
  hideGraph.classList.add(`hidden`);
  showGraph.classList.remove(`hidden`);
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
