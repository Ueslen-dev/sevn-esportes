const BADGES_IDS = {
  "time-a": "team_shield_a",
  "time-b": "team_shield_b",
  "time-c": "team_shield_c",
  "time-d": "team_shield_d",
  "time-e": "team_shield_e",
  "time-f": "team_shield_f",
  "time-g": "team_shield_g",
  "time-h": "team_shield_h",
};

export const handleBadge = (badgeId) => {
  const badgePath = `${BADGES_IDS[badgeId]}.svg`;

  return badgePath;
};
