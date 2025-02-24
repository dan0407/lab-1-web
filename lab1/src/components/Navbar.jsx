import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src='https://purepng.com/public/uploads/large/purepng.com-apple-logologobrand-logoiconslogos-251519938788qhgdl.png' className="logo"></img>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
