function onClickNavHandler() {
  for (const link of document.querySelectorAll("nav li a")) {
    link.addEventListener('click', function(event) {
      // hide all containers
      document.querySelectorAll("nav li a")
        .forEach(el => document.querySelector(`.${el.getAttribute('href').substring(1)}`).style.display = 'none');

      // remove active class
      document.querySelectorAll("nav li a")
        .forEach(el => el.classList.remove('active'));

      // get the link that was clicked and target that container
      document.querySelector(`.${event.currentTarget.getAttribute('href').substring(1)}`).style.display = "flex";

      // add activ eclass to node element
      link.classList.add('active');
    })
  }
}

const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "light-theme.css") {
    theme.href = "dark-theme.css";
    btn.innerHTML = "Light Theme";
  
  } else {
    theme.href = "light-theme.css";
    btn.innerHTML = "Dark Theme";
  }
});



onClickNavHandler();
