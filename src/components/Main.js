export default function Main({ title, img, year, alt }) {
    return (
      <article id="main-content">
        <img src={img} alt={alt} />
        <p>{year}</p>
        <h2>{title}</h2>
      </article>
    );
  }
