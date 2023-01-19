import './App.css';
import FollowCard from './FollowCard';

const users = [
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: true,
  },
  {
    userName: 'pheralb',
    name: 'Pablo H.',
    isFollowing: false,
  },
  {
    userName: 'PacoHdezs',
    name: 'Paco Hdez',
    isFollowing: true,
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false,
  },
];

const user = {
  name: 'Franco Dreer',
  userName: 'franco_dreer',
  isFollowing: false,
};

export default function App() {
  return (
    <section className="App">
      <h2 className="follow-title">Para seguir...</h2>
      {users.map(({userName, name, isFollowing}) => (
        <FollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          name={name}
        />
      ))}
      <a className="more-suggestions">Mostrar más</a>
    </section>
  );
}
