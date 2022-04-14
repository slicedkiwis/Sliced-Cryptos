
import { CircularProgress } from "@mui/material";
import './loader.css'
const Loader = ({mode}) => {
  return (
      <div className={mode? "loader-container-light":"loader-container-dark "}>
      <CircularProgress
        style={{
          height: "10rem",
          width: "10rem",
        }}
      />
    </div>
  )

}

export default Loader