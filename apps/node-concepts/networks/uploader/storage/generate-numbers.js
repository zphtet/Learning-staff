const fs = require('fs');
const path = require('path');

const NUMBERS_TO_GENERATE = 500000000;
const BATCH_SIZE = 1000000; // Process in batches of 1 million numbers
const OUTPUT_FILE = path.join(__dirname, 'numbers.txt');

const writeStream = fs.createWriteStream(OUTPUT_FILE);

let numbersGenerated = 0;
let batch = [];

function writeBatch() {
    if (batch.length > 0) {
        const canWrite = writeStream.write(batch.join(' ') + ' ');
        batch = []; // Clear the batch after writing
        
        if (!canWrite) {
            writeStream.once('drain', () => {
                generateNumbers();
            });
            return;
        }
    }
    generateNumbers();
}

function generateNumbers() {
    while (numbersGenerated < NUMBERS_TO_GENERATE) {
        batch.push(numbersGenerated);
        numbersGenerated++;
        
        if (numbersGenerated % 10000000 === 0) {
            console.log(`Generated ${numbersGenerated} numbers...`);
        }
        
        if (batch.length >= BATCH_SIZE) {
            writeBatch();
            return;
        }
    }
    
    // Write any remaining numbers
    if (batch.length > 0) {
        writeStream.write(batch.join(' ') + ' ');
    }
    
    writeStream.end(() => {
        console.log(`Generated ${numbersGenerated} numbers successfully!`);
    });
}

console.log('Starting number generation...');
generateNumbers(); 