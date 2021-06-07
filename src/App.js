import React, { useState, useEffect } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const getLocalItems = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

const App = () => {
  const [users, setUsers] = useState(getLocalItems());

  //-----------------------------------------------------------------------
  const addUser = (user) => {
    user.grade = Math.floor(Math.random() * 44 + 56);
    user.id = Math.floor(Math.random() * 1000) + user.grade;
    console.log("id", user.id);
    setUsers([...users, user]);
  };
  //---------------------------------deleting user------------------------------
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  //---------------------------------Sorting--------------------------------------
  const orderList = () => {
    let users = JSON.parse(localStorage.getItem("list"));
    users.sort((a, b) =>
      b.username > a.username ? -1 : b.username < a.username ? 1 : 0
    );
    setUsers([...users]);
  };
  //------------------update the local sotrage and the background-------------------
  useEffect(() => {
    const bodyStyle = document.querySelector("body").style;
    bodyStyle.background = `url("https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-4565.jpg?size=626&ext=jpg")`;
    return localStorage.setItem("list", JSON.stringify(users));
  }, [users]);

  //----------------------------------------------------------------------------
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/users">Students</Link>
            </li>
            <li>
              <Link to="/">Add Student</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/users">
            <div className="container ">
              <h1 className="guide">View Students</h1>
              <button onClick={orderList} className="btn-sort">
                {" "}
                sort
              </button>
              <UserTable
                orderByName={orderList}
                users={users}
                deleteUser={deleteUser}
                addUser={addUser}
              />
              <p className="user-guide">
                you can remove user by clicking the red button,and see more
                details in blue button in 'Actions'
              </p>
            </div>
          </Route>
          <Route exact path="/">
            <div>
              <AddUserForm addUser={addUser} />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
