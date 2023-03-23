import CartWidget from "./CartWidget/cartwidget"
import logo from "../../assets/21.png"

function Navbar() {
    return (
        <div>
        <nav className="navbar navbar-expand-md">
        <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <a className="nav-link" href="./pages/about_us.html">Sobre Nosotras</a>
                    <a className="nav-link" href="./pages/productos.html">Productos</a>
                </div>
            </div>
            <a className="nav-link foto-logo" href="./index.html"><img src={logo} alt="" width="20%"
                    height="20%"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav">
                    <a className="nav-link" href="./pages/talles.html">Talles</a>
                    <a className="nav-link" href="./pages/Contactanos.html">Contáctanos</a>
                    < CartWidget />
                </div>
            </div>
        </div>
    </nav>
    </div>
    )

}

export default Navbar
