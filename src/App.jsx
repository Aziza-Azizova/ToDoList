import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import ContextProvider from "./context/Context"

function App() {
  return (
    <ContextProvider className="wrapper">
      <Navbar />
      <Notes />
    </ContextProvider>
  )
}

export default App