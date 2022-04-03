import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../const';

function UserBlockSignOut(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { userLoginData } = useAppSelector((state)=> state);
  console.log(userLoginData);
  return (
    <div className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar"onClick={() => {navigate(AppRoute.MyList);}}>
          <img src={userLoginData.avatarUrl} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item"></li>
      <Link className="user-block__link" onClick={(evt) => {evt.preventDefault(); dispatch(logoutAction());}} to='/main'>Sign out</Link>
    </div>
  );
}

export default UserBlockSignOut;
