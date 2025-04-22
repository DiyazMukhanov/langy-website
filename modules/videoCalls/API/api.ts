import { getAuthToken } from "@/modules/study/withTeacher/student-side/shared/api/getAuthToken";

// export const authToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI4NjUyZDJmZS1iYjA2LTRhOGYtOTAxNS02Yjg4ZWUxMWFkNGIiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcyNDgzNzI0MiwiZXhwIjoxNzI0ODQ0NDQyfQ.lJW0Cu0ML2Ikny_jBIEHSFzSbdVnsd-l21WvGwHvAIU";
// API call to create a meeting

// let authToken = null;

export const createMeeting = async ({ token }) => {
  try {
    // Step 1: Fetch the token from the backend
    // const tokenRes = await getAuthToken();
    // const token = tokenRes?.data?.token;
    // authToken = token;
    // Step 2: Use the fetched token to create a meeting
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
      method: "POST",
      headers: {
        authorization: `${token}`, // Use the fetched token here
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });

    if (!res.ok) {
      throw new Error("Failed to create meeting");
    }

    // Destructure the roomId from the response
    const { roomId } = await res.json();

    return roomId;
    // if (!tokenResponse.ok) {
    //   throw new Error("Failed to fetch token from backend");
  } catch (error) {
    // const { token } = await tokenResponse.json();

    console.error("Error creating meeting:", error);
  }

  //   const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
  //     method: "POST",
  //     headers: {
  //       authorization: `${authToken}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({}),
  //   });
  //   //Destructuring the roomId from the response
  //   const { roomId } = await res.json();
  //   console.log(roomId);
  //   return roomId;
};

// export { authToken };
