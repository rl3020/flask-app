const worldVisitors = document.getElementById("world-visitors");
const worldVisitorsButton = document.getElementById("world-visitors-button");

let handleClick = () => {
  worldVisitors.scrollIntoView({
    behavior: "smooth",
  });
};

worldVisitorsButton.onclick = () => {
  handleClick();
};
