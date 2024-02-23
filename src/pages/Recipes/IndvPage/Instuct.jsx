import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./instuct.css";
import Nutrients from "../../../components/Nutrients";

const Instruct =  () => {
    const app_id = "18a9f56e";
    const app_key = "47f8acbbac039ab852d957292304b364";
    const [data,setData] = useState(null);

    const location = useLocation();
    const recipe_id = location.pathname.split('/')[2];

    //Options for API Call
    const options = {
        method: "GET",
        url: `https://api.edamam.com/api/recipes/v2/${recipe_id}?type=public&app_id=${app_id}&app_key=${app_key}`,
    };

    useEffect(()=>{
        //Call to the api
        const apiCall = async () => {
            await axios
            .request(options)
            .then(async function (response) {
                setData(response.data);
                console.log(response.data);
                console.log(data);
            })
            .catch(function (error) {
                console.error(error);
            });
        };
        apiCall();
    }, []);

    return (
        <div className="flex flex-col bg-orange-400 text-white">
            {data ?( 
                <div>
                    <div className="recipeTitle flex flex-col justify-center items-center">
                        <h1 className="title flex flex-col justify-center items-center p-10">{data.recipe.label}</h1>
                        <h2 className="cal flex flex-col justify-center items-center w-fit rounded-xl border-solid border-black bg-white text-orange-400 border-2">{(data.recipe.calories).toFixed(2)} Calories</h2>
                    </div>
                    <div className="imageDiv flex p-3">
                        <div className="recipeImage flex flex-col content-center p-3">
                            <img src={data.recipe.image} alt="" className="object-cover" />
                        </div>

                        <div className="outsideRecipeInfo flex flex-row justify-center items-center bg-white border-solid border-black border-2 rounded-xl">
                            <div className="recipeInfo text-orange-400 p-3">
                                <h1 className="text-orange-600">Cuisine:</h1>
                                <h1 className="text-orange-400">{data.recipe.cuisineType[0].charAt(0).toUpperCase() + data.recipe.cuisineType[0].slice(1)}</h1>

                                <h1 className="text-orange-600">Meal:</h1>
                                <h1 className="text-orange-400">{data.recipe.mealType[0].charAt(0).toUpperCase() + data.recipe.mealType[0].slice(1)}</h1>

                                <h1 className="text-orange-600">Time:</h1>
                                <h1 className="text-orange-400">{data.recipe.totalTime} minutes</h1>

                                <h1 className="text-orange-600">Source:</h1>
                                <Link to={data.recipe.url}><h1 className="text-blue-400 underline hover:scale-105">Instructions</h1></Link>
                            </div>
                        </div>
                    </div>

                    <div className="second">
                        <div className="secondInside flex flex-col p-8 ">
                            <header className="head flex flex-col h-full text-orange-600 border-solid border-2 border-black rounded-xl">
                                <h1 className="flex flex-col justify-center items-center border-solid border-b-2 border-black">Health Labels</h1>
                                <div className="listGrid grid pt-5 pl-5 h-full">
                                    {(data.recipe.healthLabels).map((label) => (
                                        <li className="healthList list-none" key={label}><h1>{label}</h1></li>
                                    ))}
                                </div>
                            </header>
                        </div>

                        <div className="secondInside flex flex-col p-8">
                            <header className="head flex flex-col h-full text-orange-600 border-solid border-2 border-black rounded-xl">
                                <h1 className="flex flex-col jusitfy-center items-center border-solid border-b-2 border-black">Ingredients</h1>
                                <div className=" pt-5 pl-5 h-full">
                                    {(data.recipe.ingredientLines).map((line) => (
                                        <li className="healthList list-none pb-11 text-orange-500" key={line}><h1>{line}</h1></li>
                                    ))}
                                </div>
                            </header>
                        </div>
                    </div>

                    <div>
                        <Nutrients recipe={data.recipe} />
                    </div>
                </div>
            ):(<h1>Loading...</h1>)
            }
        </div>
    );
};

export default Instruct;