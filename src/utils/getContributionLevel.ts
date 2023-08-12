export function getContributionLevel(contributions: number = 0) {
  if (contributions < 1) {
      return 0;
  } else if (contributions >= 1 && contributions <= 9) {
      return 1;
  } else if (contributions >= 10 && contributions <= 19) {
      return 2;
  } else if (contributions >= 20 && contributions <= 29) {
      return 3;
  } else {
      return 4;
  }
}