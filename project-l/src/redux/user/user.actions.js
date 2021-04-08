export const LOG_IN_USER = "LOG_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";

export const log_in_user = (item)=>({
    type: LOG_IN_USER,
    payload: item
});
export const log_out_user = ()=>({
    type: LOG_OUT_USER
})