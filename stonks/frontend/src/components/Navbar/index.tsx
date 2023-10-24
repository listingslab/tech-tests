import './navbar.css';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/statements">Statements</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
