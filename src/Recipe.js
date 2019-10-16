import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {

    const caloriesRed = Math.round(calories);

    return (
        <div className={style.recipe}>
            <h1 className={style.recipeTitle}>{title}</h1>
            <img className={style.image} src={image} alt=""></img>
            <ol className={style.ingredientsList}>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.text}</li>
                ))}
            </ol>
            <h3 className={style.caloriesValue}>Calories: {caloriesRed}</h3>
        </div>
    );
}

export default Recipe;