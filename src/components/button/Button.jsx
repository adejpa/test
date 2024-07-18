const Button = ({ children, title, onClick }) => {
    return <button className="btn btn-default" id={title} onClick={onClick}>
        {children}
    </button>
}

export default Button