import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const LegalPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-tech-bg">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold text-tech-text mb-8">Legal Disclaimer & Privacy Policy</h1>
        
        <div className="prose prose-stone max-w-none font-sans text-tech-muted">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-tech-text mb-4 font-serif">Attorney Advertising</h2>
            <p className="mb-4">
              This website contains attorney advertising. Prior results do not guarantee a similar outcome. The information contained on this website is for general information purposes only and does not constitute legal advice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-tech-text mb-4 font-serif">No Attorney-Client Relationship</h2>
            <p className="mb-4">
              The use of this website, including the submission of any forms or emails, does not create an attorney-client relationship between you and the Law Office of David Friedman, PLLC. An attorney-client relationship is only formed after a written retainer agreement is signed by both parties.
            </p>
            <p className="mb-4">
              Please do not send confidential information through this website until an attorney-client relationship has been established.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-tech-text mb-4 font-serif">Jurisdiction</h2>
            <p className="mb-4">
              David Friedman is licensed to practice law in the State of New York and the State of Minnesota. This firm does not seek to represent anyone based solely on a visit to this website in any jurisdiction where this website would not comply with local laws and ethical rules.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold text-tech-text mb-4 font-serif">Privacy Policy</h2>
            <p className="mb-4">
              We respect your privacy. Any information you submit through our intake forms is used solely for the purpose of evaluating your potential case. We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
            <p className="mb-4">
              This website uses Google Analytics to analyze traffic and improve user experience. Google Analytics may use cookies to collect anonymous data about your visit.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-tech-border">
            <Link to="/">
              <Button variant="outline">Return Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LegalPage;
