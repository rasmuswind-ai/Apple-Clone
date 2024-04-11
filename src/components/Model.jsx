import { useGSAP } from "@gsap/react"
import gsap from "gsap/gsap-core"
import ModelView from "./ModelView"
import { useState } from "react"
import { yellowImg } from "../utils"

const Model = () => {
    const [size, setsize] = useState('small');
    const [Model, setModel] = useState({
        title: 'iPhone 15 pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B)', '#6F6C64'],
        img: yellowImg
    })

    // camera control for model view

    useGSAP(() => {
        gsap.to('#heading', { y: 0, opacity: 1 })
    }, [])

    return (
    <section className='common-padding'>
        <div className='screen-max-width'>
            <h1 id='heading' className='section-heading'>
                Take a closer look.
            </h1>
            
            <div className="flex flex-col item-center mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model