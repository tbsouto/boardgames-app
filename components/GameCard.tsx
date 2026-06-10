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
            : "group relative flex gap-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 cursor-pointer"
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
          className={`${viewMode === "cards"
            ? "absolute top-4 right-4"
            : "hidden"
            } z-20 bg-black/70 hover:bg-red-600 transition w-10 h-10 rounded-full flex items-center justify-center text-lg backdrop-blur`}
        >
          🗑️
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            onEdit();
          }}
          className={`${viewMode === "cards"
            ? "absolute top-4 right-16"
            : "hidden"
            } z-20 bg-black/70 hover:bg-red-600 transition w-10 h-10 rounded-full flex items-center justify-center text-lg backdrop-blur`}
        >
          ✏️
        </button>
        <button
          onClick={(e) => {

            e.preventDefault();
            e.stopPropagation();

            onSession();

          }}
          className={`${viewMode === "cards"
            ? "absolute top-4 right-28"
            : "hidden"
            } z-20 bg-black/70 hover:bg-red-600 transition w-10 h-10 rounded-full flex items-center justify-center text-lg backdrop-blur`}
        >
          🎲
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();

            onFavorite();
          }}
          className={`${viewMode === "cards"
            ? "absolute top-4 left-4"
            : "hidden"
            } z-20 bg-black/70 hover:bg-red-600 transition w-10 h-10 rounded-full flex items-center justify-center text-lg backdrop-blur ${game.favorite
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
                  ? "h-48 w-full object-contain group-hover:scale-105 transition duration-500 rounded-xl"
                  : "w-28 h-40 object-cover rounded-lg"
              }
            />
          </div>
        </div>

        <div className="flex flex-col flex-1 pt-3 px-5">
          <h2
            className={
              viewMode === "cards"
                ? "text-2xl font-bold line-clamp-2 min-h-[64px]"
                : "text-xl font-bold"
            }
          >
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

          <div className="mt-2">

            <p className="text-sm text-zinc-400">
              👥 {game.players}
              {" · "}
              ⏱️ {game.time}
              {" · "}
              🎂 {game.minAge}+
            </p>

            <div className="mt-1">
              <span className="bg-blue-900/40 px-3 py-1 rounded-full text-xs">
                🏷️ {game.category}
              </span>
            </div>
            {viewMode === "list" && (
              <div
                className="flex gap-2 mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onFavorite();
                  }}
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${game.favorite
                    ? "bg-pink-600"
                    : "bg-zinc-800 hover:bg-pink-600"
                    }`}
                >
                  ❤️
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSession();
                  }}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-green-600"
                >
                  🎲
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit();
                  }}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-blue-600"
                >
                  ✏️
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    const confirmed = confirm(
                      `¿Eliminar "${game.name}"?`
                    );

                    if (confirmed) {
                      onDelete();
                    }
                  }}
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-zinc-800 hover:bg-red-600"
                >
                  🗑️
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}