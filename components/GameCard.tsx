import { motion } from "framer-motion";

type Game = {
  id: number;
  name: string;
  description: string;
  minAge: number;
  players: string;
  time: string;
  image: string;
  favorite: boolean;
  category: string;
  rating: number;
  notes: string;
  expansions: any[];
};

type Props = {
  game: Game;
  viewMode: "cards" | "list";
  onDelete: () => void;
  onEdit: () => void;
  onClick: () => void;
  onFavorite: () => void;
  onSession: () => void;
};

export default function GameCard({
  game,
  viewMode,
  onDelete,
  onEdit,
  onClick,
  onFavorite,
  onSession,
}: Props) {
  return (
    
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <div
        className={
          viewMode === "cards"

            ? "group relative bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-xl cursor-pointer"

            : "group relative flex items-center gap-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 cursor-pointer"
        }
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            const confirmed = confirm(
              `¿Eliminar "${game.name}"?`
            );

            if (confirmed) {
              onDelete();
            }
          }}
          className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-red-600 transition w-10 h-10 rounded-full flex items-center justify-center text-lg backdrop-blur"
        >
          🗑️
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            onEdit();
          }}
          className="absolute top-4 right-16 z-20 bg-black/70 hover:bg-blue-600 transition w-10 h-10 rounded-full flex items-center justify-center text-lg backdrop-blur"
        >
          ✏️
        </button>
        <button
          onClick={(e) => {

            e.preventDefault();
            e.stopPropagation();

            onSession();

          }}
          className="absolute top-4 right-28 z-20 bg-black/70 hover:bg-green-600 transition w-10 h-10 rounded-full flex items-center justify-center text-lg backdrop-blur"
        >
          🎲
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            onFavorite();
          }}
          className={`absolute top-4 left-4 z-20 transition w-10 h-10 rounded-full flex items-center justify-center text-lg backdrop-blur ${game.favorite
            ? "bg-pink-600"
            : "bg-black/70 hover:bg-pink-600"
            }`}
        >
          ❤️
        </button>
        {game.expansions?.length > 0 && (

          <div className="absolute top-16 left-4 z-20 bg-blue-600/90 px-3 py-1 rounded-full text-xs">

            📦 {game.expansions.length}

          </div>

        )}
        <div className="overflow-hidden">
          <div className="overflow-hidden bg-zinc-950 flex items-center justify-center p-4">
            <img
              src={
                game.image?.trim()
                  ? game.image
                  : "/images/placeholder.jpg"
              }
              alt={game.name}
              className={
                viewMode === "cards"

                  ? "h-56 object-contain group-hover:scale-105 transition duration-500 rounded-xl"

                  : "w-20 h-28 object-cover rounded-lg"
              }
            />
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold">
            {game.name}
          </h2>
          <div
            className="flex gap-1 mt-2"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className="text-lg"
              >
                {star <= game.rating
                  ? "⭐"
                  : "☆"}
              </span>
            ))}
          </div>

          <div className="mt-4">

            <p className="text-sm text-zinc-400">
              👥 {game.players}
              {" · "}
              ⏱️ {game.time}
              {" · "}
              🎂 {game.minAge}+
            </p>

            <div className="mt-3">
              <span className="bg-blue-900/40 px-3 py-1 rounded-full text-xs">
                🏷️ {game.category}
              </span>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );  
}