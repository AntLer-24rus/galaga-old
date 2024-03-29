export type TSingUpRequest = {
  /* eslint-disable @typescript-eslint/naming-convention */
  login: string;
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
  password: string;
  /* eslint-enable @typescript-eslint/naming-convention */
};

export type TSignUpResponse = {
  id: number;
};

export type TSingInRequest = {
  login: string;
  password: string;
};

export type TUserResponse = {
  /* eslint-disable @typescript-eslint/naming-convention */
  id: number;
  login: string;
  first_name: string;
  second_name: string;
  display_name: string | null;
  email: string;
  avatar: string | null;
  phone: string;
  /* eslint-enable @typescript-eslint/naming-convention */
};

export type TUserUpdateRequest = {
  /* eslint-disable @typescript-eslint/naming-convention */
  login: string;
  first_name: string;
  second_name: string;
  display_name: string | null;
  email: string;
  phone: string;
  /* eslint-enable @typescript-eslint/naming-convention */
};

export type TChangePasswordRequest = {
  oldPassword: string;
  newPassword: string;
};

export type TChangeAvatarRequest = {
  avatar: File;
};

export type TBabRequestError = {
  reason: string;
};
