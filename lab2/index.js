import { writeFile, readFile, appendFile } from "fs/promises";

// writeFile
// await writeFile("stud.txt", "Raj Bhatnagar");
// console.log("file created succesfully");

// readFile
// without await the output will be [object Promise]
//const data = await readFile("stud.txt", "utf-8");
//console.log(`file contents: ${data}`);

const addContent = async (fname, content) => {
    await writeFile(fname, content);
    console.log("File created successfully");
};

const readContent = async (fname) => {
    const data = await readFile(fname, "utf-8");
    console.log(`File contents: ${data}`);
};

const appendContent = async (fname, content) => {
    await appendFile(fname, "\n" + content);
    console.log("data appended");
};

await addContent("note.txt", "It is easy in JS");
await readContent("note.txt");
await appendContent("note.txt","we study js after studing html and css");