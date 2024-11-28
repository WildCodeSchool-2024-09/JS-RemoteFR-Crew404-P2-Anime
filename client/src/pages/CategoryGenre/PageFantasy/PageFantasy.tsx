import FooterRoot from "../../../components/FooterRoot/FooterRoot";
import NavRoot from "../../../components/NavRoot/NavRoot";
import "./PageFantasy.css";
import PageFantasyRoot from "../../../components/CategoryGenreMainRoot/PageFantasyRoot/PageFantasyRoot";

function PageFantasy() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main className="MainPageAction">
        <PageFantasyRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default PageFantasy;
