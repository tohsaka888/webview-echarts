import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { lineChartsOption } from "../charts/lineChartsOption";
import { pieChartsOption } from "../charts/pieChartsOption";
import { getTagDetail } from "../request/getTagDetail";
import { Empty } from "antd-mobile";
import { useParams } from "react-router-dom";
import { Select } from "antd";
import "../App.css";

type ResponseProp = {
  name: string;
  value: number;
  textStyle?: any;
};

const dataType = ["折线图", "饼图"];

export default function WebviewEcharts() {
  const [show, setShow] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState<string>("折线图");
  const params = useParams();
  useEffect(() => {
    const getDetail = async () => {
      const data: ResponseProp[] = await getTagDetail(params.id);
      pieChartsOption.series[0].data = data.slice();
      pieChartsOption.legend.data = data.slice();
      console.log(pieChartsOption.series[0].data);
      let xValue: string[] = [];
      data.map((item, index) => {
        xValue.push(item.name);
        return null;
      });
      lineChartsOption.xAxis.data = xValue;
      lineChartsOption.series[0].data = data;
      setShow(true);
    };
    console.log(params.id);
    getDetail();
  }, [params.id]);
  return (
    <div className="charts-container">
      <Select
        style={{ width: "100%" }}
        placeholder={"请选择图表类型"}
        onSelect={(value) => {
          if (value) {
            setSelectedValue(value.toString());
          }
        }}
        value={selectedValue}
        className="select"
      >
        {dataType.length !== 0 &&
          dataType.map((item, index) => (
            <Select.Option key={index} value={item}>
              {item}
            </Select.Option>
          ))}
      </Select>
      {selectedValue === "折线图" &&
        (show ? (
          <ReactECharts
            option={lineChartsOption}
            style={{ margin: "2vw", height: "400px" }}
          />
        ) : (
          <Empty
            style={{ padding: "64px 0" }}
            imageStyle={{ width: 128 }}
            description="暂无数据"
          />
        ))}
      {selectedValue === "饼图" &&
        (show ? (
          <ReactECharts
            option={pieChartsOption}
            style={{ margin: "2vw", height: "400px" }}
          />
        ) : (
          <Empty
            style={{ padding: "64px 0" }}
            imageStyle={{ width: 128 }}
            description="暂无数据"
          />
        ))}
    </div>
  );
}
