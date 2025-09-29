import { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ModulesSection from '@/components/ModulesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import PracticeSection from '@/components/PracticeSection';
import BadgesSection from '@/components/BadgesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import { AchievementSystem } from '@/components/AchievementToast';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  // Update page title and meta description
  useEffect(() => {
    document.title = 'Grammar Hub - Ағылшын грамматикасын тез әрі қызықты меңгер';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ағылшын тілінің грамматикасын интерактивті сабақтар арқылы үйреніңіз. Практикалық тапсырмалар, видео сабақтар және жетістіктер жүйесі. Тегін сынап көріңіз!');
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Grammar Hub - Ағылшын грамматикасын тез әрі қызықты меңгер');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Ағылшын тілінің грамматикасын интерактивті сабақтар арқылы үйреніңіз. Практикалық тапсырмалар, видео сабақтар және жетістіктер жүйесі.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="modules">
          <ModulesSection />
        </section>
        
        <section id="how-it-works">
          <HowItWorksSection />
        </section>
        
        <section id="practice">
          <PracticeSection />
        </section>
        
        <section id="badges">
          <BadgesSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
      </main>
      
      <Footer />
      
      {/* Achievement System */}
      <AchievementSystem />
    </div>
  );
};

export default Index;