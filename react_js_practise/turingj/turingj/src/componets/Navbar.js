const Navbar = ()=> {
    return (
        <>
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <ul className="navbar-nav mr-auto">
                    <li><a><img src={process.env.PUBLIC_URL + "./image/logo.png"} className="ml-5" /></a></li>                   
                </ul>

                <ul className="float-right navbar-nav">
                    <li className="nav-item"><a className="nav-link">Apply for Jobs</a></li>
                    <li className="nav-item"><a className="nav-link"><button className="btn btn-primary">Hire Developers</button></a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar