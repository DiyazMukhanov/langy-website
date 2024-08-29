import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meetingId: null,
  authToken: null,
  isTeacherSide: false,
};

const videoConferenceSlice = createSlice({
  name: "videoConference",
  initialState,
  reducers: {
    setMeetingId(state, action) {
      state.meetingId = action.payload;
    },
    setAuthToken(state, action) {
      state.authToken = action.payload;
    },
    setIsTeacherSide(state, action) {
      state.isTeacherSide = action.payload;
    },
    resetVideoConference(state) {
      state.meetingId = null;
      state.authToken = null;
      state.isTeacherSide = false;
    },
  },
});

// Export the actions
export const {
  setMeetingId,
  setAuthToken,
  setIsTeacherSide,
  resetVideoConference,
} = videoConferenceSlice.actions;

// Export the reducer
export default videoConferenceSlice.reducer;
