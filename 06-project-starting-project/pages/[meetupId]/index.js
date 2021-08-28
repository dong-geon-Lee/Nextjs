import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MTVfMTMy%2FMDAxNjI5MDMzMzE3Nzg3.PWT90FU0nVihRhbyX6FZixBsWgKqJr1OTKlBHohks30g.UWQiztYHEYSjx84RcJKVjV4OvsMpiaB39DrXHPK_Ab8g.JPEG.kitten825%2F1629032666875.jpg&type=sc960_832"
      title="First Meetup"
      address="Some Street 5, Some Seoul"
      description="This is a first Meet"
    ></MeetupDetail>
  );
};

export default MeetupDetails;
