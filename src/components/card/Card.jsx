const Card = ({ children, image, title }) => {
    return <div className="card">
        <img src={image} className="card-image" alt="image product" />
        <div className="card-body">
            <h1>{title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non deserunt optio ullam aliquam saepe.</p>
        </div>
        <div className="card-footer">
            {children}
        </div>
    </div>
}

export default Card