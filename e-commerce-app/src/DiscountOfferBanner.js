const DiscountOfferBanner = () => {
    return (
        <div className="discount-offer-banner header-banner">
            <div className="banner" style={{
                backgroundImage: "url(https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/bg4-1.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}>
                <div className="text-left">
                    <p className="deal-text">DEAL OF THE DAY</p>
                    <h1>Get<span> Virtual Reality </span>with 30% off.</h1>
                    <p>iPad is a line of tablet computers designed, developed and marketed by Apple Inc., which run the iOS and iPad OS mobile operating systems.</p>
                    <div className="button">
                        <button className="btn1">Get 30% Off Now</button>
                    </div>
                </div>
                <div className="img-right">
                    <img width={580} style={{
                        marginRight: 20,
                        filter: "contrast(1.3)"
                    }} src="https://xtratheme.com/elementor/gadgets/wp-content/uploads/sites/108/2023/05/img1-1.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default DiscountOfferBanner;