import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    headers:{
        "API-KEY": 'c606c930-798e-49c9-bc39-7576982f7e14'
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


