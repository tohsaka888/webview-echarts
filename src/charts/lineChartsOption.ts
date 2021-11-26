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
  axisLine: {
    lineStyle: {
      color: "#e33b38",
      width: 1, //这里是为了突出显示加上的
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
    axisLabel: {
      //x轴文字的配置
      show: true,
      textStyle: {
        color: "rgba(219,225,255,1)",
      },
    },
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
      label: {
        color: "white",
      },
    },
  ],
  tooltip: {
    trigger: "axis",
  },
};

export { lineChartsOption };
