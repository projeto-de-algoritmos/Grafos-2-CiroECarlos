import "./styles.css";

const ItemCard = ({ name, amount, calories, removeItem }) => {
  return (
    <div class="card-container">
      <button onClick={() => removeItem()}>x</button>
      <p>Nome: {name}</p>
      <p>Qtd: {amount}</p>
      <p>Kcal: {calories}</p>
    </div>
  );
};

export default ItemCard;
