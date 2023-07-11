function colorTune(color) {
  color = color.toLowerCase();
  switch (color) {
    case "yellow":
    case "pink":
    case "orange":
      return "light color";
      break;
    case "blue":
    case "purple":
    case "brown":
      return "dark color";
      break;
    default:
      return "unknown color";
  }
}
console.log(colorTune("ORANGE"));
