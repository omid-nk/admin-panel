function UserCard() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-12 w-12 rounded">
        <img className="rounded" src="public/images/avatar.jpg" alt="" />
      </div>
      <div>
        <p className="line-clamp-1 cursor-default text-sm">Omid Daliri</p>
        <p className="cursor-default text-sm">Admin</p>
      </div>
    </div>
  );
}

export default UserCard;
