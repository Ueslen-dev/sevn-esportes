const BASE_URL = "https://sevn-pleno-esportes.deno.dev";

const buttonNavigationLeft = document.getElementById(
  "scoreboard_button-navigation_left"
);
const buttonNavigationRight = document.getElementById(
  "scoreboard_button-navigation_right"
);
const scoreboardRoundsSubtitle = document.getElementById(
  "scoreboard_rounds-subtitle"
);
const scoreboardTimesWrapper = document.getElementById(
  "scoreboard_times-wrapper"
);

const renderScoreboard = ({ round, games }) => {
  scoreboardRoundsSubtitle.innerText = round;

  if (games && games.length > 0) {
    games.map((game) => {
      const article = document.createElement("article");

      const divBadgeLeft = document.createElement("div");
      const divBadgeRight = document.createElement("div");
      const imgBadgeLeft = document.createElement("img");
      const imgBadgeRight = document.createElement("img");
      const spanBadgeLeft = document.createElement("span");
      const spanBadgeRight = document.createElement("span");

      const divScore = document.createElement("div");
      const spanScoreLeft = document.createElement("span");
      const spanScoreRight = document.createElement("span");
      const imgScore = document.createElement("img");

      article.classList.add("scoreboard_times");

      divBadgeLeft.classList.add("scoreboard_times-badge");
      imgBadgeLeft.setAttribute("src", "./asssets/images/team_shield_a.svg");
      spanBadgeLeft.innerText = "Time A";

      divScore.classList.add("scoreboard_times-score");
      spanScoreLeft.innerText = "3";
      imgScore.setAttribute("src", "./asssets/images/x.svg");
      spanScoreRight.innerText = "0";

      divBadgeRight.classList.add("scoreboard_times-badge");
      imgBadgeRight.setAttribute("src", "./asssets/images/team_shield_a.svg");
      spanBadgeRight.innerText = "Time B";

      divBadgeLeft.appendChild(imgBadgeLeft);
      divBadgeLeft.appendChild(spanBadgeLeft);

      divScore.appendChild(spanScoreLeft);
      divScore.appendChild(imgScore);
      divScore.appendChild(spanScoreRight);

      divBadgeRight.appendChild(spanBadgeRight);
      divBadgeRight.appendChild(imgBadgeRight);

      article.appendChild(divBadgeLeft);
      article.appendChild(divScore);
      article.appendChild(divBadgeRight);

      scoreboardTimesWrapper.appendChild(article);
    });
  }
};

const getData = async () => {
  try {
    const response = await fetch(`${BASE_URL}/`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
};

async function main() {
  const data = await getData();
  renderScoreboard({ round: "Round 1", games: data });
  console.log(data, "data");
}

main();
