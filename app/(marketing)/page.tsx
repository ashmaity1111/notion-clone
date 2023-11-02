import React from 'react'
import Header from './_components/Header';
import Heroes from './_components/Heroes';
import Footer from './_components/Footer';

function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Header />
        <Heroes />
      </div>
   <Footer/>
    </div>
  );
}

export default MarketingPage
