const News = () => {

    const arr = [1, 2, 3, 4, 5, 6]

    return (
        <div className="news">

            <div className="title">
                <div>
                    <h1>Latest <span>News</span></h1>
                    <p>Get updated with the latest news of new technologies and gadgets</p>
                </div>
                <div>
                    <button className="all-news-btn">All News</button>
                </div>
            </div>

            <div className="news-card-container">
                {arr.map((v, i) => (
                    <div className="news-card" key={i}>
                        <div className="card-img">

                        </div>
                        <div className="contents">
                            <h2>A Place of Silence</h2>
                            <small>June 10, 2017</small>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default News;