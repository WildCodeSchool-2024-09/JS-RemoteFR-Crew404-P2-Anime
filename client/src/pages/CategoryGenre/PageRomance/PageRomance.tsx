import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageRomance.css";
import PageRomanceRoot from "../../../components/CategoryGenreMainRoot/PageRomanceRoot/PageRomanceRoot";

function PageRomance() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageAction">
        <PageRomanceRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageRomance;
