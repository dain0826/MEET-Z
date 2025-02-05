/**
 * 로그인 API 통신 시 사용하는 타입
 */
export type LoginUserDto = {
  refreshToken: string;
  accessToken: string;
  expireAt: string;
  role: string;
}

/**
 * 회원가입 API 통신 시 사용하는 타입
 */
export type SignupResDto = {
  status: string;
  message: string;
}

export type MeetingDto = {
  meetingId: number;
  meetingName: string;
  meetingStart: string;
  meetingEnd: string;
  cnt: number;
}

export type MeetingDetailDto = {
  meetingId: number;
  meetingName: string;
  meetingStart: string;
  meetingEnd: string;
  meetingDuration: number;
  term: string;
  starList: StarDto[];
  fanList: DetailFanDto[];
  cnt: number;
}

export type StarDto = {
  name: string;
  email: string;
  password: string;
}

export type StarMeetingDto = {
  name: string;
  email: string;
  password: string;
  meetingRoomId: number;
}

export type FanDto = {
  name: string;
  email: string;
  phone: string;
}

export type DetailFanDto = {
  userId: number | undefined;
  name: string;
  email: string;
  phone: string;
}

export type UserDto = {
  role: string;
  expireAt: string;
  accessToken: string;
} | undefined

export type ChatFanDto = {
  userId: number;
  name: string;
  recentChat: string;
  recentDate: string;
}

export type messageDto = {
  chatRoomId: number;
  receiverId: number;
  content: string;
  senderRole: string;
  senderId: number;
  createdAt: string | null;
}

export type BlacklistDto = {
  blacklistId: number;
  name: string;
  email: string;
  phone: string;
}

export type MeetingInfoDto = {
  chatRoomId: number;
  meetingDuration: number;
  meetingId: number;
  meetingName: string;
  meetingstart: string;
  nickname: string;
  starList: StarDto[];
  term: number;
  userPosition: number;
}

export type ReportsDto = {
  reportId: number;
  reportedUserName: string;
  starName: string;
  isReported: boolean;
  isProfanity: boolean;
}

export type SegementsDto = {
  startTime: string;
  endTime: string;
  text: string;
  badWordsList: string[];
}

export type ReportDetailDto = {
  reportId: number;
  reportedUserId: number;
  reportedUserName: string;
  starName: string;
  isReported: boolean;
  isProfanity: boolean;
  filePath: string;
  transcript: string;
  segments: SegementsDto[];
}