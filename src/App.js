import nav_bar from './assets/nav_bar.png';
import Back from './assets/Back.png';
import search from './assets/search.png';
import DramasList from '../src/DramasList';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');
  const [searchTextOpen, setSearchTextOpen] = useState(false);
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  }
  return (
    <div>
      <div className='w-full flex  top fixed bg-cover h-20 text-[25px] ' style={{ backgroundImage: `url(${nav_bar})` }} >
        <div className='flex flex-row w-full justify-between '>
          <img className='p-5 h-[60px]' src={Back} alt="Back" />
          <h1 className="text-textcolor p-3 " style={{ fontFamily: 'Titillium Web' }}>Romantic Comedy</h1>
          {searchTextOpen && <div className='absolute w-[88%]'><input className='m-[15px]' type="text" value={searchText} placeholder='search' onChange={handleSearch}></input></div>}
          <img className='p-5 h-[60px] float:right justify-end' src={search} alt="search" onClick={() => setSearchTextOpen(!searchTextOpen)} />
        </div>

      </div>
      <div className='h-80 '>
        <DramasList searchText={searchText} />

      </div>


    </div>
  );
}

export default App;
