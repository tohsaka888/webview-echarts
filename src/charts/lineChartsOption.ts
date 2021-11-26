const lineChartsOption = {
  grid: { top: 60, right: 8, bottom: 24, left: 50 },
  title: {
    text: "标签歌曲数",
    subtext: "仅取前12数量标签",
    x: "center",
    textStyle: {
      color: "white",
    },
    subtextStyle: {
      color: "white",
    },
  },
  xAxis: {
    id: "name",
    type: "category",
    data: ["1"],
    show: false,
  },
  yAxis: {
    type: "value",
    data: {
      textStyle: {
        color: "white",
      },
    },
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
