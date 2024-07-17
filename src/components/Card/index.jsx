import Content from "./Content"
import Image from "./Image"
import "./style.scss"


const Card = (props) => {
    return (
        <div className="card">
            <Image {...props}></Image>
            <Content {...props}></Content>
        </div>
    )
}

export default Card