import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AllStudents from './components/AllStudents';
import UpdateStudent from './components/UpdateStudent';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/add" element={<AddStudent />} />
          <Route path="/all" element={<AllStudents />} />
          <Route path="/update/:id" element={<UpdateStudent />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
