const resultsContainer = document.querySelector(".carousel");
const loadMoreButton = document.querySelector(".load-more");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseButton = document.querySelector(".close");
const modalImage = document.querySelector("#modalImage");

// Function to handle image click
function handleImageClick(event) {
  event.preventDefault();

  // Get the clicked image source URL
  const clickedImageSrc = event.target.src;

  // Update the modal image source URL
  modalImage.src = clickedImageSrc;

  // Show the modal
  modalOverlay.style.display = "block";
}

// Function to handle modal close button click
function handleModalCloseClick() {
  // Hide the modal
  modalOverlay.style.display = "none";
}

// Add event listener to each image in the carousel
resultsContainer.addEventListener("click", function(event) {
  if (event.target.classList.contains("car-img")) {
    handleImageClick(event);
  }
});

// Add event listener to modal close button
modalCloseButton.addEventListener("click", handleModalCloseClick);

const postsUrl = "https://fastcars-mbn.flywheelsites.com/wp-json/wp/v2/posts/";
const mediaUrl = "https://fastcars-mbn.flywheelsites.com/wp-json/wp/v2/media/";

const postsPerPage = 10;
let currentPage = 1;

async function fetchBlogs() {
  try {
    const response = await fetch(`${postsUrl}?per_page=${postsPerPage}&page=${currentPage}`);
    const posts = await response.json();

    const featuredImageIds = posts.map(blog => blog.featured_media);
    const mediaResponse = await fetch(`${mediaUrl}?include=${featuredImageIds.join(",")}`);
    const media = await mediaResponse.json();

    let html = "";
    posts.forEach(blog => {
      const featuredImageId = blog.featured_media;
      const featuredImage = media.find(image => image.id === featuredImageId);
      const imageUrl = featuredImage ? featuredImage.source_url : "";

      html += `
        <div class="post">
          <img src="${imageUrl}" alt="Featured Image" class="car-img">
          <a href="/details.html?id=${blog.id}">
            <h1 class="car-title">${blog.title.rendered}</h1>
          </a>
        </div>
      `;
    });

    resultsContainer.innerHTML += html;

    if (posts.length >= postsPerPage) {
      loadMoreButton.style.display = "block";
    } else {
      loadMoreButton.style.display = "none";
    }
  } catch (error) {
    resultsContainer.innerHTML = `Error: ${error}`;
  }
}

function handleLoadMoreClick() {
  currentPage++;
  fetchBlogs();
}

fetchBlogs();

loadMoreButton.addEventListener("click", handleLoadMoreClick);