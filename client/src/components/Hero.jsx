import HeroImage from "../assets/images/hero.svg";

function Hero() {
  return (
    <section className="bg-slate-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-8">

        <div>
          <h1 className="text-6xl font-bold text-slate-800 leading-tight">
            Secure <span className="text-blue-600">Document</span>
            <br />
            Management
          </h1>

          <p className="mt-8 text-gray-600 text-xl">
            Manage, organize and securely share your documents anytime from anywhere.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700">
              Get Started
            </button>

            <button className="border border-blue-600 text-blue-600 px-8 py-4 rounded-xl">
              Learn More
            </button>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="Hero" />
        </div>

      </div>
    </section>
  );
}

export default Hero;