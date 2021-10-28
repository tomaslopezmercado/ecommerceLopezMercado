import NavBar from "./components/navBar"
import ItemCount from "./components/ItemCount"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
    return(
        <>
            <NavBar/>
            <ItemListContainer nombre="Tomás"/>
            <ItemCount/>
        </>
    )
}

export default App