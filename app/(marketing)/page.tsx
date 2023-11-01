import React from 'react'
import Header from './_components/Header';


function MarketingPage() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Header />
      </div>
    </div>
  );
}

export default MarketingPage