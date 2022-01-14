import {useState, useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';

const VideoList = (props) => {
    const {category} = useParams();
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getVideos = async () => {
            const response = await tmdbApi.getVideos(category, props.id);
            setVideos(response.results.slice(0, 5));
        };
        getVideos();
    }, [category, props.id]);

    return (
        <div>
            {videos.map((item, index) => (
                <Video item={item} key={index} />
            ))}
        </div>
    );
};

const Video = (props) => {
    const {item} = props;
    const iframeRef = useRef(null);

    useEffect(() => {
        const height = (iframeRef.current.offsetWidth * 9) / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    });

    return (
        <div className='video'>
            <div className='video__title'>
                <h2>{item.name}</h2>
            </div>
            <iframe
                src={`http://www.youtube.com/embed/${item.key}`}
                ref={iframeRef}
                width='100%'
                title='video'
            ></iframe>
        </div>
    );
};

export default VideoList;
