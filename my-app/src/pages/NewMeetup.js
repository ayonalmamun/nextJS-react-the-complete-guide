import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetupHander = (meetupData) => {
    console.log(meetupData);
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHander} />
    </section>
  );
}
