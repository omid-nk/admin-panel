import { useState, useRef, useEffect } from "react";
import { HiOutlineBell, HiOutlineBellAlert } from "react-icons/hi2";

function Notification() {
  const [haveNotif] = useState(false);
  const [isNotificationsBoxOpen, setIsNotificationsBoxOpen] = useState(false);

  const notifRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setIsNotificationsBoxOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={notifRef} className="relative">
      {/* icon */}
      <div
        onClick={() => setIsNotificationsBoxOpen((prev) => !prev)}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-amber-100 p-1 text-amber-600"
      >
        {!haveNotif ? (
          <HiOutlineBell className="h-5 w-5" />
        ) : (
          <HiOutlineBellAlert className="h-5 w-5" />
        )}
      </div>

      {/* drop box */}
      <div
        className={`absolute top-full right-0 mt-2 origin-top-right rounded border bg-white p-6 text-sm shadow-lg transition-all duration-200 ease-out ${
          isNotificationsBoxOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
        } `}
      >
        Empty
      </div>
    </div>
  );
}

export default Notification;
