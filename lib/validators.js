export const validateEstimateData = (data) => {
  const errors = {};

  // First name validation
  if (!data.firstname?.trim()) {
    errors.firstname = 'First name is required';
  } else if (data.firstname.length < 2) {
    errors.firstname = 'First name is too short';
  } else if (data.firstname.length > 25) {
    errors.firstname = 'First name is too long';
  } else if (!/^[a-zA-Z\s'-]+$/.test(data.firstname)) {
    errors.firstname = 'Invalid first name format';
  }

  // Last name validation
  if (!data.lastname?.trim()) {
    errors.lastname = 'Last name is required';
  } else if (data.lastname.length < 2) {
    errors.lastname = 'Last name is too short';
  } else if (data.lastname.length > 25) {
    errors.lastname = 'Last name is too long';
  } else if (!/^[a-zA-Z\s'-]+$/.test(data.lastname)) {
    errors.lastname = 'Invalid last name format';
  }

  // Email validation
  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email format';
  }

  // Phone validation
  if (!data.phone) {
    errors.phone = 'Phone number is required';
  } else if (data.phone.replace(/[\s-]/g, '').length < 7) {
    errors.phone = 'Minimum number is 7';
  } else if (data.phone.replace(/[\s-]/g, '').length > 15) {
    errors.phone = 'Maximum number is 15';
  } else if (!/^\+?(\d.*){7,15}$/.test(data.phone.replace(/[\s-]/g, ''))) {
    errors.phone = 'Invalid phone number';
  }

  // zeepcode validation
  if (!data.zeepcode?.trim()) {
    errors.zeepcode = 'zeepcode is required';
  } else if (data.zeepcode.length < 3) {
    errors.zeepcode = 'zeepcode is too short';
  }

  // Move date validation
  if (!data.moveDate) {
    errors.moveDate = 'Move date is required';
  } else if (new Date(data.moveDate) < new Date().setHours(0, 0, 0, 0)) {
    errors.moveDate = 'Date cannot be in the past';
  }

  // Origin address validation
  if (!data.origin?.trim()) {
    errors.origin = 'Origin address is required';
  } else if (data.origin.length < 5) {
    errors.origin = 'Address is too short';
  }

  // Destination address validation
  if (!data.destination?.trim()) {
    errors.destination = 'Destination address is required';
  } else if (data.destination.length < 5) {
    errors.destination = 'Address is too short';
  }

  // Service validation
  if (!data.service) {
    errors.service = 'Service is required';
  }

  // Estimate type validation
  if (!data.estimateType) {
    errors.estimateType = 'Estimate type is required';
  } else if (!['home', 'business'].includes(data.estimateType)) {
    errors.estimateType = 'Invalid estimate type';
  }

  return errors;
};