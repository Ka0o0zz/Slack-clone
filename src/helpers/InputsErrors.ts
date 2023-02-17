/**
 * The inputsErrors function returns an object containing three nested functions
 * that provide error messages for form validation.
 * 
 * In short, this inputsErrors function is used to validate the email and password 
 * fields in a form and ensure that the password and password confirmation fields match.
 */
export const inputsErrors = () => {
  /**
   * emailValidate:
   * The required property specifies an error message if the email field is empty.
   * The pattern property specifies a regular expression to validate that the email
   * format is valid and provides an error message if it is not.
   * @returns an object with two properties.
   */
  const emailValidate = {
    required: "Please fill in your email.",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Invalid email address",
    },
  };

  /**
   * passwordValidate:
   * The required property specifies an error message if the password field is empty.
   * The minLength property specifies the minimum character length of the password and
   * provides an error message if the password length is less than the specified value.
   * The pattern property specifies a regular expression to validate that the password
   * contains at least one uppercase letter and one number, and provides an error message
   * if it does not.
   * @returns an object with three properties.
   */
  const passwordValidate = {
    required: "Password is required.",
    minLength: {
      value: 8,
      message: "The password must be at least 8 characters long.",
    },
    pattern: {
      value: /^(?=.*[A-Z])(?=.*\d).*$/,
      message:
        "The password must contain at least one capital letter and one number.",
    },
  };

  /**
   * passwordMatch,
   * @param inputCheck parameter that specifies the password confirmation field.
   * The required property specifies an error message if the password confirmation
   * field is empty. The validate property specifies a validation function that compares
   * the value of the password confirmation field with the value of the password field
   * and provides an error message if they are not equal.
   * @returns an object with two properties.
   */
  const passwordMatch = (inputCheck: string) => ({
    required: "Password is required.",
    validate: (value: string) =>
      value === inputCheck || "Passwords do not match",
  });

  return {
    emailValidate,
    passwordValidate,
    passwordMatch,
  };
};


