import { useState, useEffect } from 'react';
import { Award, X, Sparkles } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  type: 'starter' | 'expert' | 'master';
}

const achievements: Achievement[] = [
  {
    id: 'conditionals-starter',
    title: 'Conditionals Starter',
    description: 'Шартты сөйлемдерді бастадыңыз!',
    icon: <Award className="w-6 h-6" />,
    type: 'starter'
  },
  {
    id: 'modal-expert', 
    title: 'Modal Verbs Expert',
    description: 'Модальді етістіктерді меңгердіңіз!',
    icon: <Sparkles className="w-6 h-6" />,
    type: 'expert'
  }
];

const Confetti = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-warm animate-confetti"
          style={{
            left: `${20 + (i * 10)}%`,
            top: '50%',
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
};

interface AchievementToastProps {
  achievement: Achievement;
  onClose: () => void;
  showConfetti?: boolean;
}

const AchievementToast: React.FC<AchievementToastProps> = ({ 
  achievement, 
  onClose, 
  showConfetti = true 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for exit animation
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className={`achievement-toast ${isVisible ? 'animate-slide-in-right' : 'animate-slide-out-right'}`}>
      {showConfetti && <Confetti />}
      
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
          achievement.type === 'master' ? 'bg-warm/20 text-warm-foreground' :
          achievement.type === 'expert' ? 'bg-accent/20 text-white' :
          'bg-primary/20 text-white'
        }`}>
          {achievement.icon}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-warm-foreground/80 uppercase tracking-wide">
              Жаңа ачивка
            </span>
            <div className="flex-1 h-px bg-warm-foreground/20" />
          </div>
          
          <h4 className="font-semibold text-warm-foreground text-sm mb-1">
            {achievement.title}
          </h4>
          
          <p className="text-warm-foreground/90 text-xs leading-relaxed">
            {achievement.description}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
          className="flex-shrink-0 text-warm-foreground/60 hover:text-warm-foreground transition-colors duration-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Achievement System Component
const AchievementSystem = () => {
  const [activeAchievements, setActiveAchievements] = useState<Achievement[]>([]);

  const triggerAchievement = (achievementId: string) => {
    const achievement = achievements.find(a => a.id === achievementId);
    if (achievement && !activeAchievements.find(a => a.id === achievementId)) {
      setActiveAchievements(prev => [...prev, achievement]);
    }
  };

  const removeAchievement = (achievementId: string) => {
    setActiveAchievements(prev => prev.filter(a => a.id !== achievementId));
  };

  // Demo: Trigger achievements for demonstration
  useEffect(() => {
    const timer1 = setTimeout(() => {
      triggerAchievement('conditionals-starter');
    }, 3000);

    const timer2 = setTimeout(() => {
      triggerAchievement('modal-expert');
    }, 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-3">
      {activeAchievements.map((achievement) => (
        <AchievementToast
          key={achievement.id}
          achievement={achievement}
          onClose={() => removeAchievement(achievement.id)}
        />
      ))}
    </div>
  );
};

export { AchievementToast, AchievementSystem };
export type { Achievement };