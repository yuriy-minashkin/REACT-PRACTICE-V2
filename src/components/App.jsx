import { data } from '../data/users'
// import { User } from 'components/User/User';
import { UsersList } from './UsersList/UsersList';

export const App = () => {
  return (
    <>
      {/* <User user={data[0]} /> */}
      <UsersList users={data} />
    </>
  );
};
