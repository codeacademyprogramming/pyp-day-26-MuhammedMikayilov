import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Image from "./Image";

export interface IReserv {
  id: number;
  reservation: [{}];
}

export interface IRoomState {
  rooms: { rooms: IReserv[] };
}

export const Rooms = () => {
  const { rooms } = useSelector((state: IRoomState) => state.rooms!);
  const { push } = useHistory();

  const colorFill = React.useMemo((): string => {
    let color: string = "green";
    rooms?.forEach((item) => {
      if (item.reservation.length > 0) {
        color = "red";
      } else {
        color = "green";
      }
    });
    return color;
  }, [rooms]);

  const routeDetail = React.useCallback(
    (item, idx) => {
      push({
        pathname: `/detail:${item[idx]?.id}`,
        state: item[idx],
      });
    },
    [push]
  );

  return (
    <svg
      width="580px"
      height="441px"
      viewBox="0 0 580 441"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Artboard</title>
      <g
        id="Artboard"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Group" transform="translate(-5.000000, 0.000000)">
          <Image />
          <rect
            id="1"
            stroke="#979797"
            fill={colorFill}
            x="360.5"
            y="83.5"
            width="47"
            height="51"
            onClick={() => routeDetail(rooms, 0)}
          ></rect>
          <rect
            id="2"
            stroke="#979797"
            fill={colorFill}
            x="411.5"
            y="83.5"
            width="48"
            height="51"
            onClick={() => routeDetail(rooms, 1)}
          ></rect>
          <rect
            id="3"
            stroke="#979797"
            fill={colorFill}
            x="360.5"
            y="137.5"
            width="47"
            height="47"
            onClick={() => routeDetail(rooms, 2)}
          ></rect>
          <rect
            id="4"
            stroke="#979797"
            fill={colorFill}
            x="411.5"
            y="137.5"
            width="48"
            height="47"
            onClick={() => routeDetail(rooms, 3)}
          ></rect>
          <rect
            id="5"
            stroke="#979797"
            fill={colorFill}
            x="205.5"
            y="226.5"
            width="48"
            height="47"
            onClick={() => routeDetail(rooms, 4)}
          ></rect>
          <rect
            id="6"
            stroke="#979797"
            fill={colorFill}
            x="256.5"
            y="226.5"
            width="46"
            height="47"
            onClick={() => routeDetail(rooms, 5)}
          ></rect>
          <rect
            id="7"
            stroke="#979797"
            fill={colorFill}
            x="305.5"
            y="226.5"
            width="46"
            height="47"
            onClick={() => routeDetail(rooms, 6)}
          ></rect>
          <rect
            id="8"
            stroke="#979797"
            fill={colorFill}
            x="205.5"
            y="276.5"
            width="48"
            height="47"
            onClick={() => routeDetail(rooms, 7)}
          ></rect>
          <rect
            id="9"
            stroke="#979797"
            fill={colorFill}
            x="256.5"
            y="276.5"
            width="46"
            height="47"
            onClick={() => routeDetail(rooms, 8)}
          ></rect>
          <rect
            id="10"
            stroke="#979797"
            fill={colorFill}
            x="305.5"
            y="276.5"
            width="46"
            height="47"
            onClick={() => routeDetail(rooms, 9)}
          ></rect>
          <rect
            id="11"
            stroke="#979797"
            fill={colorFill}
            x="28.5"
            y="17.5"
            width="207"
            height="145"
            onClick={() => routeDetail(rooms, 10)}
          ></rect>
          <rect
            id="12"
            stroke="#979797"
            fill={colorFill}
            x="20.5"
            y="202.5"
            width="129"
            height="86"
            onClick={() => routeDetail(rooms, 11)}
          ></rect>
          <rect
            id="13"
            stroke="#979797"
            fill={colorFill}
            x="20.5"
            y="292.5"
            width="129"
            height="65"
            onClick={() => routeDetail(rooms, 12)}
          ></rect>
          <rect
            id="14"
            stroke="#979797"
            fill={colorFill}
            x="20.5"
            y="361.5"
            width="129"
            height="61"
            onClick={() => routeDetail(rooms, 13)}
          ></rect>
        </g>
      </g>
    </svg>
  );
};
