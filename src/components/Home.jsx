import pic1 from '../assets/images/pngwing.com.png'

const Home = () => {
    return (
        <div className="container-lg">
            <div className="flex-wrapper">
                <div className="text-div">
                    <div className="">
                        <h2 className="heading">heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt eum fuga impedit distinctio! Dignissimos odit repellendus quidem laudantium ut eum. Esse consequatur, vero iusto alias modi ea reiciendis repellendus!</p>
                        <button className="button bg-blue-600 mt-4">start</button>
                    </div>
                </div>
                <div className="image-div hidden sm:block">
                    <img src={pic1} alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
}
 
export default Home;