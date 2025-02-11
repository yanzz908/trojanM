const readline = require('readline');
const { exec } = require('child_process');

// Fungsi untuk animasi mengetik
function typingAnimation(text, delay = 100) {
    let index = 0;
    const interval = setInterval(() => {
        process.stdout.write(text[index]);
        index++;

        if (index === text.length) {
            clearInterval(interval);
            console.log(); // newline after typing is complete
            setTimeout(() => {
                process.exit(0); // Exit Termux after animation is done
            }, 500); // small delay before exiting
        }
    }, delay);
}

// Menambahkan waktu otomatis ke teks
function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// ANSI escape codes untuk teks berwarna
const colors = {
    reset: '\x1b[0m', // Reset default color
    bold: '\x1b[1m', // Bold text
    red: '\x1b[31m', // Red text
    green: '\x1b[32m', // Green text
    yellow: '\x1b[33m', // Yellow text
    blue: '\x1b[34m', // Blue text
    underline: '\x1b[4m' // Underlined text
};

// Tampilkan teks neon besar di awal
exec('figlet "Create By Yan Official"', (err, stdout, stderr) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }
    // Tampilkan teks besar neon pertama
    console.log(`${colors.green}${stdout}${colors.reset}`);

    // Teks berikutnya yang akan ditampilkan dengan kalimat yang lebih baik dan warna
    const text = `${colors.bold}${colors.red}Melakukan serangan secara online adalah tindakan yang sangat tidak bijaksana.${colors.reset} ${colors.green}Sebaiknya segera bertobat dan berhenti dari kegiatan tersebut, karena dampaknya bisa sangat merugikan.${colors.reset} ${colors.blue}Anda adalah orang pertama yang menjalankan skrip ini pada jam ${getCurrentTime()}.${colors.reset} ${colors.yellow}Semoga ini menjadi peringatan bagi Anda untuk tidak melanjutkan hal-hal yang dapat merusak masa depan Anda.${colors.reset}`;

    // Tampilkan teks dengan animasi
    typingAnimation(text, 100);
});