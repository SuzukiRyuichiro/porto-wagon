const movePlayer = (id) => {
  const currentPosition = document
    .querySelector(`#player${id}-race`)
    .querySelector(".active");

  if (currentPosition.nextElementSibling == null) {
    return;
  }
  currentPosition.classList.remove("active");
  currentPosition.nextElementSibling.classList.add("active");
};

const handleKeyUp = (event) => {
  if (event.key === "p") {
    // move scooter
    movePlayer(1);
  } else if (event.key === "q") {
    movePlayer(2);
    // move francisco
  }

  checkWinner();
};

const checkWinner = () => {
  const finished = document.querySelector("td:last-child.active");
  if (finished) {
    const playerWon = finished.parentElement.id.split("-")[0];
    document.querySelector("canvas").style.opacity = 1;
    const result = document.createElement("h1");
    result.innerText = `${playerWon} Won!!!`;
    result.style.fontSize = "200px";
    result.style.textAlign = "center";
    document.body.appendChild(result);
    document.removeEventListener("keyup", handleKeyUp);
  }
};

document.addEventListener("keyup", handleKeyUp);
