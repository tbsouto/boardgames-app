import Cropper from "react-easy-crop";

type Props = {
  cropImage: string | null;
  crop: any;
  zoom: number;
  setCrop: (crop: any) => void;
  setZoom: (zoom: number) => void;
  setCropImage: (
    value: string | null
  ) => void;
  setCroppedAreaPixels: (
    value: any
  ) => void;
  usePhoto: () => void;
};

export default function ImageCropperModal({
  cropImage,
  crop,
  zoom,
  setCrop,
  setZoom,
  setCropImage,
  setCroppedAreaPixels,
  usePhoto,
}: Props) {

  if (!cropImage)
    return null;

  return (

    <div
      className="
        fixed inset-0
        z-[999]
        bg-black/90
        flex flex-col
        items-center
        justify-center
        p-4
      "
    >

      <div
        className="
          relative
          w-full
          h-[60vh]
        "
      >

        <Cropper
          image={cropImage}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={(
            _,
            croppedAreaPixels
          ) =>
            setCroppedAreaPixels(
              croppedAreaPixels
            )
          }
        />

      </div>

      <input
        type="range"
        min={1}
        max={3}
        step={0.1}
        value={zoom}
        onChange={(e) =>
          setZoom(
            Number(
              e.target.value
            )
          )
        }
        className="
          w-full
          max-w-md
          mt-4
        "
      />

      <div className="flex gap-4 mt-6">

        <button
          onClick={() =>
            setCropImage(null)
          }
          className="
            px-6 py-3
            rounded-xl
            bg-zinc-700
          "
        >
          Cancelar
        </button>

        <button
          onClick={usePhoto}
          className="
            px-6 py-3
            rounded-xl
            bg-emerald-600
          "
        >
          Usar foto
        </button>

      </div>

    </div>

  );

}