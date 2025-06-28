import { getImageUrlGlobal } from "../utils/getAssets";

export default function Image({ imageDefault = getImageUrlGlobal("default.jpg"), ...rest }) {
  return (
    <img
      {...rest}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = imageDefault
      }}
    />
  )
}