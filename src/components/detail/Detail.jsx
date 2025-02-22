import React from "react";
import { FaTimes } from "react-icons/fa"; // Impor ikon close
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
      "Sebuah website yang digunakan untuk mempermudah dosen dalam mengelola data mahasiswa yang telah atau akan mendaftar capstone ",
    technologies: "React.js | Express | Artisan | Styled Component | Figma ",
    role: "Front-End Developer",
  },
  {
    id: 2,
    title: "Sipetani",
    img: IMG2,
    description:
      "Sebuah website yang digunakan untuk membantu para petani dalam memprediksi kandungan ph tanah yang akan menentukan prediksi apakah tanah tersebut cocok ditanami sebuah tanaman menggunakan Artificial Intelegence ",
    technologies: "Figma | Architecture Enterprise | reactjs ",
    role: "Designer",
  },
  {
    id: 3,
    title: "E Kost",
    img: IMG3,
    description:
      "project mata kuliah pemrograman website yang digunakan untuk mempermudah pengguna dalam mencari kost yang sesuai dengan kebutuhan mahasiswa.",
    technologies: " PHP | MySQL ",
    role: "Front-End Developer",
  },
  {
    id: 4,
    title: "Raise",
    img: IMG4,
    description:
      "Get started with free educational courses to mastery the foundations of startup equity as an African business.",
    technologies: "Remix | React.js | Webflow | jQuery",
    role: "",
  },
  {
    id: 5,
    title: "Potsave",
    img: IMG5,
    description:
      "Through the PotSave.com platform, PotSave offers in-person product assessment and ordering services, accessible via the website, mobile applications, and software.",
    technologies: "React | Next.js | Lodash | Tailwind CSS",
    role: "",
  },
  {
    id: 6,
    title: "Health",
    img: IMG6,
    description:
      "U of U Health is the Mountain West's only academic health care system. We provide patient care, medical research, and physician training.",
    technologies: "Angular | Drupal | Nginx | TypeScript",
    role: "",
  },
];

const DetailPorto = ({ projectId, onClose }) => {
  const project = soloProjects.find((pro) => pro.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Tombol Close */}
        <button className="modal-close" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>{project.title}</h2>
        <div className="detail-porto__image">
          <img src={project.img} alt={project.title} />
        </div>
        <div className="detail-porto__content">
          <p>{project.description}</p>
          <br />
          <p><strong>Role:</strong> {project.role}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPorto;