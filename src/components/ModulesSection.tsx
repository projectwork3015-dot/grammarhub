import { useState } from 'react';
import { ArrowRight, CheckCircle, Lock } from 'lucide-react';
import grammarIcons from '@/assets/grammar-icons.png';

interface Module {
  id: string;
  title: string;
  description: string;
  progress?: number;
  isCompleted?: boolean;
  isLocked?: boolean;
}

const modules: Module[] = [
  {
    id: 'conditionals',
    title: 'Шартты сөйлемдер',
    description: 'If, when, unless арқылы шартты жағдайларды білдіру',
    progress: 75,
    isCompleted: false,
  },
  {
    id: 'modal-verbs',
    title: 'Модальді етістіктер',
    description: 'Can, could, should, must етістіктерін дұрыс қолдану',
    progress: 100,
    isCompleted: true,
  },
  {
    id: 'prepositions',
    title: 'Предлоги',
    description: 'In, on, at, by сөздерімен орын мен уақытты көрсету',
    progress: 30,
    isCompleted: false,
  },
  {
    id: 'comparatives',
    title: 'Салыстырмалы және ең жоғары дәрежелер',
    description: 'Better, best, more, most арқылы салыстыру жасау',
    progress: 0,
    isLocked: true,
  },
];

const ModuleCard: React.FC<{ module: Module; index: number }> = ({ module, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`module-card ${module.isLocked ? 'opacity-60' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Module Icon */}
      <div className="flex items-center justify-center mb-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          {module.isCompleted ? (
            <CheckCircle className="w-8 h-8 text-white" />
          ) : module.isLocked ? (
            <Lock className="w-8 h-8 text-white/70" />
          ) : (
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-card-foreground mb-3 font-poppins">
          {module.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {module.description}
        </p>

        {/* Progress Bar */}
        {!module.isLocked && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Прогресс</span>
              <span className="text-sm font-medium text-card-foreground">
                {module.progress}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
                style={{ width: `${module.progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Action */}
        <button
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300 ${
            module.isLocked
              ? 'bg-muted text-muted-foreground cursor-not-allowed'
              : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]'
          }`}
          disabled={module.isLocked}
        >
          <span>
            {module.isLocked ? 'Жабық' : module.isCompleted ? 'Қайталау' : 'Жалғастыру'}
          </span>
          {!module.isLocked && (
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          )}
        </button>
      </div>
    </div>
  );
};

const ModulesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-display text-foreground font-poppins mb-4">
            Оқу модульдары
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Әр модуль жеке грамматика тақырыбына арналған. Қадам-қадаммен үйреніп, практика жасаңыз.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div key={module.id} className="reveal-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <ModuleCard module={module} index={index} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 reveal-on-scroll">
          <button className="btn-hero">
            Барлық модульдарды көру
          </button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;