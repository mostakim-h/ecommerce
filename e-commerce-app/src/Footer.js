const Footer = () => {
    return (
        <div className="footer">
            <div className="get-update-container">
                <div className="title-left">
                    <h1>Our <span>Newsletter</span></h1>
                    <p>Get updates subscribe our weekly newslatter</p>
                </div>
                <div className="button-subscribe">
                    <input autoComplete="none" placeholder="Enter your Email..." type="email" />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className="footer-contents">
                <div className="footer-items">
                    <img width={250} src="https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/logo-footer.png" alt="" />
                    <p>Our Address:</p>
                    <p>Ward 66 Mahmudnagar, Demre </p>
                    <p>Dhaka, Bangladesh</p>
                    <p>Free Call:</p>
                    <p>+8801317839105</p>
                </div>

                <div className="footer-items">
                    <h2>Useful Links</h2>
                    <div>
                        <li>Our Shop</li>
                        <li>Service</li>
                        <li>News</li>
                        <li>Contact</li>
                    </div>
                </div>

                <div className="footer-items">
                    <h2>Support</h2>
                    <div>
                        <li>FAQs</li>
                        <li>Refund</li>
                        <li>Privacy Policy</li>
                        <li>Report</li>
                        <li>DMCA</li>
                    </div>
                </div>

                <div className="footer-items">
                    <h2>Information</h2>
                    <div>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Pricing Plan</li>
                        <li>Vendor Shop</li>
                        <li>Affiliate</li>
                        <li>Stores</li>
                    </div>
                </div>

                <div className="footer-items">
                    <h2>Services</h2>
                    <div>
                        <li>Products</li>
                        <li>Payment</li>
                        <li>Discount</li>
                        <li>Promotional</li>
                        <li>Gifts</li>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Footer;