import { stars } from '../../const';
import React, { useState } from 'react';


function RatingStars(): JSX.Element {

  const [rating, setRating] = useState(0);
  return (
    <div className="rating__stars">
      {stars.map((item) => (
        <React.Fragment key={item.id}>
          <input key={item.id} className="rating__input" id={`star-${item.id}`} type="radio" name="rating" value={item.id} checked={item.id === rating}
            onChange={(evt) => setRating(Number(evt.target.value))}
          />
          <label className="rating__label" htmlFor={`star-${item.id}`}>Rating {item.id}</label>
        </React.Fragment>
      ))}
    </div>);
}

export default RatingStars;
