import Options from './Options';

function Question({ question, dispatch, answerIndex }) {
  // console.log(question);
  return (
    <div className="questions">
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answerIndex={answerIndex} />
    </div>
  );
}

export default Question;
