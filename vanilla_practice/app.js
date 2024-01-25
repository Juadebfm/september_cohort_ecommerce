document.addEventListener("DOMContentLoaded", function () {
  const cardsContainer = document.getElementById("cards_container");

  //fetch api

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      console.log(posts);

      posts.forEach((post) => {
        const card = createCard(post); //create later
        cardsContainer.appendChild(card);

        cardsContainer.classList.add("cards_container");
      });

      //   Store Data in the local storage - you cannot store objects in the local storage
      localStorage.setItem("special", JSON.stringify(posts));
    })
    .catch((error) => console.log("Error in fetching data", error));

  // function to create card
  function createCard(post) {
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h2");
    title.textContent = post.title;
    const body = document.createElement("p");
    body.textContent = post.body;
    const cardNumber = document.createElement("span");
    cardNumber.textContent = post.id;

    card.appendChild(cardNumber);
    card.appendChild(title);
    card.appendChild(body);

    return card;
  }
});
