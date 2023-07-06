const OrderPanel = ({canoe, custom, modelSelect, model, colorSelect, custColor, c1, c2, c3, preC1, preC2, preC3, func, preColorSelect, preColor, setRegion}) => {
    return (
        <>
            <div className="border-2 w-9/12 bg-neutral-100 px-3 pt-8 h-[675px] rounded-xl">
                    <h1 className="grey heading text-4xl pb-10">{canoe === 0 ? 'Marara V1' : canoe === 1 ? 'Mana OC1' : 'Matahina V6'}</h1>
                    <div className="flex justify-around ">
                        <img src={canoe === 0 ? "./marara_6.JPG" : canoe === 1 ? "mana_10.JPG" : 'matahina_5.jpg'} className="w-6/12 h-[50%] mt-10"/>
                        <div className="w-5/12">
                            <div className="flex flex-col items-left mb-14">
                                <p className="orange heading text-2xl text-left mb-2">Select your region</p>
                                <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={setRegion}>
                                    <option>Select a country</option>
                                    <option>United States</option>
                                    <option>Hawaii</option>
                                    <option>Canada</option>
                                    <option>Tahiti</option>
                                    <option>Australia</option>
                                    <option>Pacific Islands</option>
                                </select>
                            </div>
                            <div className="flex justify-around mb-10">
                                <p className={custom ? "orange heading text-2xl text-left mb-2 underline hover:cursor-pointer" : "grey heading text-2xl text-left mb-2 custom-select"} onClick={() => func('cust')}>Custom</p>
                                <p className={custom === false ? "orange heading text-2xl text-left mb-2 underline hover:cursor-pointer" : "grey heading text-2xl text-left mb-2 custom-select"} onClick={() => func('preb')}>Prebuilt</p>
                            </div>
                            {custom === true ?
                                <>
                                    <div className="flex flex-col items-left mb-14">
                                        <p className="orange heading text-2xl text-left mb-2">Select a model</p>
                                        {canoe === 0 || canoe === 1 ? 
                                            <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={modelSelect} value={model ? model : 0}>
                                                <option>Select a model</option>
                                                <option>Pro Carbon</option>
                                                <option>Hybrid Carbon</option>
                                            </select>
                                        : 
                                            <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={modelSelect} value={model ? model : 0}>
                                                <option>Select a model</option>
                                                <option>Wood Iakos/Fiber Glass Ama</option>
                                                <option>Carbon Iakos/Carbon Ama</option>
                                            </select>
                                        }
                                    </div>
                                    <div className="flex flex-col items-left mb-14">
                                        <p className="orange heading text-2xl text-left mb-2">Select a color scheme</p>
                                        <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={colorSelect} value={custColor ? custColor : 0}>
                                            <option>Select a color scheme</option>
                                            <option>White/White/Yellow</option>
                                            <option>Blue/Blue/Red</option>
                                            <option>Dark Blue/Dark Blue/Dark Blue</option>
                                            <option>White/White/Green</option>
                                            <option>Light Grey/Light Grey/Blue</option>
                                            <option>White/White/Blue</option>
                                            <option>Yellow/Yellow/Yellow</option>
                                            <option>White/White/Red</option>
                                            <option>Light Grey/Light Grey/Light Grey</option>
                                        </select>
                                    </div>
                                </>
                            :
                                <>
                                    <div className="flex flex-col items-left mb-14">
                                        <p className="orange heading text-2xl text-left mb-2">Select a model</p>
                                        {canoe === 0 || canoe === 1 ? 
                                            <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={modelSelect} value={model ? model : 0}>
                                                <option>Select a model</option>
                                                <option>Pro Carbon</option>
                                                <option>Hybrid Carbon</option>
                                            </select>
                                        : 
                                            <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={modelSelect} value={model ? model : 0}>
                                                <option>Select a model</option>
                                                <option>Wood Iakos/Fiber Glass Ama</option>
                                                <option>Carbon Iakos/Carbon Ama</option>
                                            </select>
                                        }
                                    </div>
                                    <div className="flex flex-col items-left mb-14">
                                        <p className="orange heading text-2xl text-left mb-2">Canoes in stock</p>
                                        <select className="text-2xl bg-neutral-100 border w-10/12 grey" onChange={preColorSelect} value={preColor ? preColor : 0}>
                                            <option>Select a color scheme</option>
                                            <option>Isn't/Anything/Here</option>
                                        </select>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                    {custom === true ? 
                                (c1 && c2 && c3 && c1.length > 0 && c2.length > 0 && c3.length > 0 && custom === true) && 
                                    <div className="flex justify-around text text-xl grey">
                                        <p className="heading">Hull Color: {c1[0]}</p>
                                        <div className={(c1 && c1.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: c1[1]}}></div>
                                        <p className="heading">Ama Color: {c2[0]}</p>
                                        <div className={(c2 && c2.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: c2[1]}}></div>
                                        <p className="heading">Cockpit Color: {c3[0]}</p>
                                        <div className={(c3 && c3.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: c3[1]}}></div>
                                    </div>      
                            :
                                (preC1 && preC2 && preC3 && preC1.length > 0 && preC2.length > 0 && preC3.length > 0 && custom === false) && 
                                    <div className="flex justify-around text text-xl grey">
                                        <p className="heading">Hull Color: {preC1[0]}</p>
                                        <div className={(preC1 && preC1.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: preC1[1]}}></div>
                                        <p className="heading">Ama Color: {preC2[0]}</p>
                                        <div className={(preC2 && preC2.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: preC2[1]}}></div>
                                        <p className="heading">Cockpit Color: {c3[0]}</p>
                                        <div className={(preC3 && preC3.length > 0) ? 'w-[30px] h-[30px] border-black border' : 'hidden'} style={{backgroundColor: preC3[1]}}></div>
                                    </div>    
                            }
                </div>
        </>
    )
}
export default OrderPanel