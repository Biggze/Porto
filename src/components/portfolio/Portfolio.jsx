import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Desktop - 17.png";
import IMG2 from "../../assets/WhatsApp Image 2024-04-16 at 13.27 1.png";
import IMG3 from "../../assets/Mobinspire.png";
import IMG4 from "../../assets/pboD.png";
import IMG5 from "../../assets/Potsave.png";
import IMG6 from "../../assets/Health.png";
import DetailPorto from "../detail/Detail"; // Import komponen DetailPorto

const Portfolio = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

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
      title: "Peta Jember",
      img: IMG4,
      description:
      "Sebuah project kuliah yang bekerjasama dengan pemerintah daerah untuk membuat aplikasi yang dapat membranding wisata didaerah jember ",
      technologies: "C++",
      role: "Back-End Developer",
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

  const handleCheckDetail = (projectId) => {
    setSelectedProjectId(projectId); // Tampilkan modal dengan detail proyek
  };

  const handleCloseModal = () => {
    setSelectedProjectId(null); // Tutup modal
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              
            </div>
            <div className="portfolio__item-cta">
              <button
                className="btn btn-primary"
                onClick={() => handleCheckDetail(pro.id)} // Tampilkan modal
              >
                Check Detail
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Tampilkan modal jika ada proyek yang dipilih */}
      {selectedProjectId && (
        <DetailPorto projectId={selectedProjectId} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Portfolio;