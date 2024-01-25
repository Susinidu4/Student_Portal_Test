import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AllStudents() {

    //Display User//
    const [Student, setStudents] = useState([]);

    useEffect(() => {
        function getStudents() {
            axios.get("http://localhost:8070/Student/").then((res) => {
                setStudents(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getStudents();
    }, [])

    //Delete user//
    const deleteUser = async (userId) => {
        try {
            await axios.delete(`http://localhost:8070/Student/delete/${userId}`);
            setStudents((prevStudents) => prevStudents.filter(student => student._id !== userId));
        } catch (err) {
            alert(err.response.data.error);
        }
    };


    return (
        <div>
            <br></br>
            <div className="containor2">
                <h1 className="all">All Students</h1>
                {Student.map((student, index) => (
                    <div key={index}>
                        <p className="all1"><strong>Name : </strong>{student.name}</p>
                        <p className="all2"><strong>Age : </strong>{student.age}</p>
                        <p className="all3"><strong>Gender : </strong>{student.gender}</p>

                        <button type="submit" className="btnDel" onClick={() => deleteUser(student._id)}>Delete</button>

                        <Link to={`/update/${student._id}`}>
                            <button className="btnUpd">Update</button>
                        </Link>


                        <hr />
                    </div>
                ))}
            </div>
        </div>
    )
}