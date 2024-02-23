import React, { useState } from "react";
import axios from "axios";
import "./Recipes.css";
import DropdownButton from "../../components/DropdownButton";
import SearchBox from "../../components/SearchBox";
import { api_options } from "../../constants";
import Button from "@mui/material/Button";
import CardList from "../../components/CardList";

const Recipe = () =>{
    const [name, setName] = useState("");
    const [cuisine, setCuisine] = useState("none");
    const [allergy, setAllergy] = useState("none");
    const [diet, setDiet] = useState("none");
    const [apiData, setApiData] = useState([{}]);
    const app_id = "18a9f56e";
    const app_key = "47f8acbbac039ab852d957292304b364";

    //Options for API Call
    const options = {
        method: "GET",
        url: `https://api.edamam.com/api/recipes/v2?type=public&app_id=${app_id}&app_key=${app_key}`,
        params: {
            cuisineType: cuisine === "none" ? null : cuisine,
            health: allergy === "none" ? null : allergy,
            diet: diet === "none" ? null : diet,
            q: name,
            random: true,
        },
    };

    //Call to the api
    async function apiCall() {
        await axios
          .request(options)
          .then(async function (response) {
            setApiData(response.data.hits);
          })
          .catch(function (error) {
            console.error(error);
          });
    };


    return(
        <div className="recipe">
            <div className="heading">
                    <h1>Check Out Our Recipe Catalog</h1>
                    <h2>Powered by Edamam`s Recipe API</h2>
            </div>

             {/* Search header group */}
            <div className="menu flex flex-row justify-center items-center gap-5 sm:mt-2 md:flex-row sm:justify-evenly pb-5">
                {/* Search by Name Box*/}
                <SearchBox callBack={setName} onKeyDownFunc={apiCall}/>

                {/* Dropdown Selects */}
                <div className="drop flex flex-row items-center justify-center gap-5">
                    <DropdownButton title={api_options[0].title} results={api_options[0].results} key={api_options[0].id} callBack={setCuisine} />
                    <DropdownButton title={api_options[1].title} results={api_options[1].results} key={api_options[1].id} callBack={setAllergy} />
                    <DropdownButton title={api_options[2].title} results={api_options[2].results} key={api_options[2].id} callBack={setDiet} />
                </div>

                <div className="mt-4 sm:mt-6">
                    <Button variant="contained" className="from-green-500 to-orange-400" style={{
                        textTransform: "none",
                        fontSize: 17,
                        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                        background: "linear-gradient(to bottom right, var(--tw-gradient-stops))",
                        borderRadius: 20,
                    }}
                    onClick={apiCall}
                    >
                        View Recipes
                    </Button>
                </div>
            </div>

            {apiData.length > 1 ? (
                <CardList recipes={apiData} />
            ) : (
                <div className=" text-gray-500 flex items-center justify-center mt-32 mb-60">
                No results were found <br /> Try using other filter options <br /> Then click on one of the cards to view the recipe
                </div>
            )}
        </div>
    )
};

export default Recipe;