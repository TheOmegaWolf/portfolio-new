import Head from "next/head";
import GameDevHero from "./GameDevHero";
import ComputerScienceHero from "./ComputerScienceHero";
import Interests from "./Interests";
import ContactMe from "./ContactMe";
import { useState } from "react";
import GameDev from "./GameDev";
import ComputerScience from "./ComputerScience";

export default function Home() {
  const [page, setPage] = useState("");
  console.log(page);
  return (
    <div className="cover">
      <Head>
        <title>Le theOmegaWolf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {page === "" ? (
        <>
          <div className="dflex alignVertical cover">
            <GameDevHero selectPage={setPage} />
            <ComputerScienceHero selectPage={setPage} />
          </div>
          <div className="dflex alignVertical cover">
            <Interests />
          </div>
          <div className="dflex alignVertical cover">
            <ContactMe />
          </div>
        </>
      ) : (
        <>
          {page === "GameDev" ? (
            <GameDev />
          ) : page === "ComputerScience" ? (
            <ComputerScience />
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
