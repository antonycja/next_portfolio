import "./bashCommand.css"

export default function BashCommand({ topText }) {
    return (<>
        <div className='top-part'>
            <p className='name-part'>
                <span className='username'>anton@cja</span>
                <span className='colon'>:</span>
                <span className='dir'>~</span>
                <span>$ </span>
            </p>
            <p className='typed-part'>
                <span className='bash-command type'>{topText}</span>
                <span className='bash-cursor'>_</span>
            </p>
        </div>
    </>)
}