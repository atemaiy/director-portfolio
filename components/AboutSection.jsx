import { Mail } from 'lucide-react';
import { TelegramIcon } from './TelegramIcon';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-24 px-4 md:px-12 border-t border-white/10 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="w-full sm:w-3/4 md:w-1/3 aspect-[3/4] md:aspect-[3/4] relative overflow-hidden grayscale rounded-sm">
          <img 
            src="/polen.jpg" 
            alt="Полина Полищук" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl md:text-3xl font-light mb-6">Обо мне</h3>
          <div className="space-y-4 text-gray-300 leading-relaxed font-light text-base md:text-lg">
            <p>
              Независимый режиссёр документального кино. В фокусе моего внимания — социальные трансформации, антропология повседневности и истории людей, оказавшихся на изломе эпох.
            </p>
            <p>
              Выпускница Московской Школы Нового Кино. Мои работы были отмечены на международных фестивалях, включая IDFA и Артдокфест. Я верю в наблюдательную документалистику и минималистичное вмешательство в реальность.
            </p>
          </div>
          <div className="mt-8 pt-8 md:mt-10 md:pt-10 border-t border-white/10 flex flex-col space-y-4">
            <a href="mailto:polina-polisuk537@yandex.ru" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors w-fit">
              <Mail size={18} />
              <span className="tracking-wider text-sm md:text-base">polina-polisuk537@yandex.ru</span>
            </a>
            <a href="https://t.me/polinaPalinaa" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors w-fit">
              <TelegramIcon size={18} />
              <span className="tracking-wider text-sm md:text-base">@polinaPalinaa</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
