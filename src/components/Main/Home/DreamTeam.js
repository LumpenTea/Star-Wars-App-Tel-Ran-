import Friend from './Friend';
import styles from './dreamTeam.module.css'
import { dreamTeam } from '../../../utils/constants';

const DreamTeam = ({ hero }) => {
    return (
        <section className={`float-end mx-1 row ${styles.border} ${styles.box}`}>
            <h2 className='col-sm-12 text-center'>Dream Team</h2>
            {dreamTeam.filter(f => f !== hero).map((item, index) => <Friend key={index} friend={item} number={index + 1} hero={hero} />)}
            <h4 className='col-sm-12 text-center'>Click on us!</h4>
        </section>
    )
}

export default DreamTeam;