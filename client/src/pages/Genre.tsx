import GenreMainRoot from "../components/GenreMainRoot/GenreMainRoot";
import NavRoot from "../components/NavRoot/NavRoot";
import FooterRoot from "../components/FooterRoot/FooterRoot";

function Genre() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main>
        <GenreMainRoot />
      </main>

      <footer>
        <FooterRoot />
      </footer>
    </>
  );
}

export default Genre;
