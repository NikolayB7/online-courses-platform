import MainBanner from "../components/MainBanner";
import ReviewsBlock from "../components/ReviewsBlock";
import SliderCard from "../components/SliderCard";

function HomePage() {
    return (
        <div>
            <h1>Welcome to Online Courses Platform</h1>

            <MainBanner />

            <SliderCard />

            <ReviewsBlock />

        </div>
    );
}

export default HomePage;
