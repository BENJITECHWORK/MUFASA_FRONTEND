import React, { useEffect, useState } from "react";
import UploadImage from "./upload";
const apiURL = "http://localhost:5000/api/upload";

export async function fetchUsers(stateFunction, position) {
  try {
    let response = await fetch(`${apiURL}?position=${position}`);
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    let finalData = await response.json();

    stateFunction(finalData.getData);
  } catch (error) {
    console.log(error);
  }
}

async function deleteUser(id, refetchData) {
  try {
    let response = await fetch(`${apiURL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete user");
    }

    let finalData = await response.json();
    refetchData();
    console.log(finalData);
  } catch (error) {
    console.log(error);
  }
}

const MinCard = ({ user, refetchData }) => {
  let displayData = user.map((data) => {
    return (
      <div className="card" key={data._id}>
        <figure className="image-container">
          <img src={data.imgUrl} alt="Students" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.userName}</h2>
          <p>Running to Be: {data.position}</p>
          <button
            className="btn"
            onClick={() => deleteUser(data._id, refetchData)}
          >
            Remove
          </button>
        </div>
      </div>
    );
  });

  return <>{displayData}</>;
};

const Card = () => {
  const [chairPerson, setChairPerson] = useState([]);
  const [viceChairPerson, setViceChairPerson] = useState([]);
  const [unOpposed, setUnOpposed] = useState([]);
  useEffect(() => {
    fetchUsers(setChairPerson, "ChairPerson");
    fetchUsers(setViceChairPerson, "Vice ChairPerson");
    fetchUsers(setUnOpposed, "UnOpposed");
  }, []);

  return (
    <>
      <UploadImage
        fetchUsers={() => {
          fetchUsers(setChairPerson, "ChairPerson");
          fetchUsers(setViceChairPerson, "Vice ChairPerson");
          fetchUsers(setUnOpposed, "UnOpposed");
        }}
      />
      <div className="admin-content">
        <h2>Mufasa - ChairPerson</h2>
      </div>
      <div className="card-container">
        <MinCard
          user={chairPerson}
          refetchData={() => fetchUsers(setChairPerson, "ChairPerson")}
        />
      </div>

      <div className="admin-content">
        <h2>Vice ChairPerson</h2>
      </div>
      <div className="card-container">
        <MinCard
          user={viceChairPerson}
          refetchData={() => fetchUsers(setViceChairPerson, "Vice ChairPerson")}
        />
      </div>

      <div className="admin-content">
        <h2>UnOpposed</h2>
      </div>
      <div className="card-container">
        <MinCard
          user={unOpposed}
          refetchData={() => fetchUsers(setUnOpposed, "UnOpposed")}
        />
      </div>
    </>
  );
};

export default Card;
