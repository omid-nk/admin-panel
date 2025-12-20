import { useRef, useState } from "react";
import {
  HiOutlinePhoto,
  HiOutlineXMark,
  HiOutlineArrowsUpDown,
} from "react-icons/hi2";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

// تک آیتم sortable
function SortableItem({ img, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: img.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 150ms ease, opacity 150ms ease",
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="group relative w-full overflow-hidden rounded-xl shadow transition hover:shadow-lg"
      style={style}
    >
      <img
        src={img.preview}
        alt="gallery"
        className="h-28 w-full rounded-xl object-cover"
      />

      {/* overlay روی hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition group-hover:opacity-100">
        <HiOutlineXMark
          onClick={() => onRemove(img.id)}
          className="h-6 w-6 cursor-pointer rounded-full bg-red-600 p-1 text-white transition hover:bg-red-700"
        />
      </div>
    </div>
  );
}

export default function ProductGalleryUpload() {
  const inputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
  );

  function handleSelectImages(e) {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      id: crypto.randomUUID(),
    }));
    setImages((prev) => [...prev, ...newImages]);
  }

  function removeImage(id) {
    setImages((prev) => prev.filter((img) => img.id !== id));
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    setActiveId(null);
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex((img) => img.id === active.id);
    const newIndex = images.findIndex((img) => img.id === over.id);
    setImages((items) => arrayMove(items, oldIndex, newIndex));
  }

  function getActiveImage() {
    return images.find((img) => img.id === activeId);
  }

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium">Product Gallery</label>

      {/* hidden input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={handleSelectImages}
      />

      {/* upload box */}
      <div
        onClick={() => inputRef.current.click()}
        className="flex h-32 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 text-gray-500 transition hover:border-blue-500 hover:bg-blue-50"
      >
        <HiOutlinePhoto className="h-8 w-8" />
        <p className="text-sm">Click to upload</p>
        <span className="text-xs text-gray-400">
          You can upload multiple images
        </span>
      </div>

      {/* preview grid */}
      {images.length > 0 && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={images.map((img) => img.id)}
            strategy={rectSortingStrategy}
          >
            <div className="grid grid-cols-[repeat(auto-fill,minmax(120px,1fr))] gap-3">
              {images.map((img) => (
                <SortableItem key={img.id} img={img} onRemove={removeImage} />
              ))}
            </div>
          </SortableContext>

          {/* Drag overlay drag */}
          <DragOverlay>
            {activeId ? (
              <div className="h-28 w-28 rounded-xl shadow-lg">
                <img
                  src={getActiveImage().preview}
                  alt="drag overlay"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </div>
  );
}
