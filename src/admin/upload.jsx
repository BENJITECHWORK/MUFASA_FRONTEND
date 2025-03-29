import React, { useState } from "react";

const apiUrl = "http://localhost:5000/api/upload";

const UploadImage = ({ fetchUsers }) => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handelChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    } else {
      alert("Please enter a username and select an image.");
      return;
    }
  };

  const handlePosition = (e) => {
    if (e.target.value) {
      setPosition(e.target.value);
    } else {
      alert("Please enter a username and select an image.");
      return;
    }
  };

  const handleUserName = (e) => {
    let userName = e.target.value;

    if (userName) {
      setName(userName);
    } else {
      alert("Please enter a username and select an image.");
      return;
    }
  };

  async function uploadImageToServer() {
    if (!image || !name || !position) {
      alert("Please enter a candidate name, select an image and position.");
      return;
    }

    try {
      let formData = new FormData();
      formData.append("image", image);
      formData.append("userName", name.trim());
      formData.append("position", position);

      let sendData = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (!sendData.ok) {
        alert("Failed to Create Candidate! Try  again");
      }
      {
        alert("Candidate is being  created please  wait");
      }

      let response = await sendData.json();

      // If upload is successful, show alert and reset input
      alert("Image uploaded successfully!");

      setName("");
      setImage(null);
      setPosition("");
      document.querySelector(".upload-image").value = null;

      console.log(response);
      fetchUsers();
    } catch (error) {
      console.log();
    }
  }

  return (
    <div className="upload-container">
      <h2 className="upload-header">Add a New Candidate</h2>
      <p className="upload-subtext">
        Fill in the details to add a candidate of your choice.
      </p>

      <input
        required
        type="text"
        value={name}
        className="type-name"
        onChange={handleUserName}
        placeholder="Enter Candidate Full Name"
      />

      <input
        required
        type="file"
        onChange={handelChange}
        className="upload-image"
        accept="image/*"
      />

      <select
        className="select-position"
        value={position}
        required
        onChange={handlePosition}
      >
        <option value="">Select Position</option>
        <option value="ChairPerson">ChairPerson</option>
        <option value="Vice ChairPerson">Vice ChairPerson</option>
        <option value="UnOpposed">UnOpposed</option>
      </select>

      <button onClick={uploadImageToServer} className="upload-btn">
        Create Candidate
      </button>
    </div>
  );
};

export default UploadImage;
