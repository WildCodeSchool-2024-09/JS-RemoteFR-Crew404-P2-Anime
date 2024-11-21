import "./HomeMainPC.css";
import { useState } from "react";
import { structureDataAnime } from "../../../datas/structureDataAnime";
import CardAnimeHomeMainRoot from "../ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import DescriptionHomeMainRoot from "../ComponentsHomeMainRoot/DescriptionHomeMainRoot";

function HomeMainPC() {
  const [dataAnime, setDataAnime] = useState(structureDataAnime);

  const DataAnimePCAPI = () => {
    fetch("https://api.jikan.moe/v4/random/anime")
      .then((response) => response.json())
      .then((data) => {
        setDataAnime((ancienDonnee) => [...ancienDonnee, data.data]);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  };

  const ButtonCardAnimeHomePC = (nombreAppels = 10) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimePCAPI();
    }
  };

  return (
    <div className="HomeMainPC">
      <DescriptionHomeMainRoot />

      {/* La classe de cette section est liée au module CardAnimeHomeMainRoot.module.css */}
      <section className={style.ContainerRootCardAnimeHomePC}>
        {dataAnime.map((anime) => (
          <CardAnimeHomeMainRoot
            key={anime?.mal_id}
            // Données de la card
            src={anime.images?.jpg?.large_image_url}
            genre={anime.genres[0]?.name || "Inconnu"}
            yearStart={anime.aired?.prop?.from?.year || "Inconnu"}
            yearEnd={anime.aired?.prop?.to?.year || "En cours"}
            title={anime.title || "Sans titre"}
            // Données des classes liées au module CardAnimeHomeMainRoot.module.css
            moduleContainerCardAnimeHome={style.ContainerCardAnimeHomePC}
            moduleCardAnimeHomeImg={style.CardAnimeHomeImgPC}
            moduleContainerCardAnimeInfo={style.ContainerCardAnimeInfoPC}
            moduleTitleAnimeHome={style.TitleAnimeHomePC}
            moduleGenreAnimeHome={style.GenreAnimeHomePC}
            moduleYearAnimeHome={style.YearAnimeHomePC}
          />
        ))}
      </section>

      <div>
        <button
          type="button"
          className="ButtonCardAnimeHomePC"
          onClick={() => {
            ButtonCardAnimeHomePC();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default HomeMainPC;
