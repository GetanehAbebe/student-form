import { Modal, Button, ListGroupItem, Image } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  console.log(props.user);
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.user.username}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          height="100 rem"
          style={{ margin: "1rem 5rem" }}
          variant="ml-5 text-center"
          src="https://www.eurocircuits.com/wp-content/uploads/Student-icon.jpg"
          rounded
        />
        <ListGroupItem> Name: {props.user.username}</ListGroupItem>
        <ListGroupItem> Email: {props.user.email}</ListGroupItem>
        <ListGroupItem> Grade: {props.user.grade}</ListGroupItem>
        <ListGroupItem> Adress: {props.user.adress}</ListGroupItem>
        <ListGroupItem> Course: {props.user.course}</ListGroupItem>
        <ListGroupItem> Gender: {props.user.gender}</ListGroupItem>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
