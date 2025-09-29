import { Play, PenTool, Award } from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Play,
    title: 'Видео көру',
    description: 'Қысқа және түсінікті видео сабақтарды тамаша',
    color: 'from-primary to-accent',
  },
  {
    id: 2,
    icon: PenTool,
    title: 'Практика жасау',
    description: 'Интерактивті жаттығулар арқылы білімді бекіт',
    color: 'from-accent to-warm',
  },
  {
    id: 3,
    icon: Award,
    title: 'Ачивка алу',
    description: 'Жетістіктерің үшін бэйдж пен балл жина',
    color: 'from-warm to-primary',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-display text-foreground font-poppins mb-4">
            Қалай жұмыс істейді?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Үш қарапайым қадаммен ағылшын грамматикасын меңгеріңіз
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-warm transform -translate-y-1/2 -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="text-center reveal-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-card-border rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-foreground">{step.id}</span>
                  </div>
                  
                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-12 transform">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-muted-foreground/30" />
                      <div className="absolute -right-1 -top-1 w-2 h-2 bg-muted-foreground/30 rounded-full" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 font-poppins">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 reveal-on-scroll">
          <p className="text-muted-foreground mb-6">
            Дәл қазір бастаңыз және тегін сынап көріңіз!
          </p>
          <button className="btn-hero">
            Тегін сынау
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;