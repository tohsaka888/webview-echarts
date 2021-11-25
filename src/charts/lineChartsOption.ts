const lineChartsOption = {
  grid: { top: 60, right: 8, bottom: 24, left: 50 },
  title: {
    text: "标签歌曲数",
    subtext: "仅取前12数量标签",
    x: "center",
  },
  xAxis: {
    id: "name",
    type: "category",
    data: ["1"],
    show: false,
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [{ name: "111", value: 123 }],
      type: "line",
      smooth: true,
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

export { lineChartsOption };
