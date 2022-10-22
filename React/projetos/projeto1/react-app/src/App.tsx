import Header from "./components/Header";
import Photo from "./components/photo";

const App = () =>{
  let name:string = "Gabriel de Oliveira Silva";

  let link: string = "https://Github.com/GabrielOlisil"
  return (
    <div>
      <Header  title='Texto de exemplo' />
      <Header  title='Segundo Texto de exemplo' />
      <Header title='' />


      Meu nome é {name} <br/>

      
      <a href={link} target='_blank' >GitHub</a>

      <Photo legend="Gato do Git">
        <img src="https://avatars.githubusercontent.com/u/101849773?v=4" alt="" />
      </Photo>

    </div>
  );
}

export default App;