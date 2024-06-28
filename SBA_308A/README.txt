Files
index.html: Main HTML file.
styles.css: CSS styling.
index.js: JavaScript logic.
Usage
Open the index.html file in a web browser.
Select a breed from the dropdown menu to see its details.
Click the "Get Favourites" button to display favorite cat breeds.
Dependencies
Axios: Included via CDN for HTTP requests.
Features
Dropdown Menu: Select and view cat breed details.
Favorites Button: Display favorite cat breeds.
Progress Bar: Loading indicator.
Carousel: Display images or content.
Info Dump: Detailed information section.

Styles
General: Arial font, light background.
Header: Dark background, white text, centered.
Main: Padding.
Controls: Flexbox, aligned center, gap, margin.
Breed Selector: Padding, font size.
Progress Bar: Height, color, transition.
Carousel: Flexbox, scrollable, gap, margin.
Carousel Item: Min width, border, radius, overflow, position.
Image: Full width, auto height.
Favourite Button: Positioned, styled, hover effect.
Info Dump: White background, padding, border, radius.
Favourites Button: Styled, transition, hover effect.

JS
Features
Initial Load: Fetches cat breeds and initializes the application.
Breed Selection: Updates the carousel with images and breed information based on user selection.
Progress Bar: Provides visual feedback during API requests.
Favorites Management: Allows users to add/remove images from their favorites list.
Usage
Setup: Replace the placeholder API key with your own.
Functionality: Enables breed selection, image display, and favorite management seamlessly.
Testing: Ensure all features work correctly across different breeds.
Code Overview
Initialization: Sets up necessary elements and API configurations.
Breed Selection: Handles user selection events to update carousel and information display.
Progress Bar: Displays loading progress for API requests.
Favorites: Manages favorite images with add/remove functionality.

Carousel

Functions
clear: Clears all carousel items.
createCarouselItem: Creates a carousel item with an image and favorite button.
appendCarousel: Appends a carousel item to the carousel container.
start: Optional function for initializing the carousel.
Usage
Integration: Import these functions into your main script (index.js) to manage carousel items dynamically.
Modification: Customize these functions to suit specific carousel requirements or additional functionality.