/*eslint-disable*/

import styled from 'styled-components';
import React from 'react';
import Chart from 'chart.js/auto';
// eslint-disable-next-line import/no-unresolved
import {Line} from 'react-chartjs-2';

const data = {
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            data: [
                { x: 'January', y: 1 },
                { x: 'February', y: 2 },
                { x: 'March', y: 3 },
                { x: 'April', y: null },
                { x: 'May', y: 5 }
            ],
            yAxisID: 'y_sub',
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [
                { x: 'January', y: 14 },
                { x: 'February', y: 20 },
                { x: 'March', y: 32 },
                { x: 'April', y: 41 },
                { x: 'May', y: 15 },
                { x: 'June', y: 26 }
            ],
            borderColor: 'red',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            backgroundColor: 'rgb(75, 192, 192)',
            data: [
                { x: 'January', y: 1 },
                { x: 'February', y: 2 },
                { x: 'March', y: 3 },
                { x: 'April', y: 4 },
                { x: 'May', y: 5 },
                { x: 'June', y: 6 }
            ],
            yAxisID: 'y_sub',
        },
    ],
};

const options = {
    spanGaps: true,
    maxBarThickness: 30,
    grouped: true,
    interaction: {
        mode: 'index',
    },
    plugins: {
        legend: {
            labels: {
                usePointStyle: true,
                padding: 10,
                font: {
                    family: "'Noto Sans KR', 'serif'",
                    lineHeight: 1,
                },
            }
        },
        tooltip: {
            backgroundColor: 'rgba(124, 35, 35, 0.4)',
            padding: 10,
            bodySpacing: 5,
            bodyFont: {
                font: {
                    family: "'Noto Sans KR', sans-serif",
                }
            },
            usePointStyle: true,
            filter: (item) => item.parsed.y !== null,
            callbacks: {
                title: (context) => `${context[0].label  }🐽`,
                label: (context) => {
                    const label = `${context.dataset.label  }` || '';

                    return context.parsed.y !== null
                        ? `${label  }: ${  context.parsed.y  }배`
                        : null;
                },
            },
        },
    },
    scales: {
        x: {
            afterTickToLabelConversion (scaleInstance) {
                const ticks = scaleInstance.ticks;

                const newTicks = ticks.map((tick) => {
                    return {
                        ...tick,
                        label: `${tick.label  }`
                    //    여기에 x축 데이터를 씁니다
                    };
                });

                scaleInstance.ticks = newTicks;
            },
            grid: {
                display: false,
                drawTicks: true,
                tickLength: 4,
                color: '#E2E2E230'
            },
            axis: 'x',
            position: 'bottom',
            ticks: {
                minRotation: 45,
                padding: 5,
            },
        },
        y: {
            type: 'linear',
            grid: {
                color: '#E2E2E230',
            },
            afterDataLimits: (scale) => {
                scale.max *= 1.2;
            },
            axis: 'y',
            display: true,
            position: 'left',
            title: {
                display: true,
                align: 'end',
                color: '#808080',
                font: {
                    size: 12,
                    family: "'Noto Sans KR', sans-serif",
                    weight: 300,
                },
                text: '단위: 개'
            }
        },
        y_sub: {
            position: 'right',
            title: {
                display: true,
                align: 'end',
                color: '#808080',
                font: {
                    size: 12,
                    family: "'Noto Sans KR', sans-serif",
                    weight: 300,
                },
                text: '단위: 배'
            },
            afterDataLimits: (scale) => {
                scale.max *= 1.2;
            },
        },
    }
};



const abandonedChart = () => {
    return (
        <Container>
               <h5>보호소 현황 차트입니다</h5>

            <Line type="line" data={data} options={options} />
        </Container>
    );
};

export default abandonedChart;

const Container = styled.div`
  width: 90vw;
  max-width: 900px;
`;