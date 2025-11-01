import { useState, useRef } from 'react'
import Tools from './items.json'
import Weapons from './weapons.json';
import SideBar from './components/SideBar';
import TabItem from './components/TabItems';

function App() {
  const [activeTab, setActiveTab] = useState('Tools');
  const [play, setPlay] = useState(false);
  const audioRef = useRef();
  const [bg,setBg] = useState(0)
  let Miscellaneous, C_Devices = ''

  const changeTab = (tab,tbNum) =>{
      setActiveTab(tbNum)
      document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'))
      tab.classList.add('active');
  }

  const playOST = () =>{
    setPlay(prvPlay => !prvPlay);
    setTimeout(()=>{
      if(audioRef.current){
        audioRef.current.volume = .5
      }
    },100);
  }

  const tabs = { Tools, Weapons, Miscellaneous, C_Devices }

  return (
    <main className='h-dvh w-screen bg-cover bg-center flex flex-row justify-center items-center'>

      <code className={`w-screen h-full absolute left-1/2 top-1/2 [translate:-50%_-50%] z-1 pointer-none brightness-50 bg-cover! bg-no-repeat!`} style={{background:`url(./src/assets/bg-${bg}.avif)`}}></code>

      <SideBar setBg={setBg}/>

      <ol className=' flex flex-col z-999 gap-0 p-0 translate-y-1 -mx-7 saturate-200'>
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
            <button data-num={1} onClick={(e)=> changeTab(e.target,e.target.innerText.trim())}>Weapons</button>
            <button disabled data-num={2} onClick={(e)=> changeTab(e.target,e.target.innerText.trim().replace('.','_ '))}>C. Devices</button>
            <button disabled data-num={3} onClick={(e)=> changeTab(e.target,e.target.innerText.trim())}>Miscellaneous</button> 
            <button data-num={0} className='active' onClick={(e)=> changeTab(e.target, e.target.innerText.trim())}>Tools</button>
          </ul>
        </nav>
      
        <section className='relative w-full h-auto min-h-125 flex justify-center '>
          <span className='w-96 h-96 bg-yellow-200 opacity-15! blur-3xl rounded-full absolute left-1/2 top-1/2 [translate:-50%_-50%] z-99 mix-blend-plus-lighter pointer-events-none [view-transition-name:bright]'></span>
          <TabItem items={tabs[activeTab]}/> 

        </section>
      </div>
      <img src={`./src/assets/${!play ? 'off.webp' : 'on.webp'}`} className='absolute top-12 right-12 w-15 h-15 cursor-pointer drop-shadow-[0_0_1px_white] bg-white/10 rounded-full p-3 backdrop-blur-md z-30' onClick={playOST}/>
      {play && <audio src="./src/assets/ost.mp3" autoPlay className='absolute opacity-0' ref={audioRef}></audio>}
    </main>
  );
}

export default App;
