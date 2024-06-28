import * as Carousel from "./Carousel.js";
//import axios from "axios";

// The breed selection input element.
const breedSelect = document.getElementById("breedSelect");
// The information section div element.
const infoDump = document.getElementById("infoDump");
// The progress bar div element.
const progressBar = document.getElementById("progressBar");
// The get favourites button element.
const getFavouritesBtn = document.getElementById("getFavouritesBtn");

// Step 0: Store your API key here for reference and easy access.
const API_KEY =
  "live_JMdj3gAkMUtsP3c8U9AKTwDUW86Qfalm0Eyrfy7IAGctoAhp1UjvmMbrWMuinQKq";
axios.defaults.baseURL = "https://api.thecatapi.com/v1";
axios.defaults.headers.common["x-api-key"] = API_KEY;

/**
 * 1. Create an async function "initialLoad" that does the following:
 * - Retrieve a list of breeds from the cat API using axios.
 * - Create new <options> for each of these breeds, and append them to breedSelect.
 *  - Each option should have a value attribute equal to the id of the breed.
 *  - Each option should display text equal to the name of the breed.
 * This function should execute immediately.
 */
(async function initialLoad() {
  const res = await axios("/breeds");
  const breeds = await res.data;

  breeds.forEach((breed) => {
    const opt = document.createElement("option");
    opt.value = breed.id;
    opt.textContent = breed.name;

    breedSelect.appendChild(opt);
  });

  loadCarousel();
})();

/**
 * 2. Create an event handler for breedSelect that does the following:
 * - Retrieve information on the selected breed from the cat API using axios.
 *  - Ensure the request receives multiple array items.
 * - For each object in the response array, create a new element for the carousel.
 *  - Append each of these new elements to the carousel.
 * - Use the other data you have been given to create an informational section within the infoDump element.
 * - Each new selection should clear, re-populate, and restart the Carousel.
 * - Add a call to this function to the end of your initialLoad function above to create the initial carousel.
 */
breedSelect.addEventListener("change", loadCarousel);
async function loadCarousel() {
  const val = breedSelect.value;
  const url = `/images/search?limit=25&breed_ids=${val}`;

  const res = await axios(url, {
    onDownloadProgress: updateProgress
  });

  buildCarousel(res.data);
}

function buildCarousel(data, favourites) {
  Carousel.clear();
  infoDump.innerHTML = "";

  data.forEach((ele) => {
    const item = Carousel.createCarouselItem(
      ele.url,
      breedSelect.value,
      ele.id
    );
    Carousel.appendCarousel(item);
  });

  if (favourites) {
    infoDump.innerHTML = "Here are your saved favourites!";
  } else if (data[0]) {
    const info = data[0].breeds || null;
    if (info && info[0].description) infoDump.innerHTML = info[0].description;
  } else {
    infoDump.innerHTML =
      "<div class='text-center'>No information on this breed, sorry!</div>";
  }

  Carousel.start();
}

/**
 * 6. Create a progress bar to indicate the request is in progress.
 * - Modify the "width" style property of the progressBar element to align with the request progress.
 * - Use the axios onDownloadProgress config option.
 */
function updateProgress(progressEvent) {
  const total = progressEvent.total;
  const current = progressEvent.loaded;
  const percentage = Math.round((current / total) * 100);

  progressBar.style.transition = "width ease 1s";
  progressBar.style.width = percentage + "%";
}

/**
 * 7. Add axios interceptors to log the time between request and response to the console.
 * - Set the body element's cursor style to "progress" during the request.
 * - Remove the progress cursor style from the body element after the request.
 */
axios.interceptors.request.use((request) => {
  console.log("Request Started.");
  progressBar.style.transition = "none";
  progressBar.style.width = "0%";
  document.body.style.setProperty("cursor", "progress", "important");

  request.metadata = request.metadata || {};
  request.metadata.startTime = new Date().getTime();

  return request;
});

axios.interceptors.response.use(
  (response) => {
    response.config.metadata.endTime = new Date().getTime();
    response.config.metadata.durationInMS =
      response.config.metadata.endTime - response.config.metadata.startTime;

    console.log(
      `Request took ${response.config.metadata.durationInMS} milliseconds.`
    );
    document.body.style.cursor = "default";
    return response;
  },
  (error) => {
    error.config.metadata.endTime = new Date().getTime();
    error.config.metadata.durationInMS =
      error.config.metadata.endTime - error.config.metadata.startTime;

    console.log(
      `Request took ${error.config.metadata.durationInMS} milliseconds.`
    );
    document.body.style.cursor = "default";
    throw error;
  }
);

/**
 * 8. Create a system to "favourite" certain images.
 * - Post to the cat API's favourites endpoint with the given ID.
 * - Add logic to toggle the favourite status using the API.
 */
export async function favourite(imgId) {
    try {
      const isFavorite = await axios.get(`/favourites?image_id=${imgId}`);
  
      if (isFavorite.data.length > 0) {
        await axios.delete(`/favourites/${isFavorite.data[0].id}`);
        console.log(`Image ${imgId} removed from favourites.`);
      } else {
        await axios.post("/favourites", {
          image_id: imgId,
        });
        console.log(`Image ${imgId} added to favourites.`);
      }
    } catch (error) {
      console.error("There was an error toggling the favourite status:", error);
    }
  }

/**
 * 9. Create a getFavourites() function.
 * - Use Axios to get all of your favourites from the cat API.
 * - Clear the carousel and display your favourites when the button is clicked.
 */
getFavouritesBtn.addEventListener("click", () => {
  getFavourites();
});
async function getFavourites() {
  const favourites = await axios(`/favourites`);

  const formattedFavs = favourites.data.map((entry) => {
    return entry.image;
  });

  buildCarousel(formattedFavs);
}

/**
 * 10. Test your site, thoroughly!
 * - Test various breeds to ensure all functionality is working as expected.
 */
