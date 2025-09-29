import { useState, useEffect, useRef } from 'react';
import { Play, BookOpen, Award, Sparkles } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

interface FloatingElementProps {
  children: React.ReactNode;
  initialX: number;
  initialY: number;
  intensity?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  initialX, 
  initialY, 
  intensity = 1 
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = ((clientX / innerWidth) - 0.5) * 100 * intensity;
      const y = ((clientY / innerHeight) - 0.5) * 100 * intensity;
      
      setPosition({
        x: initialX + x,
        y: initialY + y
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [initialX, initialY, intensity]);

  return (
    <div
      ref={elementRef}
      className="floating-element"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
      }}
    >
      {children}
    </div>
  );
};

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="hero-parallax relative flex items-center justify-center">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Floating Elements */}
      <FloatingElement initialX={10} initialY={20} intensity={0.5}>
        <div className="text-white/40 text-xl font-semibold animate-float">
          if
        </div>
      </FloatingElement>
      
      <FloatingElement initialX={85} initialY={30} intensity={0.3}>
        <div className="text-accent/60 text-lg font-medium animate-float" style={{ animationDelay: '1s' }}>
          when
        </div>
      </FloatingElement>
      
      <FloatingElement initialX={15} initialY={70} intensity={0.4}>
        <div className="text-warm/60 text-xl font-semibold animate-float" style={{ animationDelay: '2s' }}>
          would
        </div>
      </FloatingElement>
      
      <FloatingElement initialX={80} initialY={75} intensity={0.6}>
        <div className="text-white/50 text-lg font-medium animate-float" style={{ animationDelay: '1.5s' }}>
          should
        </div>
      </FloatingElement>
      
      <FloatingElement initialX={20} initialY={15} intensity={0.2}>
        <BookOpen className="text-accent/40 w-8 h-8 animate-float" style={{ animationDelay: '0.5s' }} />
      </FloatingElement>
      
      <FloatingElement initialX={75} initialY={20} intensity={0.4}>
        <Sparkles className="text-warm/50 w-6 h-6 animate-float" style={{ animationDelay: '2.5s' }} />
      </FloatingElement>
      
      <FloatingElement initialX={90} initialY={60} intensity={0.3}>
        <Award className="text-white/40 w-7 h-7 animate-float" style={{ animationDelay: '1.8s' }} />
      </FloatingElement>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-hero text-white font-poppins mb-6 animate-fade-in-up">
          Grammar Hub
        </h1>
        
        <p className="text-2xl text-white/90 mb-4 font-inter animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Ағылшын грамматикасын тез әрі қызықты меңгер
        </p>
        
        <p className="text-lg text-white/70 mb-12 font-inter animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          Practical, bite-sized grammar lessons
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <button className="btn-hero">
            Курс бастау
          </button>
          
          <button className="btn-secondary">
            Модульдарды қарау
          </button>
        </div>
        
        {/* Video Thumbnail */}
        <div className="mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <button
            onClick={() => setShowVideo(true)}
            className="group relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <Play className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl overflow-hidden max-w-3xl w-full">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-foreground">Танысу видеосы</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Видео плеер (демо)</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;