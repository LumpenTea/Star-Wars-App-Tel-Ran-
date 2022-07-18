import Friend from './Friend/Friend';

const DreamTeam = ({ dreamTeam }) => {

    return (
        <section className='float-end w-50 mx-1 row border'>
            <h2 className='col-sm-12 text-center'>Dream Team</h2>
            {dreamTeam.map((value, index) => <Friend photo={value} key={index} number={index + 1} />)}
        </section>
    )
}

export default DreamTeam;