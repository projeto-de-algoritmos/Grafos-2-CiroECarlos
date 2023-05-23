import { useState } from "react";
import Input from "../Input";
import "./styles.css";

export default function Form({ onSubmit }) {
  const [item, setItem] = useState({});
  const [errors, setErrors] = useState({
    name: null,
    amount: null,
    calories: null,
  });

  const validate = () => {
    let errorsToShow = {}, isValid = true;
    if (!item.name || item.name.length === 0) {
      errorsToShow.name = " não pode ficar vazio";
      isValid = false;
    }
    if (!item.amount || item.amount < 0) {
      errorsToShow.amount = " precisa ser maior que 0";
      isValid = false;
    }
    if (!item.calories || item.calories < 0) {
      errorsToShow.calories = " precisa ser maior que 0";
      isValid = false;
    }
    console.log();
    setErrors({
      name: null,
      amount: null,
      calories: null,
      ...errorsToShow,
    });
    return isValid;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const isValid = validate();
        if(!isValid) {
          return;
        }
        onSubmit(item);
        setItem({
          name: "",
          amount: "",
          calories: "",
        });
      }}
    >
      <Input
        input={item.name}
        label="Nome"
        placeholder="Nome do item"
        onChange={(value) => setItem({ ...item, name: value })}
        helperText={errors.name}
      />
      <Input
        type="number"
        input={item.amount}
        label="Quantidade"
        placeholder="Quantidade do item"
        onChange={(value) => setItem({ ...item, amount: value })}
        helperText={errors.amount}
      />
      <Input
        type="number"
        input={item.calories}
        label="Calorias"
        placeholder="Calorias por item"
        onChange={(value) => setItem({ ...item, calories: value })}
        helperText={errors.calories}
      />
      <button type="submit">Adicionar item</button>
    </form>
  );
}
