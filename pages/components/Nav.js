import Link from "next/link";

export default function Nav(props) {

    let elements = []
    console.log("dsfsdfdfs")
    console.log(props.elements)

    for (let elem in props.elements) {
        elements.push(<div className={props.elements[elem].at(2)}><Link key={Math.random()*4389}href = {props.elements[elem].at(1)}>{props.elements[elem].at(0)}</Link><br/></div>)
    }





    return(
        <h1>{elements}</h1>



    )
}