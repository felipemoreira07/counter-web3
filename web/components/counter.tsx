import { prepareContractCall } from "thirdweb";
import { contract } from "../utils/constants";
import {
  TransactionButton,
  useReadContract,
  useSendTransaction,
} from "thirdweb/react";

export const Counter: React.FC = () => {
  const {
    data: count,
    isPending: isCountPending,
    refetch,
  } = useReadContract({
    contract,
    method: "function getCount() view returns (int256)",
    params: [],
  });

  const { mutate: sendTransaction } = useSendTransaction();

  const onIncrement = () => {
    const transaction = prepareContractCall({
      contract,
      method: "function increment()",
      params: [],
    });
    sendTransaction(transaction);
  };

  const onDecrement = () => {
    const transaction = prepareContractCall({
      contract,
      method: "function decrement()",
      params: [],
    });
    sendTransaction(transaction);
  };

  const increment = prepareContractCall({
    contract,
    method: "function increment()",
    params: [],
  });

  const decrement = prepareContractCall({
    contract,
    method: "function decrement()",
    params: [],
  });

  return (
    <div
      style={{
        marginTop: "1.2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ marginBottom: "4" }}>Counter</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "1.4rem" }}>
        {/* <button
          style={{
            background: "white",
            color: "black",
            borderRadius: "9999rem",
            fontSize: "1.5rem",
            width: "2rem",
            height: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={onDecrement}
        >
          -
        </button> */}
        <TransactionButton
          transaction={() => decrement}
          onTransactionSent={() => console.log("decrementing...")}
          onTransactionConfirmed={() => refetch()}
        >
          -
        </TransactionButton>
        {isCountPending ? <h2>...</h2> : <h2>{count?.toString()}</h2>}
        {/* <button
          style={{
            background: "white",
            color: "black",
            borderRadius: "9999rem",
            fontSize: "1.5rem",
            width: "2rem",
            height: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={onIncrement}
        >
          +
        </button> */}
        <TransactionButton
          transaction={() => increment}
          onTransactionSent={() => console.log("incrementing...")}
          onTransactionConfirmed={() => refetch()}
        >
          +
        </TransactionButton>
      </div>
    </div>
  );
};
