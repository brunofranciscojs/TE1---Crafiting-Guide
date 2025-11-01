import GithubIcon from "./GithubIcon";

export default function SideBar({ setBg }) {
  const bgChange = (num, el) => {
      setBg(num);
      document.querySelectorAll("aside button").forEach((btn) => {
          btn.classList.remove("ativo");
      })
      
      el.classList.add("ativo");
  };

  return (
    <aside className="aside max-w-72 bg-[#40478f] rounded-xl border-2 border-black [&_.ativo]:bg-[#1e2144]! h-auto flex flex-col px-10 gap-7 py-12 min-h-126 translate-y-4 relative z-10">
      <span className='w-96 h-96 bg-blue-500/20 blur-3xl rounded-full absolute left-1/2 top-1/2 [translate:-50%_-50%] -z-1 mix-blend-plus-lighter block pointer-events-none'></span>
      
      <h2 className="text-[#df9743] text-shadow-2xs text-2xl font-medium text-center">
        Paused
      </h2>

      {[1, 2, 3, 4, 5].map((num) => (
        <button key={num} className={num === 1 ? "ativo" : ""} onClick={(e) => bgChange(e.target.innerText.match(/\d+/g).join(""), e.target)}>
          Background {num}
        </button>
      ))}

      <pre className="leading-none text-white/65 mix-blend-hard-light text-xs font-100 flex items-center justify-center gap-3 translate-y-9">
        <a href="https://github.com/brunofranciscojs/TE1-Crafiting-Guide" target="_blank" title="see on github" className="block leading-none"><GithubIcon /></a>
        <span>made with <br/>react/tailwind</span>
      </pre>

    </aside>
  );
}
