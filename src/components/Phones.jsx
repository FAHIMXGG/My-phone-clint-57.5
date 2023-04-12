import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Phones = () => {
    const phones = useLoaderData()
    console.log(phones);
    return (
        <div>
            <h2>phones {phones.length}</h2>
            <div>
                {
                    phones.map(phone => 
                    <li key={phone.id}>
                        <Link to={`/phone/${phone.id}`}>{phone.name}</Link>
                    </li>)
                }
            </div>
        </div>
    );
};

export default Phones;