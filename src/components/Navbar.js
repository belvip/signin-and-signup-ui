import NavLinks from './NavLinks'

const Navbar = () => {
    return (
        <nav className="bg-gray-300 py-4">
            
            <div className="align-element flex justify-center">
                <ul className="flex space-x-4">
                <NavLinks />
                </ul>
            </div>
        </nav>

    )
}

export default Navbar
