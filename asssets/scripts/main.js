import { getData } from "../../services/scoreboardServices/getData.js";
import { renderScoreboard } from "./renderScoreboard.js";

let offset = 1;

const buttonNavigationLeft = document.getElementById(
  "scoreboard_button-navigation_left"
);
const buttonNavigationRight = document.getElementById(
  "scoreboard_button-navigation_right"
);

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
