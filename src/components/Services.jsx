const Services = () => {
    return (
        <div className="container-lg">
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
                {[1,2,3,4,5,6].map((n)=>(
                    <div className="card" key={n}>
                        <h2 className="text-xl font-semibold">web development</h2>
                        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores incidunt, hic a dolorem adipisci iusto saepe temporibus dolore quisquam provident blanditiis unde eius assumenda atque cumque eos minima, molestiae aperiam!</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Services;