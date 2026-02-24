import React from 'react';
import { DocketItem, NavItem, PracticeArea } from './types';

export const FILLOUT_URL = "https://forms.fillout.com/t/oHEig2YTTGus";
// Formspree will send a verification email to this address upon first submission
export const FORM_ENDPOINT = "https://formspree.io/david@davidfriedmanlaw.com"; 

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Practice Areas', 
    path: '/#practice',
    children: [
        { label: 'Mortgage Servicing', path: '/practice/mortgage' },
        { label: 'Credit Reporting', path: '/practice/credit' },
        { label: 'Debt Harassment', path: '/practice/debt' },
        { label: 'Fintech & Banking', path: '/practice/fintech' },
        { label: 'Bankruptcy Litigation', path: '/practice/bankruptcy' },
    ]
  },
  { label: 'About', path: '/#philosophy' },
];

export const DOCKET_ITEMS: DocketItem[] = [
    { id: 1, text: "New York / 1:24-cv-01234 / SMITH V. EQUIFAX INFORMATION SERVICES LLC / COMPLAINT FILED" },
    { id: 2, text: "New York / 1:24-cv-05678 / JONES V. JPMORGAN CHASE BANK, N.A. / SETTLEMENT AGREEMENT" },
    { id: 3, text: "New York / 1:24-cv-09012 / DOE V. EXPERIAN INFORMATION SOLUTIONS / MOTION TO DISMISS DENIED" },
    { id: 4, text: "ALERT: NY FAIR CONSUMER JUDGMENT INTEREST ACT EFFECTIVE APRIL 2022" },
    { id: 5, text: "BANKRUPTCY NEW YORK / 24-10111 / IN RE: JOHNSON / ADVERSARY PROCEEDING COMMENCED" }
];

