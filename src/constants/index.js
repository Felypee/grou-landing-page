import {
    playTogether,
    createGame,
    congratulations,
    linkedin,
    train,
    instagram,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "what",
      title: "¿Qué es?",
    },
    {
      id: "about",
      title: "¿Cómo es?",
    },
    {
      id: "contact",
      title: "Contáctame",
    },
  ];
  

  
  const experiences = [
    
    {
      title: "Entréna para competir",
      company_name: "Disponible",
      icon: train,
      iconBg: "#E6DEDD",
      points: [
        "Podrás tomar las actividades sólo para prepararte y ganar.",
        

      ],
    },
    {
      title: "Aprende con personas al mismo tiempo",
      company_name: "Muy pronto",
      icon: congratulations,
      iconBg: "#383E56",
      points: [
        "Juega los distintos juegos con las personas conectadas.",
        "Al finalizar, si ganas, obtendrás puntos.",
      ],
    },
    {
      title: "Juega en equipo",
      company_name: "Muy pronto",
      icon: playTogether,
      iconBg: "#383E56",
      points: [
        "Para los que no les gusta competir.",
      ],
    },
    {
      title: "Crea tú los juegos",
      company_name: "Muy pronto",
      icon: createGame,
      iconBg: "#E6DEDD",
      points: [
        "Con los puntos que vas ganando podrás crear actividades y juegos para que los demás los utilicen.",

      ],
    },
  ];
  




  const socialNetWorks = [
    {
      platform: "LinkedIn",
      img: linkedin,
      url: "https://www.linkedin.com/in/felipe-arango-developer/"
    },
    {
      platform: "Instagram",
      img: instagram,
      url: "https://www.instagram.com/felipearango97/"
    },
  ]
  
  export { socialNetWorks,  experiences };