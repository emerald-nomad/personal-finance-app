"use client";

import { ArcElement, Chart, PieController } from "chart.js";
import clsx from "clsx";
import { useEffect } from "react";
import styles from "./chart.module.scss";

interface BudgetChartProps {
  id: string;
}

export function BudgetChart({ id }: BudgetChartProps) {
  useEffect(() => {
    createChart();
  }, []);

  function createChart() {
    const ctx = document.getElementById(id)!;
    console.log({ ctx });

    Chart.register([ArcElement, PieController]);

    new Chart(ctx as HTMLCanvasElement, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }

  return (
    <div className={clsx([styles["chart-container"]])}>
      <canvas id={id}></canvas>
      <Overlay />
      <TextOverlay />
      <div className={clsx([styles["text"]])}>
        <span className={clsx(["text-preset-1"])}>$338</span>
        <span className={clsx(["text-preset-5", styles["small-text"]])}>
          of $975 limit
        </span>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="188"
      height="188"
      viewBox="0 0 188 188"
      fill="none"
      className={clsx([styles["overlay"]])}
    >
      <circle
        opacity="0.25"
        cx="94.2501"
        cy="93.7501"
        r="93.7501"
        fill="white"
      />
    </svg>
  );
}

function TextOverlay() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="163"
      height="162"
      viewBox="0 0 163 162"
      fill="none"
      className={clsx([styles["text-overlay"]])}
    >
      <circle cx="81.5" cy="81.0001" r="81" fill="white" />
    </svg>
  );
}
