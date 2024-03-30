import componentsImg from '../assets/Components.png'
//  ../src/assets/Components.png
export default function CoreConcept(props) {
    return (
        <li>
            <img src={props.image} alt={props.alt} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}