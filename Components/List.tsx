import RecipeModal from './RecipeModal'

// App calls this function that Calls an unlisted Representation of the recipes
function List(info: any) {
    const input = info.input

    return (
        <ul>
            {input.results.map((item : any, i: any) => (
                <li key= {i} id = "linkbutton">
                    <RecipeModal
                    input = {item}
                    />
                </li>
            ))}
        </ul>
    )
}

export default List