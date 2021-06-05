import { useDispatch, useSelector } from "react-redux";
import { resetPointerQuiz } from "../actions/quizActions";
import winners from "../assets/winners.svg";

export const ResultsScrenn = ({ history }) => {
  const { pointers } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();

  const handelResetPointer = () => {
    pointers !== 0 && dispatch(resetPointerQuiz());
    history.goBack();
  };

  return (
    <main className="quiz__main  d-flex flex-column justify-content-center align-items-center">
      <div className="quiz__box-container animate__animated animate__fadeIn animate__faster">
        <h1 className="quiz__title">Country Quiz</h1>
        <div className="quiz__box d-flex flex-column align-items-center">
          <figure className="results__img">
            <img className="animate__animated animate__wobble animate__infinite animate__slower" src={winners} alt="" />
          </figure>
          <h1 className="results__title">Results</h1>
          <p>
            You get <span className="results__points">{pointers}</span> correct
            answer
          </p>
          <button className="btn btn-again" onClick={handelResetPointer}>
            Try again
          </button>
        </div>
      </div>
    </main>
  );
};
