import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const games = [
  { id: 1, title: "Catalepsy", genre: "Action RPG", color: "from-purple-900 to-indigo-800" },
  { id: 2, title: "Neon Drift", genre: "Racing", color: "from-cyan-900 to-blue-800" },
  { id: 3, title: "Iron Pulse", genre: "Sci-Fi Shooter", color: "from-red-900 to-orange-800" },
  { id: 4, title: "Silent Epoch", genre: "Horror", color: "from-gray-900 to-neutral-800" },
  { id: 5, title: "Sky Nomads", genre: "Adventure", color: "from-emerald-900 to-teal-800" },
];

export default function Featured() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="https://cdn.poehali.dev/projects/3af8de81-e2d5-4d25-8027-112b33ed7415/files/e42f32a4-e987-455f-925c-34d1e35fd6d8.jpg"
            alt="Mysterious cave with bioluminescence"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Игровая студия Enpoch</h3>
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
            Мы не просто делаем игры — мы строим вселенные. Каждый проект — это уникальный опыт,
            где геймплей, нарратив и визуал сливаются в единое целое.
          </p>
          <button
            onClick={() => setShowProjects(!showProjects)}
            className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
          >
            {showProjects ? "Скрыть" : "Наши проекты"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {showProjects && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-12">
              <h3 className="uppercase text-sm tracking-wide text-neutral-600 mb-6">Проекты</h3>
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
                {games.map((game) => (
                  <div
                    key={game.id}
                    className={`flex-shrink-0 w-[280px] h-[380px] rounded-lg bg-gradient-to-br ${game.color} flex flex-col justify-end p-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300`}
                  >
                    <span className="text-white/60 text-xs uppercase tracking-wide mb-1">{game.genre}</span>
                    <h4 className="text-white text-2xl font-bold">{game.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}