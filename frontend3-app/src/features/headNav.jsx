import { Link } from "react-router"

export const HeadNav = () => {
    return (
        <>
            <Link to="/recipes"><button className="recipeNav">Recept</button></Link>
            <Link to="/ingredients"><button className="ingredientNav">Ingredienser</button></Link>
            <Link to="/menu"><button className="menuNav">Menyer</button></Link>
        </>
    )
}