import { useState } from 'react';
import Input from '../Input';
import './styles.css';

export default function Form({ onSubmit }) {
  const [item, setItem] = useState({});

  return(
    <form onSubmit={ (e) => {
      e.preventDefault();
      onSubmit(item);
      setItem({
        name: '',
        amount: '',
        calories: ''
      });
    } }>
      <Input input={ item.name } label='Nome' placeholder='Nome do item' onChange={ (value) => setItem({ ...item, name:value }) } />
      <Input type='number' input={ item.amount } label='Quantidade' placeholder='Quantidade do item' onChange={ (value) => setItem({ ...item, amount:value }) } />
      <Input type='number' input={ item.calories } label='Calorias' placeholder='Calorias por item' onChange={ (value) => setItem({ ...item, calories:value }) } />
      <button type='submit' >Adicionar item</button>
    </form>
  );
}