
const initialState={
    userDataa:[],
    username:'hruday@gmail.com',
    password:'hruday123'
}
const reducer=(state=initialState,action)=>{
    if(action.type === 'login'){

        return{
            userDataa:action.payload
        }
    }
 return state;
}
export default reducer