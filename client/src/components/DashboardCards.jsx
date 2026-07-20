const cards = [
  {
    title: "Documents",
    value: "120"
  },
  {
    title: "Shared",
    value: "35"
  },
  {
    title: "Teams",
    value: "12"
  }
];

function DashboardCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-8">

      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-xl p-6"
        >
          <h3 className="text-gray-500">
            {card.title}
          </h3>

          <h1 className="text-4xl font-bold mt-3">
            {card.value}
          </h1>
        </div>
      ))}

    </div>
  );
}

export default DashboardCards;