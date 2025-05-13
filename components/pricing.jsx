import React from 'react';

const PricingCards = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-40 py-10 top-[11rem] absolute z-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-10xl w-full">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
              <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Free Forever</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Basic</h2>
            <p className="text-sm text-gray-600 mb-4">For hobby and personal websites</p>
            <ul className="text-sm space-y-2">
              <li>✔️ For personal websites</li>
              <li>✔️ 2 pages + 1 error page</li>
              <li>✔️ Free designIO domain</li>
              <li>✔️ Unlimited layers</li>
            </ul>
          </div>
          <button className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            Start for Free →
          </button>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between border border-black">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
              <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Monthly Billing</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Pro</h2>
            <p className="text-sm text-gray-600 mb-4">For simple websites, blogs or content-driven websites</p>
            <ul className="text-sm space-y-2">
              <li>✔️ For personal websites</li>
              <li>✔️ 100 pages</li>
              <li>✔️ Password protect</li>
              <li>✔️ 50,000 visitors/mo</li>
              <li>✔️ 2k CMS items</li>
            </ul>
          </div>
          <button className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            Get Started → $40.00
          </button>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
              </div>
              <span className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded-full">Annual Billing</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Custom</h2>
            <p className="text-sm text-gray-600 mb-4">Ideal for enterprises & large websites</p>
            <ul className="text-sm space-y-2">
              <li>✔️ For enterprise websites</li>
              <li>✔️ Enterprise security</li>
              <li>✔️ Custom limits</li>
              <li>✔️ Unlimited visits</li>
              <li>✔️ SSO for websites</li>
              <li>✔️ 400+ pages</li>
              <li>✔️ Launch support</li>
            </ul>
          </div>
          <button className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            Contact Us →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
