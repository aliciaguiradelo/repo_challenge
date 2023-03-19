export const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['Dados'];
  
  export const categoryData = {
    labels,
    datasets: [
      {
        label: 'Curtidas',
        data: [40],
        backgroundColor: '#FF4545',
      },
      {
        label: 'Comentários',
        data: [12],
        backgroundColor: '#2453FF',
      },
      {
        label: 'Compartilhamentos',
        data: [60],
        backgroundColor: '#81FF7F',
      },
    ],
  };

  export const categoryPieData = {
    labels: ['Educação Financeira', 'Bolsa de Valores', 'Ações', 'IPOs'],
    datasets: [
      {
        label: 'Qtd. de matérias',
        data: [12, 19, 3, 5],
        backgroundColor: [
          '#005BAAFB',
          '#8E599B',
          '#32C352',
          '#D18B57',
        ]
      },
    ],
  };