import {useState} from 'react';

export default function FollowCard({name, userName, initialIsFollowing}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? 'Siguiendo' : 'Seguir';

  const buttonClassName = isFollowing
    ? 'follow-card-button is-following'
    : 'follow-card-button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="follow-card">
      <header className="follow-card-header">
        <img
          className="follow-card-avatar"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="follow-card-info">
          <strong>{name}</strong>
          <span>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="follow-card-text">{text}</span>
          <span className="follow-card-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
