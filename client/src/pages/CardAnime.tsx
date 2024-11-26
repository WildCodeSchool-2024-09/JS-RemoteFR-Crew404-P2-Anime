import CardAnimeMainRoot from "../components/CardAnimeMainRoot/CardAnimeMainRoot";
import FooterRoot from "../components/FooterRoot/FooterRoot";
import NavRoot from "../components/NavRoot/NavRoot";

function CardAnime() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main>
        <CardAnimeMainRoot />
      </main>

      <FooterRoot />
    </>
  );
}
export default CardAnime;
