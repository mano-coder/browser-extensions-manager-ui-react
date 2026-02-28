import Header from "./components/Header";
import ExtensionSection from "./components/ExtensionSection";
import FilterSection from "./components/FilterSection"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Header />
      <main>
        <FilterSection />
        <ExtensionSection />
      </main>
      <Footer />
    </>
  );
}
