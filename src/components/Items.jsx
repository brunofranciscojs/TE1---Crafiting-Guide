export default function Item({item}){

    return(
        <article data-item={item.Item.toLowerCase().replace(/ /g,'-')} className={`flex gap-5 justify-start z-10`}>
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
}