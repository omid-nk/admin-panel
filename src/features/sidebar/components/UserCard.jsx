import userAvatar from "../../../assets/images/default-avatar.jpg";

function UserCard() {
  return (
    <div className="mb-4 border-b border-gray-200 pb-4">
      <div className="flex items-center gap-2">
        <img className="h-14 w-14 rounded-lg" src={userAvatar} alt="" />
        <div>
          <p className="line-clamp-1 cursor-default text-sm font-bold">
            Omid Daliri
          </p>
          <p className="mt-1 line-clamp-1 cursor-default text-xs">
            Omiidnk02@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
