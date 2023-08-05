import pic1 from '../assets/images/pngwing.com.png'
const Contact = () => {
    return (
        <div className="container-lg">
            <div className="mt-6 flex-wrapper">
                <div className="image-div-lg">
                    <img src={pic1} alt="" className="w-full h-full" />
                </div>
                <div className="text-div">
                    <form action="" className="bordered-form">
                        <h2 className="form-title">Message us</h2>
                        <div className="my-2">
                            <input type="text" placeholder="email" className="input" />
                        </div>
                        <div className="my-2">
                            <textarea name="" id="" cols="10" rows="5" placeholder="your message" className="input"></textarea>
                        </div>
                        <button className="submit-button">submit</button>
                    </form>
                </div>
                <div className="image-div-sm">
                    <img src={pic1} alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}
 
export default Contact;