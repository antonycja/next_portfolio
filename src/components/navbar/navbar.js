'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/image";
import './navbar.css';

export default function Navbar({ Contents, active, sections }) {
    const [isScrolled, setIsScrolled] = useState(false);
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

        // Get the actual navbar height
        const navHeight = navRef.current?.offsetHeight || 0;

        // Calculate offset based on viewport height
        // Using a smaller percentage (e.g., 2%) for mobile
        const viewportHeight = window.innerHeight;
        const dynamicOffset = Math.min(viewportHeight * 0.01, -1); // Max 20px, scales down on smaller screens

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - (navHeight + dynamicOffset);

        // Add a check for mobile devices
        const isMobile = window.innerWidth <= 768;
        const mobileOffset = isMobile ? 10 : dynamicOffset; // Smaller offset for mobile

        window.scrollTo({
            top: offsetPosition - mobileOffset,
            behavior: 'smooth'
        });
    };

    return (
        <nav ref={navRef} className={`nav-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-logo link">
                <Image
                    src={Contents.nav.logo}
                    width={logoSize}
                    height={logoSize}
                    alt="logo"
                    priority
                    className="logo-image"
                />
            </div>

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
                        <li className="link">{section.title}</li>
                    </div>
                ))}
                <Link
                    className="nav-link download-btn"
                    href={Contents.nav.cvLink}
                    download="Antony_Maposa_CV"
                >
                    <li className="btn link">{Contents.nav.btnText}</li>
                </Link>
            </ul>

            <ul className="social-links">
                {Contents.nav.socials.map((social, index) => (
                    <li className="social-icon" key={index}>
                        <Link
                            href={social.link}
                            target="_blank"
                            className='link'
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
        </nav>
    );
}