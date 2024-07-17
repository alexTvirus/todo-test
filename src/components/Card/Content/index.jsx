
const Content = (props) => {
    return (
        <div className="card__content">
            <h2 className="card__title">{props.data.content}</h2>
            <p className="card__des">{props.data.des}</p>
        </div>
    )
}

export default Content