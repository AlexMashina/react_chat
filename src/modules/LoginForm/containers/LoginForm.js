import { withFormik } from "formik";

import validateForm from "../../../utils/validate";
import LoginForm from "../components/LoginForm";

export default withFormik({
  mapPropsToValues: () => ({ email: "dqeqeqeq", success: false }),
  validate: (values) => {
    let errors = {};
    const validate = validateForm({isAuth: false});
    Object.keys(values).forEach(key => validate[key] && validate[key](errors, values[key]));

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {},
  displayName: "RegisterForm",
})(LoginForm);
