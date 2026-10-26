'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTruck,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBoxes,
  FaBuilding,
  FaHome,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
  FaPhoneAlt,
  FaShieldAlt,
  FaClock,
  FaDollarSign,
  FaLock
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

const moveSizes = [
  { id: '1bed', label: 'Studio / 1 Bed', desc: 'Apt or small condo' },
  { id: '2-3bed', label: '2 - 3 Bedrooms', desc: 'Standard home/apt' },
  { id: '4+bed', label: '4+ Bedrooms', desc: 'Large single family' },
  { id: 'office', label: 'Office / Commercial', desc: 'Workspace / Business' },
  { id: 'few_items', label: 'Few Large Items', desc: 'Furniture / Heavy piece' }
];

const specialtyOptions = [
  'Upright / Grand Piano',
  'Heavy Gun Safe',
  'Pool Table',
  'Fragile Fine Art / Antiques',
  'Commercial Fitness Equipment'
];

const Quote = ({ onSuccess, isModal = false }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [estimateType, setEstimateType] = useState('home');
  const [moveSize, setMoveSize] = useState('2-3bed');
  const [includePacking, setIncludePacking] = useState(false);
  const [includeStorage, setIncludeStorage] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [preferredContact, setPreferredContact] = useState('Phone Call');
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

  const setQuickDate = (daysFromNow) => {
    const d = new Date();
    d.setDate(d.getDate() + daysFromNow);
    const dateStr = d.toISOString().split('T')[0];
    setFormData((prev) => ({ ...prev, moveDate: dateStr }));
    if (errors.moveDate) {
      setErrors((prev) => ({ ...prev, moveDate: '' }));
    }
  };

  const toggleSpecialty = (item) => {
    setSelectedSpecialties((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
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

  // Validation functions
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'origin':
        if (!value.trim()) error = 'Origin address or city is required';
        else if (value.trim().length < 5) error = 'Address must be at least 5 characters';
        break;
      case 'destination':
        if (!value.trim()) error = 'Destination address or city is required';
        else if (value.trim().length < 5) error = 'Address must be at least 5 characters';
        break;
      case 'destinationZip':
        if (!value.trim()) error = 'Destination ZIP / post code is required';
        else if (value.trim().length < 3) error = 'Valid ZIP / post code is required';
        break;
      case 'zeepcode':
        if (!value.trim()) error = 'Origin ZIP code is required';
        else if (value.trim().length < 3) error = 'Valid ZIP code is required';
        break;
      case 'moveDate':
        if (!value) error = 'Move date is required';
        else {
          const selected = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (selected < today) error = 'Date cannot be in the past';
        }
        break;
      case 'service':
        if (!value) error = 'Please select a service';
        break;
      case 'firstname':
        if (!value.trim()) error = 'First name is required';
        else if (value.trim().length < 2) error = 'Min 2 characters';
        else if (value.trim().length > 25) error = 'Max 25 characters';
        break;
      case 'lastname':
        if (!value.trim()) error = 'Last name is required';
        else if (value.trim().length < 2) error = 'Min 2 characters';
        else if (value.trim().length > 25) error = 'Max 25 characters';
        break;
      case 'phone':
        if (!value) error = 'Phone number is required';
        else {
          const clean = value.replace(/[\s-()]/g, '');
          if (clean.length < 7 || clean.length > 15) error = 'Valid phone (7-15 digits) required';
        }
        break;
      case 'email':
        if (!value) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Invalid email format';
        break;
      default:
        break;
    }
    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateStep1 = () => {
    const stepErrors = {
      origin: validateField('origin', formData.origin),
      zeepcode: validateField('zeepcode', formData.zeepcode),
      destination: validateField('destination', formData.destination),
      destinationZip: validateField('destinationZip', formData.destinationZip),
      moveDate: validateField('moveDate', formData.moveDate),
    };
    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return !Object.values(stepErrors).some(Boolean);
  };

  const validateStep2 = () => {
    const stepErrors = {
      service: validateField('service', formData.service),
    };
    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return !Object.values(stepErrors).some(Boolean);
  };

  const validateStep3 = () => {
    const stepErrors = {
      firstname: validateField('firstname', formData.firstname),
      lastname: validateField('lastname', formData.lastname),
      email: validateField('email', formData.email),
      phone: validateField('phone', formData.phone),
    };
    setErrors((prev) => ({ ...prev, ...stepErrors }));
    return !Object.values(stepErrors).some(Boolean);
  };

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsLoading(true);
    setSubmitError('');

    // Combine size, add-ons, and notes into message for dispatching
    const sizeNote = `Move Size: ${moveSizes.find((s) => s.id === moveSize)?.label || moveSize}`;
    const addons = [];
    if (includePacking) addons.push('Professional Packing Needed');
    if (includeStorage) addons.push('Climate-Controlled Storage Needed');
    if (isUrgent) addons.push('URGENT MOVE: Priority Dispatch Needed within 48-72h');
    if (selectedSpecialties.length > 0) addons.push(`Specialty Items: ${selectedSpecialties.join(', ')}`);
    if (preferredContact) addons.push(`Preferred Contact: ${preferredContact}`);

    const fullMessage = [
      sizeNote,
      addons.length > 0 ? `Add-ons: ${addons.join(' | ')}` : '',
      formData.message ? `Notes: ${formData.message}` : ''
    ].filter(Boolean).join(' || ');

    try {
      await axios.post('/api/estimate', {
        estimateType,
        ...formData,
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
            destinationZip: formData.destinationZip,
            service: formData.service,
            origin: formData.origin,
            destination: formData.destination,
            moveDate: formData.moveDate,
            moveSize,
            includePacking,
            includeStorage,
            isUrgent,
            preferredContact,
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
    <div className="w-full bg-white rounded-2xl border border-neutral-200 overflow-hidden text-neutral-900">
      {/* Top Banner / Progress Indicator */}
      <div className="bg-[var(--accent-color)] text-white p-5 sm:p-6 border-b border-orange-400/30">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-white/20 border border-white/30 px-2.5 py-1 rounded-full">
              Instant Moving Quote Calculator
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5 leading-snug">
              Get Your Free Moving Quote
            </h3>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-xs text-white bg-white/20 px-3 py-1.5 rounded-full border border-white/30">
            <FaShieldAlt className="text-white" />
            <span>Guaranteed Flat Rates</span>
          </div>
        </div>

        {/* Step Progress Pills */}
        {!isSuccess && (
          <div className="grid grid-cols-3 gap-2 pt-2">
            {[
              { num: 1, title: 'Route & Date' },
              { num: 2, title: 'Service & Size' },
              { num: 3, title: 'Instant Quote' }
            ].map((step) => {
              const isActive = currentStep === step.num;
              const isPast = currentStep > step.num;
              return (
                <div key={step.num} className="flex flex-col gap-1.5">
                  <div
                    className={`h-1.5 rounded-full transition-all duration-300 ${isActive
                        ? 'bg-white'
                        : isPast
                          ? 'bg-emerald-300'
                          : 'bg-black/20'
                      }`}
                  />
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white">
                    <span
                      className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${isActive
                          ? 'bg-white text-[var(--accent-color)]'
                          : isPast
                            ? 'bg-emerald-300 text-slate-900'
                            : 'bg-black/20 text-white'
                        }`}
                    >
                      {isPast ? '✓' : step.num}
                    </span>
                    <span className="hidden sm:inline truncate">{step.title}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Main Body Content */}
      <div className="p-5 sm:p-7">
        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 sm:py-8"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl sm:text-4xl">
              <FaCheckCircle />
            </div>

            <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Estimate Request Received!
            </h4>
            <p className="text-gray-600 text-sm sm:text-base max-w-md mx-auto mb-6">
              Thank you, <strong className="text-gray-900">{formData.firstname}</strong>! Our relocation coordinators are preparing your personalized flat-rate estimate for <strong className="text-gray-900">{formData.moveDate}</strong>.
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-neutral-50 border border-neutral-200 text-left max-w-md mx-auto mb-6 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-gray-500">Service:</span>
                <span className="font-semibold text-gray-800">{formData.service}</span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-gray-500">From / To:</span>
                <span className="font-semibold text-gray-800 truncate max-w-[220px]">
                  {formData.origin} ({formData.zeepcode}) → {formData.destination} ({formData.destinationZip})
                </span>
              </div>
              <div className="flex justify-between border-b border-neutral-200 pb-2">
                <span className="text-gray-500">Move Size:</span>
                <span className="font-semibold text-gray-800">
                  {moveSizes.find((s) => s.id === moveSize)?.label || moveSize}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Scheduled Date:</span>
                <span className="font-semibold text-gray-800">{formData.moveDate}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 max-w-md mx-auto mb-6 text-left">
              <p className="text-xs text-orange-950 font-semibold mb-1">Need Immediate Confirmation?</p>
              <p className="text-xs text-orange-900 leading-snug">
                Call our Mesa dispatch line directly to lock in your moving truck and preferred crew:
              </p>
              <a
                href="tel:4809348218"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent-color)] text-white font-bold text-sm hover:opacity-95 transition-colors"
              >
                <FaPhoneAlt className="text-xs text-[#f99c00]" />
                Call (480) 934-8218
              </a>
            </div>

            {onSuccess && (
              <button
                type="button"
                onClick={onSuccess}
                className="px-8 py-3 rounded-xl bg-[#f99c00] hover:bg-[#e08b00] text-white font-bold text-sm cursor-pointer transition-colors"
              >
                Done / Close Window
              </button>
            )}
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <AnimatePresence mode="wait">
              {/* STEP 1: MOVE LOGISTICS */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Move Type Selector */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      1. Select Move Category <span className="text-[#f99c00]">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setEstimateType('home')}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2.5 text-sm font-bold transition-all cursor-pointer ${estimateType === 'home'
                            ? 'border-[#f99c00] bg-orange-50 text-[#011234]'
                            : 'border-neutral-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                      >
                        <FaHome className={estimateType === 'home' ? 'text-[#f99c00]' : 'text-gray-400'} />
                        Residential Move
                      </button>

                      <button
                        type="button"
                        onClick={() => setEstimateType('business')}
                        className={`p-3 rounded-xl border flex items-center justify-center gap-2.5 text-sm font-bold transition-all cursor-pointer ${estimateType === 'business'
                            ? 'border-[#f99c00] bg-orange-50 text-[#011234]'
                            : 'border-neutral-200 bg-white text-gray-700 hover:border-gray-300'
                          }`}
                      >
                        <FaBuilding className={estimateType === 'business' ? 'text-[#f99c00]' : 'text-gray-400'} />
                        Commercial
                      </button>
                    </div>
                  </div>

                  {/* Origin Address & ZIP */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Moving From (Address or City) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FaMapMarkerAlt className="absolute left-3.5 top-3.5 text-gray-400 text-sm" />
                        <input
                          type="text"
                          name="origin"
                          placeholder="e.g. 123 E Main St, Mesa, AZ"
                          value={formData.origin}
                          onChange={handleInputChange}
                          className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.origin ? 'border-red-500' : 'border-neutral-300'
                            }`}
                        />
                      </div>
                      {errors.origin && <p className="text-[11px] text-red-500 mt-1">{errors.origin}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Origin ZIP <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="zeepcode"
                        placeholder="e.g. 85201"
                        value={formData.zeepcode}
                        onChange={handleInputChange}
                        maxLength={10}
                        className={`w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.zeepcode ? 'border-red-500' : 'border-neutral-300'
                          }`}
                      />
                      {errors.zeepcode && <p className="text-[11px] text-red-500 mt-1">{errors.zeepcode}</p>}
                    </div>
                  </div>

                  {/* Destination Address & ZIP */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Moving To (Destination Address or City, State) <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FaMapMarkerAlt className="absolute left-3.5 top-3.5 text-[#f99c00] text-sm" />
                        <input
                          type="text"
                          name="destination"
                          placeholder="e.g. Phoenix, AZ or Scottsdale, AZ"
                          value={formData.destination}
                          onChange={handleInputChange}
                          className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.destination ? 'border-red-500' : 'border-neutral-300'
                            }`}
                        />
                      </div>
                      {errors.destination && <p className="text-[11px] text-red-500 mt-1">{errors.destination}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Destination ZIP <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="destinationZip"
                        placeholder="e.g. 85260"
                        value={formData.destinationZip}
                        onChange={handleInputChange}
                        maxLength={10}
                        className={`w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.destinationZip ? 'border-red-500' : 'border-neutral-300'
                          }`}
                      />
                      {errors.destinationZip && <p className="text-[11px] text-red-500 mt-1">{errors.destinationZip}</p>}
                    </div>
                  </div>

                  {/* Move Date & Quick Selectors */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Target Moving Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="moveDate"
                        value={formData.moveDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full pl-3 pr-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.moveDate ? 'border-red-500' : 'border-neutral-300'
                          }`}
                      />
                    </div>
                    {errors.moveDate && <p className="text-[11px] text-red-500 mt-1">{errors.moveDate}</p>}

                    {/* Quick Select Date Buttons */}
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      <span className="text-[11px] font-medium text-gray-500 mr-1">Quick Date:</span>
                      <button
                        type="button"
                        onClick={() => setQuickDate(3)}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-neutral-100 hover:bg-orange-100 text-gray-700 hover:text-orange-950 border border-neutral-200 transition-colors cursor-pointer"
                      >
                        In 3 Days
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuickDate(7)}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-neutral-100 hover:bg-orange-100 text-gray-700 hover:text-orange-950 border border-neutral-200 transition-colors cursor-pointer"
                      >
                        Next Week
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuickDate(14)}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-neutral-100 hover:bg-orange-100 text-gray-700 hover:text-orange-950 border border-neutral-200 transition-colors cursor-pointer"
                      >
                        In 2 Weeks
                      </button>
                      <button
                        type="button"
                        onClick={() => setQuickDate(30)}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-neutral-100 hover:bg-orange-100 text-gray-700 hover:text-orange-950 border border-neutral-200 transition-colors cursor-pointer"
                      >
                        Next Month
                      </button>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-full py-3.5 px-6 rounded-xl bg-[var(--accent-color)] hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm"
                    >
                      <span>Continue to Move Details</span>
                      <FaArrowRight className="text-xs text-[#f99c00]" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: SERVICE & SIZE */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      2. Primary Service Needed <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-2.5 text-sm border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 font-medium"
                    >
                      {servicesList.map((serviceName, idx) => (
                        <option key={idx} value={serviceName}>
                          {serviceName}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p className="text-[11px] text-red-500 mt-1">{errors.service}</p>}
                  </div>

                  {/* Move Size Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Estimated Move Size
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {moveSizes.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => setMoveSize(size.id)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${moveSize === size.id
                              ? 'border-[#f99c00] bg-orange-50 text-[#011234]'
                              : 'border-neutral-200 bg-white text-gray-700 hover:border-gray-300'
                            }`}
                        >
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className={`w-2 h-2 rounded-full ${moveSize === size.id ? 'bg-[#f99c00]' : 'bg-gray-300'}`} />
                            <span className="text-xs font-bold truncate">{size.label}</span>
                          </div>
                          <span className="text-[10px] text-gray-500 block truncate">{size.desc}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Business Add-Ons (Upsells) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setIncludePacking(!includePacking)}
                      className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${includePacking
                          ? 'border-[#f99c00] bg-orange-50/70 text-[#011234]'
                          : 'border-neutral-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center text-[10px] font-bold ${includePacking ? 'bg-[#f99c00] border-[#f99c00] text-white' : 'border-gray-300'
                        }`}>
                        {includePacking && '✓'}
                      </div>
                      <div>
                        <p className="text-xs font-bold">Include Full Packing Services</p>
                        <p className="text-[11px] text-gray-500">Boxes, bubble wrap & fragile care</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIncludeStorage(!includeStorage)}
                      className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all cursor-pointer ${includeStorage
                          ? 'border-[#f99c00] bg-orange-50/70 text-[#011234]'
                          : 'border-neutral-200 bg-white text-gray-700 hover:border-gray-300'
                        }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center text-[10px] font-bold ${includeStorage ? 'bg-[#f99c00] border-[#f99c00] text-white' : 'border-gray-300'
                        }`}>
                        {includeStorage && '✓'}
                      </div>
                      <div>
                        <p className="text-xs font-bold">Include Secure Storage</p>
                        <p className="text-[11px] text-gray-500">Climate-controlled 24/7 facility</p>
                      </div>
                    </button>
                  </div>

                  {/* Specialty Items checklist */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Specialty or Heavy Items? <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {specialtyOptions.map((item) => {
                        const isSelected = selectedSpecialties.includes(item);
                        return (
                          <button
                            key={item}
                            type="button"
                            onClick={() => toggleSpecialty(item)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${isSelected
                                ? 'bg-[var(--accent-color)] text-white border-[var(--accent-color)]'
                                : 'bg-white text-gray-700 border-neutral-300 hover:border-gray-400'
                              }`}
                          >
                            {isSelected ? '✓ ' : '+ '} {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Inventory Notes or Access Details <span className="text-gray-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="e.g. 2nd floor with stairs, tight hallway, specific delivery time window..."
                      className="w-full p-2.5 text-sm border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 placeholder-gray-400"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-1/3 py-3 px-4 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-gray-700 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <FaArrowLeft className="text-xs" />
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="w-2/3 py-3 px-4 rounded-xl bg-[var(--accent-color)] hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <span>Continue to Contact</span>
                      <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: CONTACT & SUBMISSION */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-4"
                >
                  <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-between text-xs text-orange-950 font-medium">
                    <span>Selected: <strong>{formData.service}</strong> ({formData.moveDate})</span>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="text-[#f99c00] font-bold underline cursor-pointer"
                    >
                      Edit
                    </button>
                  </div>

                  {/* First & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        placeholder="First name"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.firstname ? 'border-red-500' : 'border-neutral-300'
                          }`}
                      />
                      {errors.firstname && <p className="text-[11px] text-red-500 mt-1">{errors.firstname}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        placeholder="Last name"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.lastname ? 'border-red-500' : 'border-neutral-300'
                          }`}
                      />
                      {errors.lastname && <p className="text-[11px] text-red-500 mt-1">{errors.lastname}</p>}
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <FaPhoneAlt className="absolute left-3.5 top-3.5 text-gray-400 text-xs" />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="(480) 000-0000"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-9 pr-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.phone ? 'border-red-500' : 'border-neutral-300'
                            }`}
                        />
                      </div>
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2.5 text-sm border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f99c00] bg-white text-gray-900 ${errors.email ? 'border-red-500' : 'border-neutral-300'
                          }`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Preferred Contact Method & Urgent Flag */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Preferred Contact Method:
                      </label>
                      <div className="flex gap-2">
                        {['Phone Call', 'Text / SMS', 'Email'].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setPreferredContact(method)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${preferredContact === method
                                ? 'bg-[var(--accent-color)] text-white border-[var(--accent-color)]'
                                : 'bg-white text-gray-700 border-neutral-300 hover:border-gray-400'
                              }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-gray-800">
                        <input
                          type="checkbox"
                          checked={isUrgent}
                          onChange={(e) => setIsUrgent(e.target.checked)}
                          className="w-4 h-4 rounded text-[#f99c00] focus:ring-[#f99c00] accent-[#f99c00]"
                        />
                        <span>⚡ Urgent move (Within 48-72 hours)</span>
                      </label>
                    </div>
                  </div>

                  {/* Trust Reassurance Badges */}
                  <div className="grid grid-cols-3 gap-2 py-1 text-[11px] text-gray-600">
                    <span className="flex items-center gap-1">
                      <FaLock className="text-emerald-600 text-xs" /> 100% Privacy
                    </span>
                    <span className="flex items-center gap-1">
                      <FaDollarSign className="text-[#f99c00] text-xs" /> Zero Hidden Fees
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-blue-600 text-xs" /> 15-Min Response
                    </span>
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                      {submitError}
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-1/3 py-3 px-4 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-gray-700 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <FaArrowLeft className="text-xs" />
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-2/3 py-3.5 px-6 rounded-xl bg-[var(--accent-color)] hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors disabled:opacity-60 shadow-md"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          SubmittingEstimate...
                        </span>
                      ) : (
                        <span>Get Quote</span>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        )}
      </div>
    </div>
  );
};

export default Quote;