import 'dart:convert';
import 'dart:html';

List<String> correctAnswers = [];
List<String> chosenAnswers = [];
List<String> finalAnswers = [];
List<Map<String, String>> wrongAnswers = [];

ButtonElement testStart;
ButtonElement nextButton;
ButtonElement restartButton;
DivElement innerContainer;
DivElement questionAnswers;
SpanElement question;
SpanElement info;
UListElement answers;
ElementList options;

int currentQuestion = 0;
int numberOfQuestions = 10;

void main() {
  // landing page elements
  innerContainer = querySelector('.inner-container');
  testStart = querySelector('.start-button');

  // elements after the test starts
  questionAnswers = querySelector('.question-answers');
  question = querySelector('.question');
  info = querySelector('.info');
  answers = querySelector('.answers');
  nextButton = querySelector('.next-button');

  var path = './db/questions.json';
  HttpRequest.getString(path).then((value) {
    final jsonFile = jsonDecode(value);

    // it runs when start button is pressed
    testStart.onClick.listen((e) => startEvent(e, jsonFile));

    // runs when next button is pressed
    nextButton.onClick.listen((event) => nextButtonClick(event, jsonFile));
  }).catchError((error) {
    print(error);
  });
}

void startEvent(Event e, dynamic jsonObject) {
  List questionsList = jsonObject['questions'];
  print('Starting the test. # of questions: ${questionsList.length}');

  // randomly shuffle the list of questions
  questionsList.shuffle();
  questionsList.shuffle();

  // display the question-answers and hide the inner-container
  innerContainer.style.display = 'none';
  questionAnswers.style.display = 'flex';

  // pick 10 questions
  questionsList.getRange(0, numberOfQuestions).forEach((element) {
    correctAnswers.add(element['correctAnswer']);
  });

  questionsEvent(e, jsonObject);
}

void questionsEvent(Event e, dynamic jsonObject) {
  if (currentQuestion < numberOfQuestions) {
    questionAnswerControl(jsonObject);
  } else {
    resultsControl();
  }
}

void questionAnswerControl(dynamic jsonObject) {
  List questionsList = jsonObject['questions'];
  print('Question number: ${currentQuestion + 1}');

  // clear the previous question-answers from ul element
  answers.children.clear();
  nextButton.disabled = true;

  // set the span text to a new question
  question.text = questionsList[currentQuestion]['question'];

  // create 4 answers as li elements
  for (var i = 0; i < 4; i++) {
    var option = LIElement();
    option.text = questionsList[currentQuestion]['answers'][i];
    answers.children.add(option);
  }

  // select all the li elements
  options = querySelectorAll('li');

  // click behaviour for li elements
  optionControl(options);
}

void resultsControl() {
  // clear the LIelements
  answers.children.clear();

  // show the final results
  question.text =
      'Result: ${currentQuestion - wrongAnswers.length} / $numberOfQuestions !';
  question.style.fontSize = '1.5em';

  // additional message depending on results
  if (wrongAnswers.isNotEmpty) {
    info.text = "Noto'g'ri javob berilgan savollar:";
  } else {
    info.text = 'Eee qoyil lekin! Hammasini topdiz!';
  }

  info.style.color = '#330033';

  // show the questions to which the answer was wrong
  wrongAnswers.forEach((element) {
    var wrong = LIElement();
    var correct = SpanElement();
    correct.style.color = '#15803D';

    // individual wrong answer is a map
    element.entries.forEach((element) {
      wrong.text = element.key;
      correct.text = element.value;
      wrong.children.add(correct);
    });
    answers.children.add(wrong);
  });

  // Reload the window on click
  nextButton.text = 'Restart';
  correctAnswers.clear();
  chosenAnswers.clear();
  finalAnswers.clear();
}

void optionStyleRemover(LIElement element) {
  // Remove the non selected answers from chosenAnswers
  chosenAnswers.remove(element.text);

  // reset the style of non selected answers
  element.style.removeProperty('background-color');
  element.style.color = '#330033';
}

void optionControl(ElementList options) {
  options.forEach((element) {
    element.onClick.listen((event) {
      options.forEach((element) => optionStyleRemover(element));
      element.style.backgroundColor = '#440044';
      element.style.color = '#FAF5FF';
      chosenAnswers.add(element.text);

      nextButton.disabled = false;
    });
  });
}

void nextButtonClick(event, dynamic jsonObject) {
  List questionsList = jsonObject['questions'];
  if (nextButton.text == 'Next') {
    // no matter how many times a user reselects
    // an answer in a given question, the last element
    // in chosenAnswers is user's last choice
    // which should be added to the finalAnswers
    finalAnswers.add(chosenAnswers.last);
    print('Chosen answers: $finalAnswers');

    // check the answer and populate the wrongAnswers
    if (finalAnswers[currentQuestion] != correctAnswers[currentQuestion]) {
      wrongAnswers.add({
        questionsList[currentQuestion]['question']:
            correctAnswers[currentQuestion]
      });
    }

    // Increment the index for the next questionEvent
    currentQuestion++;
    questionsEvent(event, jsonObject);
  } else if (nextButton.text == 'Restart') {
    window.location.reload();
  }
}
