import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function UpdateStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState({
    name: '',
    age: 0,
    gender: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:8070/Student/get/${id}`)
      .then((res) => {
        setStudent(res.data.student);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8070/Student/update/${id}`, student);
      alert('Student updated successfully');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="containor3">
      <h1 className="Up">Update Student</h1>

      <label className="l1" >Name:</label>
      <input type="text" value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} className="i1" />
      <br />

      <label className="l2" >Age:</label>
      <input type="number" value={student.age} onChange={(e) => setStudent({ ...student, age: parseInt(e.target.value, 10) })} className="i2" />
      <br />

      <label className="l3" >Gender:</label>
      <input type="text" value={student.gender} onChange={(e) => setStudent({ ...student, gender: e.target.value })} className="i3" />
      <br />

      <Link to="/all">
        <button onClick={handleUpdate} className='upbt'> Update </button>
      </Link>

      <Link to="/all">
        <button className='upbt'> Cancel </button>
      </Link>

    </div>
  );
}

