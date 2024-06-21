import './navbar.css';
import Image from "next/image"
import Contents from "@/constants/data.js"

export default function Navbar() {
    return (
        <nav className="nav-container">
                <div className = "nav-logo">
                    <Image 
                        src={Contents.nav.logo} 
                        width={100}
                        height={100}
                        alt="logo" 
                        priority
                    />
                </div>

                <ul className = "nav-links">
                    {Contents.nav.navLinks.map((navLink, index) => (
                        <li className="nav-link" key={index} ><a href={"#"+navLink}>{navLink}</a></li>
                    ))}
                    <a className="nav-link" href={Contents.nav.cvLink} download>
                        <li className="download-btn">{Contents.nav.btnText}</li>
                    </a>
                </ul>

                <ul className = "social-links">
                    {Contents.nav.socials.map((social, index) => (
                        <li className="social-icon" key={index}>
                            <a href={social.link} target="_blank" >
                                <Image 
                                    src= {social.icon}
                                    alt={social.name}
                                />
                            </a>
                        </li>
                    ))}
                </ul>
        </nav>
    )
}