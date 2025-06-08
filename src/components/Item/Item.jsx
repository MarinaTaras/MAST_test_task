import { useNavigate } from 'react-router-dom';
import './Item.css';

function Item({ user }) {

  const navigate = useNavigate();
  
  return (
    <tr onClick={() => {
      navigate( `user/${user.id}`, { state: user })
      }}
       className="item" key={user.id}
        >
      <td className="item__td">{user.firstName}</td>
      <td className="item__td">{user.lastName}</td>
      <td className="item__td">{user.email}</td>
      <td className="item__td">{user.role}</td>
    </tr>
  );
}

export default Item;
