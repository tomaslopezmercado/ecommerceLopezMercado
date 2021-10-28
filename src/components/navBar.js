import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header>
      
      <nav>
        <h1>E-Commerce</h1>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              Home 
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Productos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <CartWidget/>
            </a>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default NavBar;
