import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY": '90b0cffa-66f7-4005-8a5f-8d05f8917112'
    },
    baseURL:`https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
getUsers (currentPage = 1, pageSize = 10){
   return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
   return response.data
})
},

followDelete (userId){
    return instance.delete(`follow/${userId}`).then(response => {
    return response.data
})
},

followPost (userId){
    return instance.post(`follow/${userId}`,{}).then(response => {
    return response.data
})
},
getUserProfile(userId){
console.warn('Obsolete method. Please profileAPI object.')       
    return profileAPI.getUserProfile(userId)
    }
}

export const profileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`).then(response => {
            return response.data
        })
       
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`).then(response => {
            return response.data 
            
        })
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status}).then(response => {
            return response.data
        })
    },
    savePhoto(photoFile){
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            } })
    },
    saveContactData(contacts, aboutMe, lookingForAJob,lookingForAJobDescription, fullName){
        return instance.put(`profile`,{contacts, aboutMe, lookingForAJob,lookingForAJobDescription, fullName})
    }

}

export const authAPI = {
    me(){
        return instance.get(`auth/me`)
             .then(response => {
                return response.data});
    },
    login(email, password, rememberMe = false, captcha){
        return instance.post(`auth/login`,{email, password, rememberMe, captcha})
             
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
export const securityAPI  ={
   captchaUrl(){
    return instance.get(`security/get-captcha-url`)
    .then(response => {
       return response.data});
   }
}



