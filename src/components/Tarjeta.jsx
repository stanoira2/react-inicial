function Tarjeta({ nombre, profesion, imagen, descripcion }) {
  return (
    <article className="tarjeta">
      <img src={imagen} alt={`Avatar ilustrado de ${nombre}`} />
      <h2>{nombre}</h2>
      <h3>{profesion}</h3>
      <p>{descripcion}</p>
    </article>
  )
}

export default Tarjeta
