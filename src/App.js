import Welcome from "./components/Welcome";
import AssignmentTracker from "./components/AssignmentTracker.js";
import NewCollegeModuleForm from "./components/NewCollegeModuleForm";
import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Link,
  useParams
} from "react-router-dom";
import About from "./components/About";
import SingleCollegeModule from "./components/SingleCollegeModule";
import EditClassMember from "./components/EditClassMember";

// Sample data for testing purposes
const sampleData = [
  {
    id: 1,
    name: "Web Development Frameworks"
  },
  {
    id: 2,
    name: "Server Side Programming"
  },
  {
    id: 3,
    name: "Project Management"
  },
  {
    id: 4,
    name: "Detabase Technology"
  },
  {
    id: 5,
    name: "Digital Literacies"
  }
];

function App() {
  // Make the sampleData a state variable so that when it changes the
  // relevant components are also updated.
  const [collegeModules, setCollegeModules] = useState(sampleData);

  const addCollegeModule = (newCollegeModule) => {
    // Generate a random number between 1 and 10000 to use an
    // id (not perfect but will do for now)
    const randomID = Math.floor(Math.random() * 10000) + 1;

    // Add an id property to the newCollegeModule JS object
    newCollegeModule.id = randomID;

    // Add the newCollegeModule JS object to the sampleData array
    // Notice we are using the spread operator
    setCollegeModules([...collegeModules, newCollegeModule]);

    console.log("Sample data is now: ", collegeModules);
  };

  const deleteCollegeModule = (collegeModuleID) => {
    // Create a new array with the relevant college module filtered out
    let updatedCollegeModules = collegeModules.filter(
      (module) => module.id !== collegeModuleID
    );

    // Update the state variable to be this new array
    setCollegeModules(updatedCollegeModules);
  };

  const editCollegeModule = (theEditCollegeModule) => {
    let newCollegeModules = [...collegeModules];

    for (let i = 0; i < newCollegeModules.length; i++) {
      if (newCollegeModules[i].id == theEditCollegeModule.id) {
        newCollegeModules[i] = theEditCollegeModule;
      }
    }

    setCollegeModules(newCollegeModules);
  };

  return (
    <Router>
      <div className="container-sm p-2">
        <header className="p-3 text-center bg-dark text-light rounded-3">
          <Link to="/">
            <h2>Student Assignment Tracker 📗</h2>
          </Link>
          <Link to="/about">About</Link>
        </header>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="row justify-content-center">
                    <div className="col-4">
                      <Welcome />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-4">
                      <AssignmentTracker
                        modules={collegeModules}
                        onDelete={deleteCollegeModule}
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-4">
                      <NewCollegeModuleForm onSubmitHandler={addCollegeModule} />
                    </div>
                  </div>
                </>
              }
            />

            <Route path="/about" element={<About />} />

            <Route
              path="/module/:moduleID"
              element={<SingleCollegeModule members={collegeModules} />}
            />

            <Route
              path="/edit/:studentID"
              element={
                <EditClassMember
                  members={collegeModules}
                  onEdit={editCollegeModule}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
