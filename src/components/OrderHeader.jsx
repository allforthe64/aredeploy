const OrderHeader = ({canoe, func}) => {
    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="heading text-8xl grey mb-10" >Order A Canoe</h1>
            </div>
            <div className="py-10">
                <p className="heading grey text-left ml-[2.7%] text-4xl">Select a canoe:</p>
                <div className="flex justify-around py-10">
                    <img src="marara_4.JPG" className={canoe === 0 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => func(0)}/>
                    <img src="mana_1.JPG" className={canoe === 1 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => func(1)}/>
                    <img src="matahina_1.png" className={canoe === 2 ? "w-3/12 scale-110 order-card-bordered transition-all" : "w-3/12 transition duration-300 ease-in-out transform hover:scale-110 order-card transition-all"} onClick={() => func(2)}/>
                </div>
            </div>
        </>
    )
}

export default OrderHeader