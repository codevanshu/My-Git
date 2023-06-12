let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("game");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function searchGames() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let games = document.getElementsByClassName("game");
  for (let i = 0; i < games.length; i++) {
    let title = games[i].getElementsByTagName("h3")[0];
    let description = games[i].getElementsByTagName("p")[0];
    if (
      title.textContent.toLowerCase().indexOf(input) > -1 ||
      description.textContent.toLowerCase().indexOf(input) > -1
    ) {
      games[i].style.display = "";
    } else {
      games[i].style.display = "none";
    }
  }
}

const form = document.getElementById("contactForm");
const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const messageInput = document.getElementById("messageInput");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  // Send formData to server using fetch or XMLHttpRequest
  console.log(formData);
  // Reset form fields
  form.reset();
});
