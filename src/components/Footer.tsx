import { BookOpen, Mail, Phone, MapPin, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Курс туралы',
      links: [
        { label: 'Модульдер', href: '#modules' },
        { label: 'Қалай жұмыс істейді', href: '#how-it-works' },
        { label: 'Пікірлер', href: '#testimonials' },
        { label: 'Жиі қойылатын сұрақтар', href: '#faq' },
      ]
    },
    {
      title: 'Пайдалы',
      links: [
        { label: 'Тегін сынау', href: '#trial' },
        { label: 'Прогресс трекері', href: '#progress' },
        { label: 'Мобильді қосымша', href: '#app' },
        { label: 'Сертификат', href: '#certificate' },
      ]
    },
    {
      title: 'Қолдау',
      links: [
        { label: 'Көмек орталығы', href: '#help' },
        { label: 'Байланыс', href: '#contact' },
        { label: 'Техникалық қолдау', href: '#support' },
        { label: 'Қауіпсіздік', href: '#privacy' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Youtube, href: '#youtube', label: 'YouTube' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="font-poppins font-bold text-2xl text-background">
                    Grammar Hub
                  </h2>
                  <p className="text-background/70 text-sm">
                    Ағылшын грамматикасы
                  </p>
                </div>
              </div>
              
              <p className="text-background/80 leading-relaxed mb-6">
                Ағылшын тілінің грамматикасын тез әрі тиімді түрде үйренуге арналған заманауи онлайн платформа. Интерактивті сабақтар мен практикалық тапсырмалар арқылы тіл деңгейіңізді жетілдіріңіз.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-background/80">info@grammarhub.kz</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-background/80">+7 (777) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-background/80">Алматы, Қазақстан</span>
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {footerSections.map((section) => (
                  <div key={section.title}>
                    <h3 className="font-poppins font-semibold text-lg text-background mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.links.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className="text-background/70 hover:text-background transition-colors duration-200"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-background/70">
                © {currentYear} Grammar Hub. Барлық құқықтар қорғалған.
              </p>
              <p className="text-background/50 text-sm mt-1">
                Made with ❤️ in Kazakhstan | Интерфейс қазақ тілінде
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-background/70 text-sm mr-2">Бізбен байланысыңыз:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-background/20 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-background/70 hover:text-background" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#privacy"
                className="text-background/70 hover:text-background transition-colors duration-200"
              >
                Құпиялылық саясаты
              </a>
              <a
                href="#terms"
                className="text-background/70 hover:text-background transition-colors duration-200"
              >
                Пайдалану шарттары
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-40"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;