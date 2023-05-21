import { createContext, useEffect, useState } from 'react'
import T from 'prop-types'

export const AppContext = createContext()

export default function AppProvider({ children }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/reviews');
                const data = await response.json();
                // Process the data and update the context
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once

    return (
        <AppContext.Provider value={{ data }}>
            {children}
        </AppContext.Provider>
    )
}

AppProvider.propTypes = {
    children: T.oneOfType([T.arrayOf(T.node), T.node])
}
