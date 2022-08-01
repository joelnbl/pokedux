import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";

const PokemonCard = ({name, url}) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={url}
          alt={`${name} image`}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
