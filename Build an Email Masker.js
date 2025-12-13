Build an Email Masker
-----------------------
Create a function named maskEmail that takes email as an argument.
Inside the function, you should mask the email and append the domain name to it. Remember that you can use methods like slice, repeat, indexOf or even replace to help you.
Outside the function, declare a variable named email to store the email address you want to mask.
Call the maskEmail function with the email variable and output the result to the console.
maskEmail("apple.pie@example.com") should return "a*******e@example.com".
maskEmail("freecodecamp@example.com") should return "f**********p@example.com".
maskEmail("info@test.dev") should return "i**o@test.dev".
maskEmail("user@domain.org") should return "u**r@domain.org".

function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const maskedUsername =
    username[0] +
    "*".repeat(username.length - 2) +
    username[username.length - 1];

  return maskedUsername + domain;
}


let email = "vidk@gmail.com";
console.log(maskEmail(email));
