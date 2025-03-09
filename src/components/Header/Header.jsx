function Header() {
    return (
        <header className="max-w-7xl py-6 mx-10">
            <nav className="flex justify-between items-center">
                <div className="logo basis-2/6 text-center font-semibold cursor-pointer">
                    CoffeeStore
                </div>
                <ul className="basis-3/6 flex items-center text-center justify-end gap-8 uppercase text-sm text-gray-500 font-medium">
                    <li
                        className="cursor-pointer py-1 hover:text-gray-800 relative after:absolute after:bottom-0 after:left-0 after:bg-light-coffee
                    after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:ease-in-out after:duration-300"
                    >
                        <a href="!#">Home</a>
                    </li>
                    <li className="ct-top-menu-item">
                        <a href="!#">Products</a>
                    </li>
                    <li className="ct-top-menu-item">
                        <a href="!#">Blog</a>
                    </li>
                    <li className="ct-top-menu-item">
                        <a href="!#">About</a>
                    </li>
                    <li className="ct-top-menu-item">
                        <a href="!#">Contact</a>
                    </li>
                    <li className="ct-top-menu-item">
                        <a href="!#">StyleGuide</a>
                    </li>
                </ul>
                <div className="basis-1/6 justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
                    <a href="#!">Cart</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
