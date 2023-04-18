import { Link, Outlet } from 'react-router-dom';
function App(props: { [key: string]: any }) {
  console.log(props);
  return (
    <h1>
      <Link to='/home'>weqweqweqwe</Link>
      <Outlet />
    </h1>
  );
}

export default App;
