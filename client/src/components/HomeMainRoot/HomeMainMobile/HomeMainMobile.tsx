import "./HomeMainMobile.css";
import { useState } from "react";
import { structureDataAnime } from "../../../datas/structureDataAnime";
import CardAnimeHomeMainRoot from "../ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import DescriptionHomeMainRoot from "../ComponentsHomeMainRoot/DescriptionHomeMainRoot";

function HomeMainMobile() {
  const [dataAnime, setDataAnime] = useState(structureDataAnime);

  const DataAnimeMobileAPI = () => {
    fetch("https://api.jikan.moe/v4/random/anime")
      .then((response) => response.json())
      .then((data) => {
        setDataAnime((ancienDonnee) => [...ancienDonnee, data.data]);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  };

  const ButtonCardAnimeHomeMobile = (nombreAppels = 6) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeMobileAPI();
    }
  };

  return (
    <div className="HomeMainMobile">
      <DescriptionHomeMainRoot />

      {/* La classe de cette section est liée au module CardAnimeHomeMainRoot.module.css */}
      <section className={style.ContainerRootCardAnimeHomeMobile}>
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
            moduleContainerCardAnimeHome={style.ContainerCardAnimeHomeMobile}
            moduleCardAnimeHomeImg={style.CardAnimeHomeImgMobile}
            moduleContainerCardAnimeInfo={style.ContainerCardAnimeInfoMobile}
            moduleTitleAnimeHome={style.TitleAnimeHomeMobile}
            moduleGenreAnimeHome={style.GenreAnimeHomeMobile}
            moduleYearAnimeHome={style.YearAnimeHomeMobile}
          />
        ))}
      </section>

      <div>
        <button
          className="ButtonCardAnimeHomeMobile"
          type="button"
          onClick={() => {
            ButtonCardAnimeHomeMobile();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default HomeMainMobile;
