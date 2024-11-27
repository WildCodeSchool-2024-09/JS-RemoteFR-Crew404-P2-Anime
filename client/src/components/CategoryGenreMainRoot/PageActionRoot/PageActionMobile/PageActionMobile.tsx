import { Link } from "react-router-dom";
import { useSearch } from "../../../../contexts/SearchContext";
import CardAnimeHomeMainRoot from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot";
import style from "../../../HomeMainRoot/ComponentsHomeMainRoot/CardAnimeHomeMainRoot.module.css";
import "./PageActionMobile.css";
import type { SearchType } from "../../../../datas/DataHome/SearchType";

function PageActionMobile() {
  const { dataAnimeAction, setDataAnimeAction } = useSearch();

  const DataAnimeActionMobileAPI = () => {
    fetch("https://api.jikan.moe/v4/random/anime")
      .then((response) => response.json())
      .then((data) => {
        if (data?.data) {
          const nouvelAnime = data.data[0] as SearchType;

          setDataAnimeAction([...dataAnimeAction, nouvelAnime] as SearchType[]);
        } else {
          console.error("Données incorrectes reçues depuis l'API :", data);
        }
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error),
      );
  };

  const ButtonAnimeActionMobile = (nombreAppels = 6) => {
    for (let i = 0; i < nombreAppels; i++) {
      DataAnimeActionMobileAPI();
    }
  };

  return (
    <div className="PageActionMobile">
      <section className={style.ContainerRootCardAnimeHomeMobile}>
        {dataAnimeAction.map((anime) => (
          <Link
            key={anime.mal_id}
            to={`/anime/data/${anime.mal_id}`}
            className={style.CardLink}
          >
            <CardAnimeHomeMainRoot
              key={anime?.mal_id}
              src={anime.images?.jpg?.large_image_url}
              genre={anime.genres?.[0]?.name || "Inconnu"}
              yearStart={anime.aired?.prop?.from?.year || "Inconnu"}
              yearEnd={anime.aired?.prop?.to?.year || "En cours"}
              title={anime.title || "Sans titre"}
              moduleContainerCardAnimeHome={style.ContainerCardAnimeHomeMobile}
              moduleCardAnimeHomeImg={style.CardAnimeHomeImgMobile}
              moduleContainerCardAnimeInfo={style.ContainerCardAnimeInfoMobile}
              moduleTitleAnimeHome={style.TitleAnimeHomeMobile}
              moduleGenreAnimeHome={style.GenreAnimeHomeMobile}
              moduleYearAnimeHome={style.YearAnimeHomeMobile}
            />
          </Link>
        ))}
      </section>

      <div>
        <button
          className="ButtonCardAnimeHomeMobile"
          type="button"
          onClick={() => {
            ButtonAnimeActionMobile();
          }}
        >
          En voir plus
        </button>
      </div>
    </div>
  );
}

export default PageActionMobile;
