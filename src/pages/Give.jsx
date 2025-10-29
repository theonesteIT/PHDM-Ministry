import { useState, useEffect } from 'react'
import { paymentLinks } from '../config/payments.js'

function GivePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState(null)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
    paymentMethod: '',
    name: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: 'US'
  })

  // Check for payment status from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const success = urlParams.get('success')
    const canceled = urlParams.get('canceled')
    
    if (success === 'true') {
      setPaymentStatus('success')
    } else if (canceled === 'true') {
      setPaymentStatus('canceled')
    }
  }, [])

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳', color: 'from-blue-500 to-cyan-600' },
    { id: 'apple_pay', name: 'Apple Pay', icon: '🍎', color: 'from-gray-800 to-gray-900' },
    { id: 'klarna', name: 'Klarna', icon: '🛒', color: 'from-pink-500 to-rose-600' },
    { id: 'link', name: 'Link', icon: '🔗', color: 'from-indigo-500 to-purple-600' },
    { id: 'affirm', name: 'Affirm', icon: '💰', color: 'from-green-500 to-emerald-600' },
    { id: 'cash_app', name: 'Cash App Pay', icon: '💵', color: 'from-green-600 to-green-800' },
    { id: 'amazon', name: 'Amazon Pay', icon: '📦', color: 'from-orange-500 to-yellow-600' }
  ]

  const presetAmounts = [25, 50, 100, 250, 500, 1000]

  const givingTypes = [
    {
      title: 'Tithe & Offering',
      description: 'Regular giving to support ministry operations',
      amount: '10% of income',
      icon: '💰'
    },
    {
      title: 'Special Projects',
      description: 'Support specific ministry initiatives',
      amount: 'Any amount',
      icon: '🎯'
    },
    {
      title: 'Missions',
      description: 'Help us reach the world with the Gospel',
      amount: 'Any amount',
      icon: '🌍'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAmountSelect = (amount) => {
    setFormData(prev => ({
      ...prev,
      amount: amount.toString()
    }))
  }

  const handlePaymentMethodSelect = (methodId) => {
    setFormData(prev => ({
      ...prev,
      paymentMethod: methodId
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.email || !formData.amount || !formData.paymentMethod) {
      alert('Please fill in all required fields')
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:4000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(formData.amount) * 100, // Convert to cents
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          paymentMethod: formData.paymentMethod
        }),
      });
  
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe payment link
      } else {
        throw new Error("No payment URL received");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment system temporarily unavailable. Please try again later.");
    } finally {
      setIsLoading(false)
    }
  }

  const handleGive = async (option) => {
    if (option.title === "Stripe Checkout") {
      setShowPaymentForm(true)
    } else {
      // Fallback for other payment methods
      window.open(option.link, "_blank");
    }
  };

  return (
    <section className="section bg-black text-white">
      <div className="container-xl">
        {/* Payment Status Messages */}
        {paymentStatus === 'success' && (
          <div className="mb-8 p-6 bg-green-500/20 border border-green-500/30 rounded-2xl text-center">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Payment Successful!</h3>
            <p className="text-green-300">Thank you for your generous contribution to PHDM Ministry. Your support helps us reach more people with the Gospel.</p>
          </div>
        )}
        
        {paymentStatus === 'canceled' && (
          <div className="mb-8 p-6 bg-yellow-500/20 border border-yellow-500/30 rounded-2xl text-center">
            <div className="text-4xl mb-4">⚠️</div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Payment Canceled</h3>
            <p className="text-yellow-300">Your payment was canceled. You can try again anytime or contact us if you need assistance.</p>
          </div>
        )}

        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            <span className="gradient-text">Partner</span> With Us
          </h1>
          <div className="mx-auto h-1 w-32 bg-gradient-to-r from-brandOrange via-brandYellow to-brandOrange" />
          <p className="mt-8 text-xl text-white/80 max-w-3xl mx-auto">
            Your giving helps us reach more people with the Gospel, care for families, and expand God's kingdom.
          </p>
        </div>

        {/* Payment Form Modal */}
        {showPaymentForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-black">Make a Donation</h2>
                  <button
                    onClick={() => setShowPaymentForm(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Amount Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Donation Amount (USD) *
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {presetAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => handleAmountSelect(amount)}
                          className={`p-3 rounded-xl border-2 transition-all ${
                            formData.amount === amount.toString()
                              ? 'border-brandOrange bg-brandOrange/10 text-brandOrange'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                      placeholder="Enter custom amount"
                      min="1"
                      step="0.01"
                      required
                    />
                  </div>

                  {/* Payment Method Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Payment Method *
                    </label>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {paymentMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          onClick={() => handlePaymentMethodSelect(method.id)}
                          className={`p-4 rounded-xl border-2 transition-all text-left ${
                            formData.paymentMethod === method.id
                              ? 'border-brandOrange bg-brandOrange/10'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{method.icon}</span>
                            <span className="font-semibold text-gray-800">{method.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Card Details - Only show for card payment */}
                  {formData.paymentMethod === 'card' && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Card Information</h3>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          required
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                            placeholder="MM/YY"
                            maxLength="5"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                            placeholder="123"
                            maxLength="4"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Billing Address *
                        </label>
                        <input
                          type="text"
                          name="billingAddress"
                          value={formData.billingAddress}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                          placeholder="123 Main Street"
                          required
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                            placeholder="New York"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            ZIP Code *
                          </label>
                          <input
                            type="text"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                            placeholder="10001"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Country *
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-brandOrange focus:outline-none transition-colors"
                            required
                          >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="GB">United Kingdom</option>
                            <option value="AU">Australia</option>
                            <option value="RW">Rwanda</option>
                            <option value="KE">Kenya</option>
                            <option value="UG">Uganda</option>
                            <option value="TZ">Tanzania</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-brandOrange to-brandYellow hover:scale-105 text-black'
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Processing Payment...
                      </span>
                    ) : (
                      `Donate $${formData.amount || '0'}`
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Quick Payment Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Choose Your Payment Method</h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="card-dark group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-brandYellow mb-3">Mobile Money</h3>
              <p className="text-white/80 mb-6">Quick and secure mobile payments</p>
              <button
                onClick={() => window.open(paymentLinks.mobileMoney, "_blank")}
                className="btn-primary w-full"
              >
                Give Now
              </button>
            </div>

            <div className="card-dark group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-brandYellow mb-3">PayPal</h3>
              <p className="text-white/80 mb-6">International payment processing</p>
              <button
                onClick={() => window.open(paymentLinks.paypal, "_blank")}
                className="btn-primary w-full"
              >
                Give Now
              </button>
            </div>

            <div className="card-dark group text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🔒</span>
                </div>
              <h3 className="text-xl font-bold text-brandYellow mb-3">Stripe Checkout</h3>
              <p className="text-white/80 mb-6">Multiple payment methods available</p>
              <button
                onClick={() => setShowPaymentForm(true)}
                  className="btn-primary w-full"
                >
                  Give Now
              </button>
              </div>
          </div>
        </div>

        {/* Giving Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Ways to Give</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {givingTypes.map((type) => (
              <div key={type.title} className="card-dark">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brandOrange to-brandYellow flex items-center justify-center mr-6">
                    <span className="text-3xl">{type.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brandYellow">{type.title}</h3>
                    <p className="text-white/60 text-sm">{type.amount}</p>
                  </div>
                </div>
                <p className="text-white/80 leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Statement */}
        <div className="card-dark bg-gradient-to-br from-brandYellow/10 to-brandOrange/10 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Your Impact</h2>
          <div className="grid gap-8 sm:grid-cols-3 mb-8">
            <div className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-2">500+</div>
              <p className="text-white/80">Lives Transformed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-2">50+</div>
              <p className="text-white/80">Community Programs</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold gradient-text mb-2">10+</div>
              <p className="text-white/80">Nations Reached</p>
            </div>
          </div>
          <p className="text-white/80 text-lg mb-8">
            Each contribution is securely processed and goes directly to ministry work and community outreach. 
            Together, we're making a difference in the world for God's kingdom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">Contact Us</a>
            <a href="/about" className="btn-secondary">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GivePage


