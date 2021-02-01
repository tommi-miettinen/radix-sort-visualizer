const Bucket = ({
  bucket,
  index,
  currentNum,
  currentDigit,
}: {
  bucket: number[];
  index: number;
  currentNum: number | undefined;
  currentDigit: number | undefined;
}) => {
  if (bucket && bucket.length > 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ margin: "auto" }}>{index}</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ marginRight: 5 }}>{index !== 0 ? "," : ""}</span>
          <span style={{ color: "white" }}>[</span>
          {bucket.map((number, idx) => {
            let lastIndex = number.toString().length - (currentDigit! + 1);
            return (
              <div
                style={{
                  color: "#9ccf9b",
                }}
              >
                <span style={{ marginRight: 5 }}>{idx !== 0 && ","}</span>
                <span
                  style={{
                    color: "#9ccf9b",
                    backgroundColor: currentNum === number ? "purple" : "",
                  }}
                >
                  {number
                    .toString()
                    .split("")
                    .map((digit, index) => {
                      return (
                        <span
                          style={{
                            color: lastIndex === index ? "#c787c3" : "",
                          }}
                        >
                          {digit}
                        </span>
                      );
                    })}
                </span>
              </div>
            );
          })}
          <span style={{ color: "white", marginLeft: "auto" }}>]</span>
        </div>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ textAlign: "center" }}>{index}</div>
      <div>
        <span>{index !== 0 ? "," : ""}</span>
        <span> [&nbsp; &nbsp; &nbsp; &nbsp;]</span>
      </div>
    </div>
  );
};

export default Bucket;
