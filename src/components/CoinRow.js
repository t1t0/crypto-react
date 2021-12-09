import React from "react";

const CoinRow = ({coin, index}) => {
    return (
        <tr>
            <td>{index}</td>
            <td><img src={coin.image} alt={coin.id} width="25" className="m-2 img-fluid"/> <span>{coin.name}</span></td>
            <td className="text-uppercase">{coin.symbol}</td>
            <td className={ coin.price_change_percentage_24h >= 0 ? "text-success" : "text-danger"}>{coin.current_price}</td>
            <td className={ coin.price_change_percentage_24h >= 0 ? "text-success" : "text-danger"}>{coin.price_change_percentage_24h}</td>
            <td>{(coin.current_price -((coin.price_change_percentage_24h * coin.current_price)/100)).toFixed(2)}</td>
        </tr>
    )
}

export default CoinRow