import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearToast } from "../store/toastSlice";

import "react-toastify/dist/ReactToastify.css";

const ToastHandler = () => {
	const { toasts } = useSelector((state) => state.toast);
	const dispatch = useDispatch();

	useEffect(() => {
		if (toasts.length > 0) {
			toasts.forEach((t) => {
				switch (t.type) {
					case "success":
						toast.success(t.message);
						break;
					case "error":
						toast.error(t.message);
						break;
					case "info":
						toast.info(t.message);
						break;
					case "warn":
					case "warning":
						toast.warn(t.message);
						break;
					default:
						toast(t.message);
				}
			});

			dispatch(clearToast());
		}
	}, [toasts, dispatch]);

	return null;
};

export default ToastHandler;
