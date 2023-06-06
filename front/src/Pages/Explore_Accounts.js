import React, { useEffect } from "react";

function Explore_Accounts({ accounts }) {
  console.log(accounts);

  return (
    <>
      {accounts.map((account) => (
        <div key={account.id}>
          <p>{account.name}</p>
        </div>
      ))}
    </>
  );
}

export default Explore_Accounts;
