import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { FetchUserDetails } from "../../store/UserDetails/UserdetailsThunk";
import "./UserDetails.scss";
import Loader from "../../Components/loader/Loader";

function UserDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, posts, loading, error } = useSelector(
    (state: RootState) => state.userDetails
  );

  useEffect(() => {
    if (id) {
      dispatch(FetchUserDetails(Number(id)) as any);
    }
  }, [dispatch, id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  if (loading) return <Loader />;
  if (error) return <p>Ошибка: {error}</p>;
  if (!user) return <p>Пользователь не найден</p>;

  return (
    <div className="user-details">
      <button onClick={handleGoBack} className="back-button">
        ← Назад
      </button>

      <div className="user-info">
        <h2>{user.name}</h2>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Телефон:</strong> {user.phone}
        </p>
        <p>
          <strong>Адрес:</strong> {user.address.city}, {user.address.street},{" "}
          {user.address.suite}
        </p>
        <p>
          <strong>Компания:</strong> {user.company.name}
        </p>
      </div>

      <div className="posts">
        <h3>Посты:</h3>
        {posts.map((post) => (
          <div key={post.id} className="user-post">
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserDetails;
