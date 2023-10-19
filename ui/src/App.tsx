import UserProfile from './users/UserProfile';

const App: React.FC = () =>
  window.location.pathname.match(/\/(\w+)\//i)?.[1] === 'users' ? (
    <UserProfile />
  ) : (
    <div>home</div>
  );

export default App;
