import React from 'react'

export default function HomePage() {
  return (
    <>
      <main className="home-page">
        <div className="home-background" />
        <div className="home-overlay" />

        <header className="home-header">
         <div className="brand">
  <img
    src="/images/logo_3rdslime_nobkgd.png"
    alt="3rdeyeslime logo"
    className="header-logo"
  />
</div>
          <nav>
            <a href="#music">Music</a>
            <a href="#about">About</a>
            <a href="#visuals">Visuals</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <section className="hero-section">
          <p className="eyebrow">Official Artist Website</p>
          <h1>Welcome to the world of 3rdeyeslime</h1>
          <p className="hero-text">
            Dark sound, psychedelic visuals, and a brand built around atmosphere,
            energy, and presence.
          </p>
          <div className="hero-buttons">
            <a href="#music" className="primary-button">Latest Music</a>
            <a href="#visuals" className="secondary-button">Watch Visuals</a>
          </div>
        </section>

        <section id="music" className="content-section">
          <p className="section-label">Music</p>
          <h2>Latest Release</h2>
          <div className="card-grid">
            <article className="info-card">
              <h3>Pressure</h3>
              <p>
                Put your newest song, release copy, and streaming links here.
              </p>
            </article>
            <article className="info-card">
              <h3>Streaming</h3>
              <p>
                Spotify, Apple Music, YouTube, SoundCloud, or wherever you want fans to go.
              </p>
            </article>
          </div>
        </section>

        <section id="about" className="content-section">
          <p className="section-label">About</p>
          <h2>Artist Identity</h2>
          <div className="info-card single-card">
            <p>
              3rdeyeslime blends underground energy, surreal branding, and dark cinematic visuals into a full artist experience.
            </p>
          </div>
        </section>

        <section id="visuals" className="content-section">
          <p className="section-label">Visuals</p>
          <h2>Creative Direction</h2>
          <div className="card-grid">
            <div className="visual-card">Cover Art</div>
            <div className="visual-card">Performance Still</div>
            <div className="visual-card">Video Teaser</div>
          </div>
        </section>

        <section id="contact" className="content-section contact-section">
          <p className="section-label">Contact</p>
          <h2>Bookings and Links</h2>
          <div className="info-card single-card">
            <p>booking@3rdeyeslime.com</p>
          </div>
        </section>
      </main>

      <style jsx>{`
        .home-page {
          position: relative;
          min-height: 100vh;
          background: #040404;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }

        .home-background {
          position: fixed;
          inset: 0;
          background-image: url('/images/logo.png');
          background-repeat: no-repeat;
          background-position: center top 80px;
          background-size: min(1000px, 92vw);
          opacity: 0.22;
          filter: saturate(1.15) blur(1px);
          pointer-events: none;
        }

        .home-overlay {
          position: fixed;
          inset: 0;
          background:
            linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.88)),
            radial-gradient(circle at top, rgba(131, 255, 48, 0.08), transparent 24%),
            radial-gradient(circle at top, rgba(153, 0, 76, 0.22), transparent 34%);
          pointer-events: none;
        }

        .home-header {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: none;
          margin: 0;
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .brand {
          display: flex;
          align-items: flex-start;
          position: static;
          margin: 0;
          padding: 0;
        }

        .header-logo {
          display: block;
          width: 170px;
          height: auto;
          object-fit: contain;
          margin-left: 0;
        }

        nav {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
        }

        nav a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          font-size: 0.86rem;
        }

        nav a:hover {
          color: #b8ff61;
        }

        .hero-section {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 110px 24px 90px;
          text-align: center;
        }

        .eyebrow,
        .section-label {
          margin: 0 0 14px;
          color: #b8ff61;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        h1 {
          max-width: 860px;
          margin: 0 auto;
          font-size: clamp(2.8rem, 7vw, 5.8rem);
          line-height: 0.96;
          font-weight: 900;
          text-transform: uppercase;
          text-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
        }

        .hero-text {
          max-width: 700px;
          margin: 24px auto 0;
          color: rgba(255, 255, 255, 0.78);
          font-size: 1.08rem;
          line-height: 1.8;
        }

        .hero-buttons {
          margin-top: 34px;
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .primary-button,
        .secondary-button {
          display: inline-block;
          padding: 14px 26px;
          border-radius: 999px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.88rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .primary-button {
          background: #a3ff3f;
          color: #050505;
          box-shadow: 0 0 26px rgba(163, 255, 63, 0.18);
        }

        .secondary-button {
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.04);
        }

        .primary-button:hover,
        .secondary-button:hover {
          transform: translateY(-2px);
        }

        .content-section {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px 24px 80px;
        }

        h2 {
          margin: 0;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          text-transform: uppercase;
        }

        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 22px;
          margin-top: 28px;
        }

        .info-card,
        .visual-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
          backdrop-filter: blur(10px);
        }

        .info-card {
          padding: 26px;
        }

        .single-card {
          margin-top: 28px;
        }

        .info-card h3 {
          margin: 0 0 12px;
          font-size: 1.4rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .info-card p {
          margin: 0;
          color: rgba(255, 255, 255, 0.76);
          line-height: 1.75;
        }

        .visual-card {
          min-height: 220px;
          display: flex;
          align-items: end;
          padding: 22px;
          font-size: 1rem;
          font-weight: 800;
          text-transform: uppercase;
          background:
            linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)),
            radial-gradient(circle at top, rgba(153, 0, 76, 0.22), transparent 28%),
            #0a0a0a;
        }

        .contact-section {
          padding-bottom: 120px;
        }

        @media (max-width: 820px) {
          .home-header {
            flex-direction: column;
            gap: 18px;
          }

          .brand {
            position: static;
            margin-left: 0;
          }

          .hero-section {
            padding-top: 90px;
          }

          .home-background {
            background-position: center top 120px;
            background-size: min(760px, 110vw);
            opacity: 0.18;
          }
        }
      `}</style>
    </>
  )
}
