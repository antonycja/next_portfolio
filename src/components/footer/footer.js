import "./footer.css"

export default function Footer( {data}) {
    return (
        <footer>
            <p>
                <span
                    className="copyright iconify"
                    data-icon="fa-regular:copyright"
                    data-width="20"
                ></span>
                {data}
            </p>
        </footer>
    )
}