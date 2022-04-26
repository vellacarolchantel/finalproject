export enum UserType {
  admin = 1,
  professor = 2,
  student = 4,
  sysop = 0,
  ta = 3,
}

export function sortUserType(types: UserType[]) {
  return types.sort((a, b) => a - b);
}
