import user from 'data/user.json';
import data from 'data/data.json';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
console.log(user);
console.log(data);
export const App = () => {
  return (
    <main>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} />; */}
    </main>
  );
};
