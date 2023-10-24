import React from "react";
import achive1 from "../assets/acheivmentIcons/planet-earth_1598431.png";
import achive2 from "../assets/acheivmentIcons/plant_1892747.png";
import achive3 from "../assets/acheivmentIcons/trophy_3113025.png";
import moment from "moment";
import { useEffect, useState } from "react";
import { useForm } from "./FormProvider";
import { dataFetchingFunctions } from "../GetTables";
import { supabase } from "../GetTables";
import { friendFunctions } from "../GetFriends";
import getUsers from "../GetUsers";
import { useUser } from "../UserNameAndEmail";

const { getFriends } = friendFunctions;
const { FilterAcceptedQuests, GetQuestPoints, getUsersPoints, UpdatePoints } =
  dataFetchingFunctions;

function Profile() {
  const [acceptedQuests, setAcceptedQuests] = useState([]);
  const [percent, setPercent] = useState("40%");
  const [friendsData, setFriendsData] = useState([]);
  const [friends, setFriends] = useState([]);
  const [newFriendUsername, setNewFriendUsername] = useState("");
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [friendRequestError, setFriendRequestError] = useState("");
  const [completedQuests, setCompletedQuests] = useState([]);

  const { username } = useUser();
  const { email } = useUser();

  const { emissionTotal } = useForm();

  useEffect(() => {
    const fetchFriendsData = async () => {
      const data = await getFriends();
      setFriendsData(data);
    };
    fetchFriendsData();
  }, []);

  useEffect(() => {
    const fetchFriendUsernames = async () => {
      if (friendsData.length > 0) {
        const { data: friendUsernames, error } = await supabase
          .from("users")
          .select("id, username, created_at")
          .in(
            "id",
            friendsData.map((friend) => friend.friendId)
          );

        if (error) {
          console.error("Error fetching friend usernames", error);
        } else {
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
    if (emissionTotal <= 16) {
      setPercent("78%");
    } else if (emissionTotal < 19) {
      setPercent("70%");
    } else if (emissionTotal <= 21) {
      setPercent("60%");
    } else if (emissionTotal < 24) {
      setPercent("40%");
    } else if (emissionTotal <= 26) {
      setPercent("20%");
    } else if (emissionTotal >= 31) {
      setPercent("8%");
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
      const friendToAdd = allUsers.find(
        (user) => user.username === newFriendUsername
      );

      if (!friendToAdd) {
        setFriendRequestError("Invalid username, please try again.");
        return;
      }

      const user = await supabase.auth.getUser();

      if (!user) {
        console.error("User is not logged in");
        return;
      }

      const friendId = friendToAdd.id;

      if (friendId === user.data.user.id) {
        setFriendRequestError("You cannot add yourself as a friend");
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
          console.error(
            "Error inserting into friends table:",
            friendError.message
          );
          return;
        }

        setShowUsernameInput(false);
        setFriendRequestError("");
        setFriends([...friends, friendToAdd]);
      } catch (error) {
        console.error("Error handling friend request:", error);
      }
    }
  };

  const insertCompletedQuest = async (questId) => {
    const user = await supabase.auth.getUser();

    if (!user) {
      console.error("User is not logged in");
      return;
    }

    const userId = user.data.user.id;

    const { data, error } = await supabase.from("CompletedQuests").upsert([
      {
        userId: userId,
        questId: questId,
      },
    ]);

    if (error) {
      console.error("Error inserting completed quest:", error);
    } else {
      setCompletedQuests([...completedQuests, { userId, questId }]);
    }
  };

  const fetchUpdatedAcceptedQuests = async () => {
    const data = await FilterAcceptedQuests();
    setAcceptedQuests(data);
  };

  const handleCompleteClick = async (questId) => {
    insertCompletedQuest(questId);

    const user = await supabase.auth.getUser();

    if (!user) {
      console.error("User is not logged in");
      return;
    }

    const userId = user.data.user.id;

    try {
      const pointsPromise = GetQuestPoints(questId); // Get the promise
      const pointsData = await pointsPromise; // Wait for the promise to resolve
      const points = pointsData[0].xp;

      const userPromise = getUsersPoints(userId);
      const userData = await userPromise;
      const userCurrentPoints = userData[0].points;
      const updatedpoints = userCurrentPoints + points;

      UpdatePoints(userId, updatedpoints);

      const { error } = await supabase
        .from("Accepted")
        .delete()
        .eq("userId", userId)
        .eq("questId", questId);

      if (error) {
        console.error("Error deleting from acceptedIds:", error.message);
        return;
      }

      // After successfully deleting, fetch updated accepted quests
      await fetchUpdatedAcceptedQuests();
    } catch (error) {
      console.error("Error handling delete:", error);
    }
  };

  const handleDeleteClick = async (achievementId) => {
    const updatedAcceptedQuests = acceptedQuests.filter(
      (achievement) => achievement.id !== achievementId
    );

    setAcceptedQuests(updatedAcceptedQuests);

    const user = await supabase.auth.getUser();

    if (!user) {
      console.error("User is not logged in");
      return;
    }

    const userId = user.data.user.id;

    try {
      const { error } = await supabase
        .from("Accepted")
        .delete()
        .eq("userId", userId)
        .eq("questId", achievementId);

      if (error) {
        console.error("Error deleting from acceptedIds:", error.message);
        return;
      }
    } catch (error) {
      console.error("Error handling delete:", error);
    }
  };

  function capitalizeWords(str) {
    return str
      .toLowerCase()
      .split(" ") //if you don't put a space in here, it will split on each character instead of each word!
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "); //if you don't put a space in here, it will not put spaces between the rejoined words
  }

  return (
    <div className="w-full h-full flex items-center flex-col text-words">
      <div className="text-center m-1.7 ">
        <h3 className="text-2xl">{username}</h3>
        <p>{email}</p>
      </div>
      <div className="bg-primary w-3/4 h-2/5 rounded-3xl mb-1.7 shadow-lg ">
        <div className="flex justify-around text-center">
          <p className="p-4 text-lg pl-9">Your Emissions </p>
          <p className="p-4 text-lg pl-9  explaining-text">
            Average:{" "}
            <span className=" text-[20px] explaining-text-lg">16 Tons </span>
            <br />
            You Produce:{" "}
            <span className="explaining-text-lg text-[20px]">
              {emissionTotal.toFixed(2)} Tons
            </span>
          </p>
        </div>
        <div className="relative  left-[10%]">
          <div className="bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 rounded-full h-10 w-4/5 m-1.7  shadow-lg"></div>
          <div
            className="bg-black bottom-0  absolute h-10 mt-5 pointer"
            style={{ width: "1%", left: percent }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between w-3/4 mb-10 profile-container">
        <div className="h-[60vh] w-2/4 bg-primary text-center rounded-3xl m-2 overflow-y-scroll about-text shadow-lg">
          <p className="p-5 text-lg">Friends List:</p>
          <div>
            <div className="flex justify-center mt-5">
              <div className="relative overflow-x-auto w-4/6">
                <table className="w-full  text-gray-500 dark:text-gray-400 text-lg ">
                  <thead className="text-sm text-gray-700 uppercase bg-background dark:text-gray-400 ">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Member Since
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
                          className="px-6 py-4 font-medium text-words whitespace-nowrap "
                        >
                          {friend.username}
                        </th>
                        <td className="px-6 py-4">
                          {moment(friend.created_at).format("MMMM D, YYYY")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            {showUsernameInput ? (
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Enter friend's username"
                  value={newFriendUsername}
                  onChange={(e) => setNewFriendUsername(e.target.value)}
                  className="mt-3 p-2"
                />
                <button
                  onClick={handleFriendAdd}
                  className="bg-button mt-3 w-2/4 p-2"
                >
                  Add Friend
                </button>
                {friendRequestError && (
                  <p className="text-red-500">{friendRequestError}</p>
                )}
              </div>
            ) : (
              <button
                onClick={handleFriendAddClick}
                className="bg-button mt-8 w-2/4 p-2"
              >
                Add Friend
              </button>
            )}
          </div>
        </div>
        <div className="h-[60vh] w-2/4 bg-primary text-center rounded-3xl m-2 overflow-y-scroll about-text  shadow-lg">
          <p className="p-5 text-lg">Accepted Quests</p>
          <div>
            <div className="flex justify-center flex-col">
              {acceptedQuests.length > 0 ? (
                acceptedQuests.map((achievement, index) => (
                  <div key={index} className="mb-6 p-3 items-center">
                    <div className="flex w-full">
                      <img
                        className="flex h-16"
                        src={achievement.img_name}
                        alt=""
                      />
                      <div className="self-center">
                        <p className="ml-3">
                          {capitalizeWords(achievement.text)}
                        </p>
                      </div>
                    </div>
                    <button
                      className="bg-button mr-5 p-2 py-1"
                      onClick={() => handleCompleteClick(achievement.id)}
                    >
                      Completed
                    </button>

                    <button
                      className="bg-red-700 mr-5 p-2 py-1"
                      onClick={() => handleDeleteClick(achievement.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <div className="text-center mt-10 text-gray-400 text-xl">
                  No accepted quests
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
