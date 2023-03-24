import Welcome from "./components/Welcome";
import ClassTeam from "./components/ClassTeam.js";
import NewClassMemberForm from "./components/NewClassMemberForm";
import { useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Link,
  useParams
} from "react-router-dom";
import About from "./components/About";
import SingleClassMember from "./components/SingleClassMember";
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
  const [classMembers, setClassMembers] = useState(sampleData);

  const addClassMember = (newClassMember) => {
    // Generate a random number between 1 and 10000 to use an
    // id (not perfect but will do for now)
    const randomID = Math.floor(Math.random() * 10000) + 1;

    // Add an id property to the newClassMember JS object
    newClassMember.id = randomID;

    // Add the newClassMember JS object to the sampleData array
    // Notice we are using the spread operator
    setClassMembers([...classMembers, newClassMember]);

    console.log("Sample data is now: ", classMembers);
  };

  const deleteClassMember = (classMemberID) => {
    // Create a new array with the relevant class member filtered out
    let updatedClassMembers = classMembers.filter(
      (member) => member.id !== classMemberID
    );

    // Update the state variable to be this new array
    setClassMembers(updatedClassMembers);
  };

  const editClassMember = (theEditClassMember) => {
    let newClassMembers = [...classMembers];

    for (let i = 0; i < newClassMembers.length; i++) {
      if (newClassMembers[i].id == theEditClassMember.id) {
        newClassMembers[i] = theEditClassMember;
      }
    }

    setClassMembers(newClassMembers);
  };

  return (
    <Router>
      <div className="container-sm p-2">
        <header className="p-3 text-center bg-dark text-light rounded-3">
          <Link to="/">
            <h2>Student Assignment Tracker</h2>
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
                      <ClassTeam
                        members={classMembers}
                        onDelete={deleteClassMember}
                      />
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-4">
                      <NewClassMemberForm onSubmitHandler={addClassMember} />
                    </div>
                  </div>
                </>
              }
            />

            <Route path="/about" element={<About />} />

            <Route
              path="/member/:studentID"
              element={<SingleClassMember members={classMembers} />}
            />

            <Route
              path="/edit/:studentID"
              element={
                <EditClassMember
                  members={classMembers}
                  onEdit={editClassMember}
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
