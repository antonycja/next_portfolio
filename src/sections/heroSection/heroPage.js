import HeaderBlock from "@/components/headerBlock/headerBlock";
import "./heroPage.css"
export default function heroPage({ heroData }) {
    return (<>
        <div className="hero-shape"></div>
        <header>
            <div className="slide-right">
                <HeaderBlock headerData={heroData.name} />
            </div>
            <div className="slide-left">
                <HeaderBlock headerData={heroData.role} />
            </div>
        </header>

    </>
    )
};
