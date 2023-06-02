const reg = document.getElementById('reg');
const answerBtn = document.querySelector('.btn-answer');
const nextBtn = document.querySelector('.btn-next');

if (reg) {
  reg.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { name, email, password } = e.target;
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
      window.location.assign(`/cards`);
    }
  });
}

if (answerBtn) {
  answerBtn.addEventListener('click', (e) => {
    document.querySelector('.hidden').classList.toggle('hidden');
  });
}
