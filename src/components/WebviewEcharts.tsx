import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { lineChartsOption } from "../charts/lineChartsOption";
import { pieChartsOption } from "../charts/pieChartsOption";
import { getTagDetail } from "../request/getTagDetail";
import { Empty } from "antd-mobile";
import { Collapse } from "antd";
import { useParams } from "react-router-dom";

const { Panel } = Collapse;
type ResponseProp = {
  name: string;
  value: number;
  textStyle?: any;
};
export default function WebviewEcharts() {
  const [show, setShow] = useState<boolean>(false);
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
      <Collapse accordion defaultActiveKey={'LineChart'}>
        <Panel header="折线图" key="LineChart">
          <p>{show ? (
            <ReactECharts option={lineChartsOption} style={{ margin: "2vw" }} />
          ) : (
            <Empty
              style={{ padding: "64px 0" }}
              imageStyle={{ width: 128 }}
              description="暂无数据"
            />
          )}</p>
        </Panel>
        <Panel header="饼图" key="PieChart">
          <p>{show ? (
            <ReactECharts option={pieChartsOption} style={{ margin: "2vw" }} />
          ) : (
            <Empty
              style={{ padding: "64px 0" }}
              imageStyle={{ width: 128 }}
              description="暂无数据"
            />
          )}</p>
        </Panel>
      </Collapse>,
    </div >
  );
}
