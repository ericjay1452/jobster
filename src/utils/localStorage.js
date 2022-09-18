// Adding user to localstorage, to be use in UserSlice.js
export const AdduserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
}

// Removing user from localStorage
export const RemoveuserFromLocalStorage = () =>{
    localStorage.removeItem("user")
}

export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem("user");
    const user = result ? JSON.parse(result) : null;
    return user;
}