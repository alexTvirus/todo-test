
const Image = (props) => {
    return (
        <div className="card__img">
            <img src={props.data.imgurl} alt="" className="card__img--img" />
        </div>
    )
}

export default Image