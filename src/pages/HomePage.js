
import { Outlet, useNavigation } from 'react-router-dom';
import { Navbar, Loading } from '../components';

const HomePage = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
    return (
        <> 
            <Navbar />
            {isPageLoading ? (
                <Loading />
            ) : (
                <section className='align-element py-20'>
                    {/* Outlet : Placeholder to render child route components within a parent component */}
                    <Outlet />  
                </section>
            )}
        </>
    )
}

export default HomePage