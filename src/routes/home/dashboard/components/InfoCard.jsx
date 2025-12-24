import infoCard from "../../../../data/infoCard";

function InfoCard() {
  return (
    <div className="flex flex-wrap gap-2">
      {infoCard.map((item) => (
        <div
          key={item.id}
          className="flex min-w-fit flex-1 flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-blue-400/10"
        >
          <div className="flex min-w-28 items-center gap-2">
            {item.icon && (
              <item.icon className="h-6 w-6 rounded-lg bg-blue-100 p-1 text-blue-600 dark:bg-blue-400/20 dark:text-gray-200" />
            )}
            <p className="cursor-default">{item.title}</p>
          </div>
          <div>
            <p className="cursor-default text-4xl font-bold">{item.data}</p>
          </div>
          <div className="relative h-1 w-full rounded bg-purple-100 dark:bg-gray-800">
            <span className="absolute h-full w-6/12 rounded bg-blue-600 dark:bg-gray-200"></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoCard;
