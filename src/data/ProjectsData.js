import wikiImg from "../assets/Wikipedia-rabbit-hole.png";
import cameraImg from "../assets/Camera-canvas.png";
import pathfindingImg from "../assets/pathfinding.png";
import jupiterImg from "../assets/Jupiter-clock.png";


export const ProjectsData = [
  {
    id: "wikipedia-rabbit-hole",
    title: "Wikipedia Rabbit Hole",
    stack: ["JavaScript", "MediaWiki API", "CSS"],
    image: wikiImg,
    bullets: [
      "Replaced per-link API calls with a single batched MediaWiki query to eliminate Wikipedia rate-limit failures.",
      "Added a 30-incoming-backlink threshold filter to prevent unwinnable start/target article pairs across 30/20/10-hop modes."
    ],
    liveUrl: "https://wikipedia-rabbit-hole-react.vercel.app/",
    githubUrl: "https://github.com/Nileshh-01/Wikipedia-Rabbit-Hole"
  },
  {
    id: "camera-canvas",
    title: "Camera Canvas",
    stack: ["HTML5 Canvas", "JavaScript", "CSS"],
    image: cameraImg,
    bullets: [
      "Built circular, square, and discrete brush engines with PNG export inside a retro-camera percentage-based frame.",
      "Implemented true transparent erasing via Canvas destination-out compositing rather than painting background color."
    ],
    liveUrl: "https://camera-canvas-psi.vercel.app/",
    githubUrl: "https://github.com/Nileshh-01/Camera-Canvas"
  },
  {
    id: "pathfinding-visualizer",
    title: "Pathfinding Visualizer",
    stack: ["C++", "SFML"],
    image: pathfindingImg,
    bullets: [
      "Implemented interactive grid visualizations for BFS, Dijkstra, and Bellman-Ford shortest-path algorithms in C++.",
      "Rendered real-time node exploration states and shortest-path backtracking using SFML."
    ],
    liveUrl: null,
    githubUrl: "https://github.com/Nileshh-01/Pathfinding-visualizer"
  },
  {
    id: "jupiter-clock",
    title: "Jupiter Clock",
    stack: ["JavaScript", "CSS"],
    image: jupiterImg,
    bullets: [
      "Designed a custom orbital timekeeping interface driven by real-time JavaScript date/angle calculations.",
      "Styled layered CSS geometries and smooth transitions without external animation libraries."
    ],
    liveUrl: "https://not-so-ordinary-clock.vercel.app/",
    githubUrl: "https://github.com/Nileshh-01/Not-So-Ordinary-Clock"
  }
];