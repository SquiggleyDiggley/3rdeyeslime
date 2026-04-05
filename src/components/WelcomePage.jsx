import React from 'react'

export default function WelcomePage() {
  return (
    <>
      <main className="welcome-page">
        <div className="background-image" />
        <div className="overlay" />

        <section className="welcome-content">
          <img
            src="/images/logo_3rdslime_nobkgd.png"
            alt="3rdeyeslime logo"
            className="welcome-logo"
          />

          <p className="eyebrow">Official Artist Website</p>

          <h1>Enter the world of 3rdeyeslime</h1>

          <p className="tagline">Dark. Psychedelic. Underground.</p>

          <a href="/home" className="enter-button">
            Enter Site
          </a>
        </section>
      </main>

      <style jsx>{`
        .welcome-page {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #050505;
          color: #ffffff;
          font-family: Arial, Helvetica, sans-serif;
        }

        .background-image {
          position: absolute;
          inset: 0;
          background-image: url('/images/logo.png');
          background-size: min(1300px, 96vw);
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.14;
          filter: blur(2px) saturate(1.05);
          transform: scale(1.04);
        }

        .overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.88)),
            radial-gradient(circle at top, rgba(168, 12, 59, 0.22), transparent 30%),
            radial-gradient(circle at center, rgba(120, 255, 0, 0.06), transparent 30%);
        }

        .welcome-content {
          position: relative;
          z-index: 2;
          width: min(90%, 760px);
          text-align: center;
          padding: 40px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .logo-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 18px;
        }

        .logo {
          display: block;
          width: min(440px, 72vw);
          max-width: 100%;
          max-height: 220px;
          object-fit: contain;
          object-position: center;
          margin: 0 auto;
          filter: drop-shadow(0 0 28px rgba(132, 255, 0, 0.18));
        }

        .welcome-logo {
          display: block;
          width: min(320px, 56vw);
          max-width: 100%;
          height: auto;
          margin: 0 0 18px;
          object-fit: contain;
          filter: drop-shadow(0 0 18px rgba(132, 255, 0, 0.14));
        }

        .brand {
          display: flex;
          align-items: center;
        }

        .header-logo {
          display: block;
          width: 220px;
          max-width: 18vw;
          height: auto;
          object-fit: contain;
        }

        .eyebrow {
          margin: 0 0 12px;
          color: #b8ff61;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }

        h1 {
          max-width: 700px;
          margin: 0;
          font-size: clamp(2.2rem, 6vw, 4.8rem);
          font-weight: 900;
          line-height: 0.96;
          text-transform: uppercase;
          text-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .tagline {
          margin: 18px 0 0;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .enter-button {
          display: inline-block;
          margin-top: 34px;
          padding: 14px 28px;
          border-radius: 999px;
          background: #a3ff3f;
          color: #050505;
          font-size: 0.92rem;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          box-shadow: 0 0 26px rgba(163, 255, 63, 0.24);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .enter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 34px rgba(163, 255, 63, 0.32);
        }

        @media (max-width: 640px) {
          .welcome-content {
            padding: 32px 18px;
          }

          .background-image {
            background-size: min(760px, 120vw);
            opacity: 0.16;
          }

          .tagline {
            letter-spacing: 0.1em;
          }
        }

        @media (max-width: 820px) {
          .header-logo {
            width: 160px;
            max-width: 42vw;
          }
        }
      `}</style>
    </>
  );
}
