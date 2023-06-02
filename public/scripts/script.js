const reg = document.getElementById('reg');

if (reg) {
  reg.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
    // console.log(e.target);
    const res = await fetch('/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();
    if (data.message === 'success') {
      window.location.href = '/cards';
    }
  });
}
