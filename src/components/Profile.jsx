import React from "react";
import achive1 from "../assets/acheivmentIcons/planet-earth_1598431.png";
import achive2 from "../assets/acheivmentIcons/plant_1892747.png";
import achive3 from "../assets/acheivmentIcons/trophy_3113025.png";
import { useEffect, useState } from "react";
import { useForm } from "./FormProvider";
import { dataFetchingFunctions } from "../GetTables";
import { supabase } from "../App";
import getMyUserData from "../GetMyUserData";
import { friendFunctions } from "../GetFriends";
import getUsers from "../GetUsers"

const { getUsernames } = friendFunctions;
const { getFriends } = friendFunctions;
const { FilterAcceptedQuests } = dataFetchingFunctions;

function Profile() {
  const [acceptedQuests, setAcceptedQuests] = useState([]);
  const [percent, setPercent] = useState("40%");
  const [friendsData, setFriendsData] = useState([]);
  const [friends, setFriends] = useState([]);
  const [newFriendUsername, setNewFriendUsername] = useState("");
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [friendRequestError, setFriendRequestError] = useState("");

  const { emissionTotal } = useForm();

  useEffect(() => {
    const fetchFriendsData = async () => {
      const data = await getFriends();
      setFriendsData(data);
      console.log("data coming from SETFRIENDSDATA: ", data);
    };
    fetchFriendsData();
  }, []);

  useEffect(() => {
    const fetchFriendUsernames = async () => {
      if (friendsData.length > 0) {
        const { data: friendUsernames, error } = await supabase
          .from("users")
          .select("id, username")
          .in(
            "id",
            friendsData.map((friend) => friend.friendId)
          );

        if (error) {
          console.error("Error fetching friend usernames", error);
        } else {
          console.log("data going into SETFRIENDS: ", friendUsernames);
          setFriends(friendUsernames);
        }
      }
    };
    fetchFriendUsernames();
  }, [friendsData]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FilterAcceptedQuests();
      setAcceptedQuests(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(percent);
  }, [percent]);

  useEffect(() => {
    if (emissionTotal <= 16) {
      setPercent("80%");
    } else if (emissionTotal < 19) {
      setPercent("70%");
    } else if (emissionTotal <= 21) {
      setPercent("60%");
    } else if (emissionTotal < 24) {
      setPercent("40%");
    } else if (emissionTotal <= 26) {
      setPercent("20%");
    } else if (emissionTotal >= 31) {
      setPercent("5%");
    }
  }, [emissionTotal]);
  // average 16 a year


  const handleFriendAddClick = () => {
    setShowUsernameInput(true);
  };


  const handleFriendAdd = async () => {
    if (!newFriendUsername) {
      setShowUsernameInput(false);
      setFriendRequestError("");
    } else {
      const allUsers = await getUsers(); 
      const friendToAdd = allUsers.find((user) => user.username === newFriendUsername);
  
      if (!friendToAdd) {
        setFriendRequestError("Invalid username, please try again.");
        return;
      }
  
      const friendId = friendToAdd.id; 
      console.log("this is what is being shown as the FRIENDID: ", friendId)
  
      const user = await supabase.auth.getUser();
  
      if (!user) {
        console.error("User is not logged in");
        return;
      }
  
      const friendRecord = {
        userId: user.data.user.id,
        friendId: friendId,
      };
  
      try {
        const { error: friendError } = await supabase
          .from("Friends")
          .insert(friendRecord);
  
        if (friendError) {
          console.error("Error inserting into friends table:", friendError.message);
          return;
        }
  
        setShowUsernameInput(false);
        setFriendRequestError("");
        console.log("Friend request sent successfully.");
      } catch (error) {
        console.error("Error handling friend request:", error);
      }
    }
  };
  

  return (
    <div className="w-full h-full flex items-center flex-col ">
      <div className="text-center m-1.7 ">
        <h3 className="text-2xl">Username of signed in</h3>
        <p>Joefinkel12@gmail.com</p>
      </div>
      <div className="bg-primary w-3/4 h-2/5 rounded-3xl mb-1.7 ">
        <div className="flex justify-around">
          <p className="p-4 text-lg pl-9">Your Emissions </p>
          <p className="p-4 text-lg pl-9 ">
            Average: 16 Tons <br />
            You Produce: {emissionTotal.toFixed(2)} Tons
          </p>
        </div>
        <div className="relative  left-[10%]">
          <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 rounded-full h-10 w-4/5 m-1.7"></div>
          <div
            className={`bg-black bottom-0  absolute h-10 mt-5`}
            style={{ width: "1%", left: percent }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between w-3/4 h-3/4 mb-10">
        <div className="h-2/4 w-2/4 bg-primary text-center rounded-3xl m-2 overflow-y-scroll">
          <p className="p-5 text-lg">Friends List:</p>
          <div>
            <div className="flex justify-center mt-5">
              <div className="relative overflow-x-auto w-4/6">
                <table className="w-full  text-gray-500 dark:text-gray-400 text-lg">
                  <thead className="text-sm text-gray-700 uppercase bg-background dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {friends.map((friend, index) => (
                      <tr
                        key={index}
                        className="bg-secondary border-b dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {friend.username}
                        </th>
                        <td className="px-6 py-4">Signed In</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {showUsernameInput ? (
              <div>
                {/* Input field for entering a new friend's username */}
                <input
                  type="text"
                  placeholder="Enter friend's username"
                  value={newFriendUsername}
                  onChange={(e) => setNewFriendUsername(e.target.value)}
                  className="mt-3 p-2"
                />
                {/* Button to add a new friend */}
                <button
                  onClick={handleFriendAdd}
                  className="bg-button mt-3 w-2/4"
                >
                  Add Friend
                </button>
                {/* Error message for invalid username */}
                {friendRequestError && (
                  <p className="text-red-500">{friendRequestError}</p>
                )}
              </div>
            ) : (
              <button
                onClick={handleFriendAddClick}
                className="bg-button mt-8 w-2/4"
              >
                Add Friend
              </button>
            )}
          </div>
        </div>
        <div className="h-2/4 w-2/4 bg-primary text-center rounded-3xl m-2 overflow-y-scroll">
          <p className="p-5 text-lg">Accepted Achievements</p>
          <div>
            <div className="flex justify-center flex-col">
              {acceptedQuests.map((achievement, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center w-full ">
                    <img className="h-16" src={achive1} alt="" />
                    <p>{achievement.text}</p>
                  </div>
                  <button className="bg-button mr-5 p-2 py-1">Completed</button>
                  <button className="bg-red-700 mr-5 p-2 py-1">Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
