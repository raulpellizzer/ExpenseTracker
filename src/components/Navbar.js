function NavBar() {
    return (
        <>
            
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">AppNameHere</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/addnewexpense">Add New Expense</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/searchexpense">Search Expense</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/alerts">Alerts</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/login">Login</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/register">Register</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;