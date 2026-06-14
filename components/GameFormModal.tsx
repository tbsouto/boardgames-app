import { motion } from "framer-motion";
import GameImageSection from "./GameImageSection";

type Props = {
    showModal: boolean;
    editingGame: any;
    setShowModal: (
        value: boolean
    ) => void;

    formData: any;

    setFormData: (
        data: any
    ) => void;

    onImportImage: () => void;
    onSave: () => void;
    saving: boolean;
};

export default function GameFormModal({
    showModal,
    editingGame,
    setShowModal,
    formData,
    setFormData,
    onImportImage,
    onSave,
    saving,
}: Props) {

    if (!showModal)
        return null;

    return (
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

                <div className="flex justify-between items-center p-6 border-b border-zinc-800 shrink-0">

                    <h2 className="text-2xl font-bold">
                        {editingGame
                            ? "Editar juego"
                            : "Nuevo juego"}
                    </h2>
                    <button
                        onClick={() =>
                            setShowModal(false)
                        }
                        className="
                        text-zinc-400
                        hover:text-white
                        text-2xl
                    "
                    >
                        ✕
                    </button>

                </div>
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="flex-1 overflow-y-auto p-6">

                        <div className="space-y-2">

                            <div>

                                <label className="block text-sm text-zinc-400 mb-1">
                                    Nombre
                                </label>

                                <input
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name:
                                                e.target.value,
                                        })
                                    }
                                    className="
                                        w-full
                                        p-4
                                        rounded-2xl
                                        bg-zinc-800
                                        border border-zinc-700
                                    "
                                />
                                
                            </div>
                            <div>

                                <label className="block text-sm text-zinc-400 mb-1">
                                    Descripción
                                </label>

                                <textarea
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            description:
                                                e.target.value,
                                        })
                                    }
                                    className="
                                        w-full
                                        mt-1
                                        p-4
                                        rounded-2xl
                                        bg-zinc-800
                                        border border-zinc-700
                                        min-h-[220px]
                                    "
                                />

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">

                                <div>
                                    <label className="block text-sm text-zinc-400 mb-1">
                                        Edad mínima
                                    </label>

                                    <input
                                        type="number"
                                        value={formData.minAge}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                minAge:
                                                    e.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            p-4
                                            rounded-2xl
                                            bg-zinc-800
                                            border border-zinc-700
                                        "
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-zinc-400 mb-1">
                                        Jugadores
                                    </label>

                                    <input
                                        type="text"
                                        value={formData.players}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                players:
                                                    e.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            p-4
                                            rounded-2xl
                                            bg-zinc-800
                                            border border-zinc-700
                                        "
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-zinc-400 mb-1">
                                        Duración
                                    </label>

                                    <input
                                        type="text"
                                        value={formData.time}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                time:
                                                    e.target.value,
                                            })
                                        }
                                        className="
                                            w-full
                                            p-4
                                            rounded-2xl
                                            bg-zinc-800
                                            border border-zinc-700
                                        "
                                    />
                                </div>

                            </div>

                            <div className="mt-4">

                                <label className="block text-sm text-zinc-400 mb-1">
                                    Categoría
                                </label>

                                <select
                                    value={formData.category}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            category:
                                                e.target.value,
                                        })
                                    }
                                    className="
                                    w-full
                                    p-4
                                    rounded-2xl
                                    bg-zinc-800
                                    border border-zinc-700
                                    "
                                >
                                    <option>Estrategia</option>
                                    <option>Party</option>
                                    <option>Cooperativo</option>
                                    <option>Familiar</option>
                                    <option>Eurogame</option>
                                    <option>Confrontación</option>
                                    <option>Deducción</option>
                                    <option>Cartas</option>
                                    <option>Lógica</option>
                                </select>

                            </div>
                            <GameImageSection
                                image={formData.image}
                                setImage={(value) =>
                                    setFormData({
                                        ...formData,
                                        image: value,
                                    })
                                }
                                onSearch={() => {

                                    if (!formData.name.trim())
                                        return;

                                    window.open(
                                        `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(
                                            formData.name +
                                            " juego de mesa"
                                        )}`,
                                        "_blank"
                                    );

                                }}
                                onImport={onImportImage}
                            />
                            <div className="mt-8 flex justify-end">

                                <button
                                    onClick={onSave}
                                    className="
                                        bg-emerald-700
                                        hover:bg-emerald-600
                                        transition
                                        px-8
                                        py-4
                                        rounded-2xl
                                        font-semibold
                                    "
                                    disabled={saving}
                                >
                                    {
                                        saving
                                            ? "Guardando..."
                                            : editingGame
                                                ? "Guardar cambios"
                                                : "Añadir juego"
                                    }
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>

        </div>
    );

}