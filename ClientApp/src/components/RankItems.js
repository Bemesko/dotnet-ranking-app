import React, {useState, useEffect } from 'react';

const RankItems = () => {
    const [items, setItems] = useState([]);
    // Type 1 = Movies, 2 = Albums
    const dataType = 1;

    useEffect(() => {
        // Makes an HTTP GET to the backend
        fetch (`item/${dataType}`)
        .then((results) => {
            return results.json();
        })
        .then(data => {
            setItems(data);
        })
    }, []);

    return(
        <main>
            {
                (items != null) ? items.map((item) => <h3>{item.title}</h3>) : <div>Loading...</div>
            }
            <div>

            </div>
        </main>
    )
}