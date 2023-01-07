import { toast } from 'react-toastify';
const hitToast = (message, success ) => {
    
    if (!['success', 'error'].includes(success)) throw Error();
    toast[`${success}`](message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export default hitToast;