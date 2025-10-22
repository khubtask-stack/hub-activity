import { useState, useEffect } from "react";

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const videoElement = document.getElementById("carousel-video");
    videoElement.addEventListener("ended", handleNext);

    return () => {
      videoElement.removeEventListener("ended", handleNext);
    };
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="video-carousel">
      <video
        key={videos[current]}
        id="carousel-video"
        src={videos[current]}
        controls
        autoPlay
      />
    </div>
  );
}
