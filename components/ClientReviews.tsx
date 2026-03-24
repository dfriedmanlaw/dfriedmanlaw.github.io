import React from 'react';

const REVIEWS = [
    {
        text: "David took my case when no lawyer wanted to touch it. That speaks volumes for his ethics. David and his team made an incredibly daunting task easy and comfortable. They kept things on track... I never felt judged. David and team are incredible at their work. Intelligent group of people. Highly recommend!",
        caseType: "Consumer Litigation"
    },
    {
        text: "Had a meeting with Mr. Friedman last week concerning a debt collection issue and he was very helpful, kind, and patient... Although he did inform me had I met with him sooner than I did that I may no longer have owed this particular debt! Oops!",
        caseType: "Debt Collection Defense"
    },
    {
        text: "He went over my post-bankruptcy credit reports with me and had prepared letters to send to the credit agencies to ensure my reports were accurate and my debt was shown as discharged... I know that I was not his only client, but he always made me feel like I was.",
        caseType: "Credit Reporting Correction"
    }
];

const ClientReviews: React.FC = () => {
  return (
    <section className="py-24 bg-tech-surface border-b border-tech-border">
      <div className="max-w-[1440px] mx-auto px-6">
        
        <div className="mb-16 text-center">
            <h2 className="text-xs font-sans font-bold text-tech-primary tracking-widest uppercase mb-3">
                What Clients Say
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-tech-text">
                Don’t just take our word for it.
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-tech-border hover:shadow-md transition-shadow relative">
                    {/* Quote Icon */}
                    <div 
                        className="absolute top-4 left-4 text-tech-primary/20 text-8xl leading-none" 
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        “
                    </div>

                    <div className="relative z-10 pt-8">
                        <p className="text-tech-muted font-serif italic text-lg leading-relaxed mb-6">
                            “{review.text}”
                        </p>
                        
                        <div className="flex items-center justify-between border-t border-tech-border pt-4">
                            <div>
                                <p className="text-xs text-tech-primary font-bold uppercase tracking-wide">
                                    {review.caseType}
                                </p>
                            </div>
                            <div className="flex text-tech-primary">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ClientReviews;
