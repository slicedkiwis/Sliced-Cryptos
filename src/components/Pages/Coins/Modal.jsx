import React from "react";
import { AreaChart, Area } from "recharts";
import millify from "millify";
import { Button } from "@mui/material";
import "./modal.css";
const Modal = ({ data, toggleModal, mode }) => {
  return (
    <div className={mode ? "modal modal-light" : "modal modal-dark"}>
      <div className="close-modal-container">
        <Button
          className="close-modal-button"
          onClick={() => {
            toggleModal(false);
          }}
        >
          Close
        </Button>
      </div>
      <div className="modal-data">
        <AreaChart
          width={800}
          height={400}
          data={data?.chart}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
          className="modal-area-chart"
        >
          <Area
            type="monotone"
            dataKey="uv"
            stroke={`${data?.coin?.color}`}
            fill={`${data?.coin?.color}`}
          />
        </AreaChart>

        <div className="modal-data-information-container">
          <div className="information-container">
            <h2>
              <span>{data?.coin?.name}</span>
            </h2>
          </div>
          <div className="information-container">
            <img src={data?.coin?.iconUrl} alt={data?.coin?.name} />
          </div>

          <div className="information-container">
            <h2>
              Price:
              <span
                style={{
                  color: `${data?.coin?.color}`,
                }}
              >
                {millify(data?.coin?.price, {
                  precision: 10,
                })}
              </span>
            </h2>
          </div>

          <div className="information-container">
            <h2>
              Market Cap:
              <span>
                {millify(data?.coin?.marketCap, {
                  precision: 10,
                })}
              </span>
            </h2>
          </div>

          <div className="information-container">
            <h2>
              Change:
              <span
                className={
                  data?.coin?.change >= 0 ? "modal-positive" : "modal-negative"
                }
              >
                {millify(data?.coin?.change || 0, {
                  precision: 10,
                })}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
