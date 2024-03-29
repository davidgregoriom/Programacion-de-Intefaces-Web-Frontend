import { FunctionComponent } from "preact";
import { RecipeAfter,RecipeBefore } from "../types.ts";

type RecipeBeforeProps = {
    recipe: RecipeBefore[];
};
type RecipeAfterProps = {
    recipe: RecipeAfter[];
};


export default function RecipeComponent(recipe:RecipeAfterProps):FunctionComponent<RecipeAfterProps>{
    console.log("Rendering component with data:", recipe);
    return(
        <div>
            <h1>Recipe list</h1>
            <ul>
                {
                    recipe.recipe && recipe.recipe.map((recipe)=>(
                        <div key={recipe.id}>
                            <h2>Title:{recipe.title}</h2>
                            <li>Ingredients: {recipe.ingredients.map((ingredient)=>{
                                <div>
                                    <li>{ingredient}</li>
                                </div>
                            })}</li>
                            <li>Servings: {recipe.servings}</li>
                            <li>Instructions: {recipe.instructions.map((instruction)=>{
                                <div>
                                    <li>{instruction}</li>
                                </div>
                            })}</li>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

