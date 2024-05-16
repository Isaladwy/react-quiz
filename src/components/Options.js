function Options({ question, dispatch, answerIndex }) {
  const hasAnswered = answerIndex !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answerIndex ? 'answer' : ''} ${
            hasAnswered &&
            (index === question.correctOption ? 'correct' : 'wrong')
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
