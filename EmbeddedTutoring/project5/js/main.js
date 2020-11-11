const data = window.data;

const createCard = (car) => {
  const card = document.createElement("div");
  const cardLI = [];

  card.classList.add("card");
  card.appendChild(document.createElement("ul"));

  console.log(Object.keys(car));

  Object.keys(car).forEach((key) => {
    if (key === "id") return;
    if (key === "isAvailable") return;
    const item = document.createElement("li");
    const text = document.createTextNode(
      `${key}: ${key === "msrp" ? `$${car[key].toFixed(2)}` : car[key]}`
    );
    item.append(text);
    cardLI.push(item);
  });

  // Alternate Solution
  // The one weakness is if the API data changes an engineer would have to modify this as well
  // (current solution will work with data changes)
  // const markup = `
  //                 <li>Make: ${car.make}</li>
  //                 <li>Model: ${car.model}</li>
  //                 <li>MSRP: $${car.msrp.toFixed(2)}</li>
  //                 <li>Available Cars: ${car.numberAvailable}</li>`;

  // card.querySelector("ul").innerHTML = markup;

  card.querySelector("ul").append(...cardLI);
  document.body.appendChild(card);
};

data.forEach((car) => {
  if (car.isAvailable) createCard(car);
});
