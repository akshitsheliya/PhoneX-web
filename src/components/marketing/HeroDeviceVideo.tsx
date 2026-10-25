import { useRef, useState, useEffect } from "react";
import heroVideo from "@/assets/PhoneX presents.mp4";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroDeviceVideoProps {
  className?: string;
  glow?: boolean;
}

export function HeroDeviceVideo({ className, glow = true }: HeroDeviceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoadedData = () => setIsLoaded(true);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className={cn("relative mx-auto w-full", className)}>
      {/* Background ambient aura & device glow */}
      {glow ? (
        <div className="mkt-device-glow pointer-events-none absolute -inset-10 -z-10 rounded-[50%] blur-3xl opacity-80" />
      ) : null}

      {/* Phone Hardware Mockup Outer Shell */}
      <div className="group relative mx-auto w-full max-w-[310px] sm:max-w-[325px] rounded-[3.2rem] bg-gradient-to-b from-neutral-800 via-neutral-900 to-neutral-950 p-[10px]  shadow-[0_25px_60px_-15px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.14),0_15px_35px_-5px_oklch(0.65_0.18_280/0.25)] transition-transform duration-300">
        
        {/* Inner bezel & screen frame */}
        <div
          onClick={togglePlay}
          className="relative w-full cursor-pointer overflow-hidden rounded-[2.5rem] bg-black shadow-inner aspect-[648/1280]"
          style={{ aspectRatio: "648 / 1280" }}
        >
          {/* Top Speaker / Dynamic Island Notch styling */}
          <div className="pointer-events-none absolute top-2.5 left-1/2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-black/80 backdrop-blur-md ring-1 ring-white/10 flex items-center justify-center">
            <div className="h-2.5 w-2.5 rounded-full bg-neutral-900 ring-1 ring-white/10 mr-2" />
            <div className="h-1.5 w-8 rounded-full bg-neutral-800" />
          </div>

          {/* Video Player */}
          <video
            ref={videoRef}
            src={heroVideo}
            loop
            muted={isMuted}
            playsInline
            preload="none"
            className={cn(
              "h-full w-full object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-90"
            )}
          />

          {/* Glass reflection gloss overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/[0.07]" />

          {/* Hover / tap controls overlay */}
          <div className="absolute inset-x-3 bottom-3 z-20 flex items-center justify-between opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            {/* Play / Pause indicator */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md transition-all hover:scale-105 hover:bg-black/80"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
            </button>

            {/* Mute / Unmute Button */}
            <button
              type="button"
              onClick={toggleMute}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/90 backdrop-blur-md transition-all hover:scale-105 hover:bg-black/80"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="h-3.5 w-3.5 text-white/80" />
              ) : (
                <Volume2 className="h-3.5 w-3.5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
