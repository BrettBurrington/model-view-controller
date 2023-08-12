



// Function to handle login
async function handleLogin(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
  
    try {
      // Make an API request to log in
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Redirect to dashboard or homepage upon successful login
        document.location.replace('/dashboard');
      } else {
        // Handle login error
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
  
  // Attach event listener to login button
  document.querySelector('#login-btn').addEventListener('click', handleLogin);
  