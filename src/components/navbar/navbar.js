'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/image";
import './navbar.css';

const Navbar = ({ Contents, active, sections }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const logoSize = isScrolled ? 60 : 80;

    const getSocialIconSize = (iconName) => {
        if (iconName.toLowerCase().includes('linkedin')) {
            return isScrolled ? 45 : 55;
        }
        return isScrolled ? 25 : 30;
    };

    const handleSectionClick = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (!element) return;

        setIsHamburgerOpen(false);

        const navHeight = navRef.current?.offsetHeight || 0;
        const offsetPosition = element.offsetTop - navHeight;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    };

    const handleHamburgerClick = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <>
            <nav ref={navRef} className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-logo">
                    <Image
                        src={Contents.nav.logo}
                        width={logoSize}
                        height={logoSize}
                        alt="logo"
                        priority
                        className="logo-image"
                    />
                </div>

                <ul className="nav-links desktop-nav">
                    {sections.map((section, index) => (
                        <div
                            className={`nav-link ${active === section.id ? 'active' : ''}`}
                            onClick={(e) => handleSectionClick(e, section.id)}
                            key={index}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSectionClick(e, section.id);
                                }
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <li>{section.title}</li>
                        </div>
                    ))}
                    <a
                        className="nav-link download-btn"
                        href={Contents.nav.cvLink}
                        download="Antony_Maposa_CV"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <li className="btn">{Contents.nav.btnText}</li>
                    </a>
                </ul>
                <a
                    className="nav-link download-btn mobile-download"
                    href={Contents.nav.cvLink}
                    download="Antony_Maposa_CV"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <li className="btn">{Contents.nav.btnText}</li>
                </a>
                <div className="right-section">
                    <ul className="social-links desktop-social">
                        {Contents.nav.socials.map((social, index) => (
                            <li className="social-icon" key={index}>
                                <Link
                                    href={social.link}
                                    target="_blank"
                                    className="link"
                                >
                                    <Image
                                        src={social.icon}
                                        alt={social.name}
                                        width={getSocialIconSize(social.name)}
                                        height={getSocialIconSize(social.name)}
                                        className={`social-icon-image ${social.name.toLowerCase().includes('linkedin') ? 'linkedin-icon' : ''}`}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={`hamburger-btn ${isHamburgerOpen ? 'open' : ''}`}
                        onClick={handleHamburgerClick}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line line-1"></span>
                        <span className="hamburger-line line-2"></span>
                        <span className="hamburger-line line-3"></span>
                    </button>
                </div>

            </nav>


            {/* Mobile Menu */}
            <div className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    {sections.map((section, index) => (
                        <div
                            className={`nav-link ${active === section.id ? 'active' : ''}`}
                            onClick={(e) => handleSectionClick(e, section.id)}
                            key={index}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSectionClick(e, section.id);
                                }
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <li>{section.title}</li>
                        </div>
                    ))}

                </ul>

                <ul className="social-links">
                    {Contents.nav.socials.map((social, index) => (
                        <li className="social-icon" key={index}>
                            <Link
                                href={social.link}
                                target="_blank"
                                className="link"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.name}
                                    width={getSocialIconSize(social.name)}
                                    height={getSocialIconSize(social.name)}
                                    className={`social-icon-image ${social.name.toLowerCase().includes('linkedin') ? 'linkedin-icon' : ''}`}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;