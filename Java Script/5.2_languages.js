function isLanguageTop(language) {
  let text;
  switch (language) {
    case "Mandarin":
      text = "MOST number of native speakers";
      break;
    case "Spanish":
      text = " 2nd place in number of native speakers";
      break;
    case "English":
      text = "3rd place";
      break;
    case "Hindi":
      text = "Number 4";
      break;
    case "Arabic":
      text = "5th most spoken language";
      break;
    default:
      text = "Not in the top 5";
  }
  return text;
}

console.log(isLanguageTop("Ac"));
