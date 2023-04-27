import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom";
import dynamic from "next/dynamic";
import "bootstrap/dist/css/bootstrap.css"
import img from "../assets/CompSciStuff/Skills/C.png"
import * as THREE from 'three';
import Card from 'react-bootstrap/Card';
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});
export default class MyGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: [
        { id: 1, name: 'Node 1', group: 1 },
        { id: 2, name: 'Node 2', group: 2 },
        { id: 3, name: 'Node 3', group: 1 },
      ],
      links: [
        { source: 1, target: 2 },
        { source: 1, target: 3 },
      ],
    };

    this.cardTexture = null; // will hold the texture for the popup card
  }

  componentDidMount() {
    // Create a new canvas element
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 300;

    // Render the Card component to the canvas
    const cardElement = (
      <Card>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is the content of the card. You can put anything you want here.
          </Card.Text>
        </Card.Body>
      </Card>
    );
    ReactDOM.render(cardElement, canvas);

    // Create a Three.js texture from the canvas
    this.cardTexture = new THREE.CanvasTexture(canvas);
  }

  render() {
    const nodeThreeObject = (node) => {
      if (this.cardTexture && node.id === 2) {
        const sprite = new THREE.Sprite(
          new THREE.SpriteMaterial({ map: this.cardTexture })
        );
        const aspectRatio = this.cardTexture.image.width / this.cardTexture.image.height;
        sprite.scale.set(15 * aspectRatio, 15, 1);
        return sprite;
      } else {
        const color = node.group === 1 ? 0xff0000 : 0x00ff00;
        const sphere = new THREE.Mesh(
          new THREE.SphereGeometry(5),
          new THREE.MeshBasicMaterial({ color })
        );
        return sphere;
      }
    };

    return (
      <ForceGraph3D
        graphData={{
          nodes: this.state.nodes,
          links: this.state.links,
        }}
        nodeAutoColorBy="group"
        nodeThreeObject={nodeThreeObject}
      />
    );
  }
}

// const MyGraph = () => {
//   const [hoverNode, setHoverNode] = useState(null);

//   const handleNodeHover = (node) => {
//     setHoverNode(node);
//     console.log(node);
//   };

//   const handleNodeUnhover = () => {
//     setHoverNode(null);
//   };

//   return (
//     <ForceGraph3D
//       graphData={{
//         nodes: [
//           {
//             id: 1,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#AA77FF",
//             name: " About me🐺",
//             children: [2, 3, 4, 5, 6, 23],
//           },
//           {
//             id: 2,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FFB84C",
//             name: " Anime UwU",
//             children: [7, 8, 9],
//           },
//           {
//             id: 3,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#DF2E38",
//             name: " Music 🎵",
//             children: [10, 11, 12],
//           },
//           {
//             id: 4,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#62CDFF",
//             name: " Travel 🛫",
//             children: [13, 14, 15, 16],
//           },
//           {
//             id: 5,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#609966",
//             name: " Extras! ",
//             children: [],
//           },
//           {
//             id: 6,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Food 🍅",
//             children: [],
//           },
//           {
//             id: 7,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FF6000",
//             name: " Naruto 🥷🏻",
//             children: [],
//           },
//           {
//             id: 8,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#6DA9E4",
//             name: " One piece 🏴‍☠️ ",
//             children: [],
//           },
//           {
//             id: 9,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#D21312",
//             name: " Tokyo Ghoul 🩸",
//             children: [],
//           },
//           {
//             id: 10,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#282A3A",
//             name: " Eminem 😎",
//             children: [],
//           },
//           {
//             id: 11,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FB2576",
//             name: " Linkin Park 🤘🏻",
//             children: [],
//           },
//           {
//             id: 12,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#3F0071",
//             name: " Charlie Puth 🫠",
//             children: [],
//           },
//           {
//             id: 13,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#3F0071",
//             name: " Tamil Nadu 🌅",
//             children: [],
//           },
//           {
//             id: 14,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#3F0071",
//             name: " Kerala 🌲",
//             children: [],
//           },
//           {
//             id: 15,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#3F0071",
//             name: " Karnataka 🎉",
//             children: [],
//           },
//           {
//             id: 16,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#3F0071",
//             name: " Andhra Pradesh 🛕",
//             children: [],
//           },
//           {
//             id: 17,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#3F0071",
//             name: " Sikkim ❄️",
//             children: [],
//           },
//           {
//             id: 18,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#3F0071",
//             name: " Dubai 🐪",
//             children: [],
//           },
//           {
//             id: 19,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#3F0071",
//             name: " Singapore 🦁",
//             children: [],
//           },
//           {
//             id: 20,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Pizza 🍕",
//             children: [],
//           },
//           {
//             id: 21,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Burgers 🤔 ",
//             children: [],
//           },
//           {
//             id: 22,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Sweeetsss! 🧁 ",
//             children: [],
//           },
//           {
//             id: 23,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Movies 🍿",
//             children: [],
//           },
//           {
//             id: 24,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Rocky 💪🏻",
//             children: [],
//           },
//           {
//             id: 25,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Nanban 🫂",
//             children: [],
//           },
//           {
//             id: 26,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " The Pursuit of Happyness 👨🏻‍👦🏻",
//             children: [],
//           },
//           {
//             id: 27,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Football ⚽",
//             children: [],
//           },
//           {
//             id: 28,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Singing 🎤",
//             children: [],
//           },
//           {
//             id: 29,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Achievements 🏅",
//             children: [],
//           },
//           {
//             id: 30,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Gamedev Workshop for more than 200 Vit students ⚒️",
//             children: [],
//           },
//           {
//             id: 31,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Best Project Aissce 2017 Fire OS 🌟",
//             children: [],
//           },
//           {
//             id: 32,
//             label: "bruh",
//             description: "hi bruh!",
//             color: "#FDD36A",
//             name: " Manager / Design Head Envictus Club VIT 👨🏻‍💼",
//             children: [],
//           },
//           // { id: 3, label :'bruh', description:"hi bruh!", color: '#05BFDB', children: [4] },
//           // { id: 4, label :'bruh', description:"hi bruh!", color: '#00FFCA', children: [] },
//         ],
//         links: [
//           { source: 1, target: 2 },
//           { source: 1, target: 3 },
//           { source: 1, target: 4 },
//           { source: 1, target: 5 },
//           { source: 1, target: 6 },
//           { source: 1, target: 23 },
//           { source: 1, target: 29 },
//           { source: 2, target: 7 },
//           { source: 2, target: 8 },
//           { source: 2, target: 9 },
//           { source: 3, target: 10 },
//           { source: 3, target: 11 },
//           { source: 3, target: 12 },
//           { source: 4, target: 13 },
//           { source: 4, target: 14 },
//           { source: 4, target: 15 },
//           { source: 4, target: 16 },
//           { source: 4, target: 17 },
//           { source: 4, target: 18 },
//           { source: 4, target: 19 },
//           { source: 6, target: 20 },
//           { source: 6, target: 21 },
//           { source: 6, target: 22 },
//           { source: 23, target: 24 },
//           { source: 23, target: 25 },
//           { source: 23, target: 26 },
//           { source: 5, target: 27 },
//           { source: 5, target: 28 },
//           { source: 29, target: 30 },
//           { source: 29, target: 31 },
//           { source: 29, target: 32 },
//         ],
//       }}
//       nodeAutoColorBy="group"
//       onNodeHover={handleNodeHover}
//       nodeLabel="label"
//       nodeVal="val"
//       linkDirectionalArrowLength={3}
//       linkDirectionalArrowRelPos={1}
//       linkWidth={2}
//       linkCurvature={0.15}
//     >
//       {hoverNode && (
//         <div
//           style={{
//             position: "absolute",
//             top: hoverNode.y,
//             left: hoverNode.x,
//             backgroundColor: "white",
//             padding: "10px",
//             borderRadius: "5px",
//             boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
//             zIndex: 999,
//           }}
//         >
//         <Card>
//          <img src={img.src} width={300} height={300} />
//          <Card.Body>
//           {node.description}
//          </Card.Body>

