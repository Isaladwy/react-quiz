function Progress({
  questionIndex,
  numQuestions,
  points,
  maxPossiblePoints,
  answerIndex,
}) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={questionIndex + +(answerIndex !== null)}
      ></progress>
      <p>
        Question <strong>{questionIndex + 1}</strong> / {numQuestions}{' '}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
