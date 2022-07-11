import friend1 from '../images/friend1.jpg';
import friend2 from '../images/friend2.jpg';
import friend3 from '../images/friend3.jpg';
import friend4 from '../images/friend4.jpg';
import friend5 from '../images/friend5.jpg';
import friend6 from '../images/friend6.jpg';
import friend7 from '../images/friend7.jpg';
import friend8 from '../images/friend8.jpg';
import friend9 from '../images/friend9.jpg';

const DreamTeam = () => {
    return(
        <section className='float-end w-50 mx-1 row border'>
            <h2 className='col-sm-12 text-center'>Dream Team</h2>
            <img className='col-sm-4 p-1' src={friend1} alt='friend'></img>
            <img className='col-sm-4 p-1' src={friend2} alt='friend'></img>
            <img className='col-sm-4 p-1' src={friend3} alt='friend'></img>
            <img className='col-sm-4 p-1' src={friend4} alt='friend'></img>
            <img className='col-sm-4 p-1' src={friend5} alt='friend'></img>
            <img className='col-sm-4 p-1' src={friend6} alt='friend'></img>
            <img className='col-sm-4 p-1' src={friend7} alt='friend'></img>
            <img className='col-sm-4 p-1' src={friend8} alt='friend'></img>
            <img className='col-sm-4 p-1' src={friend9} alt='friend'></img>
        </section>
    )
}

export default DreamTeam;