//         </Card>
//         </div>
//       )}
//     </ForceGraph3D>
//   );
// };

// export default MyGraph;
// import { useState, useMemo, useCallback } from 'react';

// function genRandomTree(N = 2, reverse = false) {
//     return {
//       nodes: [...Array(N).keys()].map((i) => ({ id: i })), label :'bruh', description:"hi bruh!",
//       links: [...Array(N).keys()]
//         .filter((id) => id)
//         .map((id) => ({
//           [reverse ? "target" : "source"]: id,
//           [reverse ? "source" : "target"]: Math.round(Math.random() * (id - 1))
//         }))
//     };
//   }
// const AboutMeTestContent = ({graphData}) => {
// //   const graphData = {
// //     "nodes": [
// //         {
// //           "id": "id1",
// //           "name": "name1",
// //           "val": 1
// //         },
// //         {
// //           "id": "id2",
// //           "name": "name2",
// //           "val": 10
// //         },
// //         {
// //           "id": "id3",
// //           "name": "name3",
// //           "val": 1
// //         },
// //     ],
// //     "links": [
// //         {
// //             "source": "id1",
// //             "target": "id2"
// //         },
// //         {
// //             "source": "id1",
// //             "target": "id3"
// //         },
// //     ]
// // }
//   const rootId = 0;

//   const nodesById = useMemo(() => {
//     const nodesById = Object.fromEntries(graphData.nodes.map(node => [node.id, node]));

//     // link parent/children
//     graphData.nodes.forEach(node => {
//       node.collapsed = node.id !== rootId;
//       node.childLinks = [];
//     });
//     graphData.links.forEach(link => nodesById[link.source].childLinks.push(link));

//     return nodesById;
//   }, [graphData]);

//   const getPrunedTree = useCallback(() => {
//     const visibleNodes = [];
//     const visibleLinks = [];
//     (function traverseTree(node = nodesById[rootId]) {
//       visibleNodes.push(node);
//       if (node.collapsed) return;
//       visibleLinks.push(...node.childLinks);
//       node.childLinks
//         .map(link => ((typeof link.target) === 'object') ? link.target : nodesById[link.target]) // get child node
//         .forEach(traverseTree);
//     })();

//     return { nodes: visibleNodes, links: visibleLinks };
//   }, [nodesById]);

//   const [prunedTree, setPrunedTree] = useState(getPrunedTree());

//   const handleNodeClick = useCallback(node => {
//     node.collapsed = !node.collapsed; // toggle collapse state
//     setPrunedTree(getPrunedTree())
//   }, []);

//   return <ForceGraph3D
//     graphData={prunedTree}
//     linkDirectionalParticles={2}
//     nodeColor={node => !node.childLinks.length ? 'green' : node.collapsed ? 'red' : 'yellow'}
//     onNodeClick={handleNodeClick}
//   />;
// };
// const AboutMeTest = () => {
//     return <AboutMeTest graphData={genRandomTree(2, true)}/>
// }
// export default  (AboutMeTest);
