/**
 * hides Intro and show Question 1
 */
function StartQuiz() {
  document.getElementById("Intro").style.display = "none";
  document.getElementById("Question1").style.display = "inline-block";
}

/**
 * hides Question 1 shows Question2
 */
function Question2() {
  document.getElementById("Question1").style.display = "none";
  document.getElementById("Question2").style.display = "inline-block";
}

/**
 * hides Question 2 shows Question3
 */
function Question3() {
  document.getElementById("Question2").style.display = "none";
  document.getElementById("Question3").style.display = "inline-block";
}

/**
 * hides Question 3 shows Question4
 */
function Question4() {
  document.getElementById("Question3").style.display = "none";
  document.getElementById("Question4").style.display = "inline-block";
}

/**
 * hides Question 4 shows Question5
 */
function Question5() {
  document.getElementById("Question4").style.display = "none";
  document.getElementById("Question5").style.display = "inline-block";
}

/**
 * hides question 5 shows results
 */
function Results() {
  calculateResults();
  document.getElementById("Question5").style.display = "none";
  document.getElementById("Results").style.display = "inline-block";
}

/**
 * calculates and displays the results
 */
function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="Quest1"]');
  let q1Value;
  for (const rb of radios1) {
    if (rb.checked) {
      q1Value = rb.value;
      break;
    }
  }

  const radios2 = document.querySelectorAll('input[name="Quest2"]');
  let q2Value;
  for (const rb of radios2) {
    if (rb.checked) {
      q2Value = rb.value;
      break;
    }
  }

  let total = Number(q1Value) + Number(q2Value);
  result = total / 2;

  if (result > 2) {
    msg = "You answered mostly c you may have a kinesthetic learning style";
  } else if (result >= 1.5) {
    msg = "You answered mostly b, you may have an auditory learning style";
  } else {
    msg = "You answered mostly a, you may have a visual learning style";
  }

  document.getElementById("Result").innerHTML = msg;
}
