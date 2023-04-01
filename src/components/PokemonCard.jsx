import Card from "antd/es/card/Card";
import Meta from "antd/es/card/Meta";
import './PokemonStyle.css';
import { StarOutlined } from "@ant-design/icons";

function PokemonCard ({name}){
    return(
        <Card title={name} cover={<img src="" alt="Ditto" />} extra={<StarOutlined />} >
            <Meta description="fire, magic" />
        </Card>
    )
}


export default PokemonCard;