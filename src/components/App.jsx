import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from 'react-router-dom';

const Login = () => <h1>Login</h1>;

const GuestLayout = () => {
  return (
    <div>
      <h1>This is the Guest Layout Page</h1>
      <Outlet />
    </div>
  );
};

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route path="login" element={<Login />} />

        <Route index element={<div>Default Page Content</div>} />
      </Route>
    </Routes>
  );
};

export default function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link> <Link to="/login">Go to login</Link>
        <AppRoute />
      </div>
    </Router>
  );
}
