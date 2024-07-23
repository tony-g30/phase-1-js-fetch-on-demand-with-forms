const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("input#searchByID").value;
  
      // Validate the input
      if (input === "") {
        alert("Please enter an ID.");
        return;
      }
  
      // Fetch movie details based on the entered ID
      fetch(`http://localhost:3000/movies/${input}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Movie not found');
          }
          return response.json();
        })
        .then((data) => {
          // Update the page with movie details
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = data.title || "No title available";
          summary.innerText = data.summary || "No summary available";
        })
        .catch((error) => {
          console.error('Error fetching movie data:', error);
          const title = document.querySelector("section#movieDetails h4");
          const summary = document.querySelector("section#movieDetails p");
  
          title.innerText = "Error";
          summary.innerText = "No movie found with this ID.";
        });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  