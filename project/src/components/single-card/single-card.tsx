

function SingleCard(): JSX.Element {
  return(
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src="img/midnight-special.jpg" alt="Midnight Special" width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">Midnight Special</a>
      </h3>
    </article>);
}

export default SingleCard;
