import { useState } from 'react';
import { ArrowRight, CheckCircle, RotateCcw } from 'lucide-react';

interface QuizItem {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const sampleQuiz: QuizItem = {
  id: 'conditional-1',
  question: 'Дұрыс нұсқаны таңдаңыз: "If it _____ tomorrow, we will stay home."',
  options: ['rain', 'rains', 'will rain', 'rained'],
  correct: 1,
  explanation: 'Шартты сөйлемдерде if кейін Present Simple қолданылады.'
};

const InteractiveQuiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setIsCorrect(index === sampleQuiz.correct);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(null);
    setShowResult(false);
    setIsCorrect(false);
  };

  return (
    <div className="bg-card border border-card-border rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-lg font-semibold text-card-foreground font-poppins">
          Практика
        </h4>
        {showResult && (
          <button
            onClick={resetQuiz}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-card-foreground transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Қайта жасау
          </button>
        )}
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-card-foreground leading-relaxed">
          {sampleQuiz.question}
        </p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {sampleQuiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !showResult && handleAnswerSelect(index)}
            disabled={showResult}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
              showResult
                ? index === sampleQuiz.correct
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : selectedAnswer === index && !isCorrect
                  ? 'border-red-500 bg-red-50 text-red-700'
                  : 'border-card-border bg-muted/30 text-muted-foreground'
                : 'border-card-border hover:border-primary hover:bg-primary/5 text-card-foreground'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                showResult && index === sampleQuiz.correct
                  ? 'border-green-500 bg-green-500'
                  : showResult && selectedAnswer === index && !isCorrect
                  ? 'border-red-500 bg-red-500'
                  : 'border-card-border'
              }`}>
                {showResult && index === sampleQuiz.correct && (
                  <CheckCircle className="w-4 h-4 text-white" />
                )}
                {showResult && selectedAnswer === index && !isCorrect && (
                  <span className="text-white text-xs">✕</span>
                )}
                {!showResult && (
                  <span className="text-xs font-medium text-muted-foreground">
                    {String.fromCharCode(65 + index)}
                  </span>
                )}
              </div>
              <span className="font-medium">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Result */}
      {showResult && (
        <div className={`p-4 rounded-lg ${
          isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
              isCorrect ? 'bg-green-500' : 'bg-red-500'
            }`}>
              {isCorrect ? (
                <CheckCircle className="w-4 h-4 text-white" />
              ) : (
                <span className="text-white text-xs">✕</span>
              )}
            </div>
            <span className={`font-semibold ${
              isCorrect ? 'text-green-700' : 'text-red-700'
            }`}>
              {isCorrect ? 'Дұрыс!' : 'Қате'}
            </span>
          </div>
          <p className={`text-sm ${
            isCorrect ? 'text-green-600' : 'text-red-600'
          }`}>
            {sampleQuiz.explanation}
          </p>
        </div>
      )}
    </div>
  );
};

const PracticeSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <h2 className="text-display text-foreground font-poppins mb-4">
            Интерактивті практика
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Білімді практика арқылы бекітіңіз. Әр жаттығу нақты мысалдармен және түсініктемелермен
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Quiz */}
          <div className="reveal-on-scroll">
            <InteractiveQuiz />
          </div>

          {/* Description */}
          <div className="reveal-on-scroll">
            <h3 className="text-title text-foreground font-poppins mb-6">
              Нақты жағдайларда практика
            </h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Дереу кері байланыс:</strong> Әр жауапқа детальды түсініктеме
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-accent" />
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Прогрессивті жүйе:</strong> Қарапайымнан күрделіге дейін
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-warm/10 flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-warm-foreground" />
                </div>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Шексіз қайталау:</strong> Жаттығуды қанша рет қалайсыз жасаңыз
                </p>
              </div>
            </div>

            <button className="btn-hero flex items-center gap-2">
              <span>Практикаға өту</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeSection;