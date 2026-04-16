import {SiteNavbar} from "./components/SiteNavbar.jsx";
import {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from '../src/components/AppRoutes.jsx'

const App = () => {
    return (

        <div>
            <Router>
                <SiteNavbar/>
                <AppRoutes/>
            </Router>
        </div>

    )
}

export default App;