let QuestionNumber = 0;
let AnswerArray = [];

function isAnwered(AnswerArray, QuestionNumber) {
  console.log(AnswerArray);
  console.log(AnswerArray.length);
  if (AnswerArray.length == QuestionNumber) {
    return true;
  } else {
    alert("answer the qwuestion");
    return false;
  }
}

/**
 * hides Intro and show Question 1
 */
function StartQuiz() {
  QuestionNumber++;
  document.getElementById("Intro").style.display = "none";
  document.getElementById("Question1").style.display = "inline-block";
}

function ChangeQuestion() {
  Pushresults(QuestionNumber);
  if (isAnwered(AnswerArray, QuestionNumber)) {
    document.getElementById("Question" + QuestionNumber).style.display = "none";
    QuestionNumber++;
    if (QuestionNumber < 6) {
      document.getElementById("Question" + QuestionNumber).style.display =
        "inline-block";
    } else Results();
  }
}

// /**
//  * hides Question 1 shows Question2
//  */
// function Question2() {
//   Pushresults(QuestionNumber);
//   if (isAnwered(AnswerArray, Questionnumber)) {
//     QuestionNumber++;
//     document.getElementById("Question1").style.display = "none";
//     document.getElementById("Question2").style.display = "inline-block";
//   }
// }

// /**
//  * hides Question 2 shows Question3
//  */
// function Question3() {
//   QuestionNumber++;
//   document.getElementById("Question2").style.display = "none";
//   document.getElementById("Question3").style.display = "inline-block";
// }

// /**
//  * hides Question 3 shows Question4
//  */
// function Question4() {
//   QuestionNumber++;
//   document.getElementById("Question3").style.display = "none";
//   document.getElementById("Question4").style.display = "inline-block";
// }

// /**
//  * hides Question 4 shows Question5
//  */
// function Question5() {
//   QuestionNumber++;
//   document.getElementById("Question4").style.display = "none";
//   document.getElementById("Question5").style.display = "inline-block";
// }

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
function Pushresults(number) {
  const radios1 = document.querySelectorAll(`input[name="Quest${number}"]`);
  let Value;
  for (let rb of radios1) {
    if (rb.checked) {
      Value = rb.value;
      AnswerArray.push(Value);
      break;
    }
  }
}

function calculateResults() {
  if (AnswerArray[2] == 1) {
    // indoors
    if (AnswerArray[1] == 1) {
      //Indoor - scared = indoor bouldering
      msg = "You should be an Indoor Boulderer";
    } else if (AnswerArray[3] == 1) {
      //Indoor - Not scared - speed = Speed climbing
      msg = "You should be an Speed Climber";
    } else if (AnswerArray[3] == 2) {
      msg = "You should be an Lead Climber";
    } else {
      // Indoor - Not scared - Power = indoor Boulding
      msg = "You should be an Indoor Boulderer";
    }
  } else {
    // Must now be outdoors
    if (AnswerArray[1] == 1) {
      // outdoor - scared  = outdoor bouldering
      msg = "You should be an Outdoor Boulderer";
    } else {
      // must now be outdoor - not scared
      if (AnswerArray[3] == 1) {
        //  outdoor - not scared - speed = outdoor free solo
        msg = "You should be an Outdoor Free Soloist";
      }
      if (AnswerArray[3] == 2) {
        if (AnswerArray[4] == 3 || AnswerArray[4] == 2) {
          // outdoor - not scared - endurance - great knots = outdoor multi pitching
          msg = "You should be an Outdoor Multi-Pitcher";
        } else {
          // outdoor - not scared - endurance - not great at knots = outdoor lead
          msg = "You should be an Outdoor Lead Climber";
        }
      } else {
        // outdoor bouldering
        msg = "You should be an Outdoor Boulderer";
      }
    }
  }
  document.getElementById("Result").innerHTML = msg;
}

// function calculateResults() {
//   const radios1 = document.querySelectorAll('input[name="Quest1"]');
//   let q1Value;
//   for (const rb of radios1) {
//     if (rb.checked) {
//       q1Value = rb.value;
//       break;
//     }
//   }

//   const radios2 = document.querySelectorAll('input[name="Quest2"]');
//   let q2Value;
//   for (const rb of radios2) {
//     if (rb.checked) {
//       q2Value = rb.value;
//       break;
//     }
//   }

//   let total = Number(q1Value) + Number(q2Value);
//   result = total / 2;

//   if (result > 2) {
//     msg = "You answered mostly c you may have a kinesthetic learning style";
//   } else if (result >= 1.5) {
//     msg = "You answered mostly b, you may have an auditory learning style";
//   } else {
//     msg = "You answered mostly a, you may have a visual learning style";
//   }

//   document.getElementById("Result").innerHTML = msg;
// }
