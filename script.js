document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 1000,
        once: true
    }); 
});

function openImage(imageUrl) {
    const newWindow = window.open("", "_blank", "width=800,height=600");
    newWindow.document.write(`
        <html>
            <head>
                <title>Project Screenshot</title>
                <style>
                    body {
                        text-align: center;
                        margin: 0;
                        padding: 20px;
                        background-color: #f4f4f4;
                    }
                    img {
                        max-width: 100%;
                        height: auto;
                    }
                    button {
                        margin-top: 10px;
                        padding: 8px 12px;
                        background-color: #007bff;
                        color: white;
                        border: none;
                        cursor: pointer;
                        border-radius: 5px;
                    }
                    button:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <img src="${imageUrl}" alt="Project Screenshot">
                <br>
                <button onclick="window.close()">Close</button>
            </body>
        </html>
    `);
}
