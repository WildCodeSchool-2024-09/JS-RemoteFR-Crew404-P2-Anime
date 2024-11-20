import "./GenreMainPC.css";
import { Link } from "react-router-dom";

function GenreMainPC() {
  return (
    <section className="GenreMainPC">
      <div className="DescriptionGenrePC">
        <h3>Quel genre d'aventure animée vous attire aujourd'hui ?</h3>
      </div>

      <div className="CardGenrePC">
        <Link to="/genre/action">Action</Link>

        <Link to="/genre/aventure">Aventure</Link>

        <Link to="/genre/comedie">Comédie</Link>

        <Link to="/genre/drama">Drama</Link>

        <Link to="/genre/fantastique">Fantastique</Link>

        <Link to="/genre/musique">Musique</Link>

        <Link to="/genre/romance">Romance</Link>

        <Link to="/genre/science-fiction">Science-Fiction</Link>

        <Link to="/genre/seinen">Seinen</Link>

        <Link to="/genre/shonen">Shônen</Link>

        <Link to="/genre/shojo">Shôjo</Link>

        <Link to="/genre/sport">Sport</Link>

        <Link to="/genre/supernatural">Supernatural</Link>

        <Link to="/genre/tranche-de-Vie">Tranche-de-Vie</Link>

        <Link to="/genre/thriller">Thriller</Link>
      </div>
    </section>
  );
}

export default GenreMainPC;
<div className="card">
  <div className="card-sup">
    <Link to="/genre/action">Action</Link>
  </div>
  <div className="blob blob--1" />
</div>;
