import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "../firebase";

export const uploadFileToFirebase = async (file, folderName = "chat") => {
	try {
		if (!file) throw new Error("No file provided");
		const fileRef = ref(storage, `${folderName}/${Date.now()}_${file.name}`);
		const snapshot = await uploadBytes(fileRef, file);
		const downloadURL = await getDownloadURL(snapshot.ref);

		return downloadURL;
	} catch (error) {
		console.error("Upload failed:", error);
		throw error;
	}
};

export const deleteFileFromFirebase = async (fileUrl) => {
	try {
		if (!fileUrl) throw new Error("No file URL provided");
		const pathStartIndex = fileUrl.indexOf("/o/") + 3;
		const pathEndIndex = fileUrl.indexOf("?");

		if (pathStartIndex < 3 || pathEndIndex === -1) {
			throw new Error("Invalid file URL format");
		}

		const filePath = decodeURIComponent(fileUrl.substring(pathStartIndex, pathEndIndex));
		const fileRef = ref(storage, filePath);

		await deleteObject(fileRef);
		console.log("File deleted successfully.");
	} catch (error) {
		console.error("File deletion failed:", error);
		throw error;
	}
};
