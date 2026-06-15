type Props = {
    sessionGame: any;
    setSessionGame: (
        game: any
    ) => void;
    sessionPlayers: string;
    setSessionPlayers: (
        value: string
    ) => void;

    sessionNotes: string;
    setSessionNotes: (
        value: string
    ) => void;
    savingSession: boolean;
    onSaveSession: () => void;
    sessions: any[];
    onDeleteSession: (
        id: number
    ) => void;
};

export default function GameSessionModal({
    sessionGame,
    setSessionGame,

    sessionPlayers,
    setSessionPlayers,

    sessionNotes,
    setSessionNotes,
    savingSession,
    onSaveSession,
    sessions,
    onDeleteSession,
}: Props) {

    if (!sessionGame)
        return null;

    return (

        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl w-full h-[80vh] flex flex-col overflow-hidden">

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
                        className="
                            w-full
                            p-4
                            rounded-xl
                            bg-zinc-800
                        "
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
                        className="
                            w-full
                            mt-4
                            p-4
                            rounded-xl
                            bg-zinc-800
                        "
                    />
                    <button
                        onClick={onSaveSession}
                        disabled={savingSession}
                        className="
                            mt-4
                            bg-emerald-700
                            hover:bg-emerald-600
                            disabled:bg-zinc-700
                            disabled:cursor-not-allowed
                            transition
                            px-6
                            py-3
                            rounded-2xl
                            font-semibold
                        "
                    >
                        {
                            savingSession
                                ? "Guardando..."
                                : "Guardar partida"
                        }
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
                                    className="
                                        bg-zinc-800
                                        rounded-2xl
                                        p-4
                                    "
                                >

                                    <div className="flex justify-between">

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

                                        <button
                                            onClick={() =>
                                                onDeleteSession(
                                                    session.id
                                                )
                                            }
                                            className="
                                            text-red-400
                                            hover:scale-110
                                            "
                                        >
                                            🗑️
                                        </button>

                                    </div>

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

            </div>

        </div>

    );

}