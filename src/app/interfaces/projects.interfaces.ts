export interface projects {
  id: string;
  title: string;
  caption: string;
  stack: string[];
  date: string[];
  tags: string[];
  platforms: string[];
  description: string;
  bannerUrl: string;
  bannnerColor: string;
  imgExplanationUrls: string[];
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
    platforms: ["Desktop", "Web"],
    description: "This is a RESTful API based on the Escuela de Nada podcast. You will have access to a database with information about the best moments, characters and episodes created within the podcast universe. You can also add information and keep the data updated.The goal is to save the podcast info and make it available for any project around it.in the api you will have the follow info: moments: this is the best moments inserted by the community.episodes: infomation about the apisodes of the podcast .characters: infomation about the characters created in the podcast.",
    bannerUrl: "https://res.cloudinary.com/diqksh5n6/image/upload/v1719443174/icon_v8cnki.png",
    bannnerColor: "#FFC500",
    imgExplanationUrls: [
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719443015/Captura_de_pantalla_2024-06-26_190126_rhyiyi.jpg",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719443015/Captura_de_pantalla_2024-06-26_190320_sudaw7.jpg",
      "https://res.cloudinary.com/diqksh5n6/image/upload/v1719443015/Captura_de_pantalla_2024-06-26_190301_s9spld.jpg"
    ],
    siteLink: "https://escueladenadaapi.netlify.app",
    repositoryLink: "https://github.com/piedraprog/escuela-de-nada-api",
  }
]