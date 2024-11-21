import { Link } from "react-router-dom";

interface CardGenreRootProps {
  moduleContainerCardGenreRoot: string;
}

function CardGenreRoot(props: CardGenreRootProps) {
  const { moduleContainerCardGenreRoot } = props;
  return (
    <div className={moduleContainerCardGenreRoot}>
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
  );
}

export default CardGenreRoot;

<div className="card">
  <div className="card-sup">
    <Link to="/genre/action">Action</Link>
  </div>
  <div className="blob blob--1" />
</div>;
