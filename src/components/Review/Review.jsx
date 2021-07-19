import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Review() {
  const feelings = useSelector((store) => store.feelingsFeedback);
  const understanding = useSelector((store) => store.understandingFeedback);
  const support = useSelector((store) => store.supportFeedback);
  const comments = useSelector((store) => store.commentsFeedback);

  const dispatch = useDispatch();
  // const feedback = useSelector(store => store);
  const feedbackData = {
    feeling: feelings,
    understanding: understanding,
    support: support,
    comments: comments,
  };

  const history = useHistory();

  const handleSubmit = () => {
    event.preventDefault();
    axios
      .post("/feedback", feedbackData)
      .then((res) => {
        console.log("Successfully posted feedback", res);
        dispatch({
          type: "RESET",
          payload: "",
        });
        history.push("/thankyou");
      })
      .catch((error) => {
        console.log("AXIOS POST ERROR", error);
      });
  };

  return (
    <>
      <div>
        <h1> Review Your Feedback </h1>
        <p> Feelings: {feelings} </p>
        <p> Understanding: {understanding} </p>
        <p> Support: {support} </p>
        <p> Comments: {comments} </p>
        <button type="submit" onClick={handleSubmit}>
          Submit Feedback
        </button>
      </div>
    </>
  );
}

export default Review;
