import temacores from './Themes.js'
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

//Imports de componentes React
import Header from './Header/Header.jsx'
import LobbySection from './Lobby/LobbySection.jsx'

function App () {
    
    const [darkMode, setdarkMode] = useState(true);

    const toggleDarkMode = () => {
        setdarkMode(!darkMode)
    };

    return(
        <>
        <ThemeProvider theme={{temacores , darkMode}}>
            <Header toggleDarkMode={toggleDarkMode}/>
            <LobbySection/>
        </ThemeProvider>
        </>
    )
}

export default App