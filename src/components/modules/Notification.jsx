import { useState } from "react";
import { HiOutlineBell, HiOutlineBellAlert } from "react-icons/hi2";
import NotificationsBox from "../NotificationsBox";

function Notification() {
  const [haveNotif] = useState(false);
  const [isNotificationsBoxOpen, setIsNotificationsBoxOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded bg-amber-100 p-1 text-amber-600">
        {!haveNotif ? (
          <HiOutlineBell
            className="h-5 w-5"
            onClick={() => {
              setIsNotificationsBoxOpen(!isNotificationsBoxOpen);
            }}
          />
        ) : (
          <HiOutlineBellAlert
            className="h-5 w-5"
            onClick={() => {
              setIsNotificationsBoxOpen(!isNotificationsBoxOpen);
            }}
          />
        )}
      </div>
      {isNotificationsBoxOpen ? <NotificationsBox /> : null}
    </div>
  );
}

export default Notification;
