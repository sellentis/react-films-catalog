import React from 'react';
import YouTube from 'react-youtube';

const VideoModal = ({videoId}) => {
	const opts = {
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	return (
		<div className="youtube">
			<YouTube videoId={videoId} opts={opts} />
		</div>
	);
};

export default VideoModal;