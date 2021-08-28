import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MTVfMTMy%2FMDAxNjI5MDMzMzE3Nzg3.PWT90FU0nVihRhbyX6FZixBsWgKqJr1OTKlBHohks30g.UWQiztYHEYSjx84RcJKVjV4OvsMpiaB39DrXHPK_Ab8g.JPEG.kitten825%2F1629032666875.jpg&type=sc960_832",
    address: "Some address 3, Seoul",
    description: "This is a first dream",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MTVfMTMy%2FMDAxNjI5MDMzMzE3Nzg3.PWT90FU0nVihRhbyX6FZixBsWgKqJr1OTKlBHohks30g.UWQiztYHEYSjx84RcJKVjV4OvsMpiaB39DrXHPK_Ab8g.JPEG.kitten825%2F1629032666875.jpg&type=sc960_832",
    address: "Some address 10, Amer",
    description: "This is a second dream",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups}></MeetupList>;
};

export default HomePage;
