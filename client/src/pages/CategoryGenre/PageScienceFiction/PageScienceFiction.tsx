import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageScienceFiction.css";
import PageScienceFictionRoot from "../../../components/CategoryGenreMainRoot/PageScienceFictionRoot/PageScienceFictionRoot";

function PageScienceFiction() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageAction">
        <PageScienceFictionRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageScienceFiction;
