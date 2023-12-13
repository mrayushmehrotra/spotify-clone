"use client";
import { Song } from "@/types";
import React, { useState } from "react";
import MediaItem from "./MediaItem";
import LikeButton from "./LikeButton";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";
interface PlayerContentProps {
  song: Song;
  songUrl: string;
}
const PlayerContent: React.FC<PlayerContentProps> = ({ song, songUrl }) => {
  const player = usePlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [Volume, SetVolume] = useState(1);

  const Icon = isPlaying ? BsPauseFill : BsPlayFill;
  const VolumeIcon = Volume === 0 ? HiSpeakerXMark : HiSpeakerWave;
  const onPlayNext = () => {
    if (player.ids.length === 0) {
      return;
    }
    const currentIndex = player.ids.findIndex((id) => id === player.activeId);
    const nextSong = player.ids[currentIndex + 1];
    if (!nextSong) {
      return player.setId(player.ids[0]);
    }
    player.setIds(nextSong);
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={() => {}}
          className="
        h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer
        "
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>
      <div className=" hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6  ">
        <AiFillStepBackward
          onClick={() => {}}
          size={30}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
        <div
          onClick={() => {}}
          className="flex items-center justify-center h-10 w-10 rounded-full
        p-1
        bg-white"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className="text-neutral-400 
            cursor-pointer
             hover:text-white transition"
        />
      </div>
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px] ">
          <VolumeIcon onClick={() => {}} size={34} className="cursor-pointer" />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
