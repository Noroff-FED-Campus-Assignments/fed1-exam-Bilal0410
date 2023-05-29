 const detailsContainer = document.querySelector("#js-details-container");
 const queryString = document.location.search;
 const params = new URLSearchParams(queryString);
 const id = params.get("id");
 const postsUrl = `https://fastcars-mbn.flywheelsites.com/wp-json/wp/v2/posts/${id}`;
 
 async function fetchPosts() {
   try {
     const response = await fetch(postsUrl);
     const details = await response.json();
 
     createHtml(details);
   } catch (error) {
     console.log(error);
     detailsContainer.innerHTML = `<p>Error: ${error}</p>`;
   }
 }
 
 fetchPosts();
 
 function createHtml(details) {
   detailsContainer.innerHTML = `
     <h1>${details.title.rendered}</h1>
     <p>${details.content.rendered}</p>
   `;
 }