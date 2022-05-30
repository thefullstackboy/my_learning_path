import Card from "./Card";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
        <div className="container">
            <div className="row my-5">
                <div className="col-md-5 col-sm-12 col-lg-5 col-xl-5 mt-5">                  
                    <img src={process.env.PUBLIC_URL + '/image/img1.jpg'} className="img-fluid"/> 
                </div>

                <div className="col-md-7 col-sm-12 col-lg-7 col-xl-7">
                    <h1 className="text-center">About us</h1>
                    <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                    <p>ontrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                    <p>ontrary to popular belief, Lorem Ipsum is not simply random text.
                         It has roots in a piece of classical Latin literature
                          from 45 BC, making it over 2000 years old. Richard
                           McClintock, a Latin professor at Hampden-Sydney
                            College in Virginia, looked up one of the more
                            obscure Latin words, consectetur, from a Lorem
                             Ipsum passage, and going through the cites of
                              the word in classical literature, discovered
                               the undoubtable source. Lorem Ipsum comes                              
                    </p>
             

                </div>
            </div>

        </div>
        <h1 className="text-center">Membership plan 2022</h1>
        <Card/>
        <Contact/>
        <Footer/>

      
        </>
    ) 
  };
  
  export default Home;