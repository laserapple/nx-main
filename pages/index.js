import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ivan_Stepanovic_Konev.jpg",
    address: "Some address",
    description: "description meetup!",
  },
  {
    id: "m2",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Ivan_Stepanovic_Konev.jpg",
    address: "Some address",
    description: "description meetup!",
  },
];

function HomePage(props) {
//   const [loadedMeetups, setLoadedMeetups] = useState([]);
//   useEffect(() => {
//     setLoadedMeetups(DUMMY_MEETUPS);
//   }, []);

  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
return {
    props: {
        meetups: DUMMY_MEETUPS
    },
    revalidate: 10
}
}

export default HomePage;
