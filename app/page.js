
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import EarningsSection from '../components/EarningsSection';
import PhotoGrid from '../components/PhotoGrid';
import ActiveQuests from '../components/ActiveQuests';
import Footer from '../components/Footer';
import { popularPhotos, questWinningPhotos, editorsChoicePhotos } from '../mockData';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main>
        <Hero />
        {/* <EarningsSection /> */}
        <PhotoGrid 
          title="Popular Photos" 
          subtitle="Most viewed with the highest Rating"
          button={true}
          haveParentClass={"pic-columns"}
          haveChildClass={"child"}
          photos={popularPhotos} 
        />
        <PhotoGrid 
          title="Quest Winning Photos" 
          subtitle="Most recent 500px Quests, with winning photos"
          button={true}
          photos={questWinningPhotos} 
        />
        <PhotoGrid 
          title="Editors' Choice" 
          subtitle="Photos handpicked by the 500px team and ambassadors"
          button={true}
          photos={editorsChoicePhotos} 
        />
        {/* <ActiveQuests /> */}
      </main>
   
    </div>
  );
};

export default Index;