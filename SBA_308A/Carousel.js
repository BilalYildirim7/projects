
export function clear() {
    const carousel = document.getElementById("carousel");
    carousel.innerHTML = "";
}

export function createCarouselItem(url, breedId, imgId) {
    const item = document.createElement("div");
    item.className = "carousel-item";

    const img = document.createElement("img");
    img.src = url;
    item.appendChild(img);

    const favButton = document.createElement("button");
    favButton.className = "favourite-button";
    favButton.innerHTML = "❤";
    favButton.addEventListener("click", () => {
        import("./index.js").then(module => {
            module.favourite(imgId);
        });
    });

    item.appendChild(favButton);
    return item;

}

export function appendCarousel(item) {
    const carousel = document.getElementById("carousel");
    carousel.appendChild(item);
}

export function start() {
    // Optional: Any initialization code for the carousel.
}
