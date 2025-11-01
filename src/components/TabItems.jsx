import { useState } from "react";

export default function TabItem({items}){

  const itensPorPagina = 3;
  const [pagina, setPagina] = useState(0);
  const totalPaginas = Math.ceil(items[Object.keys(items)].length / itensPorPagina);
  const inicio = pagina * itensPorPagina;
  const fim = inicio + itensPorPagina;
  const itensPagina = items[Object.keys(items)].slice(inicio, fim);

  function mudarPagina(page) {
    const filledPage = Math.max(0, Math.min(page, totalPaginas - 1));
    setPagina(filledPage);
  }

  return(
        <div className="flex flex-col h-dvh max-w-[800px] mx-auto justify-between gap-10 z-20 rounded-sm bg-[url(../src/assets/page.webp)]">

            {itensPagina.map((item,index) =>  {
                return(
                    <article data-item={item.Item.toLowerCase().replace(/ /g,'-')} className={`flex gap-5 justify-start z-10`} key={index}>
                        <figure className='w-12'>
                            <img src={item.image}  />
                        </figure>

                        <ul className='w-auto'>
                            <h3 className="text-[#40478e] font-semibold text-xl">
                                {item.Item}
                            </h3>
                            <span className="text-[#40478e] font-semibold text-xl">
                                {item.Requirements}
                            </span>
                        </ul>
                    </article>
                )
            })}
    
            {totalPaginas && (
            <aside className="flex gap-2 flex-wrap items-center justify-between px-4 pt-12 z-10">
                <button className={'bg-[#40478e] hover:bg-[#1e2144] text-[#989bdd] px-5 h-10 leading-0 rounded-sm text-4xl border-black border-2 cursor-pointer'} onClick={() => mudarPagina(pagina - 1)}>
                    <span className='drop-shadow-[0_0_1px_black,0_0_1px_black] select-none'>◂</span>
                </button>

                <b className='text-[#40478e]'>{totalPaginas}/{pagina + 1}</b>

                <button className={'bg-[#40478e] hover:bg-[#1e2144] text-[#989bdd] px-5 h-10 leading-0 rounded-sm text-4xl border-black border-2 cursor-pointer'} onClick={() => mudarPagina(pagina + 1)}>
                    <span className='drop-shadow-[0_0_1px_black,0_0_1px_black] select-none'>▸</span>
                </button>
            </aside>
            )}
        </div>
    )
}