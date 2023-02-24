import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const { tweet: {user, message, timestamp } } = props;
  return (
    <div className="tweet">
      <ProfileImage image={user.image}></ProfileImage>

      <div className="body">
        <div className="top">
          <User userData={user}></User>
          <Timestamp timestamp={timestamp}></Timestamp>
        </div>

        <Message message={message}></Message>

        <Actions ></Actions>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
