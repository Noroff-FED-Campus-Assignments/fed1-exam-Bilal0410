const resultsContainer = document.querySelector(".carousel");
const loadMoreButton = document.querySelector(".load-more");

const postsUrl = "http://fastcars.local/wp-json/wp/v2/posts/";
const mediaUrl = "http://fastcars.local/wp-json/wp/v2/media/";

const postsPerPage = 10;
let currentPage = 1;

async function fetchBlogs() {
  try {
    const response = await fetch(`${postsUrl}?per_page=${postsPerPage}&page=${currentPage}`);
    const posts = await response.json();

    const mediaResponse = await fetch(mediaUrl);
    const media = await mediaResponse.json();

    let html = "";
    posts.forEach(blog => {
      const featuredImageId = blog.featured_media;
      const featuredImage = media.find(image => image.id === featuredImageId);
      const imageUrl = featuredImage ? featuredImage.source_url : "";

      html += `
      <div class="post">
        <div class="blogContainer">
        <a href="/details.html"><img src="${imageUrl}" alt="Featured Image"></a>
        <h1 class="car-title">${blog.title.rendered}</h1>
        </div>
      </div>
      `;
    });

    resultsContainer.innerHTML += html;

    // If there are more posts available, show the load more button
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