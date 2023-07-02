import react from "react";
import { HashRouter, Link, Route,Routes } from "react-router-dom";
import styled from "styled-components";
import AddNew from "./pages/AddNew";
import GetStudent from "./pages/GetStudent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AcademicInfo from "./pages/AcademicInfo";
import UserProfile from "./pages/UserProfile";
import SearchStudent from "./pages/SearchStudent";
import UserAcadsInfo from "./pages/UserAcadsInfo";
import TimeTable from "./pages/TimeTable";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/your-academic-info" element={<AcademicInfo />} />
          <Route path="/user-profile/:roll" element={<UserProfile />} />
          <Route path="/search/user/:roll" element={<UserAcadsInfo />} />
          <Route
            exact
            path="/get-student-info"
            element={<SearchStudent A={0} />}
          />
          <Route
            exact
            path="/delete-student-info"
            element={<SearchStudent A={1} />}
          />
          <Route exact path="/add-new-student" element={<AddNew />} />
          <Route exact path="/get-student-info" element={<GetStudent />} />
          <Route exact path="/time-table" element={<TimeTable />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
