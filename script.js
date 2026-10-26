const form = document.getElementById('regForm');
const confirmation = document.getElementById('confirmation');

// "Register" buttons on event cards: pre-select the event and jump to the form
document.querySelectorAll('.reg-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.getElementById('event').value = btn.dataset.event;
    document.getElementById('register').scrollIntoView();
  });
});

function setError(id, message) {
  document.getElementById(id + 'Err').textContent = message;
  document.getElementById(id).classList.toggle('invalid', message !== '');
  return message === '';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const college = document.getElementById('college').value.trim();
  const event = document.getElementById('event').value;

  const results = [
    setError('name', name.length < 3 ? 'Enter your full name (at least 3 letters).' : ''),
    setError('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Enter a valid email address.'),
    setError('phone', /^[0-9]{10}$/.test(phone) ? '' : 'Enter a 10-digit phone number.'),
    setError('college', college === '' ? 'Enter your college or department.' : ''),
    setError('event', event === '' ? 'Select an event.' : '')
  ];

  if (results.includes(false)) return;

  document.getElementById('cName').textContent = name;
  document.getElementById('cEvent').textContent = event;
  document.getElementById('cEmail').textContent = email;
  document.getElementById('cId').textContent = 'TS26-' + Math.floor(1000 + Math.random() * 9000);

  form.hidden = true;
  confirmation.hidden = false;
});

document.getElementById('again').addEventListener('click', function () {
  form.reset();
  confirmation.hidden = true;
  form.hidden = false;
});