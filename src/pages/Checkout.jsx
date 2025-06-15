import React, { useState } from 'react';
import { CreditCard, MapPin, Truck } from 'lucide-react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      postalCode,
      country,
      cardNumber,
      expiry,
      cvc,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !postalCode ||
      !country ||
      !cardNumber ||
      !expiry ||
      !cvc
    ) {
      alert('Please fill out all fields.');
      return;
    }

    // TODO: Backend API call can be placed here
    alert('✅ Order placed successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <form onSubmit={handleSubmit}>
        {/* Shipping Information */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MapPin size={20} /> Shipping Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border border-gray-300 rounded px-4 py-2" required />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border border-gray-300 rounded px-4 py-2" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border border-gray-300 rounded px-4 py-2" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border border-gray-300 rounded px-4 py-2" required />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border border-gray-300 rounded px-4 py-2 md:col-span-2" required />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border border-gray-300 rounded px-4 py-2" required />
            <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder="Postal Code" className="border border-gray-300 rounded px-4 py-2" required />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="border border-gray-300 rounded px-4 py-2" required />
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CreditCard size={20} /> Payment Method
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="Card Number" className="border border-gray-300 rounded px-4 py-2" required />
            <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="Expiry Date (MM/YY)" className="border border-gray-300 rounded px-4 py-2" required />
            <input type="text" name="cvc" value={formData.cvc} onChange={handleChange} placeholder="CVC" className="border border-gray-300 rounded px-4 py-2" required />
          </div>
        </div>

        {/* Place Order Button */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Truck size={20} /> Review & Place Order
          </h2>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Place Order
          </button>
        </div>
      </form><br></br>
        <button
  onClick={() => window.location.href = '/'}
  className=" bg-blue-500 text-white text-sm py-1 px-2 rounded hover:bg-blue-600"
>
  ← Back to Home
</button>

    </div>
  );
};

export default Checkout;
