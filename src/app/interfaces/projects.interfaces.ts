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
    siteLink: "https://escueladenadaapi.netlify.app",
    repositoryLink: "https://github.com/piedraprog/escuela-de-nada-api",
  }
]