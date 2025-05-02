import { recipes } from "../../mockdb/recipes"
import './recipes.css'

export const Recipes = () => {

    { console.log(recipes) }

    return (
        <>
            <h1>Recipes</h1>
            <div style={{ display: 'flex' }}>
                <input type="text" placeholder="Sök recept..." style={{ marginRight: '5px' }} />
                <button type="submit">Sök</button>
            </div>

            <nav style={{ margin: '3px', }}>
                <button className="tagButton">Förrätt</button>
                <button className="tagButton">Varmrätt</button>
                <button className="tagButton">Efterrätt</button>
                <button className="tagButton">Frukost</button>
                <button className="tagButton">Snacks</button>
                <button className="tagButton">Såser</button>
                <button className="tagButton">Soppor</button>
                <button className="tagButton">Grytor</button>
                <button className="tagButton">Sallad</button>
            </nav>

            <article style={{ marginBottom: '10px', border: 'solid, black 2px', width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '25px' }}>
                <h2>{recipes.dishes[0].name}</h2>
                <img src={recipes.dishes[0].img} alt="" style={{ width: '50%', padding: '5px', border: 'solid gray 1px' }} />
                <p style={{ textAlign: 'center', width: '80%' }}>{recipes.dishes[0].desc}</p>

                <div style={{ marginBottom: '10px' }}>
                    {recipes.dishes[0].tags.map((tag, index) => (
                        <button
                            key={index}
                            className="tagButton"
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </article>
        </>


    )
}