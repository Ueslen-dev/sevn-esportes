import { handleBadge } from "../../utils/handleBadge.js";

const scoreboardRoundsSubtitle = document.getElementById(
  "scoreboard_rounds-subtitle"
);
const scoreboardTimesWrapper = document.getElementById(
  "scoreboard_times-wrapper"
);

export const renderScoreboard = ({ round, games, isPagination = false }) => {
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
      imgBadgeLeft.setAttribute(
        "src",
        `./asssets/images/${handleBadge(game.team_away_id)}`
      );
      spanBadgeLeft.innerText = game.team_away_name;

      divScore.classList.add("scoreboard_times-score");
      spanScoreLeft.innerText = game.team_away_score;
      imgScore.setAttribute("src", "./asssets/images/x.svg");
      spanScoreRight.innerText = game.team_home_score;

      divBadgeRight.classList.add("scoreboard_times-badge");
      imgBadgeRight.setAttribute(
        "src",
        `./asssets/images/${handleBadge(game.team_home_id)}`
      );
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
