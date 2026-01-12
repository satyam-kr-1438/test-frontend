import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface initialStateType {
  premiumPackages: any[]
  profileStatus:number,
  exams:any,
  questions:any[],
  language:string,
  subjects:[],
  allDoubts:[],
  myDoubts:[],
  userDetails:[],
  doubtSolutions:any,
  passes:[],
  passesFeatures:[],
  courses:[],
  quizzes:[],
  packages:[],
  popularPackages:[],
  doubtCategoryDetail:[],
  liveQuizzes:[],
  coursesCategory:[]
}

const initialState: initialStateType = {
  premiumPackages: [],
  profileStatus:0,
  exams:undefined,
  questions:[],
  language:"English",
  subjects:[],
  allDoubts:[],
  myDoubts:[],
  userDetails:[],
  doubtSolutions:undefined,
  passes:[],
  passesFeatures:[],
  courses:[],
  quizzes:[],
  packages:[],
  popularPackages:[],
  doubtCategoryDetail:[],
  liveQuizzes:[],
  coursesCategory:[]
}

export const reducerSlice = createSlice({
  name: 'reducerData',
  initialState,
  reducers: {
    getActivePackagesBundlePasses: (state:any,action:any) => {
      state.premiumPackages=action.payload
    },
    setExamDetail: (state:any,action:any) => {
      state.exams=action.payload
    },
    setExamQuestions: (state:any,action:any) => {
      state.questions=action.payload
    },
    setExamLanguage: (state:any,action:any) => {
      state.language=action.payload
    },
    setSubjectsData: (state:any,action:any) => {
      state.subjects=action.payload
    },
    setCoursesData: (state:any,action:any) => {
      state.courses=action.payload
    },
    addAllDoubts: (state:any,action:any) => {
      state.allDoubts=action.payload
    },
    addAllMyDoubts: (state:any,action:any) => {
      state.myDoubts=action.payload
    },
    setUserDetails: (state:any,action:any) => {
      state.userDetails=action.payload
    },
    setDoubtTotalAnswerShow: (state:any,action:any) => {
      state.doubtSolutions=action.payload
    },
    setPasses: (state:any,action:any) => {
      state.passes=action.payload
    },
    setPassesFeatures: (state:any,action:any) => {
      state.passesFeatures=action.payload
    },
    setFreeQuizzes: (state:any,action:any) => {
      state.quizzes=action.payload
    },
    setPackagesData: (state:any,action:any) => {
      state.packages=action.payload
    },
    setPopularPackages: (state:any,action:any) => {
      state.popularPackages=action.payload
    },
    setDoubtCategoryDetails: (state:any,action:any) => {
      state.doubtCategoryDetail=action.payload
    },
    setLiveQuizzes: (state:any,action:any) => {
      state.liveQuizzes=action.payload
    },
    setCoursesCategory:(state:any,action:any)=>{
      state.coursesCategory=action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { getActivePackagesBundlePasses,setExamDetail,setExamQuestions,setExamLanguage,setSubjectsData,setCoursesData,addAllDoubts,addAllMyDoubts,setUserDetails,setDoubtTotalAnswerShow,setPasses,setPassesFeatures,setFreeQuizzes,setPackagesData,setPopularPackages,setDoubtCategoryDetails,setLiveQuizzes,setCoursesCategory} = reducerSlice.actions

export default reducerSlice.reducer