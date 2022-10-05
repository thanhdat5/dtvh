/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useEffect, useState } from "react";

const useAudio = (url: string, isLoop: boolean) => {
  const audio = useMemo(() => new Audio(url), []);

  const [playing, setPlaying] = useState(false);
  const playAudio = () => setPlaying(true);
  const pauseAudio = () => setPlaying(false);

  useEffect(() => {
    audio.currentTime = 0;
    if (playing) {
      if (isLoop) {
        audio.loop = true;
      }
    }
    if (!playing) {
      audio.loop = false;
    }
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return {
    isPlaying: playing,
    playAudio,
    pauseAudio,
  };
};

export default useAudio;
