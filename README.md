[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/EF97x2Z3)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11036411&assignment_repo_type=AssignmentRepo)
# FED Exam - Vanilla Front-end Website

This bootstrap template is intended to help you deliever a amazing website which delights your end-users. Feel free to change, remove or start your own project from scratch. Please replace any text which starts with an `_`.

This is a vanilla website that displays a list of items fetched from an API.

This project was bootstrapped with Vite.

## Resources

- [Brief](https://fed-vocational-astro-course.vercel.app/en/exam-1/brief)
- [Design](https://www.figma.com/file/LxTtKtDYGsgn26KnthRJFc/FASTCARS---PROJECT-EXAM-1?type=design&node-id=0%3A1&t=6Pjwe92CQ7OyFhxj-1)
- [Production deploy](_LINK_TO_WEBSITE_)
- [Deployment CI](_LINK_TO_NETLIFY_VERCEL_DASHBOARD_)
- [API Docs](_LINK_TO_API_DOCS_)
- [API Endpoint](_LINK_TO_API_DOC)

## Deployment

Your deployment is done via static hosting provider (Vercel is recommended).
YOu can update your deployment pipeling by editing the [vercel.json](https://vercel.com/docs/concepts/projects/project-configuration).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FS3ak%2Ffed1-exam-vanilla-frontend-website&env=API_TOKEN,API_SECRET&envDescription=The%20API_TOKEN%20is%20needed%20to%20access%20a%20secure%20API%20endpoint.%20This%20can%20be%20the%20Authorization%20%60Bearer%20Token%60%20header%20used%20to%20make%20queries.&envLink=https%3A%2F%2Fvitejs.dev%2Fguide%2Fenv-and-mode.html&project-name=exam-front-end&repository-name=fed1-exam-vanilla-frontend-website&skippable-integrations=1)

## Report

POJECT EXAM 1 REPORT

For this project exam, I chose to create a blog page about cars. The idea was to develop a review platform for luxury fast cars, so I named my page "FastCars." To maintain a consistent theme, I selected a black and red color combination as the main colors for my page. I created the logo for the page using an app and based the rest of the design on those colors. The font "Audiowide" appeared aesthetically pleasing for my logo, so I used it as the primary font for the entire site. This font is applied to the navigation bar, footer text, and all the headings on the site. Additionally, I carefully selected hero images that complemented the different pages on my site.

The header includes a menu button for smaller screens, referred to as the toggleButton. The code for the menu button initializes event listeners to handle the toggle button and enables horizontal scrolling within the blog containers. It ensures that the navigation links can be shown or hidden when the toggle button is clicked, and it provides functionality to navigate between different sections within the blog containers.

In terms of JavaScript code, I fetched my blog posts from my WordPress site and displayed them in a carousel using the Swiper library. I started by selecting the necessary HTML elements to display the results and handle user input. Next, I defined two URLs for fetching the posts and the featured images. Afterward, I initialized variables for the number of posts per page and the current page. To store fetched media and posts, I created arrays. The "fetchBlogsAndInitializeSwiper" function is an asynchronous function that fetches the posts and featured images, renders the posts in the results container, and sets up a search input event listener. The "filterPostsByTitle" function filters the posts based on a search text, and the "renderPosts" function generates HTML markup for each post, rendering them in the results container using the Swiper carousel. Throughout the process, my code ensures error handling, providing a seamless and interactive experience for users to explore and search through the blog posts on my WordPress site.

For my list page, I followed a similar approach of fetching and displaying posts with featured images in a specific format. I created two event handlers: "handleImageClick" and "handleModalCloseClick." The first function is triggered when a user clicks on an image, while the other function is triggered when the user clicks on the "ModalCloseButton" to close the image. The click and load more button utilize the "handleLoadMoreClick" function, which increments the "currentPage" variable and calls the "fetchBlogs" function again to fetch the next page of posts. Finally, the code initially calls the "fetchBlogs" function to fetch and display the first page of blog posts. An event listener is also added to the loadMoreButton to trigger the "handleLoadMoreClick" function when clicked.

For my details page, I began by selecting the HTML elements with corresponding IDs and assigned them to the "detailsContainer" variable. Then, I retrieved the URL's query string using "document.location.search" and assigned it to the "queryString" variable. I used the "URLSearchParams" object to parse the query string and extracted the value for the ID parameter, which was assigned to the "id" variable. As a result, when the user clicks on any blog post from the list page, they are directed to the details page of the corresponding blog post.

To validate the contact form, the code selects form elements and corresponding error elements using the "querySelector" method. The "validateForm" function is called when the form is submitted. It checks the length and validity of each input field using helper functions and displays or hides error messages accordingly. If all validations pass, a success alert is shown, and the form is reset. If the requirements are not met, the user will see a red text underneath the input tag, indicating how to validate the forms. The "checkLength" function trims the input value and checks its length, while the "validateEmail" function uses a regular expression to validate an email address. Lastly, an event listener is added to the name input field to validate its value when blurred.

Regarding my search form and slider on the home page, there are occasional bugs. Despite reviewing the code multiple times and seeking assistance from ChatGBT to resolve the issue, the AI indicated that there was nothing wrong with the code. Occasionally, the search input may target the same search exactly, but subsequent attempts might not yield the same targeted blog post. The slider sometimes hangs up and moves forward and backward unexpectedly. I attempted to fix this problem but was unable to find a solution.

For my hotjar installation I interviewed a friend of mine and asked what I could possibly improve. The respond I got was to make it even more responsive and to make the css better for each page. I then made media queries and improved my css for each page till I was satisfied with the changes.

SOURCES

Home page image:
https://www.astonmartinchicago.com/aston-martin-luxury-sports-cars.htm

About page image:
https://en.wikipedia.org/wiki/Supercar#/media/File:Supercar_Lineup_(18092106572).jpg

Contact page image:
https://unsplash.com/photos/OJX7gIU3E6U


BLOG LIST IMAGES

Chevrolet Corvette Stingray:
https://www.caranddriver.com/news/a29358931/2020-chevrolet-corvette-build-price-spec/ - Author: Eric Tingwall.

Maserati Levante:
https://www.cnet.com/roadshow/reviews/2022-maserati-levante-trofeo-3-8l-review/ - Author: Andrew Krok.

Bentley Continental GT:
https://www.cnet.com/roadshow/pictures/2022-bentley-continental-gt-speed-coupe/ - Author: Daniel Golson.

Aston Martin DB11:
https://unsplash.com/photos/hXK7sCKTWB0 - Author: Alexandru Ivanov.

Lamborghini Huracan Evo:
https://www.caranddriver.com/reviews/a33978640/2020-lamborghini-huracan-evo-rwd-drive/ - Author: Scott Oldham.

Rolls-Royce Ghost:
https://www.motor1.com/news/612579/rolls-ghost-black-badge-spofec/ - Author: Anthony Alaniz.

Jaguar F-Type:
https://www.motortrend.com/cars/jaguar/f-type/ - Author: MotorTrend.


Porsche 911 Carrera:
https://bil24.no/endelig-onskes-nye-gts-velkommen-i-911-familien/ - Author: Bil24.

Tesla Model 3:
https://e-vehicleinfo.com/fastest-electric-cars-by-top-speed-range-india/ - Author: Electric Vehicle Info.

Audi A4:
https://moller.no/no/nyhetsrom/nye-audi-a4-sportsligere-og-skarpere - Author: Moller.

BMW 3-Series:
https://www.autotrader.com/comparisons/2022-bmw-3-series-choosing-the-right-trim - Author: Russ Heaps.

Mercedes-Benz A-Class:
https://carbuzz.com/cars/mercedes-benz/a-class - Author: Carbuzz.

## Getting Started

In the project directory, you can run:

- install the project node module dependencies $`npm i`
- Runs the app in the development mode. `npm run dev`
- Open `http://0.0.0.0:5173/` to view it in the browser.

## Minimum acceptence criteria (Required - 50%)

All of these todo's must be done to pass the asssignment.

- [ ] A error message is present when the End-user encounters a error while viewing the index page.
- [ ] A error message is present when the End-user encounters a error while viewing the details page.
- [ ] As a customer I can view the title of the item on the browser tab for a details page.
- [ ] As a customer I can view validation message when they input an incorrect name.
- [ ] As a customer I can view validation message when they input an incorrect subject that is less than 15 characters.
- [ ] As a customer I can view validation message when they input an incorrect Email address.
- [ ] As a customer I can view a validation message when they input an incorrect physical address that is less than 25 characters long.
- [ ] As a customer I want to be able to view the latest blog posts on the home page.
- [ ] As a customer, I want to see a list of the first 10 blog posts on the blog section, so that I can quickly scan through the content and decide which posts I want to read.
- [ ] As a customer I want to be able to view a list of all blog posts on the blog section.
- [ ] As a customer I want A responsive website that can be As a customer, I want to ensure that the website is responsive and accessible so that I can access it on any device and easily navigate through it using any accessibility tools I need.
- [ ] As a customer, I want to see a clear and visually appealing design on the website, so that I can easily read the content and engage with the website.
- [ ] As a customer, I want to see a carousel/slider on the home page to display the latest blog posts, so that I can quickly access and view the latest content.
- [ ] As a customer, I want to be able to click on a blog post and be taken to a page with specific details about that post, so that I can get more in-depth information about the topic.
- [ ] As a customer, I want to be able to click on images in a blog post and see a larger version in a modal, so that I can view images in greater detail.
- [ ] As a customer, I want to be able to easily contact the website owners through a contact form, so that I can reach out with any questions or feedback.
- [ ] As a customer, I want to see error messages when I fill out the contact form incorrectly, so that I can correct my mistakes and successfully submit my message.

## End-user success criteria (Optional - 100%)

- [ ] End-user can search for a specific item.
- [ ] End-user can filter the list.
- [ ] End-user can sort list by;
  - [ ] Name ascending order
  - [ ] Name descending order
- [ ] Confirmation modal after custumer submits a successful contact form.
- [ ] End-user can auto-fill the contact form using the browser auto-fill.
- [ ] End-user can auto-fill the contact form using a password manager.
- [ ] Validation still works when End-user uses copy and pastes into input fields.
- [ ] End-user can see a postive feedback when they input correct info and pass validation.
- [ ] End-user can experience pleasant animations.
- [ ] End-user needs to prove there are human using a captcha feature on the contact form.
  - [ ] Each item in the list has a staggered animation.
  - [ ] Contact form success modal fades in.
- [ ] End-user can view a custom favicon.
- [ ] CSS uses variables
- [ ] Code is dry - There are no repeating functions, variables.
- [ ] My commit messages are relavant and make sense. [How to write good commit messages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
- [ ] As a stakeholder, I want to view the website analytics.
- [ ] As a stakeholder, I want to show my customers a disclamer on the website, so that they are aware of the terms and conditions of using the website.
- [ ] As a customer, I want to ensure that my personal information submitted through the contact form is kept secure and not shared with any third-party entities.
- [ ] As a customer, I want to be able to sort, filter, or search the blog posts, so that I can quickly find the content that is most relevant to me.
- [ ] As a customer, I want to be able to submit comments on a blog post, so that I can engage with other readers and share my thoughts on the topic.

- [ ] [End-user experiences a complete custom UI design.](https://www.figma.com/file/KExTTAE75DRhq2xTvapFR4/FED-Whiteboard?node-id=0%3A1&t=UItKehGgT8gRlibY-1)

  - [ ] Is user-friendly
  - [ ] Effective use of the pillars of design
    - [ ] Typography
    - [ ] Colour
    - [ ] Composition
    - [ ] Art Direction
    - [ ] Motion
  - [ ] Adhered to principles of design
    - [ ] Contrast
    - [ ] Balance and alignment
    - [ ] Emphasis
    - [ ] Proportion
    - [ ] Hiearchy
    - [ ] Repetition
    - [ ] Ryhthem
    - [ ] Pattern
    - [ ] Negative space
    - [ ] Movement

## Checklist

Make sure you go through this checklist before submitting your project to Moodle.

- [ ] All pages have a meta description.
- [ ] All pages have a valid title.
- [ ] All pages import the correct css files.
- [ ] All pages import the correct JS file.
- [ ] Details page URL includes a query param.
- [ ] My website makes a GET request to an API to get a list of results.
- [ ] My website makes a GET request to an API to get details of one result.
- [ ] Input fields have the following attributes;
- [ ] All images have an alt tag;
  - [ ] A name,
  - [ ] A placeholder,
  - [ ] A aria-describedby,
  - [ ] Required
- [ ] I have not copied Javascript code.
- [ ] I have not used a Javascript library.
- [ ] Removed all unused files.
- [ ] Named all images properly.
- [ ] Committed all my code to github.
- [ ] My repo is publically viewable.
- [ ] I've submitted/ written a report.
- [ ] I've removed all todo notes in code.
- [ ] I've removed all console logs in code.
- [ ] Code is formatted correctly.
- [ ] There are no red underlines in VSCode.
- [ ] There are no error messages in the terminal when I run the project.
- [ ] My code is indented correctly.
- [ ] I've checked my report for grammer & spelling using grammerly or chatGPT
- [ ] I've used used [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [ ] I've checked off every todo in this README.

## Help & Tutorials

- https://web.dev/learn/forms/
- https://fed-vocational-astro-course.vercel.app/en/html-css/module-2/forms

## Application stack

- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Prettier](https://prettier.io/) - An opinionated code formatter
- [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code
- [Open-props](https://open-props.style/) - Supercharged
  CSS variables.
- [Animate.css](https://animate.style/) - Just-add-water CSS animations

## Authors

- Mohammad Bilal Naz (@Bilal0410)
- Monde Sineke (@S3ak)
