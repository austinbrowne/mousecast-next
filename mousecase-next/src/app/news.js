import Head from 'next/head';
import fetchNews from '../lib/fetchNews';

export default function News({ articles }) {
    return (
        <>
            <Head>
                <title>MouseCast News</title>
                <link rel="stylesheet" href="/styles.css" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>
            <header className="header">
                <div className="header__logo">
                    <img src="/phalanges_logo_plaid.png" alt="" />
                </div>
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="/episodes" className="nav__link">Episodes</a></li>
                        <li className="nav__item"><a href="/news" className="nav__link">News</a></li>
                        <li className="nav__item"><a href="/resources" className="nav__link">Resources</a></li>
                    </ul>
                </nav>
            </header>
            <main className="section">
                <h1 className="section__title">Latest News</h1>
                <div id="news-container" className="news__list">
                    {articles.map((article) => (
                        <article key={article.title} className="news-card">
                            <h2 className="news-card__title">{article.title}</h2>
                            <p className="news-card__date">{article.date}</p>
                            <p className="news-card__content">{article.content.substring(0, 200)}...</p>
                            <a href={`article.html?title=${encodeURIComponent(article.title)}`} className="news-card__link">Read More</a>
                        </article>
                    ))}
                </div>
            </main>
            <footer className="footer">
                <p className="footer__text">&copy; 2024 MouseCast. All Rights Reserved.</p>
                <p className="footer__social">
                    Follow us on 
                    <a href="#" className="footer__social-link">Twitter</a>, 
                    <a href="#" className="footer__social-link">Instagram</a>, 
                    <a href="#" className="footer__social-link">Facebook</a>.
                </p>
            </footer>
        </>
    );
}

export async function getStaticProps() {
    const articles = await fetchNews();
    return {
        props: {
            articles,
        },
    };
}