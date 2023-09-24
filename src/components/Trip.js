import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/6.jpg";
import Trip3 from "../assets/7.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips </h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Bihar"
          text="Bihar is known for its diverse culture, with various communities, languages, and traditions coexisting. The state's festivals, music, dance, and cuisine reflect this cultural richness. The Chhath Puja, a major festival dedicated to the sun god, is particularly famous in Bihar and celebrated with great fervor."
        />
        <TripData
          image={Trip2}
          heading="Trip in Delhi"
          text=" Delhi has a rich and storied history that spans thousands of years. It has been the seat of power for numerous empires and dynasties, including the Maurya, Gupta, Mughal, and British Empires. The city has witnessed the rise and fall of many civilizations and is home to numerous historical monuments and sites, such as the Red Fort, Qutub Minar, Humayun's Tomb, and India Gate."
        />
        <TripData
          image={Trip3}
          heading="Trip in Kerala"
          text="Kerala is known for its rich cultural heritage, with a mix of Hindu, Christian, and Muslim communities living harmoniously. The state is renowned for its classical dance forms, such as Kathakali and Mohiniyattam, as well as its traditional music and art."
        />
      </div>
    </div>
  );
}

export default Trip;
