export type RegisterOrLoginOtpSend={
    phone?:string
}

export type RegisterOrLoginOtpVerify={
    phone?:string
    otp?:string
}

export type EmailVerificationOTPSentDTO={
    email?:string
    id?:number
}

export type EmailVerificationOTPVerifiedDTO={
    otp?:string
    id?:number
    email?:string
}

export type QuizResultTypeDTO={
    user_id?:number
    quiz_key?:any
    offset_data?:number
}