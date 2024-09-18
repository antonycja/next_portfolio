import './headerBlock.css'
export default function HeaderBlock({ headerData }) {
    return (
        <div className="header-block">
            <div className='top-part'>
                <p className='name-part'>
                    <span className='username'>anton@cja</span>
                    <span className='colon'>:</span>
                    <span className='dir'>~</span>
                    <span>$ </span>
                </p>
                <p className='typed-part'>
                    <span className='bash-command type'>{headerData.top}</span>
                    <span className='bash-cursor'>_</span>
                </p>
            </div>
            <div className='header-data'>
                <h1>{headerData.heading}</h1>
                <div className="hero-button">{headerData.buttonText}</div>
            </div>

        </div>

    )

}
