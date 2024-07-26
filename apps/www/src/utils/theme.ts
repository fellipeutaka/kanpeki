export type Theme = "light" | "dark" | "system";

export function setTheme(theme: Theme) {
  switch (theme) {
    case "light":
      setLightTheme();
      break;
    case "dark":
      setDarkTheme();
      break;
    case "system":
      setSystemTheme();
      break;
  }
}

export function setLightTheme() {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("theme", "light");
}

export function setDarkTheme() {
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

export function setSystemTheme() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setDarkTheme();
  } else {
    setLightTheme();
  }

  localStorage.setItem("theme", "system");
}
