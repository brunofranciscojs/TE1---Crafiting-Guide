import { useState, useRef } from 'react'
import { items } from './items.json'
import { weapons } from './weapons.json';
import Items from './components/Items'
import './App.css'
import SideBar from './components/SideBar';

function App() {
  const [pagina, setPagina] = useState(0);
  const itensPorPagina = 3;
  const [tab ,setTab] = useState('Tools');
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  const [bg,setBg] = useState(0)

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
    <main className='h-dvh w-screen bg-cover bg-center flex flex-row justify-center items-center'>

      <code className={`w-screen h-full absolute left-1/2 top-1/2 [translate:-50%_-50%] -z-1 pointer-none brightness-50`} style={{background:`url(./src/assets/bg-${bg}.avif)`}}></code>

      <SideBar setBg={setBg}/>

      <ol className='[&_li]:drop-shadow [&_li]:drop-shadow-black flex flex-col [&_li]:max-h-10 [&_li]:text-[6rem] text-[#8d8286] z-999 gap-0 p-0 [&_li]:leading-none [&_li]:[clip-path:polygon(0_0,100%_0,100%_150%,0_150%)] -translate-y-4 -mx-7 [&_li]:indent-1'>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
        <li>o</li>
      </ol>

      <div className='h-dvh bg-cover bg-center flex flex-col justify-center items-center w-full max-w-[700px]!'>

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
              <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-center gap-10 min-h-109 rounded-sm bg-[url(../src/assets/page.webp)]" data-tab={'Journal'}>
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
          </div>}
  
          {tab === 'Wearables' && <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-center gap-10 min-h-109 rounded-sm bg-[url(../src/assets/page.webp)]" data-tab={'Favours'}></div>}
          {tab === 'C. Devices' && <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-center gap-10 min-h-109 rounded-sm bg-[url(../src/assets/page.webp)]" data-tab={'Favours'}></div>}
          {tab === 'Miscellaneous' && <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-center gap-10 min-h-109 rounded-sm bg-[url(../src/assets/page.webp)]" data-tab={'Favours'}></div>}
      
          {tab === 'Tools' &&
            <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-between gap-10 active z-20 rounded-sm bg-[url(../src/assets/page.webp)]" data-tab={'Tools'}>
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
      </div>
      <img src={`./src/assets/${!play ? 'off.webp' : 'on.webp'}`} className='absolute top-12 right-12 w-15 h-15 cursor-pointer drop-shadow-[0_0_1px_white] bg-white/10 rounded-full p-3 backdrop-blur-md' onClick={playOST}/>
      {play && <audio src="./src/assets/ost.mp3" autoPlay className='absolute opacity-0' ref={audioRef}></audio>}
    </main>
  );
}

export default App;
