import { friends } from '../utils/constants';

const DreamTeam = () => {

    const ImageAppend = () => {
        let arr = friends.map((value, index) => {
            return (
                <img src={value} className='col-sm-4 p-1' key={index} alt='friend'></img>
            );
        });

        return arr;
    }

    return (
        <section className='float-end w-50 mx-1 row border'>
            <h2 className='col-sm-12 text-center'>Dream Team</h2>
            <div>{ImageAppend()}</div>
        </section>
    )
}

export default DreamTeam;