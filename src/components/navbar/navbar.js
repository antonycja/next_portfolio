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
                        <a className="nav-link" href={"#"+navLink} key={index}>
                            <li className="link">{navLink}</li>
                        </a>
                    ))}
                    <a className="nav-link download-btn" href={Contents.nav.cvLink} download>
                        <li className="btn">{Contents.nav.btnText}</li>
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