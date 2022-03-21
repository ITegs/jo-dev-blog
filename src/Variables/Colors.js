const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;

let themeColors = {
  text: "#342E37",
  background: "#E9F1F7",
  accent1: "#1D9099",
  accent2: "#E79C10",
  accent3: "#D53A33",
};
if (darkOS) {
  themeColors = {
    text: "#FFFFFF",
    background: "#1D1D1D",
    accent1: "#1D9099",
    accent2: "#E79C10",
    accent3: "#D53A33",
  };
}

export const Colors = themeColors;
