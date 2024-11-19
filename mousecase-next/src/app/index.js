import Head from 'next/head';
import Link from 'next/link';
import fetchEpisodes from '../lib/fetchEpisodes';

export default function Home({ episodes }) {
    return (
        <>
            <Head>
                <title>MouseCast Podcast</title>
                <meta name="description" content="In-depth gaming mouse reviews, the latest in gaming peripherals, and all things gaming hardware." />
                <link rel="stylesheet" href="/styles.css" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>
            <header className="header">
                <div className="header__logo">
                    <img src="/phalanges_logo_plaid.png" alt="" />
                </div>
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><Link href="/"><a className="nav__link">Home</a></Link></li>
                        <li className="nav__item"><Link href="/episodes"><a className="nav__link">Episodes</a></Link></li>
                        <li className="nav__item"><Link href="/news"><a className="nav__link">News</a></Link></li>
                        <li className="nav__item"><Link href="/resources"><a className="nav__link">Resources</a></Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="home" className="hero">
                    <div className="hero__content">
                        <h1 className="hero__title">MouseCast with Phalanges and Dazztrazak</h1>
                        <p className="hero__subtitle">The ultimate source for honest, in-depth insights into the latest gaming mice and peripherals.</p>
                        <a href="https://www.youtube.com/playlist?list=PLeZ6YstWzTKvbe0dmWj9iqWg6zDXXlw0T" className="cta-button">Listen Now</a>
                    </div>
                </section>
                <section id="videos" className="section videos">
                    <h2 className="section__title">Latest Episodes</h2>
                    <div id="videos-container" className="episodes__list">
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
                    <div className="cta-button-container" style={{ textAlign: 'center' }}>
                        <Link href="/episodes"><a className="cta-button">View All Episodes</a></Link>
                    </div>
                </section>
                <section id="news-preview" className="section news-preview">
                    <h2 className="section__title">Latest News</h2>
                    <div id="news-preview-container" className="news__list">
                        {/* Latest news articles will be dynamically loaded here */}
                    </div>
                </section>
                <section id="contact" className="section contact">
                    <h2 className="contact__title">Contact Us</h2>
                    <p className="contact__message">Have questions or want to suggest a gaming mouse for review? Reach out to us!</p>
                    <a href="mailto:phalangesco@gmail.com" className="cta-button contact__button">Email Us</a>
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