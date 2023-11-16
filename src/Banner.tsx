import img_1 from './assets/img_1.jpg'
import img_2 from './assets/img_2.jpg'
import img_3 from './assets/img_3.jpg'
import img_4 from './assets/img_4.jpg'
import img_5 from './assets/img_5.jpg'
import img_6 from './assets/img_6.jpg'
import img_7 from './assets/img_7.jpg'

const Banner = () => {
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-1">
            <div className="col-span-1 row-span-2">
                <img className="object-cover w-full h-full rounded-l" src={img_1} alt="" />
            </div>
            <div className="col-span-1 row-span-1">
                <img className="object-cover w-full h-full" src={img_2} alt="" />
            </div>
            <div className="col-span-1 row-span-1">
                <img className="object-cover w-full h-full" src={img_3} alt="" />
            </div>
            <div className="col-span-1 row-span-1">
                <img className="object-cover w-full h-full rounded-tr" src={img_4} alt="" />
            </div>
            <div className="col-span-1 row-span-1">
                <img className="object-cover w-full h-full brightness-90" src={img_5} alt="" />
            </div>
            <div className="col-span-1 row-span-1">
                <img className="object-cover w-full h-full brightness-200" src={img_6} alt="" />
            </div>
            <div className="col-span-1 row-span-1">
                <img className="object-cover w-full h-full rounded-br" src={img_7} alt="" />
            </div>
            <div className="text-center text-blue-500 underline italic col-span-4 row-span-1">
                <a target="_blank" href="https://www.primaverabb.it/it/">www.primaverabb.it</a>
            </div>
        </div>
    )
}

export default Banner
