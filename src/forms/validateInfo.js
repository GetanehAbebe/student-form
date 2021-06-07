export default function validateInfo(values) {
  let errors = {};
  errors.username = [];
  errors.email = [];
  errors.gender = [];
  errors.course = [];
  errors.adress = [];

  if (!values.username.trim()) {
    errors.username.push("Username required");
  }
  if (values.username.length < 2) {
    errors.username.push("username must be more then 2 characters");
  }

  if (!values.email) {
    errors.email.push("Email required");
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
    errors.email.push("Email address is invalid");
  }

  if (!values.adress) {
    errors.adress.push("address is required");
  }
  if (values.adress.length < 10) {
    errors.adress.push("Address must be more then 9 chars");
  }
  if (!/^[0-9a-zA-Z]{10,}$/g) errors.adress.push("Adress is required");
  if (!values.gender) {
    errors.gender.push("gender is required");
  }
  if (!values.course) {
    errors.course.push("course is required");
  }

  return errors;
}
