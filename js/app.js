/*
============================================
Constants
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L66
============================================
*/

// TODO: Get DOM elements from the DOM

/*
============================================
DOM manipulation
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L89
============================================
*/

// TODO: Fetch and Render the list to the DOM

// TODO: Create event listeners for the filters and the search

/**
 * TODO: Create an event listener to sort the list.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L91
 */

/*
============================================
Data fectching
@example: https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L104
============================================
*/

// TODO: Fetch an array of objects from the API

/*
============================================
Helper functions
https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/games.html#L154
============================================
*/

/**
 * TODO: Create a function to filter the list of item.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/examples/search-form.html#L135
 * @param {item} item The object with properties from the fetched JSON data.
 * @param {searchTerm} searchTerm The string used to check if the object title contains it.
 */

/**
 * TODO: Create a function to create a DOM element.
 * @example https://github.com/S3ak/fed-javascript1-api-calls/blob/main/src/js/detail.js#L36
 * @param {item} item The object with properties from the fetched JSON data.
 */

 const resultsContainer = document.querySelector(".swiper-wrapper");
 const searchInput = document.getElementById("searchInput");
 const searchButton = document.getElementById("searchButton");
 
 const postsUrl = "http://fastcars.local/wp-json/wp/v2/posts/?per_page=12";
 const mediaUrl = "http://fastcars.local/wp-json/wp/v2/media/";
 
 let media = [];
 let posts = [];
 
 async function fetchBlogsAndInitializeSwiper() {
   try {
     const postsResponse = await fetch(postsUrl);
     posts = await postsResponse.json();
 
     const mediaResponse = await fetch(mediaUrl);
     media = await mediaResponse.json();
 
     renderPosts(posts);
 
     searchInput.removeEventListener("input", handleSearchInput);
 
     searchInput.addEventListener("input", handleSearchInput);
 
     return { media, posts };
   } catch (error) {
     resultsContainer.innerHTML = `Error: ${error}`;
     return { error };
   }
 }
 
 function filterPostsByTitle(searchText) {
   return posts.filter((post) =>
     post.title.rendered.toLowerCase().includes(searchText)
   );
 }
 
 function renderPosts(posts) {
   let html = "";
   posts.forEach((blog) => {
     const featuredImageId = blog.featured_media;
     const featuredImage = media.find((image) => image.id === featuredImageId);
     const imageUrl = featuredImage ? featuredImage.source_url : "";
     const title = blog.title.rendered;
 
     html += `
       <div class="swiper-slide">
         <div class="carousel-post">
           <div class="blogContainer">
             <a href="/details.html"><img src="${imageUrl}" alt="Featured Image"></a>
             <h1 class="car-title">${title}</h1>
           </div>
         </div>
       </div>
     `;
   });
 
   resultsContainer.innerHTML = html;
 
   initializeSwiper();
 }
 
 async function fetchPostsAndRender() {
   try {
     const { media, posts, error } = await fetchBlogsAndInitializeSwiper();
     if (error) {
       console.error("Error:", error);
       return;
     }
   } catch (error) {
     console.error("Error:", error);
   }
 }
 
 function initializeSwiper() {
   new Swiper(".swiper-container", {
     slidesPerView: 4,
     spaceBetween: 10,
     loop: true,
     pagination: {
       el: ".swiper-pagination",
       clickable: true
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev"
     },
     autoplay: {
       delay: 2500,
       disableOnInteraction: false
     },
     touch: {
       enabled: true
     }
   });
 }
 
 function handleSearchInput() {
   const searchText = searchInput.value.trim().toLowerCase();
   const filteredPosts = filterPostsByTitle(searchText);
   renderPosts(filteredPosts);
 }
 
 fetchPostsAndRender()
   .then(() => {
     initializeSwiper();
   })
   .catch((error) => {
     console.error("Error:", error);
   });