//import "//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js";

const constraints = {
   name: {
       presence: { allowEmpty: false }
   },
   email: {
       presence: { allowEmpty: false },
       email: true
   },
   subject: {
       presence: { allowEmpty: false }
      },
   message: {
       presence: { allowEmpty: false }
   }
};

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
     const formValues = {
         name: form.elements.yourname.value,
         email: form.elements.youremail.value,
         subject: form.elements.yoursubject.value,
         message: form.elements.yourmessage.value
     };
//     console.log("Name: " + formValues.name);
//     console.log("Email: " + formValues.email);
//     console.log("Subject: " + formValues.subject);
//     console.log("Message: " + formValues.message);

     const errors = validate(formValues, constraints);
//     console.log("Javascript Errors: " + errors);

     if (errors) {
       event.preventDefault();
       const errorMessage = Object
           .values(errors)
           .map(function (fieldValues) { return fieldValues.join(', ')})
           .join("\n");

       alert(errorMessage);
     }
}, false);