import { BsSearchHeartFill } from "react-icons/bs";
import Question from './Question'

function Test() {
    let sports = "Baseball"
    let src = "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/2024/03/wasp12b.png"
    let w="712", h="450", alt="Wasp 12-B"
    let info = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate natus recusandae dolore! Eius in quam repellendus eligendi quaerat odio."
    
    return(
    <>
        <h1>Nico Diaz</h1>
        <p>Hello, my name is Nico Diaz</p>
        <h3>{sports}</h3>
        <img src={src} alt={alt} width={w} height={h} />
        <button ><BsSearchHeartFill size="500px" style={{backgroundColor: 'rgb(180, 56, 210)'}}/></button>
        <Question title="Hannibal" info={info} />
    </>
    )
}

export default Test;