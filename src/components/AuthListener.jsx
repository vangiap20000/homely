import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setUser, logout, setAuthChecked } from '../store/authSlice';
import { auth, db } from '../firebase';

const AuthListener = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const userDocRef = doc(db, "users", user.uid);
				const userDocSnap = (await getDoc(userDocRef)).data();
				dispatch(setUser({
					uid: user.uid,
					email: userDocSnap.email,
					displayName: userDocSnap.displayName,
					photoURL: userDocSnap.photoURL,
					phoneNumber: userDocSnap.phoneNumber,
					providerId: user.providerId,
				}));
			} else {
				dispatch(logout());
			}
			dispatch(setAuthChecked(true));
		});

		return () => unsubscribe();
	}, [dispatch]);

	return null;
};

export default AuthListener;
