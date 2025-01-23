"use client";

import ThemeProvider, { ThemeContext } from "@/app/providers/ThemeProvider";
import { useContext } from "react";

export default function Home() {
  return (
    <ThemeProvider>
      <Content />
    </ThemeProvider>
  );
}

function Content() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <h2>Welcome to the app</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
