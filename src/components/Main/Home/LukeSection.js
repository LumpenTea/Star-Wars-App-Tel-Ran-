import { characters } from "../../../utils/constants";

const LukeSection = ({hero}) => {

    return (
        <section className='float-start me-3 w-25'>
            <img className='w-100' src={characters[hero].img} alt='Luke'></img>
        </section>
    )
}

export default LukeSection;