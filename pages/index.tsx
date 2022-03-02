import "../styles/Home.module.scss"

import IntroMovie from "./IntroPage/IntroMovie"
import IntroPicbed from "./IntroPage/IntroPicbed"
import type { NextPage } from "next"

const Home: NextPage = () => {
    return (
        <div className={"introContainer"}>
            <div className={"mymovieContainer"}>
                <IntroMovie />
            </div>
            <div className={"picbedContainer"}>
                <IntroPicbed />
            </div>
            {/* <div className={"animationContainer"}>
                <Anima />
            </div> */}
        </div>
    )
}

export default Home
