const Numbers = ({
  currentNum,
  currentDigit,
  nums,
}: {
  currentNum: number | undefined;
  currentDigit: number | undefined;
  nums: number[];
}) => {
  return (
    <div>
      numbers{" "}
      <span style={{ color: "white" }}>
        = [
        {nums
          .join(" ,")
          .split(" ,")
          .map((number, idx) => {
            let lastIndex = number.length - (currentDigit! + 1);
            return (
              <span>
                <span style={{ marginRight: 5 }}>{idx !== 0 && ","}</span>
                <span
                  style={{
                    color: "#9ccf9b",
                    backgroundColor:
                      currentNum?.toString() === number ? "purple" : "",
                  }}
                >
                  {number.split("").map((digit, index) => {
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
              </span>
            );
          })}
        <span>];</span>
      </span>
    </div>
  );
};

export default Numbers;
