import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import { lineChartsOption } from "./charts/lineChartsOption";
import { pieChartsOption } from "./charts/pieChartsOption";
import { getTagDetail } from "./request/getTagDetail";
import { Empty, Tabs } from "antd-mobile";
import "./App.css";

type ResponseProp = {
  name: string;
  value: number;
};

function App() {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    const getDetail = async () => {
      const data: ResponseProp[] = await getTagDetail();
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
    getDetail();
  }, []);

  return (
    <div className="charts-container">
      <Tabs>
        <Tabs.Tab title="折线图" key={0}>
          {show ? (
            <ReactECharts option={lineChartsOption} style={{ margin: "2vw" }} />
          ) : (
            <Empty
              style={{ padding: "64px 0" }}
              imageStyle={{ width: 128 }}
              description="暂无数据"
            />
          )}
        </Tabs.Tab>

        <Tabs.Tab title="饼状图" key={1}>
          {show ? (
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
          )}
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default App;
