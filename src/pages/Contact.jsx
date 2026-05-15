import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { servicesData } from '../data/services';
import SEO from '../components/common/SEO';

export default function Contact() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm();
  
  const selectedCategory = watch('serviceCategory');

  const onSubmit = async (data) => {
    // Mock API
    await new Promise(r => setTimeout(r, 1000));
    setSubmitted(true);
  };

  const nextStep = async () => {
    let fieldsToValidate = [];
    if (step === 1) fieldsToValidate = ['fullName', 'email', 'phone'];
    if (step === 2) fieldsToValidate = ['serviceCategory', 'budget'];
    
    const isStepValid = await trigger(fieldsToValidate);
    if (isStepValid) setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-dark">
        <SEO title="Thank You" />
        <div className="bg-dark-light p-12 rounded-3xl border border-gray-900 text-center max-w-md">
          <div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-8 text-4xl border border-white/20">✓</div>
          <h2 className="text-3xl font-bold mb-4 text-white">Thank You!</h2>
          <p className="text-gray-400 mb-10 font-light leading-relaxed">We've received your project details. Our team will contact you within 24 hours.</p>
          <button onClick={() => window.location.href='/'} className="btn-primary w-full">Return Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-dark min-h-screen">
      <SEO title="Contact Us" description="Get a free consultation for your digital project." />
      
      <div className="bg-black text-white pt-32 pb-24 border-b border-gray-900">
        <div className="container-custom text-center">
          <h1 className="mb-6 tracking-tight">Let's Build Something <span className="text-gray-500">Amazing</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">Fill out the form below and we'll get back to you with a free consultation and project estimate.</p>
        </div>
      </div>

      <div className="container-custom py-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Section */}
          <div className="w-full lg:w-[60%] bg-dark-light rounded-3xl border border-gray-900 p-8 md:p-12 relative z-10">
            <div className="flex justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-900 -z-10 -translate-y-1/2 rounded-full"></div>
              <div className="absolute top-1/2 left-0 h-1 bg-white -z-10 -translate-y-1/2 transition-all duration-500 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-500 ${step >= i ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-gray-900 text-gray-600 border border-gray-800'}`}>
                  {i}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-2xl font-bold mb-8 text-white">1. Contact Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wider">Full Name *</label>
                        <input {...register("fullName", { required: "Name is required", minLength: 2 })} className="w-full p-4 border border-gray-800 rounded-xl bg-black text-white focus:border-white focus:ring-1 focus:ring-white transition-colors outline-none" />
                        {errors.fullName && <p className="text-red-400 text-sm mt-2">{errors.fullName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wider">Email Address *</label>
                        <input type="email" {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } })} className="w-full p-4 border border-gray-800 rounded-xl bg-black text-white focus:border-white focus:ring-1 focus:ring-white transition-colors outline-none" />
                        {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wider">Phone Number *</label>
                        <input type="tel" {...register("phone", { required: "Phone is required" })} className="w-full p-4 border border-gray-800 rounded-xl bg-black text-white focus:border-white focus:ring-1 focus:ring-white transition-colors outline-none" />
                        {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone.message}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-2xl font-bold mb-8 text-white">2. Project Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wider">Primary Service *</label>
                        <select {...register("serviceCategory", { required: "Please select a service" })} className="w-full p-4 border border-gray-800 rounded-xl bg-black text-white focus:border-white focus:ring-1 focus:ring-white transition-colors outline-none appearance-none">
                          <option value="">Select a category</option>
                          {servicesData.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                        </select>
                        {errors.serviceCategory && <p className="text-red-400 text-sm mt-2">{errors.serviceCategory.message}</p>}
                      </div>
                      {selectedCategory && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                          <label className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wider">Specific Need</label>
                          <select {...register("specificService")} className="w-full p-4 border border-gray-800 rounded-xl bg-black text-white focus:border-white focus:ring-1 focus:ring-white transition-colors outline-none appearance-none">
                            <option value="">Select specific service (Optional)</option>
                            {servicesData.find(s => s.id.toString() === selectedCategory.toString())?.subServices.map(sub => (
                              <option key={sub.id} value={sub.id}>{sub.name}</option>
                            ))}
                          </select>
                        </motion.div>
                      )}
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wider">Estimated Budget *</label>
                        <select {...register("budget", { required: "Please select a budget range" })} className="w-full p-4 border border-gray-800 rounded-xl bg-black text-white focus:border-white focus:ring-1 focus:ring-white transition-colors outline-none appearance-none">
                          <option value="">Select budget</option>
                          <option value="<10k">Under $10,000</option>
                          <option value="10k-50k">$10,000 - $50,000</option>
                          <option value="50k-100k">$50,000 - $100,000</option>
                          <option value="100k+">$100,000+</option>
                        </select>
                        {errors.budget && <p className="text-red-400 text-sm mt-2">{errors.budget.message}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="text-2xl font-bold mb-8 text-white">3. Final Details</h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-400 uppercase tracking-wider">Project Description *</label>
                        <textarea rows="6" {...register("description", { required: "Description is required", minLength: { value: 20, message: "Please provide more detail" } })} placeholder="Tell us about your goals, timeline, and requirements..." className="w-full p-4 border border-gray-800 rounded-xl bg-black text-white focus:border-white focus:ring-1 focus:ring-white transition-colors outline-none resize-none"></textarea>
                        {errors.description && <p className="text-red-400 text-sm mt-2">{errors.description.message}</p>}
                      </div>
                      <div className="flex items-start mt-4 bg-black/50 p-4 rounded-xl border border-gray-900">
                        <input type="checkbox" id="consent" {...register("consent", { required: "You must agree to the terms" })} className="mt-1 mr-4 cursor-pointer w-5 h-5 accent-white" />
                        <label htmlFor="consent" className="text-sm text-gray-400 cursor-pointer leading-relaxed">I agree to the privacy policy and consent to being contacted regarding this inquiry. *</label>
                      </div>
                      {errors.consent && <p className="text-red-400 text-sm mt-2">{errors.consent.message}</p>}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-10 pt-8 border-t border-gray-900 flex justify-between">
                {step > 1 ? (
                  <button type="button" onClick={prevStep} className="btn-secondary px-10">Back</button>
                ) : <div></div>}
                
                {step < 3 ? (
                  <button type="button" onClick={nextStep} className="btn-primary px-10">Next Step</button>
                ) : (
                  <button type="submit" className="btn-primary px-10">Submit Inquiry</button>
                )}
              </div>
            </form>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-[40%]">
            <div className="bg-black text-white rounded-3xl p-8 md:p-12 h-full border border-gray-900 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-white">Contact Info</h3>
                <p className="text-gray-400 mb-12 font-light leading-relaxed text-lg">Reach out directly or visit our office. We're always open to discussing new and exciting projects.</p>
                
                <div className="space-y-10 relative z-10">
                  <div className="group">
                    <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Email Us</h4>
                    <p className="text-xl font-medium text-white group-hover:text-gray-300 transition-colors">hello@heizen.work</p>
                  </div>
                  <div className="group">
                    <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Call Us</h4>
                    <p className="text-xl font-medium text-white group-hover:text-gray-300 transition-colors">+1 (555) 123-4567</p>
                  </div>
                  <div className="group">
                    <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Headquarters</h4>
                    <p className="text-xl font-medium text-white leading-relaxed group-hover:text-gray-300 transition-colors">100 Innovation Drive<br/>Tech City, CA 94000</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-gray-900 relative z-10">
                <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-bold">Working Hours</h4>
                <p className="text-gray-300 font-light">Mon-Fri: 9AM - 6PM (PST)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
