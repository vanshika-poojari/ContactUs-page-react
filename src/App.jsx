
import './App.css'
import Navigation from "./components/Navigation/Navigation/Navigation"; 
import ContactHeader from "./components/Navigation/ContactHeader/ContactHeader"; 
import ContactForm from "./components/Navigation/ContactForm/ContactForm";
function App() {
  

  return (
    <div>
      <Navigation />
      <main className = "main_container">
      <ContactHeader /> 
      <ContactForm />
      </main>
    </div>
  )
}

export default App
