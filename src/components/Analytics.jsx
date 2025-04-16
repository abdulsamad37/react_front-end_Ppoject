import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  RadialLinearScale,  // Required for Radar chart
  RadarController,    // Use RadarController instead of RadarElement
  Tooltip as ChartTooltip,
  Legend,
} from "chart.js";

// Register necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,  // For Radar and Line charts
  LineElement,   // For Line charts
  RadialLinearScale, // For Radar charts
  RadarController,  // For Radar charts
  ChartTooltip,
  Legend
);

const Analytics = () => {
  const location = useLocation();
  const { state } = location;
  const { data = [], title = "Analytics", chartTypes = [] } = state || {};
  const [error, setError] = useState(null);

  // Generate chart data based on the provided inputData
  const generateChartData = (inputData, chartType) => {
    if (!inputData || inputData.length === 0) {
      setError("No data available");
      return null;
    }

    const labels = Object.keys(inputData[0] || {}).filter((key) => key !== "Country") || ["Category A", "Category B", "Category C"];
    const values = labels.map((label) =>
      inputData.reduce((acc, entry) => acc + (entry[label] || 0), 0)
    ) || [30, 40, 30];

    switch (chartType) {
      case "Pie":
        return {
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
              borderColor: "#fff",
              borderWidth: 1,
            },
          ],
        };

      case "Bar":
        return {
          labels,
          datasets: [
            {
              label: "Dataset",
              data: values,
              backgroundColor: "#36A2EB",
              borderColor: "#36A2EB",
              borderWidth: 1,
            },
          ],
        };

      case "Radar":
        return {
          labels,
          datasets: [
            {
              label: "Dataset",
              data: values,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "#36A2EB",
              borderWidth: 1,
            },
          ],
        };

      case "Line":
        return {
          labels,
          datasets: [
            {
              label: "Dataset",
              data: values,
              fill: false,
              borderColor: "#36A2EB",
              tension: 0.1,
            },
          ],
        };

      default:
        return null;
    }
  };

  useEffect(() => {
    if (data.length === 0 || chartTypes.length === 0) {
      setError("No data or chart types provided");
    }
  }, [data, chartTypes]);

  if (error) return <div className="text-danger">{error}</div>;

  return (
    <div className="container p-4">
      <h1 className="text-lg font-weight-bold mb-4">{title}</h1>
      <div className="row">
        {/* Iterate over chart types and display each chart */}
        {chartTypes.slice(0, 4).map((chartType, index) => {
          const chartData = generateChartData(data, chartType);
          if (!chartData) return null;

          return (
            <div key={index} className="col-md-6 col-lg-3 mb-4">
              <div className="bg-white rounded shadow-sm p-4">
                <h3 className="text-center mb-4">{chartType} Chart</h3>
                <div className="chart-container" style={{ height: "300px" }}>
                  {chartType === "Pie" && (
                    <Pie
                      data={chartData}
                      options={{
                        responsive: true,
                        plugins: {
                          tooltip: {
                            callbacks: {
                              label: function (context) {
                                let label = context.label || "";
                                if (label) {
                                  label += ": " + context.raw + "%";
                                }
                                return label;
                              },
                            },
                          },
                          legend: {
                            position: "top",
                          },
                        },
                      }}
                    />
                  )}
                  {chartType === "Bar" && (
                    <Bar
                      data={chartData}
                      options={{
                        responsive: true,
                        scales: {
                          x: { beginAtZero: true },
                          y: { beginAtZero: true },
                        },
                        plugins: {
                          legend: {
                            position: "top",
                          },
                        },
                      }}
                    />
                  )}
                  {chartType === "Radar" && (
                    <Radar
                      data={chartData}
                      options={{
                        responsive: true,
                        scales: {
                          r: {
                            min: 0,
                            max: 100,
                            ticks: {
                              stepSize: 20,
                            },
                          },
                        },
                        plugins: {
                          legend: {
                            position: "top",
                          },
                        },
                      }}
                    />
                  )}
                  {chartType === "Line" && (
                    <Line
                      data={chartData}
                      options={{
                        responsive: true,
                        scales: {
                          x: { beginAtZero: true },
                          y: { beginAtZero: true },
                        },
                        plugins: {
                          legend: {
                            position: "top",
                          },
                        },
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Fill empty space if there are fewer than 4 charts */}
        {chartTypes.length < 4 &&
          Array.from({ length: 4 - chartTypes.length }).map((_, index) => (
            <div key={`empty-${index}`} className="col-md-6 col-lg-3 mb-4">
              <div className="bg-light rounded shadow-sm p-4">
                <h3 className="text-center text-muted">Empty Card</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Analytics;
