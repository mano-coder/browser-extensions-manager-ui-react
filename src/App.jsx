import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExtensionSection from "./components/ExtensionSection";
import FilterSection from "./components/FilterSection";
import Footer from "./components/Footer";
import data from "./data/data.json";

export default function App() {
  const [extensionList, setExtensionList] = useState(data);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

  const handleClick = () => {
    return setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header handleClick={handleClick} />
      <main>
        <FilterSection />
        <ExtensionSection extensionList={extensionList} />
      </main>
      <Footer />
    </>
  );
}
