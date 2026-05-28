"use client";
import { useEffect, useState } from "react";
import GameCard from "@/components/GameCard";
import { motion, AnimatePresence } from "framer-motion";

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
  sessions: any[];
  expansions: any[];
};

export default function Home() {
  const [games, setGames] = useState<Game[]>([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [players, setPlayers] = useState("");
  const [time, setTime] = useState("");
  const [minAge, setMinAge] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingGame, setEditingGame] = useState<any>(null);
  const [selectedGame, setSelectedGame] = useState<any>(null);
  const [sessionGame, setSessionGame] = useState<any>(null);
  const [sessions, setSessions] = useState<any[]>([]);
  const [noteText, setNoteText] = useState("");
  const [editingNotes, setEditingNotes] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"cards" | "list">("cards");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [category, setCategory] = useState("Estrategia");
  const [sessionPlayers, setSessionPlayers] = useState("");
  const [sessionNotes, setSessionNotes] = useState("");
  const [expansions, setExpansions] = useState<any[]>([]);
  const [expansionName, setExpansionName] = useState("");

  const searchGames = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `/api/search?q=${search}`
      );

      if (!res.ok) {
        throw new Error(
          `API Error ${res.status}`
        );
      }

      const data = await res.json();

      setGames(
        Array.isArray(data)
          ? data
          : []
      );

    } catch (error) {
      console.error(
        "Error buscando juegos:",
        error
      );

      setGames([]);
    }

    setLoading(false);
  };
  useEffect(() => {
    searchGames();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      searchGames();
    }, 300);

    return () => clearTimeout(timeout);
  }, [search]);
  const addGame = async () => {
    console.log(image);
    await fetch("/api/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        players,
        time,
        minAge,
        image,
        category,
      }),
    });

    // RECARGAR DESDE DB
    await searchGames();

    // LIMPIAR FORM
    setName("");
    setDescription("");
    setPlayers("");
    setTime("");
    setMinAge("");
    setImage("");
    setCategory("");
  };
  const editGame = async () => {
    await fetch("/api/games", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: editingGame.id,
        name,
        description,
        players,
        time,
        minAge,
        image,
        category,
      }),
    });

    await searchGames();

    setShowModal(false);

    setEditingGame(null);

    setName("");
    setDescription("");
    setPlayers("");
    setTime("");
    setMinAge("");
    setImage("");
    setCategory("");
  };
  const saveNotes = async () => {

    await fetch(
      "/api/games",
      {
        method: "PATCH",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({

          id: selectedGame.id,

          notes: noteText

        })
      }
    );

    setSelectedGame({

      ...selectedGame,

      notes: noteText

    });

    await searchGames();
    setEditingNotes(false);
  };
  const addSession = async () => {

    await fetch(
      "/api/sessions",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json"
        },
        body: JSON.stringify({

          gameId:
            sessionGame.id,

          players:
            sessionPlayers,

          notes:
            sessionNotes

        })
      }
    );

    // limpiar inputs
    setSessionPlayers("");
    setSessionNotes("");

    // recargar historial
    const res =
      await fetch(
        `/api/sessions?gameId=${sessionGame.id}`
      );

    const data =
      await res.json();

    setSessions(data);

  };
  const addExpansion =
    async () => {

      await fetch(
        "/api/expansions",
        {

          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            gameId:
              selectedGame.id,

            name:
              expansionName

          })

        }
      );

      setExpansionName("");

      const res =
        await fetch(

          `/api/expansions?gameId=${selectedGame.id}`

        );

      const data =
        await res.json();

      setExpansions(data);

    };
  const deleteExpansion =
    async (id: number) => {

      await fetch(

        `/api/expansions?id=${id}`,

        {
          method: "DELETE"
        }

      );

      setExpansions(

        expansions.filter(
          e => e.id !== id
        )

      );

    };
  const deleteSession =
    async (id: number) => {

      const confirmed =
        confirm(
          "¿Eliminar partida?"
        );

      if (!confirmed) return;

      await fetch(

        `/api/sessions?id=${id}`,

        {
          method: "DELETE"
        }

      );

      setSessions(

        sessions.filter(
          s => s.id !== id
        )

      );

    };
  const totalGames =
    games.length;

  const totalFavorites =
    games.filter(
      g => g.favorite
    ).length;

  const totalSessions =
    games.reduce(
      (acc, game) =>

        acc +
        (game.sessions?.length || 0),

      0
    );

  const mostPlayed =

    games
      .sort(
        (a, b) =>

          (b.sessions?.length || 0)
          -
          (a.sessions?.length || 0)
      )[0];

  const lastSession =
    games
      .flatMap(
        game =>
          game.sessions || []
      )
      .sort(
        (a, b) =>

          new Date(
            b.date
          ).getTime()

          -

          new Date(
            a.date
          ).getTime()

      )[0];

  const averageRating =
    games.length
      ? (
        games.reduce(
          (acc, g) =>
            acc + g.rating,
          0
        ) / games.length
      ).toFixed(1)
      : "0";

  const topCategory =
    Object.entries(
      games.reduce(
        (acc: any, game) => {
          acc[
            game.category
          ] =
            (acc[
              game.category
            ] || 0) + 1;

          return acc;

        }, {}
      )
    )
      .sort(
        (a: any, b: any) =>
          b[1] - a[1]
      )[0]?.[0]
    || "-";
  const getTimeAgo = (
    date: string
  ) => {

    const diff =

      Math.floor(

        (
          Date.now()

          -

          new Date(
            date
          ).getTime()

        )

        / (1000 * 60 * 60 * 24)

      );

    if (diff === 0)
      return "Hoy";

    if (diff === 1)
      return "Hace 1 día";

    if (diff < 7)
      return `Hace ${diff} días`;

    const weeks =
      Math.floor(
        diff / 7
      );

    if (weeks === 1)
      return "Hace 1 semana";

    return `Hace ${weeks} semanas`;

  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-white">

      {/* NAVBAR */}
      <header className="border-b border-zinc-800 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            🎲 BoardGames
          </h1>

          <p className="text-zinc-400 text-sm">
            Tu colección personal
          </p>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Descubre y organiza
            <span className="text-blue-500">
              {" "}tus juegos favoritos
            </span>
          </h2>

          <p className="mt-4 text-zinc-400">
            Guarda juegos, crea colecciones y construye tu biblioteca personal.
          </p>
        </div>

        {/* MINI STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl px-4 py-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">🎲</span>

              <div>
                <p className="text-zinc-500 text-xs">
                  Juegos
                </p>

                <p className="font-bold text-lg">
                  {totalGames}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl px-4 py-3">

            <div className="flex items-center gap-3">

              <span className="text-xl">
                🕒
              </span>

              <div>

                <p className="text-zinc-500 text-xs">
                  Última partida
                </p>

                <p className="font-bold text-sm">

                  {lastSession
                    ? getTimeAgo(
                      lastSession.date
                    )
                    : "-"}

                </p>

              </div>

            </div>

          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl px-4 py-3">

            <div className="flex items-center gap-3">

              <span className="text-xl">
                🔥
              </span>

              <div>

                <p className="text-zinc-500 text-xs">
                  Partidas
                </p>

                <p className="font-bold text-lg">
                  {totalSessions}
                </p>

              </div>
            </div>
          </div>


          <div className="bg-zinc-900/70 border border-zinc-800 rounded-2xl px-4 py-3">

            <div className="flex items-center gap-3">

              <span className="text-xl">
                🏆
              </span>

              <div>

                <p className="text-zinc-500 text-xs">
                  Top juego
                </p>

                <p className="font-bold text-sm">

                  {mostPlayed?.name || "-"}

                  {" "}

                  ({mostPlayed?.sessions?.length || 0})

                </p>

              </div>
            </div>
          </div>

        </div>

        {/* SEARCH + ADD */}
        <div className="mt-8 flex flex-col md:flex-row gap-3">

          <input
            type="text"
            placeholder="🔍 Buscar juego..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="flex-1 p-4 rounded-2xl bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="bg-green-600 hover:bg-green-700 transition px-6 rounded-2xl font-semibold"
          >
            + Añadir
          </button>

        </div>

        {/* FILTROS */}
        <div className="flex flex-wrap gap-3 mt-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-3">

          <button
            onClick={() =>
              setShowFavorites(!showFavorites)
            }
            className={`px-4 py-2 rounded-xl transition ${showFavorites
              ? "bg-pink-600"
              : "bg-zinc-800 hover:bg-zinc-700"
              }`}
          >
            ❤️ Favoritos
          </button>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value)
            }
            className="bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700"
          >
            <option value="name">Nombre A-Z</option>
            <option value="favorite">Favoritos primero</option>
            <option value="age">Edad mínima</option>
            <option value="time">Duración</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(e.target.value)
            }
            className="bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-700"
          >
            <option value="all">Todas</option>
            <option value="Estrategia">🧠 Estrategia</option>
            <option value="Party">🎉 Party</option>
            <option value="Cooperativo">🤝 Cooperativo</option>
            <option value="Familiar">👨‍👩‍👧 Familiar</option>
            <option value="Eurogame">🏰 Eurogame</option>
          </select>
          <div className="flex bg-zinc-800 rounded-xl overflow-hidden">

            <button
              onClick={() =>
                setViewMode("cards")
              }
              className={`px-4 py-2 ${viewMode === "cards"
                ? "bg-blue-600"
                : ""
                }`}
            >
              ▦
            </button>

            <button
              onClick={() =>
                setViewMode("list")
              }
              className={`px-4 py-2 ${viewMode === "list"
                ? "bg-blue-600"
                : ""
                }`}
            >
              ☰
            </button>

          </div>
        </div>

      </section>
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 40
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20
            }}
            transition={{
              duration: 0.25
            }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-3xl w-full h-[90vh] flex flex-col overflow-hidden"
          >

            {/* CABECERA */}
            <div className="flex justify-between items-center p-6 border-b border-zinc-800 shrink-0">

              <h3 className="text-3xl font-bold">

                {editingGame
                  ? "Editar juego"
                  : "Añadir juego"}

              </h3>

              <button
                onClick={() => {
                  setShowModal(false);

                  setEditingGame(null);

                  setName("");
                  setDescription("");
                  setPlayers("");
                  setTime("");
                  setMinAge("");
                  setImage("");

                }}
                className="bg-black/60 hover:bg-zinc-700 transition w-10 h-10 rounded-full flex items-center justify-center"
              >
                ✕
              </button>

            </div>

            {/* CONTENIDO CON SCROLL */}

            <div className="flex-1 overflow-y-auto p-8">

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="Nombre"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="p-4 rounded-2xl bg-zinc-800 border border-zinc-700"
                />

                <input
                  type="number"
                  placeholder="Edad mínima"
                  value={minAge}
                  onChange={(e) =>
                    setMinAge(e.target.value)
                  }
                  className="p-4 rounded-2xl bg-zinc-800 border border-zinc-700"
                />

                <input
                  type="text"
                  placeholder="Jugadores"
                  value={players}
                  onChange={(e) =>
                    setPlayers(e.target.value)
                  }
                  className="p-4 rounded-2xl bg-zinc-800 border border-zinc-700"
                />

                <input
                  type="text"
                  placeholder="Duración"
                  value={time}
                  onChange={(e) =>
                    setTime(e.target.value)
                  }
                  className="p-4 rounded-2xl bg-zinc-800 border border-zinc-700"
                />

                <select
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="p-4 rounded-2xl bg-zinc-800 border border-zinc-700"
                >
                  <option>Estrategia</option>
                  <option>Party</option>
                  <option>Cooperativo</option>
                  <option>Familiar</option>
                  <option>Eurogame</option>
                </select>

              </div>

              <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) =>
                  setDescription(
                    e.target.value
                  )
                }
                className="w-full mt-6 p-4 rounded-2xl bg-zinc-800 border border-zinc-700 min-h-[220px]"
              />

              <label
                className="
    flex items-center
    justify-center
    p-4
    rounded-2xl
    bg-zinc-800
    border border-zinc-700
    cursor-pointer
    hover:bg-zinc-700
    transition
    mt-4
  "
              >

                📸 Hacer foto

                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="hidden"

                  onChange={async (e) => {

                    const file =
                      e.target.files?.[0];

                    if (!file) return;

                    const formData =
                      new FormData();

                    formData.append(
                      "file",
                      file
                    );

                    const res =
                      await fetch(
                        "/api/upload",
                        {
                          method: "POST",
                          body: formData,
                        }
                      );

                    const data =
                      await res.json();

                    setImage(data.url);

                  }}

                />

              </label>
              {image && (

                <img
                  src={image}
                  alt="Preview"
                  className="
    w-full
    h-48
    object-cover
    rounded-2xl
    mt-4
  "
                />

              )}
              <button
                onClick={async () => {
                  if (editingGame) {
                    await editGame();
                  } else {
                    await addGame();
                    setShowModal(false);
                  }
                }}
                className="mt-8 bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-2xl font-semibold"
              >
                {editingGame
                  ? "Guardar cambios"
                  : "Guardar juego"}
              </button>

            </div>

          </motion.div>
        </div>
      )}
      {sessionGame && (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

          <motion.div
            initial={{
              opacity: 0,
              scale: .9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl w-full h-[80vh] flex flex-col overflow-hidden"
          >

            <div className="flex justify-between items-center p-6 border-b border-zinc-800">

              <h2 className="text-2xl font-bold">

                🎲 {sessionGame.name}

              </h2>

              <button
                onClick={() =>
                  setSessionGame(null)
                }
                className="bg-black/60 w-10 h-10 rounded-full"
              >
                ✕
              </button>

            </div>


            <div className="flex-1 overflow-y-auto p-6">

              <input
                type="text"
                placeholder="Jugadores"
                value={sessionPlayers}
                onChange={(e) =>
                  setSessionPlayers(
                    e.target.value
                  )
                }
                className="w-full p-4 rounded-xl bg-zinc-800"
              />

              <textarea
                placeholder="Notas"
                value={sessionNotes}
                onChange={(e) =>
                  setSessionNotes(
                    e.target.value
                  )
                }
                rows={2}
                className="w-full mt-4 p-4 rounded-xl bg-zinc-800"
              />

              <button
                onClick={addSession}
                className="mt-4 bg-green-600 px-5 py-3 rounded-xl"
              >
                Guardar partida
              </button>

              <h3 className="mt-8 text-xl font-bold">
                Historial
              </h3>

              <div className="mt-4 space-y-3">

                {sessions.length === 0 && (

                  <p className="text-zinc-500">

                    Sin partidas todavía

                  </p>

                )}

                {sessions.map(
                  (session) => (

                    <div
                      key={session.id}
                      className="bg-zinc-800 rounded-2xl p-4"
                    >

                      <div className="flex justify-between">

                        <p className="text-sm text-zinc-400">

                          📅 {
                            new Date(
                              session.date
                            )
                              .toLocaleDateString(
                                "es-ES"
                              )
                          }

                          {" · "}

                          👥 {
                            session.players
                          }

                        </p>

                        <button
                          onClick={() =>
                            deleteSession(
                              session.id
                            )
                          }
                          className="text-red-400 hover:scale-110"
                        >
                          🗑️
                        </button>

                      </div>

                      <p className="text-sm text-zinc-400">

                        📅 {
                          new Date(
                            session.date
                          ).toLocaleDateString(
                            "es-ES"
                          )
                        }

                        {" · "}

                        👥 {
                          session.players
                        }

                      </p>

                      {session.notes && (

                        <p className="mt-2">

                          {session.notes}

                        </p>

                      )}

                    </div>

                  )
                )}

              </div>

            </div>

          </motion.div>

        </div>

      )}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          >

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20
              }}
              transition={{
                duration: 0.25
              }}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-5xl w-full h-[90vh] flex flex-col overflow-hidden"
            >

              {/* CABECERA FIJA */}
              <div className="flex justify-end p-4 border-b border-zinc-800 shrink-0">
                <button
                  onClick={() =>
                    setSelectedGame(null)
                  }
                  className="bg-black/60 hover:bg-zinc-700 transition w-10 h-10 rounded-full flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* ZONA SCROLL */}
              <div className="flex-1 overflow-y-auto">

                <div className="grid md:grid-cols-[320px_1fr]">


                  {/* IMAGE */}
                  <div className="bg-zinc-950 p-6 flex justify-center items-start">
                    <img
                      src={
                        selectedGame.image?.trim()
                          ? selectedGame.image
                          : "/images/placeholder.jpg"
                      }
                      alt={selectedGame.name}
                      className="w-full max-w-[260px] rounded-2xl shadow-2xl"
                    />
                  </div>

                  {/* INFO */}
                  <div className="p-10">

                    <h2 className="text-5xl font-black">
                      {selectedGame.name}
                    </h2>
                    <div
                      className="flex gap-1 mt-4"
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={async () => {

                            await fetch(
                              "/api/games",
                              {
                                method: "PATCH",
                                headers: {
                                  "Content-Type":
                                    "application/json"
                                },
                                body: JSON.stringify({
                                  id: selectedGame.id,
                                  rating: star
                                })
                              }
                            );

                            setSelectedGame({
                              ...selectedGame,
                              rating: star
                            });

                            await searchGames();

                          }}
                          className="text-3xl hover:scale-125 transition"
                        >
                          {star <= selectedGame.rating
                            ? "⭐" : "☆"}
                        </button>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 mt-6">
                      <span className="bg-zinc-800 px-4 py-2 rounded-full">
                        🎂 {selectedGame.minAge}+
                      </span>

                      <span className="bg-zinc-800 px-4 py-2 rounded-full">
                        👥 {selectedGame.players}
                      </span>

                      <span className="bg-zinc-800 px-4 py-2 rounded-full">
                        ⏱️ {selectedGame.time}
                      </span>

                      <span className="bg-zinc-800 px-4 py-2 rounded-full">
                        🏷️ {selectedGame.category}
                      </span>
                    </div>

                    <p className="mt-8 text-zinc-300 text-lg leading-relaxed">
                      {selectedGame.description}
                    </p>
                    <div className="mt-10">

                      <h3 className="text-2xl font-bold">
                        📝 Notas personales
                      </h3>

                      {!editingNotes ? (

                        <>

                          <div className="mt-4 bg-zinc-800 rounded-2xl p-4">

                            <p className="whitespace-pre-wrap text-zinc-300">

                              {selectedGame.notes ||

                                "Sin notas"}

                            </p>

                          </div>

                          <button
                            onClick={() => {
                              setNoteText(
                                selectedGame.notes || ""
                              );

                              setEditingNotes(true);

                            }}
                            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl"
                          >
                            ✏️ Editar
                          </button>

                        </>

                      ) : (

                        <>

                          <textarea
                            value={noteText}
                            onChange={(e) =>
                              setNoteText(
                                e.target.value
                              )
                            }
                            rows={5}
                            className="mt-4 w-full p-4 rounded-2xl bg-zinc-800"
                          />

                          <div className="flex gap-3 mt-4">

                            <button
                              onClick={saveNotes}
                              className="bg-green-600 px-4 py-2 rounded-xl"
                            >
                              Guardar
                            </button>

                            <button
                              onClick={() =>
                                setEditingNotes(false)
                              }
                              className="bg-zinc-700 px-4 py-2 rounded-xl"
                            >
                              Cancelar
                            </button>

                          </div>

                        </>

                      )}
                      <div className="mt-10">

                        <h3 className="text-2xl font-bold">

                          📦 Expansiones

                        </h3>


                        <div className="space-y-2 mt-4">

                          {expansions.map(
                            (exp) => (

                              <div
                                key={exp.id}
                                className="bg-zinc-800 rounded-xl p-3 flex justify-between"
                              >

                                <span>
                                  {exp.name}
                                </span>

                                <button
                                  onClick={() =>
                                    deleteExpansion(
                                      exp.id
                                    )
                                  }
                                  className="text-red-400"
                                >
                                  🗑️
                                </button>

                              </div>

                            ))
                          }

                        </div>


                        <div className="flex gap-2 mt-4">

                          <input

                            value={
                              expansionName
                            }

                            onChange={(e) =>

                              setExpansionName(
                                e.target.value
                              )

                            }

                            placeholder=
                            "Nueva expansión"

                            className="flex-1 p-3 rounded-xl bg-zinc-800"

                          />

                          <button

                            onClick={
                              addExpansion
                            }

                            className="bg-green-600 px-4 rounded-xl"

                          >

                            +

                          </button>

                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GAMES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {loading && (
          <p className="mb-6 text-zinc-400">
            Buscando juegos...
          </p>
        )}

        <div
          className={
            viewMode === "cards"

              ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"

              : "flex flex-col gap-3"
          }
        >
          {games
            .filter((game) => {
              const favoriteMatch =
                showFavorites
                  ? game.favorite
                  : true;

              const categoryMatch =
                categoryFilter === "all"
                  ? true
                  : game.category ===
                  categoryFilter;

              return (
                favoriteMatch &&
                categoryMatch
              );
            })
            .sort((a, b) => {
              switch (sortBy) {
                case "favorite":
                  return Number(
                    b.favorite
                  ) - Number(a.favorite);

                case "age":
                  return (
                    a.minAge - b.minAge
                  );

                case "time":
                  return parseInt(
                    a.time
                  ) - parseInt(b.time);

                default:
                  return a.name.localeCompare(
                    b.name
                  );
              }
            })
            .map((game) => (
              <GameCard
                viewMode={viewMode}
                key={game.id}
                game={game}
                onFavorite={async () => {
                  await fetch("/api/games", {
                    method: "PATCH",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: game.id,
                      favorite: !game.favorite,
                    }),
                  });

                  await searchGames();
                }}
                onDelete={async () => {
                  await fetch(
                    `/api/games?id=${game.id}`,
                    {
                      method: "DELETE",
                    }
                  );

                  await searchGames();
                }}
                onEdit={() => {
                  setEditingGame(game);

                  setName(game.name);
                  setDescription(game.description);
                  setPlayers(game.players);
                  setTime(game.time);
                  setMinAge(String(game.minAge));
                  setImage(game.image);
                  setCategory(game.category);

                  setShowModal(true);
                }}
                onSession={async () => {

                  setSessionGame(game);

                  setSessionPlayers("");

                  setSessionNotes("");

                  const res =
                    await fetch(
                      `/api/sessions?gameId=${game.id}`
                    );

                  const data =
                    await res.json();

                  setSessions(data);

                }}
                onClick={async () => {

                  setSelectedGame(game);

                  setNoteText(
                    game.notes || ""
                  );

                  setEditingNotes(false);

                  const res =
                    await fetch(
                      `/api/expansions?gameId=${game.id}`
                    );

                  const data =
                    await res.json();

                  setExpansions(data);

                }}
              />
            ))}
        </div>
      </section>
    </main >
  );
}