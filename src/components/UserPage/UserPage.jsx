import { useLocation } from 'react-router-dom';
import './UserPage.css';

const UserPage = () => {
  const location = useLocation();
  const user = location.state;

  if (user){ 
    return (
      <div className="user-page">
        <div className="user-page__wrapper">
            <h1 className="user-page__title">Страница пользователя {user.firstName}</h1>
            <div className="user-page__block">
              <h2 className="user-page__subtitle">Основная информация</h2>
              <p className="user-page__info">Имя {user.firstName}</p>
              <p className="user-page__info">Фамилия {user.lastName}</p>
              <p className="user-page__info">Email {user.email}</p>
              <p className="user-page__info">Роль {user.role}</p>
            </div>
            <div className="user-page__block">
              <h2 className="user-page__subtitle"> Информация о месте работы</h2>
              <p className="user-page__info">Отрасль {user.company.department}</p> 
              <p className="user-page__info">Название компании "{user.company.name}"</p>
              <p className="user-page__info">Название должности {user.company.title}</p>
              <p className="user-page__info">Адрес {user.address.city}</p> 
            </div>
            <a className="user-page__link" href="/"><button className="user-page__button" type="button">К списку пользователей</button></a>
          </div>
      </div>
    );
  } 
}
 
  


export default UserPage;