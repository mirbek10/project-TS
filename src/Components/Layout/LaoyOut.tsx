import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const LaoyOut = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
            
        </div>
    )
}

export default LaoyOut
