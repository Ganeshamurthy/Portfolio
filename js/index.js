function resume($file) {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    
    // Create a temporary link element
    var link = document.createElement('a');

    // Set the download attribute with the filename
    link.download = 'Ganeshamurthy_K_CV.pdf';

    // Set the href attribute with the path to the resume file
    link.href = $file;

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
}

function button($link) {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    
    // Create a temporary link element
    var link = document.createElement('a');

    // Set the href attribute with the path to the resume file
    link.href = $link;

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the click event to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
}