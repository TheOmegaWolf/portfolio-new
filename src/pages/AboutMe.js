import React, { useState, useMemo, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import THREE from "three";
import backBtn from "../assets/CompSciStuff/back.png"
import styles from "../styles/AboutMe.module.css"
import Image from "next/image";
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});

const MyGraph = () => {
  const rootId = 1;
  const [graphData, setGraphData] = useState({
    nodes: [
      {
        id: 1,
        color: "#AA77FF",
        name: " About me🐺",
        children: [2, 3, 4, 5, 6, 23],
      },
      { id: 2, color: "#FFB84C", name: " Anime UwU", children: [7, 8, 9] },
      { id: 3, color: "#DF2E38", name: " Music 🎵", children: [10, 11, 12] },
      {
        id: 4,
        color: "#62CDFF",
        name: " Travel 🛫",
        children: [13, 14, 15, 16],
      },
      { id: 5, color: "#609966", name: " Extras! ", children: [] },
      { id: 6, color: "#FDD36A", name: " Food 🍅", children: [] },
      { id: 7, color: "#FF6000", name: " Naruto 🥷🏻", children: [] },
      { id: 8, color: "#6DA9E4", name: " One piece 🏴‍☠️ ", children: [] },
      { id: 9, color: "#D21312", name: " Tokyo Ghoul 🩸", children: [] },
      { id: 10, color: "#282A3A", name: " Eminem 😎", children: [] },
      { id: 11, color: "#FB2576", name: " Linkin Park 🤘🏻", children: [] },
      { id: 12, color: "#3F0071", name: " Charlie Puth 🫠", children: [] },
      { id: 13, color: "#ae2012", name: " Tamil Nadu 🌅", children: [] },
      { id: 14, color: "#2ec4b6", name: " Kerala 🌲", children: [] },
      { id: 15, color: "#ff99c8", name: " Karnataka 🎉", children: [] },
      { id: 16, color: "#fca311", name: " Andhra Pradesh 🛕", children: [] },
      { id: 17, color: "#4cc9f0", name: " Sikkim ❄️", children: [] },
      { id: 18, color: "#cb997e", name: " Dubai 🐪", children: [] },
      { id: 19, color: "#d00000", name: " Singapore 🦁", children: [] },
      { id: 20, color: "#e71d36", name: " Pizza 🍕", children: [] },
      { id: 21, color: "#3a0ca3", name: " Burgers 🤔 ", children: [] },
      { id: 22, color: "#f72585", name: " Sweeetsss! 🧁 ", children: [] },
      { id: 23, color: "#f72585", name: " Movies 🍿", children: [] },
      { id: 24, color: "#ff595e", name: " Rocky 💪🏻", children: [] },
      { id: 25, color: "#ffca3a", name: " Nanban 🫂", children: [] },
      {
        id: 26,
        color: "#8ac926",
        name: " The Pursuit of Happyness 👨🏻‍👦🏻",
        children: [],
      },
      { id: 27, color: "#1982c4", name: " Football ⚽", children: [] },
      { id: 28, color: "#6a4c93", name: " Singing 🎤", children: [] },
      { id: 29, color: "#80ed99", name: " Achievements 🏅", children: [] },
      {
        id: 30,
        color: "#2b9348",
        name: " Gamedev Workshop for more than 200 Vit students ⚒️",
        children: [],
      },
      {
        id: 31,
        color: "#231942",
        name: " Best Project Aissce 2017 Fire OS 🌟",
        children: [],
      },
      {
        id: 32,
        color: "#e0b1cb",
        name: " Manager / Design Head Envictus Club VIT 👨🏻‍💼",
        children: [],
      },
    ],
    links: [
      { source: 1, target: 2 },
      { source: 1, target: 3 },
      { source: 1, target: 4 },
      { source: 1, target: 5 },
      { source: 1, target: 6 },
      { source: 1, target: 23 },
      { source: 1, target: 29 },
      { source: 2, target: 7 },
      { source: 2, target: 8 },
      { source: 2, target: 9 },
      { source: 3, target: 10 },
      { source: 3, target: 11 },
      { source: 3, target: 12 },
      { source: 4, target: 13 },
      { source: 4, target: 14 },
      { source: 4, target: 15 },
      { source: 4, target: 16 },
      { source: 4, target: 17 },
      { source: 4, target: 18 },
      { source: 4, target: 19 },
      { source: 6, target: 20 },
      { source: 6, target: 21 },
      { source: 6, target: 22 },
      { source: 23, target: 24 },
      { source: 23, target: 25 },
      { source: 23, target: 26 },
      { source: 5, target: 27 },
      { source: 5, target: 28 },
      { source: 29, target: 30 },
      { source: 29, target: 31 },
      { source: 29, target: 32 },
    ],
  });

  const nodesById = useMemo(() => {
    const nodesById = Object.fromEntries(
      graphData.nodes.map((node) => [node.id, node])
    );

    // link parent/children
    graphData.nodes.forEach((node) => {
      node.collapsed = node.id !== rootId;
      node.childLinks = [];
    });
    graphData.links.forEach((link) =>
      nodesById[link.source].childLinks.push(link)
    );

    return nodesById;
  }, [graphData]);

  const getPrunedTree = useCallback(() => {
    const visibleNodes = [];
    const visibleLinks = [];
    (function traverseTree(node = nodesById[rootId]) {
      visibleNodes.push(node);
      if (node.collapsed) return;
      visibleLinks.push(...node.childLinks);
      node.childLinks
        .map((link) =>
          typeof link.target === "object" ? link.target : nodesById[link.target]
        ) // get child node
        .forEach(traverseTree);
    })();

    return { nodes: visibleNodes, links: visibleLinks };
  }, [nodesById]);

  const [prunedTree, setPrunedTree] = useState(getPrunedTree());

  const handleNodeClick = useCallback((node) => {
    node.collapsed = !node.collapsed; // toggle collapse state
    setPrunedTree(getPrunedTree());
  }, []);

  return (
    <>
      <span className={`${styles.backBtn}`}>
        <Image
          src={backBtn.src}
          width={33}
          height={30}
          onClick={() => router.push("/")}
        ></Image>
      </span>
      <ForceGraph3D
        graphData={prunedTree}
        linkDirectionalParticles={2}
        zoom={4}
        width={"100%"}
        height={"100%"}
        // nodeColor={node => !node.childLinks.length ? 'green' : node.collapsed ? 'red' : 'yellow'}
        onNodeClick={handleNodeClick}
      />
    </>
  );
};

export default MyGraph;
