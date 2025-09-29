import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import testimonialsImage from '@/assets/testimonials.jpg';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Айгүл Сейсембаева',
    role: 'Студент, 2-курс',
    content: 'Grammar Hub арқылы екі айда conditionals тақырыбын толығымен меңгердім. Видеолар өте түсінікті әрі қызықты!',
    rating: 5,
    avatar: testimonialsImage,
  },
  {
    id: '2', 
    name: 'Данияр Қасымов',
    role: 'Менеджер',
    content: 'Жұмыстан кейін уақыт тауып ағылшынды жетілдіремін. Қысқа сабақтар мен интерактивті практика - дәл менің қажетім!',
    rating: 5,
    avatar: testimonialsImage,
  },
  {
    id: '3',
    name: 'Мәдина Төлеубаева',
    role: 'Мұғалім',
    content: 'Өз студенттеріме ұсынамын. Материал құрылымды әрі жүйелі берілген. Әсіресе практикалық бөлімі тамаша!',
    rating: 5,
    avatar: testimonialsImage,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-display text-foreground font-poppins mb-4">
            Студенттер не дейді?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Біздің курстарды аяқтаған студенттердің пікірлері
          </p>
        </div>

        {/* Carousel */}
        <div className="relative reveal-on-scroll">
          {/* Main Card */}
          <div className="bg-card border border-card-border rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-warm rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-warm-foreground" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[currentIndex].rating
                          ? 'text-warm fill-warm'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg lg:text-xl text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div>
                  <cite className="text-lg font-semibold text-foreground font-poppins not-italic">
                    {testimonials[currentIndex].name}
                  </cite>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-card-border bg-card hover:bg-muted transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-card-border bg-card hover:bg-muted transition-colors duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>

          {/* Auto-play indicator */}
          {isAutoPlaying && (
            <div className="absolute top-4 right-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 reveal-on-scroll">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-primary font-poppins mb-2">
              500+
            </div>
            <p className="text-muted-foreground">Сәтті студент</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-accent font-poppins mb-2">
              98%
            </div>
            <p className="text-muted-foreground">Қанағаттандыру деңгейі</p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-warm-foreground font-poppins mb-2">
              4.9★
            </div>
            <p className="text-muted-foreground">Орташа баға</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;