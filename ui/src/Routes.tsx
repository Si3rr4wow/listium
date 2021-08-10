import UserProfile from './users/UserProfile';

const Routes: React.FC = () => (
  window.location.pathname.match(/\/([a-z]+)\/[a-z]+/i)?.[1] === 'users' ? 
  <UserProfile/> : <div>home</div>
)

export default Routes;
