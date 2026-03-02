import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExtensionSection from "./components/ExtensionSection";
import FilterSection from "./components/FilterSection";
import Footer from "./components/Footer";
import data from "./data/data.json";

export default function App() {
  const [extensionList, setExtensionList] = useState(data);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const [filter, setFilter] = useState("all");

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

  const filterExtensions = () => {
    if (filter === "all") {
      return extensionList
    } else if (filter === "active") {
      return extensionList.filter((item) => item.isActive === true)
    } else if (filter === "inactive") {
      return extensionList.filter((item) => item.isActive === false)
    }
  };

  return (
    <>
      <Header handleClick={handleClick} />
      <main>
        <FilterSection setFilter={setFilter} filter={filter} />
        <ExtensionSection
          extensionList={filterExtensions()}
        />
      </main>
      <Footer />
    </>
  );
}
