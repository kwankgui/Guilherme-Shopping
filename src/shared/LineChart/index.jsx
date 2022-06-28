import React from "react";
import { Percentage, ProgressBar, Wrapper } from "./styles";

function LineChart({ title, percentage, color }) {
    return <Wrapper>
        <span>
            {title}:
        </span>
        <ProgressBar
            percentage={percentage}
            color={color}
        />
        <Percentage>
            {percentage.toFixed(2).replace(".", ",")}%
        </Percentage>
    </Wrapper>
}

export default LineChart;