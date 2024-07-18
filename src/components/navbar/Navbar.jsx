const Navbar = ({ children }) => {
    return <nav className="navbar">
        Navbar
        <div style={{ display: "flex", gap: "10px" }}>
            {children}
        </div>
    </nav>
}

export default Navbar