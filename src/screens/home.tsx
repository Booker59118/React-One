import { About } from "../components/about"
import { YoutubeVideos } from "../components/youtubeVideos"
import { SocialLinks } from "../components/SocialLinks"

export const Home = () => {
    return (
        <main>

            <About/>
            <YoutubeVideos id="ygW4_6WQ5C4"/><br />
            <YoutubeVideos id="BRzGnjfo7Jg"/>
            <SocialLinks/>
            
        </main> 
    )
}