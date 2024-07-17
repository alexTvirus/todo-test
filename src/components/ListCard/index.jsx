
import "./style.scss"

import Card from "../Card"

const ListCard = (props) => {
    return (<>
        <h1> {props.title}</h1>
        <div className="lists">
            {props.data.map((item) => {
                return <Card key={item.id} data={item}></Card>
            })}
        </div>
    </>
    )
}

export default ListCard