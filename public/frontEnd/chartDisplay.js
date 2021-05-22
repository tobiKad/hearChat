// create an graph object
let ctx = document.getElementById('myChart').getContext('2d');
const data = {
    labels: '',
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [],
    }],

};
// configure the graphs
const config = {
    type: 'line',
    data,
    options: {
        responsive: true,
    }
};
// init local varialbes
let chart = new Chart(ctx, config);
let timer = 4;
let defArray = [];
let heartData = [];
// init the socket.io connection
const socket = io('http://localhost:8082');
socket.on('map', function (data) {
    document.getElementById('pulse').innerHTML = data;
    heartData.push(parseInt(data));
    heartData = heartData.slice(-500);
    return heartData
});
// init the call back function for the data displaying
setInterval(() => {
    console.log(heartData.length);
    chart.data.datasets[0].data = heartData;
    chart.data.labels = heartData;
    chart.update();
}, 1000);