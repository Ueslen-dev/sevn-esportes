const BASE_URL = "https://sevn-pleno-esportes.deno.dev";
let offset = 1;

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

const renderScoreboard = ({ round, games, isPagination = false }) => {
  scoreboardRoundsSubtitle.innerText = `RODADA ${round}`;
  const wrapper = document.createElement("div");

  if (games && games.length > 0) {
    if (isPagination) {
      const allWrapperList = document.getElementsByClassName("round");
      scoreboardTimesWrapper.removeChild(allWrapperList[0]);
    }

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
      spanBadgeLeft.innerText = game.team_away_name;

      divScore.classList.add("scoreboard_times-score");
      spanScoreLeft.innerText = game.team_away_score;
      imgScore.setAttribute("src", "./asssets/images/x.svg");
      spanScoreRight.innerText = game.team_home_score;

      divBadgeRight.classList.add("scoreboard_times-badge");
      imgBadgeRight.setAttribute("src", "./asssets/images/team_shield_a.svg");
      spanBadgeRight.innerText = game.team_home_name;

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

      wrapper.setAttribute("class", `round`);

      wrapper.appendChild(article);
      scoreboardTimesWrapper.appendChild(wrapper);
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

const prevPagination = () => {
  if (offset > 1) {
    offset--;

    buttonNavigationRight.removeAttribute("disable");
    buttonNavigationRight.classList.remove("desactivate-button");
  }
  if (offset === 1) {
    buttonNavigationLeft.setAttribute("disable", true);
    buttonNavigationLeft.classList.add("desactivate-button");
  }
};

const nextPagination = (totalPages) => {
  if (offset < totalPages) {
    offset++;

    buttonNavigationLeft.removeAttribute("disable");
    buttonNavigationLeft.classList.remove("desactivate-button");
  }
  if (offset === totalPages) {
    buttonNavigationRight.setAttribute("disable", true);
    buttonNavigationRight.classList.add("desactivate-button");
  }
};

const filterDataScoreboaard = (data, offset) => {
  return data.find((game) => game.round === offset);
};

const main = async () => {
  const data = await getData();

  if (offset === 1) {
    buttonNavigationLeft.setAttribute("disable", true);
    buttonNavigationLeft.classList.add("desactivate-button");
  }

  if (data && data.length > 0) {
    const defaultDataScoreboard = filterDataScoreboaard(data, offset);

    renderScoreboard({
      round: defaultDataScoreboard.round,
      games: defaultDataScoreboard.games,
    });

    buttonNavigationLeft.addEventListener("click", () => {
      prevPagination();
      const dataScoreboardFiltered = filterDataScoreboaard(data, offset);

      renderScoreboard({
        round: dataScoreboardFiltered.round,
        games: dataScoreboardFiltered.games,
        isPagination: true,
      });
    });

    buttonNavigationRight.addEventListener("click", () => {
      const totalPages = data.length || 0;

      nextPagination(totalPages);
      const dataScoreboardFiltered = filterDataScoreboaard(data, offset);

      renderScoreboard({
        round: dataScoreboardFiltered.round,
        games: dataScoreboardFiltered.games,
        isPagination: true,
      });
    });
  }
};

main();
