import { useState } from "react";
import "./App.css";
import Appointments from "./Component/Appointments/Appointments";
import Booking from "./Component/Booking";
import Doctors from "./Component/Doctors/Doctors";
import { Doc } from "./Component/Doctors/Doctors";
import EditAppointments from "./Component/EditAppointments";
import Login from "./Component/Login";
import Signup from "./Component/Signup/SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [showBook, setShowBook] = useState(false);
  const [editApp, setEditApp] = useState(false);
  const [editPatients, setEditPatients] = useState(false);

  const handleBookingClick = () => {
    setShowBook(true);
    console.log(showBook);
  };

  const handleCloseClick = () => {
    setShowBook(false);
    console.log(showBook);
  };

  const handleEditClick = () => {
    setEditApp(true);
    console.log(editApp);
  };

  const handleCancelEditClick = () => {
    setEditApp(false);
    console.log(editApp);
  };
  const handleEditPatientsClick = () => {
    setEditPatients(true);
    console.log(editPatients);
  };
  const handleCancelPatientsClick = () => {
    setEditPatients(false);
    console.log(editPatients);
  };
  const contextValue = {
    showBook,
    editApp,
    editPatients,
    handleEditPatientsClick,
    handleBookingClick,
    handleCloseClick,
    handleEditClick,
    handleCancelEditClick,
    handleCancelPatientsClick,
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Doc.Provider value={contextValue}>
                <Doctors />
              </Doc.Provider>
            }
          />
          <Route
            exact
            path="/Login"
            element={
              <Doc.Provider value={contextValue}>
                <Login />
              </Doc.Provider>
            }
          />
          <Route exact path="/Signup" element={<Signup />} />
          <Route
            exact
            path="/Appointments"
            element={
              <Doc.Provider value={contextValue}>
                <Appointments />
              </Doc.Provider>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
