"use client";

import {useState, useRef, useEffect, useCallback} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Volume2,
  VolumeX,
  Music2,
  Minimize2,
} from "lucide-react";
import {tracks} from "@/data/tracks";

export function MusicPlayer() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasTracks = tracks.length > 0;
  const currentTrack = hasTracks ? tracks[currentIdx] : null;

  // Apply volume + mute to audio element
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Play/Pause sync
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  // When track changes, load new src and auto-play if was playing
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;
    audioRef.current.load();
    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx]);

  const pickRandomNext = useCallback(() => {
    if (tracks.length <= 1) return 0;
    let next = currentIdx;
    while (next === currentIdx) {
      next = Math.floor(Math.random() * tracks.length);
    }
    return next;
  }, [currentIdx]);

  const handleEnded = useCallback(() => {
    if (isShuffle) setCurrentIdx(pickRandomNext());
    else setCurrentIdx((i) => (i + 1) % tracks.length);
  }, [isShuffle, pickRandomNext]);

  const handlePrev = () => {
    if (!hasTracks) return;
    setCurrentIdx((i) => (i - 1 + tracks.length) % tracks.length);
  };

  const handleNext = () => {
    if (!hasTracks) return;
    if (isShuffle) setCurrentIdx(pickRandomNext());
    else setCurrentIdx((i) => (i + 1) % tracks.length);
  };

  const handleTogglePlay = () => {
    if (!hasTracks) return;
    setIsPlaying((v) => !v);
  };

  return (
    <>
      {/* Hidden audio element — single instance, src swapped on track change */}
      {currentTrack && (
        <audio
          ref={audioRef}
          src={currentTrack.src}
          onEnded={handleEnded}
          preload="metadata"
        />
      )}

      {/* Collapsed: floating button */}
      <AnimatePresence>
        {!isExpanded && (
          <motion.button
            key="collapsed"
            initial={{opacity: 0, scale: 0.85}}
            animate={{opacity: 1, scale: 1}}
            exit={{opacity: 0, scale: 0.85}}
            transition={{duration: 0.15}}
            onClick={() => setIsExpanded(true)}
            aria-label="Buka music player"
            className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            style={{
              background: "var(--bg-card)",
              border: `1px solid ${isPlaying ? "var(--primary)" : "var(--border)"}`,
              boxShadow: isPlaying
                ? "0 4px 18px rgba(74,124,89,0.25)"
                : "0 4px 14px rgba(45,74,45,0.10)",
            }}
          >
            <Music2
              className={`w-4 h-4 ${isPlaying ? "animate-pulse" : ""}`}
              style={{
                color: isPlaying ? "var(--primary)" : "var(--text-muted)",
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expanded: full player panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            key="expanded"
            initial={{opacity: 0, y: 12, scale: 0.96}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 12, scale: 0.96}}
            transition={{duration: 0.2, ease: [0.22, 1, 0.36, 1]}}
            className="fixed bottom-24 right-6 z-40 w-[280px] rounded-2xl p-4 select-none"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "0 12px 40px rgba(45,74,45,0.18)",
            }}
            role="region"
            aria-label="Music player"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-[10px] font-semibold uppercase flex items-center gap-1.5"
                style={{
                  color: "var(--text-muted)",
                  letterSpacing: "0.18em",
                }}
              >
                <Music2 className="w-3 h-3" />
                Now Playing
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                aria-label="Tutup player"
                className="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-150 hover:bg-[var(--primary)]/10"
                style={{color: "var(--text-muted)"}}
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Track info */}
            <div className="mb-4 min-h-[40px]">
              {currentTrack ? (
                <>
                  <p
                    className="font-heading font-semibold text-sm tracking-tight truncate"
                    style={{color: "var(--text-primary)"}}
                  >
                    {currentTrack.title}
                  </p>
                  {currentTrack.artist && (
                    <p
                      className="text-xs mt-0.5 truncate"
                      style={{color: "var(--text-muted)"}}
                    >
                      {currentTrack.artist}
                    </p>
                  )}
                </>
              ) : (
                <p
                  className="text-xs leading-relaxed"
                  style={{color: "var(--text-muted)"}}
                >
                  Belum ada track. Tambah file MP3 di{" "}
                  <code
                    className="text-[10px] px-1 rounded"
                    style={{background: "rgba(74,124,89,0.10)"}}
                  >
                    data/tracks.ts
                  </code>
                </p>
              )}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <PlayerButton
                onClick={handlePrev}
                disabled={!hasTracks}
                aria-label="Track sebelumnya"
              >
                <SkipBack className="w-4 h-4" />
              </PlayerButton>

              <button
                onClick={handleTogglePlay}
                disabled={!hasTracks}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background: "var(--primary)",
                  color: "#F5F0E8",
                  boxShadow: "0 4px 14px rgba(74,124,89,0.30)",
                }}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 ml-0.5" />
                )}
              </button>

              <PlayerButton
                onClick={handleNext}
                disabled={!hasTracks}
                aria-label="Track berikutnya"
              >
                <SkipForward className="w-4 h-4" />
              </PlayerButton>

              <div className="w-px h-6 mx-1" style={{background: "var(--border)"}} />

              <PlayerButton
                onClick={() => setIsShuffle((v) => !v)}
                disabled={!hasTracks || tracks.length < 2}
                aria-label={isShuffle ? "Matikan shuffle" : "Nyalakan shuffle"}
                aria-pressed={isShuffle}
                active={isShuffle}
              >
                <Shuffle className="w-3.5 h-3.5" />
              </PlayerButton>
            </div>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted((v) => !v)}
                aria-label={isMuted ? "Unmute" : "Mute"}
                aria-pressed={isMuted}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-150 hover:bg-[var(--primary)]/10"
                style={{
                  color: isMuted ? "var(--text-muted)" : "var(--primary)",
                }}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  setVolume(parseFloat(e.target.value));
                  if (isMuted) setIsMuted(false);
                }}
                aria-label="Volume"
                className="flex-1 h-1 rounded-full appearance-none cursor-pointer player-slider"
                style={
                  {
                    background: `linear-gradient(to right, var(--primary) 0%, var(--primary) ${(isMuted ? 0 : volume) * 100}%, var(--border) ${(isMuted ? 0 : volume) * 100}%, var(--border) 100%)`,
                  } as React.CSSProperties
                }
              />
              <span
                className="text-[10px] font-semibold tabular-nums w-8 text-right"
                style={{color: "var(--text-muted)"}}
              >
                {Math.round((isMuted ? 0 : volume) * 100)}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface PlayerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  children: React.ReactNode;
}

function PlayerButton({
  active,
  children,
  className,
  ...rest
}: PlayerButtonProps) {
  return (
    <button
      {...rest}
      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed ${className ?? ""}`}
      style={{
        background: active ? "var(--primary)" : "transparent",
        color: active ? "#F5F0E8" : "var(--text-muted)",
      }}
      onMouseEnter={(e) => {
        if (!active && !rest.disabled) {
          (e.currentTarget as HTMLButtonElement).style.color =
            "var(--primary)";
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(74,124,89,0.08)";
        }
      }}
      onMouseLeave={(e) => {
        if (!active && !rest.disabled) {
          (e.currentTarget as HTMLButtonElement).style.color =
            "var(--text-muted)";
          (e.currentTarget as HTMLButtonElement).style.background = "transparent";
        }
      }}
    >
      {children}
    </button>
  );
}
