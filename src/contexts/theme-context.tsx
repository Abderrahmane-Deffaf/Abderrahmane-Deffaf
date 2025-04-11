"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

function getSystemTheme() {
  if (
    window &&
    window?.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)")?.matches
  ) {
    // dark mode
    //console.log("dark");
    return "dark";
  }
  return "light";
}

type Theme = "dark" | "light";

type ThemeContextType = {
  currentTheme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<Theme>>;
};

export const themeContext = createContext<ThemeContextType>({
  currentTheme: "dark",
  setCurrentTheme: () => {},
});

export default function ThemeContext({ children }: PropsWithChildren) {
  const [currentTheme, setCurrentTheme] = useState<Theme>("dark");
  useEffect(() => {
    setCurrentTheme(getSystemTheme());
  }, []);
  return (
    <themeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <html className={currentTheme}>{children}</html>
    </themeContext.Provider>
  );
}
