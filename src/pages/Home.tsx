import React from 'react';
import { Hero } from '../components/Hero';
import { GameCard } from '../components/GameCard';
import { ContentWithImage } from '../components/ContentWithImage';
import { FAQ } from '../components/FAQ';
import { features } from '../data/features';
import { games } from '../data/games';
import * as Icons from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      {/* Why Choose Us Section */}
      <ContentWithImage 
        title="Why Choose Finunique GameZone?"
        description="Experience the best of online gaming with our secure and feature-rich platform."
        imageUrl="https://sourcecodelab.co/lp/wp-content/uploads/2024/09/Group-1000008718.png"
        features={[
          "100% Secure and Legal Platform",
          "Instant Withdrawals",
          "24/7 Customer Support",
          "Multiple Game Variants",
          "Regular Tournaments & Bonuses"
        ]}
        />

      {/* How It Works */}
      <ContentWithImage
        title="How to Get Started"
        description="Start playing your favorite card games in just a few simple steps."
        imageUrl="https://sourcecodelab.co/lp/wp-content/uploads/2024/09/Group-1000008721.png"
        features={[
          "Register and verify your account",
          "Add money to your wallet",
          "Choose your favorite game",
          "Start playing and winning",
          "Withdraw winnings instantly"
        ]}
        imageOnRight
      />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const IconComponent = Icons[feature.icon as keyof typeof Icons];
              return (
                <div key={feature.id} className="text-center">
                  <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                    <IconComponent size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Games</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};