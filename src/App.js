import React from "react";

const App = () => {
    const [articles, setArticles] = React.useState([]);

    React.useEffect(e => {
        fetch("https://newsapi.org/v2/top-headlines?apiKey=2e82c17b27d04b80b4ec9071a0abfb92&country=US")
        .then(response => response.json()).then(data => setArticles(data.articles));
    }, []);

    return (
        <div className="d-flex flex-wrap">
            {articles.map(article => (
                <News article={article} />
            ))}
        </div>
    );
}

const News = props => {
	const article = props.article;
    return (
        <div className="col-lg-3 bg-light rounded d-flex flex-column m-1 p-1">
            <img src={article.urlToImage} className="w-100" />
            <h5>{article.title}</h5>
            <p>{article.description}</p>
            <small>{article.author}</small>
            <small>{article.publishedAt}</small>
        </div>
    );
}

export default App
