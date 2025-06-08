import { useState } from 'react';
import './Filter.css';
import { useModal } from '../../App';

function Filter() {
  const [inputValue, setInputValue] = useState('');

  const { modalContext, setModalContext } = useModal();

  function onInput(e) {
    const value = e.target.value;
    setInputValue(value);
    setModalContext({ ...modalContext, filterValue: value });
  }
  return (
    <div className="filter">
      <input
        value={inputValue}
        className="filter__input"
        placeholder='&#128269; &#160; Поиск по имени или фамилии'
        onChange={onInput} />
    </div>
  );
}

export default Filter;
