import { useState } from 'react';
import Modal from 'react-modal';
import './styles.css';
import Form from '../../components/Form';
import Input from '../../components/Input';
import ItemCard from '../../components/ItemCard/ItemCard';
import { knapsack } from '../../utils/knapsack';
import mochilaPronta from '../../assets/images/mochilaPronta.jpeg';

export default function Bag() {
  const [modalOpen, setModalOpen] = useState(false);
  const [itens, setItens] = useState([]);
  const [limit, setLimit] = useState(0);
  const [bag, setBag] = useState([]);
  const [calories, setCalories] = useState(0);

  function handleSubmit() {
    const { orderedItensList, totalCalories } = knapsack(itens, limit);
    setBag(orderedItensList);
    setCalories(totalCalories);
    setModalOpen(true);
  };

  const removeItem = (index) => {
    const filteredItens = itens.filter((i,indx) => indx !== index)
    setItens(filteredItens)
  }

  return (
    <div className='page bag'>
      <div className='description'>
        <h1>Mochila do Carlos</h1>
        <p></p>
      </div>
      <div className='content-container'>
        <div className='form-container'>
          <Input type='number' label='Limite de itens da mochila' input={limit} placeholder='Limite de itens' onChange={(value) => setLimit(value)} />
          <Form onSubmit={(item) => setItens([...itens, item])} />
        </div>
        <div className='itens-list'>
          {itens.map((item, indx) => (
              <ItemCard key={indx} {...item} removeItem={()=>removeItem(indx)}/>
            ))}
        </div>
      </div>
      <footer>
        <button onClick={() => handleSubmit()} >Ver mochila</button>
      </footer>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Example Modal"
      >
        <div className='bag-modal-content'>
          <div>
            <p>A mochila do Carlos possui um total de {calories} calorias. Foram adicionados:</p>
            <div className='itens-list'>
              {bag.map((item, indx) => (
                  <div key={indx}>
                    <p>Nome do item: {item.name}</p>
                    <p>Quantidade adicionada: {item.amount}</p>
                  </div>
                ))}
            </div>
            <button onClick={() => window.location.reload()}>Reorganizar mochila</button>
          </div>
          <img class={"mochila"}src={mochilaPronta} alt='mochila' />
        </div>
      </Modal>
    </div>
  );
}