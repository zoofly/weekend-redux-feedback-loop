import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Support() {
  const [supportScale, setSupportScale] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!supportScale) {
      alert("Please enter a number from 1-5");
    } else {
      dispatch({
        type: "ADD_SUPPORT_SCALE",
        payload: supportScale,
      });
      setSupportScale("");
      history.push("/comment");
    }
  };

  //dispatch is used to talk to redux from react
  const dispatch = useDispatch();

  //history is used to be able to change user location
  const history = useHistory();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> How well are you being supported? </h1>
        <label> Rate your support from 1-5 for today. </label>
        <input
          type="number"
          onChange={(event) => setSupportScale(event.target.value)}
        />

        <button type="submit"> Next </button>
      </form>
    </div>
  );
}

export default Support;
