import React from "react";

import Container from "../container";
import * as style from "./demo3.style";

function Demo3() {
  return (
    <Container>
      <div className={style.outer}>
        <h3 className={style.inner}>Some text for Demo 3</h3>
      </div>
    </Container>
  );
}

export default Demo3;
