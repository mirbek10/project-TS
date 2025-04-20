import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { FetchUsers } from "../../store/Users/UserThunk";
import "./User.scss";
import { Link } from "react-router-dom";
import Loader from "../../Components/loader/Loader";

function Users() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(FetchUsers() as any);
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  const filteredUsers = list.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="users-container">
      <input
        type="text"
        placeholder="Поиск по имени..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <ul className="user-list">
        {filteredUsers.map((user) => (
          <Link to={`/user/${user.id}`} className="user-card" key={user.id}>
            <p className="user-name">{user.username}</p>
            <p className="user-email">{user.email}</p>
            <p className="user-city">{user.address.city}</p>
          </Link>
        ))}
        {filteredUsers.length === 0 && (
          <p className="no-results">Пользователи не найдены</p>
        )}
      </ul>
    </div>
  );
}

export default Users;
