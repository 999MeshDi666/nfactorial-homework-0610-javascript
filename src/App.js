
import fox from "./images/fox.jpeg";
import lake from "./images/lake.jpg";
import summerMount from "./images/summermount.jpeg";
import winterMount from "./images/wintermount.jpeg";
import blueMount from "./images/bluemount.jpeg"
import smile from "./images/smiling-face.png";
import { format } from 'date-fns';

const imageList = [
  {
    id: 1, 
    image: winterMount,
    alt: "winter mountain",
    title: "hey"
  },
  {
    id: 2, 
    image: lake,
    alt: "green lake",
    title: "let`s"
  },
  {
    id: 3, 
    image: summerMount,
    alt: "summer mountain",
    title: "give"
  },
  {
    id: 4, 
    image: fox,
    alt: "red fox",
    title: "all"
  },
  {
    id: 5, 
    image: blueMount,
    alt: "blue mountain",
    title: "you can"
  }
  
]

const Header = ()=>{
  const dates = format(new Date(), 'MM.dd.yyyy')
  return(
    <header className='header'>
      <img src={smile} className='header-logo'></img>
      <p className='header-timer'>{dates}</p>
    </header>
  )
}

const Image = (prop)=>{
  const images = prop.imageList;
  const imageItems = images.map(
    (img) => <div className='image-wrapper'> 
                  <img key={img.id} src={img.image} alr={img.alt} className="image"></img>
                  <p className="image-title">{img.title}</p>
              </div>
  );
  return(
    <>{imageItems}</>
  )
}

const ImageBlock = (prop)=>{
  return(
    <main className="image-block">
      <Image imageList = {prop.imageList}></Image>
    </main>
  )
}

const Container = () =>{
  return(
    <div className="container">
      <Header></Header>
      <ImageBlock
        imageList = {imageList}>
      </ImageBlock>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Container></Container>      
    </div>
  );
}

export default App;
