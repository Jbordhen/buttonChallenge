import React from 'react'
import SideBar from './Components/SideBar'
import { BrowserRouter, Route } from 'react-router-dom'
import ButtonScreen from './Screens/ButtonScreen'

const App = () => {
    return (
        <BrowserRouter>
            <Route>
                <SideBar />
                <ButtonScreen />
            </Route>
        </BrowserRouter>
    )
}

export default App
