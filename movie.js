const movieDatabase = {
    action: [
        { title: "Mad Max: Fury Road", description: "A woman rebels against a tyrannical ruler in post-apocalyptic Australia." },
        { title: "John Wick", description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him." },
    ],
    comedy: [
        { title: "The Hangover", description: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night." },
        { title: "Superbad", description: "Two co-dependent high school seniors are forced to deal with separation anxiety." },
    ],
    drama: [
        { title: "The Shawshank Redemption", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
        { title: "Forrest Gump", description: "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other events unfold from the perspective of an Alabama man with an IQ of 75." },
    ],
    horror: [
        { title: "The Conjuring", description: "Paranormal investigators work to help a family terrorized by a dark presence." },
        { title: "Hereditary", description: "A grieving family is haunted by tragic and disturbing occurrences." },
    ],
    romance: [
        { title: "Pride and Prejudice", description: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy." },
        { title: "The Notebook", description: "A poor yet passionate young man falls in love with a rich young woman." },
    ]
};

function getRecommendations() {
    const genre = document.getElementById("genre").value;
    const recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = ""; // Clear previous recommendations

    const movies = movieDatabase[genre];
    
    if (movies && movies.length > 0) {
        movies.forEach(movie => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");
            
            const movieTitle = document.createElement("h3");
            movieTitle.textContent = movie.title;

            const movieDescription = document.createElement("p");
            movieDescription.textContent = movie.description;

            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(movieDescription);

            recommendationsDiv.appendChild(movieDiv);
        });
    } else {
        recommendationsDiv.textContent = "No recommendations available for this genre.";
    }
}
