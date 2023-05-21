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

 const postsUrl = "http://fastcars.local/wp-json/wp/v2/posts/?per_page=12";
 const mediaUrl = "http://fastcars.local/wp-json/wp/v2/media/";
 
 async function fetchBlogsAndInitializeSwiper() {
   try {
     const postsResponse = await fetch(postsUrl);
     const posts = await postsResponse.json();
 
     const mediaResponse = await fetch(mediaUrl);
     const media = await mediaResponse.json();
 
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
               <a href="/details.html"><img src="${imageUrl}" alt="Featured Image">
               <h1 class="car-title">${title}</h1></a>
             </div>
           </div>
         </div>
       `;
     });
 
     resultsContainer.innerHTML = html;
 
     return { media, posts };
   } catch (error) {
     resultsContainer.innerHTML = `Error: ${error}`;
     return { error };
   }
 }
 
 fetchBlogsAndInitializeSwiper()
   .then(({ media, posts, error }) => {
     if (error) {
       console.error("Error:", error);
       return;
     }
 
     console.log("Media:", media);
     console.log("Posts:", posts);
 
     new Swiper(".swiper-container", {
       slidesPerView: 4,
       spaceBetween: 10,
       loop: true,
       pagination: {
         el: '.swiper-pagination',
         clickable: true
       },
       navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
       },
       autoplay: {
        delay: 2000,
        disableOnInteraction: false
       },
       touch: {
        enabled: true
       }
     });
   })
   .catch((error) => {
     console.error("Error:", error);
   });