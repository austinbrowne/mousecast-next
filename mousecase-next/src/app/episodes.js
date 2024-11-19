import Head from 'next/head';
import fetchEpisodes from '../lib/fetchEpisodes';

export default function Episodes({ episodes }) {
    return (
        <>
            <Head>
                <title>Episodes - MouseCast Podcast</title>
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
            <main>
                <section id="episodes" className="section episodes">
                    <h2 className="section__title">All Episodes</h2>
                    <div id="episodes-container" className="episodes__list">
                        {episodes.map((episode) => (
                            <article key={episode.videoId} className="episode-card">
                                <div className="episode-card__thumbnail-container">
                                    <iframe className="episode-card__thumbnail" width="560" height="315" src={`https://www.youtube.com/embed/${episode.videoId}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                                <div className="episode-card__details">
                                    <h3 className="episode-card__title">{episode.title}</h3>
                                    <p className="episode-card__date">{new Date(episode.publishedAt).toLocaleDateString()}</p>
                                </div>
                                <a href={episode.url} className="episode-card__link">Listen to this episode</a>
                            </article>
                        ))}
                    </div>
                </section>
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
    const episodes = await fetchEpisodes();
    return {
        props: {
            episodes,
        },
    };
}