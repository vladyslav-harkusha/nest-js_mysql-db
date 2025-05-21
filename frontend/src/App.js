import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [tables, setTables] = useState([]);
    
    useEffect(() => {
        axios.get('/api/tables').then(({data}) => setTables(data));
    }, []);
    
    return (
        <div>
            <h2>Hello from Docker and Nginx</h2>
            <hr/>
            <h3>Tables</h3>
            <ul>
                {tables.map((table) => (
                    <li key={table.id}>{JSON.stringify(table)}</li>
                ))}
            </ul>
        </div>
    )
}

export { App };
