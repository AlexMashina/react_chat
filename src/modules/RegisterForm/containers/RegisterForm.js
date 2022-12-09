import { withFormik } from "formik";

import RegisterForm from "../components/RegisterForm";

export default withFormik({
  mapPropsToValues: () => ({ email: "dqeqeqeq", success: false }),
  validate: (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Введите E-mail";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Некорректный адрес электронной почты";
    }

    if (!values.password) {
      errors.password = "Введите пароль";
    } else if (!/(?=.*[a-zA-Z0-9])/i.test(values.password)) {
      errors.password = "Слишком легкий пароль";
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {},
  displayName: "RegisterForm",
})(RegisterForm);
