// Importation des différentes pages de l'application
import Header from "./components/header";
import Footer from "./components/footer";
import Router from "./router";

function App() {
  // Récupérer le token en localStorage
  // Puis on fais appel à POST Profile

  return (
    <div className="app">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
