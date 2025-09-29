import { Award, Lock, Crown, Star, Zap, Target } from 'lucide-react';
import badgesImage from '@/assets/badges.png';

interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  isUnlocked: boolean;
  progress?: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const badges: Badge[] = [
  {
    id: 'first-lesson',
    name: 'Алғашқы қадам',
    description: 'Бірінші сабақты аяқтадыңыз',
    icon: <Star className="w-6 h-6" />,
    isUnlocked: true,
    rarity: 'common',
  },
  {
    id: 'conditionals-starter',
    name: 'Шартты сөйлем мастері',
    description: 'Conditionals модулін 50% аяқтадыңыз',
    icon: <Target className="w-6 h-6" />,
    isUnlocked: true,
    progress: 75,
    rarity: 'common',
  },
  {
    id: 'modal-expert',
    name: 'Modal Verbs эксперті',
    description: 'Modal Verbs модулін толығымен аяқтадыңыз',
    icon: <Award className="w-6 h-6" />,
    isUnlocked: true,
    rarity: 'rare',
  },
  {
    id: 'speed-learner',
    name: 'Жылдам оқушы',
    description: 'Бір күнде 5 сабақ аяқтаңыз',
    icon: <Zap className="w-6 h-6" />,
    isUnlocked: false,
    progress: 60,
    rarity: 'epic',
  },
  {
    id: 'perfect-score',
    name: 'Мінсіз нәтиже',
    description: 'Барлық тапсырмаларды 100% дұрыс орындаңыз',
    icon: <Crown className="w-6 h-6" />,
    isUnlocked: false,
    rarity: 'legendary',
  },
  {
    id: 'grammar-guru',
    name: 'Грамматика гуруы',
    description: 'Барлық модульдарды аяқтаңыз',
    icon: <Award className="w-6 h-6" />,
    isUnlocked: false,
    rarity: 'legendary',
  },
];

const BadgeCard: React.FC<{ badge: Badge; index: number }> = ({ badge, index }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'from-gray-400 to-gray-600';
      case 'rare': return 'from-blue-400 to-blue-600';
      case 'epic': return 'from-purple-400 to-purple-600';
      case 'legendary': return 'from-yellow-400 to-orange-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getRarityBorder = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-300';
      case 'rare': return 'border-blue-300';
      case 'epic': return 'border-purple-300';
      case 'legendary': return 'border-yellow-300';
      default: return 'border-gray-300';
    }
  };

  return (
    <div
      className={`relative bg-card border-2 ${getRarityBorder(badge.rarity)} rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        badge.isUnlocked ? '' : 'opacity-60'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Rarity Indicator */}
      <div className={`absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br ${getRarityColor(badge.rarity)} rounded-full border-2 border-card`} />
      
      {/* Lock Overlay */}
      {!badge.isUnlocked && (
        <div className="absolute inset-0 bg-card/80 rounded-xl flex items-center justify-center">
          <Lock className="w-8 h-8 text-muted-foreground" />
        </div>
      )}

      {/* Icon */}
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${getRarityColor(badge.rarity)} flex items-center justify-center text-white shadow-lg`}>
        {badge.icon}
      </div>

      {/* Content */}
      <div className="text-center">
        <h4 className="font-semibold text-card-foreground mb-2 font-poppins">
          {badge.name}
        </h4>
        
        <p className="text-sm text-muted-foreground leading-relaxed">
          {badge.description}
        </p>

        {/* Progress */}
        {badge.progress && !badge.isUnlocked && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-muted-foreground">Прогресс</span>
              <span className="text-xs font-medium text-card-foreground">
                {badge.progress}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <div
                className={`bg-gradient-to-r ${getRarityColor(badge.rarity)} h-1.5 rounded-full transition-all duration-500`}
                style={{ width: `${badge.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Achievement Glow */}
      {badge.isUnlocked && (
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${getRarityColor(badge.rarity)} opacity-20 animate-pulse`} />
      )}
    </div>
  );
};

const BadgesSection = () => {
  const unlockedCount = badges.filter(b => b.isUnlocked).length;
  const totalCount = badges.length;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-display text-foreground font-poppins mb-4">
            Жетістіктер жүйесі
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Әр жетістік үшін арнайы бэйджтер алыңыз және өз прогрессіңізді көрсетіңіз
          </p>
          
          {/* Progress Summary */}
          <div className="inline-flex items-center gap-4 bg-muted rounded-full px-6 py-3">
            <Award className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">
              {unlockedCount} / {totalCount} бэйдж алынды
            </span>
            <div className="w-24 bg-card rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${(unlockedCount / totalCount) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {badges.map((badge, index) => (
            <div key={badge.id} className="reveal-on-scroll">
              <BadgeCard badge={badge} index={index} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center reveal-on-scroll">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4 font-poppins">
              Келесі бэйджіңізді алуға дайынсыз ба?
            </h3>
            <p className="text-white/90 mb-6 max-w-md mx-auto">
              Сабақтарды аяқтап, тапсырмаларды орындаңыз және жаңа жетістіктер ашыңыз!
            </p>
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
              Сабақты бастау
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BadgesSection;