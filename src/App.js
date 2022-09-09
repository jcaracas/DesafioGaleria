import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title='Galería de Imágenes con React'/>
      <div className='galeria'>
        <Card url='https://cdn.pixabay.com/photo/2022/08/13/09/05/lion-7383228_960_720.jpg' title='Leon' description='Carnivoro familia de los felinos'/>
        <Card url='https://cdn.pixabay.com/photo/2012/06/19/10/32/owl-50267_960_720.jpg' title='Buho' description='Ave de rapiña'/>
        <Card url='https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_960_720.jpg' title='Elefante' description='Vegetariano, 5 toneladas de peso'/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
