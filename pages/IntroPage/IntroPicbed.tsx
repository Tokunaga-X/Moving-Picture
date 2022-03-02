import Image from "next/image"
import type { NextPage } from "next"
import github from "../../public/GitHub.png"

const introPicbed: NextPage = function () {
    return (
        <div className="introPicbed">
            <h1>Image-host</h1>
            <a href="http://localhost:5000">
                <button>Log in</button>
            </a>
            <i>
                <a href="https://github.com/Tokunaga-X/Moving-Picture">
                    <Image src={github} alt="github" />
                </a>
            </i>
        </div>
    )
}

export default introPicbed
