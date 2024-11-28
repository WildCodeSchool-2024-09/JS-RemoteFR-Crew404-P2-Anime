import { Link } from "react-router-dom";

interface CardGenreRootProps {
  moduleContainerCardGenreRoot: string;
}

function CardGenreRoot(props: CardGenreRootProps) {
  const { moduleContainerCardGenreRoot } = props;
  return (
    <div className={moduleContainerCardGenreRoot}>
      <Link to="/home/genre/action">Action</Link>

      <Link to="/home/genre/adventure">Aventure</Link>

      <Link to="/home/genre/comedy">Comédie</Link>

      <Link to="/home/genre/drama">Drama</Link>

      <Link to="/home/genre/fantasy">Fantastique</Link>

      <Link to="/home/genre/musique">Musique</Link>

      <Link to="/home/genre/romance">Romance</Link>

      <Link to="/home/genre/science-fiction">Science-Fiction</Link>

      <Link to="/home/genre/seinen">Seinen</Link>

      <Link to="/home/genre/shonen">Shônen</Link>

      <Link to="/home/genre/shojo">Shôjo</Link>

      <Link to="/home/genre/sport">Sport</Link>

      <Link to="/home/genre/supernatural">Supernatural</Link>

      <Link to="/home/genre/tranche-de-Vie">Tranche-de-Vie</Link>

      <Link to="/home/genre/thriller">Thriller</Link>
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
