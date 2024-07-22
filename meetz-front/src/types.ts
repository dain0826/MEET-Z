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