export const ICONS = {
  Mortgage: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M3 21h18" />
      <path d="M5 21V7l8-4 8 4v14" />
      <path d="M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
    </svg>
  ),
  Credit: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="m9 16 2 2 4-4" />
    </svg>
  ),
  Harassment: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      <path d="M14.121 14.121 19 19" />
      <path d="M19 14.121 14.121 19" />
    </svg>
  ),
  Fintech: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
      <path d="M2 10h20" />
    </svg>
  ),
  Bankruptcy: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  ArrowRight: (
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'mortgage',
    title: 'Mortgage Servicing & Homeowner Rights',
    subtitle: 'RESPA / Regulation X',
    description: 'Enforcing Regulation X to correct payment misapplications, escrow abuse, and Rule 3002.1 failures in Chapter 13 bankruptcy.',
    iconPath: ICONS.Mortgage,
    isFeatured: true,
    content: {
      heroText: "Is Your Servicer Making “Mechanical” Errors?",
      intro: "Under the Real Estate Settlement Procedures Act (RESPA) and Regulation X, your mortgage servicer is legally required to accurately credit your payments, maintain your escrow account, and respond to your formal inquiries within strict federal deadlines. If a servicer fails to fix an error after receiving a formal Notice of Error (NOE), they may be liable for statutory damages and your attorney’s fees.",
      sections: [
        {
          title: "Common Servicing Failures",
          content: "Mortgage servicers don’t own your loan; they are paid to manage the plumbing of your account. When that plumbing breaks, it usually happens in one of these ways:",
          bullets: [
            { title: "Payment Misapplication", text: "Your check was received on time but held in a “suspense account” instead of being applied to your principal and interest." },
            { title: "Escrow Abuse", text: "The servicer fails to pay your property taxes or insurance, then charges you for force-placed insurance at quadruple the market rate." },
            { title: "The Transfer Black Hole", text: "Your loan was sold to a new company, and your previous trial loan modification or payment history vanished during the hand-off." },
            { title: "Dual Tracking", text: "You are actively working on a loan modification, yet the servicer is simultaneously moving forward with a foreclosure sale in violation of federal law." },
            { title: "Rule 3002.1 Failures", text: "If you are in a Chapter 13 bankruptcy, your servicer is failing to properly disclose fees or acknowledge payments made through the Trustee." }
          ]
        },
        {
          title: "The Technical Framework: RESPA & Reg X",
          content: "We litigate these cases using the Bureau of Consumer Financial Protection’s mortgage servicing rules. Our strategy is built on 12 C.F.R. § 1024.35. We don’t just call and complain. We send a formal Notice of Error that triggers the servicer’s mandatory duty to conduct a reasonable investigation. If they rubber stamp their denial without looking at your bank statements or closing documents, they have committed a separate federal violation that we can take to court."
        }
      ],
      resources: [
        { title: "How to send a Notice of Error that banks can’t ignore", slug: "notice-of-error-guide" },
        { title: "Suing your mortgage servicer inside Chapter 13", slug: "suing-mortgage-servicer-chapter-13" },
        { title: "Force-Placed Insurance: Did your servicer buy a policy you didn’t need?", slug: "force-placed-insurance" },
        { title: "Suspense Accounts: Why your payment didn’t get credited to your balance", slug: "suspense-accounts" },
        { title: "The 60-Day Transfer Protection: You can’t be charged a late fee during a hand-off", slug: "transfer-protection" }
      ],
      referral: {
        title: "A Boutique Trial Shop for Your Toughest Servicing Cases",
        text: "If you are a bankruptcy practitioner or a general litigator, you know that mortgage servicers are often the most difficult creditors to deal with. They are insulated by layers of automation and offshore customer service. I provide the federal litigation support you need to hold them accountable. Whether it’s an adversary proceeding for a Discharge Injunction violation or a federal lawsuit for RESPA failures, I handle the technical discovery and briefing required to survive a motion to dismiss in federal court."
      }
    }
  },
  {
    id: 'credit',
    title: 'Credit Reports & Consumer Data Rights',
    subtitle: 'FCRA Litigation',
    description: 'Repairing mixed files, identity theft, and employer background check violations.',
    iconPath: ICONS.Credit,
    content: {
      heroText: "The Three Most Damaging Credit Errors",
      intro: "Under the Fair Credit Reporting Act (FCRA) and the New York Fair Credit Reporting Act, credit bureaus (Equifax, Experian, TransUnion) have a legal duty to maintain maximum possible accuracy. If a bureau fails to correct a proven error after a formal dispute, or if an employer pulls your report illegally under New York’s 2026 credit check ban, you have the right to sue for statutory damages, actual damages, and your attorney’s fees.",
      sections: [
        {
          title: "Technical Failures We Litigate",
          bullets: [
            { title: "The Mixed File (“The John Smith Problem”)", text: "This occurs when a bureau combines your credit history with someone else’s (often a relative or someone with a similar name). This isn’t just a typo; it’s a fundamental failure of the bureau’s matching algorithms." },
            { title: "Identity Theft Recovery", text: "If you’ve filed a police report and the bureau refuses to block fraudulent accounts, they are in direct violation of the FCRA. We don’t just ask for removals; we enforce the statutory block." },
            { title: "Furnisher Misreporting", text: "When a bank or credit card company reports a paid account as delinquent, or a zombie debt buyer reports a debt that was settled years ago." }
          ]
        },
        {
          title: "The 2026 New York Advantage",
          content: "As of April 18, 2026, New York has implemented some of the strongest consumer credit protections in the country:",
          bullets: [
            { title: "The Statewide Employment Credit Ban", text: "Most New York employers are now prohibited from requesting or using your credit history to make hiring or promotion decisions. If a job offer was rescinded after a credit check, you may have a significant legal claim." },
            { title: "The Medical Debt Ban", text: "In New York, hospitals and healthcare providers are legally barred from reporting medical debt to credit bureaus. If a medical bill is dragging down your score, it is likely on your report illegally." }
          ]
        }
      ],
      resources: [
        { title: "Mixed Files: What to do when someone else’s debt is on your report", slug: "mixed-files" },
        { title: "New York’s 2026 Ban on Employment Credit Checks", slug: "ny-employment-credit-ban" },
        { title: "Identity Theft Recovery: Beyond the police report", slug: "identity-theft-recovery" },
        { title: "Medical Debt: Why it shouldn’t be on your NY credit report", slug: "medical-debt-ny" },
        { title: "What to do when the credit bureau says your error was “verified”", slug: "verified-error" }
      ],
      referral: {
        title: "Proving Concrete Harm in New York",
        text: "The biggest hurdle in FCRA litigation today is standing. Following TransUnion v. Ramirez, a “bare procedural violation” is no longer enough to stay in federal court. I specialize in building the record for concrete harm. Whether it’s proving reputational injury from a mixed file or the tangible loss of a job opportunity under the new 2026 NY amendments, I ensure your client’s case survives a motion to dismiss. I am available for co-counsel or referral on high-stakes accuracy cases in New York."
      }
    }
  },
  {
    id: 'debt',
    title: 'Debt Collection Harassment & Rights',
    subtitle: 'FDCPA / FAIR Act',
    description: 'Stopping wrongful garnishments, zombie debt, and harassing communications.',
    iconPath: ICONS.Harassment,
    content: {
      heroText: "Protecting consumers from debt collection abuse",
      intro: "Federal and state laws—including the Fair Debt Collection Practices Act (FDCPA) and New York’s 2026 FAIR Act—strictly prohibit debt collectors from using abusive, deceptive, or unfair tactics to collect a debt. You have the legal right to stop the calls, dispute the debt, and sue for statutory damages and attorney’s fees if a collector crosses the line.",
      sections: [
        {
          title: "Severe Financial Harassment",
          bullets: [
            { title: "Unauthorized Taking (Electronic Theft)", text: "If a collector has debited your bank account or charged your card without a specific, written authorization, they may have violated the Electronic Fund Transfer Act (EFTA). In 2026, “accidental” debits are no excuse for illegal takings." },
            { title: "Wrong-Person Debts (Mistaken Identity)", text: "Being hounded for a debt that belongs to someone with a similar name or a previous resident of your home is a major violation. If you have told a collector “I am not this person” and they continue to pursue you, we sue to stop the identity confusion and clear your name." },
            { title: "Collection on Paid or Settled Debts", text: "Chasing a consumer for a debt that has a $0 balance is a fraudulent misrepresentation of the debt’s legal status. This often happens when zombie debt buyers purchase old spreadsheets without checking if the accounts were already satisfied." },
            { title: "Wrongful Garnishment", text: "If a collector has frozen your bank account without proper legal notice or is taking more from your paycheck than the New York EIPA allows, we litigate to unfreeze your funds and seek damages for the hardship caused." }
          ]
        },
        {
          title: "The “Unfair & Abusive” Standard (New York 2026)",
          content: "The FAIR Act, effective February 17, 2026, represents the most significant update to New York consumer law in 45 years. It expands the state’s protections to explicitly ban unfair and abusive acts, aligning New York with the most aggressive consumer protection standards in the country. We use these new standards to litigate cases that were previously grey areas, such as collectors who refuse to return exempt Social Security benefits or file lawsuits without a valid basis."
        }
      ],
      resources: [
        { title: "Can a debt collector use AI to text me?", slug: "ai-debt-collection" },
        { title: "The FAIR Act: New York’s new Unfair & Abusive standard", slug: "fair-act-ny" },
        { title: "Stop collection calls for someone else’s debt", slug: "stop-collection-calls" },
        { title: "Can a debt collector call me at work or contact my boss?", slug: "calls-at-work" },
        { title: "Coerced Debt: Suing to clear your name after economic abuse", slug: "coerced-debt" }
      ],
      referral: {
        title: "A Federal Litigation Shop for FDCPA Violations",
        text: "Many general practitioners view debt harassment as a nuisance; I view it as a statutory litigation opportunity. If your client is being sued for a zombie debt that is past the New York 3-year statute of limitations, or if they are facing aggressive collection on a debt they already settled, I can help. I specialize in identifying violations that trigger mandatory attorney’s fees, allowing you to protect your client’s rights without them having to pay out-of-pocket for litigation."
      }
    }
  },
  {
    id: 'fintech',
    title: 'Fintech & Digital Banking Rights',
    subtitle: 'EFTA / Regulation E',
    description: 'Recovering funds stolen through Zelle scams, unauthorized debits, and frozen neobank accounts.',
    iconPath: ICONS.Fintech,
    content: {
      heroText: "Egregious Takings in the Digital Age",
      intro: "Your digital wallet is protected by federal and state law. Under EFTA Regulation E and New York’s 2026 FAIR Act, financial institutions and payment apps (Zelle, Venmo, CashApp) are strictly required to investigate fraud, provide provisional credit during disputes, and honor your “stop payment” requests. If an app has frozen your account without explanation or a bank has refused to refund a Zelle scam, they are liable for statutory damages, triple damages for bad-faith investigations, and your attorney’s fees.",
      sections: [
        {
          title: "High-Impact Misconduct",
          bullets: [
            { title: "The Zelle “Authorized” Trap", text: "Banks often refuse to refund Zelle fraud by claiming you authorized the transfer—even if you were tricked by a sophisticated imposter. Following the 2025 New York Attorney General lawsuit against Zelle (James v. EWS), we use evidence of the platform’s “frictionless” design flaws to hold banks accountable for these losses." },
            { title: "Unauthorized Fintech Debits", text: "Cash advance and Earned Wage Access (EWA) apps often treat your bank account as their own. If an app has debited your account after you revoked authorization or ignored a stop payment order, they have committed a federal violation under Regulation E." },
            { title: "Shadow Loans & Fintech Usury", text: "Many apps claim their “tips” and “express fees” aren’t interest. Under New York’s 2026 usury standards, these costs are increasingly recognized as illegal high-interest loans. We sue to recoup these fees and void the underlying debt." },
            { title: "The Neobank Freeze", text: "If a digital bank (like Chime, Dave, or CashApp) has frozen your account or “lost” your direct deposit, they are legally required to provide you with provisional credit within 10 days if their investigation isn’t finished. If they leave you with a $0 balance for weeks, we litigate to restore your access and seek damages for the hardship." }
          ]
        },
        {
          title: "The “Unfair & Abusive” Standard (Fintech 2026)",
          content: "The FAIR Act, effective February 17, 2026, allows us to challenge fintech practices that take unreasonable advantage of a consumer’s lack of understanding. We use this new New York standard to litigate junk fees, deceptive app interfaces (Dark Patterns), and the aggressive steering of consumers into high-cost instant transfers."
        }
      ],
      resources: [
        { title: "The fraud defense: Getting your Zelle money back", slug: "zelle-fraud-defense" },
        { title: "What to do when your bank says a Zelle scam was “authorized”", slug: "zelle-authorized-scam" },
        { title: "Are “tips” and “express fees” on EWA apps actually illegal usury?", slug: "ewa-usury" },
        { title: "Neobanks & Frozen Accounts: Your right to a 10-day investigation", slug: "neobank-freeze" },
        { title: "Treble Damages: When a bank’s bad faith investigation pays triple", slug: "treble-damages-bad-faith" }
      ],
      referral: {
        title: "A Litigation Partner for Digital Fraud",
        text: "Many firms turn away Zelle and Venmo fraud cases because they assume the “authorized” defense is unbeatable. I specialize in the technical discovery required to overcome that defense. By leveraging the 2025 NYAG findings and the CFPB’s 2025 interpretive rules on digital wallets, I can identify the specific security failures that shift liability back to the institution. If you have a client whose life savings were drained in a digital minute, I am available to handle the federal litigation or co-counsel on the EFTA claims."
      }
    }
  },
  {
    id: 'bankruptcy',
    title: 'Consumer Bankruptcy Litigation',
    subtitle: 'Adversary Proceedings',
    description: 'Using the automatic stay and discharge injunction against abusive creditors.',
    iconPath: ICONS.Bankruptcy,
    content: {
      heroText: "Bankruptcy Litigation: Using the Code as a Sword",
      intro: "Bankruptcy is more than a fresh start—it is a powerful tool to hold abusive creditors accountable. Under the Bankruptcy Code, the moment you file, an Automatic Stay is enacted to stop all collection activity. If a creditor violates this stay, or if a mortgage servicer fails to comply with Bankruptcy Rule 3002.1, they may be liable for actual damages, punitive damages, and your attorney’s fees.",
      sections: [
        {
          title: "Offensive Bankruptcy Litigation",
          bullets: [
            { title: "Automatic Stay Violations (§ 362(k))", text: "The stay is a federal injunction. If a collector continues to call, garnish your wages, or repossess your car after they’ve been notified of your filing, they have violated a court order. We sue to recover damages for the stress and financial loss caused by these willful violations." },
            { title: "Rule 3002.1 Mortgage Abuses", text: "As of December 1, 2025, federal rules regarding mortgage transparency in Chapter 13 have been significantly strengthened. We use the new Motion to Determine Status to force mortgage companies to prove they are applying your payments correctly and to strip away hidden fees that haven’t been properly noticed." },
            { title: "Discharge Injunction Violations (§ 524)", text: "Once your debt is legally wiped away, it is gone forever. If a creditor tries to collect a discharged debt or reports it as “active” or “charged off” to credit bureaus instead of “discharged,” they are in contempt of a federal court order." },
            { title: "Adversary Proceedings", text: "We represent debtors in complex mini-lawsuits within the bankruptcy court. Whether it’s defending against a creditor’s objection to your discharge or suing a predatory lender for fraud, we provide the technical trial skills required to win in federal court." }
          ]
        },
        {
          title: "The 2026 Regulatory Landscape",
          content: "Litigating in 2026 requires staying ahead of new rules and economic shifts. We are active members of the National Association of Consumer Bankruptcy Attorneys (NACBA) and the Advanced Bankruptcy Law Institute (ABLI), ensuring our strategies reflect the latest appellate rulings and procedural changes. We are particularly focused on the 2025 Rule 3002.1 amendments, which now extend protection to reverse mortgages and provide new tools to audit HELOC payment changes."
        }
      ],
      resources: [
        { title: "The Automatic Stay: Your shield against immediate collection", slug: "automatic-stay" },
        { title: "Rule 3002.1: Suing mortgage servicers for hidden fees in Chapter 13", slug: "rule-3002-1-mortgage" },
        { title: "Discharge Injunctions: What to do if a creditor calls after your case is closed", slug: "discharge-injunction" },
        { title: "Adversary Proceedings: When bankruptcy becomes a federal lawsuit", slug: "adversary-proceedings" },
        { title: "Can I discharge Fintech and “Buy Now, Pay Later” loans?", slug: "discharge-fintech-loans" }
      ],
      referral: {
        title: "A Technical Resource for Complex APs",
        text: "Most consumer bankruptcy shops are designed for volume, not litigation. If you have a Chapter 13 case where the mortgage servicer is ignoring Rule 3002.1 notices, or a Chapter 7 where a creditor is aggressively pursuing a 523(a) fraud objection, I can help. I provide the technical litigation support required to turn a problem case into a statutory fee-shifting opportunity. I am trained in the Max Gardner style of mortgage and consumer discovery, and I am available for co-counsel or referral on high-impact adversary proceedings in New York."
      }
    }
  },
];