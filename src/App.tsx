import { useState } from "react";
import Numbers from "./components/Numbers";
import Buckets from "./components/Buckets";
import Comment from "./components/Comment";
import TsIcon from "./tsicon.png";

import "./App.css";

const App = () => {
  const [nums, setNums] = useState<number[]>([
    3,
    4,
    2,
    2000,
    122,
    3241,
    313,
    777,
    10,
    8,
    733,
    337,
    5000,
  ]);
  const [bucketsData, setBucketsData] = useState<number[][]>([]);
  const [currentDigit, setCurrentDigit] = useState<number | undefined>();
  const [currentNum, setCurrentNum] = useState<number | undefined>();
  const [pushingToBuckets, setPushingToBuckets] = useState<boolean>(true);
  const [running, setRunning] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  const getMaxDigits = (arr: number[]) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      let digits = arr[i].toString().length;
      if (digits > count) count = digits;
    }
    return count;
  };

  const createBuckets = (): number[][] => {
    return Array.from({ length: 10 }, () => []);
  };

  const blocker = (ms: number) => {
    return new Promise((res) => setTimeout(res, ms));
  };
  function getDigit(num: number, i: number) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  const resetStateInputs = () => {
    setCurrentNum(undefined);
    setCurrentDigit(undefined);
    setPushingToBuckets(true);
    setDone(true);
    setRunning(false);
  };

  const radixSort = async (arr: number[]) => {
    setDone(false);
    setRunning(true);
    let count = getMaxDigits(arr);
    for (let i = 0; i < count; i++) {
      setCurrentDigit(i);
      setCurrentNum(undefined);
      await blocker(500);
      let buckets = createBuckets();
      await blocker(500);
      let numsCopy = [...arr];
      let bucketsCopy = [...buckets];
      setBucketsData(buckets);
      for (let j = 0; j < arr.length; j++) {
        // pushing to buckets
        setPushingToBuckets(true);
        await blocker(500);
        let num = arr[j].toString();
        let lastDigit = getDigit(parseInt(num), i);
        setCurrentNum(arr[j]);
        await blocker(500);
        bucketsCopy[lastDigit].push(arr[j]);
        numsCopy = numsCopy.filter((number) => number !== arr[j]);
        setNums(numsCopy);
        setBucketsData(bucketsCopy);
      }
      arr = buckets.flat();
      for (let k = 0; k < arr.length; k++) {
        // pushing to nums
        setPushingToBuckets(false);
        await blocker(500);
        setCurrentNum(arr[k]);
        await blocker(500);
        numsCopy.push(arr[k]);
        bucketsCopy = bucketsCopy.map((bucket) =>
          bucket.filter((num) => num !== arr[k])
        );
        setBucketsData(bucketsCopy);
        setNums([...numsCopy]);
      }
    }
    resetStateInputs();
    return arr;
  };

  return (
    <div className="app-container">
      <div className="filename-tab">
        <img width="20" src={TsIcon} alt="typescript icon" />
        <span>radix-sort.tsx</span>
      </div>
      <div className="items-container">
        <div style={{ marginBottom: 30 }}>
          <Comment
            currentDigit={currentDigit}
            pushingToBuckets={pushingToBuckets}
            done={done}
          />
        </div>
        <Numbers
          currentNum={currentNum}
          currentDigit={currentDigit}
          nums={nums}
        />
        <Buckets
          currentNum={currentNum}
          currentDigit={currentDigit}
          buckets={bucketsData}
        />
        <span
          className="start"
          onClick={running ? () => {} : () => radixSort(nums)}
        >
          sort(<span style={{ color: "#9cddfd" }}>numbers</span>);
        </span>
      </div>
    </div>
  );
};

export default App;
