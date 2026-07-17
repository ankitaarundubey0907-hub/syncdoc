import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div
        style={{
          textAlign: "center",
          marginTop: "120px"
        }}
      >
        <h1>Welcome to SyncDoc</h1>

        <h3>Manage, Store and Share Documents Securely</h3>

        <br />

        <button>Get Started</button>
      </div>
    </>
  );
}

export default Home;