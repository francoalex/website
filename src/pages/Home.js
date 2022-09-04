import '../styles/Home.css'
import Button from '../components/Button';

function Home() {
    return (
        <div className='home'>
            <h1 className='title'>Welcome to my personal site...</h1>
            <div className='home-page-info'>
                <h2>
                    Below are some link you might be looking for.
                    <br />
                    <br />
                    If not, feel free to browse around. 
                </h2>
            </div>
            <div className='resume-info'>
                <h2 className='h2-title'> Resume</h2>
                <Button title="Download" isDownloadButton={"1"}/>
            </div>

            <div className='contact-button'>
                <h2 className='h2-title'> Looking for something or want to get in touch?</h2>
                <Button title="Contact Me" isContactButton={"1"}/>
            </div>
        </div>
    );
}

export default Home;