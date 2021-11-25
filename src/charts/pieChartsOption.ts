const pieChartsOption = {
  title: {
    text: "标签歌曲数",
    subtext: "仅取前12数量标签",
    x: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    bottom: "10",
    data: [{ name: "", value: 0 }],
    type: "scroll",
    scrollDataIndex: "name",
    orient: "horizontal",
  },
  series: [
    {
      name: "标签歌曲数",
      type: "pie",
      radius: "50%",
      center: ["50%", "50%"],
      data: [{ value: 0, name: "" }],
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

export { pieChartsOption };
