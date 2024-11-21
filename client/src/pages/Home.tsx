import FooterRoot from "../components/FooterRoot/FooterRoot";
import HomeMainRoot from "../components/HomeMainRoot/HomeMainRoot";
import NavRoot from "../components/NavRoot/NavRoot";

function Home() {
  return (
    <>
      <header>
        <NavRoot />
      </header>

      <main>
        <HomeMainRoot />
      </main>

      <FooterRoot />
    </>
  );
}

export default Home;
