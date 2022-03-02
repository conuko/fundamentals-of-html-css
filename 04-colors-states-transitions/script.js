window.addEventListener("load", function (event) {

  var today = new Date();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  document.getElementById('date__weekday').innerHTML = weekday[today.getDay()];
  document.getElementById('date__month').innerHTML = monthNames[today.getMonth()];
  document.getElementById('date__day').innerHTML = today.getDate();
  document.getElementById('date__year').innerHTML = today.getFullYear();

  document.querySelectorAll('.btn').forEach(el => {
    el.addEventListener('click', e => {
      for( var item of document.querySelectorAll('.btn') ) {
        item.classList.remove('active');
      }
      el.classList.add('active');
      let theme = el.dataset.theme;
      document.body.setAttribute('data-theme', theme);
    });
  });
});