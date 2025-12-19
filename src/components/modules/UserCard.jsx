function UserCard({ isSidebarOpen }) {
  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      <div className="h-full w-9 rounded sm:w-12 md:h-12">
        <img className="rounded" src="public/images/avatar.jpg" alt="" />
      </div>
      <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
        <p className="line-clamp-1 cursor-default text-sm">Omid Daliri</p>
        <p className="cursor-default text-sm">Admin</p>
      </div>
    </div>
  );
}

export default UserCard;
