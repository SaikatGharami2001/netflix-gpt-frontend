export const ValidateSignup = (
  firstName,
  lastName,
  age,
  gender,
  email,
  password
) => {
  if (!firstName || firstName.trim().length < 2)
    return "First name must be at least 2 characters";

  if (!lastName || lastName.trim().length < 2)
    return "Last name must be at least 2 characters";

  if (!age) return "Age is required";
  if (age < 13) return "You must be at least 13 years old";

  const validGenders = ["male", "female", "others"];
  if (!gender || !validGenders.includes(gender.trim().toLowerCase()))
    return "Gender must be Male, Female, or Others";

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  if (!isEmailValid) return "Email format is invalid";

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );

  if (!isPasswordValid)
    return "Password must be 8+ chars, include uppercase, lowercase & number";

  return null;
};
