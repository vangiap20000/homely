// src/components/GlobalLoading.jsx
import { useSelector } from 'react-redux';

const GlobalLoading = () => {
	const isLoading = useSelector((state) => state.loading.global);

	if (!isLoading) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<svg
				className="animate-spin w-16 h-16 text-white"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					opacity="0.75"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<path
					opacity="0.75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>

		</div>
	);
};

export default GlobalLoading;
