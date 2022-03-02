import Image from "next/image"
import type { NextPage } from "next"
import douban from "../../public/douban.png"

const IntroMovie: NextPage = function () {
    return (
        <div className="introMymovie">
            <h1>My-movie-log | xyc</h1>
            <a href="/page">
                <button>Learn more</button>
            </a>
            <i>
                <a href="https://www.douban.com/people/68930030/">
                    <Image src={douban} alt="douban" />
                </a>
            </i>
        </div>
    )
}

export default IntroMovie
