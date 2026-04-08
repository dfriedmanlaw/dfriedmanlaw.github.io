import React from 'react';
import { Home, CreditCard, PhoneOff, Smartphone, Scale, ArrowRight } from 'lucide-react';
import { NavItem, PracticeArea } from './types';

export const FILLOUT_URL = "https://forms.fillout.com/t/oHEig2YTTGus";
// Formspree will send a verification email to this address upon first submission
export const FORM_ENDPOINT = "https://formspree.io/david@davidfriedmanlaw.com"; 

export const NAV_ITEMS: NavItem[] = [
  { 
    label: 'Practice Areas', 
    path: '/#practice',
    children: [
        { label: 'Mortgage Errors & Servicing Abuse', path: '/practice/mortgage/' },
        { label: 'Credit Reporting Errors & Identity Theft', path: '/practice/credit/' },
        { label: 'Debt Collection Harassment & Rights', path: '/practice/debt/' },
        { label: 'Fintech Usury & Disguised Loans', path: '/practice/fintech/' },
        { label: 'Bankruptcy Rights Violations', path: '/practice/bankruptcy/' },
    ]
  },
  { label: 'About', path: '/about/' },
  { label: 'Library', path: '/library/' },
  { label: 'Contact', path: '/contact/' },
];

export const ICONS = {
  Mortgage: (
    <Home className="w-10 h-10 text-tech-primary" strokeWidth={1.5} />
  ),
  Credit: (
    <CreditCard className="w-10 h-10 text-tech-primary" strokeWidth={1.5} />
  ),
  Harassment: (
    <PhoneOff className="w-10 h-10 text-tech-primary" strokeWidth={1.5} />
  ),
  Fintech: (
    <Smartphone className="w-10 h-10 text-tech-primary" strokeWidth={1.5} />
  ),
  Bankruptcy: (
    <Scale className="w-10 h-10 text-tech-primary" strokeWidth={1.5} />
  ),
  ArrowRight: (
     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  )
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'mortgage',
    title: 'Mortgage Errors & Servicing Abuse',
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
          content: "We litigate these cases using the Bureau of Consumer Financial Protection’s mortgage servicing rules. We don’t just call and complain. We send a formal Notice of Error that triggers the servicer’s mandatory duty to conduct a reasonable investigation. If they rubber stamp their denial, they have committed a separate federal violation that we can take to court."
        }
      ],
      resources: [
        // The Basics (Notices & Requests)
        { title: "How to Send a Notice of Error That Banks Can’t Ignore", slug: "notice-of-error-guide" },
        { title: "How to Send a Qualified Written Request for Information to Your Mortgage Servicer Under RESPA", slug: "qualified-written-request-guide" },
        
        // Common Problems (The "Why")
        { title: "The “Incomplete Application” Loop: Stopping the Loss Mitigation Runaround", slug: "incomplete-application-loop" },
        { title: "Escrow Analysis Shock: Why Did My Payment Double Overnight?", slug: "escrow-analysis-shock" },
        { title: "The Trial Period Plan (TPP) Trap: You Made the Payments, They Denied the Mod", slug: "trial-period-plan-trap" },
        { title: "Suspense Accounts: Why Your Payment Didn’t Get Credited to Your Balance", slug: "suspense-accounts" },
        { title: "Force-Placed Insurance: Did Your Servicer Buy a Policy You Didn’t Need?", slug: "force-placed-insurance" },
        { title: "The 60-Day Transfer Protection: You Can’t Be Charged a Late Fee During a Hand-Off", slug: "transfer-protection" },
        { title: "The New Rule 3002.1: A Powerful Weapon for Chapter 13 Debtors (2025 Update)", slug: "new-bankruptcy-rule-3002-1-update-2025" },
        
        // Litigation & Damages (The "So What")
        { title: "Dual Tracking: Why They Can’t Foreclose While Reviewing Your Modification", slug: "dual-tracking-foreclosure" },
        { title: "What Happens When Your Mortgage Servicer Refuses to Correct Its Error", slug: "servicer-refuses-correction" },
        { title: "What Types of Legal Damages Can Be Awarded Under RESPA", slug: "respa-damages" },
        
        // Bankruptcy Specifics
        { title: "Suing Your Mortgage Servicer Inside Chapter 13", slug: "suing-mortgage-servicer-chapter-13" },
        { title: "When the Mortgage Math Doesn’t Add Up: Why Your Chapter 13 Discharge Didn’t Fix Your Arrears", slug: "mortgage-math-chapter-13" }
      ],
      referral: {
        title: "A Boutique Trial Shop for Your Toughest Servicing Cases",
        text: "If you are a bankruptcy practitioner or a general litigator, you know that mortgage servicers are often the most difficult creditors to deal with. They are insulated by layers of automation and offshore customer service. I provide the federal litigation support you need to hold them accountable. Whether it’s an adversary proceeding for a Discharge Injunction violation or a federal lawsuit for RESPA failures, I handle the technical discovery and briefing required to survive a motion to dismiss in federal court."
      }
    }
  },
  {
    id: 'credit',
    title: 'Credit Reporting Errors & Identity Theft',
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
        { title: "The “Verified” Trap: Why Your Dispute Was Rejected in 3 Days", slug: "credit-dispute-verified-trap" },
        { title: "Zombie Debt: Why Old Accounts Suddenly Reappear as “New”", slug: "zombie-debt-reaging" },
        { title: "Mixed Files: What to Do When Someone Else’s Debt Is on Your Report", slug: "mixed-files" },
        { title: "New York’s 2026 Ban on Employment Credit Checks", slug: "ny-employment-credit-ban" },
        { title: "Identity Theft Recovery: Beyond the Police Report", slug: "identity-theft-recovery" },
        { title: "Medical Debt: Why It Shouldn’t Be on Your NY Credit Report", slug: "medical-debt-ny" },
        { title: "What to Do When the Credit Bureau Says Your Error Was “Verified”", slug: "verified-error" },
        { title: "Cleaning up After Bankruptcy: Why Are Negative Accounts Still Showing Up on My Report?", slug: "credit-reporting-after-bankruptcy" }
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
      heroText: "Protecting Consumers From Debt Collection Abuse",
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
        { title: "The “Sold” Discharge: Why a Debt Buyer Is Calling About Your Bankrupt Account", slug: "zombie-debt-bankruptcy-discharge" },
        { title: "I Already Paid That! Suing Collectors Who Try to Collect the Same Debt Twice", slug: "collecting-paid-debt" },
        { title: "The “Same Name” Nightmare: When You Are Sued for a Stranger’s Debt", slug: "sued-wrong-person" },
        { title: "Phantom Payday Loans: The Scam That Uses Your Real Data", slug: "phantom-payday-loans" },
        { title: "Can a Debt Collector Use AI to Text Me?", slug: "ai-debt-collection" },
        { title: "The FAIR Act: New York’s New Unfair & Abusive Standard", slug: "fair-act-ny" },
        { title: "Can a Debt Collector Call Me at Work or Contact My Boss?", slug: "calls-at-work" },
        { title: "Coerced Debt: Suing to Clear Your Name After Economic Abuse", slug: "coerced-debt" },
        { title: "How to Stop Debt Collection Calls: A Step-by-Step Guide", slug: "stop-collection-calls" },
        { title: "Debt Collection After Bankruptcy: What to Do When a Collector Is Hounding Me for a Debt I Already Handled in Bankruptcy", slug: "debt-collection-after-bankruptcy" }
      ],
      referral: {
        title: "A Federal Litigation Shop for FDCPA Violations",
        text: "Many general practitioners view debt harassment as a nuisance; I view it as a statutory litigation opportunity. If your client is being sued for a zombie debt that is past the New York 3-year statute of limitations, or if they are facing aggressive collection on a debt they already settled, I can help. I specialize in identifying violations that trigger mandatory attorney’s fees, allowing you to protect your client’s rights without them having to pay out-of-pocket for litigation."
      }
    }
  },
  {
    id: 'fintech',
    title: 'Fintech Usury & Disguised Loans',
    subtitle: 'TILA / EFTA / Usury',
    description: 'Challenging predatory cash advance apps, EWA usury, and unauthorized bank account debits.',
    iconPath: ICONS.Fintech,
    content: {
      heroText: "Is Your Cash Advance App a Disguised Payday Lender?",
      intro: "Fintech apps like Dave, EarnIn, and MoneyLion claim their “tips” and “express fees” aren’t interest. In New York, we know better. Under state usury laws and the federal Truth in Lending Act (TILA), these are often illegal high-interest loans. We litigate to recoup fees, void predatory debt, and hold apps accountable for failing to disclose the true cost of credit.",
      sections: [
        {
          title: "Predatory Fintech Practices",
          bullets: [
            { title: "Shadow Loans & Fintech Usury", text: "Apps that offer 'instant' advances often charge fees that, when calculated as an APR, exceed New York’s 16% usury cap. We reclassify these 'tips' as illegal interest to void the underlying debt." },
            { title: "Unauthorized Account Debits", text: "If a cash advance or EWA app has debited your bank account after you revoked authorization or ignored a stop payment order, they have committed a federal violation under Regulation E." },
            { title: "The Neobank Freeze", text: "When digital banks like Chime or CashApp freeze your account without providing provisional credit within 10 days, they are violating the EFTA. We litigate to restore access and seek damages for the hardship." },
            { title: "Payment App Fraud (Zelle/Venmo)", text: "While we focus on usury, we also hold banks accountable for Zelle scams where they refuse to refund victims by claiming the fraud was 'authorized'." }
          ]
        },
        {
          title: "The “Unfair & Abusive” Standard (New York 2026)",
          content: "The FAIR Act, effective February 17, 2026, allows us to challenge fintech practices that take unreasonable advantage of a consumer’s lack of understanding. We use this new New York standard to litigate junk fees, deceptive app interfaces (Dark Patterns), and the aggressive steering of consumers into high-cost instant transfers."
        }
      ],
      resources: [
        { title: "Hidden Interest: Suing Cash Advance Apps for Usury and TILA Violations", slug: "cash-advance-app-usury-tila" },
        { title: "Told Your Cash Advance App Isn’t a ‘Loan’? Why You May Be Owed a Full Refund", slug: "cash-advance-not-a-loan-refund" },
        { title: "Is a $5 Cash Advance ‘Express Fee’ Actually an Illegal 400% Interest Rate?", slug: "express-fee-illegal-interest" },
        { title: "Are “Tips” and “Express Fees” on EWA Apps Actually Illegal Usury?", slug: "ewa-usury" },
        { title: "How to Stop an Online Lender From Emptying Your Bank Account: Your Rights Under New York and Federal Law", slug: "stop-online-lender-bank-drain" },
        { title: "The 10-Day Rule: When Fintechs Fail to Give Provisional Credit", slug: "fintech-provisional-credit-10-day-rule" },
        { title: "Locked Out: When a Neobank Freezes Your Rent Money", slug: "neobank-account-freeze" },
        { title: "Zombie Subscriptions: When the Bank Keeps Paying After You Said Stop", slug: "zombie-subscriptions-stop-payment" },
        { title: "The Fraud Defense: Getting Your Zelle Money Back", slug: "zelle-fraud-defense" },
        { title: "What to Do When Your Bank Says a Zelle Scam Was “Authorized”", slug: "zelle-authorized-scam" },
        { title: "Treble Damages: When a Bank’s Bad Faith Investigation Pays Triple", slug: "treble-damages-bad-faith" }
      ],
      referral: {
        title: "A Technical Resource for Fintech Usury",
        text: "Many firms view $5 fees as too small to litigate. I view them as the foundation for systemic usury claims. By leveraging New York’s strict interest caps and the federal Truth in Lending Act, I can identify the 'dark patterns' that turn optional tips into mandatory interest. If you have clients trapped in a cycle of fintech debt, I am available for co-counsel or referral to handle the technical usury and TILA litigation."
      }
    }
  },
  {
    id: 'bankruptcy',
    title: 'Bankruptcy Rights Violations',
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
        { title: "The “Notice of Fees” Trap: Why Your Mortgage Servicer Is Hiding Costs in Chapter 13", slug: "bankruptcy-rule-3002-1-hidden-fees" },
        { title: "The New Rule 3002.1: A Powerful Weapon for Chapter 13 Debtors (2025 Update)", slug: "new-bankruptcy-rule-3002-1-update-2025" },
        { title: "The Automatic Stay: Your Shield Against Immediate Collection", slug: "automatic-stay" },
        { title: "Discharge Injunctions: What to Do if a Creditor Calls After Your Case Is Closed", slug: "discharge-injunction" },
        { title: "Adversary Proceedings: When Bankruptcy Becomes a Federal Lawsuit", slug: "adversary-proceedings" },
        { title: "Can I Discharge Fintech and “Buy Now, Pay Later” Loans?", slug: "discharge-fintech-loans" },
        { title: "Cleaning up After Bankruptcy: Why Are Negative Accounts Still Showing Up on My Report?", slug: "credit-reporting-after-bankruptcy" },
        { title: "Debt Collection After Bankruptcy: What to Do When a Collector Is Hounding Me for a Debt I Already Handled in Bankruptcy", slug: "debt-collection-after-bankruptcy" }
      ],
      referral: {
        title: "A Technical Resource for Complex APs",
        text: "Most consumer bankruptcy shops are designed for volume, not litigation. If you have a Chapter 13 case where the mortgage servicer is ignoring Rule 3002.1 notices, or a Chapter 7 where a creditor is aggressively pursuing a 523(a) fraud objection, I can help. I provide the technical litigation support required to turn a problem case into a statutory fee-shifting opportunity. I am trained in the Max Gardner style of mortgage and consumer discovery, and I am available for co-counsel or referral on high-impact adversary proceedings in New York."
      }
    }
  },
];