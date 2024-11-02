// Array of image sources for the slideshow
const images = [
  "me.jpg",
  "me2.jpg",
];

let currentIndex = 0; // Start at the first image

// Function to update the image with a fade effect
function updateImage() {
  const slideImage = document.getElementById("slideImage");
  slideImage.classList.remove("fade-in"); // Remove class to reset the transition
  slideImage.src = images[currentIndex];

  // Add fade-in class after a small delay
  setTimeout(() => {
      slideImage.classList.add("fade-in");
  }, 10); // Short delay to trigger the transition
}

// Function to show the previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

// Function to show the next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}
