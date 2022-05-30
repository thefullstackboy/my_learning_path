const Spinup = ()=> {
    return (
        <>
        <div className="container">
            <div className="row my-3">
                <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 my-5 text-left">
                <h1>Spin up</h1>
                <h1>your engineering</h1>
                <h1>dream team</h1>

                <p>OUr Our AI-backed Intelligent Talent Cloud helps
                   you source, vet, match and manage the
                   world's best software developers remotely.
                </p>

                <a><button className="btn btn-primary">Hire Developers</button></a>
                <p>Looking for jobs instead?<a href="#">Apply for Jobs</a></p>

                <div className="mt-5">
                    <p>Join hundreds of companies that trust Turing to hire remote software developers</p>
                    <a><img src={process.env.PUBLIC_URL + "./image/brandname.png"} /></a>
                </div>
                </div> 

                <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 text-right"> 
                <img src={process.env.PUBLIC_URL + "./image/sp2.png"} className="img-fluid"/>       

                </div>   
           

            </div>            
        </div>
        <div className="container-fluid">
                <img src={process.env.PUBLIC_URL + "./image/di.png"} className="img-fluid"/>

                </div> 
        </>
    )
}

export default Spinup