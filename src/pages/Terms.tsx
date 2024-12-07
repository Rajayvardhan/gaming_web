import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>By accessing and using Finunique GameZone, you agree to be bound by these Terms and Conditions.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>You must be at least 18 years old to use our services</li>
              <li>You must be a resident of a jurisdiction where online gaming is legal</li>
              <li>You must provide accurate and complete information during registration</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Account Rules</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>One account per user</li>
              <li>Account sharing is strictly prohibited</li>
              <li>Users are responsible for maintaining account security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Fair Play Policy</h2>
            <p>We maintain a strict fair play policy to ensure all users have an equal and fair gaming experience.</p>
          </section>
        </div>
      </div>
    </div>
  );
};