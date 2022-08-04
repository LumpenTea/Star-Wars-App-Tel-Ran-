import { useContext } from "react";
import { StarWarsContext } from "../../../utils/constants";

const LukeSection = () => {
    
    const data = useContext(StarWarsContext).main;
    
    return (
        <section className='float-start me-3 w-25'>
            <img className='w-100' src={data.homePage.hero} alt='Luke'></img>
        </section>
    )
}

export default LukeSection;