const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 1. MySQL Database Connection Configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // Ungal MySQL Username (Default: root)
    password: '',        // Ungal MySQL Password (Default: empty for XAMPP)
    database: 'local_service_finder'
});

db.connect((err) => {
    if (err) {
        console.error('MySQL Connection Error: ' + err.stack);
        return;
    }
    console.log('Successfully connected to MySQL Database.');
});

// 2. Ungal original 'customer.js'-ai maathamal athan behavior-ai intercept seiyum code inject seithu serve seigirom
app.get('/customer.js', (req, res) => {
    const jsPath = path.join(__dirname, 'public', 'customer.js');
    
    fs.readFile(jsPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(404).send('customer.js file not found inside public folder.');
        }

        // JS file-in mudhalil database-ku anupum functional code-ai interceptor aaga ianaikirom
        const interceptorCode = `
        // Save database backend hook
        const originalBookService = bookService;
        bookService = function() {
            let name = document.getElementById("customerName").value;
            let phone = document.getElementById("phone").value;
            let date = document.getElementById("date").value;
            let time = document.getElementById("time").value;
            let address = document.getElementById("address").value;

            if (name && phone && date && time && address) {
                fetch('/api/save-booking', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        selectedService,
                        name,
                        phone,
                        date,
                        time,
                        address
                    })
                })
                .then(res => res.json())
                .then(data => console.log('Saved to SQL:', data))
                .catch(err => console.error('Database Sync Error:', err));
            }
            originalBookService();
        };
        `;

        res.setHeader('Content-Type', 'application/javascript');
        res.send(interceptorCode + "\n" + data);
    });
});

// 3. Matra static files-ai serve seiya (customer.html, customer.css)
app.use(express.static(path.join(__dirname, 'public')));

// 4. Client klik seiyumpothu SQL Database-il save seiyum API route
app.post('/api/save-booking', (req, res) => {
    const { selectedService, name, phone, date, time, address } = req.body;

    const sqlQuery = `INSERT INTO bookings (service_name, customer_name, phone, booking_date, booking_time, address) 
                      VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(sqlQuery, [selectedService, name, phone, date, time, address], (err, result) => {
        if (err) {
            console.error('SQL Insertion Error:', err);
            return res.status(500).json({ status: 'Error', message: 'Failed to write on DB' });
        }
        res.status(200).json({ status: 'Success', bookingId: result.insertId });
    });
});

// Server-ai start seigiradhu
// Server-ai start seigiradhu
app.listen(PORT, () => {
    console.log("Server is running live on: http://localhost:" + PORT + "/customer.html");
});
