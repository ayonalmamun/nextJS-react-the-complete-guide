import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const navigate = useNavigate();
  const addMeetupHander = (meetupData) => {
    fetch(
      "https://react-getting-started-45905-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHander} />
    </section>
  );
}
