import { User } from 'components/User/User';
import PropTypes from 'prop-types';

export const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <User user={user} />
          </li>
        );
      })}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  )
}
