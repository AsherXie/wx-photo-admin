import { Link, Outlet } from 'react-router-dom';
function App(props: { [key: string]: any }) {
  console.log(props);
  return (
    <h1>
      <Link to='/home'>232313123213</Link>
      <Outlet />
    </h1>
  );
}

export default App;
