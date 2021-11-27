import React from "react";

export default function Card(props) {
  let textoPlaca = "";
  /* variable vacia */
  if (props.openSpots === 0) {
    /* si openSports es 0 */
    textoPlaca = "SOLD OUT";
    /* mostramos el texto VENDIDO */
  } else if (props.location === "Online") {
    /* si la locacion es online */
    textoPlaca = "ONLINE";
    /* mostramos texto online */
  }

  return (
    <div className="card">
      {/* condicional rendering */}
      {textoPlaca && <div className="card--badge">{textoPlaca}</div>}
      {/* si la variable texto placa tiene algun valor , renderiza el cartelito con el texto
       que pusimos con los if en textoPlaca*/}

      <img
        src={`../images/${props.img}`}
        alt="img_profile"
        className="card--image"
      />
      <div className="card--stats">
        <img
          src="../images/star.png"
          alt="star review"
          className="card--star"
        />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
