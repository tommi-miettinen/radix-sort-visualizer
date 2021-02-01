import moment from "moment";

const Comment = ({
  pushingToBuckets,
  currentDigit,
  done,
}: {
  pushingToBuckets: boolean;
  currentDigit: number | undefined;
  done: boolean;
}) => {
  return (
    <div style={{ color: "#6a9954", marginTop: 10 }}>
      {pushingToBuckets && (
        <span>
          {`// sorting by `}
          <span style={{ color: "#c787c3" }}>
            {moment(currentDigit! + 1 || 1, "D").format("Do")}
          </span>
          {` digit
      from the end into matching bucket.`}
        </span>
      )}
      {done && <span>{`// done.`}</span>}
      {!done && !pushingToBuckets && (
        <span>{`// recreating the numbers array from the sorted buckets.`}</span>
      )}
    </div>
  );
};

export default Comment;
