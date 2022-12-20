import React, { useState } from "react";

const Mopen = ({ on, setOn }) => {
  return (
    <div className={`mopen ${on ? "os" : ""}`} onClick={() => setOn(!on)}>
      <button>모바일메뉴열기</button>
    </div>
  );
};

export default Mopen;
