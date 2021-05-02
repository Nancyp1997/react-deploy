import React from 'react';
import Loader from './Loader';

function Skill(props) {
    return (
        <>
            <div className='skill'>
                <div className='name'>
                    <p>{props.name}</p>
                </div>
                <div className='confidence'>
                    <Loader progress={props.progress} message={props.message} />
                </div>
            </div>
        </>
    );
}

export default Skill;