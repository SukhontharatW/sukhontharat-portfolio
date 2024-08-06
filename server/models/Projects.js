const mongoose = require("mongoose");

// const PROJECT_ALL = [
//   {
//     projectId: 1,
//     type: "Front-end development",
//     name: "Botanica Plant Shop - landing page",
//     description:
//       "Flower Bar is a beautifully designed flower shop landing page that showcases various services, a wide range of flower bouquets, customer testimonials, and contact information for consultations. The site aims to provide users with a seamless browsing experience and an easy way to explore and purchase floral arrangements.",
//     image: "plantShopImg",
//     code: "https://github.com/SukhontharatW/flower-bar",
//     demo: "https://botanica-plant-dev.netlify.app/",
//     release: "April 2024",
//     tech: [
//       {
//         techName: "Figma",
//         usage: "For designing the user interface and creating prototypes",
//       },
//       {
//         techName: "Styled-Components",
//         usage: "For styling React components with tagged template literals",
//       },
//       {
//         techName: "React",
//         usage:
//           "For building the user interface and managing the state of the application",
//       },
//       {
//         techName: "HTML",
//         usage: "For structuring the content of the web pages",
//       },
//       {
//         techName: "CSS",
//         usage: "For styling the web pages and ensuring a responsive design",
//       },
//     ],
//   },
//   {
//     projectId: 2,
//     type: "Front-end development",
//     name: "Botanica Plant Shop - landing page",
//     description:
//       "Flower Bar is a beautifully designed flower shop landing page that showcases various services, a wide range of flower bouquets, customer testimonials, and contact information for consultations. The site aims to provide users with a seamless browsing experience and an easy way to explore and purchase floral arrangements.",
//     image: "plantShopImg",
//     code: "https://github.com/SukhontharatW/flower-bar",
//     demo: "https://botanica-plant-dev.netlify.app/",
//     release: "April 2024",
//     tech: [
//       {
//         techName: "Figma",
//         usage: "For designing the user interface and creating prototypes",
//       },
//       {
//         techName: "Styled-Components",
//         usage: "For styling React components with tagged template literals",
//       },
//       {
//         techName: "React",
//         usage:
//           "For building the user interface and managing the state of the application",
//       },
//       {
//         techName: "HTML",
//         usage: "For structuring the content of the web pages",
//       },
//       {
//         techName: "CSS",
//         usage: "For styling the web pages and ensuring a responsive design",
//       },
//     ],
//   },
//   {
//     projectId: 3,
//     type: "Front-end development",
//     name: "Botanica Plant Shop - landing page",
//     description:
//       "Flower Bar is a beautifully designed flower shop landing page that showcases various services, a wide range of flower bouquets, customer testimonials, and contact information for consultations. The site aims to provide users with a seamless browsing experience and an easy way to explore and purchase floral arrangements.",
//     image: "plantShopImg",
//     code: "https://github.com/SukhontharatW/flower-bar",
//     demo: "https://botanica-plant-dev.netlify.app/",
//     release: "April 2024",
//     tech: [
//       {
//         techName: "Figma",
//         usage: "For designing the user interface and creating prototypes",
//       },
//       {
//         techName: "Styled-Components",
//         usage: "For styling React components with tagged template literals",
//       },
//       {
//         techName: "React",
//         usage:
//           "For building the user interface and managing the state of the application",
//       },
//       {
//         techName: "HTML",
//         usage: "For structuring the content of the web pages",
//       },
//       {
//         techName: "CSS",
//         usage: "For styling the web pages and ensuring a responsive design",
//       },
//     ],
//   },
//   {
//     projectId: 4,
//     type: "Front-end development",
//     name: "Botanica Plant Shop - landing page",
//     description:
//       "Flower Bar is a beautifully designed flower shop landing page that showcases various services, a wide range of flower bouquets, customer testimonials, and contact information for consultations. The site aims to provide users with a seamless browsing experience and an easy way to explore and purchase floral arrangements.",
//     image: "plantShopImg",
//     code: "https://github.com/SukhontharatW/flower-bar",
//     demo: "https://botanica-plant-dev.netlify.app/",
//     release: "April 2024",
//     tech: [
//       {
//         techName: "Figma",
//         usage: "For designing the user interface and creating prototypes",
//       },
//       {
//         techName: "Styled-Components",
//         usage: "For styling React components with tagged template literals",
//       },
//       {
//         techName: "React",
//         usage:
//           "For building the user interface and managing the state of the application",
//       },
//       {
//         techName: "HTML",
//         usage: "For structuring the content of the web pages",
//       },
//       {
//         techName: "CSS",
//         usage: "For styling the web pages and ensuring a responsive design",
//       },
//     ],
//   },
//   {
//     projectId: 5,
//     type: "Front-end development",
//     name: "Botanica Plant Shop - landing page",
//     description:
//       "Flower Bar is a beautifully designed flower shop landing page that showcases various services, a wide range of flower bouquets, customer testimonials, and contact information for consultations. The site aims to provide users with a seamless browsing experience and an easy way to explore and purchase floral arrangements.",
//     image: "plantShopImg",
//     code: "https://github.com/SukhontharatW/flower-bar",
//     demo: "https://botanica-plant-dev.netlify.app/",
//     release: "April 2024",
//     tech: [
//       {
//         techName: "Figma",
//         usage: "For designing the user interface and creating prototypes",
//       },
//       {
//         techName: "Styled-Components",
//         usage: "For styling React components with tagged template literals",
//       },
//       {
//         techName: "React",
//         usage:
//           "For building the user interface and managing the state of the application",
//       },
//       {
//         techName: "HTML",
//         usage: "For structuring the content of the web pages",
//       },
//       {
//         techName: "CSS",
//         usage: "For styling the web pages and ensuring a responsive design",
//       },
//     ],
//   },
//   {
//     projectId: 6,
//     type: "Front-end development",
//     name: "Botanica Plant Shop - landing page",
//     description:
//       "Flower Bar is a beautifully designed flower shop landing page that showcases various services, a wide range of flower bouquets, customer testimonials, and contact information for consultations. The site aims to provide users with a seamless browsing experience and an easy way to explore and purchase floral arrangements.",
//     image: "plantShopImg",
//     code: "https://github.com/SukhontharatW/flower-bar",
//     demo: "https://botanica-plant-dev.netlify.app/",
//     release: "April 2024",
//     tech: [
//       {
//         techName: "Figma",
//         usage: "For designing the user interface and creating prototypes",
//       },
//       {
//         techName: "Styled-Components",
//         usage: "For styling React components with tagged template literals",
//       },
//       {
//         techName: "React",
//         usage:
//           "For building the user interface and managing the state of the application",
//       },
//       {
//         techName: "HTML",
//         usage: "For structuring the content of the web pages",
//       },
//       {
//         techName: "CSS",
//         usage: "For styling the web pages and ensuring a responsive design",
//       },
//     ],
//   },
// ];
const ProjectSchema = new mongoose.Schema({
  projectId: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  code: { type: String, required: true },
  demo: {
    type: String,
    required: true,
  },
  release: { type: String, required: true },
  tech: {
    type: Array,
    required: true,
  },
});

const ProjectModel = mongoose.model("projects", ProjectSchema);
module.exports = ProjectModel;
