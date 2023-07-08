// followed the mini-project's solved folder
// CHECK THE ID AND CLASS SELECTOR IN HANDLEBARS
// OTHER THAN THAT, ALL CODES ARE GOOD

// Login
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
          method: 'POST',
          body: JSON.stringify({
              email,
              password
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });
      
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
    }
  }
};

// Sign up
const signupFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, username, password }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document
.querySelector('.login-form') //CHECK THIS CLASS SELECTOR IN HANDLEBARS
.addEventListener('submit', loginFormHandler); //CHECK THIS BUTTON IN HANDLEBARS

document
.querySelector('.signup-form') //CHECK THIS CLASS SELECTOR
.addEventListener('submit', signupFormHandler); //CHECK THIS BUTTON