import React, { useState } from "react";
import axios from "axios";

function AddStudent() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newStudent = {

      name,
      age,
      gender

    }

    axios.post("http://localhost:8070/Student/add", newStudent).then(() => {
      alert("Student Added");
      setName("");
      setAge("");
      setGender("");

    }).catch((err) => {
      alert(err)
    })
  }

  return (

    <div className="container">
      <h1 align="center">Add Details</h1>
      <form onSubmit={sendData}>
        <div className="form-group">

          <label for="name">Student Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter Student Name"
            onChange={(e) => {

              setName(e.target.value);

            }} required />

        </div>

        <div className="form-group">

          <label for="age">Student Age</label>
          <input type="number" className="form-control" id="age" placeholder="Enter Student Age"
            onChange={(e) => {

              setAge(e.target.value);

            }} required />

        </div>

        <div className="form-group">

          <label for="gender">Student Gender</label>
          <input type="text" className="form-control" id="gender" placeholder="Enter Student Gender"
            onChange={(e) => {

              setGender(e.target.value);

            }} required />

        </div>


        <button type="submit" className="btnAdd">Submit</button>


      </form>
    </div>
  )
}

export default AddStudent;