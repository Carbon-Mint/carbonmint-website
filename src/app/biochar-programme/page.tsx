'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BiocharProgramme() {
  const [formData, setFormData] = useState({
    // Block A - FPC/FPO Identity
    fpcName: '',
    registrationNumber: '',
    state: '',
    district: '',
    block: '',
    yearOfIncorporation: '',
    promotingInstitution: '',
    
    // Block B - Scale & Membership
    totalMemberFarmers: '',
    totalLandAcres: '',
    primaryCrops: [] as string[],
    otherCrop: '',
    
    // Block C - Contact Details
    contactPersonName: '',
    designation: '',
    mobileNumber: '',
    whatsappSameAsMobile: true,
    whatsappNumber: '',
    emailAddress: '',
    preferredContactTime: '',
    preferredLanguage: '',
    
    // Block F - Additional Information
    howDidYouHear: '',
    questions: '',
    consent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else if (name === 'primaryCrops') {
      const select = e.target as HTMLSelectElement;
      const values = Array.from(select.selectedOptions, option => option.value);
      setFormData(prev => ({
        ...prev,
        [name]: values
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/biochar-programme-enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit enquiry');
      }

      setSubmitted(true);
      setFormData({
        fpcName: '', registrationNumber: '', state: '', district: '', block: '',
        yearOfIncorporation: '', promotingInstitution: '', totalMemberFarmers: '',
        totalLandAcres: '', primaryCrops: [], otherCrop: '', contactPersonName: '',
        designation: '', mobileNumber: '', whatsappSameAsMobile: true, whatsappNumber: '',
        emailAddress: '', preferredContactTime: '', preferredLanguage: '',
        howDidYouHear: '', questions: '', consent: false
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Don't Burn It. Convert It. Earn From It.
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Transform your members' crop residue into high-quality biochar — enrich their soil, eliminate field fires, and earn verified carbon credits. A single intervention that benefits farmers, communities, and the planet.
            </p>
            
            {/* Impact Ticker */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-lg font-semibold">1 tonne of biochar sequesters ~2.5 tonnes CO2e permanently</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">🌾</div>
                <div className="text-lg font-semibold">Up to 20% improvement in crop yield with biochar-amended soil</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">✅</div>
                <div className="text-lg font-semibold">Zero open burning = zero stubble fire penalty risk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Every season, a crisis repeats itself.
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              After harvest, millions of tonnes of agricultural residue — paddy straw, sugarcane trash, cotton stalks, maize cobs — pile up across FPC member farms. Farmers face an impossible choice:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Burn it</h3>
                <p className="text-gray-700">Fast, cheap, but toxic. Causes air pollution, soil damage, loss of beneficial microbes, legal penalties, and wasted organic matter.</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">Leave it</h3>
                <p className="text-gray-700">Slows the next sowing cycle and risks pest buildup.</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Sell it</h3>
                <p className="text-gray-700">Markets are unreliable and prices are low.</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              The result: A resource worth thousands of rupees per acre is treated as waste. Your FPC members lose money, lose soil health, and lose their standing with regulators — every single year.
            </p>
            <p className="text-2xl font-bold text-green-700 mt-4 text-center">
              CarbonMint changes that equation entirely.
            </p>
          </div>
        </div>
      </section>

      {/* How the Programme Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              From Waste to Value — in Four Steps
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Collect</h3>
                  <p className="text-gray-700">Your FPC aggregates crop residue from member farms. CarbonMint helps design the collection logistics, identifying optimal aggregation points and volumes across your geography.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Convert</h3>
                  <p className="text-gray-700">Residue is processed through a gasifier or biochar kiln unit (we support both centralised and decentralised models). The thermochemical conversion process — pyrolysis — transforms biomass into stable, carbon-rich biochar without combustion.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Apply</h3>
                  <p className="text-gray-700">Biochar is applied back to member farmland as a soil amendment. CarbonMint's field teams and AgriOS platform track application rates and field locations, creating a verified record of every tonne applied.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Earn</h3>
                  <p className="text-gray-700">The permanently sequestered carbon is measured, reported, and verified (dMRV) against internationally recognised standards. Verified carbon credits are issued and sold on global voluntary carbon markets. Your FPC and your member farmers share in the proceeds.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Farmer Members */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              What changes for your members — season after season
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-green-700 mb-4">🌱 Dramatically Better Soil</h3>
                <p className="text-gray-700 mb-4">Biochar is not a fertiliser — it is a permanent soil infrastructure upgrade. Once applied:</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Increases soil water retention by up to 18%, reducing irrigation requirements</li>
                  <li>• Improves cation exchange capacity (CEC), making fertilisers more effective</li>
                  <li>• Stimulates beneficial microbial activity, supporting long-term soil biology</li>
                  <li>• Raises soil pH in acidic soils, reducing lime cost</li>
                  <li>• Lasts hundreds of years in the soil — a gift to the next generation</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">⚡ Reduced Input Costs</h3>
                <p className="text-gray-700">Better water retention and improved nutrient efficiency means members can reduce irrigation frequency and fertiliser application rates over time. This directly lowers the cost of cultivation.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-purple-700 mb-4">📋 Compliance & Legal Protection</h3>
                <p className="text-gray-700">Open burning of crop residue is prohibited and carries penalties in most Indian states. FPC members who participate in the biochar programme have a structured, legal pathway to residue disposal — with documentation to prove it.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-orange-700 mb-4">🏅 Premium Market Access</h3>
                <p className="text-gray-700">As food supply chains increasingly demand sustainability credentials, farms with verified climate-smart practices gain an edge. CarbonMint's traceability tools help your FPC document these practices for buyers and processors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Every tonne of biochar is a measurable climate action
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Impact Area</th>
                    <th className="px-6 py-4 text-left">What Happens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Carbon Sequestration</td>
                    <td className="px-6 py-4 text-gray-700">CO2 locked in biochar remains stable for 100-1,000+ years, permanently removing it from the atmosphere</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Methane & N2O Reduction</td>
                    <td className="px-6 py-4 text-gray-700">Biochar in soil suppresses soil methane and nitrous oxide emissions from microbial activity</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Air Quality</td>
                    <td className="px-6 py-4 text-gray-700">Eliminating open burning removes PM2.5, carbon monoxide, and black carbon from the air — protecting farmer and community health</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Biodiversity</td>
                    <td className="px-6 py-4 text-gray-700">Healthier soils support richer microbial ecosystems and improved above-ground biodiversity</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Water Conservation</td>
                    <td className="px-6 py-4 text-gray-700">Improved soil water retention reduces runoff and groundwater depletion</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Soil Organic Carbon</td>
                    <td className="px-6 py-4 text-gray-700">Biochar raises SOC levels, reversing decades of soil degradation from intensive agriculture</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The CarbonMint Advantage */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              We handle the complexity. You deliver the impact.
            </h2>
            <p className="text-xl text-gray-700 mb-12 text-center">
              CarbonMint provides end-to-end programme management so your FPC team doesn't need carbon market expertise to participate.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">What CarbonMint Brings:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Programme design tailored to your FPC's crop mix, geography, and capacity</li>
                  <li>• Technology setup: gasifier/kiln sourcing guidance and operational support</li>
                  <li>• Digital MRV: satellite monitoring, field validation, and full audit trails via AgriOS</li>
                  <li>• Carbon registry navigation and credit issuance support</li>
                  <li>• Revenue distribution directly to farmer members</li>
                  <li>• Ongoing field support and training for FPC staff</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Your FPC Brings:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Member farmer network and land aggregation</li>
                  <li>• Local knowledge and trust</li>
                  <li>• Residue collection coordination</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-xl font-semibold mb-6">
              Trusted by NABARD, Telangana Dept. of Agriculture, and FPCs across South India
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <span className="text-green-400 font-bold">NABARD</span>
              <span className="text-green-400 font-bold">IRRI</span>
              <span className="text-green-400 font-bold">Kattangur FPCL</span>
              <span className="text-green-400 font-bold">Mana Telangana FPC Federation</span>
              <span className="text-green-400 font-bold">Bayer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
              Is your FPC ready to earn from crop residue?
            </h2>
            <p className="text-xl text-gray-700 mb-12 text-center">
              Tell us about your organisation. Our team will review your details and connect with you within 3 working days to discuss programme fit and next steps.
            </p>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-lg">A CarbonMint programme specialist will contact you within 3 working days. For urgent queries, email info@carbonmint.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                {/* Block A - FPC/FPO Identity */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">FPC / FPO Identity</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">FPC / FPO Name *</label>
                      <input
                        type="text"
                        name="fpcName"
                        value={formData.fpcName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Registration Number *</label>
                      <input
                        type="text"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">State *</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      >
                        <option value="">Select State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">District</label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Block / Mandal</label>
                      <input
                        type="text"
                        name="block"
                        value={formData.block}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Year of Incorporation</label>
                      <input
                        type="number"
                        name="yearOfIncorporation"
                        value={formData.yearOfIncorporation}
                        onChange={handleInputChange}
                        min="1900"
                        max="2026"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Promoting Institution</label>
                      <select
                        name="promotingInstitution"
                        value={formData.promotingInstitution}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      >
                        <option value="">Select Institution</option>
                        <option value="NABARD">NABARD</option>
                        <option value="SFAC">SFAC</option>
                        <option value="State Govt">State Govt</option>
                        <option value="NGO">NGO</option>
                        <option value="Private">Private</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Block B - Scale & Membership */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Scale & Membership</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Total Member Farmers *</label>
                      <input
                        type="number"
                        name="totalMemberFarmers"
                        value={formData.totalMemberFarmers}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Total Land Under FPC Members (Acres) *</label>
                      <input
                        type="number"
                        name="totalLandAcres"
                        value={formData.totalLandAcres}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Primary Crop(s) Grown by Members</label>
                      <select
                        name="primaryCrops"
                        value={formData.primaryCrops}
                        onChange={handleInputChange}
                        multiple
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      >
                        <option value="Paddy">Paddy</option>
                        <option value="Wheat">Wheat</option>
                        <option value="Sugarcane">Sugarcane</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Maize">Maize</option>
                        <option value="Pulses">Pulses</option>
                        <option value="Other">Other</option>
                      </select>
                      <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple</p>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Other Crop (if selected above)</label>
                      <input
                        type="text"
                        name="otherCrop"
                        value={formData.otherCrop}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Block C - Contact Details */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Contact Person Name *</label>
                      <input
                        type="text"
                        name="contactPersonName"
                        value={formData.contactPersonName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Designation / Role in FPC *</label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      >
                        <option value="">Select Role</option>
                        <option value="CEO">CEO</option>
                        <option value="Chairman">Chairman</option>
                        <option value="Board Member">Board Member</option>
                        <option value="Manager">Manager</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Mobile Number *</label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        required
                        pattern="[0-9]{10}"
                        placeholder="10-digit Indian mobile"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">WhatsApp Same as Mobile?</label>
                      <input
                        type="checkbox"
                        name="whatsappSameAsMobile"
                        checked={formData.whatsappSameAsMobile}
                        onChange={handleInputChange}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Yes, WhatsApp number is same as mobile</span>
                    </div>
                    {!formData.whatsappSameAsMobile && (
                      <div>
                        <label className="block text-gray-700 mb-2 font-medium">WhatsApp Number</label>
                        <input
                          type="tel"
                          name="whatsappNumber"
                          value={formData.whatsappNumber}
                          onChange={handleInputChange}
                          pattern="[0-9]{10}"
                          placeholder="10-digit Indian mobile"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                        />
                      </div>
                    )}
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                      <input
                        type="email"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Preferred Contact Time</label>
                      <select
                        name="preferredContactTime"
                        value={formData.preferredContactTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      >
                        <option value="">Select Time</option>
                        <option value="Morning (9–12)">Morning (9–12)</option>
                        <option value="Afternoon (12–3)">Afternoon (12–3)</option>
                        <option value="Evening (3–6)">Evening (3–6)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Preferred Language for Follow-up</label>
                      <select
                        name="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      >
                        <option value="">Select Language</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                        <option value="Telugu">Telugu</option>
                        <option value="Tamil">Tamil</option>
                        <option value="Marathi">Marathi</option>
                        <option value="Kannada">Kannada</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Block F - Additional Information */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">How did you hear about CarbonMint?</label>
                      <select
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      >
                        <option value="">Select Option</option>
                        <option value="NABARD">NABARD</option>
                        <option value="State Dept of Agriculture">State Dept of Agriculture</option>
                        <option value="Partner NGO">Partner NGO</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Fellow FPC">Fellow FPC</option>
                        <option value="Event">Event</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Any specific questions or comments</label>
                      <textarea
                        name="questions"
                        value={formData.questions}
                        onChange={handleInputChange}
                        maxLength={500}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-700"
                      />
                      <p className="text-sm text-gray-500 mt-1">Max 500 characters</p>
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          required
                          className="mr-2"
                        />
                        <span className="text-gray-700">
                          I consent to be contacted by CarbonMint. I have read and agree to the{' '}
                          <Link href="/privacy-policy" className="text-green-600 hover:text-green-700 underline">
                            Privacy Policy
                          </Link>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <p className="font-semibold">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry — Biochar Programme'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Legal Footnote */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>Disclaimer:</strong> Carbon credit revenue is subject to market rates, verification outcomes, and programme-specific terms. CarbonMint will share indicative projections based on your FPC's data during onboarding. Past performance of any carbon programme is not a guarantee of future credit volumes or revenues.
            </p>
            <p className="text-sm text-gray-600 mt-4">
              CarbonMint India Private Limited | info@carbonmint.com | www.carbonmint.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
