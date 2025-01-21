function applyValidation(field, validationFn, formatFn = null) {
  field.addEventListener("input", (e) => {
    let value = e.target.value;
    if (formatFn) value = formatFn(value);
    e.target.value = value;
    field.style.border = validationFn(value)
      ? ""
      : "1px solid var(--color-error)";
  });

  field.addEventListener("blur", (e) => {
    const value = e.target.value;
    field.style.border = validationFn(value)
      ? ""
      : "1px solid var(--color-error)";
  });
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, "");
  const areaCode = digits.slice(0, 3);
  const middle = digits.slice(3, 6);
  const last = digits.slice(6, 10);

  if (digits.length > 6) return `(${areaCode}) ${middle}-${last}`;
  if (digits.length > 3) return `(${areaCode}) ${middle}`;
  if (digits.length > 0) return `(${areaCode}`;
  return "";
}

function formatName(value) {
  return value.replace(/[^a-zA-Z\s]/g, "");
}

function isValidPhone(value) {
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(value);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidName(value) {
  return /^[a-zA-Z\s]{2,}$/.test(value);
}

const phoneField = document.getElementById("phone-field");
const emailField = document.getElementById("email-field");
const nameField = document.getElementById("name-field");

applyValidation(phoneField, isValidPhone, formatPhone);
applyValidation(emailField, isValidEmail);
applyValidation(nameField, isValidName, formatName);
