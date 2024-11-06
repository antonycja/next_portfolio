import BashCommand from '../bashCommand/bashCommand'
import './headerBlock.css'
export default function HeaderBlock({ headerData }) {
    return (
        <div className="header-block">
            <BashCommand topText={headerData.top} />
            <div className='header-data'>
                <h1>{headerData.heading}</h1>
                <a href={headerData.buttonLink}>
                    <div className="hero-button">{headerData.buttonText}</div>
                </a>

            </div>

        </div>

    )

}
