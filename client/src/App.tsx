import { Link, Outlet, Route, Routes } from "react-router-dom";
import CRUDEmpleados from "./pages/empleados/CRUDEmpleados";
import Dashboard from "./pages/Dashboard";
import EmpleadoEditor from "./pages/empleados/EmpleadoEditor";
import CRUDDirecciones from "./pages/direcciones/CRUDDirecciones";
import DireccionEditor from "./pages/direcciones/DireccionEditor";
import CRUDProductos from "./pages/productos/CRUDProductos";
import ProductoEditor from "./pages/productos/ProductoEditor";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="empleados" element={<CRUDEmpleados />} />
        <Route path="empleados/:id" element={<EmpleadoEditor />} />
        <Route path="empleado" element={<EmpleadoEditor />} />

        <Route path="direcciones" element={<CRUDDirecciones />} />
        <Route path="direcciones/:id" element={<DireccionEditor />} />
        <Route path="direccion" element={<DireccionEditor />} />

        <Route path="productos" element={<CRUDProductos />} />
        <Route path="productos/:id" element={<ProductoEditor />} />
        <Route path="producto" element={<ProductoEditor />} />

        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/empleados">Empleados</Link>
          </li>
          <li>
            <Link to="/direcciones">Direcciones</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
