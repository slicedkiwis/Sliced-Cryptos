import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { Avatar } from "@mui/material";
import "./newscard.css";
import newsPreview from "../../../res/newspreview.avif";
import moment from "moment";
const NewsCard = ({ data }) => {
  return (
    <a href={data.url} rel="noreferrer" target="_blank">
      <Card className="news-card" sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <div className="news-heading">
              <h3>{data.name}</h3>
              <img
                className="news-image"
                src={data.image?.thumbnail?.contentUrl || newsPreview}
                alt="news"
              />
            </div>
            <p>
              {data.description.length > 100
                ? `${data.description.slice(0, 100)}...`
                : data.description}
            </p>
          </CardContent>
        </CardActionArea>
        <div className="provider-container">
          <div>
            <Avatar
              src={data?.provider?.[0]?.image?.thumbnail?.contentUrl}
              alt=""
            />
            <p className="provider-name">{data?.provider[0]?.name}</p>
          </div>
          <h5>{moment(data?.datePublished).startOf("ss").fromNow()}</h5>
        </div>
      </Card>
    </a>
  );
};

export default NewsCard;
