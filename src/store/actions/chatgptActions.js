export const saveChatGptresponse = (data) => {
    return (dispatch) => {
        return new Promise(function (resolve, reject) {
          dispatch({
            type: "SET_CHAT_DATA",
            payload: data,
          });
          resolve();
        });
    };  
}

