import 'bootstrap/dist/css/bootstrap.css';
const Page = () => {
    return (
        <div>
            <div class="jumbotron" id="hero"></div>  
            <div class="container">
                <div class="row">
                    <div class="col-sm-">
                        Try to update the file and save. 
                    </div>
                </div>
            </div>
            <style jsx>{`
                #hero{
                    height: 500px;
                    padding:0;
                    background-image: url("https://imgur.com/Lohtr8J.jpg");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: 50% 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}
            </style>
        </div>
    )
}

export default Page;