export default function Navbar(){
    return(
        <>
            <nav className="navbar">
            <div className="logo h2">Dinesh Kumar</div>
            <input type="checkbox" id="menu-toggle" hidden />
            <label htmlFor="menu-toggle" className="menu-icon">
                <i className="fas fa-bars"></i>
            </label>
            <ul className="nav-links m-0">
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>

        </>
    )
}