require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

// Import routes
const roleRoute = require('./routes/roleRoute');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const animalRoute = require('./routes/animalRoute');
const outfitterRoute = require('./routes/outfitterRoute');
const quizRoute = require('./routes/quizRoute');
const slotRoute = require('./routes/slotRoute');
const guideRoute = require('./routes/guideRoute');
const clientRoute = require('./routes/clientRoute');
const bookingRoute = require('./routes/bookingRoute');
const { createPDF } = require('./functions/pdfGenerator');



// Environment variables
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
// const FRONTEND = process.env.FRONTEND;

const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Use cors middleware with options
// app.use(cors({
//     origin: 'http://localhost:3001', // Allow requests from frontend origin
//     credentials: true // Allow credentials (cookies, authorization headers, etc.)
//   }));

// Middleware
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/role', roleRoute);
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/animals', animalRoute);  // Added animal routes
app.use('/api/outfitter', outfitterRoute); //Added outfitter routes
app.use('/api/quiz', quizRoute); //Added quiz routes
app.use('/api/slot', slotRoute); //Added slot routes
app.use('/api/guide', guideRoute); //Added slot routes
app.use('/api/client', clientRoute); //Added slot routes
app.use('/api/booking', bookingRoute); //Added slot routes

app.post('/generate-pdf', async (req, res) => {
    try {
        const { id } = req.body;

        if (!id) {
            return res.status(400).send('Client ID is required');
        }

        const { pdfBuffer } = await createPDF(id);
        
        // Use encodeURIComponent to handle special characters in the file name
        // const fileName = `Report-${encodeURIComponent(id)}.pdf`;
        
        res.setHeader('Content-Type', 'application/pdf');
        // res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
        res.setHeader('Content-Length', pdfBuffer.length);
        
        // console.log("fileName",fileName);
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

// app.post('/generate-pdf2', async (req, res) => {
//        // HTML content from the request body or use default if not provided
//        const { htmlContent } = req.body;

//        // Default HTML content if not provided in request body
//        const defaulthtmlContent = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Uroflowmetry Report</title>
//         <style>
//             body {
//                 font-family: Arial, sans-serif;
//             }
//             table {
//                 width: 100%;
//                 border-collapse: collapse;
//             }
//             th, td {
//                 border: 1px solid black;
//                 padding: 8px;
//                 text-align: left;
//             }
//             .header-table, .data-table, .auto-eval-table {
//                 margin-bottom: 20px;
//             }
//             .header-table td {
//                 font-weight: bold;
//             }
//             .center {
//                 text-align: center;
//             }
//             .graph-container {
//                 width: 100%;
//                 height: 400px;
//                 position: relative;
//             }
//             canvas {
//                 border: 1px solid black;
//             }
//         </style>
//     </head>
//     <body>
//         <h1 class="center">UROFLOWMETRY</h1>

//         <table class="header-table">
//             <tr>
//                 <td>Patient name: <strong>Ar</strong></td>
//                 <td>Birthday: <strong>1/1/1980</strong></td>
//             </tr>
//             <tr>
//                 <td>Mother name: <strong>q</strong></td>
//                 <td>Identity: <strong>q</strong></td>
//             </tr>
//             <tr>
//                 <td>Measure time: <strong>8/22/2024 10:47:10 AM</strong></td>
//                 <td>ICD: <strong></strong></td>
//             </tr>
//         </table>

//         <table class="data-table">
//             <thead>
//                 <tr>
//                     <th>Marker data</th>
//                     <th>Left</th>
//                     <th>Difference</th>
//                     <th>Right</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Time (sec):</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td>Volume (ml):</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                 </tr>
//                 <tr>
//                     <td>Speed (ml/s):</td>
//                     <td></td>
//                     <td></td>
//                     <td></td>
//                 </tr>
//             </tbody>
//         </table>

//         <div class="graph-container">
//             <h3 class="center">Flow (Filtered)</h3>
//             <canvas id="flowChart"></canvas>
//         </div>

//         <table class="auto-eval-table">
//             <tr>
//                 <td>Total volume:</td>
//                 <td><strong>210.25 ml</strong></td>
//                 <td>Total measure time:</td>
//                 <td><strong>35.40 sec</strong></td>
//             </tr>
//             <tr>
//                 <td>Max. flow speed:</td>
//                 <td><strong>48.12 ml/s</strong></td>
//                 <td>Flow time:</td>
//                 <td><strong>19.90 sec</strong></td>
//             </tr>
//             <tr>
//                 <td>Average flow speed:</td>
//                 <td><strong>10.53 ml/s</strong></td>
//                 <td>Time of max. speed:</td>
//                 <td><strong>10.90 sec</strong></td>
//             </tr>
//         </table>

//         <h3 class="center">Report</h3>

//         <div style="width: 100%; display: flex; justify-content: space-between; padding-top: 30px;">
//             <div>
//                 <span style="border: 1px solid black; padding: 10px; border-radius: 50%; display: inline-block;">stamp</span>
//             </div>
//             <div style="width: 200px; border-bottom: 1px solid black;"></div>
//         </div>

//         <!-- Include Chart.js library -->
//         <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

//         <script>
//             // Static data for the graph
//             const ctx = document.getElementById('flowChart').getContext('2d');
//             const flowChart = new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45], // Time in seconds
//                     datasets: [
//                         {
//                             label: 'Flow (ml/sec)',
//                             data: [0, 10, 30, 45, 60, 75, 60, 45, 30, 0], // Static flow data
//                             borderColor: 'blue',
//                             borderWidth: 2,
//                             fill: false,
//                         },
//                         {
//                             label: 'Volume (ml)',
//                             data: [0, 5, 15, 25, 45, 50, 40, 30, 20, 10], // Static volume data
//                             borderColor: 'green',
//                             borderWidth: 2,
//                             fill: false,
//                         }
//                     ]
//                 },
//                 options: {
//                     scales: {
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: 'Time (sec)'
//                             }
//                         },
//                         y: {
//                             title: {
//                                 display: true,
//                                 text: 'Flow / Volume (ml/sec or ml)'
//                             },
//                             beginAtZero: true
//                         }
//                     }
//                 }
//             });
//         </script>

//     </body>
//     </html>
//     `;
   
//        const content = htmlContent || defaulthtmlContent;  // Use the provided HTML content or default one
   
//        try {
//            const browser = await puppeteer.launch({
//                headless: true,
//                args: ['--no-sandbox', '--disable-setuid-sandbox'],
//            });
   
//            const page = await browser.newPage();
//            await page.setContent(content, { waitUntil: 'networkidle0' });
   
//            // Path to save the PDF file
//            const pdfPath = path.join(__dirname, 'uroflowmetry-report.pdf');
   
//            // Generate the PDF
//            await page.pdf({
//                path: pdfPath,
//                format: 'A4',
//                printBackground: true,
//            });
   
//            await browser.close();
   
//            // Send the PDF file as a response
//            res.set({
//                'Content-Type': 'application/pdf',
//                'Content-Disposition': `attachment; filename=uroflowmetry-report.pdf`,
//            });
//            res.sendFile(pdfPath, (err) => {
//                if (err) {
//                    console.error('Error sending file:', err);
//                    res.status(500).send({ error: 'Error sending PDF file' });
//                }
   
//                // Optional: Delete the file after sending
//                fs.unlink(pdfPath, () => {});
//            });
   
//            console.log('PDF created successfully.');
//        } catch (error) {
//            console.error('Error creating PDF:', error);
//            res.status(500).send({ error: 'Failed to generate PDF' });
//        }
//    });


// Response handler middleware


app.use((obj, req, res, next) => {
    const statusCode = obj.status || 500;
    const message = obj.message || "Something went wrong!";
    return res.status(statusCode).json({
        success: [200, 201, 204].includes(obj.status),
        status: statusCode,
        message: message,
        data: obj.data
    });
});

// Database connection
mongoose.set("strictQuery", false);
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log('connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Node API app is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });

module.exports = app;
