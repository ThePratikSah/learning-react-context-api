import { useContext } from "react";
import UserData from "./Store/Store";

const Profile = () => {
  const { name, setName } = useContext(UserData);

  return (
    <>
      <p>{name}</p>
      <input
        type="text"
        placeholder="Update your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};

export default Profile;

// element.name
