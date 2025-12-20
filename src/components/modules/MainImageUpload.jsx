import { useRef, useState } from "react";
import { HiOutlinePhoto } from "react-icons/hi2";

function MainImageUpload() {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  function handleSelectImage(e) {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Main Product Image</label>

      {/* hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleSelectImage}
      />

      {/* custom UI */}
      <div
        onClick={() => inputRef.current.click()}
        className="flex h-40 cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 text-gray-500 transition hover:border-blue-500 hover:bg-blue-50"
      >
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className="h-full w-fit object-cover"
          />
        ) : (
          <>
            <HiOutlinePhoto className="h-8 w-8" />
            <p className="text-sm">Click to upload</p>
            <span className="text-xs text-gray-400">PNG, JPG up to 1MB</span>
          </>
        )}
      </div>
    </div>
  );
}

export default MainImageUpload;
