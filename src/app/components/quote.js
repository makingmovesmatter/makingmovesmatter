'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Quote = () => {
  const [estimateType, setEstimateType] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [services, setServices] = useState([]);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Updated form data structure to match the model
  const [formData, setFormData] = useState({
    firstname: '', 
    lastname: '', 
    email: '', 
    phone: '', 
    zeepcode: '',
    moveDate: '', 
    origin: '', 
    destination: '', 
    service: '', 
    message: ''
  });

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [inView, controls]);

  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        setServices(response.data);
      } catch {
        setServices([
          { id: 1, name: 'Commercial Services' },
          { id: 2, name: 'Furniture Assembly' },
          { id: 3, name: 'Furniture Moving' },
          { id: 4, name: 'Large Item Moving' },
          { id: 5, name: 'Hot Tub Relocation' },
          { id: 6, name: 'Long Distance Moving' },
          { id: 7, name: 'Local Moving' },
          { id: 8, name: 'Packing Services' },
          { id: 9, name: 'Storage' }
        ]);
      }
    };
    fetchServices();
  }, []);

  // Updated validation functions
  const validateFirstName = firstname => {
    if (!firstname.trim()) return 'First name is required';
    if (!/^[a-zA-Z\s'-]+$/.test(firstname)) return 'Invalid name format';
    if (firstname.length < 2) return 'First name is too short';
    if (firstname.length > 25) return 'First name is too long';
    return '';
  };

  const validateLastName = lastname => {
    if (!lastname.trim()) return 'Last name is required';
    if (!/^[a-zA-Z\s'-]+$/.test(lastname)) return 'Invalid name format';
    if (lastname.length < 2) return 'Last name is too short';
    if (lastname.length > 25) return 'Last name is too long';
    return '';
  };

  const validateEmail = email => {
    if (!email) return 'Email is required';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? '' : 'Invalid email format';
  };

  const validatePhone = phone => {
    if (!phone) return 'Phone number is required';
    if(phone.length < 7) return 'Minimum number is 7';
    if(phone.length > 15) return 'Maximum number is 15';
    const re = /^\+?(\d.*){7,15}$/;
    return re.test(phone.replace(/[\s-]/g, '')) ? '' : 'Invalid phone number';
  };

  const validatezeepcode = zeepcode => {
    if (!zeepcode.trim()) return 'Zeepcode is required';
    return zeepcode.length < 3 ? 'Zeepcode is too short' : '';
  };

  const validateDate = date => {
    if (!date) return 'Move date is required';
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate < today ? 'Date cannot be in the past' : '';
  };

  const validateAddress = address => {
    if (!address.trim()) return 'Address is required';
    return address.length < 5 ? 'Address is too short' : '';
  };

  const validateService = service => !service ? 'Service is required' : '';

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    let error = '';
    if (name === 'firstname') error = validateFirstName(value);
    if (name === 'lastname') error = validateLastName(value);
    if (name === 'email') error = validateEmail(value);
    if (name === 'phone') error = validatePhone(value);
    if (name === 'zeepcode') error = validatezeepcode(value);
    if (name === 'moveDate') error = validateDate(value);
    if (['origin', 'destination'].includes(name)) error = validateAddress(value);
    if (name === 'service') error = validateService(value);

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {
      firstname: validateFirstName(formData.firstname),
      lastname: validateLastName(formData.lastname),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      zeepcode: validatezeepcode(formData.zeepcode),
      moveDate: validateDate(formData.moveDate),
      origin: validateAddress(formData.origin),
      destination: validateAddress(formData.destination),
      service: validateService(formData.service)
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setSubmissionStatus(null);
    
    try {
      const res = await axios.post('/api/estimate', {
        estimateType,
        ...formData
      });
      
      setSubmissionStatus('success');
      setSubmissionMessage('Thank you! We\'ll be in touch.');

        if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'bookingSuccess',
          bookingDetails: {
            estimateType,
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            origin: formData.origin,
            destination: formData.destination,
            moveDate: formData.moveDate,
          }
        });
      }


      // Reset form with correct field names
      setFormData({ 
        firstname: '', 
        lastname: '', 
        email: '', 
        phone: '', 
        zeepcode: '',
        moveDate: '', 
        origin: '', 
        destination: '', 
        service: '', 
        message: '' 
      });
      
    } catch (err) {
      setSubmissionStatus('error');
      setSubmissionMessage('We encountered an issue. Please try again or contact support.');
      console.error('Submission error:', err);
      
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={quoteVariants}
      className="w-full"
    >
      <div className="bg-white rounded-2xl  main-index quoteContainer">
        <div className="border border-[var(--primary)] rounded-2xl p-8 bg-[#0000003d] dark:bg-transparent backdrop-blur-3xl shadow-2xl">

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 quote-form" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstname" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  First Name<span className="iconColor">*</span>
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 border ${errors.firstname ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400`}
                />
                {errors.firstname && <p className="mt-1 text-xs iconColor">{errors.firstname}</p>}
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastname" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Last Name<span className="iconColor">*</span>
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last name"
                  value={formData.lastname}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 border ${errors.lastname ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400`}
                />
                {errors.lastname && <p className="mt-1 text-xs iconColor">{errors.lastname}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Email<span className="iconColor">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent  bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400`}
                />
                {errors.email && <p className="mt-1 text-xs iconColor">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Phone<span className="iconColor">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400`}
                />
                {errors.phone && <p className="mt-1 text-xs iconColor">{errors.phone}</p>}
              </div>

              {/* zeepcode */}
              <div>
                <label htmlFor="zeepcode" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Zeep code<span className="iconColor">*</span>
                </label>
                <input
                  type="text"
                  id="zeepcode"
                  name="zeepcode"
                  placeholder="Zip code"
                  value={formData.zeepcode}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 border ${errors.zeepcode ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400`}
                />
                {errors.zeepcode && <p className="mt-1 text-xs iconColor">{errors.zeepcode}</p>}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="moveDate" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Move Date<span className="iconColor">*</span>
                </label>
                <input
                  type="date"
                  id="moveDate"
                  name="moveDate"
                  value={formData.moveDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full p-3 border ${errors.moveDate ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100`}
                />
                {errors.moveDate && <p className="mt-1 text-xs iconColor">{errors.moveDate}</p>}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Service Needed<span className="iconColor">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className={`w-full p-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100`}
                >
                  <option value="" className='bg-white/90 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100'>Select service</option>
                  {services.map(service => (
                    <option className='bg-white/90 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100' key={service.id} value={service.name}>{service.name}</option>
                  ))}
                </select>
                {errors.service && <p className="mt-1 text-xs iconColor">{errors.service}</p>}
              </div>

              {/* Type */}
              <div>
                <label htmlFor="type" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Moving Type<span className="iconColor">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={estimateType}
                  onChange={(e) => setEstimateType(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100"
                >
                  <option value="home" className='bg-white/90 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100'>Home</option>
                  <option value="business" className='bg-white/90 dark:bg-gray-800/70 text-gray-900 dark:text-gray-100'>Business</option>
                </select>
              </div>

              {/* From */}
              <div>
                <label htmlFor="origin" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Moving From<span className="iconColor">*</span>
                </label>
                <input
                  type="text"
                  id="origin"
                  name="origin"
                  value={formData.origin}
                  onChange={handleInputChange}
                  required
                  placeholder="Current full address"
                  className={`w-full p-3 border ${errors.origin ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400`}
                />
                {errors.origin && <p className="mt-1 text-xs iconColor">{errors.origin}</p>}
              </div>

              {/* To */}
              <div>
                <label htmlFor="destination" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Moving To<span className="iconColor">*</span>
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  required
                  placeholder="Destination full address"
                  className={`w-full p-3 border ${errors.destination ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400`}
                />
                {errors.destination && <p className="mt-1 text-xs iconColor">{errors.destination}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="3"
                placeholder="Special requirements, inventory details, etc."
                className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--accent-color)] focus:border-transparent bg-transparent dark:text-gray-100 placeholder-gray-400"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn btn-primary hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                'Get Free Quote Now'
              )}
            </button>

            {/* Status Message */}
            {submissionStatus && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-5 p-4 rounded-xl text-sm font-medium flex items-center ${
                  submissionStatus === 'success'
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}
              >
                {submissionStatus === 'success' ? (
                  <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                )}
                <p>{submissionMessage}</p>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;