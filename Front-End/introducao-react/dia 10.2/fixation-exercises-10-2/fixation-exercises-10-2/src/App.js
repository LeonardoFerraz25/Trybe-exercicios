import './App.css';
import Image from './image';
import Album from './Album';
import {album01 , album02} from './Infoalbuns'
import UserProfile from './UserProfile';
import { joao , amelia } from './UserInfo'


function App() {
  return (
    <div className="App">
      <div className='image-wrapper'>
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText=" Cute cat staring" />
      </div>
      <main>
        <Album album={ album01 } />
        <Album album={ album02 } />
      </main>
      <section>
        <UserProfile user={joao} />
        <UserProfile user={amelia} />
      </section>
    </div>
  );
}

export default App;
