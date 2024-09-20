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
const scoreboardTimesBadgeImgLeft = document.getElementById(
  "scoreboard_times-badge_img_left"
);
const scoreboardTimesBadgeImgRight = document.getElementById(
  "scoreboard_times-badge_img_right"
);
const scoreboardTimesScoreLeft = document.getElementById(
  "scoreboard_times-score_left"
);
const scoreboardTimesScoreRight = document.getElementById(
  "scoreboard_times-score_right"
);

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
}

main();
