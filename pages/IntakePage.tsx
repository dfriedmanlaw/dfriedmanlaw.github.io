import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { PRACTICE_AREAS, FORM_ENDPOINT, FILLOUT_URL } from '../constants';

const IntakePage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    issueType: '',
    description: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Check if Fillout URL is configured (not the placeholder)
  const useFillout = FILLOUT_URL && !FILLOUT_URL.includes('placeholder');

  useEffect(() => {
    if (useFillout) {
      // If using Fillout, we can redirect or show the embed
      // For better UX, let's show the embed in an iframe
    }
  }, [useFillout]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
        if (FORM_ENDPOINT) {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                setIsSuccess(true);
                window.scrollTo(0, 0);
            } else {
                throw new Error('Submission failed');
            }
        } else {
            // Simulation for preview
            await new Promise(resolve => setTimeout(resolve, 1500));
            // In production, this would be an error if endpoint is missing
            console.warn("Form endpoint not configured. Data was not sent.");
            setIsSuccess(true);
            window.scrollTo(0, 0);
        }
    } catch (err) {
        setError('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
        setIsSubmitting(false);
    }
  };

  if (useFillout) {
    return (
      <div className="min-h-screen bg-tech-surface pt-24 pb-0 px-0 flex flex-col">
         <div className="flex-1 w-full h-full min-h-[800px]">
            <iframe 
                src={FILLOUT_URL} 
                width="100%" 
                height="100%" 
                style={{ minHeight: '800px', border: 'none' }}
                title="Intake Form"
            ></iframe>
         </div>
         <div className="text-center py-4 bg-tech-bg border-t border-tech-border">
            <Link to="/" className="text-sm text-tech-muted hover:text-tech-primary transition-colors">
                ← Return to Home
            </Link>
         </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-tech-bg px-6">
        <div className="max-w-lg w-full bg-white border border-tech-border p-8 md:p-12 rounded-2xl shadow-xl text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold text-tech-text mb-4">Request Received</h2>
          <p className="text-tech-muted mb-8 leading-relaxed">
            Thank you for submitting your case details. Our team will review your information and contact you within 24 hours if we believe we can assist with your matter.
          </p>
          {!FORM_ENDPOINT && (
             <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded mb-4">
                Note: Email integration is not yet configured. Please set the FORM_ENDPOINT in constants.tsx.
             </p>
          )}
          <Link to="/">
            <Button variant="primary" size="lg">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-tech-surface pt-24 pb-16 px-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-tech-text mb-4">Case Evaluation</h1>
          <p className="text-tech-muted text-lg">Tell us about your situation. Secure & Confidential.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center mb-12 space-x-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                step >= s ? 'bg-tech-primary text-white' : 'bg-tech-border text-tech-muted'
              }`}>
                {s}
              </div>
              {s < 3 && (
                <div className={`w-12 h-0.5 mx-2 ${step > s ? 'bg-tech-primary' : 'bg-tech-border'}`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white border border-tech-border rounded-2xl shadow-lg p-8 md:p-10">
          <form onSubmit={step === 3 ? handleSubmit : handleNext}>
            
            {/* Step 1: Contact Info */}
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-tech-text mb-6">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-tech-muted uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-tech-surface border border-tech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary/20 focus:border-tech-primary transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-tech-muted uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-tech-surface border border-tech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary/20 focus:border-tech-primary transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-tech-muted uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-tech-surface border border-tech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary/20 focus:border-tech-primary transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-tech-muted uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-tech-surface border border-tech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary/20 focus:border-tech-primary transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-tech-muted uppercase tracking-wider">City</label>
                    <input 
                      type="text" 
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-tech-surface border border-tech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary/20 focus:border-tech-primary transition-all"
                      placeholder="New York"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-tech-muted uppercase tracking-wider">State</label>
                    <select 
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-tech-surface border border-tech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary/20 focus:border-tech-primary transition-all appearance-none"
                    >
                      <option value="">Select...</option>
                      <option value="NY">New York</option>
                      <option value="MN">Minnesota</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Case Type */}
            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-tech-text mb-6">Case Details</h3>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-tech-muted uppercase tracking-wider">Type of Issue</label>
                  <select 
                    name="issueType"
                    required
                    value={formData.issueType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-tech-surface border border-tech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary/20 focus:border-tech-primary transition-all appearance-none"
                  >
                    <option value="">Select a category...</option>
                    {PRACTICE_AREAS.map(area => (
                      <option key={area.id} value={area.title}>{area.title}</option>
                    ))}
                    <option value="Other">Other Consumer Issue</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-tech-muted uppercase tracking-wider">Description</label>
                  <textarea 
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-tech-surface border border-tech-border rounded-lg focus:outline-none focus:ring-2 focus:ring-tech-primary/20 focus:border-tech-primary transition-all resize-none"
                    placeholder="Please describe what happened. Include dates, names of companies, and any specific errors..."
                  />
                </div>
              </div>
            )}

            {/* Step 3: Review & Submit */}
            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-tech-text mb-6">Review & Submit</h3>
                
                {error && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg text-sm mb-4">
                        {error}
                    </div>
                )}

                <div className="bg-tech-surface p-6 rounded-lg border border-tech-border space-y-4">
                  <div>
                    <span className="text-xs font-bold text-tech-muted uppercase block mb-1">Name</span>
                    <p className="text-tech-text">{formData.firstName} {formData.lastName}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-tech-muted uppercase block mb-1">Contact</span>
                    <p className="text-tech-text">{formData.email} • {formData.phone}</p>
                    <p className="text-tech-text">{formData.city}, {formData.state}</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-tech-muted uppercase block mb-1">Issue</span>
                    <p className="text-tech-text font-medium">{formData.issueType}</p>
                    <p className="text-tech-muted text-sm mt-2">{formData.description}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 pt-4">
                  <input 
                    type="checkbox" 
                    name="consent"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={handleCheckboxChange}
                    className="mt-1 w-4 h-4 text-tech-primary border-gray-300 rounded focus:ring-tech-primary"
                  />
                  <label htmlFor="consent" className="text-sm text-tech-muted leading-relaxed">
                    I understand that submitting this form does not create an attorney-client relationship. I agree to be contacted by the Law Office of David Friedman regarding this inquiry.
                  </label>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-tech-border">
              {step > 1 ? (
                <button 
                  type="button"
                  onClick={() => setStep(prev => prev - 1)}
                  className="text-tech-muted hover:text-tech-text font-medium text-sm transition-colors"
                >
                  ← Back
                </button>
              ) : (
                <div></div>
              )}
              
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className={isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
              >
                {isSubmitting ? 'Submitting...' : step === 3 ? 'Submit Request' : 'Next Step'}
              </Button>
            </div>

          </form>
        </div>

        {/* Footer Minimal */}
        <div className="mt-16 text-center w-full">
            <p className="text-[10px] text-tech-muted uppercase tracking-widest">
                © {new Date().getFullYear()} Law Office of David Friedman, PLLC
            </p>
        </div>
      </div>
    </div>
  );
};

export default IntakePage;
