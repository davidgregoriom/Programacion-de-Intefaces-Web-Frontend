import { FuntionComponent} from "preact";
import { NavProps } from "../types.ts";


export default function Nav(selected:NavProps):FuntionComponent<NavProps>{

    return (
        <nav class="nav">
            <a href="/airport" class={selected === "Airport" ? "selected" : ""}>
                Airports
            </a>
            <a href="/jokes" class={selected === "Jokes" ? "selected" : ""}>
                Jokes
            </a>
            <a href="/recipe" class={selected === "Recipe" ? "selected" : ""}>
                Recipe
            </a>
        </nav>

    )

}

