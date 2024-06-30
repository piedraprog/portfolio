export interface projects {
  id: string;
  title: string;
  caption: string;
  stack: string[];
  date: string[];
  tags: string[];
  role: string;
  platforms: string[];
  description: string;
  bannerUrl: string;
  bannnerColor: string;
  imgExplanationUrls: string[];
  linkName:string;
  siteLink: string;
  repositoryLink: string;
}


export const projectsData: projects[] = [
  {
    id: "1", 
    title: "Escuela de Nada API",
    caption: "This is a RESTful API based on the Escuela de Nada podcast. You will have access to a database with information about the best moments, characters and episodes created within the podcast universe. You can also add information and keep the data updated.",
    stack: ["NodeJs", "MongoDB", "ExpressJs", "Javascript"],
    date: ["2021"],
    tags: ["Javascript", "NodeJs", "MongoDB", "ExpressJS"],
    role: "Software Developer",
    platforms: ["Desktop", "Web"],
    description: "This is a RESTful API based on the Escuela de Nada podcast, providing access to a database with information about the best moments, characters, and episodes created within the podcast universe. You can add and update information to keep the data current, making it available for any related project.",
    bannerUrl: "https://res.cloudinary.com/diqksh5n6/image/upload/v1719443174/icon_v8cnki.png",
    bannnerColor: "#FFC500",
    imgExplanationUrls: [
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719443015/Captura_de_pantalla_2024-06-26_190126_rhyiyi.jpg",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719443015/Captura_de_pantalla_2024-06-26_190320_sudaw7.jpg",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719443015/Captura_de_pantalla_2024-06-26_190301_s9spld.jpg"
    ],
    linkName: "visit live website",
    siteLink: "https://escueladenadaapi.netlify.app",
    repositoryLink: "https://github.com/piedraprog/escuela-de-nada-api",
  },
  {
    id: "2", 
    title: "Pomobot",
    caption: "Es un bot de Discord que utiliza el motodo pomodoro el cual consiste en dividir el tiempo de estudio/trabajo en sesiones de enfoque de 25 minutos seguido de un descanso de 5 minutos. Todo esto totalmente en español.",
    stack: ["NodeJs", "MongoDB", "ExpressJs", "Javascript"],
    date: ["2021"],
    tags: ["Javascript", "NodeJs", "MongoDB", "ExpressJS", "DiscordJs"],
    role: "Software Developer",
    platforms: ["Discord"],
    description: "Es un bot que permite iniciar una sesion unica de pomodo de 25 minutos con 5 minutos de descanso, al igual que pomodoros grupales, tambien permite realizar ciclos de pomodoros que son una sesion de 4 pomodoros de 25 minutos con descansos de 5 minutos entre pomodoro y al final un descanso largo de 15 minutos. Tambien registra el tiempo en el que trabajas y los guarda utilizando una base de datos, el cual puede consultar y tambien te posiciona en una tabla de clasificación con la cual se pueden hacer dinamicas. ",
    bannerUrl: "https://res.cloudinary.com/diqksh5n6/image/upload/v1719722743/SUB-BADGE-tom1_gnvti1.png",
    bannnerColor: "#36c9c0",
    imgExplanationUrls: [
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719723565/1_t2sl9l.jpg",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719723932/2_e5e3nr.jpg",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719723936/3_rt9g2b.jpg"

    ],
    linkName: "agregame a tu servidor",
    siteLink: "https://discord.com/api/oauth2/authorize?client_id=856953402872692788&permissions=8&scope=bot%20applications.commands",
    repositoryLink: "https://github.com/holasoygrel/pomobot",
  },
  {
    id: "3", 
    title: "Hunt the Wumpus",
    caption: "this project was a technical test for a frontend position, it was to recreate the game hunt the wumpus, where you are a hunter looking for the monster on the table, it's simple, in the game environment there is a fog that is erased when you pass through it.",
    stack: ["Angular", "Typescript"],
    date: ["2021"],
    tags: ["Javascript", "NodeJs", "MongoDB", "ExpressJS", "DiscordJs"],
    role: "Frontend Developer",
    platforms: ["Web"],
    description: "This project was a technical test for a frontend position, involving the recreation of the game 'Hunt the Wumpus.' In the game, you play as a hunter navigating through fog-covered terrain, aiming to kill the Wumpus and collect all the gold ingots while avoiding holes. Key rules include: 1) Colliding with the Wumpus results in death, with its stench detectable nearby. 2) Holes create a breeze that can be felt around. 3) You have a limited number of arrows to kill the Wumpus, so they must be used wisely.",
    bannerUrl: "https://res.cloudinary.com/diqksh5n6/image/upload/v1719724935/public_lfmz9r.avif",
    bannnerColor: "#000000",
    imgExplanationUrls: [
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719725053/public2_fbbtgs.avif",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719725053/public_cakcgf.avif",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719725052/public3_a5tvch.avif",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719725054/5_ufcak2.avif"
    ],
    linkName: "Go to the repository",
    siteLink: "https://github.com/piedraprog/Hunt_The_Wumpus",
    repositoryLink: "https://github.com/piedraprog/Hunt_The_Wumpus",
  },

]