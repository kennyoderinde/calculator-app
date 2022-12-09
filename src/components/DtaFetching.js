import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './myStyles.css'

function DtaFetching(){
    const [posts, setPosts] = useState([])
    const [id, setId] = useState()
    const [idFromButtonClick, setIdFromButtonClick] =useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums/1/photos')
           .then(response => {
            console.log(response)
            setPosts(response.data)
           })
           .catch(err => {
            console.log(err)
           })
    }, [idFromButtonClick])

    return (
        <body>
            <input type="text" values={id} onChange={e => setId(e.target.value)} />   
            <button type="button" onClick={handleClick}>Fetch Color</button>
            <div className='card-container'> 
                {
                    posts.map(values => (
                    <h1 className='primary' key={values.id}>{values.id}<img src = {values.url}/></h1>
                ))}
            </div>
            
        </body>
    )
}
export default DtaFetching; 