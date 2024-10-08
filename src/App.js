import "./styles/App.css";
import Title from "./components/Text/Title/titleComponent.tsx";
import Subtitle from "./components/Text/Subtitle/subtitleComponent.tsx";
import Book from "./components/Book/bookComponent.tsx";

function App() {
  return (
    <div className="App-header">
      <Title text="Books" />
      <Subtitle text="6 libros disponibles" />
      <Book
        link="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg"
        title="El Señor de los Anillos"
      />
    </div>
  );
}

export default App;
