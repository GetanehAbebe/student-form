import React, { useState } from "react";
import { ButtonGroup, Button, Table } from "react-bootstrap";
import MyVerticallyCenteredModal from "../ModalShow";
import "./UserTable.css";

const UserTable = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [selecteduser, setSelectedUser] = useState({});

  function changeUser(user) {
    setSelectedUser(user);
    setModalShow(true);
  }

  return (
    <Table striped bordered hover variant="dark w-50 m-auto" size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Course</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length ? (
          props.users.map((user) => {
            const { id, username, course } = user;
            return (
              <tr key={id}>
                <td>{username}</td>
                <td>{course}</td>
                <td>
                  <Button
                    className="btn-danger px-1  "
                    onClick={() => props.deleteUser(id)}
                  >
                    <i className="fas fa-user-times "></i>
                  </Button>
                  <Button variant="primary" onClick={() => changeUser(user)}>
                    <i className="fas fa-info"></i>
                  </Button>
                  <MyVerticallyCenteredModal
                    show={modalShow}
                    user={selecteduser}
                    onHide={() => setModalShow(false)}
                  />
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={3}>No students found</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default UserTable;
