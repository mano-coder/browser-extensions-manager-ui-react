import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExtensionSection from "./components/ExtensionSection";
import FilterSection from "./components/FilterSection";
import Footer from "./components/Footer";
import data from "./data/data.json";

export default function App() {
  const [extensionList, setExtensionList] = useState(data);

  return (
    <>
      <Header />
      <main>
        <FilterSection />
        <ExtensionSection extensionList={extensionList} />
      </main>
      <Footer />
    </>
  );
}
