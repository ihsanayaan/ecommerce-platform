import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const OrderStatus = ({ orderId }) => {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "orders", orderId), (docSnap) => {
      if (docSnap.exists()) {
        setStatus(docSnap.data().status);
      } else {
        setStatus("Order not found");
      }
    });

    return () => unsub();
  }, [orderId]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">Order Tracking</h2>
      <p>Status: <span className="font-semibold">{status}</span></p>
    </div>
  );
};

export default OrderStatus;
