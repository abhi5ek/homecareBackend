const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    // HTML content as a string
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Uroflowmetry Report</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }
            th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: left;
            }
            .header-table, .data-table, .auto-eval-table {
                margin-bottom: 20px;
            }
            .header-table td {
                font-weight: bold;
            }
            .center {
                text-align: center;
            }
            .graph-container {
                width: 100%;
                height: 400px;
                position: relative;
            }
            canvas {
                border: 1px solid black;
            }
        </style>
    </head>
    <body>
        <h1 class="center">UROFLOWMETRY</h1>

        <table class="header-table">
            <tr>
                <td>Patient name: <strong>Ar</strong></td>
                <td>Birthday: <strong>1/1/1980</strong></td>
            </tr>
            <tr>
                <td>Mother name: <strong>q</strong></td>
                <td>Identity: <strong>q</strong></td>
            </tr>
            <tr>
                <td>Measure time: <strong>8/22/2024 10:47:10 AM</strong></td>
                <td>ICD: <strong></strong></td>
            </tr>
        </table>

        <table class="data-table">
            <thead>
                <tr>
                    <th>Marker data</th>
                    <th>Left</th>
                    <th>Difference</th>
                    <th>Right</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Time (sec):</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Volume (ml):</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Speed (ml/s):</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>

        <div class="graph-container">
            <h3 class="center">Flow (Filtered)</h3>
            <canvas id="flowChart"></canvas>
        </div>

        <table class="auto-eval-table">
            <tr>
                <td>Total volume:</td>
                <td><strong>210.25 ml</strong></td>
                <td>Total measure time:</td>
                <td><strong>35.40 sec</strong></td>
            </tr>
            <tr>
                <td>Max. flow speed:</td>
                <td><strong>48.12 ml/s</strong></td>
                <td>Flow time:</td>
                <td><strong>19.90 sec</strong></td>
            </tr>
            <tr>
                <td>Average flow speed:</td>
                <td><strong>10.53 ml/s</strong></td>
                <td>Time of max. speed:</td>
                <td><strong>10.90 sec</strong></td>
            </tr>
        </table>

        <h3 class="center">Report</h3>

        <div style="width: 100%; display: flex; justify-content: space-between; padding-top: 30px;">
            <div>
                <span style="border: 1px solid black; padding: 10px; border-radius: 50%; display: inline-block;">stamp</span>
            </div>
            <div style="width: 200px; border-bottom: 1px solid black;"></div>
        </div>

        <!-- Include Chart.js library -->
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <script>
            // Static data for the graph
            const ctx = document.getElementById('flowChart').getContext('2d');
            const flowChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45], // Time in seconds
                    datasets: [
                        {
                            label: 'Flow (ml/sec)',
                            data: [0, 10, 30, 45, 60, 75, 60, 45, 30, 0], // Static flow data
                            borderColor: 'blue',
                            borderWidth: 2,
                            fill: false,
                        },
                        {
                            label: 'Volume (ml)',
                            data: [0, 5, 15, 25, 45, 50, 40, 30, 20, 10], // Static volume data
                            borderColor: 'green',
                            borderWidth: 2,
                            fill: false,
                        }
                    ]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Time (sec)'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Flow / Volume (ml/sec or ml)'
                            },
                            beginAtZero: true
                        }
                    }
                }
            });
        </script>

    </body>
    </html>
    `;
    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });
        
        const page = await browser.newPage();
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
    
        await page.pdf({
            path: 'uroflowmetry-report.pdf',
            format: 'A4',
            printBackground: true
        });
    
        console.log('PDF created successfully.');
        await browser.close();
    } catch (error) {
        console.error('Error creating PDF:', error);
    }
    

   
})();
