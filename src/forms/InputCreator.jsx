import { Form, InputGroup, Button, Col } from "react-bootstrap";
import "./InputCreator.css";
function InputCreator(props) {
  return (
    <>
      <Form.Label>{props.title}</Form.Label>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>{props.sign}</InputGroup.Text>
        </InputGroup.Prepend>
        <Form.Control
          as={props.as}
          type={props.type}
          defaultValue={props.value}
          onChange={props.handleInputChange}
          name={props.name}
          placeholder={props.placeholder}
          required={!!props.required}
          onChange={props.onChange}
          onBlur={props.onBlur}
          name={props.name}
          error={props.error}
          className={props.error.length ? "red-input" : null}
        />
      </InputGroup>
    </>
  );
}
export default InputCreator;
