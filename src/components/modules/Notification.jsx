import { useState } from "react";
import { HiOutlineBell, HiOutlineBellAlert } from "react-icons/hi2";

function Notification() {
  const [haveNotif] = useState(false);
  return (
    <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-amber-100 p-1 text-amber-600">
      {!haveNotif ? (
        <HiOutlineBell className="h-5 w-5" />
      ) : (
        <HiOutlineBellAlert className="h-5 w-5" />
      )}
    </div>
  );
}

export default Notification;
