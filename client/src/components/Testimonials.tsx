import React from "react";
import classes from "./Testimonials.module.scss";
import icon from "../../public/quote.png";
import { useTestimonials } from "../hooks/useTestimonials";

const Testimonials = () => {
  const { data: testimonials, isLoading } = useTestimonials();

  const handleDownload = async (
    url: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = downloadUrl;
      a.download = url.split("/").pop() ?? "download";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(downloadUrl);
      a.remove();
    } catch (err) {
      console.error("Błąd pobierania pliku:", err);
    }
  };

  if (isLoading || !testimonials) {
    return null;
  }

  return (
    <div className={classes.testimonials}>
      <h1>Referencje</h1>
      <div className={classes["testimonials-container"]}>
        {testimonials.map(
          ({ testimonial_id, description, title, file_url }) => (
            <div key={testimonial_id} className={classes.container}>
              <div className={classes.icon}>
                <img src={icon} alt="cytat" />
              </div>
              <div className={classes.text}>{description}</div>
              <div className={classes.title}>{title}</div>
              <div className={classes.button}>
                <a href={file_url} onClick={(e) => handleDownload(file_url, e)}>
                  <button type="button">Zobacz referencję</button>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonials;
