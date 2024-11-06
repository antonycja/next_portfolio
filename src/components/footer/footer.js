import "./footer.css"

export default function Footer() {
    return (
        <footer>
            <p>
                <span
                    className="copyright iconify"
                    data-icon="fa-regular:copyright"
                    data-width="20"
                ></span>
                Copyright <span id="footer-year">2024</span> by AntonyCJA. All rights
                reserved
            </p>
        </footer>
    )
}