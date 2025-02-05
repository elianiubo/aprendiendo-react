import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
  const users = [
    { name: "Elia Niubo", userName: "elianiubo", isFollowing: false },
    { name: "Javi Olucha", userName: "javiolucha", isFollowing: false },
    { name: "Elia Trac", userName: "tracniu", isFollowing: true },
    { name: "Ginesta Burgos ", userName: "ginestaburgos", isFollowing: true },
  ];
  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          // eslint-disable-next-line react/jsx-key
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
}
