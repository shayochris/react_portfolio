import pic3 from '../assets/images/png3.png'
import pic4 from '../assets/images/png4.png'
import profile from '../assets/images/default-profile.jpg'
const About = () => {
    return (
        <div className="container-lg">
            <div className="flex-wrapper">
                <div className="text-div">
                    <div className="">
                        <h2 className="heading">Who we are</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus blanditiis accusantium nesciunt dicta asperiores, laborum id natus. Nostrum, et.</p>
                        <button className="button bg-blue-600 mt-4">more</button>
                    </div>
                    
                </div>
                <div className="image-div">
                    <img src={pic3} alt="" className="w-full h-full" />
                </div>
            </div>
            <div className="mt-6 flex-wrapper">
                <div className="image-div-lg">
                    <img src={pic4} alt="" className="w-full h-full" />
                </div>
                <div className="text-div">
                    <div className="">
                        <h2 className="heading">Our Team</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi temporibus blanditiis accusantium nesciunt dicta asperiores, laborum id natus. Nostrum, et.</p>
                        <button className="button bg-blue-600 mt-4">more</button>
                    </div>
                </div>
                <div className="image-div-sm">
                    <img src={pic4} alt="" className="w-full h-full" />
                </div>
            </div>

            <div className="my-6 container-lg">
                <h2 className="heading">Team members</h2>
                <div className="my-4 grid lg:grid-cols-3 sm:grid-cols-2 gap-4 p-2">
                    {[1,2,3].map((n)=>(
                        <div key={n}
                        className="p-4 border-[1px] border-gray-300 flex flex-col justify-center items-center rounded-lg">
                            <div className="w-[120px] h-[120px] avatar">
                            <img src={profile} alt="" className="w-full h-full" />
                            </div>
                            <div className="text-center p-2">
                                <h2 className="text-xl font-semibold">Joe dore</h2>
                                <p className="text-blue-600 text-sm" >developer</p>
                            </div>
                            <div className="flex">
                                <div className="avatar w-[30px] h-[30px] mx-1"></div>
                                <div className="avatar w-[30px] h-[30px] mx-1"></div>
                                <div className="avatar w-[30px] h-[30px] mx-1"></div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>

        </div>
    );
}
 
export default About;