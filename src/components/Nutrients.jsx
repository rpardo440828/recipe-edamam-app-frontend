import React from "react";
import "./Nutrients.css";

const Nutrients = (props) => {
    return (
        <div className="flex flex-col w-full p-8">
            <header className="flex flex-col h-full text-orange-600 border-solid border-2 border-black rounded-xl bg-white">
                <h1 className="flex flex-col jusitfy-center items-center border-solid border-b-2 border-black">Nutrient Facts</h1>
                <div className="nutr pt-5 pl-5 h-full">
                    {(props.recipe.digest).map((value) => (
                        <li className="healthList text-3xl list-none" key={value.label}><h3>{`${value.label}: ${(value.total).toFixed(2)}${value.unit}`}</h3></li>
                    ))}
                </div>
            </header>
        </div>
    );
};

export default Nutrients;