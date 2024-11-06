import "./aboutPage.css";
import AboutCard from '@/components/aboutCard/aboutCard.js'


export default function aboutPage({ aboutData }) {
    return (<>
        <div className="cards-list">
            <div className="cards">
                <AboutCard className="who-am-i" data={aboutData.whoami} />
                <AboutCard className="skills" isIcons={true} data={aboutData.skills} />
            </div>
        </div>
    </>)
}