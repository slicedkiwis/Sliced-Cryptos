import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Avatar } from "@mui/material";
import './newscard.css'
import moment from "moment";
const NewsCard = ({ data }) => {
  const defaultBanner =
    "https://images.unsplash.com/photo-1643000296927-f4f1c8722b7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80";
  const defaultAvatar =
    "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png";
  return (

    <a href={data.url} rel="noreferrer" target="_blank">
    <Card className="news-card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <div className="news-heading">
            <h3>
              {data.name}
            </h3>
            <img className="news-image"
              src={data.image?.thumbnail?.contentUrl || defaultBanner}
              alt="news"
            />
          </div>
          <p>
            {data.description.length > 100
              ? `${data.description.slice(0, 100)}...`
              : data.description}
          </p>
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
        </CardContent>
      </CardActionArea>
    </Card>
    </a>
  );
};

export default NewsCard;
