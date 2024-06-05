import React, { useState } from "react";
import data from "./quizData";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div>
          <h2>Quiz Complete!</h2>
          <p>Your score: {score}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{data[currentQuestion].question}</p>
          {data[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option.correct)}>
              {option.text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default Quiz;
