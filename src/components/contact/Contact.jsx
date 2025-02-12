import "./contact.css";
import React, { useState } from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";

const Contact = () => {
  // State untuk menyimpan nilai input form
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  // State untuk menangani status pengiriman (loading, success, error)
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    // Set status loading
    setStatus({
      loading: true,
      success: false,
      error: false,
      message: "Sending message...",
    });

    try {
      // Kirim data ke API (contoh endpoint: /api/contact)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Cek jika response sukses
      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          error: false,
          message: "Message sent successfully!",
        });

        // Reset form setelah pengiriman berhasil
        setFormData({
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>

      {/* Bungkus form dengan div transparan */}
      <div className="contact__form-wrapper">
        {/* Form untuk mengirim pesan */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form__group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={status.loading}>
            {status.loading ? "Sending..." : "Send Message"}
          </button>

          {/* Tampilkan status pengiriman */}
          {status.message && (
            <p className={`status-message ${status.error ? "error" : status.success ? "success" : ""}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>

      {/* Informasi Kontak */}
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>adelfarizi182@gmail.com</h5>
              <h5>Jember, Indonesia</h5>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;