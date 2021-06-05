import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchApi } from "../actions/fetchActions";
import { incrementPointer } from "../actions/quizActions";
import img_title from "../assets/imgTitle.svg";

export const QuizScreen = () => {
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [answerInCorrect, setAnswerInCorrect] = useState(false);
  const [random, setRandom] = useState(0);
  const [random2, setRandom2] = useState(0);
  const [disableResp, setdisableResp] = useState(false);
  const dispatch = useDispatch();
  const { countrys } = useSelector((state) => state.fetch);
  const { pointers } = useSelector((state) => state.quiz);

  const ramdonNumber = () => {
    setRandom(Math.floor(Math.random() * 244) + 1);
    setRandom2(Math.floor(Math.random() * 4));
  };
  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  useEffect(() => {
    ramdonNumber();
  }, []);

  const handleAnswerCorrect = ({target}) => {
    setdisableResp(true);
    if (target.value === countrys[random + random2]?.name) {
      setAnswerCorrect(true);
      document.getElementById(target.id).className = "answer__correct animate__animated animate__tada";
      dispatch(incrementPointer(pointers));
    } else {
      document.getElementById(target.id).className = "answer__incorrect animate__animated animate__headShake";
      setAnswerInCorrect(true);
      document.getElementById(`#${countrys[random + random2]?.name}`).className = "answer__correct";
    }
  };

  const next = () => {
    setAnswerCorrect(false);
    setdisableResp(false);
    ramdonNumber();
  };

  return (
    <main className="quiz__main d-flex flex-column justify-content-center align-items-center">
      <div className="quiz__box-container">
        <h1 className="quiz__title">Country Quiz</h1>
        <div className="quiz__box animate__animated animate__fadeIn animate__faster ">
          <figure className="quiz__img">
            <img src={img_title} alt="img title" />
          </figure>
          <div className="quiz__question d-flex flex-column">
            <p className="quiz__answer">
              {countrys[random + random2]?.capital} is the capital of
            </p>
            {countrys.slice(random, random + 4).map((country, idx) => (
              <button
                key={country.name}
                id={`#${country.name}`}
                value={country.name}
                disabled={disableResp}
                style={{ width: "100%" }}
                onClick={handleAnswerCorrect}
                className="btn animate__animated animate__lightSpeedInLeft animate__faster"
              >
                {idx + 1}. {country.name}
              </button>
            ))}
          </div>
          {answerCorrect && (
            <button className="btn btn-again" onClick={next}>
              next
            </button>
          )}
          {answerInCorrect && (
            <Link to="/results" className="btn btn-again">
              results
            </Link>
          )}
        </div>
      </div>
    </main>
  );
};
