<template>
    <div class="bg-white rounded-lg p-4 shadow-sm">
        <h3 class="text-sm font-semibold mb-2"></h3>
        <Line :data="chartData" :options="chartOptions" />
    </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3'],
    datasets: [
        {
            label: 'Objetivos cumplidos',
            data: [3, 5, 4],
            fill: false,
            borderColor: '#15803d',
            tension: 0.3,
        }
    ]
}

const chartOptions = {
    responsive: true,
    plugins: {
        legend: { display: false }
    },
    scales: {
        y: {
            beginAtZero: true,
            suggestedMax: 7
        }
    }
}
</script>
