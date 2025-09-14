import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const user = useSelector((state) => state.auth.user);
	const isAuthChecked = useSelector((state) => state.auth.isAuthChecked);
	const location = useLocation();
	if (!user && isAuthChecked) {
		return <Navigate to="/login" replace state={{ from: location }} />;
	}

	return children;
};

export default PrivateRoute;
