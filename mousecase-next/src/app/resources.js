import Head from 'next/head';

const usefulLinks = [
    {
        title: "RJN Top Mouse List",
        description: "Reasonably good possibly helpful suggestions.",
        link: "https://www.rocketjumpninja.com/top-mice"
    },
    {
        title: "r/MouseReview",
        description: "Stay updated with the latest news in gaming peripherals.",
        link: "https://www.reddit.com/r/MouseReview/"
    },
    {
        title: "Viscose Mousepad Friction Spreadsheet",
        description: "Spreadsheet created by top aimer Viscose.",
        link: "https://docs.google.com/spreadsheets/d/1Ix0RN4WDgRIn9uSUMy2smG_vWR3FTnZHgNpumChfHM0/edit?gid=0#gid=0"
    },
    {
        title: "Stubby Mouse Feet Spreadsheet",
        description: "Spreadsheet created by YouTuber StubbyFPS.",
        link: "https://docs.google.com/spreadsheets/d/10Bv6R09IX4EtvxTfN7KmDgNp8epTmgd6v5lvF0d9Jl0/edit?gid=0#gid=0"
    }
];

const usefulFiles = [
    {
        title: "Battery Swap Chart",
        description: "All of the info you need to know about battery swapping.",
        link: "files/gaming-mouse-comparison-chart.pdf"
    },
    {
        title: "Phalanges Mousefeet Guide",
        description: "A guide that will help you find the best mouse feet for your mouse.",
        link: "files/peripheral-setup-guide.pdf"
    }
];

export default function Resources() {
    return (
        <>
            <Head>
                <title>Resources - MouseCast Podcast</title>
                <meta name="description" content="Useful links and files for gaming enthusiasts." />
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
                <section id="useful-links" className="section useful-links">
                    <h2 className="section__title">Useful Links</h2>
                    <div className="useful-links__list">
                        {usefulLinks.map((link) => (
                            <article key={link.title} className="useful-link-card">
                                <h3 className="useful-link-card__title">{link.title}</h3>
                                <p className="useful-link-card__description">{link.description}</p>
                                <a href={link.link} className="useful-link-card__link">Visit Link</a>
                            </article>
                        ))}
                    </div>
                </section>
                <section id="useful-files" className="section useful-files">
                    <h2 className="section__title">Useful Files</h2>
                    <div className="useful-files__list">
                        {usefulFiles.map((file) => (
                            <article key={file.title} className="useful-file-card">
                                <h3 className="useful-file-card__title">{file.title}</h3>
                                <p className="useful-file-card__description">{file.description}</p>
                                <a href={file.link} className="useful-file-card__link">Download File</a>
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