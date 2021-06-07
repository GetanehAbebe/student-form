import { useHistory } from "react-router-dom";
import {
  Form,
  Col,
  InputGroup,
  ToggleButton,
  Button,
  ButtonGroup,
  Row,
} from "react-bootstrap";
import InputCreator from "./InputCreator";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./AddUser.css";
import ErrorMessages from "./ErrorMessages";

const AddUserForm = (props) => {
  const history = useHistory();
  const { handleSubmit, handleChange, values, errors } = useForm(
    submit,
    validate
  );

  function submit(e) {
    props.addUser(values);
    history.push("/users");
  }

  return (
    <Form
      className="text-left container w-50 m-auto rounded"
      onSubmit={handleSubmit}
    >
      <Form.Row className="m-auto">
        <h1 className="text-center">Student details</h1>
      </Form.Row>
      <Form.Row>
        <p>hello student,please fill your details</p>
      </Form.Row>
      <hr />
      <Row className="mb-1 d-flex">
        <Form.Group as={Col} controlId="formGridEmail">
          <InputCreator
            title="Username"
            type="text"
            required="true"
            value={values.username}
            placeholder="Enter Username"
            sign={<i class="fas fa-user"></i>}
            onChange={handleChange}
            name="username"
            error={errors.username}
          />
          {errors.username && <ErrorMessages errors={errors.username} />}
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <InputCreator
            title="Email"
            type="email"
            required="true"
            value={values.email}
            placeholder="Enter email"
            sign={<i class="fas fa-mail-bulk"></i>}
            onChange={handleChange}
            name="email"
            error={errors.email}
          />
          {errors.username && (
            <ul>
              {errors.email.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          )}
        </Form.Group>
      </Row>

      <Form.Group className="mx-1" as={Row}>
        <InputCreator
          title="Address"
          as="textarea"
          type="text"
          required="true"
          value={values.adress}
          placeholder="Street ,Number ,City ,Zip"
          sign={<i class="fas fa-place-of-worship"></i>}
          onChange={handleChange}
          name="adress"
          error={errors.adress}
        />
        {errors.adress && <ErrorMessages errors={errors.adress} />}
      </Form.Group>

      <Row className="d-flex">
        <Col>
          <Form.Group as={Col}>
            <Form.Label>Course</Form.Label>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i class="fas fa-graduation-cap"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as="select"
                id="course"
                name="course"
                aria-describedby="emailHelp"
                value={values.course}
                onChange={handleChange}
                required
              >
                select your Course
                <option>select your course</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="javascrupt">JavaScript</option>
                <option value="nodejs">NodeJs</option>
              </Form.Control>
            </InputGroup>
            {errors.course && <ErrorMessages errors={errors.course} />}
          </Form.Group>
        </Col>
        <Col>
          <Form.Group as={Col}>
            <Form.Label className="d-block ">Gender</Form.Label>
            <ButtonGroup
              required
              toggle
              id="gender"
              name="gender"
              type="checkbox"
              onChange={handleChange}
            >
              <ToggleButton
                type="checkbox"
                variant="outline-success"
                name="gender"
                value={"Female"}
              >
                Female
              </ToggleButton>
              <ToggleButton
                type="checkbox"
                variant="outline-success"
                name="gender"
                value={"Male"}
              >
                Male
              </ToggleButton>
              <ToggleButton
                type="checkbox"
                variant="outline-success"
                name="gender"
                value={"other"}
              >
                Other
              </ToggleButton>

              {errors.gender && <ErrorMessages errors={errors.gender} />}
            </ButtonGroup>
          </Form.Group>
        </Col>
      </Row>

      <Button
        className="btn btn-primary my-2 w-100 font-weight-bold "
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

export default AddUserForm;
