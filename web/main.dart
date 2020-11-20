import 'dart:html';
import 'questions.dart';

final questionsList = Questions().questions;
List<String> correctAnswers = [];
List<String> chosenAnswers = [];
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

int currentQuestion = -1;
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

  // it runs when start button is pressed
  testStart.onClick.listen(startEvent);

  // runs when next button is pressed
  nextButton.onClick.listen((event) {
    if (nextButton.text == 'Next') {
      print('Running next button');
      if (chosenAnswers[currentQuestion] != correctAnswers[currentQuestion]) {
        wrongAnswers.add({
          questionsList[currentQuestion]['question']:
              correctAnswers[currentQuestion]
        });
        print('Wrong answers: ${wrongAnswers.length}');
      }

      questionsEvent(event);
    } else if (nextButton.text == 'Restart') {
      window.location.reload();
    }
  });
}

void startEvent(Event e) {
  print('Starting event: ${questionsList.length}');

  // randomly shuffle the lsit of questions
  questionsList.shuffle();

  // display the question-answers and hide the inner-container
  innerContainer.style.display = 'none';
  questionAnswers.style.display = 'flex';

  // pick 10 questions
  questionsList.getRange(0, numberOfQuestions).forEach((element) {
    correctAnswers.add(element['correctAnswer']);
  });

  questionsEvent(e);
}

void questionsEvent(Event e) {
  // in the first run currentQuestion will be 0
  currentQuestion++;
  print('Questions Event');

  if (currentQuestion < numberOfQuestions) {
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
    options.forEach((element) {
      element.onClick.listen((event) {
        // reset the styling for other li elements
        options.forEach((element) {
          chosenAnswers.remove(element.text);
          element.style.removeProperty('background-color');
          element.style.color = '#330033';
        });

        // set the styling for the clicked li element
        element.style.backgroundColor = '#440044';
        element.style.color = '#FAF5FF';

        // once user picks and answer, enable the next button
        nextButton.disabled = false;

        // populate the list with chosen answer
        chosenAnswers.add(element.text);
      });
    });

    print('Current CQ: $currentQuestion');
  } else {
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
  }
}
