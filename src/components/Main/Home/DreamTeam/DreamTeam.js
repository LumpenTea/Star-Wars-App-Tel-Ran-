import Friend from './Friend/Friend';
import styles from './dreamTeam.module.css'
import { dreamTeam } from '../../../../utils/constants';

const DreamTeam = ({ setHero, hero }) => {

    const updateHero = (photo) => {
        setHero(photo);
        const index = dreamTeam.findIndex(item => item === photo);
        dreamTeam[index] = hero;
    }

    return (
        <section className={`float-end mx-1 row ${styles.border} ${styles.box}`}>
            <h2 className='col-sm-12 text-center'>Dream Team</h2>
            {dreamTeam.map(item => <Friend photo={item} updateHero={updateHero} key={item} />)}
            <h4 className='col-sm-12 text-center'>Click on us!</h4>
        </section>
    )
}

export default DreamTeam;