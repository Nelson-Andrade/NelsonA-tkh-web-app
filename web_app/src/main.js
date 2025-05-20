document.addEventListener('DOMContentLoaded', function() {
  const results = document.getElementById('results');
  const generateButton = document.getElementById('generateButton');

  async function generateNewImage() {
    try {
      const dogImg = await fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(resp => resp.json());

      if (dogImg) {
        displayImg(dogImg.message);
      } else {
        displayError();
      }
    } catch (e) {
      console.log(e);
      displayError();
    }
  }

  function displayImg(imageUrl) {
    results.innerHTML = ''; // Clear previous image for new img to take its place
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Random Dog Image';
    results.appendChild(img);
  }

  function displayError() {
    results.innerHTML = '<p>Failed to load image. Please try again later.</p>';
  }

  // Attach the displayImg() function to the button
  generateButton.addEventListener('click', generateNewImage);
});
