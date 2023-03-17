export default function Main({ title, img, year }) {
    return (
      <article id="main-content">
        <img src={img} alt={title} />
        <p>{year}</p>
        <h2>{title}</h2>
      </article>
    );
  }
