# This is a Video-search-and Play App created with React

This project was created following "Modern React with Redux" course on Udemy taught by Stephen Grider.
Completed on August 5, 2021.

Features:
    . API to youTube
    . Users can enter keyword to search corresponding videos
    . 5 videos will be listed 
    . User can click one of them and play it in browser

Created Separate reusable React components:
    . SearchBar
    . VideoItem for each video render with its details (title, description, ID, etc.)
    . VideoList for rendering list of videos fetched (axios) from youTube
    . Embeded iFrame for video play
    . API to youTube
    . Props and Callback functions to transfer data between React components
    . Use State to render the search array, and the selected Video to play inside the browser frame