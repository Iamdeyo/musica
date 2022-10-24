import React, { useRef, useState } from 'react';
import musicPix from '../assets/img/Rectangle 21.png';
import demo from '../assets/songs/demo.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
  faPlayCircle,
  faRepeat,
  faShuffle,
  faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';

function Musicplayer() {
  const data = {
    id: 1109739,
    readable: true,
    title: 'Mockingbird',
    title_short: 'Mockingbird',
    title_version: '',
    isrc: 'USIR10400813',
    link: 'https://www.deezer.com/track/1109739',
    share:
      'https://www.deezer.com/track/1109739?utm_source=deezer&utm_content=track-1109739&utm_term=0_1666620138&utm_medium=web',
    duration: 251,
    track_position: 12,
    disk_number: 1,
    rank: 960639,
    release_date: '2005-11-21',
    explicit_lyrics: true,
    explicit_content_lyrics: 1,
    explicit_content_cover: 0,
    preview:
      'https://cdns-preview-6.dzcdn.net/stream/c-655dfb802c35579d26a32136e3d0e7b3-12.mp3',
    bpm: 169.4,
    gain: -8.4,
    available_countries: [
      'AE',
      'AF',
      'AG',
      'AI',
      'AL',
      'AM',
      'AO',
      'AQ',
      'AR',
      'AS',
      'AT',
      'AU',
      'AZ',
      'BA',
      'BB',
      'BD',
      'BE',
      'BF',
      'BG',
      'BH',
      'BI',
      'BJ',
      'BN',
      'BO',
      'BQ',
      'BR',
      'BT',
      'BV',
      'BW',
      'BY',
      'CA',
      'CC',
      'CD',
      'CF',
      'CG',
      'CH',
      'CI',
      'CK',
      'CL',
      'CM',
      'CO',
      'CR',
      'CU',
      'CV',
      'CW',
      'CX',
      'CY',
      'CZ',
      'DE',
      'DJ',
      'DK',
      'DM',
      'DO',
      'DZ',
      'EC',
      'EE',
      'EG',
      'EH',
      'ER',
      'ES',
      'ET',
      'FI',
      'FJ',
      'FK',
      'FM',
      'FR',
      'GA',
      'GB',
      'GD',
      'GE',
      'GH',
      'GM',
      'GN',
      'GQ',
      'GR',
      'GS',
      'GT',
      'GU',
      'GW',
      'HK',
      'HM',
      'HN',
      'HR',
      'HU',
      'ID',
      'IE',
      'IL',
      'IN',
      'IQ',
      'IR',
      'IS',
      'IT',
      'JM',
      'JO',
      'JP',
      'KE',
      'KG',
      'KH',
      'KI',
      'KM',
      'KN',
      'KP',
      'KR',
      'KW',
      'KY',
      'KZ',
      'LA',
      'LB',
      'LC',
      'LK',
      'LR',
      'LS',
      'LT',
      'LU',
      'LV',
      'LY',
      'MA',
      'MD',
      'ME',
      'MG',
      'MH',
      'MK',
      'ML',
      'MM',
      'MN',
      'MP',
      'MR',
      'MS',
      'MT',
      'MU',
      'MV',
      'MW',
      'MX',
      'MY',
      'MZ',
      'NA',
      'NE',
      'NF',
      'NG',
      'NI',
      'NL',
      'NO',
      'NP',
      'NR',
      'NU',
      'NZ',
      'OM',
      'PA',
      'PE',
      'PG',
      'PH',
      'PK',
      'PL',
      'PN',
      'PS',
      'PT',
      'PW',
      'PY',
      'QA',
      'RO',
      'RS',
      'RU',
      'RW',
      'SA',
      'SB',
      'SC',
      'SD',
      'SE',
      'SG',
      'SI',
      'SJ',
      'SK',
      'SL',
      'SN',
      'SO',
      'ST',
      'SV',
      'SX',
      'SY',
      'SZ',
      'TC',
      'TD',
      'TG',
      'TH',
      'TJ',
      'TK',
      'TL',
      'TM',
      'TN',
      'TO',
      'TR',
      'TV',
      'TZ',
      'UA',
      'UG',
      'US',
      'UY',
      'UZ',
      'VC',
      'VE',
      'VG',
      'VI',
      'VN',
      'VU',
      'WS',
      'YE',
      'ZA',
      'ZM',
      'ZW',
    ],
    contributors: [
      {
        id: 13,
        name: 'Eminem',
        link: 'https://www.deezer.com/artist/13',
        share:
          'https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1666620138&utm_medium=web',
        picture: 'https://api.deezer.com/artist/13/image',
        picture_small:
          'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
        picture_medium:
          'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
        picture_big:
          'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
        picture_xl:
          'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
        radio: true,
        tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
        type: 'artist',
        role: 'Main',
      },
    ],
    md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
    artist: {
      id: 13,
      name: 'Eminem',
      link: 'https://www.deezer.com/artist/13',
      share:
        'https://www.deezer.com/artist/13?utm_source=deezer&utm_content=artist-13&utm_term=0_1666620138&utm_medium=web',
      picture: 'https://api.deezer.com/artist/13/image',
      picture_small:
        'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg',
      picture_medium:
        'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg',
      picture_big:
        'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg',
      picture_xl:
        'https://e-cdns-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg',
      radio: true,
      tracklist: 'https://api.deezer.com/artist/13/top?limit=50',
      type: 'artist',
    },
    album: {
      id: 119606,
      title: 'Curtain Call: The Hits',
      link: 'https://www.deezer.com/album/119606',
      cover: 'https://api.deezer.com/album/119606/image',
      cover_small:
        'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg',
      cover_medium:
        'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
      cover_big:
        'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg',
      cover_xl:
        'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg',
      md5_image: 'e2b36a9fda865cb2e9ed1476b6291a7d',
      release_date: '2005-01-01',
      tracklist: 'https://api.deezer.com/album/119606/tracks',
      type: 'album',
    },
    type: 'track',
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const [timeline, setTimeline] = useState('0%');

  const audioRef = useRef();

  //   console.log(audioRef.current.currentTime);

  const onPlaying = () => {
    let ct = audioRef.current.currentTime;
    console.log(ct);
  };

  const handleTimeline = () => {
    // setTimeline( + '%');
  };

  console.log(timeline);

  const playAndPause = () => {
    setIsPlaying((prev) => (prev = !prev));
    !isPlaying ? audioRef.current.play() : audioRef.current.pause();
  };

  //   console.log(isPlaying);
  return (
    <div
      id="musicplayer"
      className="text-white fixed left-0 bottom-0 w-screen h-[126px] flex items-center justify-between px-[30px] bg-[#1d21234d] backdrop-blur border border-[#ffffff1a] md:gap-[25px]"
    >
      <div className="flex gap-[12px] items-center">
        <div className="overflow-hidden h-[57px] w-[57px] rounded-[16px]">
          <img src={musicPix} alt="" />
        </div>
        <div>
          <p className="font-bold text-base text-white ">Seasons in</p>
          <p className="text-xs font-bold text-[#ffffff70]">James</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center md:items-center md:w-full">
        <div className="flex items-center gap-[22px] md:gap-[40px]">
          <FontAwesomeIcon
            icon={faShuffle}
            className=" text-white hover:text-secondary hidden md:block"
          />
          <FontAwesomeIcon
            icon={faBackwardStep}
            className=" text-white hover:text-secondary hidden md:block"
          />

          <div
            onClick={playAndPause}
            className="h-[35px] w-[35px] text-white flex items-center justify-center rounded-full bg-secondary md:w-[25px] md:h-[25px]"
          >
            <FontAwesomeIcon icon={!isPlaying ? faPlay : faPause} />
          </div>

          <FontAwesomeIcon
            icon={faForwardStep}
            className="rotate-0 text-white hover:text-secondary h"
          />
          <FontAwesomeIcon
            icon={faRepeat}
            className=" text-white hover:text-secondary hidden md:block"
          />
        </div>
        <div
          onClick={handleTimeline}
          id="timeline"
          className="w-full rounded-lg mt-[20px] bg-[#ffffff0a] h-1 items-center bg hidden md:flex "
        >
          <div className={`bg-secondary w-[10%] h-full rounded-l-lg`}></div>
          <div className="border rounded-[50%] p-[4px]">
            <div className="h-[8px] w-[8px] bg-secondary rounded-[50%]"></div>
          </div>
        </div>
      </div>
      <div className="hidden gap-[6px] items-center w-1/4 md:flex">
        <div>
          <FontAwesomeIcon icon={faVolumeHigh} />
        </div>
        <div
          id="volumeline"
          className="w-full rounded-lg bg-[#ffffff0a] h-1 items-center bg flex "
        >
          <div className={`bg-secondary w-[100%] h-full rounded-lg`}></div>
        </div>
      </div>
      {/* 
      
      
      
      
      
      
      
      */}
      <audio
        ref={audioRef}
        controls
        onTimeUpdate={onPlaying}
        className="absolute left-24 -top-28 hidden"
      >
        <source src={demo} />
      </audio>
    </div>
  );
}

export default Musicplayer;
