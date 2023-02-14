import { Profile } from 'components/Profile/Profile';
import user from 'data/user.json';

console.log(user);

export const App = () => {
  return (
    <Profile
      avatar={user.avatar}
      username={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    ></Profile>
  );
};
