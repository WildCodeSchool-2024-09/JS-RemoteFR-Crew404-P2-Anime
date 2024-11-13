interface DrapeauProps {
  moduleContainerDrapeau: string;
  moduleLanguageFR: string;
  moduleLanguageEN: string;
  moduleImgDrapeau: string;
}

function Drapeau(props: DrapeauProps) {
  const {
    moduleContainerDrapeau,
    moduleLanguageFR,
    moduleLanguageEN,
    moduleImgDrapeau,
  } = props;
  return (
    <section className={moduleContainerDrapeau}>
      <div className={moduleLanguageFR}>
        <img
          src="./data-img/drapeau-francais.png"
          alt="Langue français"
          className={moduleImgDrapeau}
        />
      </div>
      <div className={moduleLanguageEN}>
        <img
          src="./data-img/drapeau-anglais.png"
          alt="English language"
          className={moduleImgDrapeau}
        />
      </div>
    </section>
  );
}

export default Drapeau;
