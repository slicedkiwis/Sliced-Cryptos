const ListItem = (props) => {
  if (props.page === "news")
    return (
      <a href={props.data?.url} rel="noreferrer" target="_blank">
        {" "}
        <h4> {props.children} </h4>{" "}
      </a>
    );

  return (
    <h4
      onClick={() => {
        if (props.page === "coins") {
          const makeChartData = () => {
            let chartData = [];
            props.data?.sparkline.forEach((element, i) => {
              chartData.push({
                name: i,
                uv: element,
              });
            });
            return chartData;
          };

          props.setModalData({
            chart: makeChartData(),
            coin: props.data,
          });

          props.toggleModal(true);
        }
      }}
    >
      {props.children}
    </h4>
  );
};

export default ListItem;
