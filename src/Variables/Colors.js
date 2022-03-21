const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;

let themeColors = {
  text: "#342E37",
  invertText: "#FFFFFF",
  background: "#E9F1F7",
  accentBackground: "#F5F5F5",
  accent1: "#1D9099",
  accent2: "#E79C10",
  accent3: "#D53A33",
};
if (darkOS) {
  themeColors = {
    text: "#E0E0E0",
    invertText: "#474747",
    background: "#2d2d2d",
    accentBackground: "#333333",
    accent1: "#1D9099",
    accent2: "#E79C10",
    accent3: "#D53A33",
  };
}

export const Colors = themeColors;
