'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function WaterManagementProgramme() {
  const [formData, setFormData] = useState({
    // Block A - FPC/FPO Identity
    fpcName: '',
    registrationNumber: '',
    state: '',
    district: '',
    block: '',
    yearOfIncorporation: '',
    promotingInstitution: '',
    
    // Block B - Membership & Land Scale
    totalMemberFarmers: '',
    totalLandAcres: '',
    paddyAcres: '',
    transplantedPaddyAcres: '',
    averageLandHolding: '',
    
    // Block C - Contact Details
    contactPersonName: '',
    designation: '',
    mobileNumber: '',
    whatsappSameAsMobile: true,
    whatsappNumber: '',
    emailAddress: '',
    preferredContactTime: '',
    preferredLanguage: '',
    
    // Block G - Additional Information
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
      const response = await fetch('/api/water-management-programme-enquiry', {
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
        totalLandAcres: '', paddyAcres: '', transplantedPaddyAcres: '', averageLandHolding: '',
        contactPersonName: '', designation: '', mobileNumber: '', whatsappSameAsMobile: true, 
        whatsappNumber: '', emailAddress: '', preferredContactTime: '', preferredLanguage: '',
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
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-6 pt-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">
              Your Members Grow Rice. Now They Can Grow Carbon Credits Too.
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              By shifting from flood-irrigated transplanted rice to Alternate Wetting & Drying (AWD) or Direct Seeded Rice (DSR), your FPC members can dramatically cut water use, reduce methane emissions, lower input costs — and earn verified carbon credits in the process.
            </p>
            
            {/* Impact Ticker */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">💧</div>
                <div className="text-lg font-semibold">Up to 30% reduction in irrigation water use</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-lg font-semibold">25–50% reduction in methane emissions per hectare</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-3xl mb-2">💰</div>
                <div className="text-lg font-semibold">Additional income per acre from verified carbon credits</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">The Challenge</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                The Hidden Cost of Traditional Rice Farming
              </h2>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Traditional flooded, transplanted paddy cultivation is water-intensive by design. Continuous flooding across the growing season:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="text-xl font-bold text-red-800 mb-3">Environmental Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Depletes groundwater reserves, draining aquifers that took decades to fill</li>
                  <li>• Creates anaerobic (oxygen-free) soil conditions where methane-producing bacteria thrive</li>
                  <li>• Makes rice paddies one of agriculture's largest sources of greenhouse gas emissions</li>
                </ul>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-3">Economic Impact</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Forces farmers to pump water repeatedly, adding to electricity or diesel costs</li>
                  <li>• Leaves farmers exposed to water scarcity risk in drought years</li>
                  <li>• Water pumping costs account for a significant share of cultivation costs every season</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-100 rounded-xl p-6">
              <p className="text-lg text-gray-800 leading-relaxed">
                <strong>Critical Fact:</strong> A single hectare of continuously flooded rice can emit between 300 and 700 kg of methane CO₂ equivalent annually. Across millions of hectares, this makes rice cultivation a major contributor to India's agricultural emissions footprint.
              </p>
              <p className="text-xl font-bold text-green-700 mt-4 text-center">
                The good news: the solution is simple, proven, and profitable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Two Pathways. One Outcome: More Income, Less Water.
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Pathway 1: AWD */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Pathway 1: Alternate Wetting & Drying (AWD)</h3>
                <p className="text-gray-700 mb-6">
                  AWD is a water management technique validated under Verra's VM0051 methodology — the world's leading carbon standard for rice cultivation.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">How it works:</h4>
                  <p className="text-gray-700">
                    Instead of maintaining continuous flooding, farmers allow the field to dry to a specific level (typically 15 cm below the soil surface, measured with a simple perforated PVC tube called a pani pipe) before re-irrigating. The field cycles between wet and dry phases.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Key facts:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Works within existing transplanted paddy systems — no change to variety or transplanting method needed</li>
                    <li>• Farmers are trained to use a pani pipe to monitor soil water level accurately</li>
                    <li>• Methane reduction of 25–50% per hectare achievable without yield loss</li>
                    <li>• Water savings of 15–30% reduce pumping frequency and cost</li>
                  </ul>
                </div>
              </div>
              
              {/* Pathway 2: DSR */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Pathway 2: Direct Seeded Rice (DSR)</h3>
                <p className="text-gray-700 mb-6">
                  DSR eliminates the transplanting step entirely — rice seed is sown directly into prepared (dry or wet) fields using a seed drill. Fields are not flooded at the outset.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">How it works:</h4>
                  <p className="text-gray-700">
                    Seeds germinate and establish in moist but non-flooded soil. Irrigation is applied as needed based on crop growth stage and rainfall, rather than by maintaining standing water continuously.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">Key facts:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Eliminates nursery preparation and transplanting labour costs — significant savings per acre</li>
                    <li>• Early-stage soil conditions suppress methane emissions most effectively in this period</li>
                    <li>• Reduces total duration of anaerobic soil conditions across the season</li>
                    <li>• Compatible with mechanical sowing equipment supported through CarbonMint's agri-mechanisation network</li>
                  </ul>
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
            <div className="text-center mb-8">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Benefits for Farmers</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Six ways your members win
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-green-700 mb-3">💰 Carbon Credit Revenue</h3>
                <p className="text-gray-700">Reduced methane emissions are measured, verified, and converted into carbon credits under internationally recognised standards. FPC members receive a direct share of the revenue from credit sales.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">⚡ Lower Cost of Cultivation</h3>
                <p className="text-gray-700">Fewer irrigation cycles means less electricity or diesel for pumping — one of the most controllable costs in paddy cultivation. AWD adopters typically save 3–6 irrigation events per season.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-3">🌾 Maintained or Improved Yield</h3>
                <p className="text-gray-700">Research across South and Southeast Asia, including IRRI-led studies, consistently shows that AWD does not reduce grain yield when managed correctly. DSR, combined with good agronomy support, delivers comparable or better yields while reducing input costs.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-3">👷 Reduced Labour</h3>
                <p className="text-gray-700">DSR eliminates the need for nursery preparation, seedling pulling, and transplanting — among the most physically demanding and costly operations in rice farming. This is especially significant as agricultural labour becomes scarcer and more expensive.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-cyan-700 mb-3">💧 Water Security</h3>
                <p className="text-gray-700">Lower water demand per acre means more water is available in water-scarce seasons. FPC members who adopt AWD or DSR are better protected against drought risk — and better positioned to cultivate even in below-average rainfall years.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-indigo-700 mb-3">📱 Digital Support</h3>
                <p className="text-gray-700">CarbonMint's AgriOS platform and field apps guide farmers through each irrigation decision, track field activity for carbon MRV purposes, and provide advisory support — putting expert guidance at each member's fingertips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Environmental Impact</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                Every enrolled acre is a measurable climate contribution
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Environmental Outcome</th>
                    <th className="px-6 py-4 text-left">Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Methane Reduction</td>
                    <td className="px-6 py-4 text-gray-700">Reduced anaerobic soil conditions cut CH₄ emissions by 25–50% per hectare per season</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">N₂O Management</td>
                    <td className="px-6 py-4 text-gray-700">CarbonMint's PoP guidance helps manage nitrogen application to minimise nitrous oxide emissions — a potent greenhouse gas</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Groundwater Conservation</td>
                    <td className="px-6 py-4 text-gray-700">AWD and DSR reduce per-acre water extraction, helping stabilise depleting aquifers in rice-growing belts</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Reduced Energy Emissions</td>
                    <td className="px-6 py-4 text-gray-700">Fewer pumping cycles mean lower electricity draw from coal-heavy grids and lower diesel consumption</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="px-6 py-4 font-semibold text-gray-900">Healthier Soils</td>
                    <td className="px-6 py-4 text-gray-700">Aerobic soil conditions promote better soil biology and reduce soil compaction associated with continuous flooding</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Verified & Traceable</td>
                    <td className="px-6 py-4 text-gray-700">CarbonMint's dMRV platform creates satellite-validated, field-verified records of every intervention — auditable proof of real climate impact</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* The CarbonMint Methodology */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Verified impact. Transparent process. Farmer-first design.
            </h2>
            <p className="text-xl text-gray-700 mb-12 text-center">
              CarbonMint implements AWD carbon projects under the Verra VM0051 methodology — the globally trusted standard for measuring and verifying emission reductions from rice water management.
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Our End-to-End Programme Includes:</h3>
                <ol className="space-y-4 text-gray-700">
                  <li>
                    <strong>1. Baseline Assessment —</strong> Mapping your FPC's member land, crop calendars, irrigation sources, and existing practices to establish the emission baseline.
                  </li>
                  <li>
                    <strong>2. Farmer Training —</strong> Hands-on training for member farmers and FPC staff on AWD water management, pani pipe monitoring, and DSR agronomy where applicable.
                  </li>
                  <li>
                    <strong>3. Digital MRV —</strong> AgriOS captures field activity data, supported by satellite remote sensing for independent validation of practice adoption.
                  </li>
                  <li>
                    <strong>4. Third-party Verification —</strong> All carbon credit claims are verified by accredited third-party auditors before credits are issued.
                  </li>
                  <li>
                    <strong>5. Revenue Distribution —</strong> Credit revenue flows transparently through the FPC to individual member farmers, with full records maintained on the platform.
                  </li>
                  <li>
                    <strong>6. Ongoing Advisory —</strong> CarbonMint's agronomy and programme teams support your FPC across every season — not just at onboarding.
                  </li>
                </ol>
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
              Tell us about your FPC's rice farming landscape
            </h2>
            <p className="text-xl text-gray-700 mb-12 text-center">
              Our team will assess programme fit and contact you within 3 working days with a tailored overview of what your FPC and its members could earn.
            </p>

            {submitted ? (
              <div className="bg-green-100 border border-green-400 text-green-700 rounded-xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                <p className="text-lg">Based on the paddy acreage you've shared, our team will prepare a preliminary carbon credit potential estimate before getting in touch. We will contact you within 3 working days.</p>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">State *</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Block / Mandal</label>
                      <input
                        type="text"
                        name="block"
                        value={formData.block}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Promoting Institution</label>
                      <select
                        name="promotingInstitution"
                        value={formData.promotingInstitution}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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

                {/* Block B - Membership & Land Scale */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Membership & Land Scale ⭐ Key Programme Sizing Data</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Total Member Farmers *</label>
                      <input
                        type="number"
                        name="totalMemberFarmers"
                        value={formData.totalMemberFarmers}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">⭐ Total Acres Under FPC Member Farms *</label>
                      <input
                        type="number"
                        name="totalLandAcres"
                        value={formData.totalLandAcres}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                      <p className="text-sm text-gray-500 mt-1">Primary programme sizing data</p>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">⭐ Acres Currently Under Paddy / Rice Cultivation *</label>
                      <input
                        type="number"
                        name="paddyAcres"
                        value={formData.paddyAcres}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                      <p className="text-sm text-gray-500 mt-1">Critical for carbon credit estimation</p>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">⭐ Acres Under Transplanted Paddy (conventional flooding) *</label>
                      <input
                        type="number"
                        name="transplantedPaddyAcres"
                        value={formData.transplantedPaddyAcres}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                      <p className="text-sm text-gray-500 mt-1">Baseline for AWD/DSR conversion potential</p>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Average Land Holding Per Member (Acres)</label>
                      <select
                        name="averageLandHolding"
                        value={formData.averageLandHolding}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      >
                        <option value="">Select Range</option>
                        <option value="< 1 acre">&lt; 1 acre</option>
                        <option value="1–2 acres">1–2 acres</option>
                        <option value="2–5 acres">2–5 acres</option>
                        <option value="5+ acres">5+ acres</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Helper text:</strong> Your total paddy acreage is the most important input for estimating carbon credit potential. An approximate figure is fine — we will verify during baseline assessment.
                    </p>
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Designation / Role in FPC *</label>
                      <select
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">Preferred Contact Time</label>
                      <select
                        name="preferredContactTime"
                        value={formData.preferredContactTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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

                {/* Block G - Additional Information */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium">How did you hear about CarbonMint?</label>
                      <select
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                      <label className="block text-gray-700 mb-2 font-medium">Questions or comments</label>
                      <textarea
                        name="questions"
                        value={formData.questions}
                        onChange={handleInputChange}
                        maxLength={500}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
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
                          <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-700 underline">
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
                  className="w-full bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry — Water Management Carbon Programme'}
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
      <Footer />
    </div>
  );
}
