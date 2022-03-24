import facebook from "../assets/images/Facebook Icon.svg"
import twitter from "../assets/images/Twitter Icon.svg"
import github from "../assets/images/GitHub Icon.svg"
import instagram from "../assets/images/Instagram Icon.svg"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="media-container">
                <a href="http://">
                    <img src={twitter} alt="twitter" width="25px" />
                    </a>
                <a href="http://">
                    <img src={facebook} alt="facebook" width="25px" />
                    </a>
                <a href="http://">
                    <img src={instagram} alt="instagram" width="25px" />
                    </a>
                <a href="http://">
                    <img src={github} alt="github" width="25px" />
                    </a>
                </div>
        </footer>
    )
}