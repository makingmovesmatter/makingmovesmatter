'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaHome,
  FaCheckCircle,
  FaPhoneAlt,
  FaShieldAlt,
  FaArrowRight,
  FaChevronDown
} from 'react-icons/fa';

const defaultServices = [
  'Local Moving',
  'Long Distance Moving',
  'Commercial Services',
  'Packing Services',
  'Storage',
  'Furniture Assembly',
  'Furniture Moving',
  'Large Item Moving',
  'Hot Tub Relocation'
];

const formatPhoneNumber = (val) => {
  const digits = val.replace(/\D/g, '').slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const Quote = ({ onSuccess, isModal = false }) => {
  const scrollRef = useRef(null);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const [estimateType, setEstimateType] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [servicesList, setServicesList] = useState(defaultServices);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    zeepcode: '',
    destinationZip: '',
    moveDate: '',
    origin: '',
    destination: '',
    service: 'Local Moving',
    message: ''
  });

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    // Show down arrow if more than 25px remain to be scrolled
    setCanScrollDown(scrollHeight - (scrollTop + clientHeight) > 25);
  }, []);

  const handleScrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 140, behavior: 'smooth' });
    }
  };

  const setQuickDate = (daysFromNow) => {
    const d = new Date();
    d.setDate(d.getDate() + daysFromNow);
    const dateStr = d.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, moveDate: dateStr }));
    if (errors.moveDate) {
      setErrors((prev) => ({ ...prev, moveDate: '' }));
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services');
        if (Array.isArray(response.data) && response.data.length > 0) {
          setServicesList(response.data.map((s) => s.name || s));
        }
      } catch {
        setServicesList(defaultServices);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    // Check initial scroll state and on resize
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [checkScroll, formData, isSuccess]);

  // Validation functions
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstname':
        if (!value?.trim()) error = 'First name required';
        else if (value.trim().length < 2) error = 'Min 2 characters';
        else if (value.trim().length > 35) error = 'Max 35 characters';
        break;
      case 'lastname':
        if (!value?.trim()) error = 'Last name required';
        else if (value.trim().length < 2) error = 'Min 2 characters';
        else if (value.trim().length > 35) error = 'Max 35 characters';
        break;
      case 'phone':
        if (!value) error = 'Phone required';
        else {
          const clean = value.replace(/\D/g, '');
          if (clean.length < 7 || clean.length > 15) error = 'Valid phone required';
        }
        break;
      case 'email':
        if (!value) error = 'Email required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email';
        break;
      case 'origin':
        if (!value?.trim()) error = 'Origin address required';
        else if (value.trim().length < 3) error = 'Min 3 characters';
        break;
      case 'destination':
        if (!value?.trim()) error = 'Destination required';
        else if (value.trim().length < 3) error = 'Min 3 characters';
        break;
      case 'zeepcode':
        if (!value?.trim()) error = 'ZIP required';
        else if (value.trim().length < 3) error = 'Valid ZIP required';
        break;
      case 'destinationZip':
        if (value?.trim() && value.trim().length < 3) error = 'Valid ZIP required';
        break;
      case 'moveDate':
        if (!value) error = 'Move date required';
        else {
          const selected = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (selected < today) error = 'Cannot be in past';
        }
        break;
      case 'service':
        if (!value) error = 'Select a service';
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, phone: formatted }));
      const error = validateField('phone', formatted);
      setErrors((prev) => ({ ...prev, phone: error }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const allErrors = {
      firstname: validateField('firstname', formData.firstname),
      lastname: validateField('lastname', formData.lastname),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
      origin: validateField('origin', formData.origin),
      zeepcode: validateField('zeepcode', formData.zeepcode),
      destination: validateField('destination', formData.destination),
      destinationZip: validateField('destinationZip', formData.destinationZip),
      moveDate: validateField('moveDate', formData.moveDate),
      service: validateField('service', formData.service),
    };
    setErrors(allErrors);
    return !Object.values(allErrors).some(Boolean);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) {
      // Scroll to top of form container if errors exist
      if (scrollRef.current) {
        scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    setIsLoading(true);
    setSubmitError('');

    const fullMessage = formData.message ? `Notes: ${formData.message}` : '';

    try {
      await axios.post('/api/estimate', {
        estimateType,
        ...formData,
        destinationZip: formData.destinationZip || formData.zeepcode || '',
        message: fullMessage
      });

      setIsSuccess(true);

      if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
          event: 'bookingSuccess',
          bookingDetails: {
            estimateType,
            firstname: formData.firstname,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            zipCode: formData.zeepcode,
            destinationZip: formData.destinationZip || formData.zeepcode || '',
            service: formData.service,
            origin: formData.origin,
            destination: formData.destination,
            moveDate: formData.moveDate,
            message: fullMessage,
          }
        });
      }
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitError('We encountered an issue submitting your request. Please call (480) 934-8218 for immediate assistance.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl border border-neutral-200 overflow-hidden text-neutral-900 shadow-none">
      {/* Top Banner (Fixed above scrollable form) */}
      <div className="bg-[var(--accent-color)] text-white p-4 sm:p-5 border-b border-orange-400/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-2xl font-semibold text-white mt-1 leading-snug">
              Get Your Free Moving Quote
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-white bg-white/20 px-3 py-1.5 rounded-full border border-white/30">
            <FaShieldAlt className="text-white" />
            <span>Guaranteed Flat Rates</span>
          </div>
        </div>
      </div>

      {/* Main Body Content with Constant Height & Directional Scroll */}
      <div className="relative">
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="p-4 sm:p-5 quote-scroll overscroll-contain"
        >
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-4 sm:py-6"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl">
                <FaCheckCircle />
              </div>

              <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
                Estimate Request Received!
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm max-w-md mx-auto mb-5">
                Thank you, <strong className="text-gray-900">{formData.firstname}</strong>! Our relocation coordinators are preparing your personalized flat-rate estimate for <strong className="text-gray-900">{formData.moveDate}</strong>.
              </p>

              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-left max-w-md mx-auto mb-5 space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-semibold text-gray-800">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-200 pb-1.5">
                  <span className="text-gray-500">From / To:</span>
                  <span className="font-semibold text-gray-800 truncate max-w-[200px]">
                    {formData.origin} ({formData.zeepcode}) → {formData.destination} {formData.destinationZip ? `(${formData.destinationZip})` : ''}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Scheduled Date:</span>
                  <span className="font-semibold text-gray-800">{formData.moveDate}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 max-w-md mx-auto mb-5 text-left">
                <p className="text-xs text-orange-950 font-semibold mb-1">Need Immediate Confirmation?</p>
                <p className="text-xs text-orange-900 leading-snug">
                  Call our Mesa dispatch line directly to lock in your moving truck and preferred crew:
                </p>
                <a
                  href="tel:4809348218"
                  className="mt-2.5 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[var(--accent-color)] text-white font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity"
                >
                  <FaPhoneAlt className="text-xs text-white" />
                  <span>Call (480) 934-8218</span>
                </a>
              </div>

              {onSuccess && (
                <button
                  type="button"
                  onClick={onSuccess}
                  className="px-6 py-2.5 rounded-xl bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold text-xs sm:text-sm cursor-pointer transition-opacity"
                >
                  Done / Close Window
                </button>
              )}
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-3.5">
              
              {/* 1. YOUR CONTACT INFORMATION (FIRST AND LAST NAME IN 1 ROW ON MOBILE, PHONE AND EMAIL IN ANOTHER) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                  1. Your Contact Information <span className="text-[var(--accent-color)]">*</span>
                </label>

                {/* First Name & Last Name - 1 Row on Mobile and Desktop */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className={`w-full px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                        errors.firstname ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.firstname && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.firstname}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      className={`w-full px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                        errors.lastname ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.lastname && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.lastname}</p>}
                  </div>
                </div>

                {/* Phone & Email - Another Row on Mobile and Desktop */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FaPhoneAlt className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs hidden sm:block" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(480) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full sm:pl-8 px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                          errors.phone ? 'border-red-500' : 'border-neutral-300'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                        errors.email ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                    {errors.email && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* 2. MOVE CATEGORY SELECTOR */}
              <div className="pt-2 border-t border-neutral-200">
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
                  2. Move Category <span className="text-[var(--accent-color)]">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setEstimateType('home')}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs sm:text-sm transition-all cursor-pointer ${
                      estimateType === 'home'
                        ? 'border-[var(--accent-color)] bg-orange-50 text-[#011234]'
                        : 'border-neutral-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <FaHome className={estimateType === 'home' ? 'text-[var(--accent-color)]' : 'text-gray-400'} />
                    <span>Residential</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEstimateType('business')}
                    className={`py-2 px-3 rounded-xl border flex items-center justify-center gap-2 text-xs sm:text-sm  transition-all cursor-pointer ${
                      estimateType === 'business'
                        ? 'border-[var(--accent-color)] bg-orange-50 text-[#011234]'
                        : 'border-neutral-200 bg-white text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <FaBuilding className={estimateType === 'business' ? 'text-[var(--accent-color)]' : 'text-gray-400'} />
                    <span>Commercial</span>
                  </button>
                </div>
              </div>

              {/* 3. ORIGIN ADDRESS & ORIGIN ZIP IN ONE ROW */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1 truncate">
                    Moving From (Address or City) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs hidden sm:block" />
                    <input
                      type="text"
                      name="origin"
                      placeholder="e.g. 123 Main St, Mesa"
                      value={formData.origin}
                      onChange={handleInputChange}
                      className={`w-full sm:pl-8 px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                        errors.origin ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                  </div>
                  {errors.origin && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.origin}</p>}
                </div>

                <div className="col-span-1">
                  <label className="block text-xs font-semibold text-gray-700 mb-1 truncate">
                    Origin ZIP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="zeepcode"
                    placeholder="85201"
                    value={formData.zeepcode}
                    onChange={handleInputChange}
                    maxLength={10}
                    className={`w-full px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                      errors.zeepcode ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                  {errors.zeepcode && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.zeepcode}</p>}
                </div>
              </div>

              {/* 4. DESTINATION ADDRESS & DESTINATION ZIP IN ONE ROW */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1 truncate">
                    Moving To (Destination) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[var(--accent-color)] text-xs hidden sm:block" />
                    <input
                      type="text"
                      name="destination"
                      placeholder="e.g. Phoenix, AZ"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className={`w-full sm:pl-8 px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                        errors.destination ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    />
                  </div>
                  {errors.destination && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.destination}</p>}
                </div>

                <div className="col-span-1">
                  <label className="block text-xs font-semibold text-gray-700 mb-1 truncate">
                    Dest. ZIP <span className="text-gray-400 font-normal hidden sm:inline">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    name="destinationZip"
                    placeholder="85260"
                    value={formData.destinationZip}
                    onChange={handleInputChange}
                    maxLength={10}
                    className={`w-full px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                      errors.destinationZip ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                  {errors.destinationZip && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.destinationZip}</p>}
                </div>
              </div>

              {/* 5. TARGET MOVING DATE & PRIMARY SERVICE NEEDED (ONE ROW ON DESKTOP, COLUMN ON MOBILE) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                {/* Target Moving Date */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Target Moving Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-2.5 sm:px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 ${
                      errors.moveDate ? 'border-red-500' : 'border-neutral-300'
                    }`}
                  />
                  {/* Quick Select Date Buttons */}
                  <div className="flex flex-wrap items-center gap-1 pt-1.5">
                    <span className="text-[10px] font-medium text-gray-400 mr-0.5">Quick:</span>
                    <button
                      type="button"
                      onClick={() => setQuickDate(3)}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-neutral-100 hover:bg-orange-100 text-gray-700 hover:text-orange-950 border border-neutral-200 transition-colors cursor-pointer"
                    >
                      3 Days
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(7)}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-neutral-100 hover:bg-orange-100 text-gray-700 hover:text-orange-950 border border-neutral-200 transition-colors cursor-pointer"
                    >
                      Next Wk
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(14)}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-neutral-100 hover:bg-orange-100 text-gray-700 hover:text-orange-950 border border-neutral-200 transition-colors cursor-pointer"
                    >
                      2 Wks
                    </button>
                    <button
                      type="button"
                      onClick={() => setQuickDate(30)}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-neutral-100 hover:bg-orange-100 text-gray-700 hover:text-orange-950 border border-neutral-200 transition-colors cursor-pointer"
                    >
                      1 Mo
                    </button>
                  </div>
                  {errors.moveDate && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.moveDate}</p>}
                </div>

                {/* Primary Service Needed - Custom Styled Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Primary Service Needed <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full appearance-none px-3 py-2 text-xs sm:text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 font-medium pr-8 cursor-pointer ${
                        errors.service ? 'border-red-500' : 'border-neutral-300'
                      }`}
                    >
                      <option value="" disabled>Select primary service...</option>
                      {servicesList.map((serviceName, idx) => (
                        <option key={idx} value={serviceName}>
                          {serviceName}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                      <FaChevronDown className="text-xs" />
                    </div>
                  </div>
                 
                  {errors.service && <p className="text-[10px] sm:text-[11px] text-red-500 mt-0.5">{errors.service}</p>}
                </div>
              </div>

              {/* 6. INVENTORY NOTES OR ACCESS DETAILS (OPTIONAL) */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Inventory Notes or Access Details <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="e.g. 2nd floor stairs, elevator, piano, fragile items..."
                  className="w-full px-3 py-2 text-xs sm:text-sm border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] bg-white text-gray-900 placeholder-gray-400"
                />
              </div>

              {submitError && (
                <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {submitError}
                </div>
              )}

              {/* 7. SUBMIT BUTTON */}
              <div className="pt-1.5 pb-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-xl bg-[var(--accent-color)] hover:opacity-90 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-opacity disabled:opacity-60 shadow-none"
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting Estimate...
                    </span>
                  ) : (
                    <>
                      <span>Get Free Moving Quote</span>
                      <FaArrowRight className="text-xs text-white" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Directional Scroll Cue Indicator (shows when user can scroll down) */}
        {!isSuccess && canScrollDown && (
          <div className="pointer-events-none absolute bottom-2 left-0 right-0 flex justify-center z-10 transition-opacity duration-300">
            <button
              type="button"
              onClick={handleScrollDown}
              className="pointer-events-auto flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur border border-neutral-300 text-gray-800 text-[11px] font-semibold rounded-full hover:bg-neutral-50 hover:border-neutral-400 transition-all cursor-pointer shadow-sm animate-bounce"
              aria-label="Scroll down for more fields"
            >
              <span>Scroll down</span>
              <FaChevronDown className="text-[10px] text-[var(--accent-color)]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quote;
