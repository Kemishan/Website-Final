let formData = {
  name: "John",
  email: "john@example.com",
  password: "123456"
};

// Validation function
function validateForm(data) {
  let errors = {};

  // Name validation
  if (!data.name || data.name.trim() === "") {
    errors.name = "⚠ Name is required. Please enter your full name.";
  }

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!data.email || data.email.trim() === "") {
    errors.email = "⚠ Email field cannot be empty.";
  } else if (!emailPattern.test(data.email)) {
    errors.email = "⚠ Please enter a valid email address (example: user@gmail.com).";
  }

  // Password validation
  if (!data.password || data.password.length < 6) {
    errors.password = "⚠ Password must be at least 6 characters long.";
  }
  else{
     errors.password = "⚠ Incorrect Password .";
  
  }

  return errors;
}

// Run validation
let result = validateForm(formData);

// Output result
if (Object.keys(result).length === 0) {
  console.log("🎉 Success! Form submitted successfully ✔");
  console.log("Form data accepted:", formData);
} else {
  console.log("❌ Form submission failed. Please fix the errors below:");
  console.log(result);
  console.log("Please review your input and try again.");
}