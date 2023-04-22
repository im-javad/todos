import { produce } from "immer";

export const actionFilterTypes = {
  STATUSFILTER: "filters/statusFilter",
  COLORFIlTER: "filters/colorFilter",
};

export const actionColorFolterTypes = {
  ADD: "filters/colorFilter/add",
  REMOVE: "filters/colorFilter/remove",
};

export const availableColors = ["aqua", "orange", "black", "red", "green"];
export const availableStatus = {
  All: "all",
  Pending: "pending",
  Completed: "completed",
};

const initState = {
  status: "all",
  colors: [],
};

export const filterReducer = produce((state, action) => {
  switch (action.type) {
    case actionFilterTypes.STATUSFILTER:
      const { selectedStatus } = action.payload;
      state.status = selectedStatus;
      break;
    case actionFilterTypes.COLORFIlTER:
      const { color, filterColorType } = action.payload;
      switch (filterColorType) {
        case actionColorFolterTypes.ADD:
          state.colors.push(color);
          break;
        case actionColorFolterTypes.REMOVE:
          state.colors = state.colors.filter((c) => c !== color);
          break;
      }
  }
}, initState);

export const colorFilterhandle = (color, filterColorType) => {
  return {
    type: actionFilterTypes.COLORFIlTER,
    payload: {
      color,
      filterColorType,
    },
  };
};

export const statusFilterhandle = (selectedStatus) => {
  return {
    type: actionFilterTypes.STATUSFILTER,
    payload: { selectedStatus },
  };
};
