$("#submit-button").on("click", function (event) {
  event.prevent.default;
  let pokemon = $("#search").val().trim();

  $.ajax({
    method: "GET",
    url: "https://api.pokemontcg.io/v1/cards?name=" + pokemon,
  }).then(function (response) {
    for (let i = 0; i < response.cards.length; i++) {
      console.log(response.cards[i].imageURLHiRes);
    }
  });
});
