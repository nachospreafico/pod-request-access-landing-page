import Spotify from "./../assets/desktop/spotify.svg";
import ApplePodcast from "./../assets/desktop/apple-podcast.svg";
import GooglePodcast from "./../assets/desktop/google-podcasts.svg";
import PocketCasts from "./../assets/desktop/pocket-casts.svg";

import "./styles/MainSection.css";
import "./styles/Form.css";

const MainSection = () => {
  return (
    <main>
      <h2 className="main-title">
        PUBLISH YOUR PODCASTS <span className="accent">EVERYWHERE</span>
      </h2>
      <p className="main-text">
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>
      <div className="podcasts-container">
        <img src={Spotify} className="spotify" alt="spotify logo"></img>
        <img
          src={ApplePodcast}
          className="apple-podcast"
          alt="apple podcast logo"
        ></img>
        <img
          src={GooglePodcast}
          className="google-podcast"
          alt="google podcast logo"
        ></img>
        <img
          src={PocketCasts}
          className="pocketcasts"
          alt="pocketcasts logo"
        ></img>
      </div>
    </main>
  );
};

export default MainSection;
