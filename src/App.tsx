import Logo from "./components/Logo";

function App() {
  return (
    <>
      <Logo />

      <h1>Publish your podcasts everywhere.</h1>

      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>

      <form action="" className="form">
        <input
          type="email"
          name="text-field"
          id="text-field"
          className="text-field"
          placeholder="Email Address"
          aria-label="Enter your email address to request access to our podcasts"
        />
        <input type="submit" className="button" value={`Request Access`} />
      </form>
    </>
  );
}

export default App;
