// Dynamically import the LottieAnimation component, disabling SSR
import dynamic from "next/dynamic";
import { Images } from "@/constants/Images";
import Image from "next/image";
import "./contactPage.css"

// Dynamically import LottieAnimation, ensuring it's only rendered on the client-side
const LottieAnimation = dynamic(() => import("@/components/envelope/envelope"));

export default function ContactPage() {
    return (
        <div className="contact">
            <Image src={Images.top} className="top-img" alt="Top image" />
            <Image src={Images.bottom} className="bottom-img" alt="Bottom image" />
            <main className="contact-me">
                <div className="contact-box">
                        <div className="image-side">
                            <Image src={Images.contact_bg} className="c-bg" alt="Contact Background" />
                            <div className="env">
                                <LottieAnimation />
                            </div>
                        </div>
                    {/* 
                        <div className="contact-form">
                            <div className="heading">
                                <h1>Like what you see?</h1>
                                <h3>Let&apos;s talk.</h3>

                            </div>
                            <form action="https://formspree.io/f/mgedyljr" method="POST">
                                <div className="name-email seq">
                                    <div className="input-grp">
                                        <input name="Full Name" type="text" id="name" required />
                                        <label htmlFor="name">Full Name</label>
                                    </div>
                                    <div className="input-grp">
                                        <input name="Email" type="email" id="email" required />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>

                                <div className="input-grp msg seq">
                                    <textarea
                                        name="Message"
                                        id="message"
                                        rows="4"
                                        required
                                    ></textarea>
                                    <label htmlFor="message">Message...</label>
                                </div>
                                <div className="submit-btn seq">
                                    <p>
                                        <button className="send" type="submit">Submit</button> or
                                        <span>Email me: </span>
                                        <a href="mailto:cjamaposa@gmail.com">cjamaposa@gmail.com</a>
                                    </p>


                                </div>
                            </form>
                        </div>
                */}
                </div>
            </main>
        </div>
    );
}
