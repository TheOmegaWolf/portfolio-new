import Head from "next/head";
// import GameDevHero from "./GameDevHero";
import ComputerScience from "./ComputerScience";
import Interests from "./Interests";
import ContactMe from "./ContactMe";
import { useEffect, useState } from "react";
import Base from "./Base";
import { AnimatePresence, motion } from "framer-motion";
import GameDevSnake from "./GameDevSnake";
import { useRouter } from "next/router";
export default function Home() {
  const [page, setPage] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (page === "gamedev") {
      router.push("/GameDevSnake");
    }
    if (page === "programming") {
      router.push("/ComputerScience");
    }
  }, [page]);

  return (
    <div className="cover">
      <Head>
        <title>Le theOmegaWolf</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dflex alignVertical cover">
        <AnimatePresence>
          <motion.div key="base" className={"cover"}>
            <Base setPage={setPage} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
