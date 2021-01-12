export type Action = {
  type: string;
  payload: unknown;
};

export type ActiveCreditState = {};

export type UserState = {
  name: string;
  authorized: boolean;
};

export type AppState = {
  activeCredit: ActiveCreditState | null;
  user: UserState;
};

export type AppStore = {
  state: AppState;
  dispatch: (actionOrFunc: Action | Function) => Promise<void>;
};
