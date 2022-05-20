const Card = ({ title, text, imageSource, orientation, id }) => {
  const [first, second] = orientation;
  const paragraphs = text.map((t) => <p>{t.toString()}</p>);

  return (
    <div id={`card${id}`}>
      <div class={first}>
        <img id={`image${id}`} src={imageSource} alt={title + "_image"}></img>
      </div>
      <div class={second} id={`${id}Text`}>
        <h2>{title}</h2>
        {paragraphs}
      </div>
    </div>
  );
};
export default Card;
