const Title = () => {
  return (
    <a href="/">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaOo6QvpGCE3XOtRt-VsIXnfclaPH7OHP2g&s"
        alt="logo"
        className="logo"
      />
    </a>
  );
};
const Head = () => {
  return (
    <>
      <div className="nav-bar">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Head;
