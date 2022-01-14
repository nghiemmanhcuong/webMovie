import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

const CastsList = (props) => {
    const {category} = useParams();
    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const response = await tmdbApi.credits(category, props.id);
            setCasts(response.cast.slice(0, 5));
        };
        getCredits();
    }, [category, props.id]);

    return (
        <div className='casts'>
            {casts.map((item, index) => (
                <div key={index} className='casts__item'>
                    <div
                        className='casts__item__img'
                        style={{backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`}}
                    ></div>
                    <p className='casts__item__name'>{item.name}</p>
                </div>
            ))}
        </div>
    );
};

export default CastsList;
