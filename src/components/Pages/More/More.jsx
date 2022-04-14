import { Card, CardActionArea, CardContent } from "@mui/material";
import movieAppPreview from "../../../res/preview1.png";
import pathFindingVisualizerPreview from "../../../res/preview2.png";
import "./more.css";
const More = ({mode}) => {
  return (
    <div className={mode ?"more more-light":"more more-dark"}>
      <h1>More of my projects...</h1>
      <div className="previews">
        <Card className="more-card">
          <a  href = "https://slicedkiwis.github.io/react-movie-app/" rel="noreferrer" target="_blank">
            <CardActionArea>
              <CardContent className="more-card-content">
                <img src={movieAppPreview} alt="Movie Screenshot"></img>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
        <Card className="more-card">
          <a href = "https://slicedkiwis.github.io/Path_finding_visualizer/" rel="noreferrer" target="_blank" >
            <CardActionArea>
              <CardContent className="more-card-content">
                <img
                  src={pathFindingVisualizerPreview}
                  alt="Movie Screenshot"
                ></img>
              </CardContent>
            </CardActionArea>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default More;
