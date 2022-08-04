import { useContext } from "react";
import { StarWarsContext } from "../../../utils/constants";

const LukeSection = () => {
    
    const hero = useContext(StarWarsContext).main.homePage.hero;
    
    return (
        <section className='float-start me-3 w-25'>
            <img className='w-100' src={hero} alt='Luke'></img>
        </section>
    )
}

export default LukeSection;