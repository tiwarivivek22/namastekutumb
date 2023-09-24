import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import DestinationData from "../components/Destinationdata";
import "./DestinationStyle.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      <DestinationData
        className="first-des"
        heading="Uttrakhand"
        text="Spiritual Significance: Uttarakhand is a sacred land for Hindus, as it is home to several revered pilgrimage sites like the Char Dham (Gangotri, Yamunotri, Badrinath, and Kedarnath), and the holy cities of Haridwar and Rishikesh, where the Ganges River flows. The state attracts pilgrims and seekers from all over the world."
        img1={Mountain1}
        img2={Mountain2}
      />
    </div>
  );
};

export default Destination;
