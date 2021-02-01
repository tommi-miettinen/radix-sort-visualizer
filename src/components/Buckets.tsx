import Bucket from "./Bucket";

const Buckets = ({
  buckets,
  currentNum,
  currentDigit,
}: {
  buckets: number[][];
  currentNum: number | undefined;
  currentDigit: number | undefined;
}) => {
  return (
    <div style={{ display: "flex", marginTop: 30 }}>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        {`buckets`}
        <span
          style={{ color: "white", display: "flex", alignItems: "flex-end" }}
        >
          &nbsp;=&nbsp; [
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((elem, index) => (
            <Bucket
              bucket={buckets[index]}
              index={index}
              currentNum={currentNum}
              currentDigit={currentDigit}
            />
          ))}
          ];
        </span>
      </div>
    </div>
  );
};

export default Buckets;
