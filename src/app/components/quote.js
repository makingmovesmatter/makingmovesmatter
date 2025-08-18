'use client';

import { useState, useEffect } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Quote = () => {
  const [estimateType, setEstimateType] = useState('home');
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', moveDate: '',
    origin: '', moveFrom: '', moveTo: '',
    destination: '', service: '', message: ''
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

  const validateName = name => {
    if (!name.trim()) return 'Name is required';
    if (!/^[a-zA-Z\s'-]+$/.test(name)) return 'Invalid name format';
    if (name.length < 2) return 'Name is too short';
    if (name.length > 50) return 'Name is too long';
    return '';
  };

  const validateEmail = email => {
    if (!email) return 'Email is required';
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email) ? '' : 'Invalid email format';
  };

  const validatePhone = phone => {
    if (!phone) return 'Phone number is required';
    if(phone.length < 7) return 'Minimum number is 7'
    if(phone.length > 11) return 'Maximum number is 11'
    const re = /^\+?(\d.*){10,15}$/;
    return re.test(phone.replace(/[\s-]/g, '')) ? '' : 'Invalid phone number';
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
    if (name === 'name') error = validateName(value);
    if (name === 'email') error = validateEmail(value);
    if (name === 'phone') error = validatePhone(value);
    if (name === 'moveDate') error = validateDate(value);
    if (['origin', 'destination'].includes(name)) error = validateAddress(value);
    if (name === 'service') error = validateService(value);

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handlePlaceChanged = field => place => {
    if (!place.geometry) {
      setErrors(prev => ({ ...prev, [field]: 'Please select a valid address from the dropdown' }));
      return;
    }
    const address = place.formatted_address;
    if (field === 'origin') setOriginPlace(place);
    if (field === 'destination') setDestinationPlace(place);

    setFormData(prev => ({ ...prev, [field]: address }));
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const calculateDistance = async () => {
    if (!originPlace || !destinationPlace) return;

    try {
      const service = new window.google.maps.DistanceMatrixService();
      const response = await service.getDistanceMatrix({
        origins: [originPlace.geometry.location],
        destinations: [destinationPlace.geometry.location],
        travelMode: 'DRIVING',
        unitSystem: window.google.maps.UnitSystem.IMPERIAL,
      });

      if (response.rows[0].elements[0].status === 'OK') {
        setDistance(response.rows[0].elements[0].distance.text);
        setDuration(response.rows[0].elements[0].duration.text);
      }
    } catch (error) {
      console.error('Error calculating distance:', error);
    }
  };

  useEffect(() => {
    if (originPlace && destinationPlace) calculateDistance();
  }, [originPlace, destinationPlace]);

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
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
    try {
      const res = await axios.post('/api/estimate', {
        estimateType,
        ...formData,
        distance,
        duration
      });
      alert('Estimate request received! We will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', moveDate: '', origin: '', moveFrom: '', moveTo: '', destination: '', service: '', message: '' });
      setDistance(null);
      setDuration(null);
    } catch (err) {
      alert('There was an error submitting your request. Please try again.');
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
      <div className="bg-transparent p-6 rounded-lg">
        <div className="border-2 border-orange-500 rounded-lg p-6 bg-white bg-opacity-90 backdrop-blur-sm shadow-xl">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            GET YOUR <span className='text-orange-500'>FREE QUOTE</span>
          </h3>
          
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            onLoad={() => setIsScriptLoaded(true)}
            libraries={['places']}
          >
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-gray-700 font-medium">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder='Your full name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 text-gray-700 font-medium">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder='your@email.com'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-1 text-gray-700 font-medium">Phone*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder='(123) 456-7890'
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="moveDate" className="block mb-1 text-gray-700 font-medium">Move Date*</label>
                  <input
                    type="date"
                    id="moveDate"
                    name="moveDate"
                    value={formData.moveDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full p-3 border ${errors.moveDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black`}
                  />
                  {errors.moveDate && <p className="mt-1 text-sm text-red-600">{errors.moveDate}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block mb-1 text-gray-700 font-medium">Service Needed*</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className={`w-full p-3 border ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black`}
                  >
                    <option value="">Select service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.name}>{service.name}</option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                </div>

                <div>
                  <label htmlFor="type" className="block mb-1 text-gray-700 font-medium">Moving Type*</label>
                  <select
                    id="type"
                    name="type"
                    value={estimateType}
                    onChange={(e) => setEstimateType(e.target.value)}
                    required
                    className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black`}
                  >
                    <option value="home">Home</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="origin" className="block mb-1 text-gray-700 font-medium">Moving From*</label>
                  {isScriptLoaded ? (
                    <Autocomplete
                      onLoad={(autocomplete) => autocomplete.setFields(['geometry', 'formatted_address'])}
                      onPlaceChanged={handlePlaceChanged('origin')}
                    >
                      <input
                        type="text"
                        id="origin"
                        name="origin"
                        value={formData.origin}
                        onChange={handleInputChange}
                        required
                        className={`w-full p-3 border ${errors.origin ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black`}
                        placeholder="Current address"
                      />
                    </Autocomplete>
                  ) : (
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg text-black"
                      placeholder="Loading address autocomplete..."
                      disabled
                    />
                  )}
                  {errors.origin && <p className="mt-1 text-sm text-red-600">{errors.origin}</p>}
                </div>
                
                <div>
                  <label htmlFor="destination" className="block mb-1 text-gray-700 font-medium">Moving To*</label>
                  {isScriptLoaded ? (
                    <Autocomplete
                      onLoad={(autocomplete) => autocomplete.setFields(['geometry', 'formatted_address'])}
                      onPlaceChanged={handlePlaceChanged('destination')}
                    >
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        required
                        className={`w-full p-3 border ${errors.destination ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-black`}
                        placeholder="Destination address"
                      />
                    </Autocomplete>
                  ) : (
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg text-black"
                      placeholder="Loading address autocomplete..."
                      disabled
                    />
                  )}
                  {errors.destination && <p className="mt-1 text-sm text-red-600">{errors.destination}</p>}
                </div>

                {distance && duration && (
                  <div className="md:col-span-2 bg-orange-50 p-3 rounded-lg border border-orange-200">
                    <div className="flex justify-between">
                      <span className="font-medium text-orange-800">Distance:</span>
                      <span className="text-orange-600">{distance}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="font-medium text-orange-800">Estimated Time:</span>
                      <span className="text-orange-600">{duration}</span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-gray-700 font-medium">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-transparent text-black"
                  placeholder="Special requirements, inventory details, etc."
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    PROCESSING...
                  </span>
                ) : (
                  'GET FREE QUOTE NOW'
                )}
              </button>
            </form>
          </LoadScript>
        </div>
      </div>
    </motion.div>
  );
};

export default Quote;