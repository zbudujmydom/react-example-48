function Offer(props) {
  const offer = props.item;

  return (
    <div>
      <p>
        <strong>{offer.title}</strong>
      </p>
      <p>Price: {offer.price} PLN</p>
      <p>Stan: {offer.condition}</p>
      {props.isNew ? (
        <div>
          <p>nowosc</p>
          <div>kropka</div>
        </div>
      ) : null}
    </div>
  );
}

export default Offer;
