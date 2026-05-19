import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <style>{`
        .portfolio-content {
          max-width: 1180px;
          margin: 0 auto;
          padding: 96px 24px;
        }
        .portfolio-header {
          margin-bottom: 64px;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #361110;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 32px;
          transition: all 0.3s;
        }
        .back-btn:hover {
          gap: 12px;
        }
        .portfolio-content h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: 64px;
          color: #2B0F0D;
          margin: 0 0 16px;
          line-height: 1.2;
        }
        .portfolio-content p {
          font-size: 20px;
          color: rgba(43, 15, 13, 0.82);
          line-height: 1.7;
          max-width: 680px;
          margin: 0;
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }
        .portfolio-item {
          background: white;
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(54, 17, 16, 0.1);
          box-shadow: 0 12px 40px rgba(54, 17, 16, 0.08);
          transition: all 0.3s;
        }
        .portfolio-item:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 64px rgba(54, 17, 16, 0.12);
        }
        .portfolio-item h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic;
          font-size: 28px;
          color: #361110;
          margin: 0 0 12px;
        }
        .portfolio-item p {
          font-size: 16px;
          color: rgba(43, 15, 13, 0.78);
          margin: 0;
        }
      `}</style>

      <div className="portfolio-content">
        <div className="portfolio-header">
          <Link to="/" className="back-btn">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1>Portfolio</h1>
          <p>A curated collection of thoughtful design work exploring emotion, accessibility, and intelligent systems.</p>
        </div>

        <div className="portfolio-grid">
          <div className="portfolio-item">
            <h3>Ouihelp</h3>
            <p>Redesign of a digital healthcare experience focused on trust, clarity and emotional reassurance in sensitive human contexts.</p>
          </div>
          <div className="portfolio-item">
            <h3>EchoMed</h3>
            <p>A mobile AI experience allowing users to photograph medication and instantly receive simplified visual and voice explanations.</p>
          </div>
          <div className="portfolio-item">
            <h3>Memory Archives</h3>
            <p>A visual universe inspired by memory archives, film photography and intimate storytelling experiences.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
