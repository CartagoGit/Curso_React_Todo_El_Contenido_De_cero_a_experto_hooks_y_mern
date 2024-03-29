import Swal from "sweetalert2";

export const fileUpload = async (file) => {
	const cloudUrl = "https://api.cloudinary.com/v1_1/cartago/upload";
	const formData = new FormData();
	formData.append("upload_preset", "curso-react-journal");
	formData.append("file", file);
	try {
		const resp = await fetch(cloudUrl, { method: "POST", body: formData });
		if (resp.ok) {
			const cloudResp = await resp.json();
			return cloudResp.secure_url;
		} else {
			// throw await resp.json();
			Swal.fire(
				"Failed",
				`Something went wrong: ${await resp.json()}`,
				"error"
			);
		}
	} catch (error) {
		Swal.fire("Failed", `Something went wrong: ${error}`, "error");
	}
};
