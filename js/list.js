const resultsContainer = document.querySelector(".carousel");
const loadMoreButton = document.querySelector(".load-more");
const modalOverlay = document.querySelector(".modal-overlay");
const modalCloseButton = document.querySelector(".close");
const modalImage = document.querySelector("#modalImage");

function handleImageClick(event) {
  event.preventDefault();

  const clickedImageSrc = event.target.src;

  modalImage.src = clickedImageSrc;

  modalOverlay.style.display = "block";
}

function handleModalCloseClick() {
  modalOverlay.style.display = "none";
}

resultsContainer.addEventListener("click", function(event) {
  if (event.target.classList.contains("car-img")) {
    handleImageClick(event);
  }
});

modalCloseButton.addEventListener("click", handleModalCloseClick);

const postsUrl = "https://fastcars-mbn.flywheelsites.com/wp-json/wp/v2/posts/";
const mediaUrl = "https://fastcars-mbn.flywheelsites.com/wp-json/wp/v2/media/";

const postsPerPage = 10;
let currentPage = 1;
let posts = [];
let media = [];

async function fetchBlogs() {
  try {
    const response = await fetch(`${postsUrl}?per_page=${postsPerPage}&page=${currentPage}`);
    posts = await response.json();

    const featuredImageIds = posts.map(blog => blog.featured_media);
    const mediaResponse = await fetch(`${mediaUrl}?include=${featuredImageIds.join(",")}`);
    media = await mediaResponse.json();

    displayPosts(posts);
  } catch (error) {
    resultsContainer.innerHTML = `Error: ${error}`;
  }
}

function displayPosts(posts) {
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
}

function handleLoadMoreClick() {
  currentPage++;
  fetchBlogs();
}

fetchBlogs();

loadMoreButton.addEventListener("click", handleLoadMoreClick);