import Card from 'react-bootstrap/Card';
import img1 from '../assets/hero_image.jpg'

const HomePage = () => {
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={img1} alt="Hero Image" />
            <Card.ImgOverlay>
                <Card.Title>Four Elements Udon</Card.Title>
                <Card.Text>Happiness is a bowl of udon shared in peace.</Card.Text>
            </Card.ImgOverlay>
        </Card>
    );
}

export default HomePage;