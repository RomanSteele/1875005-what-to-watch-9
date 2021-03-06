import UserBlockSignIn from '../user-block/user-block-sign-in';
import UserBlockSignOut from '../user-block/user-block-sign-out';
import { useAppSelector } from '../../hooks/index';

function UserBlock(): JSX.Element {
  const { authorizationStatus } = useAppSelector(({ USER }) => USER);
  return (
    <ul className="user-block">
      {authorizationStatus === 'AUTH' ? <UserBlockSignOut /> : <UserBlockSignIn />}
    </ul>);
}

export default UserBlock;
