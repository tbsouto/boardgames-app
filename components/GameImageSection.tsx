type Props = {
    image: string;
    setImage: (
        value: string
    ) => void;

    onSearch: () => void;
    onImport: () => void;
};

export default function GameImageSection({
    image,
    setImage,
    onSearch,
    onImport,
}: Props) {

    return (

        <div>

            <h3 className="text-lg font-semibold mb-4">
                Imagen
            </h3>
            <button
                type="button"
                onClick={onSearch}
                className="
                    mb-4
                    px-4
                    py-2
                    rounded-xl
                    bg-blue-600
                "
            >
                🔍 Buscar imagen
            </button>
            <button
                type="button"
                onClick={onImport}
                disabled={!image.trim()}
                className="
                    mb-4 ml-2
                    px-4
                    py-2
                    rounded-xl
                    bg-emerald-600
                    disabled:opacity-50
                    disabled:cursor-not-allowed
                "
            >
                ☁️ Importar imagen
            </button>
            <input
                type="text"
                placeholder="URL de imagen"
                value={image}
                onChange={(e) =>
                    setImage(
                        e.target.value
                    )
                }
                className="
                    w-full
                    p-4
                    rounded-2xl
                    bg-zinc-800
                    border
                    border-zinc-700
                    mb-4
                "
            />
            {image && (

                <img
                    src={image}
                    alt="Preview"
                    className="
              w-full
              h-48
              object-cover
              rounded-2xl
            "
                />

            )}

        </div>
    );

}