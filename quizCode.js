// sets variables
let QuestionNumber = 0;
let AnswerArray = [];

// Finds out if the question is answered by comparing the current Question number to the amount of responses in the array
function isAnwered(AnswerArray, QuestionNumber) {
  console.log(AnswerArray);
  console.log(AnswerArray.length);
  if (AnswerArray.length == QuestionNumber) {
    return true;
  } else {
    alert("Please answer the question");
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
