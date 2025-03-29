import React, { useEffect, useState } from "react";

const apiURL = "http://localhost:5000/api/upload";

export async function fetchCandidates(setFetching, position) {
  try {
    let requestData = await fetch(`${apiURL}?position=${position}`);
    let receivedData = await requestData.json();

    setFetching(receivedData.getData);
  } catch (error) {
    console.log(error.message);
  }
}
const FetchCandidate = ({ propPosition }) => {
  const [fetching, setFetching] = useState([]);

  useEffect(() => {
    fetchCandidates(setFetching, propPosition);
  }, [propPosition]);

  let finalist = fetching.map((data) => {
    return (
      <div className="card-vote" key={data._id}>
        <figure className="image-container-vote">
          <img src={data.imgUrl} alt="Students" />
        </figure>
        <div className="card-body-vote">
          <h2 className="card-title-vote">{data.userName}</h2>
          <p>Running to Be: {data.position}</p>
          <button className="btn-vote">Vote</button>
        </div>
      </div>
    );
  });

  return <div className="cont-vote">{finalist}</div>;
};

export default FetchCandidate;
