import React from "react";
import { useParams } from "react-router-dom";
import "./detailporto.css"; // Import CSS untuk halaman detail
import IMG1 from "../../assets/Desktop - 17.png";
import IMG2 from "../../assets/WhatsApp Image 2024-04-16 at 13.27 1.png";
import IMG3 from "../../assets/Mobinspire.png";
import IMG4 from "../../assets/Raise.png";
import IMG5 from "../../assets/Potsave.png";
import IMG6 from "../../assets/Health.png";

const soloProjects = [
    {
      id: 1,
      title: "Pengelolaan Capstone",
      img: IMG1,
      description:
        "It is the website for construction machine renting company (Flexcavo) from Berlin",
      technologies: "React.js | Express | Artisan | Styled Component | Figma ",
      link: "",
    },
    {
      id: 2,
      title: "Sipetani",
      img: IMG2,
      description:
        "MeetNative is an upselling platform that helps consumers and local businesses get more for their money.",
      technologies: "Figma | Architecture Enterprise |",
      link: "",
    },
    {
      id: 3,
      title: "E Kost",
      img: IMG3,
      description:
        "Mob Inspire streamlines the business operations in corporate sector by providing cost-effective and highly productive software solutions.",
      technologies: "Nginx | PHP | MySQL | jQuery",
      link: "",
    },
    {
      id: 4,
      title: "Raise",
      img: IMG4,
      description:
        "Get started with free educational courses to mastery the foundations of startup equity as an African business.",
      technologies: "Remix | React.js | Webflow | jQuery",
      link: "",
    },
    {
      id: 5,
      title: "Potsave",
      img: IMG5,
      description:
        "Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.",
      technologies: "React | Next.js | Lodash | Tailwind CSS",
      link: "",
    },
    {
      id: 6,
      title: "Health",
      img: IMG6,
      description:
        "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
      technologies: "Angular | Drupal | Nginx | TypeScript",
      link: "",
    },
  ];

const DetailPorto = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const project = soloProjects.find((pro) => pro.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section id="detail-porto">
      <h2>{project.title}</h2>
      <div className="detail-porto__container">
        <div className="detail-porto__image">
          <img src={project.img} alt={project.title} />
        </div>
        <div className="detail-porto__content">
          <p>{project.description}</p>
          <p><strong>Technologies:</strong> {project.technologies}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailPorto;