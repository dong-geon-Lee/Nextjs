import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enteredMeetupData),
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Meetups</title>
        <meta
          name="description"
          content="Add Browser a huge list of highly active React meetups!"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
    </>
  );
};

export default NewMeetupPage;
