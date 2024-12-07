import React from 'react';
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react';

export const MoneyManagement: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Money Management</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <ArrowDownCircle className="text-green-600 mb-4" size={24} />
          <h3 className="text-xl font-semibold mb-3">How to Add Money</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Click on 'Add Money' button in your account dashboard</li>
            <li>Choose from multiple payment options (UPI, Net Banking, Cards)</li>
            <li>Enter amount (min ₹100 - max ₹50,000 per transaction)</li>
            <li>Complete secure payment process</li>
            <li>Funds are instantly credited to your game wallet</li>
            <li>Get bonus cash on your first deposit</li>
          </ol>
        </div>
        <div className="bg-blue-50 p-6 rounded-lg">
          <ArrowUpCircle className="text-blue-600 mb-4" size={24} />
          <h3 className="text-xl font-semibold mb-3">How to Withdraw</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Navigate to 'Withdraw' section in your account</li>
            <li>Ensure KYC verification is complete</li>
            <li>Enter withdrawal amount (min ₹200)</li>
            <li>Select verified bank account</li>
            <li>Withdrawals processed within 24-48 hours</li>
            <li>Track withdrawal status in 'Transaction History'</li>
          </ol>
        </div>
      </div>
    </section>
  );
};