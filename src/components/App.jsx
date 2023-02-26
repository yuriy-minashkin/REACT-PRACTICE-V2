import { data } from './data/users'
import { User } from '../components/User/User';

export const App = () => {
  return (
    <User user={data[0]}/>
  );
};
