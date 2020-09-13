import React from 'react';

// this is one type of constructor not exaclty oa constructor but it is somewhat same
const Avatarlist = (props) => {
    return (
            <div className="avatarsize  ma4 bg-light-gray dib pa4 tc grow shadow-5">
                <img src={`https://joeschmoe.io/api/v1/${props.name}`}></img>
                    <h1 className="">{props.name}</h1>
                    <p>{props.work}</p>
            </div>
   )
}

export default Avatarlist;