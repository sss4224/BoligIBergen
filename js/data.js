
// BOLIG DATA
document.addEventListener("DOMContentLoaded", function () {

    // DOUGHNUT GRAPH - BOX 2

    const doughnutChart = document.querySelector("#doughnut-chart");

    new Chart(doughnutChart, {
        type: "doughnut",
        data: {
            labels: ["Sentrum", "Fana", "Åsane"],
            datasets: [{
                backgroundColor: ["#367CFF", "#FF6FAE", "#F5C542"],
                data: [74266, 51733, 41633]
            }]
        },
        options: {
            title: {
                display: true,
                text: "Gjennomsnittligpris per m2 for 2024-2026"
            }
        }
    });


    // LINE GRAPH - BOX 3
 

    const linearChart = document.getElementById("linearChart");

    new Chart(linearChart, {
        type: "line",

        data: {
            labels: ["2024", "2025", "2026"],

            datasets: [{
        label: "Sentrum",
        data: [68500, 74000, 80300],
        fill: false,
        lineTension: 0.3,

        borderColor: "#367CFF",
        backgroundColor: "#367CFF",

        pointBackgroundColor: "#367CFF",
        pointBorderColor: "#367CFF",
        pointRadius: 5
    },

    {
        label: "Fana",
        data: [48500, 51500, 55200],
        fill: false,
        lineTension: 0.3,

        borderColor: "#FF6FAE",
        backgroundColor: "#FF6FAE",

        pointBackgroundColor: "#FF6FAE",
        pointBorderColor: "#FF6FAE",
        pointRadius: 5
    },

    {
        label: "Åsane",
        data: [39000, 41500, 44400],
        fill: false,
        lineTension: 0.3,

        borderColor: "#F5C542",
        backgroundColor: "#F5C542",

        pointBackgroundColor: "#F5C542",
        pointBorderColor: "#F5C542",
        pointRadius: 5
    }
    ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Boligpriser per m²"
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,

                        callback: function(value) {
                            return value.toLocaleString("nb-NO") + " kr";
                        }
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Pris per m²"
                    }
                }],

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "År"
                    }
                }]
            }
        }
    });



    // COLUMN GRAPH - BOX 4
  
    const columnChart = document.getElementById("columnChart");

    new Chart(columnChart, {
        type: "bar",

        data: {
            labels: ["2024", "2025", "2026"],

            datasets: [
    {
        label: "Sentrum",
        data: [68500, 74000, 80300],

        backgroundColor: "#367CFF",
        borderColor: "#367CFF",
        borderWidth: 1
    },

    {
        label: "Fana",
        data: [48500, 51500, 55200],

        backgroundColor: "#FF6FAE",
        borderColor: "#FF6FAE",
        borderWidth: 1
    },

    {
        label: "Åsane",
        data: [39000, 41500, 44400],

        backgroundColor: "#F5C542",
        borderColor: "#F5C542",
        borderWidth: 1
    }
    ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,

            title: {
                display: true,
                text: "Sammenligning av boligpriser"
            },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false,

                        callback: function(value) {
                            return value.toLocaleString("nb-NO") + " kr";
                        }
                    },

                    scaleLabel: {
                        display: true,
                        labelString: "Pris per m²"
                    }
                }],

                xAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: "År"
                    }
                }]
            }
        }
    });

});