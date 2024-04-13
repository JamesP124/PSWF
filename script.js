document.addEventListener("DOMContentLoaded", function () {
  var loginButton = document.querySelector('.login-btn');
  var scoresButton = document.querySelector('.live-scores');
  var loginForm = document.querySelector('.login-form');
  var scores = document.querySelector('.scoreboard');

  loginButton.addEventListener('click', function () {
      loginForm.style.display = 'block';
      scores.classList.remove('show-scores');
  });

  scoresButton.addEventListener('click', function () {
      scores.classList.toggle('show-scores');
      loginForm.style.display = 'none';
  });
});
const body = document.querySelector('body');
const blackBackground = document.querySelector('.black-background');

window.addEventListener('scroll', function() {
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );

  const scrolled = window.scrollY / (scrollHeight - window.innerHeight);

  body.style.backgroundColor = `rgba(255, 255, 255, ${1 - scrolled})`;
  blackBackground.style.opacity = scrolled;
});

// Add the rest of your JavaScript code...

