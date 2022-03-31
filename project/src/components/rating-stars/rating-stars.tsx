import { STARS } from '../../const';
import React from 'react';


function RatingStars(): JSX.Element {

  return (
    <div className="rating__stars">
      {STARS.map((item) => (
        <React.Fragment key={item.id}>
          <input key={item.id} className="rating__input" id={`star-${item.id}`} type="radio" name="rating" value={item.id}/>
          <label className="rating__label" htmlFor={`star-${item.id}`}>Rating {item.id}</label>
        </React.Fragment>
      ))}
    </div>);
}

export default RatingStars;
