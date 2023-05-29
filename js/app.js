 const resultsContainer = document.querySelector(".swiper-wrapper");
 const searchInput = document.getElementById("searchInput");
 const searchButton = document.getElementById("searchButton");
 
 const postsUrl = "https://fastcars-mbn.flywheelsites.com/wp-json/wp/v2/posts/?per_page=10";
 const mediaUrl = "https://fastcars-mbn.flywheelsites.com/wp-json/wp/v2/media/";
 
 const postsPerPage = 12;
 let currentPage = 1;
 
 let media = [];
 let posts = [];
 
 async function fetchBlogsAndInitializeSwiper() {
   try {
     const response = await fetch(`${postsUrl}&page=${currentPage}`);
     posts = await response.json();
 
     const featuredImageIds = posts.map((post) => post.featured_media);
     const featuredImagesResponse = await fetch(`${mediaUrl}?include=${featuredImageIds.join(",")}`);
     media = await featuredImagesResponse.json();
 
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
           <a href="/details.html?id=${blog.id}">
             <img src="${imageUrl}" alt="Featured Image">
             <h1 class="car-title">${title}</h1>
           </a>
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
     slidesPerView: 2,
     spaceBetween: 10,
     loop: true,
     pagination: {
       el: ".swiper-pagination",
       clickable: true
     },
     breakpoints: {
      720: {
        slidesPerView: 4
      }
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