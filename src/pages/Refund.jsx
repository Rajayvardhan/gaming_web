import React from 'react';

export const Refund = () => {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Refund Policy</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Eligibility for Refund</h2>
            <p>Refunds are only applicable under specific circumstances outlined below:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Technical issues preventing access to services.</li>
              <li>Unauthorized transactions identified and reported within 7 days.</li>
              <li>Duplicate payments for the same as service.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Refund Process</h2>
            <p>To request a refund, users must:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Contact our support team via the provided channels.</li>
              <li>Submit necessary proof of purchase and explain the issue.</li>
              <li>Allow up to 7 business days for the refund to be processed.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Non-Refundable Cases</h2>
            <p>Refunds will not be issued in the following cases:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Change of mind after purchase.</li>
              <li>Violation of our terms and conditions.</li>
              <li>Services already utilized or consumed.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
            <p>If you have any questions about our refund policy, please reach out to our support team at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
