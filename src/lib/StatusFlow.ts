import { Status } from "./../interfaces";
type EnumKeys = keyof typeof Status;

type StatusFlow = {
  [key in EnumKeys]: Array<Status>;
};

const statusFlow: StatusFlow = {
  [Status.TODO]: [Status.IN_PROGRESS],
  [Status.IN_PROGRESS]: [Status.BLOCKED, Status.IN_QA],
  [Status.BLOCKED]: [Status.TODO],
  [Status.IN_QA]: [Status.TODO, Status.DONE],
  [Status.DONE]: [Status.DEPLOY],
  [Status.DEPLOY]: [],
};

export default statusFlow;
