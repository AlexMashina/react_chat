import { withFormik } from "formik";

import RegisterForm from "../components/RegisterForm";
import validateForm from "../../../utils/validate";

export default withFormik({
  mapPropsToValues: () => ({ email: "dqeqeqeq", success: false }),
  validate: (values) => {
    let errors = {};
    validateForm({isAuth: false, values, errors});

    return errors;
  },
  handleSubmit: (values, { setSubmitting, props }) => {},
  displayName: "RegisterForm",
})(RegisterForm);
