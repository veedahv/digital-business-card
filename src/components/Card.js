import person from "../assets/images/person.jpg";
import Mail from "../assets/images/Mail.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Footer from "./Footer";

export default function Card() {
    return (
        <div className="card">
            <img src={person} className="card-img" alt="Person" width="100%" />
            <div className="card-body">
                <div className="card-header">
                    <h1 className="name">Laura Smith</h1>
                    <p className="profession">Frontend Developer</p>
                    <small className="website">laurasmith.website</small>
                    <div className="btn-container">
                        <a href="mailto:laurasmith@gmail.com" className="btn">
                            <img src={Mail} className="" alt="Email icon" width="16" />
                            <span className="">Email</span>
                        </a>
                        <a href="https://" className="btn">
                            <img src={LinkedIn} className="" alt="Email icon" width="16" />
                            <span className="">LinkedIn</span>
                        </a>
                    </div>
                </div>
                <div className="">
                    <div className="section">
                        <h2 className="section_title">About</h2>
                        <p className="section_details">
                            I am a frontend developer with a particular interest in making things simple and automating daily tasks.
                            I try to keep up with security and best practices, and am always looking for new things to learn.
                        </p>
                    </div>
                    <div className="section">
                        <h2 className="section_title">Interests</h2>
                        <p className="section_details">
                        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. 
                        Travel geek. Pop culture ninja. Coffee fanatic.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}