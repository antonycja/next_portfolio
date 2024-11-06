
import './navbar.css';
import Image from "next/image";

export default function Navbar({ Contents, active, sections }) {
    
    return (
        <nav className="nav-container">
            <div className="nav-logo link">
                <Image
                    src={Contents.nav.logo}
                    width={100}
                    height={100}
                    alt="logo"
                    priority
                />
            </div>

            <ul className="nav-links">
                {sections.map((section, index) => (
                    <a className={`nav-link ${active === section.id ? 'active' : ''}`}
                        href={"#" + section.id}
                        key={index}
                    >
                        <li className="link">{section.title}</li>
                    </a>
                ))}
                <a className="nav-link download-btn" href={Contents.nav.cvLink} download>
                    <li className="btn link">{Contents.nav.btnText}</li>
                </a>
            </ul>

            <ul className="social-links">
                {Contents.nav.socials.map((social, index) => (
                    <li className="social-icon" key={index}>
                        <a href={social.link} target="_blank" className='link' >
                            <Image
                                src={social.icon}
                                alt={social.name}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}