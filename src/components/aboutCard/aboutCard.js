import BashCommand from "../bashCommand/bashCommand";
import "./aboutCard.css";
import IconCloud from "@/components/magicui/icon-cloud";
import Image from "next/image";
import card_title from "@/../public/cards/card_title.png";


export default function aboutCard({ data = null, isIcons = false }) {
    const skills = isIcons ? Object.keys(data.skills) : "";
    const skills_names = isIcons ? Object.values(data.skills).sort((a, b) => a.length - b.length) : "";
    return (<>
        <div className="card-container">
            <div className="title-part">
                <div className="title-img">
                    <Image src={card_title}
                        alt="title"
                    />
                </div>
                <BashCommand topText={data.title} />
            </div>
            <div className="card-content">
                {isIcons === true ? <IconCloud iconSlugs={skills} /> :
                    <p className="card-text">
                        {data.text}
                    </p>
                }
                {isIcons && <div className="tools">
                    {skills_names.map((tool, index) => (
                        <span className="tool" key={index}>{tool}</span>
                    ))}
                </div>}
            </div>
        </div>
    </>)
}