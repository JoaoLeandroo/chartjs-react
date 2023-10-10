import {
  Chart as CharJs,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import './App.css'

export default function App() {
  
  CharJs.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
  )
  const data = {
    labels: ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sabado"],
    datasets: [{
      label: "Teste",
      data: [30, 33, 66, 50, 29, 55, 60],
      borderColor: "aqua",
      tension: 0.4
    },
    {
      label: "teste 2",
      data: [40, 45, 55, 40, 60, 60, 42],
      borderColor: "red",
      tension: 0.4
    }
  ]
  }

  const options = {

  }

  return(
    <div className='container'>
      <Line
        data = {data}
        options = {options}
      >
      </Line>
    </div>
  )
}