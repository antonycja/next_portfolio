
import "./modal.css"
import Carousel from "../Carousel/carousel";
import ModalNav from "./modalNav";
import DetailCard from "../card/detailCard";

export default function Modal({ setState, projectsData }) {
    // const images = [Images.geri, Images.fottis]
    // const images = Object.keys(Images).map(key => Images[key]);

    const contact = () => {
        setState(false)
        alert("clicked")
    }

    return (
        <div className="modal-container" onClick={() => setState(false)}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                {/* Your scrollable content goes here */}
                <ModalNav data={projectsData} setState={setState} />
                <div className="modal-content">
                    <Carousel images={projectsData.project_images} />
                    <div className="modal-text">
                        <div className="modal-summary-section">
                            <div className="modal-summary-header">
                                <h1>{projectsData.more.summary.title}</h1>
                            </div>

                            <article className="modal-summary">
                                <p>{projectsData.more.summary.text}</p>
                            </article>
                        </div>

                        <div className="key-features-section">
                            <div className="key-feature-header">
                                <h1>{projectsData.more.all_features.title}</h1>
                            </div>
                            <div className="text-block">
                                <article className="key-feature">
                                    {projectsData.more.all_features.features.map((currFeature, index) => (
                                        <DetailCard cardInfo={currFeature} id={index} key={index} />
                                    ))}
                                </article>
                            </div>
                        </div>

                        <div className="technologies-section">
                            <div className="technology-header">
                                <h1>{projectsData.more.all_technologies.title}</h1>
                            </div>

                            <article className="technologies">
                                {projectsData.more.all_technologies.technologies.map((currTechnologies, index) => (
                                    <DetailCard cardInfo={currTechnologies} id={index} key={index}/>
                                ))}
                            </article>

                        </div>
                    </div>
                    <div className="modal-contact">
                        <a href="#Contact" onClick={contact} className="modal-contact-btn">Contact me</a>
                    </div>

                </div>

            </div>
        </div>
    );
}
