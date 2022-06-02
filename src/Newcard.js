import React from 'react'
import { Link, useParams } from 'react-router-dom'


// const Sampledata = [
//     {
//         id: "1",
//         title: "Online Experiences",
//         dscription: "Unique activities we can do together, led by a world of hosts.",
//         price: "5000",
//         img: "https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720",
//     }, {
//         id: "2",
//         title: "",
//         dscription: "",
//         price: "",
//         img: "",
//     }
// ]


function Newcard(prop) {
    // const {data} = useParams();

    return (
        <div >
            <h1>Hey its new card</h1>
            <img src={prop.img} alt="" />

            <div className="card__info">
                <h2>{prop.title}</h2>
                <h4>{prop.description}</h4>
                <h3>{prop.price}</h3>
            </div>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default Newcard

// import React from 'react'

// const Newcard = () => {
//   return (
//     <div style={{backgroundColor:"red", width:"20000px", height:"20000px"}}></div>
//   )
// }

// export default Newcard