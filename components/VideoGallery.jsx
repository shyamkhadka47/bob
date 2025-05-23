"use client"
import { PlaneIcon } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { FiPlay } from 'react-icons/fi';

const getYouTubeID = (url) => {
  const regExp = /^.*(?:youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[1].length === 11 ? match[1] : null;
};

const YouTubePlayer = ({ url, title, description }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeID(url);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (!videoId) return <p>Invalid YouTube URL</p>;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full aspect-video cursor-pointer">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="w-full h-full bg-center bg-cover flex items-center justify-center"
            style={{ backgroundImage: `url(${thumbnail})` }}
            onClick={() => setIsPlaying(true)}
          >
            <div className="bg-green-800/80 p-3 rounded-full shadow-xl text-xl">
              <FiPlay color='white' size={30}/>
            </div>
          </div>
        )}
      </div>
      <Link href={url} target='_blank'>
        <h2 className="text-lg font-semibold mb-1 px-4 pt-4">{title}</h2>
        <p className="text-gray-600 text-md px-4 py-2">{description.slice(0,100)}...</p>
      </Link>
    </div>
  );
};

export default function VideoGallery() {
  const videos = [
    {
      url: 'https://www.youtube.com/watch?v=Y5wo-2naavU',
      title: 'Bob Haozous',
      description: 'A classic music video that everyone has seen at least once!',
    },
    {
      url: 'https://www.youtube.com/watch?v=OFfaZOm1QZc&t=64s',
      title: 'Bob Haozous WALKABOUT',
      description: 'The funky anthem that dominated the charts for months.',
    },
    {
      url: 'https://www.youtube.com/watch?v=8BY2K9hcmIM',
      title: '"The Vanishing Buffalo Herd" by Beverly Morris, Bob Haozous Interview',
      description: 'Bob Haozous is profiled by Beverly Morris about "The Vanishing Buffalo Herd", a politically motivated art installation involving artist-to-audience participation.  August 11th, 1993 at the Rettig y Martinez Gallery in Santa Fe, NM.',
    },
    {
      url: 'https://www.youtube.com/watch?v=w6gLO-fCAEM',
      title: `AMERICAN HOLOCAUST | When It's All Over I'll Still Be Indian | Clip #3`,
      description: `American Holocaust: When It's All Over I’ll Still Be Indian" was the first documentary film addressing the American Indian & Jewish Holocausts. In 2000, director Joanelle Romero was short-listed for an Academy Award, being the only Native filmmaker, to date, to be considered. `,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  px-[5%] md:px-[10%]">
      {videos.map((video, index) => (
        <YouTubePlayer
          key={index}
          url={video.url}
          title={video.title}
          description={video.description}
        />
      ))}
    </div>
  );
}
