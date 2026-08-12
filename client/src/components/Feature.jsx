const feature = [
  {
    icon: "🔒",
    title: "Secure Storage",
    description: "Keep documents secure with encrypted cloud storage."
  },
  {
    icon: "☁️",
    title: "Cloud Sync",
    description: "Access documents anytime from anywhere."
  },
  {
    icon: "👥",
    title: "Easy Sharing",
    description: "Share documents with your teammates securely."
  }
];

function Feature() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center">
          Why Choose SyncDoc?
        </h2>

        <p className="text-center text-gray-500 mt-4">
          Everything you need to manage documents efficiently.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {feature.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-8"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-blue-600 mt-4">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Feature;