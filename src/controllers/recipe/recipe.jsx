import axios from "axios";
import React, {useEffect, useState} from "react";
import { useParams } from "react-router";
export default function Recipe() {
    const [recipe, setRecipe] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            setRecipe(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [id])

    console.log(recipe);



    return (
        <>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt="j" />
            <p>{recipe.summary}</p>
        </>
    );
    }