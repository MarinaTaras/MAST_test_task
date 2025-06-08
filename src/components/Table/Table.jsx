import { useEffect, useState } from 'react';
import './Table.css';
import Item from '../Item/Item';
import getItems from '../../utils/getItems';
import { useModal } from '../../App';

function Table() {

  //получаем список пользователей
  const [users, setUsers] = useState([]);
  const [initialItems, setInitialItems] = useState([]);
  
  const { modalContext, setModalContext } = useModal();

  //фильтр по значению
  useEffect(() => {
    if (modalContext.filterValue) {
      filterByValue();
    }
    else setUsers(initialItems);
  }, [modalContext.filterValue])

  // запрос списка
  useEffect(() => {
    getItems()
      .then((result) => {
        const users = result?.users
        if (users) {
          setUsers(result.users);
          setInitialItems(result.users);
        }
      })
      .catch(e => console.log(e));
  }, [])


  function filterByValue() {
    setUsers(initialItems.filter(item => (item.firstName.toUpperCase().includes(modalContext.filterValue.toUpperCase()) || item.lastName.toUpperCase().includes(modalContext.filterValue.toUpperCase()))));
  }

  return (
    <>
      <div className="table">
        <table className="table__unit">
          <thead>
            <tr>
              <th className="table__th">Имя пользователя</th>
              <th className="table__th">Фамилия пользователя</th>
              <th className="table__th">email</th>
              <th className="table__th">Должность</th>
              <th className="table__th"></th>
            </tr>
          </thead>
          <tbody>
            {users.length ? users.map(user => 
              <Item user = {user} key={user.id}/>
            ) : <></>
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
