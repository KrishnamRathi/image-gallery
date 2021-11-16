import * as React from 'react';
import ImageCard from '../components/ImageCard';
import ImageViewer from '../components/ImageViewer';
import '../styles/home.css';
import { getPhotos, searchPhotos } from '../apis/photos';
import CircularProgress from '@mui/material/CircularProgress';
// import data from '../data';


function Home({ keyword }) {
    const [showImage, setShowImage] = React.useState(false);
    const [currImg, setCurrImg] = React.useState(null);
    const [searchResults, setSearchResults] = React.useState(null);
    const [photos, setPhotos] = React.useState(null);   

    const handleClick = (img) => {
        setShowImage(true);
        setCurrImg(img);
    }

    const fetchData = async () => {
        const photos = await getPhotos(1, 50);
        setSearchResults(photos);
        setPhotos(photos);
    }

    React.useEffect(() => {
        fetchData();
    }, []);

    React.useEffect(() => {
        const search = async () => {
            const photos = await searchPhotos(1, keyword);
            setSearchResults(photos.results);
        }
        if(keyword.length > 3) search();
        else setSearchResults(photos);

    }, [keyword, photos])

    if(!searchResults) return <div className="loading"><CircularProgress /></div>;

    return (
        <div className="home">
            <div className="grid">
                {searchResults.map((item) => (
                    <div key={item.id} onClick={() => handleClick(item)} >
                        <ImageCard
                            imageLink={item.urls.thumb}
                            username={item.user.username}
                            likes={item.likes}
                            avatar={item.user.profile_image.small}
                        />
                    </div>
                ))}
                {showImage ? <ImageViewer open={showImage} setOpen={setShowImage} image={currImg} /> : null}
            </div>
        </div>
    )
}

export default Home
