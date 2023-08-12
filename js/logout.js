async function handleLogout() {
    try {
      const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  }
  
  document.querySelector('#logout-btn').addEventListener('click', handleLogout);
  