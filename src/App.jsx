import { useState, useRef } from 'react'
import { items } from './items.json'
import { weapons } from './weapons.json';
import Items from './components/Items'
import './App.css'


function App() {
  const [pagina, setPagina] = useState(0);
  const itensPorPagina = 3;
  const [tab ,setTab] = useState('Tools');
  const [play, setPlay] = useState(false);
  const audioRef = useRef();

  const totalPaginas = Math.ceil(items.length / itensPorPagina);

  const inicio = pagina * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const itensPagina = items.slice(inicio, fim);
  const weaponsPagina = weapons.slice(inicio, fim)

  const changeTab = (tab,tabName) =>{
    setTab(tabName)
    document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'))
    tab.classList.add('active');
    setPagina(0)
  }
  function mudarPagina(page) {
    const filledPage = Math.max(0, Math.min(page, totalPaginas - 1));
    setPagina(filledPage);
  }
  const bgNumber = (num) =>{
    return Math.floor(Math.random()* num)
  }
  const playOST = () =>{
    setPlay(prvPlay => !prvPlay);
    setTimeout(()=>{
      if(audioRef.current){
        audioRef.current.volume = .5
      }
      console.log(audioRef.current)
    },100);
  }
  return (
    <main className='h-dvh w-screen bg-cover bg-center flex flex-col justify-center items-center'>
      <div className={`w-screen h-full absolute left-1/2 top-1/2 [translate:-50%_-50%] -z-1 pointer-none brightness-50`} style={{background:`url(./src/assets/bg-${bgNumber(5)}.avif)`}}></div>
      <nav className='realtive z-40'>
        <ul className='flex justify-center'>
          <button  className='' onClick={(e)=> changeTab(e.target, e.target.innerText.trim())}>Weapons</button>
          {/* <button  className='' onClick={(e)=> changeTab(e.target,e.target.innerText.trim())}>Wearables</button>
          <button  className='' onClick={(e)=> changeTab(e.target,e.target.innerText.trim())}>C. Devices</button>
          <button  className='' onClick={(e)=> changeTab(e.target,e.target.innerText.trim())}>Miscellaneous</button> */}
          <button  className='active' onClick={(e)=> changeTab(e.target, e.target.innerText.trim())}>Tools</button>
        </ul>
      </nav>
    
      <section className='relative w-full h-auto min-h-125 flex justify-center'>
        <span className='w-96 h-96 bg-yellow-200/20 blur-3xl rounded-full absolute left-1/2 top-1/2 [translate:-50%_-50%] z-99 mix-blend-plus-lighter block'></span>

        {tab === 'Weapons' && 
            <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-center gap-10 min-h-109 rounded-sm" data-tab={'Journal'}>
              {weaponsPagina.map((item, index) =>  <Items item={item} key={index} /> )}
      
              {totalPaginas && (
                <aside className="flex gap-2 flex-wrap items-center justify-between px-4 pt-12 z-10">
                      
                      <button className={'bg-[#40478e] text-[#989bdd] px-5 h-10 leading-0 rounded-sm text-4xl border-black border-2 cursor-pointer'} onClick={() => mudarPagina(pagina - 1)}>
                        <span className='drop-shadow-[0_0_1px_black,0_0_1px_black] select-none'>◂</span>
                      </button>
        
                      <b className='text-[#40478e]'>{totalPaginas}/{pagina + 1}</b>
        
                      <button className={'bg-[#40478e] text-[#989bdd] px-5 h-10 leading-0 rounded-sm text-4xl border-black border-2 cursor-pointer'} onClick={() => mudarPagina(pagina + 1)}>
                        <span className='drop-shadow-[0_0_1px_black,0_0_1px_black] select-none'>▸</span>
                      </button>
                </aside>
              )}
            </div>
          }
        {tab === 'Wearables' && <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-center gap-10 min-h-109 rounded-sm" data-tab={'Favours'}></div>}
        {tab === 'C. Devices' && <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-center gap-10 min-h-109 rounded-sm" data-tab={'Favours'}></div>}
        {tab === 'Miscellaneous' && <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-center gap-10 min-h-109 rounded-sm" data-tab={'Favours'}></div>}
    
        {tab === 'Tools' &&
          <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-between gap-10 active z-20 rounded-sm" data-tab={'Tools'}>
            {itensPagina.map((item, index) =>  <Items item={item} key={index} /> )}
      
            {totalPaginas && (
              <aside className="flex gap-2 flex-wrap items-center justify-between px-4 pt-12 z-10">
                    
                    <button className={'bg-[#40478e] text-[#989bdd] px-5 h-10 leading-0 rounded-sm text-4xl border-black border-2 cursor-pointer'} onClick={() => mudarPagina(pagina - 1)}>
                      <span className='drop-shadow-[0_0_1px_black,0_0_1px_black] select-none'>◂</span>
                    </button>
      
                    <b className='text-[#40478e]'>{totalPaginas}/{pagina + 1}</b>
      
                    <button className={'bg-[#40478e] text-[#989bdd] px-5 h-10 leading-0 rounded-sm text-4xl border-black border-2 cursor-pointer'} onClick={() => mudarPagina(pagina + 1)}>
                      <span className='drop-shadow-[0_0_1px_black,0_0_1px_black] select-none'>▸</span>
                    </button>
              </aside>
            )}
        </div>}
      </section>
      <img src={`./src/assets/${!play ? 'off.webp' : 'on.webp'}`} className='absolute top-12 right-12 w-15 h-15 cursor-pointer drop-shadow-[0_0_1px_white] bg-white/10 rounded-full p-3 backdrop-blur-md' onClick={playOST}/>
      {play && <audio src="./src/assets/ost.mp3" autoPlay className='absolute opacity-0' ref={audioRef}></audio>}
    </main>
  );
}

export default App;
