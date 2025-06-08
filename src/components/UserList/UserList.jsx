import './UserList.css';
import Table from '../Table/Table';
import Filter from '../Filter/Filter';

function UserList() {
  return (
    <div className="userlist">
      <h1 className="userlist__title">Список пользователей</h1>
      <Filter />
      <Table />
    </div>
  );
}

export default UserList;
