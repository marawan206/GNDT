import React from "react";

type VideoProps = {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  className?: string; // applied to outer wrapper
  container?: boolean; // wrap in max-width container, like WhoWeAre
  rounded?: boolean; // rounded corners on wrapper
};

export default function Video({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  className,
  container = true,
  rounded = true,
}: VideoProps) {
  const wrapperClasses = [
    rounded ? "overflow-hidden rounded-2xl" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  const video = (
    <div className={wrapperClasses}>
      <video
        className="h-auto w-full"
        controls={controls}
        playsInline
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        poster={poster}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );

  if (!container) {
    return video;
  }

  return <div className="mx-auto max-w-6xl">{video}</div>;
}
