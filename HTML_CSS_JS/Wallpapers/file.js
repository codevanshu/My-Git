// Add functionality to set a wallpaper as the background
const wallpapers = document.querySelectorAll(".wallpapers img");
wallpapers.forEach(wallpaper => {
  wallpaper.addEventListener("click", function() {
    document.body.style.backgroundImage = `url(${this.src})`;
  });
});
