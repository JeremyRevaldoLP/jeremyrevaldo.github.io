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
            </head>
            <body style="text-align:center; margin:0; padding:20px; background-color:#f4f4f4;">
                <img src="${imageUrl}" style="max-width:100%; height:auto;">
                <br><button onclick="window.close()" style="margin-top:10px;">Close</button>
            </body>
        </html>
    `);
}