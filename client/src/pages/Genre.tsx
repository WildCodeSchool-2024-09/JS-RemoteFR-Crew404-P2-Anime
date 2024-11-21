import FooterRoot from "../components/FooterRoot/FooterRoot";
import GenreMainRoot from "../components/GenreMainRoot/GenreMainRoot";
import NavRoot from "../components/NavRoot/NavRoot";

function Genre() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main>
        <GenreMainRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default Genre;
