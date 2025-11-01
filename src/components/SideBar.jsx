export default function SideBar({ setBg }) {
  const bgChange = (num, el) => {
    document.startViewTransition(() =>{
        setBg(num);
        document.querySelectorAll("aside button").forEach((btn) => {
            btn.classList.remove("ativo");
        })
        
        el.classList.add("ativo");
    });
  };

  return (
    <aside className="aside max-w-72 bg-[#40478f] rounded-xl border-2 border-black [&_.ativo]:bg-[#1e2144]! h-auto flex flex-col px-10 gap-7 py-12 min-h-126 translate-y-4">
      <h2 className="text-[#df9743] text-shadow-2xs text-2xl font-medium text-center">
        Paused
      </h2>

      {[1, 2, 3, 4, 5].map((num) => (
        <button key={num} className={num === 1 ? "ativo" : ""} onClick={(e) => bgChange(e.target.innerText.match(/\d+/g).join(""), e.target)}>
          Background {num}
        </button>
      ))}
    </aside>
  );
}
